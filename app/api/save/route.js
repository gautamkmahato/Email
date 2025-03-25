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
    const { design, system_prompt, prompt, email_from, user_id } = await request.json();

    // Validate required fields
    if (!design || !system_prompt || !prompt || !email_from || !user_id) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if the user_id exists in the 'users' table
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('id')
      .eq('id', user_id)
      .single();

    // Handle any errors during the user check
    if (userError) {
      return NextResponse.json(
        { error: 'Error checking user existence' },
        { status: 500 }
      );
    }

    // If no user is found, return an error
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid user_id: User does not exist' },
        { status: 400 }
      );
    }

    // Insert data into the 'designs' table
    const { data, error } = await supabase
      .from('designs')
      .insert([
        {
          design,
          system_prompt,
          prompt,
          email_from,
          user_id,
        },
      ])
      .select();

    // Handle any errors during the insertion
    if (error) {
      return NextResponse.json(
        { error: 'Error inserting design data' },
        { status: 500 }
      );
    }

    // Return the inserted data
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    // Handle unexpected errors
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
