import { supabase } from "../../../lib/supabaseClient";

export async function POST(req) {
  try {
    const body = await req.json();

    const { full_name, phone, email, service, date, message } = body;

    const { error } = await supabase.from("bookings").insert([
      { full_name, phone, email, service, date, message },
    ]);

    if (error) throw error;

    return new Response(JSON.stringify({ success: true, message: "Booking successful" }), {
      status: 201,
    });
  } catch (err) {
    console.error("API error:", err.message);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}