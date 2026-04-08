import { supabase } from "@/lib/supabaseClient";

export async function POST(req) {
  try {
    const data = await req.json();

    // ✅ Log incoming booking (for debugging)
    console.log("New Booking:", data);

    // ✅ Save booking to Supabase
    const { error } = await supabase.from("bookings").insert([
      {
        full_name: data.fullName,
        phone: data.phone,
        email: data.email,
        service: data.service,
        preferred_date: data.date,
        message: data.message,
      },
    ]);

    if (error) {
      console.error("Supabase Error:", error);
      throw error;
    }

    // ✅ Success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Booking saved successfully!",
      }),
      { status: 200 }
    );

  } catch (err) {
    console.error("API Error:", err);

    return new Response(
      JSON.stringify({
        success: false,
        message: err.message || "Something went wrong",
      }),
      { status: 500 }
    );
  }
}