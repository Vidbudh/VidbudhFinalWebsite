/*
  # Email Captures Table

  1. New Tables
    - `email_captures`
      - `id` (uuid, primary key)
      - `email` (text, required)
      - `pdf_name` (text, required)
      - `pdf_title` (text, required)
      - `ip_address` (text, optional)
      - `user_agent` (text, optional)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `email_captures` table
    - Add policy for service role to insert data
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS email_captures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  pdf_name text NOT NULL,
  pdf_title text NOT NULL,
  ip_address text,
  user_agent text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE email_captures ENABLE ROW LEVEL SECURITY;

-- Policy for service role to insert email captures
CREATE POLICY "Service role can insert email captures"
  ON email_captures
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Policy for authenticated users to read their own email captures
CREATE POLICY "Users can read their own email captures"
  ON email_captures
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email');

-- Policy for service role to read all email captures (for admin purposes)
CREATE POLICY "Service role can read all email captures"
  ON email_captures
  FOR SELECT
  TO service_role
  USING (true);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_email_captures_email ON email_captures(email);
CREATE INDEX IF NOT EXISTS idx_email_captures_created_at ON email_captures(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_email_captures_pdf_name ON email_captures(pdf_name);