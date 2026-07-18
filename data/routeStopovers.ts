export type TransportMode = 'KTX' | 'car' | 'bicycle' | 'bus';

export interface RouteStopover {
  city: string;
  citySlug: string;
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
      coordinates: { lat: 36.3504, lng: 127.3845 },
      travelTimeFromPrevious: '50m',
      cumulativeTime: '1h 50m',
      pitch: 'Science and innovation hub where Korea\'s research heart beats.',
      routeRole: 'Central stabilizer',
      stayAdvice: 'Useful when you want to divide the route cleanly without adding too much narrative complexity.',
      whyItEarnsTime:
        'Daejeon gives the car route structure, Sungsimdang food memory, science-city texture, and breathing room without asking you to leave the main corridor.',
      highlights: ['Sungsimdang bakery', 'National Science Museum', 'Yuseong Hot Springs'],
    },
    {
      city: 'Daegu',
      citySlug: 'daegu',
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
    'This is the most legible "Seoul to Busan by bike" story because the inland corridor has established long-distance cycling logic.',
    'Saejae and Nakdong are the route ideas that matter here, not just generic inland roads.',
    'Busan feels like a genuine finish line on this version because the whole route builds toward it.',
  ],
  stopovers: [
    {
      city: 'Chungju',
      citySlug: 'chungju',
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
          coordinates: { lat: 36.3504, lng: 127.3845 },
          travelTimeFromPrevious: '50m',
          cumulativeTime: '50m',
          pitch:
            'A clean first pause where research culture, hot springs, and efficient city rhythm reset the route without slowing it down too much.',
          routeRole: 'Reset city',
          stayAdvice: 'Best as a lunch stop, half-day pause, or easy first-night reset if Seoul started too fast.',
          whyItEarnsTime:
            'Daejeon earns time when you want to smooth the corridor without making it faceless. Sungsimdang, Yuseong, and science-city identity keep the stop calm, efficient, and memorable.',
          highlights: ['Sungsimdang bakery', 'National Science Museum', 'Yuseong Hot Springs'],
        },
        {
          city: 'Daegu',
          citySlug: 'daegu',
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
          coordinates: { lat: 36.3504, lng: 127.3845 },
          travelTimeFromPrevious: '1h 30m',
          cumulativeTime: '1h 30m',
          pitch: 'Science and innovation hub where Korea\'s research heart beats.',
          routeRole: 'Practical split',
          stayAdvice: 'Use Daejeon when you want to divide the long ride without turning the route into a major reroute project.',
          whyItEarnsTime:
            'It respects the bus route\'s main virtue: simplicity. The stop feels useful rather than ornamental.',
          highlights: ['Sungsimdang bakery', 'National Science Museum', 'Yuseong Hot Springs'],
        },
        {
          city: 'Daegu',
          citySlug: 'daegu',
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
  label: 'Olympic Highlands + Coast Arrival',
  routeName: 'Yeongdong Expressway via Wonju, Pyeongchang, and Daegwallyeong',
  totalTravelTime: '3h 20m - 4h 30m',
  totalDistance: '250 km',
  summary:
    'The strongest editorial version of Route 2: Seoul urgency loosens through Yeoju, gathers in Wonju, rises into Pyeongchang and Daegwallyeong, then resolves at Gangneung and the sea.',
  bestFor:
    'Self-drive trips that want a real eastbound shape instead of a simple destination transfer.',
  tradeoff:
    'It is still efficient, but the point is to let the route breathe through Wonju, Olympic highlands, Odaesan context, and the final descent into Gangneung.',
  stopPattern:
    'Best with Yeoju as the first junction cue, Wonju as the inland hinge, Pyeongchang/Daegwallyeong as the highland chapter, and Gangneung as the clean arrival.',
  chooseWhen:
    'Choose this when Gangneung should feel earned through mountains, winter-sports memory, Odaesan, and the Daegwallyeong pass rather than simply reached.',
  avoidWhen:
    'Skip it if the only goal is to arrive in Gangneung as fast as possible without giving the route any structure of its own.',
  pacingNote:
    'This version works best when Wonju handles the inland release, Pyeongchang and Daegwallyeong carry the highland story, and Gangneung lands as the Route 2 terminus.',
  planningNotes: [
    'Yeoju gives Route 2 a cleaner first junction cue before Wonju carries the deeper eastbound hinge role.',
    'Wonju is the route-defining city here because it is the first place the eastbound line starts feeling branch-capable instead of Seoul-adjacent.',
    'Pyeongchang and Daegwallyeong should carry 2018 Winter Olympics, ski resort, Odaesan, Woljeongsa, ranch, and highland-pass identity.',
    'Gangneung should be treated as the Route 2 terminus and a junction city where travelers can either stop or continue onto Route 4.',
  ],
  stopovers: [
    {
      city: 'Yeoju',
      citySlug: 'yeoju',
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
      city: 'Pyeongchang',
      citySlug: 'pyeongchang',
      coordinates: { lat: 37.3705, lng: 128.3902 },
      travelTimeFromPrevious: '55m',
      cumulativeTime: '2h 50m',
      pitch: 'The Olympic highland chapter where Route 2 gains winter-sports memory, Jinbu access, ski resorts, and Odaesan depth before the sea.',
      routeRole: 'Olympic highland gateway',
      stayAdvice:
        'Use Pyeongchang when the trip should slow into the mountains, ski resorts, Odaesan, Woljeongsa, or the 2018 Winter Olympics story before Gangneung.',
      whyItEarnsTime:
        'Pyeongchang makes Route 2 feel like a mountain-to-sea crossing instead of a blank expressway between Wonju and Gangneung.',
      decisionReason:
        'Keep Pyeongchang when the route needs global recognition and local depth in the same highland chapter.',
      recoveryValue:
        'Resort stays, temple walks, forest air, and cooler highland pacing make this the strongest recovery layer between Wonju and Gangneung.',
      sleepValue:
        'A strong overnight for ski trips, Odaesan visits, slower winter travel, or anyone who wants Gangneung to arrive the next day with more force.',
      foodValue:
        'Mountain resort meals, simple local food, and temple-adjacent pacing support the stop without needing a big-city dining identity.',
      terrainTransition:
        'Pyeongchang is where Route 2 climbs from inland city logic into Gangwon highland atmosphere.',
      nextLegLogic:
        'After Pyeongchang, Daegwallyeong becomes the final pass-side cue before the road drops toward Gangneung and the East Sea.',
      highlights: ['2018 Winter Olympics', 'Odaesan National Park', 'Woljeongsa Temple'],
    },
    {
      city: 'Daegwallyeong',
      citySlug: 'daegwallyeong',
      coordinates: { lat: 37.6771, lng: 128.7051 },
      travelTimeFromPrevious: '35m',
      cumulativeTime: '3h 25m',
      pitch: 'The highland pass where ski venues, ranch scenery, wind, snow, and mountain roads prepare the final descent to Gangneung.',
      routeRole: 'Final highland pass',
      stayAdvice:
        'Use Daegwallyeong when the route should feel like it crosses a real mountain threshold before the coast arrives.',
      whyItEarnsTime:
        'It gives Route 2 a physical and emotional last mountain beat between Pyeongchang and Gangneung.',
      decisionReason:
        'Keep Daegwallyeong when the page needs to explain why Gangneung feels like a payoff after a crossing, not just a destination.',
      recoveryValue:
        'Highland air, resort infrastructure, and ranch-side scenery create a softer pause before the coast.',
      sleepValue:
        'Useful for winter resort stays or slower travelers who want the mountain pass to become a night rather than a drive-by.',
      foodValue:
        'Best framed through resort meals, simple mountain food, and warm stops before the descent.',
      terrainTransition:
        'Daegwallyeong is the final mountain threshold before Route 2 turns from highland to sea.',
      nextLegLogic:
        'After Daegwallyeong, Gangneung should arrive as the clear Route 2 terminus and Route 4 junction.',
      highlights: ['Alpensia', 'Yongpyong', 'Daegwallyeong highlands'],
    },
    {
      city: 'Gangneung',
      citySlug: 'gangneung',
      coordinates: { lat: 37.7519, lng: 128.8761 },
      travelTimeFromPrevious: '35m',
      cumulativeTime: '4h',
      pitch: 'The sea-facing terminus where Route 2 finally resolves after Yeoju, Wonju, Pyeongchang, and Daegwallyeong.',
      routeRole: 'Route 2 terminus and Route 4 junction',
      stayAdvice:
        'Keep Gangneung as the Route 2 finish. From here, travelers either stay and let the mountain-to-sea route complete or continue south on Route 4.',
      whyItEarnsTime:
        'Gangneung earns time because it converts the highland crossing into a full coastal arrival and a clean route decision point.',
      decisionReason:
        'Choose Gangneung when the route needs a true ending that can also become a junction into the longer National Route 7 coast.',
      recoveryValue:
        'Sea air, easier pacing, and a calmer shoreline mood make Gangneung one of the clearest emotional resets on the eastbound line.',
      sleepValue:
        'A natural overnight because it lets the coast begin with energy instead of being squeezed into the exhausted tail of a transfer day.',
      foodValue:
        'Coffee, seafood, and coast-adjacent meals matter here because they reinforce the route identity shift from inland hinge to shoreline chapter.',
      terrainTransition:
        'Gangneung is the place where Route 2 fully crosses over from interior and highland positioning into east coast presence.',
      nextLegLogic:
        'From Gangneung, the route can stop honorably or continue south into Route 4 toward Donghae and Samcheok.',
      highlights: ['Anmok Coffee Street', 'Gyeongpo Beach', 'Ojukheon House'],
    },
  ],
  routePath: [
    [37.5665, 126.978],
    [37.298, 127.637],
    [37.3422, 127.9202],
    [37.3705, 128.3902],
    [37.6771, 128.7051],
    [37.7519, 128.8761],
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
    'A stitched eastbound bicycle corridor that uses Seoul-side path logic, Wonju setup, highland caution through Pyeongchang and Daegwallyeong, and a coast-opening finish in Gangneung.',
  bestFor:
    'Riders who want an honest eastbound route concept rather than a false promise of one perfectly continuous certified line.',
  tradeoff:
    'It takes more planning discipline than a single official path, but it produces a much clearer Seoul-to-coast narrative.',
  stopPattern:
    'Best with Wonju as the setup hinge, Pyeongchang or Daegwallyeong as the mountain checkpoint, and Gangneung as the coast-opening finish.',
  chooseWhen:
    'Choose this when the ride should feel assembled with intention and when Wonju matters as a true inland branch city before the coast.',
  avoidWhen:
    'Skip it if the bike plan must be explained as one seamless official Seoul-to-Gangneung certification route.',
  pacingNote:
    'The route works best when Wonju absorbs setup and resupply pressure so the final move into Gangneung can feel like an arrival into a new chapter rather than a survival push.',
  planningNotes: [
    'Be explicit that this is a stitched corridor using official path logic where available and practical linking segments where necessary.',
    'Wonju is the most useful inland hinge because it can absorb setup, weather, fatigue, and route-choice adjustments before the final eastbound commitment.',
        'If the rider still has energy after Gangneung, Route 4 is the right frame for continuing south toward Donghae and Samcheok.',
  ],
  stopovers: [
    {
      city: 'Wonju',
      citySlug: 'wonju',
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
      city: 'Pyeongchang',
      citySlug: 'pyeongchang',
      coordinates: { lat: 37.3705, lng: 128.3902 },
      travelTimeFromPrevious: 'mountain approach',
      cumulativeTime: 'highland checkpoint',
      pitch: 'The Olympic highland checkpoint where the ride becomes a real Gangwon crossing rather than an abstract eastbound line.',
      routeRole: 'Highland checkpoint',
      stayAdvice:
        'Use Pyeongchang when the bike route needs a safer mountain-stage pause, Odaesan context, or winter-sports geography before Daegwallyeong.',
      whyItEarnsTime:
        'It adds recovery and realism to a route that should not pretend the mountain crossing is casual.',
      highlights: ['Olympic highlands', 'Jinbu access', 'Odaesan context'],
    },
    {
      city: 'Daegwallyeong',
      citySlug: 'daegwallyeong',
      coordinates: { lat: 37.6771, lng: 128.7051 },
      travelTimeFromPrevious: 'final climb logic',
      cumulativeTime: 'pass threshold',
      pitch: 'The final highland threshold before the ride drops toward Gangneung and sea air.',
      routeRole: 'Pass threshold',
      stayAdvice:
        'Treat Daegwallyeong as a serious weather and effort checkpoint, not just a scenic label.',
      whyItEarnsTime:
        'It explains why Gangneung feels earned after the crossing.',
      highlights: ['Highland pass', 'Resort infrastructure', 'Gangneung descent'],
    },
    {
      city: 'Gangneung',
      citySlug: 'gangneung',
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
  ],
  routePath: [
    [37.5665, 126.978],
    [37.3422, 127.9202],
    [37.3705, 128.3902],
    [37.6771, 128.7051],
    [37.7519, 128.8761],
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
  headline: 'A mountain-to-sea route through Yeoju, Wonju, Pyeongchang, Daegwallyeong, and Gangneung.',
  overview:
    'Route 2 is not a smaller Seoul-to-Busan. It is the cleanest Seoul-origin eastbound line on the site: Yeoju creates the first branch cue, Wonju releases the route inland, Pyeongchang and Daegwallyeong carry the Olympic highland crossing, then Gangneung completes the move at the sea.',
  destinationPitch:
    'Use this route when Gangneung should feel like a real mountain-to-sea payoff and a junction into the longer east coast.',
  bestUseCases: [
    'Trips that want a shorter flagship route without losing clear stopover logic.',
    'Eastbound itineraries where Yeoju, Wonju, Pyeongchang, and Daegwallyeong should matter as real chapters, not just pass-through names.',
    'Travelers choosing between direct arrival, coast-opening driving, or an honest stitched bicycle corridor.',
  ],
  routePromise: [
    'Yeoju gives the route its first split, Wonju gives it the real inland hinge, and Pyeongchang/Daegwallyeong make the crossing feel mountainous before Gangneung lands.',
    'You can keep this route complete at Gangneung or use Gangneung as the junction into Route 4 and the wider east coast.',
    'Route 2 stays Seoul-first while feeling clearly different from the long southbound logic of Route 1.',
  ],
  editorialNotes: [
    'Yeoju should be visible as the shared junction cue, while Wonju remains the structural difference-maker for the eastbound identity.',
    'Pyeongchang and Daegwallyeong are the missing middle: they carry ski, Olympic, Odaesan, and highland-pass identity.',
    'Treat Gangneung as both Route 2 terminus and Route 4 junction, so the route feels complete without closing the coast.',
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
        'Skip KTX as the main plan if Wonju, Pyeongchang, and Daegwallyeong should be deeply inhabited rather than treated as route context.',
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
    'Shared cities are intentional: Goseong and Sokcho overlap with Route 3, while Gangneung is the Route 2 terminus and Route 4 junction.',
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

const jeollaSouthCoastStopovers: RouteStopover[] = [
  {
    city: 'Cheonan',
    citySlug: 'cheonan',
    coordinates: { lat: 36.8157, lng: 127.1138 },
    travelTimeFromPrevious: '1h - 1h 20m',
    cumulativeTime: '1h 10m',
    pitch: 'A practical first southern reset where the Seoul departure becomes manageable before Gongju and the Jeolla line.',
    routeRole: 'First southbound reset',
    stayAdvice: 'Use Cheonan when the Seoul-to-Gongju jump feels too long, especially for late starts or travelers who need a simple station-side pause.',
    whyItEarnsTime:
      'Cheonan closes the first gap on Route 5 and works as a junction-capable city because it already supports Route 1 while also softening the move toward Gongju.',
    decisionReason: 'Keep it when the traveler needs the first hour out of Seoul to feel humane.',
    nextLegLogic: 'After Cheonan, Gongju becomes the Baekje gateway rather than a large first leap from Seoul.',
    highlights: ['Station-side reset', 'Walnut snack identity', 'Cheonan-Asan mobility'],
  },
  {
    city: 'Gongju',
    citySlug: 'gongju',
    coordinates: { lat: 36.4465, lng: 127.119 },
    travelTimeFromPrevious: '1h 50m - 2h 20m',
    cumulativeTime: '2h',
    pitch: 'A Baekje gateway where fortress walls, royal memory, and riverside pacing give the Jeolla line a deeper first chapter.',
    routeRole: 'Baekje threshold',
    stayAdvice: 'Use Gongju as the first heritage pause if the traveler wants history before Jeonju, or a light overnight when Seoul departure is late.',
    whyItEarnsTime:
      'Gongju prevents Route 5 from becoming only a food-and-coast line. Gongsanseong, Baekje royal memory, Magoksa, and the Geumgang setting make the southbound turn feel authored.',
    decisionReason: 'Keep it when the route needs Baekje context before the Jeolla identity opens.',
    nextLegLogic: 'After Gongju, the route turns from central Korea into Jeonju, where food, hanok streets, and stay logic become stronger.',
    highlights: ['Gongsanseong Fortress', 'Baekje royal memory', 'Magoksa Temple'],
  },
  {
    city: 'Jeonju',
    citySlug: 'jeonju',
    coordinates: { lat: 35.8242, lng: 127.148 },
    travelTimeFromPrevious: '1h 10m - 1h 30m',
    cumulativeTime: '3h 30m',
    pitch: 'A hanok, bibimbap, makgeolli, and street-food city that gives Route 5 its most searchable inland overnight.',
    routeRole: 'Jeolla food-and-hanok anchor',
    stayAdvice: 'Treat Jeonju as the most obvious overnight on Route 5, especially for first-time travelers who need a clear cultural reward.',
    whyItEarnsTime:
      'Jeonju makes the route legible to English-speaking travelers through Hanok Village, bibimbap, makgeolli alleys, markets, and a living old-city texture.',
    decisionReason: 'Keep it when the route needs a high-confidence food and stay anchor before the deeper southern chapters.',
    nextLegLogic: 'After Jeonju, the main Route 5 line turns toward Gwangju, while the inland story variant can move through Imsil and Namwon.',
    highlights: ['Jeonju Hanok Village', 'Jeonju bibimbap', 'Makgeolli alley'],
  },
  {
    city: 'Imsil',
    citySlug: 'imsil',
    coordinates: { lat: 35.6179, lng: 127.2891 },
    travelTimeFromPrevious: '35m - 45m',
    cumulativeTime: '4h 10m',
    pitch: 'A small Jeolla food-production chapter where Korea\'s cheese story gives the Jeonju-to-Namwon gap a present-day hook.',
    routeRole: 'Jeolla cheese and lake pause',
    stayAdvice: 'Use Imsil as a short family-friendly or food-story pause rather than a required overnight.',
    whyItEarnsTime:
      'Imsil Cheese Theme Park, local dairy memory, Okjeongho lake scenery, and rural Jeolla pacing turn a blank transfer into a memorable modern local-food chapter.',
    decisionReason: 'Keep it when the Namwon variant needs a lighter present-day stop between Jeonju and Chunhyang country.',
    nextLegLogic: 'After Imsil, Namwon takes over with Chunhyang, Gwanghalluwon, and the Jirisan edge.',
    highlights: ['Imsil Cheese Theme Park', 'Korea cheese story', 'Okjeongho lake scenery'],
  },
  {
    city: 'Namwon',
    citySlug: 'namwon',
    coordinates: { lat: 35.4164, lng: 127.3906 },
    travelTimeFromPrevious: '55m - 1h 20m',
    cumulativeTime: '4h 40m',
    pitch: 'A romance-and-mountain threshold where Chunhyang, Gwanghalluwon, and Jirisan make the past feel close to the road.',
    routeRole: 'Chunhyang and Jirisan handoff',
    stayAdvice: 'Best as a half-day story stop or a slower overnight when the traveler wants Jirisan-adjacent depth instead of rushing to the coast.',
    whyItEarnsTime:
      'Namwon gives the route a literary and landscape chapter. Chunhyang memory, Gwanghalluwon Garden, river walks, and Jirisan access keep the line from becoming only urban.',
    decisionReason: 'Keep it when Route 5 should carry story, garden atmosphere, and mountain proximity before Suncheon.',
    nextLegLogic: 'After Namwon, Suncheon shifts the route from romance and mountain edge into ecology and coastal wetland logic.',
    highlights: ['Gwanghalluwon Garden', 'Chunhyang story', 'Jirisan access'],
  },
  {
    city: 'Suncheon',
    citySlug: 'suncheon',
    coordinates: { lat: 34.9506, lng: 127.4872 },
    travelTimeFromPrevious: '1h - 1h 20m',
    cumulativeTime: '5h 50m',
    pitch: 'A wetland and garden city where Suncheon Bay turns the route from inland culture into ecological south-coast travel.',
    routeRole: 'Ecology gateway',
    stayAdvice: 'Use Suncheon as a calm overnight when Yeosu would be too compressed, or as the ecological highlight before the island city finish.',
    whyItEarnsTime:
      'Suncheon Bay Wetland, Suncheon Bay National Garden, reed fields, migratory-bird scenery, and old-town pockets make the city a strong present-tense reason to slow down.',
    decisionReason: 'Keep it when Route 5 needs nature, gardens, and a slower ecological identity before Yeosu.',
    nextLegLogic: 'After Suncheon, Yeosu becomes the sea-facing finale with islands, night views, seafood, and harbor energy.',
    highlights: ['Suncheon Bay Wetland', 'Suncheon Bay National Garden', 'Reed-field walks'],
  },
  {
    city: 'Yeosu',
    citySlug: 'yeosu',
    coordinates: { lat: 34.7604, lng: 127.6622 },
    travelTimeFromPrevious: '35m - 50m',
    cumulativeTime: '6h 30m',
    pitch: 'A south-coast arrival where islands, seafood, Expo memory, Odongdo, Hyangiram, and night-sea atmosphere complete Route 5.',
    routeRole: 'South coast finale',
    stayAdvice: 'Give Yeosu the final night whenever possible; it is the emotional payoff after the inland sequence.',
    whyItEarnsTime:
      'Yeosu turns the route into an arrival rather than a transfer. Odongdo, Hyangiram, Dolsan views, seafood, romantic night sea, and harbor walks make the finish memorable.',
    decisionReason: 'Choose Yeosu when the traveler wants the route to end with the sea, not another inland connection.',
    highlights: ['Odongdo Island', 'Hyangiram Hermitage', 'Yeosu night sea'],
  },
];

const jeollaHonamMainStopovers: RouteStopover[] = [
  jeollaSouthCoastStopovers[0],
  jeollaSouthCoastStopovers[1],
  jeollaSouthCoastStopovers[2],
  {
    city: 'Gwangju',
    citySlug: 'gwangju',
    coordinates: { lat: 35.1595, lng: 126.8526 },
    travelTimeFromPrevious: '1h 10m - 1h 30m',
    cumulativeTime: '4h 50m',
    pitch: 'A city central to Korea\'s modern democratic history, where May 18 memory, civic courage, art, food, Mudeungsan, and contemporary culture make Route 5 feel complete.',
    routeRole: 'Korean modern-history anchor',
    stayAdvice: 'Give Gwangju an overnight when Route 5 needs the seriousness of modern Korean history, not only city scale and culture, before Suncheon.',
    whyItEarnsTime:
      'Gwangju should not be missing from the Jeolla route because it is one of the places where Korea\'s modern democratic story becomes visible. May 18 memory, Asia Culture Center energy, Yangnim-dong texture, markets, food, and Mudeungsan make it a major chapter.',
    decisionReason: 'Keep it on the main line because Route 5 needs Korea\'s modern civic history as much as food, heritage, and coastal scenery.',
    nextLegLogic: 'After Gwangju, Suncheon shifts the route from modern civic memory and city culture into wetland and garden ecology before Yeosu.',
    highlights: ['May 18 Democratic Uprising memory', 'Asia Culture Center', 'Mudeungsan National Park'],
  },
  jeollaSouthCoastStopovers[5],
  jeollaSouthCoastStopovers[6],
];

const carJeollaSouthCoastRoute: TransportRouteVariant = {
  id: 'jeolla-inland-to-south-coast',
  routeCode: '5-0-c',
  routeGroupCode: '5-0',
  routeGroupLabel: 'Jeolla Inland to South Coast',
  label: 'Jeolla Southbound Drive',
  routeName: 'Seoul to Yeosu via Cheonan, Gongju, Jeonju, Gwangju, and Suncheon',
  totalTravelTime: '7h - 8h 30m driving, 4-5 days recommended',
  totalDistance: '430-470 km',
  summary:
    'A southbound route that treats Jeolla as a sequence: first reset, Baekje memory, hanok food culture, Gwangju as a Korean modern-history anchor, wetland ecology, and Yeosu sea arrival.',
  bestFor: 'Travelers who want Korea beyond the Seoul-Busan default and need each stop to justify its own overnight logic.',
  tradeoff:
    'It is less direct than a fast rail transfer, but the payoff is a much richer regional story.',
  stopPattern:
    'Best with Jeonju, Gwangju, and Yeosu as anchor nights, then Cheonan, Gongju, and Suncheon added according to pacing.',
  chooseWhen:
    'Choose Route 5 when the traveler wants food, heritage, ecology, and south-coast mood in one readable line.',
  avoidWhen:
    'Avoid it when the user only wants the fastest Seoul-to-Yeosu transfer with no inland context.',
  pacingNote:
    'The route should feel like chapters, not a checklist. Jeonju, Gwangju, and Yeosu hold the main structure; Gongju and Suncheon add depth.',
  planningNotes: [
    'Keep Gongju as a Baekje gateway, not just a convenient central stop.',
    'Make Jeonju the strongest inland overnight because search intent and traveler confidence are high.',
    'Keep Gwangju on the main line so the Jeolla route carries Korea\'s modern democratic memory with enough weight.',
    'Use Suncheon to slow the route before Yeosu so the final sea arrival feels earned.',
  ],
  stopovers: jeollaHonamMainStopovers,
  routePath: [
    [37.5665, 126.978],
    [36.8157, 127.1138],
    [36.4465, 127.119],
    [35.8242, 127.148],
    [35.1595, 126.8526],
    [34.9506, 127.4872],
    [34.7604, 127.6622],
  ],
};

const carJeollaInlandStoryRoute: TransportRouteVariant = {
  ...carJeollaSouthCoastRoute,
  id: 'jeolla-imsil-namwon-story',
  routeCode: '5-1-c',
  routeGroupCode: '5-1',
  routeGroupLabel: 'Jeolla Inland Story Variant',
  label: 'Imsil-Namwon Story Variant',
  routeName: 'Seoul to Yeosu via Cheonan, Gongju, Jeonju, Imsil, Namwon, and Suncheon',
  totalTravelTime: '7h 30m - 9h driving, 4-6 days recommended',
  totalDistance: '440-500 km',
  summary:
    'A more intimate Jeolla variant that uses Imsil and Namwon to turn the Jeonju-to-Suncheon middle into cheese, Chunhyang, Gwanghalluwon, and Jirisan-edge storytelling.',
  bestFor: 'Travelers who want small-city Jeolla texture after Jeonju rather than moving straight to Gwangju.',
  tradeoff:
    'It gives more local color but makes Gwangju a separate add-on rather than the main metropolitan chapter.',
  stopPattern:
    'Best when Jeonju is the food night, Imsil is a short daytime pause, Namwon is the story stop, and Suncheon resets the route before Yeosu.',
  chooseWhen:
    'Choose this variant when the traveler wants Chunhyang, Gwanghalluwon, and Imsil cheese to carry the middle of the route.',
  avoidWhen:
    'Avoid it when the route must include Gwangju as the main Honam metropolitan anchor.',
  pacingNote:
    'This is the slower, more local variant. It should read as a deliberate choice, not the default path.',
  planningNotes: [
    'Use Imsil to close the Jeonju-to-Namwon gap with a modern local-food story.',
    'Let Namwon carry romance, garden memory, and Jirisan edge before Suncheon.',
    'Offer Gwangju as the main-line alternative when city scale matters more.',
  ],
  stopovers: jeollaSouthCoastStopovers,
  routePath: [
    [37.5665, 126.978],
    [36.8157, 127.1138],
    [36.4465, 127.119],
    [35.8242, 127.148],
    [35.6179, 127.2891],
    [35.4164, 127.3906],
    [34.9506, 127.4872],
    [34.7604, 127.6622],
  ],
};

export const seoulToYeosuRoute: RouteData = {
  routeCode: '5',
  from: 'Seoul',
  fromSlug: 'seoul',
  to: 'Yeosu',
  toSlug: 'yeosu',
  href: '/route-5',
  routeLabel: 'Route 5',
  headline: 'Seoul to Yeosu through Baekje memory, Jeolla food, Gwangju modern history, wetlands, and south-coast night sea.',
  overview:
    'Route 5 opens the Jeolla direction as a deliberate travel line rather than a transfer. Cheonan softens the first jump, Gongju gives Baekje depth, Jeonju gives hanok food culture, Gwangju brings Korea\'s modern democratic history into the route, Suncheon adds wetlands and gardens, and Yeosu finishes with islands, seafood, and night-sea atmosphere.',
  destinationPitch:
    'Yeosu works as the finale because the traveler arrives with context: not just a harbor city, but the south-coast reward after inland Korea has unfolded in chapters.',
  bestUseCases: [
    'English-speaking travelers who want a Korea route beyond Seoul-Busan.',
    'Food and culture trips that need Jeonju and Gwangju but should not stop there.',
    'Travelers who want a south-coast finish with Yeosu, islands, seafood, and night views.',
  ],
  routePromise: [
    'The route will keep past and present visible in every city.',
    'It will make smaller cities feel like meaningful chapters, not filler.',
    'It will support future festival and theme updates without rewriting the route logic.',
  ],
  editorialNotes: [
    'Cheonan should now be treated as the first Route 1 / Route 5 junction-capable reset.',
    'Gongju should be treated as a Baekje gateway and future central-west junction candidate.',
    'Jeonju may become a future junction when the Jeolla network expands west and south.',
    'Gwangju belongs on the main Route 5 line as the Korean modern-history anchor, not only as a Honam metropolis.',
    'Imsil and Namwon should be presented as the inland story variant, not as replacements for Gwangju.',
    'Suncheon is the ecological hinge before Yeosu; do not collapse it into a short pre-Yeosu note.',
  ],
  transports: {
    KTX: {
      mode: 'KTX',
      id: 'rail-bus-jeolla-south-coast',
      routeCode: '5-0-r',
      routeGroupCode: '5-0',
      routeGroupLabel: 'Jeolla Inland to South Coast',
      label: 'Rail + Local Transit',
      routeName: 'Seoul to Yeosu rail-led itinerary',
      totalTravelTime: '3h-4h direct rail, 3-5 days as a route',
      totalDistance: '390-430 km',
      summary:
        'A rail-led version that uses Jeonju, Gwangju, Suncheon, and Yeosu as the easiest anchors while keeping Gongju and the Imsil-Namwon variant as selective story additions.',
      bestFor: 'Travelers without a car who still want the Jeolla narrative.',
      tradeoff: 'Rail keeps the line efficient, but smaller story stops need more timetable care.',
      stopPattern: 'Best as Jeonju plus Suncheon/Yeosu, with Gongju or Namwon added when the itinerary has slack.',
      chooseWhen: 'Choose this when public transport matters more than detour freedom.',
      avoidWhen: 'Avoid it when the traveler expects remote viewpoints and flexible countryside stops.',
      pacingNote: 'Keep the rail version honest: fewer stops, stronger nights, less overpacking.',
      planningNotes: [
        'Use Jeonju and Yeosu as the easiest public-transport confidence anchors.',
        'Add Namwon when Chunhyang, Gwanghalluwon, or Jirisan context matters.',
        'Use Suncheon as a full ecological stop rather than a transfer before Yeosu.',
      ],
      stopovers: jeollaHonamMainStopovers,
      routePath: carJeollaSouthCoastRoute.routePath,
    },
    car: {
      mode: 'car',
      ...carJeollaSouthCoastRoute,
      variants: [carJeollaSouthCoastRoute, carJeollaInlandStoryRoute],
    },
    bicycle: {
      mode: 'bicycle',
      id: 'bike-jeolla-south-coast-concept',
      routeCode: '5-0-b',
      routeGroupCode: '5-0',
      routeGroupLabel: 'Jeolla Inland to South Coast',
      label: 'Jeolla Bicycle Concept',
      routeName: 'Seoul to Yeosu bicycle concept',
      totalTravelTime: '6-9 days',
      totalDistance: '420-500 km',
      summary:
        'A serious long-distance concept where the route becomes a slow reading of central Korea, Jeolla food cities, river towns, wetlands, and the south coast.',
      bestFor: 'Experienced riders who want a cultural southbound ride rather than a speed route.',
      tradeoff: 'The rewards are strong, but urban exits, summer heat, and daily stage design need careful planning.',
      stopPattern: 'Use Cheonan, Gongju, Jeonju, Gwangju, Suncheon, and Yeosu as recovery anchors rather than racing checkpoints.',
      chooseWhen: 'Choose this when the journey itself is the product.',
      avoidWhen: 'Avoid it for casual riders until detailed safety and surface guidance is added.',
      pacingNote: 'The bicycle version is aspirational and should remain clearly marked as a planning concept.',
      planningNotes: [
        'Future work should add bike-path, road-safety, and luggage guidance.',
        'Summer heat and rain season need explicit warnings.',
        'City pages should support recovery, laundry, food, and simple stays.',
      ],
      stopovers: jeollaHonamMainStopovers,
      routePath: carJeollaSouthCoastRoute.routePath,
    },
    bus: {
      mode: 'bus',
      id: 'bus-jeolla-south-coast',
      routeCode: '5-0-d',
      routeGroupCode: '5-0',
      routeGroupLabel: 'Jeolla Inland to South Coast',
      label: 'Intercity Bus',
      routeName: 'Seoul to Yeosu intercity bus-led route',
      totalTravelTime: '4h-5h direct bus, 3-5 days as a route',
      totalDistance: '390-430 km',
      summary:
        'A bus-friendly Jeolla route that works best when the traveler chooses fewer but stronger city chapters.',
      bestFor: 'Budget travelers and people who prefer city-center arrivals.',
      tradeoff: 'Bus movement is practical, but small detours and nature timing are less flexible than driving.',
      stopPattern: 'Best with Jeonju, Gwangju, Suncheon, and Yeosu as the main bus anchors, plus Gongju or the Imsil-Namwon variant by theme.',
      chooseWhen: 'Choose bus when price and simplicity matter.',
      avoidWhen: 'Avoid it when the itinerary depends on remote temples, sunrise viewpoints, or flexible wetlands timing.',
      pacingNote: 'Bus Route 5 should privilege quality stops over trying to touch every city in one day.',
      planningNotes: [
        'Use fewer stopovers for first-time travelers so the route stays readable.',
        'Frame Gwangju as the main modern-history and Honam city anchor, and Imsil-Namwon as the slower story variant.',
        'Keep Yeosu as a final night, not a same-day exit.',
      ],
      stopovers: jeollaHonamMainStopovers,
      routePath: carJeollaSouthCoastRoute.routePath,
    },
  },
};

const westSeaModernCoastStopovers: RouteStopover[] = [
  {
    city: 'Incheon',
    citySlug: 'incheon',
    coordinates: { lat: 37.4563, lng: 126.7052 },
    travelTimeFromPrevious: '45m - 1h',
    cumulativeTime: '1h',
    pitch: 'The open-port gateway where Korea meets the West Sea through Chinatown, Wolmido, port history, islands, and modern airport-city scale.',
    routeRole: 'Open-port first chapter',
    stayAdvice: 'Use Incheon as the first Route 6 chapter when the traveler wants modern port history before the road turns south.',
    whyItEarnsTime:
      'Incheon makes Route 6 feel different from the inland routes immediately. Open-port memory, Chinatown, Wolmido, ferries, fish markets, and airport scale turn the departure from Seoul into a West Sea story.',
    nextLegLogic: 'After Incheon, Suwon adds Joseon fortress planning before the route drops toward the Chungcheong coast.',
    highlights: ['Incheon Chinatown', 'Wolmido open-port district', 'West Sea ferry mood'],
  },
  {
    city: 'Suwon',
    citySlug: 'suwon',
    coordinates: { lat: 37.2636, lng: 127.0286 },
    travelTimeFromPrevious: '1h - 1h 20m',
    cumulativeTime: '2h 10m',
    pitch: 'A UNESCO fortress city where King Jeongjo, Hwaseong, markets, and city-wall walks give Route 6 a powerful inland hinge before the coast.',
    routeRole: 'Fortress-planning hinge',
    stayAdvice: 'Use Suwon as the most reliable first overnight if the traveler wants heritage with easy city services.',
    whyItEarnsTime:
      'Suwon Hwaseong brings royal Joseon planning, military architecture, markets, and walkable city-wall energy into the west-coast line.',
    nextLegLogic: 'After Suwon, Seosan shifts the route toward Haemi, Catholic memory, tidal flats, and Taean-side coast choices.',
    highlights: ['Suwon Hwaseong Fortress', 'King Jeongjo memory', 'Paldalmun market area'],
  },
  {
    city: 'Seosan',
    citySlug: 'seosan',
    coordinates: { lat: 36.7849, lng: 126.45 },
    travelTimeFromPrevious: '1h 30m - 2h',
    cumulativeTime: '4h',
    pitch: 'A west-coast threshold where Haemi Catholic martyr memory, Naepo history, tidal-flat food, and Taean beach access deepen the line.',
    routeRole: 'Naepo and Taean gateway',
    stayAdvice: 'Use Seosan when Route 6 should add pilgrimage, local food, and Taean-side coast texture before Boryeong.',
    whyItEarnsTime:
      'Seosan gives the route moral and coastal depth through Haemi Martyrdom Holy Ground, Haemieupseong context, garlic and seafood identity, and the ability to branch toward Taean beaches.',
    nextLegLogic: 'After Seosan, Boryeong turns the west coast into a recognizable beach and festival chapter.',
    highlights: ['Haemi Martyrdom Holy Ground', 'Taean coast access', 'Naepo region memory'],
  },
  {
    city: 'Boryeong',
    citySlug: 'boryeong',
    coordinates: { lat: 36.3334, lng: 126.6128 },
    travelTimeFromPrevious: '1h - 1h 20m',
    cumulativeTime: '5h 10m',
    pitch: 'The West Sea beach chapter where Daecheon Beach, mud culture, summer festival energy, and sunset coast make Route 6 visible to global travelers.',
    routeRole: 'Mud festival and beach anchor',
    stayAdvice: 'Give Boryeong a night in summer or when the traveler needs a light coastal pause before Gunsan.',
    whyItEarnsTime:
      'Boryeong carries one of Korea\'s most internationally legible festivals through the Mud Festival while still working as a beach, sunset, seafood, and family-travel stop.',
    nextLegLogic: 'After Boryeong, Gunsan changes the route into modern port history and colonial-era streets.',
    highlights: ['Daecheon Beach', 'Boryeong Mud Festival', 'Mud Museum'],
  },
  {
    city: 'Gunsan',
    citySlug: 'gunsan',
    coordinates: { lat: 35.9677, lng: 126.7366 },
    travelTimeFromPrevious: '1h - 1h 20m',
    cumulativeTime: '6h 20m',
    pitch: 'A modern port-memory city where maritime distribution, colonial-era streets, museums, bakeries, and old-town walks give Route 6 depth.',
    routeRole: 'Modern port memory',
    stayAdvice: 'Use Gunsan as the serious history overnight before the route continues toward Mokpo.',
    whyItEarnsTime:
      'Gunsan Modern History Museum, old Japanese-style architecture, port streets, bakeries, and seafood make the city a natural Route 6 anchor.',
    nextLegLogic: 'After Gunsan, Mokpo becomes the southwest sea arrival with Yudalsan, Gatbawi, seafood, islands, and modern harbor memory.',
    highlights: ['Gunsan Modern History Museum', 'Old port streets', 'West Sea seafood'],
  },
  {
    city: 'Mokpo',
    citySlug: 'mokpo',
    coordinates: { lat: 34.8118, lng: 126.3922 },
    travelTimeFromPrevious: '2h 20m - 3h',
    cumulativeTime: '9h',
    pitch: 'The southwest sea arrival where Yudalsan, Gatbawi, modern port history, seafood, ferries, and Dadohae views complete Route 6.',
    routeRole: 'Southwest coast finale',
    stayAdvice: 'Give Mokpo the final night; it is the West Sea payoff and the future bridge toward Route 7 south-coast expansion.',
    whyItEarnsTime:
      'Mokpo finishes Route 6 with real harbor character: Yudalsan views, Gatbawi geology, modern history districts, seafood, island ferries, and Dadohae sunset.',
    highlights: ['Yudalsan Mountain', 'Mokpo Gatbawi Rock', 'Modern port district'],
  },
];

const carWestSeaModernCoastRoute: TransportRouteVariant = {
  id: 'west-sea-modern-coast',
  routeCode: '6-0-c',
  routeGroupCode: '6-0',
  routeGroupLabel: 'West Sea Modern Coast',
  label: 'West Sea Drive',
  routeName: 'Seoul to Mokpo via Incheon, Suwon, Seosan, Boryeong, and Gunsan',
  totalTravelTime: '9h - 10h driving, 4-6 days recommended',
  totalDistance: '520-580 km',
  summary:
    'A west-coast route that links open-port history, Joseon fortress planning, Catholic memory, mud-festival coast, modern port streets, and a Mokpo southwest-sea finale.',
  bestFor: 'Travelers who want Korea through modern history, ports, beaches, festivals, seafood, and the West Sea rather than the inland or east-coast lines.',
  tradeoff:
    'It is a longer and more episodic route than the inland lines, but it opens a very different Korea.',
  stopPattern:
    'Best with Suwon or Incheon as the first chapter, Boryeong or Gunsan as the middle overnight, and Mokpo as the final night.',
  chooseWhen:
    'Choose Route 6 when the traveler wants ports, fortress walls, mud festival energy, modern history, seafood, and a slower west-coast mood.',
  avoidWhen:
    'Avoid it when the traveler wants the fastest Seoul-to-Mokpo transfer or only famous headline cities.',
  pacingNote:
    'Route 6 should feel like changing coast chapters: open port, fortress, pilgrimage, beach festival, modern port, southwest sea.',
  planningNotes: [
    'Keep Incheon as the open-port first chapter, not only an airport note.',
    'Use Suwon to give the route a strong UNESCO and Joseon planning anchor before the coast widens.',
    'Use Gunsan and Mokpo together so the modern port story has both middle and final chapters.',
  ],
  stopovers: westSeaModernCoastStopovers,
  routePath: [
    [37.5665, 126.978],
    [37.4563, 126.7052],
    [37.2636, 127.0286],
    [36.7849, 126.45],
    [36.3334, 126.6128],
    [35.9677, 126.7366],
    [34.8118, 126.3922],
  ],
};

export const seoulToMokpoRoute: RouteData = {
  routeCode: '6',
  from: 'Seoul',
  fromSlug: 'seoul',
  to: 'Mokpo',
  toSlug: 'mokpo',
  href: '/route-6',
  routeLabel: 'Route 6',
  headline: 'Seoul to Mokpo through open ports, fortress walls, West Sea beaches, modern history, and southwest harbor arrival.',
  overview:
    'Route 6 builds the West Sea corridor. Incheon opens the route through Korea\'s open-port memory, Suwon adds UNESCO fortress planning, Seosan brings Haemi and Taean-side coastal choices, Boryeong adds Daecheon Beach and mud festival energy, Gunsan deepens the modern port story, and Mokpo finishes with Yudalsan, Gatbawi, seafood, ferries, and Dadohae views.',
  destinationPitch:
    'Mokpo works as the Route 6 finale because it is not only a terminal city. It is a southwest harbor arrival with mountain views, modern port memory, seafood, islands, and future south-coast expansion logic.',
  bestUseCases: [
    'Travelers who want a West Sea alternative to the inland and east-coast routes.',
    'Modern-history trips that can connect Incheon, Gunsan, and Mokpo.',
    'Summer or shoulder-season coast trips that need Boryeong, beaches, seafood, and sunset pacing.',
  ],
  routePromise: [
    'The route will make the West Sea feel like a coherent travel corridor.',
    'It will balance modern history, coastal leisure, pilgrimage memory, and port food.',
    'It will prepare the future Route 7 south-coast expansion from Mokpo eastward.',
  ],
  editorialNotes: [
    'Incheon must be framed through open-port history and West Sea identity, not only airport access.',
    'Suwon gives the line UNESCO credibility and should stay on the main route even though it is not coastal.',
    'Seosan can later branch toward Taean and Anmyeondo as the west-coast network grows.',
    'Mokpo should be treated as the southwest sea finale and Route 7 handoff candidate.',
  ],
  transports: {
    KTX: {
      mode: 'KTX',
      id: 'rail-west-sea-modern-coast',
      routeCode: '6-0-r',
      routeGroupCode: '6-0',
      routeGroupLabel: 'West Sea Modern Coast',
      label: 'Rail + Local Transit',
      routeName: 'Seoul to Mokpo rail-led itinerary',
      totalTravelTime: '2h 30m - 3h 30m direct rail, 4-5 days as a route',
      totalDistance: '520-580 km',
      summary:
        'A rail-led version that uses Incheon/Suwon, Gunsan, and Mokpo as strong anchors while keeping Seosan and Boryeong as theme additions.',
      bestFor: 'Travelers without a car who still want modern port memory and a Mokpo finish.',
      tradeoff: 'Rail keeps Mokpo easy, but Seosan and Boryeong need more local-transfer planning.',
      stopPattern: 'Best with Suwon or Incheon, Gunsan, and Mokpo as the clearest public-transport anchors.',
      chooseWhen: 'Choose this when the traveler wants the West Sea story without driving every coastal segment.',
      avoidWhen: 'Avoid it when the itinerary depends on Taean beaches, remote mudflat stops, or flexible sunset timing.',
      pacingNote: 'Keep the public-transport version selective and honest about transfers.',
      planningNotes: [
        'Use Suwon and Mokpo as the easiest rail anchors.',
        'Use Gunsan for modern history when timing allows.',
        'Keep Seosan and Boryeong optional until schedule-aware guidance is added.',
      ],
      stopovers: westSeaModernCoastStopovers,
      routePath: carWestSeaModernCoastRoute.routePath,
    },
    car: {
      mode: 'car',
      ...carWestSeaModernCoastRoute,
    },
    bicycle: {
      mode: 'bicycle',
      id: 'bike-west-sea-concept',
      routeCode: '6-0-b',
      routeGroupCode: '6-0',
      routeGroupLabel: 'West Sea Modern Coast',
      label: 'West Sea Bicycle Concept',
      routeName: 'Seoul to Mokpo west-coast bicycle concept',
      totalTravelTime: '8-12 days',
      totalDistance: '560-650 km',
      summary:
        'A serious long-distance concept using the west coast as a slower line of ports, seawalls, beaches, mudflats, and harbor cities.',
      bestFor: 'Experienced riders who want a coast-first journey with modern-history stops.',
      tradeoff: 'Wind, industrial roads, bridges, and local safety planning need careful attention.',
      stopPattern: 'Use Incheon, Suwon, Seosan/Taean, Boryeong, Gunsan, and Mokpo as recovery anchors.',
      chooseWhen: 'Choose this when the ride itself is the product and the traveler accepts detailed planning.',
      avoidWhen: 'Avoid it for casual riders until road-safety and surface guidance is developed.',
      pacingNote: 'The bicycle version is aspirational and should remain clearly marked as a planning concept.',
      planningNotes: [
        'Future work should add certified bike-path, bridge, and industrial-road safety notes.',
        'Wind and weather matter strongly on exposed west-coast stages.',
        'City pages should emphasize recovery, supplies, laundry, seafood, and simple stays.',
      ],
      stopovers: westSeaModernCoastStopovers,
      routePath: carWestSeaModernCoastRoute.routePath,
    },
    bus: {
      mode: 'bus',
      id: 'bus-west-sea-modern-coast',
      routeCode: '6-0-d',
      routeGroupCode: '6-0',
      routeGroupLabel: 'West Sea Modern Coast',
      label: 'Intercity Bus',
      routeName: 'Seoul to Mokpo west-coast bus route',
      totalTravelTime: '4h-5h direct bus, 4-6 days as a route',
      totalDistance: '520-580 km',
      summary:
        'A bus-friendly version for travelers who want city-to-city West Sea chapters without renting a car.',
      bestFor: 'Budget travelers, solo travelers, and users who want port cities and beach stops.',
      tradeoff: 'Bus keeps the route accessible but makes remote beaches and sunset timing harder.',
      stopPattern: 'Best with Incheon/Suwon, Boryeong, Gunsan, and Mokpo as the main bus anchors.',
      chooseWhen: 'Choose bus when price and simplicity matter more than coastal detour freedom.',
      avoidWhen: 'Avoid it when the plan depends on Taean-side beaches, remote shrines, or exact tide windows.',
      pacingNote: 'Bus Route 6 should use fewer anchors and avoid overpacking the coast.',
      planningNotes: [
        'Use Boryeong and Gunsan as the practical middle anchors.',
        'Let Mokpo hold the final night rather than treating it as a same-day exit.',
        'Keep Seosan/Taean as a themed addition when local transit works.',
      ],
      stopovers: westSeaModernCoastStopovers,
      routePath: carWestSeaModernCoastRoute.routePath,
    },
  },
};

const southCoastIslandRoadStopovers: RouteStopover[] = [
  {
    city: 'Mokpo',
    citySlug: 'mokpo',
    coordinates: { lat: 34.8118, lng: 126.3922 },
    travelTimeFromPrevious: 'Route start',
    cumulativeTime: '0h',
    pitch: 'The southwest harbor launchpad where Yudalsan, ferries, seafood, modern port memory, and Dadohae island access hand Route 6 into the south coast.',
    routeRole: 'South-coast gateway',
    stayAdvice: 'Start Route 7 with a Mokpo night so the traveler feels the handoff from west-coast harbor to island coast.',
    whyItEarnsTime:
      'Mokpo makes Route 7 legible because it already has harbor, ferry, mountain, seafood, Dadohae access, and island-departure energy before the road bends toward Haenam.',
    nextLegLogic: 'After Mokpo, Haenam turns the route into Korea\'s land-end story before Wando opens the island rhythm.',
    highlights: ['Yudalsan Mountain', 'Mokpo harbor food', 'Dadohae ferry mood'],
  },
  {
    city: 'Haenam',
    citySlug: 'haenam',
    coordinates: { lat: 34.5733, lng: 126.599 },
    travelTimeFromPrevious: '1h - 1h 20m',
    cumulativeTime: '1h 20m',
    pitch: 'Korea\'s land-end threshold where Ttangkkeut, Duryunsan, Daeheungsa, and southern peninsula scenery make the route feel earned.',
    routeRole: 'Land-end threshold',
    stayAdvice: 'Use Haenam when the south-coast route needs a symbolic beginning rather than jumping straight from Mokpo to island towns.',
    whyItEarnsTime:
      'Haenam gives Route 7 a strong opening chapter through Ttangkkeut land-end identity, Duryunsan mountain views, Daeheungsa temple history, seafood, and slow rural roads.',
    nextLegLogic: 'After Haenam, Wando turns the route from peninsula edge into island and seafood travel.',
    highlights: ['Ttangkkeut Village', 'Duryunsan Mountain', 'Daeheungsa Temple'],
  },
  {
    city: 'Wando',
    citySlug: 'wando',
    coordinates: { lat: 34.311, lng: 126.755 },
    travelTimeFromPrevious: '45m - 1h',
    cumulativeTime: '2h 20m',
    pitch: 'A Dadohae island-seafood gateway where Cheongsando, seaweed culture, ferries, Wando Arboretum, and marine life give the route its island tempo.',
    routeRole: 'Island and seafood gateway',
    stayAdvice: 'Give Wando time when the traveler wants islands, ferry mood, seafood, and a slower coastal chapter after Haenam.',
    whyItEarnsTime:
      'Wando is the first unmistakable Dadohae island chapter on Route 7, linking Cheongsando slow travel, seafood, seaweed, ferries, arboretum greenery, and marine identity.',
    nextLegLogic: 'After Wando, Boseong slows the line into tea fields before the route joins Suncheon and Yeosu.',
    highlights: ['Cheongsando gateway', 'Dadohae island travel', 'Wando seafood'],
  },
  {
    city: 'Boseong',
    citySlug: 'boseong',
    coordinates: { lat: 34.7715, lng: 127.0801 },
    travelTimeFromPrevious: '1h 20m - 1h 40m',
    cumulativeTime: '4h',
    pitch: 'The green-tea landscape where Daehan Dawon, terraced fields, coastal light, and slow rural pacing create a calm hinge before Suncheon.',
    routeRole: 'Tea-field pause',
    stayAdvice: 'Use Boseong as a slow visual reset between island road and the larger Suncheon-Yeosu south-coast sequence.',
    whyItEarnsTime:
      'Boseong is globally easy to understand through green tea fields, but it also helps the route breathe before the ecological and harbor cities ahead.',
    nextLegLogic: 'After Boseong, Suncheon brings wetland ecology and garden scale before Yeosu opens the night-sea junction.',
    highlights: ['Daehan Dawon tea fields', 'Boseong green tea', 'Rural south-coast scenery'],
  },
  {
    city: 'Suncheon',
    citySlug: 'suncheon',
    coordinates: { lat: 34.9506, lng: 127.4872 },
    travelTimeFromPrevious: '45m - 1h',
    cumulativeTime: '5h',
    pitch: 'The ecology junction where Suncheon Bay Wetland and Suncheon Bay National Garden connect Route 5 and Route 7.',
    routeRole: 'Ecology junction',
    stayAdvice: 'Use Suncheon as the calm overnight when the route needs wetlands and garden pacing before Yeosu or Namhae.',
    whyItEarnsTime:
      'Suncheon lets Route 7 share Route 5\'s ecological intelligence while still preparing the traveler for the island-and-port eastward coast.',
    nextLegLogic: 'After Suncheon, Yeosu turns the line into a night-sea and island-harbor junction.',
    highlights: ['Suncheon Bay Wetland', 'Suncheon Bay National Garden', 'Reed-field ecology'],
  },
  {
    city: 'Yeosu',
    citySlug: 'yeosu',
    coordinates: { lat: 34.7604, lng: 127.6622 },
    travelTimeFromPrevious: '40m - 1h',
    cumulativeTime: '6h',
    pitch: 'The night-sea junction where Odongdo, Dolsan, Hyangiram, seafood, and harbor lights connect Route 5 to the deeper Hallyeohaesang-facing south coast.',
    routeRole: 'Night-sea junction',
    stayAdvice: 'Keep Yeosu as an overnight rather than a pass-through; its evening identity is the point.',
    whyItEarnsTime:
      'Yeosu is already a strong Route 5 finale, but on Route 7 it becomes the hinge from Jeolla ecology and Dadohae mood into Namhae, Hallyeohaesang, Tongyeong, Geoje, and Busan.',
    nextLegLogic: 'After Yeosu, Namhae begins the island-road chapter of the southeast-facing south coast.',
    highlights: ['Yeosu night sea', 'Odongdo Island', 'Hallyeohaesang handoff'],
  },
  {
    city: 'Namhae',
    citySlug: 'namhae',
    coordinates: { lat: 34.837, lng: 127.892 },
    travelTimeFromPrevious: '1h 20m - 1h 50m',
    cumulativeTime: '7h 40m',
    pitch: 'An island-road chapter where German Village, Boriam views, rice terraces, beaches, bridge approaches, and the Hallyeohaesang approach make the coast intimate.',
    routeRole: 'Island-road chapter',
    stayAdvice: 'Use Namhae for travelers who want coastal drives, small pensions, viewpoints, seafood, and a softer island mood after Yeosu.',
    whyItEarnsTime:
      'Namhae gives Route 7 a lived-in island chapter through German Village, Boriam, Sangju Beach, Darangee terraces, seafood, Hallyeohaesang views, and road-trip pacing.',
    nextLegLogic: 'After Namhae, Tongyeong brings Hallyeohaesang island culture, Yi Sun-sin memory, and port-city art.',
    highlights: ['Namhae German Village', 'Boriam coastal views', 'Hallyeohaesang approach'],
  },
  {
    city: 'Tongyeong',
    citySlug: 'tongyeong',
    coordinates: { lat: 34.8544, lng: 128.4332 },
    travelTimeFromPrevious: '1h 40m - 2h 10m',
    cumulativeTime: '9h 50m',
    pitch: 'The Yi Sun-sin naval port city where Samdo Sugun Tongjeyeong history, Hallyeohaesang islands, Dongpirang murals, ferries, seafood, and art make the route dense.',
    routeRole: 'Naval history and port culture',
    stayAdvice: 'Give Tongyeong a night when the traveler wants one of Korea\'s most historically valuable small harbor chapters before Geoje.',
    whyItEarnsTime:
      'Tongyeong balances past and present unusually well: Yi Sun-sin memory, Samdo Sugun Tongjeyeong command history, ferry terminals, Hallyeohaesang views, seafood, music and art culture, and compact walking streets.',
    nextLegLogic: 'After Tongyeong, Geoje adds shipbuilding scale, POW history, Oedo, Windy Hill, and the final push toward Busan.',
    highlights: ['Yi Sun-sin memory', 'Samdo Sugun Tongjeyeong', 'Hallyeohaesang islands'],
  },
  {
    city: 'Geoje',
    citySlug: 'geoje',
    coordinates: { lat: 34.8806, lng: 128.6217 },
    travelTimeFromPrevious: '40m - 1h',
    cumulativeTime: '10h 50m',
    pitch: 'A modern island city where shipbuilding, POW Camp history, Windy Hill, Oedo Botania, and bridge access prepare the Busan arrival.',
    routeRole: 'Modern island and Busan handoff',
    stayAdvice: 'Use Geoje when the final approach should include both modern industry and island scenery before Busan.',
    whyItEarnsTime:
      'Geoje keeps Route 7 from ending as scenery alone. Shipbuilding, Korean War POW memory, Oedo, Windy Hill, beaches, and bridge infrastructure make the present visible.',
    nextLegLogic: 'After Geoje, Busan becomes the metropolitan coast finale rather than an abrupt jump.',
    highlights: ['Geoje POW Camp history', 'Windy Hill', 'Oedo Botania'],
  },
  {
    city: 'Busan',
    citySlug: 'busan',
    coordinates: { lat: 35.1796, lng: 129.0756 },
    travelTimeFromPrevious: '1h 20m - 2h',
    cumulativeTime: '12h 30m',
    pitch: 'The metropolitan coast finale where markets, beaches, ports, hillsides, and food make the south-coast journey land in a major city.',
    routeRole: 'South-coast finale',
    stayAdvice: 'End Route 7 in Busan after Geoje so the city feels like the final coast chapter, not only a transport hub.',
    whyItEarnsTime:
      'Busan turns the long south-coast road into a complete arc: land-end, islands, tea fields, ecology, night sea, small ports, modern industry, and finally a global harbor city.',
    highlights: ['Jagalchi Market', 'Haeundae and Gwangalli', 'Busan harbor'],
  },
];

const carSouthCoastIslandRoadRoute: TransportRouteVariant = {
  id: 'south-coast-island-road',
  routeCode: '7-0-c',
  routeGroupCode: '7-0',
  routeGroupLabel: 'South Coast Island Road',
  label: 'South Coast Drive',
  routeName: 'Mokpo to Busan via Haenam, Wando, Boseong, Suncheon, Yeosu, Namhae, Tongyeong, and Geoje',
  totalTravelTime: '12h - 14h driving, 7-10 days recommended',
  totalDistance: '620-720 km',
    summary:
    'A south-coast route that turns Mokpo into a launchpad, then links Dadohae island access, Haenam land-end memory, Wando island seafood, Boseong tea fields, Suncheon ecology, Yeosu night sea, Namhae island roads, Hallyeohaesang, Tongyeong Yi Sun-sin naval history, Geoje modern island history, and Busan.',
  bestFor: 'Travelers who want the long southern coast through islands, seafood, temples, tea fields, ecology, small ports, and a Busan finale.',
  tradeoff:
    'It is not a fast transfer. The value is the sequence of coast chapters, so the route needs time and selective overnights.',
  stopPattern:
    'Best with Mokpo/Haenam or Wando first, Suncheon or Yeosu in the middle, Tongyeong or Geoje before the final Busan arrival.',
  chooseWhen:
    'Choose Route 7 when the traveler wants Korea\'s south coast as the destination, not just a road between bigger cities.',
  avoidWhen:
    'Avoid it when the traveler has only one or two days and needs a simple Mokpo-to-Busan transfer.',
  pacingNote:
    'Route 7 should alternate symbolic places, island roads, ecology, food, and port culture so the coast stays rich instead of exhausting.',
  planningNotes: [
    'Keep Haenam in the route because Ttangkkeut makes the south-coast launch feel meaningful.',
    'Use Wando and Namhae to prove the island-road identity rather than making the route only mainland cities.',
    'Treat Suncheon and Yeosu as junctions that connect Route 5 and Route 7 without flattening either route.',
    'Use Tongyeong and Geoje together so Yi Sun-sin memory, Samdo Sugun Tongjeyeong history, art, shipbuilding, POW history, and island scenery all appear before Busan.',
  ],
  stopovers: southCoastIslandRoadStopovers,
  routePath: [
    [34.8118, 126.3922],
    [34.5733, 126.599],
    [34.311, 126.755],
    [34.7715, 127.0801],
    [34.9506, 127.4872],
    [34.7604, 127.6622],
    [34.837, 127.892],
    [34.8544, 128.4332],
    [34.8806, 128.6217],
    [35.1796, 129.0756],
  ],
};

export const mokpoToBusanRoute: RouteData = {
  routeCode: '7',
  from: 'Mokpo',
  fromSlug: 'mokpo',
  to: 'Busan',
  toSlug: 'busan',
  href: '/route-7',
  routeLabel: 'Route 7',
  headline: 'Mokpo to Busan along Korea\'s south coast of land-end stories, islands, tea fields, ecology, port cities, and modern maritime scale.',
  overview:
    'Route 7 builds the south-coast corridor through Korea\'s two great island-sea imaginations: Dadohae in the southwest and Hallyeohaesang farther east. Mokpo hands the traveler from Route 6 into Haenam, where Ttangkkeut, Duryunsan, and Daeheungsa make the land-end story clear. Wando opens Dadohae island seafood and Cheongsando logic, Boseong slows the route through green tea fields, Suncheon and Yeosu connect ecology and night sea, Namhae gives the road an island-drive chapter, Tongyeong adds Yi Sun-sin, Samdo Sugun Tongjeyeong, Dongpirang, ferries, and Hallyeohaesang culture, Geoje adds shipbuilding, POW history, Windy Hill, and Oedo, and Busan completes the arc as a major harbor city.',
  destinationPitch:
    'Busan works as the Route 7 finale because the traveler arrives after seeing the smaller south coast first. The city becomes a culmination of ports, seafood, bridges, beaches, markets, hillsides, and modern maritime Korea.',
  bestUseCases: [
    'Travelers who want the south coast to be the main journey, not a detour.',
    'Road trips that can mix Dadohae, Hallyeohaesang, islands, seafood, temples, tea fields, wetlands, harbor cities, and Busan.',
    'Repeat Korea travelers who already know Seoul and Busan and want the route between coasts to feel deeper.',
  ],
  routePromise: [
    'The route will make the south coast feel like a coherent travel corridor from Mokpo to Busan.',
    'It will keep past and present together: temples, land-end memory, Dadohae, Hallyeohaesang, naval history, POW history, shipbuilding, food, and modern harbor life.',
    'It will make smaller coastal cities feel as worthy as the famous endpoints.',
  ],
  editorialNotes: [
    'Haenam should stay in the main sequence because it gives the route symbolic force after Mokpo.',
    'Wando should carry the Dadohae side, while Namhae, Tongyeong, and Geoje should make the Hallyeohaesang side visibly island-driven.',
    'Boseong should be used as a quiet scenic and searchable tea-field hinge, not as a throwaway detour.',
    'Suncheon and Yeosu are junction cities with Route 5; route copy should acknowledge that overlap clearly.',
    'Geoje should balance scenery with shipbuilding and Korean War POW history so the present stays visible.',
  ],
  transports: {
    KTX: {
      mode: 'KTX',
      id: 'rail-south-coast-island-road',
      routeCode: '7-0-r',
      routeGroupCode: '7-0',
      routeGroupLabel: 'South Coast Island Road',
      label: 'Rail + Ferry + Local Transit',
      routeName: 'Mokpo to Busan rail-led south-coast itinerary',
      totalTravelTime: '3h-5h direct transfer, 7-10 days as a route',
      totalDistance: '620-720 km',
      summary:
        'A public-transport version that keeps Mokpo, Suncheon, Yeosu, Tongyeong, Geoje, and Busan as anchors while treating Haenam, Wando, Boseong, and Namhae as planned local-transfer chapters.',
      bestFor: 'Travelers without a car who still want a south-coast story rather than a single transfer.',
      tradeoff: 'Rail and buses can reach the big anchors, but islands, viewpoints, and ferry timing need more planning.',
      stopPattern: 'Use Mokpo, Suncheon/Yeosu, Tongyeong/Geoje, and Busan as the practical public-transport spine.',
      chooseWhen: 'Choose this when the traveler wants to reduce driving but still follow the south coast.',
      avoidWhen: 'Avoid it when the itinerary depends on remote viewpoints, exact sunset timing, or many small beach stops.',
      pacingNote: 'Keep the public-transport version selective so transfers do not overwhelm the story.',
      planningNotes: [
        'Use direct rail/bus legs for the major anchors and explain local transfers honestly.',
        'Keep Wando, Namhae, and Geoje flexible because island mobility changes the day rhythm.',
        'Use Yeosu and Tongyeong as strong overnight anchors for non-drivers.',
      ],
      stopovers: southCoastIslandRoadStopovers,
      routePath: carSouthCoastIslandRoadRoute.routePath,
    },
    car: {
      mode: 'car',
      ...carSouthCoastIslandRoadRoute,
    },
    bicycle: {
      mode: 'bicycle',
      id: 'bike-south-coast-concept',
      routeCode: '7-0-b',
      routeGroupCode: '7-0',
      routeGroupLabel: 'South Coast Island Road',
      label: 'South Coast Bicycle Concept',
      routeName: 'Mokpo to Busan south-coast bicycle concept',
      totalTravelTime: '12-18 days',
      totalDistance: '650-780 km',
      summary:
        'A serious long-distance concept using the south coast as a slow line of islands, bridges, beaches, ferry towns, and port cities.',
      bestFor: 'Experienced riders who want the coast itself to be the product.',
      tradeoff: 'Bridge exposure, traffic, climbs, island ferries, and coastal weather require detailed safety planning.',
      stopPattern: 'Use Mokpo, Wando, Boseong/Suncheon, Yeosu, Namhae, Tongyeong, Geoje, and Busan as recovery anchors.',
      chooseWhen: 'Choose this only when the traveler accepts slow pacing and safety-first route planning.',
      avoidWhen: 'Avoid it for casual riders until segment-level road guidance is available.',
      pacingNote: 'The bicycle version is a future planning concept, not a casual recommendation.',
      planningNotes: [
        'Future work should add bridge, tunnel, shoulder, ferry, and climb notes.',
        'Coastal wind and summer heat matter strongly on exposed south-coast sections.',
        'City pages should support recovery stops, laundry, simple stays, and food.',
      ],
      stopovers: southCoastIslandRoadStopovers,
      routePath: carSouthCoastIslandRoadRoute.routePath,
    },
    bus: {
      mode: 'bus',
      id: 'bus-south-coast-island-road',
      routeCode: '7-0-d',
      routeGroupCode: '7-0',
      routeGroupLabel: 'South Coast Island Road',
      label: 'Intercity Bus',
      routeName: 'Mokpo to Busan south-coast bus route',
      totalTravelTime: '5h-7h direct transfer, 7-10 days as a route',
      totalDistance: '620-720 km',
      summary:
        'A bus-friendly version that keeps the south-coast corridor accessible while asking travelers to choose fewer, stronger chapters.',
      bestFor: 'Budget travelers, solo travelers, and users who prefer city-to-city movement over a full driving itinerary.',
      tradeoff: 'Bus travel keeps the route practical, but remote temples, viewpoints, ferries, and beaches need extra care.',
      stopPattern: 'Best with Mokpo, Haenam/Wando, Suncheon/Yeosu, Tongyeong/Geoje, and Busan rather than every minor stop in one trip.',
      chooseWhen: 'Choose bus when price and simplicity matter more than complete coastal flexibility.',
      avoidWhen: 'Avoid it when the plan depends on many remote scenic stops or late-night rural movement.',
      pacingNote: 'Bus Route 7 should be edited around fewer high-quality stops.',
      planningNotes: [
        'Use Mokpo and Busan as bookends, then choose two or three middle overnights.',
        'Treat Wando, Namhae, and Geoje as route highlights only when local transfers are realistic.',
        'Keep the page honest that the car version carries the richest coastline.',
      ],
      stopovers: southCoastIslandRoadStopovers,
      routePath: carSouthCoastIslandRoadRoute.routePath,
    },
  },
};

const honamLandEndStopovers: RouteStopover[] = [
  {
    city: 'Daejeon',
    citySlug: 'daejeon',
    coordinates: { lat: 36.3504, lng: 127.3845 },
    travelTimeFromPrevious: '1h 40m - 2h',
    cumulativeTime: '2h',
    pitch: 'The central transport reset where station efficiency, Sungsimdang bakery pilgrimage, Yuseong recovery, science-city scale, and southbound control make the Honam descent readable.',
    routeRole: 'Central corridor stabilizer',
    stayAdvice: 'Use Daejeon when the traveler needs a clean first night or a practical reset before Jeonju and Gwangju.',
    whyItEarnsTime:
      'Daejeon makes Route 8 easier to trust. It is not the emotional climax, but it stabilizes the long Seoul-to-Honam move with rail access, hotels, Yuseong hot springs, Sungsimdang bakery culture, and central-city services.',
    nextLegLogic: 'After Daejeon, Jeonju turns the route from national corridor into Jeolla food and hanok culture.',
    highlights: ['Daejeon Station', 'Sungsimdang bakery', 'Yuseong hot springs'],
  },
  {
    city: 'Jeonju',
    citySlug: 'jeonju',
    coordinates: { lat: 35.8242, lng: 127.148 },
    travelTimeFromPrevious: '1h 10m - 1h 30m',
    cumulativeTime: '3h 30m',
    pitch: 'The Jeolla food and hanok anchor where bibimbap, makgeolli, markets, and old-city walks make the inland route emotionally accessible.',
    routeRole: 'Jeolla food and hanok anchor',
    stayAdvice: 'Give Jeonju an overnight when Route 8 needs warmth, food confidence, and an easy first deep-regional chapter.',
    whyItEarnsTime:
      'Jeonju turns the route from logistics into affection. Hanok Village, bibimbap, makgeolli alleys, markets, and walkable old-city texture make the Honam descent immediately legible for English-speaking travelers.',
    nextLegLogic: 'After Jeonju, Gwangju adds Korea\'s modern democratic history and metropolitan Honam depth.',
    highlights: ['Jeonju Hanok Village', 'bibimbap', 'makgeolli streets'],
  },
  {
    city: 'Gwangju',
    citySlug: 'gwangju',
    coordinates: { lat: 35.1595, lng: 126.8526 },
    travelTimeFromPrevious: '1h 10m - 1h 30m',
    cumulativeTime: '5h',
    pitch: 'The Honam modern-history anchor where May 18 civic memory, Asia Culture Center, Mudeungsan, food, and city culture give the route moral weight.',
    routeRole: 'Modern democratic history anchor',
    stayAdvice: 'Give Gwangju serious time; on Route 8 it is the city that prevents the southbound line from becoming only food and scenery.',
    whyItEarnsTime:
      'Gwangju is central to Korea\'s modern democratic memory. May 18 sites, Asia Culture Center, Yangnim-dong, markets, Mudeungsan, and Honam food make it the route\'s most important civic-history chapter.',
    nextLegLogic: 'After Gwangju, Mokpo turns the inland Honam route toward harbor memory, islands, seafood, and Dadohae access.',
    highlights: ['May 18 democratic memory', 'Asia Culture Center', 'Mudeungsan National Park'],
  },
  {
    city: 'Mokpo',
    citySlug: 'mokpo',
    coordinates: { lat: 34.8118, lng: 126.3922 },
    travelTimeFromPrevious: '1h 10m - 1h 30m',
    cumulativeTime: '6h 30m',
    pitch: 'The southwest harbor hinge where Yudalsan, Gatbawi, seafood, ferries, modern port memory, and Dadohae views turn Honam into the sea.',
    routeRole: 'Southwest harbor hinge',
    stayAdvice: 'Use Mokpo as the penultimate night when the traveler should feel the shift from inland history to island-facing coast.',
    whyItEarnsTime:
      'Mokpo keeps Route 8 from ending abruptly at the land end. Harbor food, Yudalsan, Gatbawi, ferries, modern port streets, and Dadohae mood make the final Haenam move feel earned.',
    nextLegLogic: 'After Mokpo, Haenam completes the route with Ttangkkeut, Duryunsan, Daeheungsa, and Korea\'s land-end symbolism.',
    highlights: ['Yudalsan Mountain', 'Gatbawi Rock', 'Dadohae harbor mood'],
  },
  {
    city: 'Haenam',
    citySlug: 'haenam',
    coordinates: { lat: 34.5733, lng: 126.599 },
    travelTimeFromPrevious: '1h - 1h 20m',
    cumulativeTime: '7h 50m',
    pitch: 'The land-end finale where Ttangkkeut, Duryunsan, Daeheungsa, rural roads, seafood, and southern peninsula views give Route 8 its emotional endpoint.',
    routeRole: 'Korea land-end finale',
    stayAdvice: 'End Route 8 in Haenam when the trip should feel like reaching a symbolic edge rather than simply arriving at another city.',
    whyItEarnsTime:
      'Haenam makes the Seoul-to-Honam descent complete. Ttangkkeut gives the route a literal and emotional endpoint, while Duryunsan and Daeheungsa add mountain and temple depth before Route 7 can continue to Wando.',
    highlights: ['Ttangkkeut Village', 'Duryunsan Mountain', 'Daeheungsa Temple'],
  },
];

const carHonamLandEndRoute: TransportRouteVariant = {
  id: 'honam-land-end-drive',
  routeCode: '8-0-c',
  routeGroupCode: '8-0',
  routeGroupLabel: 'Honam Inland to Land End',
  label: 'Honam Land-End Drive',
  routeName: 'Seoul to Haenam via Daejeon, Jeonju, Gwangju, and Mokpo',
  totalTravelTime: '7h 30m - 9h driving, 5-7 days recommended',
  totalDistance: '470-540 km',
  summary:
    'A southbound Honam route that turns Seoul into Daejeon corridor control and Sungsimdang food culture, Jeonju food and hanok culture, Gwangju modern democratic history, Mokpo harbor memory, and Haenam land-end symbolism.',
  bestFor: 'Travelers who want the strongest Seoul-to-southern-Jeolla line through food, modern history, harbor mood, and the land end.',
  tradeoff:
    'It overlaps with parts of Route 5, Route 6, and Route 7, but the purpose is different: Route 8 is the direct Honam-to-land-end spine.',
  stopPattern:
    'Best with Jeonju, Gwangju, Mokpo, and Haenam as the main emotional chapters; Daejeon controls pacing at the beginning.',
  chooseWhen:
    'Choose Route 8 when the traveler wants to understand Honam as a continuous descent from central Korea to Ttangkkeut.',
  avoidWhen:
    'Avoid it when the traveler wants beaches and islands first; Route 7 is better for that.',
  pacingNote:
    'Route 8 should feel like inland culture and civic history gradually becoming harbor and land-end emotion.',
  planningNotes: [
    'Use Daejeon as the practical first stabilizer, with Sungsimdang giving the stop a clear food reason instead of only a transfer reason.',
    'Let Jeonju and Gwangju carry the food-and-history center of the route.',
    'Use Mokpo as the harbor hinge before Haenam, not only as a Route 6 endpoint.',
    'Let Haenam finish the route with Ttangkkeut, Duryunsan, and Daeheungsa before Route 7 continues to Wando.',
  ],
  stopovers: honamLandEndStopovers,
  routePath: [
    [37.5665, 126.978],
    [36.3504, 127.3845],
    [35.8242, 127.148],
    [35.1595, 126.8526],
    [34.8118, 126.3922],
    [34.5733, 126.599],
  ],
};

export const seoulToHaenamRoute: RouteData = {
  routeCode: '8',
  from: 'Seoul',
  fromSlug: 'seoul',
  to: 'Haenam',
  toSlug: 'haenam',
  href: '/route-8',
  routeLabel: 'Route 8',
  headline: 'Seoul to Haenam through Daejeon, Jeonju, Gwangju, Mokpo, and Korea\'s land end.',
  overview:
    'Route 8 is the Honam inland-to-land-end spine. Daejeon stabilizes the departure from Seoul with station logic, Sungsimdang bakery culture, Yuseong recovery, and science-city scale; Jeonju makes Jeolla warm through hanok streets and food, Gwangju gives the route modern democratic history and civic seriousness, Mokpo turns the journey toward harbor memory and Dadohae mood, and Haenam finishes with Ttangkkeut, Duryunsan, Daeheungsa, and the emotional logic of reaching Korea\'s southern edge.',
  destinationPitch:
    'Haenam works as the Route 8 finale because it gives the route a symbolic endpoint. The traveler is not only leaving Seoul; they are reaching a land-end story that can continue into Wando and Route 7.',
  bestUseCases: [
    'Travelers who want Seoul to southern Jeolla without treating the middle as a transfer.',
    'Trips that need Jeonju food, Gwangju modern history, Mokpo harbor, and Haenam land-end meaning in one line.',
    'Users who want a powerful alternative to the default Seoul-Busan axis.',
  ],
  routePromise: [
    'The route will make Honam feel like a coherent descent, not scattered famous cities.',
    'It will balance food, modern democratic history, harbor life, Dadohae mood, and land-end symbolism.',
    'It will connect cleanly into Route 7 without making Route 7 carry all of the southwest origin story.',
  ],
  editorialNotes: [
    'Daejeon should be framed as the stabilizing first corridor city, with Sungsimdang making the stop memorable for food-driven travelers.',
    'Jeonju and Gwangju should not compete; Jeonju carries food warmth, Gwangju carries civic history and Honam city scale.',
    'Mokpo is a junction: Route 6 finale, Route 7 launchpad, and Route 8 harbor hinge.',
    'Haenam is a junction: Route 8 finale and Route 7 continuation toward Wando.',
  ],
  transports: {
    KTX: {
      mode: 'KTX',
      id: 'rail-honam-land-end',
      routeCode: '8-0-r',
      routeGroupCode: '8-0',
      routeGroupLabel: 'Honam Inland to Land End',
      label: 'Rail + Local Transit',
      routeName: 'Seoul to Haenam rail-led Honam itinerary',
      totalTravelTime: '3h-4h rail/bus transfer, 5-6 days as a route',
      totalDistance: '470-540 km',
      summary:
        'A public-transport version that uses Daejeon, Jeonju, Gwangju, and Mokpo as strong rail or bus anchors, then treats Haenam as the land-end local-transfer finale.',
      bestFor: 'Travelers without a car who want Honam food, history, harbor, and land-end meaning.',
      tradeoff: 'The main cities are practical, but Haenam and Ttangkkeut require local-transfer planning.',
      stopPattern: 'Use Jeonju and Gwangju as main nights, Mokpo as harbor night, and Haenam as the finale.',
      chooseWhen: 'Choose this when the traveler wants the Honam story with fewer driving demands.',
      avoidWhen: 'Avoid it when the itinerary depends on remote rural roads, sunrise timing, or many temple/coast detours.',
      pacingNote: 'Keep the public-transport version selective and honest about the final Haenam transfer.',
      planningNotes: [
        'Use Daejeon only when it improves timing; otherwise let Jeonju become the first emotional stop.',
        'Keep Gwangju as a serious overnight, not a same-day mention.',
        'Treat Mokpo as the final easy city before Haenam.',
      ],
      stopovers: honamLandEndStopovers,
      routePath: carHonamLandEndRoute.routePath,
    },
    car: {
      mode: 'car',
      ...carHonamLandEndRoute,
    },
    bicycle: {
      mode: 'bicycle',
      id: 'bike-honam-land-end-concept',
      routeCode: '8-0-b',
      routeGroupCode: '8-0',
      routeGroupLabel: 'Honam Inland to Land End',
      label: 'Honam Bicycle Concept',
      routeName: 'Seoul to Haenam bicycle concept',
      totalTravelTime: '8-12 days',
      totalDistance: '500-620 km',
      summary:
        'A long-distance concept for experienced riders who want central Korea, Jeolla cities, Honam civic history, Mokpo harbor, and the land end as one ride.',
      bestFor: 'Experienced riders who want a meaningful southbound endpoint at Haenam.',
      tradeoff: 'Urban exits, summer heat, rural roads, and final coastal approaches need detailed safety planning.',
      stopPattern: 'Use Daejeon, Jeonju, Gwangju, Mokpo, and Haenam as recovery anchors.',
      chooseWhen: 'Choose this only when the ride itself is the product.',
      avoidWhen: 'Avoid it for casual riders until segment-level safety guidance exists.',
      pacingNote: 'The bicycle version is aspirational and should stay clearly marked as a planning concept.',
      planningNotes: [
        'Future work should add road safety, heat, climbs, and service-gap notes.',
        'City pages should support laundry, recovery food, and simple stays.',
        'Haenam should be treated as the symbolic endpoint, not a rushed add-on.',
      ],
      stopovers: honamLandEndStopovers,
      routePath: carHonamLandEndRoute.routePath,
    },
    bus: {
      mode: 'bus',
      id: 'bus-honam-land-end',
      routeCode: '8-0-d',
      routeGroupCode: '8-0',
      routeGroupLabel: 'Honam Inland to Land End',
      label: 'Intercity Bus',
      routeName: 'Seoul to Haenam bus-led Honam route',
      totalTravelTime: '4h-6h direct transfer, 5-7 days as a route',
      totalDistance: '470-540 km',
      summary:
        'A bus-friendly version that makes Jeonju, Gwangju, Mokpo, and Haenam the core southbound chapters.',
      bestFor: 'Budget travelers, solo travelers, and users who prefer city-center arrivals.',
      tradeoff: 'Bus travel is practical, but rural Haenam and Ttangkkeut require careful local timing.',
      stopPattern: 'Best with Jeonju, Gwangju, Mokpo, and Haenam; add Daejeon only when timing needs a first split.',
      chooseWhen: 'Choose bus when simplicity and price matter more than detour freedom.',
      avoidWhen: 'Avoid it when the traveler expects flexible rural roads or remote sunset timing.',
      pacingNote: 'Bus Route 8 should stay focused on fewer, stronger chapters.',
      planningNotes: [
        'Use Jeonju and Gwangju as the main story nights.',
        'Use Mokpo to make the final Haenam move feel coastal.',
        'Do not overpack Haenam; the finale needs space.',
      ],
      stopovers: honamLandEndStopovers,
      routePath: carHonamLandEndRoute.routePath,
    },
  },
};

const allRoutes: RouteData[] = [
  seoulToBusanRoute,
  seoulToGangneungRoute,
  seoulToSokchoRoute,
  goseongToBusanRoute,
  seoulToYeosuRoute,
  seoulToMokpoRoute,
  mokpoToBusanRoute,
  seoulToHaenamRoute,
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

