// app/api/razorpay/route.js
import Razorpay from 'razorpay';
import { supabase } from '../../../lib/supabaseClient'; // Adjust the path as necessary

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

export async function POST(req) {
  const { amount, userId } = await req.json(); // Parse JSON body

  try {
    // Create a Razorpay order
    const order = await razorpay.orders.create({
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      receipt: `receipt#${Date.now()}`,
      payment_capture: 1,
    });

    // Save the order id to Supabase user table (or any other table)
    const { data, error } = await supabase
      .from('users')
      .update({ razorpay_order_id: order.id })
      .eq('id', userId);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }

    return new Response(JSON.stringify({ orderId: order.id }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
