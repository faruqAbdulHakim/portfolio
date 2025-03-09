'use server';

import type { Contact, Experience, Portfolio } from '@/types';
import { createSupabaseServerClient } from '@/utils/supabase/server';
import {
  PiEnvelopeLight,
  PiGithubLogoLight,
  PiLinkedinLogoLight,
} from 'react-icons/pi';

export async function getContactList(): Promise<Contact[]> {
  return [
    {
      name: 'Email',
      content: 'faruqabdulhakim2001@gmail.com',
      contentLink: 'mailto:faruqabdulhakim2001@gmail.com',
      Icon: PiEnvelopeLight,
    },
    {
      name: 'LinkedIn',
      content: 'linkedin.com/in/faruq-abdul-hakim',
      contentLink: 'https://www.linkedin.com/in/faruq-abdul-hakim/',
      Icon: PiLinkedinLogoLight,
    },
    {
      name: 'GitHub',
      content: 'github.com/faruqAbdulHakim',
      contentLink: 'https://github.com/faruqAbdulHakim',
      Icon: PiGithubLogoLight,
    },
  ];
}

export async function getExperienceList(): Promise<Experience[]> {
  const supabase = await createSupabaseServerClient();
  const result = await supabase
    .from('experiences')
    .select()
    .order('order', { ascending: false });
  return result.data || [];
}

export async function getPortfolioList(params?: {
  limit?: number;
}): Promise<Portfolio[]> {
  const supabase = await createSupabaseServerClient();
  let query = supabase
    .from('portfolios')
    .select()
    .order('created_at', { ascending: false });
  if (params?.limit) {
    query = query.limit(params.limit);
  }
  const result = await query;
  return result.data || [];
}

export async function getPortfolioDetail(
  slug: string
): Promise<Portfolio | null> {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.from('portfolios').select().eq('slug', slug);
  return result.data?.[0] || null;
}

export async function getResumeFile(): Promise<Buffer> {
  const supabase = await createSupabaseServerClient();
  const res = await supabase.storage.from('common').download('resume.pdf');
  if (res.error) {
    throw res.error;
  }
  const arrayBuffer = await res.data.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return buffer;
}
