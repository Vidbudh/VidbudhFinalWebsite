import { supabase, EmailCapture, EmailCaptureStats } from '../lib/supabase';

export class EmailCaptureService {
  static async captureEmail(data: Omit<EmailCapture, 'id' | 'created_at'>): Promise<boolean> {
    try {
      // If Supabase is not configured, just return true to allow download
      if (!supabase) {
        console.warn('Supabase not configured - email capture skipped');
        alert('Supabase not configured - email capture skipped, but download will proceed');
        return true;
      }

      console.log('Attempting to capture email:', data);

      // Get user's IP address (optional)
      let ipAddress = '';
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        ipAddress = ipData.ip;
      } catch (error) {
        console.warn('Could not fetch IP address:', error);
      }

      // Get user agent
      const userAgent = navigator.userAgent;

      const insertData = {
        ...data,
        ip_address: ipAddress,
        user_agent: userAgent,
      };

      console.log('Inserting data to Supabase:', insertData);

      const { data: insertedData, error } = await supabase
        .from('email_captures')
        .insert([insertData])
        .select();

      if (error) {
        console.error('Supabase error storing email capture:', error);
        alert(`Error storing email: ${error.message}`);
        return false;
      }

      console.log('Successfully stored email capture:', insertedData);
      return true;
    } catch (error) {
      console.error('Email capture service error:', error);
      alert(`Email capture error: ${error.message}`);
      // Return true to allow download even if storage fails
      return true;
    }
  }

  static async getDownloadStats(): Promise<EmailCaptureStats | null> {
    try {
      if (!supabase) {
        return null;
      }

      // Get total downloads
      const { count: totalDownloads } = await supabase
        .from('email_captures')
        .select('*', { count: 'exact', head: true });

      // Get unique emails
      const { data: uniqueEmailsData } = await supabase
        .from('email_captures')
        .select('email')
        .group('email');

      // Get popular PDFs
      const { data: popularPdfs } = await supabase
        .rpc('get_popular_pdfs');

      return {
        total_downloads: totalDownloads || 0,
        unique_emails: uniqueEmailsData?.length || 0,
        popular_pdfs: popularPdfs || []
      };
    } catch (error) {
      console.error('Error fetching download stats:', error);
      return null;
    }
  }

  static async getUserDownloads(email: string): Promise<EmailCapture[]> {
    try {
      if (!supabase) {
        return [];
      }

      const { data, error } = await supabase
        .from('email_captures')
        .select('*')
        .eq('email', email)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching user downloads:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error in getUserDownloads:', error);
      return [];
    }
  }

  // Debug function to test Supabase connection
  static async testConnection(): Promise<boolean> {
    try {
      if (!supabase) {
        console.error('Supabase client not initialized');
        return false;
      }

      const { data, error } = await supabase
        .from('email_captures')
        .select('count(*)')
        .limit(1);

      if (error) {
        console.error('Supabase connection test failed:', error);
        return false;
      }

      console.log('Supabase connection test successful:', data);
      return true;
    } catch (error) {
      console.error('Supabase connection test error:', error);
      return false;
    }
  }
}