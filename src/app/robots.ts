// Types
import type { MetadataRoute } from 'next';

// Global
import { CONFIG } from '@/global';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${CONFIG.LIVE_SITE_URL}/sitemap.xml`,
  };
}
