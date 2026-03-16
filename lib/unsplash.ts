const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

export async function fetchUnsplashImage(query: string, orientation: 'landscape' | 'portrait' | 'squarish' = 'landscape'): Promise<string | null> {
  if (!UNSPLASH_ACCESS_KEY) {
    console.warn("UNSPLASH_ACCESS_KEY is missing. Using fallback image.");
    return null;
  }

  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&orientation=${orientation}&per_page=1`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
        // Cache Unsplash API responses for 24 hours to avoid hitting rate limits too quickly
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) {
      console.error(`Unsplash API error: ${res.status} ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    if (data.results && data.results.length > 0) {
      return data.results[0].urls.regular;
    }
    
    return null;
  } catch (error) {
    console.error("Failed to fetch from Unsplash:", error);
    return null;
  }
}
