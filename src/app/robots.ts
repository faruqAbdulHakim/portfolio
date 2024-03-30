import CONFIG from '@/global/config';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${CONFIG.LIVE_SITE_URL}/sitemap.xml`,
  };
}
