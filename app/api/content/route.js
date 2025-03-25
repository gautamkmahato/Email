import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(request) {
  try {
    // Parse the incoming JSON request body
    const { id } = await request.json();

    // Validate required fields
    if (!id) {
      return NextResponse.json(
        { error: 'Missing Id field' },
        { status: 400 }
      );
    }

    // Fetch the design data from the 'designs' table using the provided 'id'
    const { data, error } = await supabase
      .from('designs')
      .select('*')
      .eq('id', id)
      .single();

    // Handle any errors during the data retrieval
    if (error) {
      return NextResponse.json(
        { error: 'Design not found' },
        { status: 404 }
      );
    }

    // Return the inserted data
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    // Handle unexpected errors
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
