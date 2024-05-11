// Types
import type { MetadataRoute } from 'next';

// Global
import { CONFIG } from '@/global';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: CONFIG.LIVE_SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: CONFIG.LIVE_SITE_URL + 'portfolios',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
