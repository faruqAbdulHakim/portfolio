import { Database } from './supabase';

export type Experience = Database['public']['Tables']['experiences']['Row'];
