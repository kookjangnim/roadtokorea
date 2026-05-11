import { MetadataRoute } from 'next';
import { fetchPosts } from '@/lib/api';
import { getSiteUrl } from '@/lib/site-config';
import { getRouteCityLinks } from '@/data/routeRegistry';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = getSiteUrl();

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/updated-cities`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/route-1`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/route-2`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/route-3`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/route-4`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/route-5`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,
        },
    ];

    try {
        const routeCityRoutes: MetadataRoute.Sitemap = getRouteCityLinks().map((routeCity) => ({
            url: `${baseUrl}${routeCity.href}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.75,
        }));

        // Fetch all posts to get city slugs
        const posts = await fetchPosts({ perPage: 100 });

        // Dynamic city routes
        const dynamicRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
            url: `${baseUrl}/cities/${post.slug}`,
            lastModified: new Date(post.modified || post.date),
            changeFrequency: 'weekly',
            priority: 0.7,
        }));

        return [...staticRoutes, ...routeCityRoutes, ...dynamicRoutes];
    } catch (error) {
        console.error('Error generating sitemap:', error);
        const routeCityRoutes: MetadataRoute.Sitemap = getRouteCityLinks().map((routeCity) => ({
            url: `${baseUrl}${routeCity.href}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.75,
        }));

        return [...staticRoutes, ...routeCityRoutes];
    }
}
