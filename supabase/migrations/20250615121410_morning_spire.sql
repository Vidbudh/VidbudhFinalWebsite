/*
  # Create function to get popular PDFs

  This function returns the most downloaded PDFs with their download counts.
*/

CREATE OR REPLACE FUNCTION get_popular_pdfs()
RETURNS TABLE (
  pdf_name text,
  pdf_title text,
  count bigint
) 
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT 
    ec.pdf_name,
    ec.pdf_title,
    COUNT(*) as count
  FROM email_captures ec
  GROUP BY ec.pdf_name, ec.pdf_title
  ORDER BY count DESC
  LIMIT 10;
$$;