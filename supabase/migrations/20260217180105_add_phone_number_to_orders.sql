/*
  Add Phone Number Column to Orders Table
  
  1. Changes
    - Add customer_phone column to orders table (text, nullable)
      This will store the customer's phone number collected during checkout
  
  2. Notes
    - Phone number is optional but recommended for better customer communication
    - Existing orders will have NULL phone numbers
    - Future orders will capture phone numbers from Stripe checkout
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'orders' AND column_name = 'customer_phone'
  ) THEN
    ALTER TABLE orders ADD COLUMN customer_phone text;
  END IF;
END $$;