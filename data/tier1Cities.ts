export interface Hotspot {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt?: string;
  author?: string;
  sourceLink?: string;
  tags: string[];
}

export interface Tier1CityData {
  slug: string;
  name: string;
  heroImage: string;
  headline: string;
  description: string;
  culturalInsight: string;
  hotspots: Hotspot[];
}

export const tier1Cities: Record<string, Tier1CityData> = {
  seoul: {
    slug: 'seoul',
    name: 'Seoul',
    heroImage: '/images/Gemini_Generated_Image_8lyf5h8lyf5h8lyf.jpg',
    headline: 'Where Tradition Meets Tomorrow',
    description: 'A dynamic metropolis where modern skyscrapers, high-tech subways, and pop culture meet Buddhist temples, palaces, and street markets.',
    culturalInsight: 'Seoul is an intoxicating blend of the ancient and the hyper-modern. From the serene grounds of Gyeongbokgung Palace to the neon-drenched streets of Gangnam, this city never sleeps. Discover a culinary world that ranges from Michelin-starred fine dining to legendary street food stalls.',
    hotspots: [
      {
        id: 'seoul-1',
        name: 'Gyeongbokgung Palace',
        description: 'The largest and most striking of the Five Grand Palaces, offering a glimpse into the majestic Joseon Dynasty.',
        image: 'https://images.unsplash.com/photo-1693928105512-10516b969717?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODM4MDN8MHwxfHNlYXJjaHwxfHxzZW91bCUyMEd5ZW9uZ2Jva2d1bmclMjBQYWxhY2V8ZW58MHwwfHx8MTc3MzU4NzI0OHww&ixlib=rb-4.1.0&q=80&w=1080',
        imageAlt: 'a group of people standing in front of a building',
        author: 'Unsplash (Martin Kempster)',
        sourceLink: 'https://unsplash.com/photos/a-group-of-people-standing-in-front-of-a-building-nwqdhOHLcNU',
        tags: ['History', 'Culture', 'Architecture']
      },
      {
        id: 'seoul-2',
        name: 'Bukchon Hanok Village',
        description: 'Wander through narrow alleyways lined with hundreds of beautifully preserved traditional Korean houses.',
        image: 'https://images.unsplash.com/photo-1603545959774-96bef891432b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODM4MDN8MHwxfHNlYXJjaHwxfHxzZW91bCUyMEJ1a2Nob24lMjBIYW5vayUyMFZpbGxhZ2V8ZW58MHwwfHx8MTc3MzU4NzI0OXww&ixlib=rb-4.1.0&q=80&w=1080',
        imageAlt: 'brown and black wooden temple',
        author: 'Unsplash (Matt Rogers)',
        sourceLink: 'https://unsplash.com/photos/brown-and-black-wooden-temple-2OD-LaivLtA',
        tags: ['Heritage', 'Photography', 'Walking']
      },
      {
        id: 'seoul-3',
        name: 'N Seoul Tower',
        description: 'An iconic landmark situated atop Namsan Mountain, providing panoramic views of the sprawling city below.',
        image: 'https://images.unsplash.com/photo-1679212843220-b36bf01ff859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODM4MDN8MHwxfHNlYXJjaHwxfHxzZW91bCUyME4lMjBTZW91bCUyMFRvd2VyfGVufDB8MHx8fDE3NzM1ODcyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        imageAlt: 'the top of a tall tower lit up at night',
        author: 'Unsplash (Clark Gu)',
        sourceLink: 'https://unsplash.com/photos/the-top-of-a-tall-tower-lit-up-at-night-4sEiGUD-x7U',
        tags: ['Landmark', 'Views', 'Romance']
      },
      {
        id: 'seoul-4',
        name: 'Myeongdong',
        description: 'Korea\'s premier shopping district and a paradise for street food enthusiasts and K-beauty lovers.',
        image: 'https://images.unsplash.com/photo-1682270239838-165e15f0a284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODM4MDN8MHwxfHNlYXJjaHwxfHxzZW91bCUyME15ZW9uZ2Rvbmd8ZW58MHwwfHx8MTc3MzU4NzI1MHww&ixlib=rb-4.1.0&q=80&w=1080',
        imageAlt: 'a group of people walking down a street next to tall buildings',
        author: 'Unsplash (Yoan)',
        sourceLink: 'https://unsplash.com/photos/a-group-of-people-walking-down-a-street-next-to-tall-buildings-nvDFvCW89AA',
        tags: ['Shopping', 'Street Food', 'Vibrant']
      },
      {
        id: 'seoul-5',
        name: 'Dongdaemun Design Plaza',
        description: 'A neo-futuristic architectural marvel designed by Zaha Hadid, central to the city\'s fashion hub.',
        image: 'https://images.unsplash.com/photo-1680923003386-966bd539bd2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODM4MDN8MHwxfHNlYXJjaHwxfHxzZW91bCUyMERvbmdkYWVtdW4lMjBEZXNpZ24lMjBQbGF6YXxlbnwwfDB8fHwxNzczNTg3MjUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        imageAlt: 'a tree in a grassy area next to a building',
        author: 'Unsplash (INHYEOK PARK)',
        sourceLink: 'https://unsplash.com/photos/a-tree-in-a-grassy-area-next-to-a-building-DVJW8cf5L-0',
        tags: ['Architecture', 'Design', 'Modern']
      }
    ]
  },
  busan: {
    slug: 'busan',
    name: 'Busan',
    heroImage: '/images/Gemini_Generated_Image_mzbczumzbczumzbc.jpg',
    headline: 'Coastal Majesty of the South',
    description: 'South Korea\'s quintessential coastal city, renowned for its stunning beaches, majestic mountains, and magnificent temples.',
    culturalInsight: 'Busan offers a more laid-back coastal vibe compared to Seoul. It boasts spectacular seaside temples, bustling seafood markets, and the vibrant colors of hillside villages. Enjoy the fresh ocean breeze and the warm hospitality of the south.',
    hotspots: [
      {
        id: 'busan-1',
        name: 'Haeundae Beach',
        description: 'The most famous beach in South Korea, perfect for swimming, water sports, and luxury beachfront dining.',
        image: 'https://images.unsplash.com/photo-1575869781339-47700b53a5ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODM4MDN8MHwxfHNlYXJjaHwxfHxidXNhbiUyMEhhZXVuZGFlJTIwQmVhY2h8ZW58MHwwfHx8MTc3MzU4NzI1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        imageAlt: 'people on seashore',
        author: 'Unsplash (Patrick)',
        sourceLink: 'https://unsplash.com/photos/people-on-seashore-HmiG5OB3QgM',
        tags: ['Beach', 'Nightlife', 'Luxury']
      },
      {
        id: 'busan-2',
        name: 'Gamcheon Culture Village',
        description: 'A brightly painted hillside village offering narrow alleys, steep stairways, and vibrant street art.',
        image: 'https://images.unsplash.com/photo-1710007220247-dbe0602b8367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODM4MDN8MHwxfHNlYXJjaHwxfHxidXNhbiUyMEdhbWNoZW9uJTIwQ3VsdHVyZSUyMFZpbGxhZ2V8ZW58MHwwfHx8MTc3MzU4NzI1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
        imageAlt: 'a view of a city with lots of colorful buildings',
        author: 'Unsplash (Christopher Pap de Pestény)',
        sourceLink: 'https://unsplash.com/photos/a-view-of-a-city-with-lots-of-colorful-buildings-7Vg7cIWyvfo',
        tags: ['Art', 'Village', 'Photography']
      },
      {
        id: 'busan-3',
        name: 'Haedong Yonggungsa',
        description: 'A breathtaking Buddhist temple built into the rocky cliffs overlooking the open ocean, a rarity in Korea.',
        image: 'https://images.unsplash.com/photo-1710166755940-3739664c7ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODM4MDN8MHwxfHNlYXJjaHwxfHxidXNhbiUyMEhhZWRvbmclMjBZb25nZ3VuZ3NhfGVufDB8MHx8fDE3NzM1ODcyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        imageAlt: 'a row of yellow and red lanterns in front of a building',
        author: 'Unsplash (D.T. Greiner)',
        sourceLink: 'https://unsplash.com/photos/a-row-of-yellow-and-red-lanterns-in-front-of-a-building-L-KRcc1y_ZI',
        tags: ['Temple', 'Ocean', 'Spiritual']
      },
      {
        id: 'busan-4',
        name: 'Jagalchi Fish Market',
        description: 'Korea\'s largest seafood market, where you can pick your fresh catch and have it cooked right in front of you.',
        image: 'https://images.unsplash.com/photo-1672671247929-e35a095fbab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODM4MDN8MHwxfHNlYXJjaHwxfHxidXNhbiUyMEphZ2FsY2hpJTIwTWFya2V0fGVufDB8MHx8fDE3NzM1ODcyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        imageAlt: 'a man in a red coverall standing in a fish market',
        author: 'Unsplash (Luke Ow)',
        sourceLink: 'https://unsplash.com/photos/a-man-in-a-red-coverall-standing-in-a-fish-market-uG35yv5M4Dw',
        tags: ['Market', 'Seafood', 'Culture']
      }
    ]
  },
  jeju: {
    slug: 'jeju',
    name: 'Jeju',
    heroImage: '/images/Gemini_Generated_Image_8p1cib8p1cib8p1c.jpg',
    headline: 'The Volcanic Island Paradise',
    description: 'A breathtaking volcanic island featuring a striking dormant volcano, dramatic lava tubes, and pristine white-sand beaches.',
    culturalInsight: 'Known as the "Hawaii of Korea," Jeju Island is a premier vacation destination. From the imposing Mt. Hallasan to the mystical Haenyeo (female deep-sea divers), the island is rich in unique myths, volcanic landscapes, and natural wonders.',
    hotspots: [
      {
        id: 'jeju-1',
        name: 'Hallasan National Park',
        description: 'A UNESCO World Natural Heritage site featuring South Korea\'s highest mountain and diverse flora.',
        image: 'https://images.unsplash.com/photo-1740329289201-b35652ab3ca6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODM4MDN8MHwxfHNlYXJjaHwxfHxqZWp1JTIwSGFsbGFzYW4lMjBNb3VudGFpbnxlbnwwfDB8fHwxNzczNTg3MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        imageAlt: 'A snow covered mountain with trees in the foreground',
        author: 'Unsplash (insung yoon)',
        sourceLink: 'https://unsplash.com/photos/a-snow-covered-mountain-with-trees-in-the-foreground-z8fuquSiSEg',
        tags: ['Nature', 'Hiking', 'Volcano']
      },
      {
        id: 'jeju-2',
        name: 'Seongsan Ilchulbong',
        description: 'Also known as Sunrise Peak, this tuff cone crater rises spectacularly from the sea at the eastern end of the island.',
        image: 'https://images.unsplash.com/photo-1616798249081-30877e213b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODM4MDN8MHwxfHNlYXJjaHwxfHxqZWp1JTIwU2VvbmdzYW4lMjBJbGNodWxib25nfGVufDB8MHx8fDE3NzM1ODcyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        imageAlt: 'aerial view of city near body of water during daytime',
        author: 'Unsplash (N Riazi)',
        sourceLink: 'https://unsplash.com/photos/aerial-view-of-city-near-body-of-water-during-daytime-RjD376jWJXQ',
        tags: ['Crater', 'Sunrise', 'UNESCO']
      },
      {
        id: 'jeju-3',
        name: 'Jeongbang Waterfall',
        description: 'One of the rare waterfalls in the world that falls directly into the ocean, offering a spectacular natural display.',
        image: 'https://images.unsplash.com/photo-1627916560935-4c0cfb4cd658?q=80&w=2000&auto=format&fit=crop',
        imageAlt: 'Jeongbang Waterfall in Jeju',
        author: 'Unsplash',
        sourceLink: 'https://unsplash.com/',
        tags: ['Waterfall', 'Ocean', 'Scenic']
      },
      {
        id: 'jeju-4',
        name: 'Udo Island',
        description: 'A pristine, miniature version of Jeju, famous for its peanut ice cream, white coral beaches, and cycling paths.',
        image: 'https://images.unsplash.com/photo-1736080058481-503f619d1d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODM4MDN8MHwxfHNlYXJjaHwxfHxqZWp1JTIwVWRvJTIwSXNsYW5kfGVufDB8MHx8fDE3NzM1ODcyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        imageAlt: 'A small island in the middle of a body of water',
        author: 'Unsplash (Kelsey He)',
        sourceLink: 'https://unsplash.com/photos/a-small-island-in-the-middle-of-a-body-of-water-bPFP2dqak4U',
        tags: ['Island', 'Beach', 'Cycling']
      }
    ]
  },
  gyeongju: {
    slug: 'gyeongju',
    name: 'Gyeongju',
    heroImage: '/images/Gemini_Generated_Image_wsb8jpwsb8jpwsb8.jpg',
    headline: 'The Museum Without Walls',
    description: 'The ancient capital of the Silla Kingdom, holding more tombs, temples, rock carvings, and Buddhist statuary than any other place in Korea.',
    culturalInsight: 'Walking through Gyeongju is like stepping back in time. The entire city is an open-air museum, filled with grassy burial mounds of ancient kings, elegant pavilions reflecting in serene ponds, and some of the finest Buddhist art in the world.',
    hotspots: [
      {
        id: 'gyeongju-1',
        name: 'Bulguksa Temple',
        description: 'A masterpiece of Buddhist art and architecture, representing the pinnacle of the Silla Kingdom\'s golden age.',
        image: 'https://images.unsplash.com/photo-1534213469793-c32466377e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODM4MDN8MHwxfHNlYXJjaHwxfHxneWVvbmdqdSUyMEJ1bGd1a3NhJTIwVGVtcGxlfGVufDB8MHx8fDE3NzM1ODcyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        imageAlt: 'a bunch of paper flowers hanging from a ceiling',
        author: 'Unsplash (Chang Patrick)',
        sourceLink: 'https://unsplash.com/photos/a-bunch-of-paper-flowers-hanging-from-a-ceiling-HcOrdMwEboc',
        tags: ['Temple', 'UNESCO', 'History']
      },
      {
        id: 'gyeongju-2',
        name: 'Daereungwon Tomb Complex',
        description: 'A serene park housing large, grassy tumuli (burial mounds) of the Silla monarchs, creating an otherworldly landscape.',
        image: 'https://images.unsplash.com/photo-1704285810052-16c4c5eff21e?q=80&w=2000&auto=format&fit=crop',
        imageAlt: 'Daereungwon Tomb Complex',
        author: 'Unsplash',
        sourceLink: 'https://unsplash.com/',
        tags: ['Tombs', 'Park', 'Ancient']
      },
      {
        id: 'gyeongju-3',
        name: 'Donggung Palace and Wolji Pond',
        description: 'A secondary palace site that is particularly breathtaking at night when the pavilions are beautifully illuminated over the water.',
        image: 'https://images.unsplash.com/photo-1669764372822-3cb8476d4f47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODM4MDN8MHwxfHNlYXJjaHwxfHxneWVvbmdqdSUyMERvbmdndW5nJTIwUGFsYWNlJTIwYW5kJTIwV29samklMjBQb25kfGVufDB8MHx8fDE3NzM1ODcyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        imageAlt: 'a building with lights on at night',
        author: 'Unsplash (john ko)',
        sourceLink: 'https://unsplash.com/photos/a-building-with-lights-on-at-night-mgVMtZiOaeo',
        tags: ['Palace', 'Night View', 'Romance']
      },
      {
        id: 'gyeongju-4',
        name: 'Cheomseongdae Observatory',
        description: 'The oldest surviving astronomical observatory in Asia, a testament to the scientific advancement of the Silla period.',
        image: 'https://images.unsplash.com/photo-1656980593245-b54c8c0828f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODM4MDN8MHwxfHNlYXJjaHwxfHxneWVvbmdqdSUyMENoZW9tc2VvbmdkYWV8ZW58MHwwfHx8MTc3MzU4NzI2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        imageAlt: 'a group of people standing around a tall tower',
        author: 'Unsplash (rawkkim)',
        sourceLink: 'https://unsplash.com/photos/a-group-of-people-standing-around-a-tall-tower-ema8Gib6TNc',
        tags: ['Science', 'Landmark', 'History']
      }
    ]
  }
};
