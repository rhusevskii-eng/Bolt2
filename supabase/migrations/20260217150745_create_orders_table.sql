/*
  Create Orders Table
  
  1. New Tables
    - orders table with columns:
      - id (uuid, primary key) - Unique order identifier
      - stripe_session_id (text, unique) - Stripe checkout session ID
      - stripe_payment_intent_id (text) - Stripe payment intent ID
      - customer_email (text) - Customer email address
      - customer_name (text) - Customer full name
      - amount (integer) - Amount paid in smallest currency unit
      - currency (text) - Currency code (bgn, eur)
      - status (text) - Order status (pending, completed, failed)
      - email_sent (boolean) - Whether confirmation email was sent
      - created_at (timestamptz) - Order creation timestamp
      - updated_at (timestamptz) - Last update timestamp
  
  2. Security
    - Enable RLS on orders table
    - Add policy for service role to manage orders
    - No public access (orders managed by Edge Functions only)
  
  3. Important Notes
    - This table stores order information for tracking and email sending
    - Only accessible via service role (Edge Functions with webhook secret)
    - Customer data is encrypted at rest by Supabase
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_session_id text UNIQUE NOT NULL,
  stripe_payment_intent_id text,
  customer_email text NOT NULL,
  customer_name text,
  amount integer NOT NULL,
  currency text NOT NULL DEFAULT 'bgn',
  status text NOT NULL DEFAULT 'pending',
  email_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage orders"
  ON orders
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);