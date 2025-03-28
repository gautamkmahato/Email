// app/api/webhook/route.js
import { supabase } from '../../../lib/supabaseClient'; // Adjust the path as necessary
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false, // Razorpay sends raw JSON data
  },
};

const verifyWebhook = (payload, sig) => {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const generatedSignature = razorpay.utils.verifyWebhookSignature(payload, sig, secret);
  return generatedSignature;
};

export async function POST(req) {
  const sig = req.headers.get('x-razorpay-signature');
  const buf = await req.arrayBuffer();
  const payload = buf.toString();

  try {
    const isValid = verifyWebhook(payload, sig);
    if (!isValid) {
      return new Response(JSON.stringify({ error: 'Invalid signature' }), { status: 400 });
    }

    const event = JSON.parse(payload);

    if (event.event === 'payment.success') {
      const paymentId = event.payload.payment.entity.id;
      const orderId = event.payload.payment.entity.order_id;

      // Update payment status in Supabase
      const { data, error } = await supabase
        .from('users')
        .update({ payment_status: 'success', razorpay_payment_id: paymentId })
        .eq('razorpay_order_id', orderId);

      if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
      }

      return new Response(JSON.stringify({ message: 'Payment success' }), { status: 200 });
    } else if (event.event === 'payment.failed') {
      const orderId = event.payload.payment.entity.order_id;

      // Update payment status in Supabase
      const { data, error } = await supabase
        .from('users')
        .update({ payment_status: 'failed' })
        .eq('razorpay_order_id', orderId);

      if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
      }

      return new Response(JSON.stringify({ message: 'Payment failed' }), { status: 200 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Webhook verification failed' }), { status: 400 });
  }
}
