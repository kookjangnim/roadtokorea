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
  routeRole: string;
  stayAdvice: string;
  whyItEarnsTime: string;
  highlights: string[];
}

export interface TransportRouteVariant {
  id: string;
  label: string;
  routeName: string;
  totalTravelTime: string;
  totalDistance: string;
  summary: string;
  bestFor: string;
  tradeoff: string;
  stopPattern: string;
  chooseWhen: string;
  avoidWhen: string;
  pacingNote: string;
  planningNotes: string[];
  stopovers: RouteStopover[];
  routePath: [number, number][];
}

export interface TransportRoute extends TransportRouteVariant {
  mode: TransportMode;
  variants?: TransportRouteVariant[];
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
  routePromise: string[];
  editorialNotes: string[];
  transports: {
    KTX: TransportRoute;
    car: TransportRoute;
    bicycle: TransportRoute;
    bus: TransportRoute;
  };
}

const carGyeongbuRoute: TransportRouteVariant = {
  id: 'gyeongbu',
  label: 'Gyeongbu Axis',
  routeName: 'Gyeongbu Expressway',
  totalTravelTime: '4h - 4h 30m',
  totalDistance: '406 km',
  summary:
    'The cleanest driving line when you want the familiar Seoul-to-Busan corridor with easy central-city support.',
  bestFor: 'Travelers who want the simplest self-drive option with strong city services along the way.',
  tradeoff: 'It is the most straightforward car route, but also the least surprising.',
  stopPattern: 'Works well with one central break or one stronger southern city pause.',
  chooseWhen:
    'Choose the Gyeongbu axis when driving is about control and flexibility, not about radically changing the geography of the trip.',
  avoidWhen:
    'Skip this if the point of driving is to leave the standard corridor behind and discover a more inland or coastal route personality.',
  pacingNote:
    'This route scales easily. You can keep it direct, pause once, or stretch it without fighting the road network.',
  planningNotes: [
    'This is the easiest route to improvise on because food, rest, and city infrastructure stay reliable the whole way down.',
    'It is strongest when you keep one or two meaningful pauses instead of turning every service area into a pseudo-stopover.',
    'If Busan is the main destination, this axis preserves the most energy for arrival.',
  ],
  stopovers: [
    {
      city: 'Cheonan',
      citySlug: 'cheonan',
      tier: 3,
      coordinates: { lat: 36.8157, lng: 127.1138 },
      travelTimeFromPrevious: '1h',
      cumulativeTime: '1h',
      pitch: 'Gateway to central Korea where walnut cookies and tradition live on.',
      routeRole: 'Low-stakes first break',
      stayAdvice: 'Use Cheonan as an early reset, snack stop, or temple detour rather than a fixed destination requirement.',
      whyItEarnsTime:
        'It takes the edge off the first driving block and makes the route feel paced rather than endured.',
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
      routeRole: 'Central stabilizer',
      stayAdvice: 'Useful when you want to divide the route cleanly without adding too much narrative complexity.',
      whyItEarnsTime:
        'Daejeon gives the car route structure and breathing room without asking you to leave the main corridor.',
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
      routeRole: 'Southern energy shift',
      stayAdvice: 'Keep Daegu if the route should gain market life, late meals, and a more lived-in southern feel before Busan.',
      whyItEarnsTime:
        'It is the stop that gives this direct axis some emotional texture before the coast.',
      highlights: ['Seomun Market', 'Daegu Yangnyeongsi Medicine Market', 'Bangcheon Market'],
    },
    {
      city: 'Gumi',
      citySlug: 'gumi',
      tier: 3,
      coordinates: { lat: 36.1195, lng: 128.3446 },
      travelTimeFromPrevious: '45m',
      cumulativeTime: '2h 35m',
      pitch: 'A practical industrial-riverside city that works as a low-drama middle corridor pause.',
      routeRole: 'Middle corridor breather',
      stayAdvice: 'Useful when you want to break the drive without turning the route into a more editorial inland detour.',
      whyItEarnsTime:
        'It adds flexibility to the direct corridor without changing the overall logic of the trip.',
      highlights: ['Geumo Mountain access', 'Nakdong riverside', 'Local service stop convenience'],
    },
  ],
  routePath: [
    [37.5665, 126.978],
    [36.8157, 127.1138],
    [36.3504, 127.3845],
    [35.8714, 128.6014],
    [35.1796, 129.0756],
  ],
};

const carJungangRoute: TransportRouteVariant = {
  id: 'jungang',
  label: 'Central Inland Axis',
  routeName: 'Jungang Expressway Corridor',
  totalTravelTime: '5h 30m - 6h 30m',
  totalDistance: '430 km',
  summary:
    'A more interior route that trades simplicity for mountain rhythm, cultural depth, and a more unusual southbound sequence.',
  bestFor: 'Repeat visitors, slower self-drive trips, and travelers who want inland Korea rather than the default corridor.',
  tradeoff: 'It adds time and asks for more intention, but the route feels much less interchangeable.',
  stopPattern: 'Best when you actually want the inland stops to matter, not when you are just trying to reach Busan faster.',
  chooseWhen:
    'Choose the central inland route when the drive itself should reveal a different Korea: lakes, mountains, Confucian cities, and slower transitions.',
  avoidWhen:
    'Skip it if everyone mainly wants the cleanest Seoul-Busan transfer or if time is already tight.',
  pacingNote:
    'This route rewards fewer but deeper stops. It works best when you let inland cities change the tone of the trip.',
  planningNotes: [
    'Andong becomes much more valuable on this route than it does on a standard southbound transfer.',
    'This corridor is less about major-metropolis contrast and more about inland continuity and cultural weight.',
    'If you are driving precisely to avoid the default axis, this is usually the strongest alternative.',
  ],
  stopovers: [
    {
      city: 'Jecheon',
      citySlug: 'jecheon',
      tier: 4,
      coordinates: { lat: 37.1326, lng: 128.191 },
      travelTimeFromPrevious: '1h 40m',
      cumulativeTime: '1h 40m',
      pitch: 'A mountain-edged inland city that announces the shift away from the default highway corridor.',
      routeRole: 'Inland threshold',
      stayAdvice: 'Keep Jecheon if you want the road to feel noticeably more interior before the deeper southbound push.',
      whyItEarnsTime:
        'It helps the inland route declare its own character early instead of feeling like a delayed detour.',
      highlights: ['Cheongpungho Lake', 'Uirimji Reservoir', 'Mountain views'],
    },
    {
      city: 'Chungju',
      citySlug: 'chungju',
      tier: 3,
      coordinates: { lat: 36.991, lng: 127.926 },
      travelTimeFromPrevious: '1h 45m',
      cumulativeTime: '1h 45m',
      pitch: 'Lake-city retreat where slower landscapes begin to replace capital momentum.',
      routeRole: 'Inland reset',
      stayAdvice: 'Keep Chungju when you want the route to visibly leave the standard metro corridor behind early.',
      whyItEarnsTime:
        'It marks the point where this drive starts feeling intentionally inland rather than merely indirect.',
      highlights: ['Chungju Lake', 'Tangeumdae Park', 'Taktanjeong Pavilion'],
    },
    {
      city: 'Andong',
      citySlug: 'andong',
      tier: 2,
      coordinates: { lat: 36.5715, lng: 128.7269 },
      travelTimeFromPrevious: '2h',
      cumulativeTime: '3h 45m',
      pitch: 'Confucian heartland where traditional Korea and village life remain intact.',
      routeRole: 'Cultural anchor',
      stayAdvice: 'Andong is one of the best reasons to choose this route at all, especially if the trip wants historical and regional depth.',
      whyItEarnsTime:
        'It gives the inland axis a strong identity that the more direct corridor cannot replicate.',
      highlights: ['Hahoe Folk Village', 'Dosan Seowon', 'Andong Jjimdak Streets'],
    },
    {
      city: 'Mungyeong',
      citySlug: 'mungyeong',
      tier: 4,
      coordinates: { lat: 36.5866, lng: 128.1868 },
      travelTimeFromPrevious: '1h 5m',
      cumulativeTime: '2h 50m',
      pitch: 'Mountain-pass country where the inland route leans into old road history and slower transitions.',
      routeRole: 'Pass country pivot',
      stayAdvice: 'Useful when you want the route to feel topographically distinct, not just culturally inland.',
      whyItEarnsTime:
        'Mungyeong gives the inland axis a stronger sense of pass-crossing and geographic progression.',
      highlights: ['Mungyeong Saejae', 'Mountain roads', 'Historic pass atmosphere'],
    },
    {
      city: 'Gyeongju',
      citySlug: 'gyeongju',
      tier: 1,
      coordinates: { lat: 35.8562, lng: 129.2247 },
      travelTimeFromPrevious: '1h 40m',
      cumulativeTime: '5h 25m',
      pitch: 'Ancient Silla capital where the inland route gains historical gravity before the coast.',
      routeRole: 'Historic handoff',
      stayAdvice: 'Use Gyeongju if you want the inland route to reconnect with a classic southern anchor before Busan.',
      whyItEarnsTime:
        'It bridges inland cultural depth with the final southeastern chapter better than a simple highway finish.',
      highlights: ['Bulguksa Temple', 'Donggung and Wolji', 'Daereungwon Tomb Complex'],
    },
  ],
  routePath: [
    [37.5665, 126.978],
    [36.991, 127.926],
    [36.5715, 128.7269],
    [35.8562, 129.2247],
    [35.1796, 129.0756],
  ],
};

const carRoute7Route: TransportRouteVariant = {
  id: 'route-7-east-coast',
  label: 'Gangneung + Route 7 Coast',
  routeName: 'East Coast via Gangneung and Route 7',
  totalTravelTime: '8h - 10h',
  totalDistance: '620 km',
  summary:
    'A dramatic long-form detour that reaches Busan through the east coast, trading efficiency for shoreline atmosphere and a completely different trip shape.',
  bestFor: 'Scenic self-drive travelers, coast lovers, and longer trips where Busan is the final chapter rather than the immediate goal.',
  tradeoff: 'This is not a practical shortcut. It is a different trip that happens to end in Busan.',
  stopPattern: 'Best when the coast itself is the product and the route has room for multiple pauses.',
  chooseWhen:
    'Choose the east coast route when the real desire is to make Gangneung, the 7 beon gukdo coastline, and sea-facing stops part of the journey south.',
  avoidWhen:
    'Avoid it if you are calling it Seoul-to-Busan but only have time for the direct version. The coast route needs room.',
  pacingNote:
    'This route should feel expansive, not compressed. It works when the coastline becomes a series of optional chapters the user can keep or skip.',
  planningNotes: [
    'Gangneung changes the entire geometry of the trip. Once you commit east first, Busan becomes the end of a coastal narrative.',
    'Pohang becomes much more interesting here because it feels like a late-route hinge rather than a standalone industrial city.',
    'This is a support route for longer self-drive planning, not a recommendation that everyone should take the long way around.',
  ],
  stopovers: [
    {
      city: 'Gangneung',
      citySlug: 'gangneung',
      tier: 1,
      coordinates: { lat: 37.7519, lng: 128.8761 },
      travelTimeFromPrevious: '2h 40m',
      cumulativeTime: '2h 40m',
      pitch: 'East coast cafes, beaches, and sea-facing calm that redefine the route from the very first major detour.',
      routeRole: 'Coastal commitment',
      stayAdvice: 'Keep Gangneung if you want the trip to become an east-coast journey, not just a southbound transfer with a small scenic add-on.',
      whyItEarnsTime:
        'It is the point of no return that turns the route into a shoreline trip with a different emotional vocabulary.',
      highlights: ['Anmok Coffee Street', 'Gyeongpo Beach', 'Ojukheon House'],
    },
    {
      city: 'Samcheok',
      citySlug: 'samcheok',
      tier: 4,
      coordinates: { lat: 37.4499, lng: 129.1652 },
      travelTimeFromPrevious: '1h 10m',
      cumulativeTime: '3h 50m',
      pitch: 'A smaller east coast stretch where caves, cliffs, and open road scenery keep the route from turning urban too soon.',
      routeRole: 'Coastline continuation',
      stayAdvice: 'Use Samcheok as a scenic pause when you want Route 7 to feel like more than a line between larger coastal names.',
      whyItEarnsTime:
        'It sustains the logic of the coast drive and stops Gangneung from being the only meaningful east-side chapter.',
      highlights: ['Jangho Port', 'Hwanseon Cave', 'Samcheok Ocean Rail Bike'],
    },
    {
      city: 'Uljin',
      citySlug: 'uljin',
      tier: 4,
      coordinates: { lat: 36.9931, lng: 129.4005 },
      travelTimeFromPrevious: '1h 35m',
      cumulativeTime: '5h 25m',
      pitch: 'A quieter sea-facing county that keeps the coast route expansive instead of collapsing into only larger hubs.',
      routeRole: 'Long coast continuity',
      stayAdvice: 'Keep Uljin when you want the shoreline route to breathe with smaller-scale east coast atmosphere.',
      whyItEarnsTime:
        'It helps the Route 7 drive feel like a real chain of coast chapters rather than a jump between famous names.',
      highlights: ['Mangyangjeong Pavilion', 'Seaside roads', 'Deokgu Valley access'],
    },
    {
      city: 'Yeongdeok',
      citySlug: 'yeongdeok',
      tier: 4,
      coordinates: { lat: 36.4151, lng: 129.3654 },
      travelTimeFromPrevious: '1h 20m',
      cumulativeTime: '6h 45m',
      pitch: 'Snow-crab coast and wind-shaped shoreline roads that deepen the east coast identity before the final southern turn.',
      routeRole: 'Coastal flavor anchor',
      stayAdvice: 'Use Yeongdeok if food and fishing-port texture matter to your version of the coast drive.',
      whyItEarnsTime:
        'It gives the east coast route a more regionally specific flavor before the Busan approach.',
      highlights: ['Yeongdeok crab culture', 'Coastal roads', 'Fishing-port atmosphere'],
    },
    {
      city: 'Pohang',
      citySlug: 'pohang',
      tier: 3,
      coordinates: { lat: 36.0113, lng: 129.3642 },
      travelTimeFromPrevious: '3h 20m',
      cumulativeTime: '7h 10m',
      pitch: 'Steel city turned coastal hinge where the long eastbound drive starts preparing for a Busan finish.',
      routeRole: 'Late-route hinge',
      stayAdvice: 'Keep Pohang when you want one final coast-facing reset before dropping into the Busan urban chapter.',
      whyItEarnsTime:
        'It helps the route transition from broad coastal wandering into a more focused southeastern arrival.',
      highlights: ['Homigot Sunrise Plaza', 'Yeongil Beach', 'Space Walk'],
    },
  ],
  routePath: [
    [37.5665, 126.978],
    [37.7519, 128.8761],
    [37.4499, 129.1652],
    [36.0113, 129.3642],
    [35.1796, 129.0756],
  ],
};

const bicycleJungangRoute: TransportRouteVariant = {
  id: 'bicycle-cross-country',
  label: 'Cross-Country via Saejae + Nakdong',
  routeName: 'Hangang, Saejae, and Nakdong Bicycle Paths',
  totalTravelTime: '5-7 days',
  totalDistance: '520-560 km',
  summary:
    'The closest thing to the canonical Seoul-to-Busan bike crossing, stitching together the inland certification logic through Saejae and down the Nakdong corridor.',
  bestFor: 'Riders who want the most recognizable cross-country bike story from the capital to Busan.',
  tradeoff: 'It is coherent and well-known, but not the shortest or most coast-heavy way to ride south.',
  stopPattern: 'Best when the rider wants the trip to feel like a true cross-country progression through official-style inland corridors.',
  chooseWhen:
    'Choose this line when the goal is a credible cross-country ride with established inland logic rather than an improvised collection of roads.',
  avoidWhen:
    'Skip it if the main priority is coastal scenery or a shorter, less mountain-sensitive setup.',
  pacingNote:
    'This route can be compressed or stretched, but it works best when you let each inland chapter actually feel distinct.',
  planningNotes: [
    'This is the most legible “Seoul to Busan by bike” story because the inland corridor has established long-distance cycling logic.',
    'Saejae and Nakdong are the route ideas that matter here, not just generic inland roads.',
    'Busan feels like a genuine finish line on this version because the whole route builds toward it.',
  ],
  stopovers: [
    {
      city: 'Chungju',
      citySlug: 'chungju',
      tier: 3,
      coordinates: { lat: 36.991, lng: 127.926 },
      travelTimeFromPrevious: '4-5h',
      cumulativeTime: '4-5h',
      pitch: 'Lake-city retreat where slow travel and mountain temples define the rhythm.',
      routeRole: 'Recovery opener',
      stayAdvice: 'Keep Chungju if the ride should settle into its own cadence instead of staying in Seoul tempo too long.',
      whyItEarnsTime:
        'It softens the first long day and confirms that this route is about rhythm, not just distance.',
      highlights: ['Chungju Lake', 'Taktanjeong Pavilion', 'Beopjusa Temple'],
    },
    {
      city: 'Mungyeong',
      citySlug: 'mungyeong',
      tier: 4,
      coordinates: { lat: 36.5866, lng: 128.1868 },
      travelTimeFromPrevious: '4-5h',
      cumulativeTime: '8-10h',
      pitch: 'Pass-country terrain where the Saejae section gives the cross-country ride its hardest and most memorable inland identity.',
      routeRole: 'Mountain-pass chapter',
      stayAdvice: 'Keep Mungyeong if you want the ride to visibly earn its crossing through the middle of the peninsula.',
      whyItEarnsTime:
        'It is one of the places that makes this route feel like a real cross-country line rather than a collection of flat connectors.',
      highlights: ['Mungyeong Saejae', 'Mountain pass scenery', 'Historic road atmosphere'],
    },
    {
      city: 'Sangju',
      citySlug: 'sangju',
      tier: 4,
      coordinates: { lat: 36.4109, lng: 128.1591 },
      travelTimeFromPrevious: '2-3h',
      cumulativeTime: '10-12h',
      pitch: 'A key inland transition where the Saejae logic gives way to the long Nakdong southbound flow.',
      routeRole: 'Cross-country hinge',
      stayAdvice: 'Useful as the point where riders mentally shift from mountain-pass crossing into river-led progression.',
      whyItEarnsTime:
        'Sangju is where the route becomes recognizably connected to the Nakdong bike-path idea.',
      highlights: ['Sangpung Bridge area', 'Nakdong corridor transition', 'Cycling-route continuity'],
    },
    {
      city: 'Daegu',
      citySlug: 'daegu',
      tier: 2,
      coordinates: { lat: 35.8714, lng: 128.6014 },
      travelTimeFromPrevious: '5-6h',
      cumulativeTime: '15-18h',
      pitch: 'A denser urban river chapter that gives the long inland ride food, supplies, and a strong southern reset.',
      routeRole: 'Major urban reset',
      stayAdvice: 'Daegu helps when the route needs an easier resupply and a more energetic city break before the final push south.',
      whyItEarnsTime:
        'It keeps the long cross-country ride from becoming only rural scenery and effort.',
      highlights: ['Seomun Market', 'Urban services', 'Riverside access'],
    },
    {
      city: 'Changnyeong',
      citySlug: 'changnyeong',
      tier: 3,
      coordinates: { lat: 35.5438, lng: 128.4923 },
      travelTimeFromPrevious: '3-4h',
      cumulativeTime: '18-21h',
      pitch: 'A quieter Nakdong corridor section where the ride starts feeling unmistakably close to the southeastern finish.',
      routeRole: 'Late river chapter',
      stayAdvice: 'Keep Changnyeong if you want a softer late-stage stop between the big city reset and the Busan finish.',
      whyItEarnsTime:
        'It preserves the river-route identity deeper into the south before the final metropolitan arrival.',
      highlights: ['Nakdong riverside', 'Rural southern pacing', 'Quiet corridor feel'],
    },
  ],
  routePath: [
    [37.5665, 126.978],
    [36.991, 127.926],
    [36.5866, 128.1868],
    [36.4109, 128.1591],
    [35.8714, 128.6014],
    [35.5438, 128.4923],
    [35.1796, 129.0756],
  ],
};

const bicycleNakdongRoute: TransportRouteVariant = {
  id: 'bicycle-nakdong',
  label: 'Nakdong River Emphasis',
  routeName: 'Lead-in to Nakdonggang Bicycle Path',
  totalTravelTime: '4-6 days',
  totalDistance: '460-520 km',
  summary:
    'A southbound ride that prioritizes joining and following the Nakdonggang logic as much as possible, using the river corridor as the trip’s backbone.',
  bestFor: 'Riders who want a calmer river-led southbound structure and who care about the Nakdong path more than the mountain-pass identity.',
  tradeoff: 'It can feel less dramatic than the coast and less mythic than the full Saejae-style cross-country story.',
  stopPattern: 'Best when the rider wants the route to settle into a long river rhythm after the initial inland lead-in.',
  chooseWhen:
    'Choose the Nakdong emphasis when the river itself should organize the route and the trip should feel smoother after the early southbound setup.',
  avoidWhen:
    'Skip it if the main goal is east coast atmosphere or if you specifically want the Saejae mountain-pass identity.',
  pacingNote:
    'The useful part here is not a fixed daily plan but the way the corridor becomes easier to read once the ride settles into the Nakdong basin.',
  planningNotes: [
    'This route borrows from the logic of Korea’s Nakdong bicycle path culture more than from generic road routing.',
    'Andong matters more here because it is one of the symbolic entry points into the Nakdong story.',
    'It is strongest for riders who want a legible long-distance river descent rather than a hybrid of many route moods.',
  ],
  stopovers: [
    {
      city: 'Andong',
      citySlug: 'andong',
      tier: 2,
      coordinates: { lat: 36.5715, lng: 128.7269 },
      travelTimeFromPrevious: 'lead-in day',
      cumulativeTime: 'river entry',
      pitch: 'A major cultural city and practical symbolic entry into the Nakdong river corridor.',
      routeRole: 'Nakdong entry',
      stayAdvice: 'Keep Andong when you want the river emphasis route to begin with clear cultural and route identity.',
      whyItEarnsTime:
        'It helps the rider feel they have entered a distinct southbound river system rather than just left Seoul behind.',
      highlights: ['Woryeong Bridge', 'Andong Folk Village', 'Nakdong riverside entry'],
    },
    {
      city: 'Sangju',
      citySlug: 'sangju',
      tier: 4,
      coordinates: { lat: 36.4109, lng: 128.1591 },
      travelTimeFromPrevious: '3-4h',
      cumulativeTime: '3-4h from Andong',
      pitch: 'A functional corridor town where the wider cross-country logic meets the stronger Nakdong southbound flow.',
      routeRole: 'Route convergence point',
      stayAdvice: 'Useful if you want the entry into the classic Nakdong path logic to feel explicit.',
      whyItEarnsTime:
        'It is one of the points where the route starts reading clearly as a long river ride toward Busan.',
      highlights: ['Sangpung Bridge area', 'Nakdong path continuity', 'Cycling-route linkage'],
    },
    {
      city: 'Daegu',
      citySlug: 'daegu',
      tier: 2,
      coordinates: { lat: 35.8714, lng: 128.6014 },
      travelTimeFromPrevious: '6-7h',
      cumulativeTime: '10-12h',
      pitch: 'A larger southern city break where the river route picks up denser food, markets, and urban energy.',
      routeRole: 'Urban reset',
      stayAdvice: 'Use Daegu if the ride should gain a fuller city break before dropping toward the final southern stretch.',
      whyItEarnsTime:
        'It gives the river route a stronger urban punctuation mark without breaking the southbound logic.',
      highlights: ['Seomun Market', 'Apsan views', 'Daegu Yangnyeongsi Medicine Market'],
    },
    {
      city: 'Changnyeong',
      citySlug: 'changnyeong',
      tier: 3,
      coordinates: { lat: 35.5438, lng: 128.4923 },
      travelTimeFromPrevious: '3-4h',
      cumulativeTime: '13-16h',
      pitch: 'A quieter lower-river chapter where the route regains calm after Daegu before approaching Busan.',
      routeRole: 'Lower river reset',
      stayAdvice: 'Keep Changnyeong if you want the Nakdong route to breathe again after the urban Daegu section.',
      whyItEarnsTime:
        'It preserves the river-corridor feeling deeper into the south instead of letting the route become only city-to-city.',
      highlights: ['Nakdong river views', 'Quiet river corridor', 'Southern agricultural landscape'],
    },
    {
      city: 'Miryang',
      citySlug: 'miryang',
      tier: 4,
      coordinates: { lat: 35.5038, lng: 128.7464 },
      travelTimeFromPrevious: '3-4h',
      cumulativeTime: '13-16h',
      pitch: 'A quieter southern hinge where the route starts bending toward Busan without losing its river calm.',
      routeRole: 'Quiet hinge',
      stayAdvice: 'Keep Miryang when you want one last low-key southern chapter before the Busan finish.',
      whyItEarnsTime:
        'It preserves the softer tone of the river route right before the big coastal arrival.',
      highlights: ['Yeongnamnu Pavilion', 'Pyochungsa Temple', 'Miryang riverside views'],
    },
  ],
  routePath: [
    [37.5665, 126.978],
    [36.5715, 128.7269],
    [36.4109, 128.1591],
    [35.8714, 128.6014],
    [35.5438, 128.4923],
    [35.5038, 128.7464],
    [35.1796, 129.0756],
  ],
};

const bicycleEastCoastRoute: TransportRouteVariant = {
  id: 'bicycle-east-coast',
  label: 'East Coast Line',
  routeName: 'Seoul to Busan via Gangneung and the East Coast',
  totalTravelTime: '6-8 days',
  totalDistance: '620-700 km',
  summary:
    'A coastline-first bicycle route that prioritizes sea air, beach towns, and the long visual pleasure of moving south beside the water, even though the lower coast is not one single official certified path.',
  bestFor: 'Riders who care more about coastal atmosphere and Route 7 energy than about the most direct Seoul-Busan cycling line.',
  tradeoff: 'It is longer, more exposed, and less efficient as a pure Seoul-Busan transfer.',
  stopPattern: 'Best when the user wants optional coastal chapters rather than one tightly compressed corridor.',
  chooseWhen:
    'Choose the east coast line when the sea should be a constant companion and the trip has room to become a proper coastal ride.',
  avoidWhen:
    'Skip it if the bike route must stay compact or if Seoul-to-Busan is meant to be primarily an inland crossing.',
  pacingNote:
    'This route should stay open-ended. The coast works best when users can keep, skip, or extend towns based on wind, weather, and energy.',
  planningNotes: [
    'Gangneung changes the route from a southbound crossing into a coastal descent.',
    'The east coast works as a stitched ride: some sections are official bike-path logic, others are connected by cycleable coastal roads.',
    'Pohang is especially useful as the late point where the coastline starts preparing for a Busan finish.',
  ],
  stopovers: [
    {
      city: 'Gangneung',
      citySlug: 'gangneung',
      tier: 1,
      coordinates: { lat: 37.7519, lng: 128.8761 },
      travelTimeFromPrevious: 'rail/transfer setup',
      cumulativeTime: 'east coast start',
      pitch: 'East coast cafes, beaches, and sea-facing calm that turn the ride into a shoreline narrative from the outset.',
      routeRole: 'Coastal start',
      stayAdvice: 'Keep Gangneung if you want the coast to be the identity of the ride rather than a late-stage reward.',
      whyItEarnsTime:
        'It is the city that defines the route’s tone before the southbound cycling really begins.',
      highlights: ['Anmok Coffee Street', 'Gyeongpo Beach', 'Ojukheon House'],
    },
    {
      city: 'Samcheok',
      citySlug: 'samcheok',
      tier: 4,
      coordinates: { lat: 37.4499, lng: 129.1652 },
      travelTimeFromPrevious: '3-4h',
      cumulativeTime: '3-4h southbound',
      pitch: 'A smaller east coast stretch where caves, cliffs, and open-road sea scenery give the ride breathing room.',
      routeRole: 'Scenic continuation',
      stayAdvice: 'Use Samcheok if the point is to let the coastline unfold in chapters rather than rush toward bigger names.',
      whyItEarnsTime:
        'It keeps the east coast route from collapsing into a few major urban labels.',
      highlights: ['Jangho Port', 'Hwanseon Cave', 'Samcheok Ocean Rail Bike'],
    },
    {
      city: 'Uljin',
      citySlug: 'uljin',
      tier: 4,
      coordinates: { lat: 36.9931, lng: 129.4005 },
      travelTimeFromPrevious: '3-4h',
      cumulativeTime: 'mid-coast',
      pitch: 'A long quiet shoreline stretch that keeps the east coast route feeling open and continuous.',
      routeRole: 'Quiet coast chapter',
      stayAdvice: 'Keep Uljin if the ride should lean into smaller seaside rhythm rather than only larger destination towns.',
      whyItEarnsTime:
        'It supports the coast route’s strongest quality: repeated shoreline atmosphere over a long descent south.',
      highlights: ['Seaside roads', 'Smaller harbors', 'Coastal pacing'],
    },
    {
      city: 'Yeongdeok',
      citySlug: 'yeongdeok',
      tier: 4,
      coordinates: { lat: 36.4151, lng: 129.3654 },
      travelTimeFromPrevious: '4-5h',
      cumulativeTime: 'late coast',
      pitch: 'A fishing-port coast where the ride becomes more regionally specific before turning toward Pohang and Busan.',
      routeRole: 'Regional flavor anchor',
      stayAdvice: 'Use Yeongdeok if the east coast route should include food and fishing-port texture, not just scenery.',
      whyItEarnsTime:
        'It gives the coastal line a stronger local identity before the urban southeast begins to take over.',
      highlights: ['Snow crab culture', 'Port atmosphere', 'Route 7 coastal roads'],
    },
    {
      city: 'Pohang',
      citySlug: 'pohang',
      tier: 3,
      coordinates: { lat: 36.0113, lng: 129.3642 },
      travelTimeFromPrevious: '5-6h',
      cumulativeTime: 'long coastal descent',
      pitch: 'Steel city turned sea-facing hinge where the long coast ride begins preparing for the urban Busan finish.',
      routeRole: 'Late-route hinge',
      stayAdvice: 'Keep Pohang when you want one last meaningful coast chapter before entering the Busan orbit.',
      whyItEarnsTime:
        'It turns the last part of the coast ride into a transition rather than an abrupt ending.',
      highlights: ['Homigot Sunrise Plaza', 'Yeongil Beach', 'Space Walk'],
    },
  ],
  routePath: [
    [37.5665, 126.978],
    [37.7519, 128.8761],
    [37.4499, 129.1652],
    [36.9931, 129.4005],
    [36.4151, 129.3654],
    [36.0113, 129.3642],
    [35.1796, 129.0756],
  ],
};

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
  routePromise: [
    'You can keep this route fast and clean, or stretch it into a multi-stop sequence without losing coherence.',
    'The cities on this corridor do different jobs: reset, contrast, deepen, or slow the trip down.',
    'Busan lands better when the southbound move has already started changing the rhythm before arrival.',
  ],
  editorialNotes: [
    'Treat Gyeongju as the strongest overnight if history should break the route in half.',
    'Use Daejeon when you need efficiency and a low-friction pause rather than a dramatic detour.',
    'For driving, the real question is not just car or no car, but which road logic you want: direct, inland, or coastal.',
    'For cycling, route choice changes the whole trip: inland continuity, river logic, or east coast atmosphere.',
  ],
  transports: {
    KTX: {
      mode: 'KTX',
      id: 'ktx-main',
      label: 'KTX',
      routeName: 'Gyeongbu Line',
      totalTravelTime: '2h 40m - 3h 15m',
      totalDistance: '399 km',
      summary:
        'The cleanest version of the route when you want Seoul and Busan anchored by a few strategic historical or cultural stops.',
      bestFor: 'First trips, short itineraries, and anyone who wants the least logistical friction.',
      tradeoff: 'You move fast, but some smaller inland detours drop out of the story.',
      stopPattern: 'Best with one overnight in Gyeongju or one short urban stop in Daejeon or Daegu.',
      chooseWhen:
        'Choose KTX when the route should feel authored but not heavy. It keeps the corridor elegant, fast, and easy to understand.',
      avoidWhen:
        'Skip KTX as the main plan if you want scenic micro-stops, food-led roadside detours, or highly flexible timing between cities.',
      pacingNote:
        'Rail supports both a direct Seoul-Busan move and a softer version with one or two strategic pauses. It does not need to dictate which stop you keep.',
      planningNotes: [
        'Seat reservations matter more on weekends and holidays than on ordinary weekdays.',
        'If you only keep one stop, keep the one that changes the emotional shape of the route, not just the easiest transfer.',
        'Rail works best when arrival days stay light and the destination city gets your actual energy, not just the remainder.',
      ],
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
          routeRole: 'Reset city',
          stayAdvice: 'Best as a lunch stop, half-day pause, or easy first-night reset if Seoul started too fast.',
          whyItEarnsTime:
            'Daejeon earns time when you want to smooth the corridor, not dramatize it. It keeps the route calm and efficient.',
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
          routeRole: 'Southern contrast',
          stayAdvice: 'Works best when the route needs food markets, urban texture, and a more lived-in break before the coast.',
          whyItEarnsTime:
            'Daegu changes the route from polished capital-to-coast movement into something warmer, rougher, and more regionally grounded.',
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
          routeRole: 'Anchor overnight',
          stayAdvice: 'The best overnight on this route if you want the trip to feel more than two big cities stitched together.',
          whyItEarnsTime:
            'Gyeongju is the stop that turns the route into a narrative arc. It creates cultural weight before the coast opens up again.',
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
      variants: [carGyeongbuRoute, carJungangRoute, carRoute7Route],
      ...carGyeongbuRoute,
    },
    bicycle: {
      mode: 'bicycle',
      variants: [bicycleJungangRoute, bicycleNakdongRoute, bicycleEastCoastRoute],
      ...bicycleJungangRoute,
    },
    bus: {
      mode: 'bus',
      id: 'bus-main',
      label: 'Bus',
      routeName: 'Express Bus Route',
      totalTravelTime: '4h 30m - 5h',
      totalDistance: '406 km',
      summary:
        'A practical middle path for travelers who care more about cost and direct movement than shaving every hour from the transfer.',
      bestFor: 'Budget-conscious routes, simple one-seat transfers, and travelers comfortable with a steadier pace.',
      tradeoff: 'Less romance than rail and less freedom than driving, but often simpler than expected.',
      stopPattern: 'Best with one urban stopover if you want the route to feel intentional instead of purely functional.',
      chooseWhen:
        'Choose the bus when a direct, low-drama corridor matters more than speed or scenic flexibility.',
      avoidWhen:
        'Avoid it if the route needs frequent detours, train romance, or a luxury feeling around the transfer itself.',
      pacingNote:
        'The bus can stay fully direct or pick up a single city pause. The point is to preserve simplicity, not force extra structure.',
      planningNotes: [
        'This is the most underrated version for simple logistics on a tighter budget.',
        'One stop is usually enough; trying to force too many pauses makes the route lose its main advantage.',
        'Use Daegu if food and city character matter, Daejeon if you only need a clean split.',
      ],
      stopovers: [
        {
          city: 'Daejeon',
          citySlug: 'daejeon',
          tier: 2,
          coordinates: { lat: 36.3504, lng: 127.3845 },
          travelTimeFromPrevious: '1h 30m',
          cumulativeTime: '1h 30m',
          pitch: 'Science and innovation hub where Korea\'s research heart beats.',
          routeRole: 'Practical split',
          stayAdvice: 'Use Daejeon when you want to divide the long ride without turning the route into a major reroute project.',
          whyItEarnsTime:
            'It respects the bus route\'s main virtue: simplicity. The stop feels useful rather than ornamental.',
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
          routeRole: 'Mood upgrade',
          stayAdvice: 'Choose Daegu if the slower transfer should pay you back with a real city atmosphere before Busan.',
          whyItEarnsTime:
            'On the bus route, Daegu is the stop that makes practicality feel like a real travel choice rather than a compromise.',
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
