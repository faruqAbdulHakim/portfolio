// Types
import type { MetadataRoute } from 'next';

// Global
import { CONFIG } from '@/global';

// Data sources
import { getPortfolioList } from '@/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const portfolios = await getPortfolioList();

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: CONFIG.LIVE_SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${CONFIG.LIVE_SITE_URL}/portfolios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...portfolios.map((item): MetadataRoute.Sitemap[number] => ({
      url: `${CONFIG.LIVE_SITE_URL}/portfolios/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  ];

  return sitemap;
}
