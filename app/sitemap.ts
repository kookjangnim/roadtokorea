import { MetadataRoute } from 'next';
import { fetchPosts } from '@/lib/api';
import { getSiteUrl } from '@/lib/site-config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = getSiteUrl();

    // Static routes
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        // Tier pages
        {
            url: `${baseUrl}/tier-1/cities`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/tier-2/cities`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/tier-3/cities`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/tier-4/cities`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];

    try {
        // Fetch all posts to get city slugs
        const posts = await fetchPosts({ perPage: 100 });

        // Dynamic city routes
        const dynamicRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
            url: `${baseUrl}/${post.slug}`,
            lastModified: new Date(post.modified || post.date),
            changeFrequency: 'weekly',
            priority: 0.7,
        }));

        return [...staticRoutes, ...dynamicRoutes];
    } catch (error) {
        console.error('Error generating sitemap:', error);
        return staticRoutes;
    }
}
