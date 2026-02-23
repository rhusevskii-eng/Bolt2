/*
  Add Brevo Tracking Column
  
  1. Changes
    - Add added_to_brevo column to orders table to track if contact was added to Brevo list
    - This replaces the direct email sending approach with list-based automation
  
  2. Important Notes
    - The added_to_brevo column tracks whether the contact was successfully added to Brevo
    - Brevo automation will handle sending emails once contact is in the list
    - Default value is false
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'orders' AND column_name = 'added_to_brevo'
  ) THEN
    ALTER TABLE orders ADD COLUMN added_to_brevo boolean DEFAULT false;
  END IF;
END $$;
