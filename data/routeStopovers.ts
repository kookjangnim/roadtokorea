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
  decisionReason?: string;
  recoveryValue?: string;
  sleepValue?: string;
  foodValue?: string;
  terrainTransition?: string;
  nextLegLogic?: string;
  highlights: string[];
}

export interface TransportRouteVariant {
  id: string;
  routeCode: string;
  routeGroupCode: string;
  routeGroupLabel: string;
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
  routeCode: string;
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
  routeCode: '1-0-c',
  routeGroupCode: '1-0',
  routeGroupLabel: 'Direct Corridor',
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
  routeCode: '1-1-a',
  routeGroupCode: '1-1',
  routeGroupLabel: 'Inland Axis',
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
    'Yeoju should be treated as the first junction beat after Seoul, especially when the route needs a cleaner handoff before Chungju.',
    'Andong becomes much more valuable on this route than it does on a standard southbound transfer.',
    'This corridor is less about major-metropolis contrast and more about inland continuity and cultural weight.',
    'If you are driving precisely to avoid the default axis, this is usually the strongest alternative.',
  ],
  stopovers: [
    {
      city: 'Yeoju',
      citySlug: 'yeoju',
      tier: 4,
      coordinates: { lat: 37.298, lng: 127.637 },
      travelTimeFromPrevious: '1h 10m',
      cumulativeTime: '1h 10m',
      pitch:
        'The first inland junction where Seoul loosens and the route can choose between Chungju depth or Wonju eastbound opening.',
      routeRole: 'First junction city',
      stayAdvice:
        'Use Yeoju as a half-day stop or light overnight when the Seoul-to-Chungju jump feels too blunt and the route needs a more graceful first beat.',
      whyItEarnsTime:
        'King Sejong, the Namhan River, Silleuksa, ceramics, rice, and outlet-era leisure give Yeoju enough story to make the route split feel intentional.',
      decisionReason:
        'Keep Yeoju when the route should explain why the traveler is choosing an inland sequence rather than simply driving past greater Seoul.',
      recoveryValue:
        'Soft recovery through riverside walking, easy food, and a lower-pressure pace before the route asks for a more committed Chungju overnight.',
      sleepValue:
        'A useful light overnight when departure from Seoul starts late or when the trip wants to arrive in Chungju fresher the next day.',
      foodValue:
        'Best read through local rice, simple riverside meals, and practical outlet-side food rather than destination dining alone.',
      terrainTransition:
        'Yeoju is the first place where the route starts feeling regional, even before the inland landscape deepens around Chungju.',
      nextLegLogic:
        'After Yeoju, Route 1 bends south toward Chungju while Route 2 can split east toward Wonju, making the city the first real network hinge.',
      highlights: ['King Sejong Royal Tomb', 'Silleuksa Temple', 'Yeoju Premium Outlets'],
    },
    {
      city: 'Chungju',
      citySlug: 'chungju',
      tier: 3,
      coordinates: { lat: 36.991, lng: 127.926 },
      travelTimeFromPrevious: '50m',
      cumulativeTime: '2h',
      pitch:
        'A lake-and-hot-spring inland city where the route finally stops behaving like an extension of Seoul and starts preparing for the harder country ahead.',
      routeRole: 'Pre-pass recovery base',
      stayAdvice:
        'Keep Chungju when you want one stable inland night before the route starts asking for more terrain awareness and a clearer southbound commitment.',
      whyItEarnsTime:
        'It is one of the first places on the inland line where stopping actually improves the next day instead of merely interrupting the drive.',
      decisionReason:
        'Choose Chungju when the inland route needs a real reset before Mungyeong Saejae and the deeper pass-country chapter begin to matter.',
      recoveryValue:
        'Its value is recovery through tempo and comfort: a place to loosen the body, slow the pulse, and avoid carrying Seoul urgency into the next inland leg.',
      sleepValue:
        'A very sensible overnight because it works as the last comfortable base before the route starts feeling more like a crossing than a transfer.',
      foodValue:
        'Best treated as fortifying inland food before the route tightens: warm soups, substantial meals, and an easy breakfast before departure matter more here than destination dining.',
      terrainTransition:
        'Geographically Chungju sits before the Saejae gate logic, so it works as the last easy reset before the route begins climbing into a more meaningful inland threshold.',
      nextLegLogic:
        'After Chungju, the route can stop pretending it is only drifting south. The next chapter starts aiming decisively toward pass-country, Mungyeong, and a stronger inland identity.',
      highlights: ['Suanbo Hot Springs', 'Chungju Lake', 'Tangeumdae Park'],
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
      decisionReason:
        'Keep Mungyeong when the route should visibly cross a threshold rather than glide south on pure convenience.',
      recoveryValue:
        'More of a preparation and pacing node than a soft recovery city; it helps you reset before or after the pass logic.',
      sleepValue:
        'A strategic overnight if you want to separate the easier inland buildup from the more meaningful terrain transition.',
      foodValue:
        'Best treated as fortifying pass-country fuel rather than a destination food stop.',
      terrainTransition:
        'Mungyeong is the chapter where the inland route starts reading like a real crossing, not just a detour.',
      nextLegLogic:
        'From here the route can descend into broader river logic and more sustained southbound momentum.',
      highlights: ['Mungyeong Saejae', 'Mountain roads', 'Historic pass atmosphere'],
    },
    {
      city: 'Andong',
      citySlug: 'andong',
      tier: 2,
      coordinates: { lat: 36.5715, lng: 128.7269 },
      travelTimeFromPrevious: '1h 10m',
      cumulativeTime: '4h',
      pitch: 'Confucian heartland where traditional Korea and village life remain intact.',
      routeRole: 'Cultural anchor',
      stayAdvice: 'Andong is one of the best reasons to choose this route at all, especially if the trip wants historical and regional depth.',
      whyItEarnsTime:
        'It gives the inland axis a strong identity that the more direct corridor cannot replicate.',
      decisionReason:
        'Keep Andong when the route should gain cultural gravity, not just another logistical pause between Seoul and Busan.',
      recoveryValue:
        'Recovery here is more mental and narrative than thermal or purely physical; it slows the trip into a deeper inland chapter.',
      sleepValue:
        'A strong overnight when the inland route should become a real stay rather than a sequence of utilitarian stops.',
      foodValue:
        'Andong is one of the better places on this corridor to make dinner and local identity part of the route itself.',
      terrainTransition:
        'By Andong, the route stops feeling exploratory and starts feeling fully committed to inland Korea.',
      nextLegLogic:
        'After Andong, the trip can either lean into historic continuity or start handing off toward the southeast.',
      highlights: ['Hahoe Folk Village', 'Dosan Seowon', 'Andong Jjimdak Streets'],
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
      decisionReason:
        'Keep Gyeongju when the route needs a historically weighted southern landing before the coast.',
      recoveryValue:
        'More reflective than restorative; the value is in slowing the route into culture rather than pure physical recovery.',
      sleepValue:
        'A high-quality overnight if the trip should feel authored and not merely driven through.',
      foodValue:
        'Useful for turning the southern half of the route into a stay with evening texture, not just a pass-through meal.',
      terrainTransition:
        'Gyeongju turns the inland line into a southeast heritage corridor before Busan.',
      nextLegLogic:
        'After Gyeongju, the route no longer needs another heavy inland identity shift before Busan.',
      highlights: ['Bulguksa Temple', 'Donggung and Wolji', 'Daereungwon Tomb Complex'],
    },
  ],
  routePath: [
    [37.5665, 126.978],
    [37.298, 127.637],
    [36.991, 127.926],
    [36.5866, 128.1868],
    [36.5715, 128.7269],
    [35.8562, 129.2247],
    [35.1796, 129.0756],
  ],
};

const carRoute7Route: TransportRouteVariant = {
  id: 'route-7-east-coast',
  routeCode: '1-2-a',
  routeGroupCode: '1-2',
  routeGroupLabel: 'East Coast Axis',
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
      decisionReason:
        'Choose Gangneung when the route should pivot decisively toward the coast and stop pretending Busan is the only destination that matters.',
      recoveryValue:
        'Recovery here is atmospheric as much as physical; sea air, easier pacing, and a calmer coast mood reset the whole trip.',
      sleepValue:
        'A very natural overnight because it often works as the city that converts a transfer into a full east-coast chapter.',
      foodValue:
        'Food matters here because cafes, seafood, and coast-adjacent meals reinforce the identity shift into the shoreline route.',
      terrainTransition:
        'Gangneung is the city where the geometry of the trip changes from crossing Korea to descending its east coast.',
      nextLegLogic:
        'After Gangneung, the route should be read as a chain of coastal chapters rather than one long direct push south.',
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
  routeCode: '1-1-b',
  routeGroupCode: '1-1',
  routeGroupLabel: 'Inland Axis',
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
      travelTimeFromPrevious: '8-10h',
      cumulativeTime: '8-10h',
      pitch:
        'A lake-and-hot-spring recovery city where long-distance riders can finally stop riding on capital momentum and prepare properly for the Saejae crossing ahead.',
      routeRole: 'Pre-Saejae recovery base',
      stayAdvice:
        'Keep Chungju if you want one of the most credible rider overnights before Mungyeong Saejae rather than forcing the next day on tired legs.',
      whyItEarnsTime:
        'It softens the first serious day and gives riders a genuine chance to recover before the route turns into a more committed inland crossing.',
      decisionReason:
        'Chungju matters because it is where riders can choose recovery over stubborn momentum before the Saejae gate becomes the next big geographic question.',
      recoveryValue:
        'This is one of the clearest recovery nodes on the route: hot-spring logic, easier lodging, and a reputation among riders for being a smart place to reset the body.',
      sleepValue:
        'A natural overnight because sleeping here lets the rider face Mungyeong Saejae with fresher legs instead of carrying the fatigue of the first major push.',
      foodValue:
        'Useful for replenishing before the pass: the goal is not foodie prestige but a warm dinner, a proper breakfast, and enough recovery to ride well the next day.',
      terrainTransition:
        'Geographically it sits before the Mungyeong Saejae gate logic, which makes it a preparation town as much as a lakeside town.',
      nextLegLogic:
        'After Chungju, the ride starts aiming at Mungyeong Saejae and a more demanding cross-country identity, so the city works less like a sightseeing stop and more like a launch platform.',
      highlights: ['Suanbo Hot Springs', 'Chungju Lake', 'Taktanjeong Pavilion'],
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
      decisionReason:
        'Mungyeong is the city that justifies the route’s cross-country claim because the Saejae crossing changes the ride physically and mentally.',
      recoveryValue:
        'Not a soft recovery town first; its value is in how it breaks the route into before-the-pass and after-the-pass chapters.',
      sleepValue:
        'Useful if you want to isolate the pass effort or keep the mountain chapter from bleeding into an overlong next day.',
      foodValue:
        'Think of it as a fuel-and-reset stop around the pass, not a destination food capital.',
      terrainTransition:
        'This is the clearest terrain threshold on the inland bicycle line.',
      nextLegLogic:
        'Once past Mungyeong, the ride starts turning toward broader river logic and longer southbound flow.',
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
      decisionReason:
        'Keep Sangju when you want the route logic to feel connected rather than fragmented after the Saejae effort.',
      recoveryValue:
        'A moderate reset point where the strain of the pass can settle before the longer river-led continuation.',
      sleepValue:
        'Works if the rider wants to separate the mountain crossing from the longer Nakdong-oriented run south.',
      foodValue:
        'Useful for a practical refuel with less pressure to turn the stop into a sightseeing chapter.',
      terrainTransition:
        'Sangju is where the ride stops feeling like pass-country and starts feeling like a corridor.',
      nextLegLogic:
        'From here the rider can lean into the rhythm of the Nakdong system rather than isolated inland segments.',
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
      decisionReason:
        'Daegu matters when the rider needs a larger service city that still belongs to the route rather than feeling like a generic interruption.',
      recoveryValue:
        'Strong for urban recovery because supplies, food, and sleep options are broader than on smaller inland nodes.',
      sleepValue:
        'A practical overnight if the final southern push should start from a more resourced base.',
      foodValue:
        'One of the better places on this route to turn recovery into a real meal chapter before heading south again.',
      terrainTransition:
        'Daegu loosens the ride out of pure inland effort and starts shifting it into a southern metropolitan rhythm.',
      nextLegLogic:
        'After Daegu, the route can either stay disciplined and efficient or soften into quieter lower-river stops.',
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
      decisionReason:
        'Changnyeong matters when the rider wants one more calm southern chapter before the finish tightens toward Busan.',
      recoveryValue:
        'A quieter recovery node that lowers the tempo again after Daegu’s bigger urban reset.',
      sleepValue:
        'Useful as a final softer overnight if the rider does not want the last run to Busan to begin from a larger city mood.',
      foodValue:
        'Less about destination dining and more about simple, dependable pre-finish fuel.',
      terrainTransition:
        'This is where the route keeps its lower-river softness before the metropolitan southeast starts to gather.',
      nextLegLogic:
        'From Changnyeong, the ride can finish with a calmer psychological runway into Busan.',
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
  routeCode: '1-1-c',
  routeGroupCode: '1-1',
  routeGroupLabel: 'Inland Axis',
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
  routeCode: '1-2-b',
  routeGroupCode: '1-2',
  routeGroupLabel: 'East Coast Axis',
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
      decisionReason:
        'Keep Uljin when the coast route should feel expansive and lived-in rather than compressed into only famous anchor points.',
      recoveryValue:
        'A strong quiet-reset town where lower-intensity coast rhythm can recover the body better than a denser city stop.',
      sleepValue:
        'Useful as a smaller overnight if the east-coast route should preserve calm before the lower coast picks up more regional flavor.',
      foodValue:
        'Best as straightforward seaside fuel and local seafood rather than a destination dining chapter.',
      terrainTransition:
        'Uljin helps the east coast route stay open and continuous instead of jumping too quickly into the southeastern urban orbit.',
      nextLegLogic:
        'From here the route can keep stretching in smaller shoreline beats before richer food-and-port towns appear.',
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
      decisionReason:
        'Keep Yeongdeok when the coast route should gain flavor, not just mileage, before the final southern cities start dominating the mood.',
      recoveryValue:
        'More useful as a lighter sensory reset than a deep recovery base; the value is in local character and air rather than facilities.',
      sleepValue:
        'A good overnight if the route should include one smaller fishing-port chapter before larger southeastern hubs take over.',
      foodValue:
        'One of the clearest food stops on this coastal line because seafood identity is part of why the town matters.',
      terrainTransition:
        'Yeongdeok marks the point where the coast route starts feeling more specifically southeastern rather than generically east-coast.',
      nextLegLogic:
        'After Yeongdeok, the route begins preparing for the bigger hinge cities that set up the Busan finish.',
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
      decisionReason:
        'Choose Pohang when the route needs a proper hinge city before Busan rather than an abrupt final descent straight into the metro finish.',
      recoveryValue:
        'Useful as a stronger service reset after many smaller coast chapters, especially when the next step is the urban Busan landing.',
      sleepValue:
        'A very practical late overnight because it lets the coast route end with control instead of fatigue.',
      foodValue:
        'Works well for turning the last coastal chapter into a more substantial meal and resupply stop before Busan.',
      terrainTransition:
        'Pohang is where the route stops being an open-ended coast ride and starts becoming the approach to Busan.',
      nextLegLogic:
        'After Pohang, the route no longer needs more small coast chapters; it needs a clean or intentional handoff into Busan.',
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
  routeCode: '1',
  from: 'Seoul',
  fromSlug: 'seoul',
  to: 'Busan',
  toSlug: 'busan',
  href: '/route-1',
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
      routeCode: '1-0-a',
      routeGroupCode: '1-0',
      routeGroupLabel: 'Direct Corridor',
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
      routeCode: '1-0-b',
      routeGroupCode: '1-0',
      routeGroupLabel: 'Direct Corridor',
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

const carSeoulGangneungRoute: TransportRouteVariant = {
  id: 'yeongdong-eastbound',
  routeCode: '2-0-b',
  routeGroupCode: '2-0',
  routeGroupLabel: 'Eastbound Opening',
  label: 'Wonju Junction + Coast Opening',
  routeName: 'Yeongdong Expressway via Wonju',
  totalTravelTime: '2h 40m - 3h 30m',
  totalDistance: '230 km',
  summary:
    'The strongest editorial version of Route 2: Seoul urgency loosens through Yeoju, gathers in Wonju, then opens fully once Gangneung reaches the sea.',
  bestFor:
    'Self-drive trips that want a real eastbound shape instead of a simple destination transfer.',
  tradeoff:
    'It is still efficient, but the point is to let the route breathe through Wonju and stay open to a coastal second act.',
  stopPattern:
    'Best with Yeoju as the first junction cue, one strong inland pause in Wonju, and one decision point in Gangneung about whether to stop or keep rolling south.',
  chooseWhen:
    'Choose this when Gangneung should feel like the beginning of the coast and Wonju should matter as more than a highway blur.',
  avoidWhen:
    'Skip it if the only goal is to arrive in Gangneung as fast as possible without giving the route any structure of its own.',
  pacingNote:
    'This version works best when Wonju handles the inland release and Gangneung handles the coastal threshold, with Samcheok as the optional second act rather than a requirement.',
  planningNotes: [
    'Yeoju gives Route 2 a cleaner first junction cue before Wonju carries the deeper eastbound hinge role.',
    'Wonju is the route-defining city here because it is the first place the eastbound line starts feeling branch-capable instead of Seoul-adjacent.',
    'Gangneung should be treated as a threshold city: users can stop there, but the route copy should leave the coast visibly open beyond it.',
    'Samcheok is useful when the drive should prove that the eastbound route is not only about reaching one beach city and stopping.',
  ],
  stopovers: [
    {
      city: 'Yeoju',
      citySlug: 'yeoju',
      tier: 4,
      coordinates: { lat: 37.298, lng: 127.637 },
      travelTimeFromPrevious: '1h 10m',
      cumulativeTime: '1h 10m',
      pitch:
        'The first junction city where Route 2 separates from a plain Seoul escape and starts preparing for Wonju.',
      routeRole: 'Shared junction cue',
      stayAdvice:
        'Use Yeoju when the eastbound trip needs a lighter first pause before Wonju, especially for drivers leaving Seoul later in the day.',
      whyItEarnsTime:
        'It lets Route 2 share a meaningful junction with Route 1 without confusing the canonical city page structure.',
      decisionReason:
        'Keep Yeoju when the page needs to show that junction cities can belong to more than one route context.',
      recoveryValue:
        'Soft riverside recovery and easy services before the trip becomes a more explicit Gangwon-bound movement.',
      sleepValue:
        'A light overnight only when the Seoul departure needs to be softened before Wonju; otherwise it works well as a route-context stop.',
      foodValue:
        'Simple local rice, riverside food, and outlet-side options make it useful without turning it into the main Route 2 stay.',
      terrainTransition:
        'Yeoju marks the shift from Seoul-side movement into the first branch-capable inland corridor.',
      nextLegLogic:
        'After Yeoju, the route continues east toward Wonju, where the stronger inland hinge and Gangneung setup begin.',
      highlights: ['Namhan River', 'Silleuksa Temple', 'Route split toward Wonju'],
    },
    {
      city: 'Wonju',
      citySlug: 'wonju',
      tier: 1,
      coordinates: { lat: 37.3422, lng: 127.9202 },
      travelTimeFromPrevious: '45m',
      cumulativeTime: '1h 55m',
      pitch: 'An inland junction city where the route finally stops feeling like greater Seoul and starts pointing decisively east.',
      routeRole: 'Eastbound inland hinge',
      stayAdvice:
        'Keep Wonju when you want the route to gain structure early, split the drive cleanly, or set up a more intentional eastbound run toward Gangneung.',
      whyItEarnsTime:
        'Wonju earns its place because it is not only a rest stop. It is the first city that can redirect the route north, south, or east without breaking the logic of the trip.',
      decisionReason:
        'Choose Wonju when you want Route 2 to feel authored from the interior rather than read like a straight blast from Seoul to the coast.',
      recoveryValue:
        'Its value is practical recovery through reset and reorientation: enough city function to soften the departure pace before the road starts committing to Gangwon.',
      sleepValue:
        'A strong early overnight if the route begins late, if weather complicates the eastbound move, or if the trip should treat Gangneung as a fresher day-two coast opening.',
      foodValue:
        'Best used for a substantial inland meal or dependable resupply before the route shifts from junction logic into destination logic.',
      terrainTransition:
        'Wonju is where the route moves out of capital gravity and starts behaving like a true eastbound corridor with multiple onward possibilities.',
      nextLegLogic:
        'After Wonju, the route no longer needs to justify itself as a transfer. It can aim cleanly at Gangneung or stay mentally open to a longer coast sequence.',
      highlights: ['Eastbound junction logic', 'Dependable city services', 'Inland-to-Gangwon threshold'],
    },
    {
      city: 'Gangneung',
      citySlug: 'gangneung',
      tier: 1,
      coordinates: { lat: 37.7519, lng: 128.8761 },
      travelTimeFromPrevious: '1h 30m',
      cumulativeTime: '2h 50m',
      pitch: 'The first real sea-facing threshold where the route stops being inland movement and starts reading like an east coast chapter.',
      routeRole: 'Coast-opening threshold',
      stayAdvice:
        'Keep Gangneung if the route should land softly at the coast, but do not write it like a hard ending when the shoreline can still keep unfolding.',
      whyItEarnsTime:
        'Gangneung earns time because it changes the geometry of the trip. After this point, the route can become a chain of sea-facing choices instead of a single arrival.',
      decisionReason:
        'Choose Gangneung when the route needs a true threshold city rather than a simple endpoint with no onward story.',
      recoveryValue:
        'Sea air, easier pacing, and a calmer shoreline mood make Gangneung one of the clearest emotional resets on the eastbound line.',
      sleepValue:
        'A natural overnight because it lets the coast begin with energy instead of being squeezed into the exhausted tail of a transfer day.',
      foodValue:
        'Coffee, seafood, and coast-adjacent meals matter here because they reinforce the route identity shift from inland hinge to shoreline chapter.',
      terrainTransition:
        'Gangneung is the place where Route 2 fully crosses over from interior positioning into east coast presence.',
      nextLegLogic:
        'From Gangneung, the route can stop honorably or continue south into Samcheok if the user wants proof that the coast is really open.',
      highlights: ['Anmok Coffee Street', 'Gyeongpo Beach', 'Ojukheon House'],
    },
    {
      city: 'Samcheok',
      citySlug: 'samcheok',
      tier: 4,
      coordinates: { lat: 37.4499, lng: 129.1652 },
      travelTimeFromPrevious: '1h 10m',
      cumulativeTime: '4h',
      pitch: 'A quieter shoreline continuation that proves Gangneung was the opening of the coast, not just the end of the road.',
      routeRole: 'Optional second act',
      stayAdvice:
        'Use Samcheok if you want the coast to unfold in chapters and avoid making Gangneung carry the entire identity of Route 2 by itself.',
      whyItEarnsTime:
        'It confirms that the route can keep breathing after Gangneung and gives the eastbound family more than one sea-facing beat.',
      highlights: ['Jangho Port', 'Hwanseon Cave', 'Samcheok Ocean Rail Bike'],
    },
  ],
  routePath: [
    [37.5665, 126.978],
    [37.298, 127.637],
    [37.3422, 127.9202],
    [37.7519, 128.8761],
    [37.4499, 129.1652],
  ],
};

const bicycleSeoulGangneungRoute: TransportRouteVariant = {
  id: 'bicycle-wonju-gangneung',
  routeCode: '2-0-c',
  routeGroupCode: '2-0',
  routeGroupLabel: 'Eastbound Opening',
  label: 'Wonju Junction Ride',
  routeName: 'Seoul to Gangneung via Wonju',
  totalTravelTime: '2-4 days',
  totalDistance: '220-260 km',
  summary:
    'A stitched eastbound bicycle corridor that uses Seoul-side path logic, practical inland connections through Wonju, and a coast-opening finish in Gangneung.',
  bestFor:
    'Riders who want an honest eastbound route concept rather than a false promise of one perfectly continuous certified line.',
  tradeoff:
    'It takes more planning discipline than a single official path, but it produces a much clearer Seoul-to-coast narrative.',
  stopPattern:
    'Best with Wonju as the setup hinge and Gangneung as the coast-opening finish, with Samcheok optional if the ride continues south.',
  chooseWhen:
    'Choose this when the ride should feel assembled with intention and when Wonju matters as a true inland branch city before the coast.',
  avoidWhen:
    'Skip it if the bike plan must be explained as one seamless official Seoul-to-Gangneung certification route.',
  pacingNote:
    'The route works best when Wonju absorbs setup and resupply pressure so the final move into Gangneung can feel like an arrival into a new chapter rather than a survival push.',
  planningNotes: [
    'Be explicit that this is a stitched corridor using official path logic where available and practical linking segments where necessary.',
    'Wonju is the most useful inland hinge because it can absorb setup, weather, fatigue, and route-choice adjustments before the final eastbound commitment.',
    'If the rider still has energy after Gangneung, Samcheok is the cleanest first proof that the route can convert into an east-coast sequence.',
  ],
  stopovers: [
    {
      city: 'Wonju',
      citySlug: 'wonju',
      tier: 1,
      coordinates: { lat: 37.3422, lng: 127.9202 },
      travelTimeFromPrevious: 'day 1 setup',
      cumulativeTime: 'inland hinge',
      pitch: 'The inland branch city that makes an eastbound ride plausible, adjustable, and easier to pace before the coast move.',
      routeRole: 'Setup hinge',
      stayAdvice:
        'Keep Wonju when the ride needs a real setup city for food, rest, weather decisions, or route adjustments before the Gangwon push.',
      whyItEarnsTime:
        'Wonju earns time because it turns a vague eastbound idea into a manageable staged ride with real onward options.',
      decisionReason:
        'Choose Wonju when the bicycle version of Route 2 should feel deliberate and resilient instead of improvised end to end.',
      recoveryValue:
        'It is one of the better places on this line to recover from Seoul departure energy without giving up the eastbound momentum.',
      sleepValue:
        'A very sensible overnight if the ride should split into a setup day and a coast-opening day rather than force too much distance up front.',
      foodValue:
        'Practical resupply matters more than destination dining here; the point is to leave stocked, steady, and ready for the harder directional commitment.',
      terrainTransition:
        'Wonju marks the point where the route stops being capital escape and starts behaving like a targeted inland-to-coast ride.',
      nextLegLogic:
        'After Wonju, the rider can commit cleanly to Gangneung instead of carrying unresolved route choices deep into the day.',
      highlights: ['Setup flexibility', 'Resupply strength', 'Eastbound branch logic'],
    },
    {
      city: 'Gangneung',
      citySlug: 'gangneung',
      tier: 1,
      coordinates: { lat: 37.7519, lng: 128.8761 },
      travelTimeFromPrevious: '1 long day or 1.5 days',
      cumulativeTime: 'coast opening',
      pitch: 'The coast-opening finish where the ride finally reaches sea-facing air and changes from inland effort to shoreline reward.',
      routeRole: 'Coastal finish',
      stayAdvice:
        'Keep Gangneung as the emotional payoff of the ride even if the trip later continues south, because this is where the eastbound concept fully lands.',
      whyItEarnsTime:
        'It is the city that makes the stitched corridor worth building in the first place by delivering a clean and legible arrival into the east coast.',
      highlights: ['Anmok Coffee Street', 'Gyeongpo Beach', 'Ojukheon House'],
    },
    {
      city: 'Samcheok',
      citySlug: 'samcheok',
      tier: 4,
      coordinates: { lat: 37.4499, lng: 129.1652 },
      travelTimeFromPrevious: '3-4h',
      cumulativeTime: 'optional coast continuation',
      pitch: 'A small but useful continuation chapter if the rider wants Gangneung to open the coast rather than close the route.',
      routeRole: 'Optional continuation',
      stayAdvice:
        'Use Samcheok only when the ride should convert into an east coast sequence; it is not required to make the Route 2 concept work.',
      whyItEarnsTime:
        'It gives the bicycle version a believable second act without pretending the whole trip must keep running south.',
      highlights: ['Jangho Port', 'Shoreline roads', 'Smaller coast rhythm'],
    },
  ],
  routePath: [
    [37.5665, 126.978],
    [37.3422, 127.9202],
    [37.7519, 128.8761],
    [37.4499, 129.1652],
  ],
};

export const seoulToGangneungRoute: RouteData = {
  routeCode: '2',
  from: 'Seoul',
  fromSlug: 'seoul',
  to: 'Gangneung',
  toSlug: 'gangneung',
  href: '/route-2',
  routeLabel: 'Seoul to Gangneung',
  headline: 'An eastbound route that uses Yeoju first, then hinges on Wonju before the coast opens.',
  overview:
    'Route 2 is not a smaller Seoul-to-Busan. It is the cleanest Seoul-origin eastbound line on the site: Yeoju creates the first branch cue, Wonju releases the route inland, then Gangneung turns it toward the sea.',
  destinationPitch:
    'Use this route when Gangneung should feel like a threshold city and when the trip might stop there or keep unfolding into the east coast.',
  bestUseCases: [
    'Trips that want a shorter flagship route without losing clear stopover logic.',
    'Eastbound itineraries where Yeoju and Wonju should matter as real junction cities, not just pass-through names.',
    'Travelers choosing between direct arrival, coast-opening driving, or an honest stitched bicycle corridor.',
  ],
  routePromise: [
    'Yeoju gives the route its first split, and Wonju gives it the real inland hinge before Gangneung changes the geometry into a sea-facing chapter.',
    'You can keep this route elegant and direct or let it open into Samcheok and the wider east coast.',
    'Route 2 stays Seoul-first while feeling clearly different from the long southbound logic of Route 1.',
  ],
  editorialNotes: [
    'Yeoju should be visible as the shared junction cue, while Wonju remains the structural difference-maker for the eastbound identity.',
    'Treat Gangneung as a threshold, not only a destination, so the route still feels open after arrival.',
    'For cycling, credibility matters more than romance: describe the line as stitched, practical, and worth doing for the coast payoff.',
  ],
  transports: {
    KTX: {
      mode: 'KTX',
      id: 'ktx-eastbound',
      routeCode: '2-0-a',
      routeGroupCode: '2-0',
      routeGroupLabel: 'Eastbound Opening',
      label: 'KTX',
      routeName: 'Gangneung Line',
      totalTravelTime: '1h 50m - 2h 10m',
      totalDistance: '229 km',
      summary:
        'The cleanest eastbound route when the main goal is to reach the coast elegantly and start the Gangneung chapter with full energy.',
      bestFor: 'Short trips, simple route logic, and travelers who want Gangneung to open quickly without adding road complexity.',
      tradeoff:
        'It keeps the route beautiful and simple, but Wonju stays mostly a planning hinge rather than a fully activated stop.',
      stopPattern:
        'Best fully direct or with one optional Wonju pause only if the trip needs a softer inland split before the coast.',
      chooseWhen:
        'Choose KTX when the eastbound move should stay light, fast, and easy to understand while still belonging to a real route family.',
      avoidWhen:
        'Skip KTX as the main plan if Wonju should be deeply inhabited or if the route needs flexible onward movement into Samcheok and the lower coast.',
      pacingNote:
        'Rail keeps Route 2 elegant. Let Wonju stay as a route-logic note unless the trip truly benefits from dividing the move before Gangneung.',
      planningNotes: [
        'This is the least complicated way to make Gangneung the opening chapter of the trip.',
        'Wonju matters here more as a structural reference point on the eastbound line than as a mandatory stop everyone should force into the rail plan.',
        'If the route continues south after arrival, preserve enough energy in Gangneung to treat the coast as a second chapter instead of a rushed add-on.',
      ],
      stopovers: [
        {
          city: 'Wonju',
          citySlug: 'wonju',
          tier: 1,
          coordinates: { lat: 37.3422, lng: 127.9202 },
          travelTimeFromPrevious: '50m',
          cumulativeTime: '50m',
          pitch: 'A meaningful inland junction on the eastbound side of Seoul, best treated on rail as an optional split rather than a required chapter.',
          routeRole: 'Optional junction note',
          stayAdvice:
            'Only keep Wonju on KTX if the route needs a calmer inland break before Gangneung or if the trip specifically wants to activate the junction-city logic.',
          whyItEarnsTime:
            'Wonju earns mention because it explains the route structure, even when the fastest rail version does not need to stop there for everyone.',
          highlights: ['Inland hinge logic', 'Optional rail split', 'Practical city reset'],
        },
        {
          city: 'Gangneung',
          citySlug: 'gangneung',
          tier: 1,
          coordinates: { lat: 37.7519, lng: 128.8761 },
          travelTimeFromPrevious: '1h',
          cumulativeTime: '1h 50m',
          pitch: 'The clean east-coast threshold where the route can finally trade inland movement for sea-facing calm.',
          routeRole: 'Coast-opening arrival',
          stayAdvice:
            'Gangneung is the main event on rail, so keep the arrival day light enough to let the coast feel like the start of something, not the exhausted end of transit.',
          whyItEarnsTime:
            'It is the city that makes the direct train worth it by converting a simple transfer into a clear and memorable eastbound opening.',
          highlights: ['Anmok Coffee Street', 'Gyeongpo Beach', 'Ojukheon House'],
        },
      ],
      routePath: [
        [37.5665, 126.978],
        [37.298, 127.637],
        [37.3422, 127.9202],
        [37.7519, 128.8761],
      ],
    },
    car: {
      mode: 'car',
      variants: [carSeoulGangneungRoute],
      ...carSeoulGangneungRoute,
    },
    bicycle: {
      mode: 'bicycle',
      variants: [bicycleSeoulGangneungRoute],
      ...bicycleSeoulGangneungRoute,
    },
    bus: {
      mode: 'bus',
      id: 'bus-eastbound',
      routeCode: '2-0-d',
      routeGroupCode: '2-0',
      routeGroupLabel: 'Eastbound Opening',
      label: 'Bus',
      routeName: 'Express + Intercity Eastbound',
      totalTravelTime: '3h 10m - 3h 50m',
      totalDistance: '229 km',
      summary:
        'A practical eastbound middle path that keeps the route understandable while still letting Wonju matter as the inland hinge before Gangneung.',
      bestFor: 'Budget-conscious eastbound trips and travelers who want more flexibility than KTX without committing to a full self-drive plan.',
      tradeoff:
        'It is slower and less elegant than rail, but it can express the Wonju hinge more clearly while staying simpler than driving.',
      stopPattern:
        'Best fully direct or with one Wonju split when the trip should break the move into inland hinge then coast threshold.',
      chooseWhen:
        'Choose the bus when cost and simple route logic matter more than speed, but you still want Route 2 to feel like a sequence and not just transportation.',
      avoidWhen:
        'Avoid it if the trip needs maximum spontaneity after Gangneung or if the coast continuation is central to the day.',
      pacingNote:
        'The bus version is strongest when it keeps one clean hinge in Wonju and then lets Gangneung carry the route payoff.',
      planningNotes: [
        'Wonju is the most useful stop if the eastbound ride should be split into something humane instead of forced all at once.',
        'Gangneung should still read as the threshold city, not just the place where the bus happens to stop.',
        'If the route will continue south afterward, do not waste all flexibility before reaching the coast.',
      ],
      stopovers: [
        {
          city: 'Wonju',
          citySlug: 'wonju',
          tier: 1,
          coordinates: { lat: 37.3422, lng: 127.9202 },
          travelTimeFromPrevious: '1h 20m',
          cumulativeTime: '1h 20m',
          pitch: 'The inland hinge that makes the eastbound line feel staged and manageable instead of one long utilitarian sit.',
          routeRole: 'Practical hinge',
          stayAdvice:
            'Use Wonju when the bus route should gain a real middle chapter and a more breathable transition before Gangneung.',
          whyItEarnsTime:
            'It gives the lower-cost version of Route 2 genuine structure instead of leaving it as a compromise transport mode.',
          highlights: ['Inland split', 'Strong services', 'Eastbound reset'],
        },
        {
          city: 'Gangneung',
          citySlug: 'gangneung',
          tier: 1,
          coordinates: { lat: 37.7519, lng: 128.8761 },
          travelTimeFromPrevious: '1h 40m',
          cumulativeTime: '3h',
          pitch: 'The sea-facing threshold where the practical eastbound route finally cashes out into coast atmosphere.',
          routeRole: 'Threshold arrival',
          stayAdvice:
            'Keep Gangneung as the proper coast-opening city and do not overload the day so the shoreline still feels like a reward on arrival.',
          whyItEarnsTime:
            'It lets the bus version end with a clear destination payoff rather than only a cheaper transfer.',
          highlights: ['Anmok Coffee Street', 'Gyeongpo Beach', 'Ojukheon House'],
        },
      ],
      routePath: [
        [37.5665, 126.978],
        [37.298, 127.637],
        [37.3422, 127.9202],
        [37.7519, 128.8761],
      ],
    },
  },
};

const carJinburyeongSokchoRoute: TransportRouteVariant = {
  id: 'jinburyeong-goseong',
  routeCode: '3-0-b',
  routeGroupCode: '3-0',
  routeGroupLabel: 'Northern Mountain-to-Sea',
  label: 'Jinburyeong + Goseong',
  routeName: 'Northern Seorak approach via Jinburyeong and Goseong',
  totalTravelTime: '3h 50m - 5h',
  totalDistance: '215 km',
  summary:
    'The northern pass version: a quieter approach where Inje hands the route to Jinburyeong, Goseong, and then Sokcho.',
  bestFor: 'Travelers who want the Seoraksan view to arrive through borderland mountain atmosphere before the sea.',
  tradeoff:
    'It is less direct than a pure expressway-minded arrival, but it gives Route 3 its strongest northern identity.',
  stopPattern:
    'Best with Chuncheon as the cultural anchor, Yanggu as the border-memory chapter, Inje as the mountain threshold, and Goseong as the coast-side prelude.',
  chooseWhen:
    'Choose this when Route 3 should feel like a northern crossing rather than only a fast Sokcho transfer.',
  avoidWhen:
    'Avoid it when weather, time, or winter road conditions make a simpler Sokcho arrival more sensible.',
  pacingNote:
    'The value is in the pass sequence. Do not overload the day with too many side stops or the Seorak arrival will feel rushed.',
  planningNotes: [
    'Jinburyeong gives the route a northern pass identity before Goseong and Sokcho open the coast.',
    'Yanggu and Inje should not disappear from the story; they are what keep Route 3 distinct from Route 2.',
    'This variant is strongest when the traveler wants views, borderland silence, and a slower mountain-to-sea handoff.',
  ],
  stopovers: [
    {
      city: 'Gapyeong',
      citySlug: 'gapyeong',
      tier: 4,
      coordinates: { lat: 37.8315, lng: 127.5099 },
      travelTimeFromPrevious: '1h 10m',
      cumulativeTime: '1h 10m',
      pitch: 'The first river-and-lake escape where Seoul loosens into the Bukhangang corridor.',
      routeRole: 'Leisure gateway',
      stayAdvice:
        'Use Gapyeong lightly: a riverside pause, island detour, or first breath before Chuncheon gives the route more city structure.',
      whyItEarnsTime:
        'It makes the Seoul departure feel scenic early without forcing the route to become a resort itinerary.',
      highlights: ['Bukhangang River', 'Nami Island access', 'Jarasum leisure'],
    },
    {
      city: 'Chuncheon',
      citySlug: 'chuncheon',
      tier: 4,
      coordinates: { lat: 37.8813, lng: 127.7298 },
      travelTimeFromPrevious: '35m',
      cumulativeTime: '1h 45m',
      pitch: 'A lakeside food-and-culture anchor where dakgalbi, Soyang River, and city services make the northern route feel inhabited.',
      routeRole: 'Northern cultural anchor',
      stayAdvice:
        'Chuncheon is the easiest overnight if the route starts late or if the traveler wants food, lake mood, and a softer setup before Yanggu.',
      whyItEarnsTime:
        'It gives Route 3 its first real city chapter rather than letting the line become only scenery and mountain roads.',
      highlights: ['Dakgalbi streets', 'Soyang River', 'Uiamho Lake'],
    },
    {
      city: 'Yanggu',
      citySlug: 'yanggu',
      tier: 4,
      coordinates: { lat: 38.1101, lng: 127.9897 },
      travelTimeFromPrevious: '1h 10m',
      cumulativeTime: '2h 55m',
      pitch: 'A quiet borderland city where DMZ memory, Punch Bowl geography, and war history deepen the northern line.',
      routeRole: 'DMZ memory chapter',
      stayAdvice:
        'Keep Yanggu when Route 3 should feel like a real northern route, not just a pretty way to reach Sokcho.',
      whyItEarnsTime:
        'It gives the route historical gravity and a borderland silence that Gapyeong, Chuncheon, and Sokcho cannot supply by themselves.',
      decisionReason:
        'Choose Yanggu when the route should include war memory and DMZ geography without turning into a military-history article.',
      recoveryValue:
        'Recovery here is quiet and mental: fewer crowds, slower movement, and space to understand the borderland layer.',
      terrainTransition:
        'Yanggu begins shifting the route from lake city rhythm into deeper mountain and DMZ-adjacent terrain.',
      nextLegLogic:
        'After Yanggu, Inje becomes the mountain threshold where the Seoraksan pass choice starts to matter.',
      highlights: ['Punch Bowl geography', 'DMZ memory', 'Borderland landscape'],
    },
    {
      city: 'Inje',
      citySlug: 'inje',
      tier: 4,
      coordinates: { lat: 38.0695, lng: 128.1707 },
      travelTimeFromPrevious: '45m',
      cumulativeTime: '3h 40m',
      pitch: 'The mountain threshold where Naerincheon, valleys, and Seorak approaches turn the route toward the coast.',
      routeRole: 'Seorak pass decision point',
      stayAdvice:
        'Use Inje when the pass choice should be deliberate: Jinburyeong, Hangyeryeong, or Misiryeong each changes how Sokcho arrives.',
      whyItEarnsTime:
        'Inje is the last inland place where the route can choose its Seoraksan view logic before reaching the sea.',
      decisionReason:
        'Keep Inje when the route should explain the mountain crossing rather than hide it inside one vague final leg to Sokcho.',
      recoveryValue:
        'Good for a mountain reset, valley air, and pacing before committing to the pass.',
      terrainTransition:
        'This is where Route 3 becomes pass country with a coastal payoff waiting beyond the ridge.',
      nextLegLogic:
        'From Inje, the route can go north through Jinburyeong and Goseong, south through Hangyeryeong, or direct through Misiryeong.',
      highlights: ['Naerincheon Valley', 'Seorak approach', 'Pass decision'],
    },
    {
      city: 'Goseong',
      citySlug: 'goseong',
      tier: 4,
      coordinates: { lat: 38.3806, lng: 128.4676 },
      travelTimeFromPrevious: '55m',
      cumulativeTime: '4h 35m',
      pitch: 'The northern coast-side prelude where Jinburyeong releases the route toward the East Sea before Sokcho.',
      routeRole: 'Northern coast handoff',
      stayAdvice:
        'Use Goseong when the journey should feel like it touched the northern coast before settling into Sokcho.',
      whyItEarnsTime:
        'It gives the Jinburyeong variant a clearer identity than simply descending from Inje to Sokcho.',
      highlights: ['Goseong coast', 'Northern East Sea', 'Seorak-side handoff'],
    },
    {
      city: 'Sokcho',
      citySlug: 'sokcho',
      tier: 1,
      coordinates: { lat: 38.207, lng: 128.5918 },
      travelTimeFromPrevious: '30m',
      cumulativeTime: '5h 5m',
      pitch: 'The sea arrival where Seoraksan views, harbor food, market life, and northern coastal memory finish the line.',
      routeRole: 'Sea arrival',
      stayAdvice:
        'Sokcho should be treated as the release after a mountain route, not just the place where the drive stops.',
      whyItEarnsTime:
        'It pays off every inland decision before it: river, lake, DMZ memory, pass choice, and finally the East Sea.',
      highlights: ['Seoraksan views', 'Sokcho market', 'East Sea arrival'],
    },
  ],
  routePath: [
    [37.5665, 126.978],
    [37.8315, 127.5099],
    [37.8813, 127.7298],
    [38.1101, 127.9897],
    [38.0695, 128.1707],
    [38.3806, 128.4676],
    [38.207, 128.5918],
  ],
};

const carHangyeryeongSokchoRoute: TransportRouteVariant = {
  ...carJinburyeongSokchoRoute,
  id: 'hangyeryeong-seorak',
  routeCode: '3-1-b',
  label: 'Hangyeryeong Seorak View',
  routeName: 'Seoraksan approach via Hangyeryeong',
  totalTravelTime: '4h - 5h 20m',
  summary:
    'The dramatic Seoraksan-view version: Inje climbs toward Hangyeryeong before Sokcho arrives through a stronger mountain spectacle.',
  tradeoff:
    'It can be slower and more weather-sensitive, but it gives the strongest classic Seoraksan pass mood.',
  stopPattern:
    'Best when the traveler cares about the mountain crossing itself and wants Sokcho to feel earned through Seorak views.',
  chooseWhen:
    'Choose this when the route should prioritize Seoraksan scenery over the gentler northern Goseong handoff.',
  avoidWhen:
    'Avoid it when road conditions, motion sensitivity, or tight timing make the pass feel like stress rather than payoff.',
  planningNotes: [
    'Hangyeryeong is the view-led choice: it should be written as a mountain crossing, not a shortcut.',
    'Inje becomes especially important here because it is the last practical place to pause before the climb.',
    'Sokcho should land as a release after Seorak, with the coast feeling like the exhale after the ridge.',
  ],
  stopovers: carJinburyeongSokchoRoute.stopovers.filter((stop) => stop.citySlug !== 'goseong'),
  routePath: [
    [37.5665, 126.978],
    [37.8315, 127.5099],
    [37.8813, 127.7298],
    [38.1101, 127.9897],
    [38.0695, 128.1707],
    [38.082, 128.376],
    [38.207, 128.5918],
  ],
};

const carMisiryeongSokchoRoute: TransportRouteVariant = {
  ...carJinburyeongSokchoRoute,
  id: 'misiryeong-direct',
  routeCode: '3-2-b',
  label: 'Misiryeong Direct',
  routeName: 'Inje to Sokcho via Misiryeong',
  totalTravelTime: '3h 30m - 4h 30m',
  summary:
    'The cleanest pass-to-coast version: Inje keeps the mountain threshold, then Misiryeong moves quickly toward Sokcho and the sea.',
  tradeoff:
    'It is easier to explain and often simpler to drive, but less expansive than the Jinburyeong or Hangyeryeong versions.',
  stopPattern:
    'Best when Route 3 should keep the mountain-to-sea logic without becoming a long pass study.',
  chooseWhen:
    'Choose this when Sokcho is the main payoff but the route still needs an honest Seorak threshold.',
  avoidWhen:
    'Avoid it if the traveler wants the route to linger through Goseong or make Hangyeryeong the scenic event.',
  planningNotes: [
    'Misiryeong is the practical Seorak handoff: clean, legible, and still visually tied to the mountains.',
    'This is likely the default Route 3 driving version for users who want balance.',
    'Keep Inje prominent or the final leg risks feeling like a generic road to Sokcho.',
  ],
  stopovers: carJinburyeongSokchoRoute.stopovers.filter((stop) => stop.citySlug !== 'goseong'),
  routePath: [
    [37.5665, 126.978],
    [37.8315, 127.5099],
    [37.8813, 127.7298],
    [38.1101, 127.9897],
    [38.0695, 128.1707],
    [38.2106, 128.459],
    [38.207, 128.5918],
  ],
};

export const seoulToSokchoRoute: RouteData = {
  routeCode: '3',
  from: 'Seoul',
  fromSlug: 'seoul',
  to: 'Sokcho',
  toSlug: 'sokcho',
  href: '/route-3',
  routeLabel: 'Seoul to Sokcho',
  headline: 'A northern mountain-to-sea line through lakes, border memory, and Seoraksan passes.',
  overview:
    'Route 3 is not the fast eastbound logic of Route 2. It leaves Seoul through the Bukhangang and Chuncheon, deepens through Yanggu and Inje, then lets Sokcho arrive through a deliberate Seoraksan pass choice.',
  destinationPitch:
    'Use this route when Sokcho should feel earned through northern landscape and memory, not simply reached by highway.',
  bestUseCases: [
    'Travelers who want the northern inland line before the East Sea.',
    'Trips that can turn Yanggu and Inje into meaningful chapters instead of skipping straight to Sokcho.',
    'Drivers choosing between Jinburyeong, Hangyeryeong, and Misiryeong for different Seoraksan approaches.',
  ],
  routePromise: [
    'Gapyeong and Chuncheon soften Seoul into river and lake country.',
    'Yanggu and Inje give the route borderland memory and mountain threshold logic.',
    'The final pass choice changes how Sokcho and Seoraksan arrive.',
  ],
  editorialNotes: [
    'Route 3 should never read as a duplicate Gangneung route. Its identity is northern, quieter, and more pass-led.',
    'Yanggu is the hidden differentiator because it gives the line DMZ and war-memory depth.',
    'Inje is the structural decision point: Jinburyeong/Goseong, Hangyeryeong, and Misiryeong are not interchangeable.',
  ],
  transports: {
    KTX: {
      mode: 'KTX',
      id: 'rail-bus-northern',
      routeCode: '3-0-a',
      routeGroupCode: '3-0',
      routeGroupLabel: 'Northern Mountain-to-Sea',
      label: 'Rail + Bus',
      routeName: 'ITX/Cheongchun + intercity links',
      totalTravelTime: '4h - 6h',
      totalDistance: '210 km',
      summary:
        'A public-transport interpretation of Route 3 that keeps Chuncheon visible but treats Yanggu and Inje as planning choices rather than a single effortless line.',
      bestFor: 'Travelers who want the northern route without driving and are comfortable with bus links.',
      tradeoff:
        'It is less seamless than driving, but it can still express the river-lake-to-Sokcho story if paced carefully.',
      stopPattern:
        'Best with Chuncheon as the easy anchor and Sokcho as the final coast stay.',
      chooseWhen:
        'Choose this when the trip wants Route 3 atmosphere but does not need every pass variant to be driven.',
      avoidWhen:
        'Avoid it if Yanggu, Inje, and pass selection are the whole point; driving explains those better.',
      pacingNote:
        'Public transport should keep the route simpler: Chuncheon first, Sokcho second, and optional inland stops only when timing supports them.',
      planningNotes: [
        'Use this as a route family option, not a promise of one perfectly direct rail line.',
        'Driving remains the clearest way to explain the three pass variants after Inje.',
        'For first-time users, Chuncheon plus Sokcho may be enough to understand the northern line.',
      ],
      stopovers: [
        carJinburyeongSokchoRoute.stopovers[1],
        carJinburyeongSokchoRoute.stopovers[5],
      ],
      routePath: [
        [37.5665, 126.978],
        [37.8813, 127.7298],
        [38.207, 128.5918],
      ],
    },
    car: {
      mode: 'car',
      variants: [carMisiryeongSokchoRoute, carHangyeryeongSokchoRoute, carJinburyeongSokchoRoute],
      ...carMisiryeongSokchoRoute,
    },
    bicycle: {
      mode: 'bicycle',
      id: 'bike-northern-concept',
      routeCode: '3-0-c',
      routeGroupCode: '3-0',
      routeGroupLabel: 'Northern Mountain-to-Sea',
      label: 'Bike Concept',
      routeName: 'Bukhangang + northern inland concept',
      totalTravelTime: '3-5 days',
      totalDistance: '230-280 km',
      summary:
        'A concept route for experienced riders who want river path logic, mountain valleys, and a serious final approach toward Sokcho.',
      bestFor: 'Experienced cyclists with route-planning discipline and weather awareness.',
      tradeoff:
        'This should not be sold as a casual ride; the mountain and pass decisions are real.',
      stopPattern:
        'Best with Chuncheon, Yanggu or Inje, and Sokcho as the main pacing anchors.',
      chooseWhen:
        'Choose this when the rider wants a northern crossing and accepts that some linking segments require judgment.',
      avoidWhen:
        'Avoid it for casual users looking for one simple certified path.',
      pacingNote:
        'Make Inje the serious planning checkpoint before any pass-side commitment.',
      planningNotes: [
        'This needs future detailed route safety work before being promoted heavily.',
        'The page should be honest about road conditions and weather rather than romanticizing the crossing.',
        'Sokcho is the payoff, but the route identity depends on reaching it with energy left.',
      ],
      stopovers: carMisiryeongSokchoRoute.stopovers,
      routePath: carMisiryeongSokchoRoute.routePath,
    },
    bus: {
      mode: 'bus',
      id: 'bus-northern',
      routeCode: '3-0-d',
      routeGroupCode: '3-0',
      routeGroupLabel: 'Northern Mountain-to-Sea',
      label: 'Bus',
      routeName: 'Intercity northern line',
      totalTravelTime: '3h - 5h',
      totalDistance: '210 km',
      summary:
        'A practical version of Route 3 that can keep Chuncheon or Inje in the story without requiring self-driving.',
      bestFor: 'Budget travelers and users who want Sokcho with a northern inland explanation.',
      tradeoff:
        'It is less flexible than driving and cannot express all three pass variants equally.',
      stopPattern:
        'Best direct to Sokcho or with one deliberate Chuncheon/Inje break.',
      chooseWhen:
        'Choose bus when cost and simplicity matter more than controlling the pass sequence.',
      avoidWhen:
        'Avoid it if the pass view itself is the main product.',
      pacingNote:
        'Keep the bus version simple and let the driving variant carry the deeper pass logic.',
      planningNotes: [
        'Use this as the accessible version of Route 3.',
        'Do not overpromise Yanggu/Inje links without checking current schedules.',
        'If the user wants Seoraksan pass control, recommend the car variants instead.',
      ],
      stopovers: [carJinburyeongSokchoRoute.stopovers[1], carJinburyeongSokchoRoute.stopovers[5]],
      routePath: [
        [37.5665, 126.978],
        [37.8813, 127.7298],
        [38.207, 128.5918],
      ],
    },
  },
};

const nationalRoute7Stopovers: RouteStopover[] = [
  {
    city: 'Sokcho',
    citySlug: 'sokcho',
    tier: 4,
    coordinates: { lat: 38.2045, lng: 128.5918 },
    travelTimeFromPrevious: '35m',
    cumulativeTime: '35m',
    pitch: 'A compact East Sea city where Seoraksan, Abai Village, markets, and harbor food turn the northern coast into a real arrival.',
    routeRole: 'Northern coast anchor',
    stayAdvice: 'Use Sokcho as the first full overnight if Route 4 begins with Seoraksan or if Goseong is treated as a quieter prelude.',
    whyItEarnsTime: 'It gives the line immediate traveler recognition while still keeping the route tied to northern landscape and migration memory.',
    highlights: ['Seoraksan access', 'Abai Village', 'Sokcho Tourist & Fishery Market'],
  },
  {
    city: 'Yangyang',
    citySlug: 'yangyang',
    tier: 4,
    coordinates: { lat: 38.0754, lng: 128.619 },
    travelTimeFromPrevious: '25m',
    cumulativeTime: '1h',
    pitch: 'Surf culture, Naksansa heritage, Hajodae views, and airport access make Yangyang the coast where old pilgrimage and young beach energy overlap.',
    routeRole: 'Surf-and-temple hinge',
    stayAdvice: 'Keep Yangyang when the route needs a younger coastal stay or a softer handoff between Sokcho and Gangneung.',
    whyItEarnsTime: 'It proves the east coast is not only scenic road; it has present-tense culture, temple history, and beach identity in one compact stop.',
    highlights: ['Surfyy Beach', 'Naksansa Temple', 'Hajodae Beach'],
  },
  {
    city: 'Gangneung',
    citySlug: 'gangneung',
    tier: 4,
    coordinates: { lat: 37.7519, lng: 128.8761 },
    travelTimeFromPrevious: '45m',
    cumulativeTime: '1h 45m',
    pitch: 'Coffee streets, beaches, markets, and rail access make Gangneung the most complete urban coast chapter in Gangwon.',
    routeRole: 'Major coast-city reset',
    stayAdvice: 'Use Gangneung as the easiest full-service overnight before Route 4 becomes more road-trip oriented again.',
    whyItEarnsTime: 'It gives travelers enough infrastructure to reset without losing the East Sea mood.',
    highlights: ['Anmok Coffee Street', 'Gyeongpo Beach', 'Jungang Market'],
  },
  {
    city: 'Donghae',
    citySlug: 'donghae',
    tier: 4,
    coordinates: { lat: 37.5247, lng: 129.1143 },
    travelTimeFromPrevious: '40m',
    cumulativeTime: '2h 25m',
    pitch: 'A port city where Mukho Lighthouse, Nongoldam-gil, Chuam rocks, and Mureung Valley pull maritime work, sunrise scenery, and mountain water together.',
    routeRole: 'Port-and-sunrise connector',
    stayAdvice: 'Use Donghae when the itinerary wants a smaller port-city chapter before Samcheok and the quieter coast south.',
    whyItEarnsTime: 'It keeps the road grounded in working-harbor history instead of letting Route 4 become a sequence of beaches only.',
    highlights: ['Mukho Lighthouse', 'Chuam Chotdaebawi Rock', 'Mureunggyegok Valley'],
  },
  {
    city: 'Samcheok',
    citySlug: 'samcheok',
    tier: 4,
    coordinates: { lat: 37.4499, lng: 129.1652 },
    travelTimeFromPrevious: '25m',
    cumulativeTime: '2h 50m',
    pitch: 'Cliffs, caves, beaches, and rail-bike scenery stretch the coast into a slower road-trip rhythm after Donghae.',
    routeRole: 'Scenic continuation',
    stayAdvice: 'Keep Samcheok for travelers who want the line to stay visual before Uljin opens the long coast.',
    whyItEarnsTime: 'It adds texture and prevents the route from jumping too quickly from Gangneung into the far southeast.',
    highlights: ['Samcheok beaches', 'Cave country', 'Coastal rail-bike scenery'],
  },
  {
    city: 'Uljin',
    citySlug: 'uljin',
    tier: 4,
    coordinates: { lat: 36.9931, lng: 129.4005 },
    travelTimeFromPrevious: '1h 35m',
    cumulativeTime: '4h 25m',
    pitch: 'A spacious East Sea county where beaches, forest edges, seafood, and recovery logic keep the long middle coast open.',
    routeRole: 'Long-coast breather',
    stayAdvice: 'Use Uljin as the quiet overnight if the route needs air and recovery between Gangwon and Gyeongsang coast chapters.',
    whyItEarnsTime: 'It protects Route 4 from becoming only a chain of bigger city names.',
    highlights: ['Open East Sea coast', 'Seafood', 'Forest-road recovery'],
  },
  {
    city: 'Yeongdeok',
    citySlug: 'yeongdeok',
    tier: 4,
    coordinates: { lat: 36.415, lng: 129.365 },
    travelTimeFromPrevious: '1h',
    cumulativeTime: '5h 25m',
    pitch: 'A seafood-forward coast town where crab identity, ports, and sea roads make the route taste more local.',
    routeRole: 'Coastal flavor anchor',
    stayAdvice: 'Stop here when Route 4 needs a food chapter rather than another scenery-only pause.',
    whyItEarnsTime: 'It turns the coast into a region you can eat, not just photograph.',
    highlights: ['Yeongdeok crab', 'Fishing ports', 'Blue Road coastline'],
  },
  {
    city: 'Pohang',
    citySlug: 'pohang',
    tier: 4,
    coordinates: { lat: 36.019, lng: 129.3435 },
    travelTimeFromPrevious: '55m',
    cumulativeTime: '6h 20m',
    pitch: 'A steel-and-sea city where industrial Korea and open coast sit side by side before the route turns toward Gyeongju and Ulsan.',
    routeRole: 'Late-coast hinge',
    stayAdvice: 'Use Pohang when the route needs services, stronger city scale, or a modern-industry chapter before the heritage handoff.',
    whyItEarnsTime: 'It makes Route 4 feel contemporary, not only scenic or nostalgic.',
    highlights: ['Homigot', 'Jukdo Market', 'Steel-city coastline'],
  },
  {
    city: 'Gyeongju',
    citySlug: 'gyeongju',
    tier: 2,
    coordinates: { lat: 35.8562, lng: 129.2247 },
    travelTimeFromPrevious: '45m',
    cumulativeTime: '7h 05m',
    pitch: 'Korea’s Silla-era capital turns the coast route inward for one major heritage chapter before the final metropolitan south.',
    routeRole: 'Heritage handoff',
    stayAdvice: 'Use Gyeongju as the highest-value cultural overnight before Ulsan and Busan.',
    whyItEarnsTime: 'It gives Route 4 historical depth instead of letting the final third become only ports and expressway logic.',
    highlights: ['Silla heritage', 'Royal tombs', 'Bomun Lake'],
  },
  {
    city: 'Ulsan',
    citySlug: 'ulsan',
    tier: 4,
    coordinates: { lat: 35.5384, lng: 129.3114 },
    travelTimeFromPrevious: '45m',
    cumulativeTime: '7h 50m',
    pitch: 'Industrial power, whale memory, Daewangam cliffs, and the restored Taehwa River make Ulsan the modern Korea chapter before Busan.',
    routeRole: 'Industrial coast metropolis',
    stayAdvice: 'Keep Ulsan when the route should show present-day Korea at scale before the Busan finish.',
    whyItEarnsTime: 'It proves the east coast is also production, ecology recovery, and metropolitan life, not just resort scenery.',
    highlights: ['Daewangam Park', 'Taehwagang National Garden', 'Jangsaengpo Whale Culture Village'],
  },
  {
    city: 'Busan',
    citySlug: 'busan',
    tier: 1,
    coordinates: { lat: 35.1796, lng: 129.0756 },
    travelTimeFromPrevious: '1h',
    cumulativeTime: '8h 50m',
    pitch: 'Korea’s major southern port closes the route with beaches, markets, hillsides, rail, ferries, and full-city arrival energy.',
    routeRole: 'Southern finish',
    stayAdvice: 'End with at least two nights if Route 4 has been paced slowly; Busan should feel like a finale, not a checkout point.',
    whyItEarnsTime: 'It resolves the full east coast line into Korea’s strongest port-city finish.',
    highlights: ['Haeundae', 'Jagalchi Market', 'Gamcheon Culture Village'],
  },
];

const carNationalRoute7Route: TransportRouteVariant = {
  id: 'national-route-7',
  routeCode: '4-0-c',
  routeGroupCode: '4-0',
  routeGroupLabel: 'National Route 7 Coast',
  label: 'National Route 7',
  routeName: 'Goseong to Busan East Coast Drive',
  totalTravelTime: '9h - 11h driving time',
  totalDistance: '520-560 km',
  summary:
    'The long-form East Sea route: start at the northern coast, follow National Route 7 logic south, and let surf towns, port cities, heritage, industry, and Busan build in sequence.',
  bestFor: 'Self-drive travelers, repeat visitors, coast-focused itineraries, and users who want Korea beyond the Seoul-Busan default.',
  tradeoff:
    'It is not the fastest way to reach Busan, but it is one of the clearest ways to make the east coast itself the destination.',
  stopPattern:
    'Best with two to five overnights depending on whether the traveler wants a fast coastal sampler or a proper east-coast road trip.',
  chooseWhen:
    'Choose this when the journey is the product: Seoraksan edge, surf, ports, seafood, heritage, industrial coast, and Busan all need room.',
  avoidWhen:
    'Avoid it when the user only needs a direct Seoul-to-Busan transfer or cannot handle a long coastal route with many tempting stops.',
  pacingNote:
    'The route works best when every day has one clear city role rather than trying to collect all twelve stops equally.',
  planningNotes: [
    'Goseong and Sokcho overlap with Route 3, so the page should explain that Route 4 begins after the northern mountain-to-sea arrival.',
    'Yangyang, Donghae, and Ulsan are the new quality-control cities because they carry surf, port, and industrial-metropolitan identity.',
    'Gyeongju should remain a heritage handoff before Ulsan and Busan rather than being flattened into a coastal service stop.',
  ],
  stopovers: nationalRoute7Stopovers,
  routePath: [
    [38.3806, 128.4676],
    [38.2045, 128.5918],
    [38.0754, 128.619],
    [37.7519, 128.8761],
    [37.5247, 129.1143],
    [37.4499, 129.1652],
    [36.9931, 129.4005],
    [36.415, 129.365],
    [36.019, 129.3435],
    [35.8562, 129.2247],
    [35.5384, 129.3114],
    [35.1796, 129.0756],
  ],
};

export const goseongToBusanRoute: RouteData = {
  routeCode: '4',
  from: 'Goseong',
  fromSlug: 'goseong',
  to: 'Busan',
  toSlug: 'busan',
  href: '/route-4',
  routeLabel: 'Goseong to Busan',
  headline: 'Korea’s long East Sea line through National Route 7, surf towns, ports, heritage, industry, and Busan.',
  overview:
    'Route 4 is the coastal counterweight to the inland and mountain routes. It begins where the northern coast meets DMZ and Seoraksan memory, then follows the East Sea through Yangyang, Gangneung, Donghae, Samcheok, Uljin, Yeongdeok, Pohang, Gyeongju, Ulsan, and finally Busan.',
  destinationPitch:
    'Use this route when Korea’s east coast should be the main story, not a scenery strip beside the road.',
  bestUseCases: [
    'Travelers planning a Korea east coast road trip from Goseong or Sokcho toward Busan.',
    'Repeat visitors who already know Seoul and Busan but want the towns and cities between them to matter.',
    'Itineraries that need surf culture, ports, seafood, Silla heritage, industrial Korea, and Busan in one long line.',
  ],
  routePromise: [
    'The north starts with Seoraksan, DMZ-adjacent coast, and Sokcho market energy.',
    'The middle coast turns through Yangyang surf, Gangneung coffee, Donghae port life, Samcheok cliffs, and Uljin openness.',
    'The southeast closes with Yeongdeok seafood, Pohang industry, Gyeongju heritage, Ulsan modernity, and Busan arrival.',
  ],
  editorialNotes: [
    'Route 4 should be written as a long-form coastal itinerary, not as a shortcut between famous cities.',
    'Shared cities are intentional: Goseong and Sokcho overlap with Route 3, while Gangneung and Samcheok overlap with Route 2.',
    'The strongest page angle is past and present together: temples, ports, industry, ecology recovery, and living coast culture.',
  ],
  transports: {
    KTX: {
      mode: 'KTX',
      id: 'rail-bus-east-coast',
      routeCode: '4-0-a',
      routeGroupCode: '4-0',
      routeGroupLabel: 'National Route 7 Coast',
      label: 'Rail + Bus',
      routeName: 'East Coast rail and intercity bus interpretation',
      totalTravelTime: '2-5 days recommended',
      totalDistance: '520-560 km',
      summary:
        'A public-transport interpretation of Route 4 using rail where it helps and buses where the coastal line needs local access.',
      bestFor: 'Travelers who want the east-coast story without driving every segment.',
      tradeoff:
        'It is less seamless than a car because the coast is a network of cities, not one continuous high-speed line.',
      stopPattern:
        'Best with Gangneung, Donghae or Samcheok, Pohang or Gyeongju, and Busan as the main planning anchors.',
      chooseWhen:
        'Choose this when the user values coast chapters and can accept transfers.',
      avoidWhen:
        'Avoid it if the user wants every small coastal stop on a rigid timetable.',
      pacingNote:
        'Keep the public-transport version selective so it feels intentional rather than exhausting.',
      planningNotes: [
        'Use rail for major anchors and buses for the places where Route 7 coastal texture matters.',
        'Do not overpromise directness; this version should be honest about transfers.',
        'The route page should still explain why the coastal sequence matters, even when not every stop is used.',
      ],
      stopovers: [
        nationalRoute7Stopovers[2],
        nationalRoute7Stopovers[3],
        nationalRoute7Stopovers[7],
        nationalRoute7Stopovers[8],
        nationalRoute7Stopovers[10],
      ],
      routePath: carNationalRoute7Route.routePath,
    },
    car: {
      mode: 'car',
      ...carNationalRoute7Route,
    },
    bicycle: {
      mode: 'bicycle',
      id: 'bike-east-coast-concept',
      routeCode: '4-0-b',
      routeGroupCode: '4-0',
      routeGroupLabel: 'National Route 7 Coast',
      label: 'East Coast Bike Concept',
      routeName: 'East Coast bicycle route concept',
      totalTravelTime: '6-10 days',
      totalDistance: '520-600 km',
      summary:
        'A serious coastal cycling concept that treats the East Sea as the route identity and uses city stops for recovery, weather decisions, and food.',
      bestFor: 'Experienced riders who want a long Korean coast ride with real planning discipline.',
      tradeoff:
        'The romance is strong, but wind, traffic, road choice, and weather need careful handling.',
      stopPattern:
        'Best with shorter daily stages and recovery anchors in Gangneung, Donghae/Samcheok, Uljin, Pohang/Gyeongju, and Ulsan/Busan.',
      chooseWhen:
        'Choose this when the rider wants a coast-first journey rather than a transfer route.',
      avoidWhen:
        'Avoid it for casual cyclists unless detailed local safety planning is added.',
      pacingNote:
        'The bicycle version should read as aspirational but honest: beautiful, long, and not frictionless.',
      planningNotes: [
        'Future work should add safety notes, certification points, and route-surface guidance before this becomes a primary product.',
        'Weather and wind matter more here than on short inland rides.',
        'Cities should be presented as recovery systems, not only scenic milestones.',
      ],
      stopovers: nationalRoute7Stopovers,
      routePath: carNationalRoute7Route.routePath,
    },
    bus: {
      mode: 'bus',
      id: 'bus-east-coast',
      routeCode: '4-0-d',
      routeGroupCode: '4-0',
      routeGroupLabel: 'National Route 7 Coast',
      label: 'Intercity Bus',
      routeName: 'East Coast intercity bus line',
      totalTravelTime: '2-5 days recommended',
      totalDistance: '520-560 km',
      summary:
        'A bus-led version for travelers who want the East Sea corridor with fewer rental-car decisions.',
      bestFor: 'Budget travelers, solo travelers, and users who prefer city-to-city coastal movement.',
      tradeoff:
        'It keeps costs down but makes small scenic detours harder than driving.',
      stopPattern:
        'Best when the traveler chooses fewer anchor cities rather than trying to bus-hop every coastal town.',
      chooseWhen:
        'Choose bus when simplicity and price matter more than reaching every viewpoint.',
      avoidWhen:
        'Avoid it when the plan depends on remote beaches, sunrise points, or flexible photo stops.',
      pacingNote:
        'Bus Route 4 should privilege city anchors and keep minor stops optional.',
      planningNotes: [
        'Gangneung, Donghae/Samcheok, Pohang/Gyeongju, Ulsan, and Busan make the clearest bus anchors.',
        'The route needs future schedule-aware guidance before being sold as a strict plan.',
        'Use this mode to make the coast accessible, not to pretend it is as flexible as driving.',
      ],
      stopovers: [
        nationalRoute7Stopovers[2],
        nationalRoute7Stopovers[3],
        nationalRoute7Stopovers[7],
        nationalRoute7Stopovers[9],
        nationalRoute7Stopovers[10],
      ],
      routePath: carNationalRoute7Route.routePath,
    },
  },
};

const allRoutes: RouteData[] = [
  seoulToBusanRoute,
  seoulToGangneungRoute,
  seoulToSokchoRoute,
  goseongToBusanRoute,
];

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
