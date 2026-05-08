import { MetadataRoute } from 'next';
import { fetchPosts } from '@/lib/api';
import { getSiteUrl } from '@/lib/site-config';

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
            url: `${baseUrl}/routes/seoul/busan`,
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
