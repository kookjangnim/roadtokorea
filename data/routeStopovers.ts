export type TransportMode = 'KTX' | 'car' | 'bicycle' | 'bus';

export interface RouteStopover {
  city: string;
  citySlug: string;
  tier: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  travelTimeFromPrevious: string;
  cumulativeTime: string;
  pitch: string;
  highlights: string[];
}

export interface TransportRoute {
  mode: TransportMode;
  label: string;
  routeName: string;
  totalTravelTime: string;
  totalDistance: string;
  summary: string;
  bestFor: string;
  tradeoff: string;
  stopPattern: string;
  stopovers: RouteStopover[];
  routePath: [number, number][];
}

export interface RouteData {
  from: string;
  fromSlug: string;
  to: string;
  toSlug: string;
  href: string;
  routeLabel: string;
  headline: string;
  overview: string;
  destinationPitch: string;
  bestUseCases: string[];
  transports: {
    KTX: TransportRoute;
    car: TransportRoute;
    bicycle: TransportRoute;
    bus: TransportRoute;
  };
}

export const seoulToBusanRoute: RouteData = {
  from: 'Seoul',
  fromSlug: 'seoul',
  to: 'Busan',
  toSlug: 'busan',
  href: '/routes/seoul/busan',
  routeLabel: 'Seoul to Busan',
  headline: 'One route, four very different ways to cross Korea.',
  overview:
    'This is the clearest long-form route in the country: capital energy up front, then a sequence of central and southern cities that can turn a transfer into a real trip.',
  destinationPitch:
    'Use this route when you want the journey itself to shape the trip, not just the final arrival in Busan.',
  bestUseCases: [
    'First Korea trips that want one strong north-to-south arc.',
    'Travelers deciding between speed, flexibility, scenery, or slower inland pacing.',
    'Itineraries that need stopover logic instead of isolated city picks.',
  ],
  transports: {
    KTX: {
      mode: 'KTX',
      label: 'KTX',
      routeName: 'Gyeongbu Line',
      totalTravelTime: '2h 40m - 3h 15m',
      totalDistance: '399 km',
      summary:
        'The cleanest version of the route when you want Seoul and Busan anchored by a few strategic historical or cultural stops.',
      bestFor: 'First trips, short itineraries, and anyone who wants the least logistical friction.',
      tradeoff: 'You move fast, but some smaller inland detours drop out of the story.',
      stopPattern: 'Best with one overnight in Gyeongju or one short urban stop in Daejeon or Daegu.',
      stopovers: [
        {
          city: 'Daejeon',
          citySlug: 'daejeon',
          tier: 2,
          coordinates: { lat: 36.3504, lng: 127.3845 },
          travelTimeFromPrevious: '50m',
          cumulativeTime: '50m',
          pitch:
            'A clean first pause where research culture, hot springs, and efficient city rhythm reset the route without slowing it down too much.',
          highlights: ['Daejeon KAIST Campus', 'National Science Museum', 'Yuseong Hot Springs'],
        },
        {
          city: 'Daegu',
          citySlug: 'daegu',
          tier: 2,
          coordinates: { lat: 35.8714, lng: 128.6014 },
          travelTimeFromPrevious: '1h 5m',
          cumulativeTime: '1h 55m',
          pitch:
            'A stronger urban contrast stop where traditional medicine streets, markets, and a drier southern mood sharpen the route.',
          highlights: ['Seomun Market', 'Daegu Yangnyeongsi Medicine Market', 'Bangcheon Market'],
        },
        {
          city: 'Gyeongju',
          citySlug: 'gyeongju',
          tier: 1,
          coordinates: { lat: 35.8562, lng: 129.2247 },
          travelTimeFromPrevious: '35m',
          cumulativeTime: '2h 30m',
          pitch: 'Ancient Silla capital where thousand-year history breathes in every corner.',
          highlights: ['Bulguksa Temple', 'Seokguram Grotto', 'Donggung and Wolji'],
        },
      ],
      routePath: [
        [37.5665, 126.978],
        [36.3504, 127.3845],
        [35.8714, 128.6014],
        [35.8562, 129.2247],
        [35.1796, 129.0756],
      ],
    },
    car: {
      mode: 'car',
      label: 'Car',
      routeName: 'Gyeongbu Expressway',
      totalTravelTime: '4h - 4h 30m',
      totalDistance: '406 km',
      summary:
        'The most flexible route if the trip needs spontaneous food stops, smaller cities, and a schedule that bends around your own pace.',
      bestFor: 'Travelers who want control, families, photographers, and route-first trips with multiple side stops.',
      tradeoff: 'You gain freedom, but parking, fatigue, and one-way logistics become part of the trip design.',
      stopPattern: 'Best with one central overnight or two long meal-and-walk breaks on the way south.',
      stopovers: [
        {
          city: 'Cheonan',
          citySlug: 'cheonan',
          tier: 3,
          coordinates: { lat: 36.8157, lng: 127.1138 },
          travelTimeFromPrevious: '1h',
          cumulativeTime: '1h',
          pitch: 'Gateway to central Korea where walnut cookies and tradition live on.',
          highlights: ['Cheonan Walnut Cookies', 'Gakwonsa Temple', 'Independence Hall'],
        },
        {
          city: 'Daejeon',
          citySlug: 'daejeon',
          tier: 2,
          coordinates: { lat: 36.3504, lng: 127.3845 },
          travelTimeFromPrevious: '50m',
          cumulativeTime: '1h 50m',
          pitch: 'Science and innovation hub where Korea\'s research heart beats.',
          highlights: ['Daejeon KAIST Campus', 'National Science Museum', 'Yuseong Hot Springs'],
        },
        {
          city: 'Daegu',
          citySlug: 'daegu',
          tier: 2,
          coordinates: { lat: 35.8714, lng: 128.6014 },
          travelTimeFromPrevious: '1h 20m',
          cumulativeTime: '3h 10m',
          pitch: 'Traditional medicine meets modern fashion in Korea\'s cycling city.',
          highlights: ['Seomun Market', 'Daegu Yangnyeongsi Medicine Market', 'Bangcheon Market'],
        },
      ],
      routePath: [
        [37.5665, 126.978],
        [36.8157, 127.1138],
        [36.3504, 127.3845],
        [35.8714, 128.6014],
        [35.1796, 129.0756],
      ],
    },
    bicycle: {
      mode: 'bicycle',
      label: 'Bicycle',
      routeName: 'Jungang & East Coast Route',
      totalTravelTime: '3-4 days',
      totalDistance: '380 km',
      summary:
        'The slowest and most route-aware version, built around inland landscapes, long exertion days, and a genuinely sequential Korea experience.',
      bestFor: 'Slow travel riders, repeat visitors, and travelers who want the route itself to be the destination.',
      tradeoff: 'This is not a quick transfer. The route demands recovery time, weather planning, and overnight structure.',
      stopPattern: 'Best as a multi-night sequence through Chungju, Andong, and the east coast before finishing in Busan.',
      stopovers: [
        {
          city: 'Chungju',
          citySlug: 'chungju',
          tier: 3,
          coordinates: { lat: 36.991, lng: 127.926 },
          travelTimeFromPrevious: '4-5h',
          cumulativeTime: '4-5h',
          pitch: 'Lake-city retreat where slow travel and mountain temples define the rhythm.',
          highlights: ['Chungju Lake', 'Taktanjeong Pavilion', 'Beopjusa Temple'],
        },
        {
          city: 'Andong',
          citySlug: 'andong',
          tier: 2,
          coordinates: { lat: 36.5715, lng: 128.7269 },
          travelTimeFromPrevious: '5-6h',
          cumulativeTime: '9-11h',
          pitch: 'Confucian heartland where traditional Korea and village life remain intact.',
          highlights: ['Hahoe Folk Village', 'Andong Hahoe Mask Dance', 'Dosan Seowon'],
        },
        {
          city: 'Pohang',
          citySlug: 'pohang',
          tier: 3,
          coordinates: { lat: 36.0113, lng: 129.3642 },
          travelTimeFromPrevious: '4-5h',
          cumulativeTime: '13-16h',
          pitch: 'Steel city transformed into a coastal stop with sea air, Buddhist art, and sunrise detours.',
          highlights: ['Bogyeongsa Temple', 'Yeongil Beach', 'Homigot Sunrise Plaza'],
        },
      ],
      routePath: [
        [37.5665, 126.978],
        [36.991, 127.926],
        [36.5715, 128.7269],
        [36.0113, 129.3642],
        [35.1796, 129.0756],
      ],
    },
    bus: {
      mode: 'bus',
      label: 'Bus',
      routeName: 'Express Bus Route',
      totalTravelTime: '4h 30m - 5h',
      totalDistance: '406 km',
      summary:
        'A practical middle path for travelers who care more about cost and direct movement than shaving every hour from the transfer.',
      bestFor: 'Budget-conscious routes, simple one-seat transfers, and travelers comfortable with a steadier pace.',
      tradeoff: 'Less romance than rail and less freedom than driving, but often simpler than expected.',
      stopPattern: 'Best with one urban stopover if you want the route to feel intentional instead of purely functional.',
      stopovers: [
        {
          city: 'Daejeon',
          citySlug: 'daejeon',
          tier: 2,
          coordinates: { lat: 36.3504, lng: 127.3845 },
          travelTimeFromPrevious: '1h 30m',
          cumulativeTime: '1h 30m',
          pitch: 'Science and innovation hub where Korea\'s research heart beats.',
          highlights: ['Daejeon KAIST Campus', 'National Science Museum', 'Yuseong Hot Springs'],
        },
        {
          city: 'Daegu',
          citySlug: 'daegu',
          tier: 2,
          coordinates: { lat: 35.8714, lng: 128.6014 },
          travelTimeFromPrevious: '2h',
          cumulativeTime: '3h 30m',
          pitch: 'Traditional medicine meets modern fashion in Korea\'s cycling city.',
          highlights: ['Seomun Market', 'Daegu Yangnyeongsi Medicine Market', 'Bangcheon Market'],
        },
      ],
      routePath: [
        [37.5665, 126.978],
        [36.3504, 127.3845],
        [35.8714, 128.6014],
        [35.1796, 129.0756],
      ],
    },
  },
};

const allRoutes: RouteData[] = [seoulToBusanRoute];

export function getAllRouteData(): RouteData[] {
  return allRoutes;
}

export function getRouteData(fromSlug: string, toSlug: string): RouteData | null {
  return allRoutes.find((route) => route.fromSlug === fromSlug && route.toSlug === toSlug) ?? null;
}

export function getTransportRoute(
  fromSlug: string,
  toSlug: string,
  transportMode: TransportMode
): TransportRoute | null {
  const routeData = getRouteData(fromSlug, toSlug);
  return routeData?.transports[transportMode] ?? null;
}
