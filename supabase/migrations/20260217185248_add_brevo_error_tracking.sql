/*
  # Add Brevo Error Tracking

  1. Changes
    - Add `brevo_error` column to track Brevo API errors
    - Add `brevo_response` column to store full Brevo API responses for debugging
  
  2. Purpose
    - Help diagnose why contacts aren't being added to Brevo
    - Store detailed error messages for troubleshooting
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'orders' AND column_name = 'brevo_error'
  ) THEN
    ALTER TABLE orders ADD COLUMN brevo_error text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'orders' AND column_name = 'brevo_response'
  ) THEN
    ALTER TABLE orders ADD COLUMN brevo_response text;
  END IF;
END $$;
