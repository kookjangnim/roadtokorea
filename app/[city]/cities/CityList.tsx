'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { WordPressPost } from '@/lib/api';

interface CityListProps {
    cities: WordPressPost[];
    tier: number;
}

export default function CityList({ cities, tier }: CityListProps) {
    const [sortOption, setSortOption] = useState<string>('latest');
    const [filterRegion, setFilterRegion] = useState<string>('all');

    // Helper to map city slug to regions (mock logic since WP doesn't have regions yet)
    const getRegionForCity = (slug: string) => {
        const map: Record<string, string> = {
            seoul: 'Capital',
            incheon: 'Capital',
            busan: 'Gyeongsang',
            daegu: 'Gyeongsang',
            ulsan: 'Gyeongsang',
            gyeongju: 'Gyeongsang',
            jeju: 'Jeju',
            gwangju: 'Jeolla',
            jeonju: 'Jeolla',
            daejeon: 'Chungcheong',
            gangneung: 'Gangwon',
            chuncheon: 'Gangwon'
        };
        return map[slug.toLowerCase()] || 'Other';
    };

    const getCityImage = (slug: string) => {
        const images: Record<string, string> = {
            seoul: '/images/Gemini_Generated_Image_8lyf5h8lyf5h8lyf.jpg',
            busan: '/images/Gemini_Generated_Image_mzbczumzbczumzbc.jpg',
            jeju: '/images/Gemini_Generated_Image_8p1cib8p1cib8p1c.jpg',
            gyeongju: '/images/Gemini_Generated_Image_wsb8jpwsb8jpwsb8.jpg'
        };
        return images[slug.toLowerCase()] || '/images/Gemini_Generated_Image_8lyf5h8lyf5h8lyf.jpg';
    };

    const availableRegions = ['all', ...Array.from(new Set(cities.map(c => getRegionForCity(c.slug))))].sort();

    const filteredAndSortedCities = useMemo(() => {
        let result = [...cities];

        // Filter
        if (filterRegion !== 'all') {
            result = result.filter(c => getRegionForCity(c.slug) === filterRegion);
        }

        // Sort
        if (sortOption === 'latest') {
            result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        } else if (sortOption === 'popular') {
            result.sort((a, b) => (b.meta?.popularity_score || 0) - (a.meta?.popularity_score || 0));
        } else if (sortOption === 'alphabetical') {
            result.sort((a, b) => a.title.rendered.localeCompare(b.title.rendered));
        }

        return result;
    }, [cities, filterRegion, sortOption]);

    return (
        <div>
            {/* Controls Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-800 p-4 rounded-xl mb-8 border border-gray-700 gap-4">
                {/* Filter */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <label className="text-gray-300 font-medium whitespace-nowrap">Region:</label>
                    <select
                        className="bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 focus:outline-none focus:border-orange-500 w-full"
                        value={filterRegion}
                        onChange={(e) => setFilterRegion(e.target.value)}
                    >
                        {availableRegions.map(region => (
                            <option key={region} value={region}>
                                {region === 'all' ? 'All Regions' : region}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Sort */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <label className="text-gray-300 font-medium whitespace-nowrap">Sort by:</label>
                    <select
                        className="bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 focus:outline-none focus:border-orange-500 w-full"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="latest">Latest Addition</option>
                        <option value="popular">Most Popular</option>
                        <option value="alphabetical">Alphabetical (A-Z)</option>
                    </select>
                </div>
            </div>

            {/* Grid */}
            {filteredAndSortedCities.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredAndSortedCities.map((city) => (
                        <a
                            key={city.id}
                            href={`/${city.slug}`}
                            className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-700 block"
                        >
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src={getCityImage(city.slug)}
                                    alt={city.title.rendered}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                                    <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-md">
                                        {city.title.rendered}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="text-sm text-amber-500 bg-amber-950/80 px-2 py-1 rounded font-medium border border-amber-500/30">
                                            Tier {tier}
                                        </span>
                                        <span className="text-sm text-gray-300 bg-gray-900/80 px-2 py-1 rounded font-medium border border-gray-700">
                                            {getRegionForCity(city.slug)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-gray-800 rounded-xl border border-gray-700">
                    <p className="text-xl text-gray-400">No cities found matching your criteria.</p>
                </div>
            )}
        </div>
    );
}
