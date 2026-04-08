// src/app/api/bookings/route.js
import { supabase } from '../../../lib/supabaseClient';

export async function POST(req) {
  try {
    const data = await req.json();

    const { error } = await supabase.from('bookings').insert([data]);

    if (error) throw error;

    return new Response(JSON.stringify({ message: 'Booking created successfully' }), {
      status: 201,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}