export function getSupabaseEnvironment() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !publishableKey) {
    throw new Error(
      "Missing Supabase environment variables. Copy .env.example to .env.local and add the project URL and publishable key.",
    );
  }

  return { url, publishableKey };
}
