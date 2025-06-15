const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('Supabase URL:', supabaseUrl ? 'Set' : 'Not set');
console.log('Supabase Anon Key:', supabaseAnonKey ? 'Set' : 'Not set');

// Only throw error if we're trying to use Supabase features
// This allows the app to run without Supabase configured
let supabase: any = null;

if (supabaseUrl && supabaseAnonKey) {
  try {
    const { createClient } = await import('@supabase/supabase-js');
    supabase = createClient(supabaseUrl, supabaseAnonKey);
    console.log('Supabase client created successfully');
  } catch (error) {
    console.error('Error creating Supabase client:', error);
  }
} else {
  console.warn('Supabase environment variables not configured. Email capture features will be disabled.');
}

export { supabase };

// Types for email capture
export interface EmailCapture {
  id?: string;
  email: string;
  pdf_name: string;
  pdf_title: string;
  ip_address?: string;
  user_agent?: string;
  created_at?: string;
}

export interface EmailCaptureStats {
  total_downloads: number;
  unique_emails: number;
  popular_pdfs: Array<{
    pdf_title: string;
    download_count: number;
  }>;
}