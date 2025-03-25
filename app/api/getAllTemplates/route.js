
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET() {
  try {

    // Get all the templates from the 'designs' table
    let { data, error } = await supabase
        .from('designs')
        .select('*')

    // Handle any errors during the insertion
    if (error) {
      return NextResponse.json(
        { error: 'Error inserting design data' },
        { status: 500, success: false }
      );
    }

    // Return the inserted data
    return NextResponse.json(data, {success: true}, { status: 200 });
  } catch (error) {
    // Handle unexpected errors
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500, success: true }
    );
  }
}



          