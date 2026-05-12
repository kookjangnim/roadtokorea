export type RouteNetworkCityKind = 'anchor' | 'route' | 'junction' | 'branch';

export interface RouteNetworkCity {
  slug: string;
  name: string;
  kind: RouteNetworkCityKind;
  x: number;
  y: number;
  lat: number;
  lng: number;
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
  seoul: { slug: 'seoul', name: 'Seoul', kind: 'anchor', x: 43, y: 13, lat: 37.5665, lng: 126.978, href: '/cities/seoul' },
  cheonan: { slug: 'cheonan', name: 'Cheonan', kind: 'junction', x: 40, y: 33, lat: 36.8157, lng: 127.1138, href: '/cities/cheonan' },
  yeoju: { slug: 'yeoju', name: 'Yeoju', kind: 'junction', x: 49, y: 22, lat: 37.298, lng: 127.637, href: '/cities/yeoju' },
  gapyeong: { slug: 'gapyeong', name: 'Gapyeong', kind: 'route', x: 49, y: 15, lat: 37.8315, lng: 127.5107, href: '/route-3/gapyeong' },
  chuncheon: { slug: 'chuncheon', name: 'Chuncheon', kind: 'route', x: 55, y: 15, lat: 37.8813, lng: 127.7298, href: '/route-3/chuncheon' },
  yanggu: { slug: 'yanggu', name: 'Yanggu', kind: 'route', x: 62, y: 13, lat: 38.1101, lng: 127.9895, href: '/route-3/yanggu' },
  inje: { slug: 'inje', name: 'Inje', kind: 'junction', x: 67, y: 18, lat: 38.0695, lng: 128.1707, href: '/route-3/inje' },
  goseong: { slug: 'goseong', name: 'Goseong', kind: 'junction', x: 76, y: 15, lat: 38.3806, lng: 128.4676, href: '/route-3/goseong' },
  sokcho: { slug: 'sokcho', name: 'Sokcho', kind: 'anchor', x: 77, y: 20, lat: 38.2045, lng: 128.5918, href: '/route-3/sokcho' },
  yangyang: { slug: 'yangyang', name: 'Yangyang', kind: 'route', x: 77, y: 24, lat: 38.0754, lng: 128.619, href: '/route-4/yangyang' },
  chungju: { slug: 'chungju', name: 'Chungju', kind: 'route', x: 47, y: 35, lat: 36.991, lng: 127.9259, href: '/route-1/chungju' },
  mungyeong: { slug: 'mungyeong', name: 'Mungyeong', kind: 'route', x: 52, y: 47, lat: 36.5866, lng: 128.1868, href: '/route-1/mungyeong' },
  andong: { slug: 'andong', name: 'Andong', kind: 'route', x: 62, y: 50, lat: 36.5684, lng: 128.7294, href: '/route-1/andong' },
  gyeongju: { slug: 'gyeongju', name: 'Gyeongju', kind: 'route', x: 72, y: 72, lat: 35.8562, lng: 129.2247, href: '/route-1/gyeongju' },
  busan: { slug: 'busan', name: 'Busan', kind: 'anchor', x: 75, y: 88, lat: 35.1796, lng: 129.0756, href: '/route-1/busan' },
  daejeon: { slug: 'daejeon', name: 'Daejeon', kind: 'junction', x: 43, y: 43, lat: 36.3504, lng: 127.3845, href: '/cities/daejeon' },
  wonju: { slug: 'wonju', name: 'Wonju', kind: 'junction', x: 57, y: 24, lat: 37.3422, lng: 127.9202, href: '/route-2/wonju' },
  pyeongchang: { slug: 'pyeongchang', name: 'Pyeongchang', kind: 'route', x: 66, y: 25, lat: 37.3705, lng: 128.3902, href: '/route-2/pyeongchang' },
  daegwallyeong: { slug: 'daegwallyeong', name: 'Daegwallyeong', kind: 'route', x: 72, y: 24, lat: 37.6771, lng: 128.7051, href: '/route-2/daegwallyeong' },
  gangneung: { slug: 'gangneung', name: 'Gangneung', kind: 'junction', x: 76, y: 24, lat: 37.7519, lng: 128.8761, href: '/cities/gangneung' },
  donghae: { slug: 'donghae', name: 'Donghae', kind: 'route', x: 78, y: 33, lat: 37.5247, lng: 129.1143, href: '/route-4/donghae' },
  samcheok: { slug: 'samcheok', name: 'Samcheok', kind: 'route', x: 79, y: 38, lat: 37.4499, lng: 129.1652, href: '/route-4/samcheok' },
  uljin: { slug: 'uljin', name: 'Uljin', kind: 'route', x: 80, y: 50, lat: 36.9931, lng: 129.4005, href: '/route-4/uljin' },
  yeongdeok: { slug: 'yeongdeok', name: 'Yeongdeok', kind: 'route', x: 80, y: 58, lat: 36.415, lng: 129.365, href: '/route-4/yeongdeok' },
  pohang: { slug: 'pohang', name: 'Pohang', kind: 'route', x: 78, y: 66, lat: 36.019, lng: 129.3435, href: '/route-4/pohang' },
  ulsan: { slug: 'ulsan', name: 'Ulsan', kind: 'route', x: 76, y: 79, lat: 35.5384, lng: 129.3114, href: '/route-4/ulsan' },
  jecheon: { slug: 'jecheon', name: 'Jecheon', kind: 'branch', x: 56, y: 36, lat: 37.1326, lng: 128.1905, href: '/cities/jecheon' },
  yeongwol: { slug: 'yeongwol', name: 'Yeongwol', kind: 'branch', x: 62, y: 39, lat: 37.1838, lng: 128.4617, href: '/cities/yeongwol' },
  jeongseon: { slug: 'jeongseon', name: 'Jeongseon', kind: 'branch', x: 68, y: 36, lat: 37.3806, lng: 128.6609, href: '/cities/jeongseon' },
  taebaek: { slug: 'taebaek', name: 'Taebaek', kind: 'branch', x: 75, y: 43, lat: 37.1641, lng: 128.9856, href: '/cities/taebaek' },
  gongju: { slug: 'gongju', name: 'Gongju', kind: 'route', x: 39, y: 47, lat: 36.4465, lng: 127.119, href: '/route-5/gongju' },
  jeonju: { slug: 'jeonju', name: 'Jeonju', kind: 'junction', x: 42, y: 60, lat: 35.8242, lng: 127.148, href: '/cities/jeonju' },
  gwangju: { slug: 'gwangju', name: 'Gwangju', kind: 'junction', x: 42, y: 74, lat: 35.1595, lng: 126.8526, href: '/cities/gwangju' },
  imsil: { slug: 'imsil', name: 'Imsil', kind: 'branch', x: 45, y: 65, lat: 35.6179, lng: 127.2891, href: '/route-5/imsil' },
  namwon: { slug: 'namwon', name: 'Namwon', kind: 'branch', x: 49, y: 69, lat: 35.4164, lng: 127.3906, href: '/route-5/namwon' },
  suncheon: { slug: 'suncheon', name: 'Suncheon', kind: 'route', x: 55, y: 79, lat: 34.9506, lng: 127.4872, href: '/route-5/suncheon' },
  yeosu: { slug: 'yeosu', name: 'Yeosu', kind: 'anchor', x: 60, y: 86, lat: 34.7604, lng: 127.6622, href: '/route-5/yeosu' },
  incheon: { slug: 'incheon', name: 'Incheon', kind: 'route', x: 33, y: 16, lat: 37.4563, lng: 126.7052, href: '/route-6/incheon' },
  suwon: { slug: 'suwon', name: 'Suwon', kind: 'route', x: 42, y: 25, lat: 37.2636, lng: 127.0286, href: '/route-6/suwon' },
  seosan: { slug: 'seosan', name: 'Seosan', kind: 'route', x: 31, y: 45, lat: 36.7849, lng: 126.45, href: '/route-6/seosan' },
  boryeong: { slug: 'boryeong', name: 'Boryeong', kind: 'route', x: 30, y: 56, lat: 36.3334, lng: 126.6128, href: '/route-6/boryeong' },
  gunsan: { slug: 'gunsan', name: 'Gunsan', kind: 'route', x: 35, y: 68, lat: 35.9677, lng: 126.7366, href: '/route-6/gunsan' },
  mokpo: { slug: 'mokpo', name: 'Mokpo', kind: 'junction', x: 35, y: 88, lat: 34.8118, lng: 126.3922, href: '/cities/mokpo' },
  haenam: { slug: 'haenam', name: 'Haenam', kind: 'junction', x: 38, y: 90, lat: 34.5733, lng: 126.599, href: '/cities/haenam' },
  wando: { slug: 'wando', name: 'Wando', kind: 'route', x: 42, y: 93, lat: 34.311, lng: 126.755, href: '/route-7/wando' },
  boseong: { slug: 'boseong', name: 'Boseong', kind: 'route', x: 49, y: 86, lat: 34.7715, lng: 127.0801, href: '/route-7/boseong' },
  namhae: { slug: 'namhae', name: 'Namhae', kind: 'route', x: 62, y: 88, lat: 34.837, lng: 127.892, href: '/route-7/namhae' },
  tongyeong: { slug: 'tongyeong', name: 'Tongyeong', kind: 'route', x: 68, y: 90, lat: 34.8544, lng: 128.4332, href: '/route-7/tongyeong' },
  geoje: { slug: 'geoje', name: 'Geoje', kind: 'route', x: 72, y: 90, lat: 34.8806, lng: 128.6217, href: '/route-7/geoje' },
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
    summary: 'Yeoju and Wonju set up the eastbound line before Pyeongchang, Daegwallyeong, and Gangneung turn mountains into sea.',
    href: '/route-2',
    color: '#256f8f',
    citySlugs: ['seoul', 'yeoju', 'wonju', 'pyeongchang', 'daegwallyeong', 'gangneung'],
    path: 'M43 13 C46 17, 48 20, 49 22 C52 23, 55 24, 57 24 C61 24, 64 25, 66 25 C68 25, 70 24, 72 24 C73 24, 75 24, 76 24',
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
    id: 'route-4',
    label: 'Route 4',
    title: 'Goseong to Busan, National Route 7 coast',
    summary: 'The long East Sea line follows National Route 7 logic from the DMZ-facing north through surf towns, port cities, heritage, and the Busan finish.',
    href: '/route-4',
    color: '#0f766e',
    citySlugs: ['goseong', 'sokcho', 'yangyang', 'gangneung', 'donghae', 'samcheok', 'uljin', 'yeongdeok', 'pohang', 'gyeongju', 'ulsan', 'busan'],
    path: 'M76 15 C77 17, 77 19, 77 20 C77 22, 77 23, 77 24 C77 28, 78 31, 78 33 C79 35, 79 37, 79 38 C80 42, 80 46, 80 50 C80 54, 80 56, 80 58 C79 61, 78 64, 78 66 C76 69, 73 72, 72 72 C74 75, 75 77, 76 79 C76 83, 75 86, 75 88',
  },
  {
    id: 'route-5',
    label: 'Route 5',
    title: 'Seoul to Yeosu, Jeolla inland to south coast',
    summary: 'Cheonan softens the Seoul jump before Gongju, Jeonju, Gwangju, Suncheon, and Yeosu turn the line into food, city culture, ecology, and island-night-sea arrival.',
    href: '/route-5',
    color: '#9f2f52',
    citySlugs: ['seoul', 'cheonan', 'gongju', 'jeonju', 'gwangju', 'suncheon', 'yeosu'],
    path: 'M43 13 C41 21, 40 28, 40 33 C39 38, 39 43, 39 47 C40 52, 41 56, 42 60 C41 65, 41 70, 42 74 C47 76, 51 78, 55 79 C57 82, 59 84, 60 86',
  },
  {
    id: 'branch-5a',
    label: 'Branch 5A',
    title: 'Jeonju to Suncheon, Imsil and Namwon inland story variant',
    summary: 'A slower Jeolla branch where Jeonju moves through Imsil cheese country and Namwon Chunhyang/Jirisan memory before rejoining Route 5 at Suncheon.',
    href: '/route-5',
    color: '#a16207',
    citySlugs: ['jeonju', 'imsil', 'namwon', 'suncheon'],
    path: 'M42 60 C43 62, 44 64, 45 65 C46 67, 48 68, 49 69 C51 73, 53 76, 55 79',
  },
  {
    id: 'route-6',
    label: 'Route 6',
    title: 'Seoul to Mokpo, West Sea modern coast',
    summary: 'Incheon opens the port-history line before Suwon, Seosan, Boryeong, Gunsan, and Mokpo turn the west coast into fortress, pilgrimage, mud festival, modern port memory, and island-sea arrival.',
    href: '/route-6',
    color: '#7c6f2d',
    citySlugs: ['seoul', 'incheon', 'suwon', 'seosan', 'boryeong', 'gunsan', 'mokpo'],
    path: 'M43 13 C39 14, 36 15, 33 16 C36 20, 39 23, 42 25 C37 32, 33 39, 31 45 C30 49, 30 53, 30 56 C32 61, 34 65, 35 68 C34 75, 34 82, 35 88',
  },
  {
    id: 'route-7',
    label: 'Route 7',
    title: 'Mokpo to Busan, Dadohae to Hallyeohaesang',
    summary: 'Mokpo hands the route to Haenam, Wando, Boseong, Suncheon, Yeosu, Namhae, Tongyeong, Geoje, and Busan as a long southern coast from Dadohae islands into Hallyeohaesang, Yi Sun-sin naval history, tea fields, wetlands, ports, and modern maritime Korea.',
    href: '/route-7',
    color: '#c2410c',
    citySlugs: ['mokpo', 'haenam', 'wando', 'boseong', 'suncheon', 'yeosu', 'namhae', 'tongyeong', 'geoje', 'busan'],
    path: 'M35 88 C36 89, 37 90, 38 90 C40 92, 41 93, 42 93 C45 90, 47 87, 49 86 C51 83, 53 80, 55 79 C57 82, 59 85, 60 86 C62 87, 62 88, 62 88 C65 89, 67 90, 68 90 C70 90, 71 90, 72 90 C73 89, 74 88, 75 88',
  },
  {
    id: 'route-8',
    label: 'Route 8',
    title: 'Seoul to Haenam, Honam inland to land end',
    summary: 'Daejeon stabilizes the southbound departure with Sungsimdang and Yuseong before Jeonju, Gwangju, Mokpo, and Haenam turn the journey into food culture, modern democratic history, harbor memory, and Korea land-end meaning.',
    href: '/route-8',
    color: '#dc2626',
    citySlugs: ['seoul', 'daejeon', 'jeonju', 'gwangju', 'mokpo', 'haenam'],
    path: 'M43 13 C43 24, 43 34, 43 43 C43 50, 42 56, 42 60 C42 65, 42 70, 42 74 C39 80, 36 85, 35 88 C36 89, 37 90, 38 90',
  },
  {
    id: 'branch-2a',
    label: 'Branch 2A',
    title: 'Wonju to Samcheok, deep Gangwon inland-to-coast branch',
    summary: 'A deeper Gangwon branch where Wonju leads through Jecheon, Yeongwol, Jeongseon, and Taebaek before joining Route 4 at Samcheok.',
    href: '/route-2/branch-a',
    color: '#6f6a5f',
    citySlugs: ['wonju', 'jecheon', 'yeongwol', 'jeongseon', 'taebaek', 'samcheok'],
    path: 'M57 24 C58 29, 57 33, 56 36 C58 38, 60 39, 62 39 C64 37, 66 36, 68 36 C71 38, 73 41, 75 43 C77 41, 78 39, 79 38',
  },
];
