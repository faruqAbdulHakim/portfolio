import { Database } from './supabase';

export type Portfolio = Database['public']['Tables']['portfolios']['Row'];
