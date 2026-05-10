export type RouteNetworkCityKind = 'anchor' | 'route' | 'junction' | 'future';

export interface RouteNetworkCity {
  slug: string;
  name: string;
  kind: RouteNetworkCityKind;
  x: number;
  y: number;
  href: string;
}

export interface RouteNetworkRoute {
  id: string;
  label: string;
  title: string;
  summary: string;
  href: string;
  color: string;
  citySlugs: string[];
  path: string;
}

export const routeNetworkCities: Record<string, RouteNetworkCity> = {
  seoul: { slug: 'seoul', name: 'Seoul', kind: 'anchor', x: 43, y: 13, href: '/cities/seoul' },
  yeoju: { slug: 'yeoju', name: 'Yeoju', kind: 'junction', x: 49, y: 22, href: '/cities/yeoju' },
  chungju: { slug: 'chungju', name: 'Chungju', kind: 'route', x: 47, y: 35, href: '/route-1/chungju' },
  mungyeong: { slug: 'mungyeong', name: 'Mungyeong', kind: 'route', x: 52, y: 47, href: '/route-1/mungyeong' },
  andong: { slug: 'andong', name: 'Andong', kind: 'route', x: 62, y: 50, href: '/route-1/andong' },
  gyeongju: { slug: 'gyeongju', name: 'Gyeongju', kind: 'route', x: 72, y: 72, href: '/route-1/gyeongju' },
  busan: { slug: 'busan', name: 'Busan', kind: 'anchor', x: 75, y: 88, href: '/route-1/busan' },
  wonju: { slug: 'wonju', name: 'Wonju', kind: 'junction', x: 57, y: 24, href: '/route-2/wonju' },
  gangneung: { slug: 'gangneung', name: 'Gangneung', kind: 'anchor', x: 76, y: 24, href: '/route-2/gangneung' },
  samcheok: { slug: 'samcheok', name: 'Samcheok', kind: 'route', x: 79, y: 38, href: '/route-2/samcheok' },
  jecheon: { slug: 'jecheon', name: 'Jecheon', kind: 'future', x: 56, y: 36, href: '/cities/jecheon' },
};

export const routeNetworkRoutes: RouteNetworkRoute[] = [
  {
    id: 'route-1',
    label: 'Route 1',
    title: 'Seoul to Busan, inland with depth',
    summary: 'The main southbound line through Yeoju, Chungju, Mungyeong, Andong, and Gyeongju.',
    href: '/route-1',
    color: '#9f5f2f',
    citySlugs: ['seoul', 'yeoju', 'chungju', 'mungyeong', 'andong', 'gyeongju', 'busan'],
    path: 'M43 13 C46 17, 48 19, 49 22 C49 27, 47 31, 47 35 C49 40, 51 44, 52 47 C56 49, 59 50, 62 50 C67 56, 70 64, 72 72 C74 78, 75 83, 75 88',
  },
  {
    id: 'route-2',
    label: 'Route 2',
    title: 'Seoul to Gangneung, eastbound opening',
    summary: 'The coast-opening line where Yeoju and Wonju prepare the handoff into Gangwon.',
    href: '/route-2',
    color: '#256f8f',
    citySlugs: ['seoul', 'yeoju', 'wonju', 'gangneung', 'samcheok'],
    path: 'M43 13 C46 17, 48 20, 49 22 C52 23, 55 24, 57 24 C64 23, 70 23, 76 24 C77 29, 78 34, 79 38',
  },
  {
    id: 'future-inland',
    label: 'Future',
    title: 'Wonju to Andong, deeper inland branch',
    summary: 'A future branch concept for Yeoju, Wonju, Jecheon, and Andong as the inland network grows.',
    href: '/cities/jecheon',
    color: '#6f6a5f',
    citySlugs: ['yeoju', 'wonju', 'jecheon', 'andong'],
    path: 'M49 22 C52 23, 55 24, 57 24 C58 29, 57 33, 56 36 C58 42, 60 46, 62 50',
  },
];
