export type RouteNetworkCityKind = 'anchor' | 'route' | 'junction' | 'branch';

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
  gapyeong: { slug: 'gapyeong', name: 'Gapyeong', kind: 'route', x: 49, y: 15, href: '/route-3/gapyeong' },
  chuncheon: { slug: 'chuncheon', name: 'Chuncheon', kind: 'route', x: 55, y: 15, href: '/route-3/chuncheon' },
  yanggu: { slug: 'yanggu', name: 'Yanggu', kind: 'route', x: 62, y: 13, href: '/route-3/yanggu' },
  inje: { slug: 'inje', name: 'Inje', kind: 'junction', x: 67, y: 18, href: '/route-3/inje' },
  goseong: { slug: 'goseong', name: 'Goseong', kind: 'route', x: 76, y: 15, href: '/route-3/goseong' },
  sokcho: { slug: 'sokcho', name: 'Sokcho', kind: 'anchor', x: 77, y: 20, href: '/route-3/sokcho' },
  chungju: { slug: 'chungju', name: 'Chungju', kind: 'route', x: 47, y: 35, href: '/route-1/chungju' },
  mungyeong: { slug: 'mungyeong', name: 'Mungyeong', kind: 'route', x: 52, y: 47, href: '/route-1/mungyeong' },
  andong: { slug: 'andong', name: 'Andong', kind: 'route', x: 62, y: 50, href: '/route-1/andong' },
  gyeongju: { slug: 'gyeongju', name: 'Gyeongju', kind: 'route', x: 72, y: 72, href: '/route-1/gyeongju' },
  busan: { slug: 'busan', name: 'Busan', kind: 'anchor', x: 75, y: 88, href: '/route-1/busan' },
  wonju: { slug: 'wonju', name: 'Wonju', kind: 'junction', x: 57, y: 24, href: '/route-2/wonju' },
  gangneung: { slug: 'gangneung', name: 'Gangneung', kind: 'anchor', x: 76, y: 24, href: '/route-2/gangneung' },
  samcheok: { slug: 'samcheok', name: 'Samcheok', kind: 'route', x: 79, y: 38, href: '/route-2/samcheok' },
  jecheon: { slug: 'jecheon', name: 'Jecheon', kind: 'branch', x: 56, y: 36, href: '/cities/jecheon' },
  yeongwol: { slug: 'yeongwol', name: 'Yeongwol', kind: 'branch', x: 62, y: 39, href: '/cities/yeongwol' },
};

export const routeNetworkRoutes: RouteNetworkRoute[] = [
  {
    id: 'route-1',
    label: 'Route 1',
    title: 'Seoul to Busan, inland with depth',
    summary: 'Yeoju closes the Seoul-to-Chungju gap before the line deepens through Mungyeong, Andong, and Gyeongju.',
    href: '/route-1',
    color: '#9f5f2f',
    citySlugs: ['seoul', 'yeoju', 'chungju', 'mungyeong', 'andong', 'gyeongju', 'busan'],
    path: 'M43 13 C46 17, 48 19, 49 22 C49 27, 47 31, 47 35 C49 40, 51 44, 52 47 C56 49, 59 50, 62 50 C67 56, 70 64, 72 72 C74 78, 75 83, 75 88',
  },
  {
    id: 'route-2',
    label: 'Route 2',
    title: 'Seoul to Gangneung, eastbound opening',
    summary: 'Yeoju is the shared first split, then Wonju carries the handoff into Gangwon and the coast.',
    href: '/route-2',
    color: '#256f8f',
    citySlugs: ['seoul', 'yeoju', 'wonju', 'gangneung', 'samcheok'],
    path: 'M43 13 C46 17, 48 20, 49 22 C52 23, 55 24, 57 24 C64 23, 70 23, 76 24 C77 29, 78 34, 79 38',
  },
  {
    id: 'route-3',
    label: 'Route 3',
    title: 'Seoul to Sokcho, northern mountain-to-sea',
    summary: 'Gapyeong and Chuncheon soften Seoul into lake country before Yanggu, Inje, and the Seoraksan pass choices lead to Sokcho.',
    href: '/route-3',
    color: '#4f7d5a',
    citySlugs: ['seoul', 'gapyeong', 'chuncheon', 'yanggu', 'inje', 'goseong', 'sokcho'],
    path: 'M43 13 C46 14, 48 15, 49 15 C52 15, 54 15, 55 15 C58 14, 60 13, 62 13 C64 15, 66 17, 67 18 C70 16, 73 15, 76 15 C77 17, 77 19, 77 20',
  },
  {
    id: 'branch-2a',
    label: 'Branch 2A',
    title: 'Wonju to Yeongwol, short inland branch',
    summary: 'A compact Gangwon inland line where Wonju hands off to Jecheon, then Yeongwol turns history and film interest into the payoff.',
    href: '/route-2/branch-a',
    color: '#6f6a5f',
    citySlugs: ['wonju', 'jecheon', 'yeongwol'],
    path: 'M57 24 C58 29, 57 33, 56 36 C58 38, 60 39, 62 39',
  },
];
