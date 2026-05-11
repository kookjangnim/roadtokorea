export type RouteSeoFaq = {
  question: string;
  answer: string;
};

export const routeSeoFaqsByCode: Record<string, RouteSeoFaq[]> = {
  '1': [
    {
      question: 'What is the best Seoul to Busan road trip route?',
      answer:
        'The inland Route 1 works best when the trip should include Yeoju, Chungju, Mungyeong, Andong, Gyeongju, and a more authored path before Busan.',
    },
    {
      question: 'Can Seoul to Busan feel like more than a transfer?',
      answer:
        'Yes. The route becomes stronger when inland cities carry royal, lake, pass, Confucian, and Silla heritage chapters before the final Busan arrival.',
    },
  ],
  '2': [
    {
      question: 'What is a good Seoul to Gangneung route?',
      answer:
        'Route 2 works as a mountain-to-sea route: Yeoju and Wonju prepare the move, Pyeongchang and Daegwallyeong carry the Olympic highland crossing, and Gangneung gives the East Sea payoff.',
    },
    {
      question: 'Why is Gangneung a junction city?',
      answer:
        'Gangneung is where Route 2 can end cleanly after the mountain crossing, or Route 4 can continue south along National Route 7 toward Donghae, Samcheok, and Busan.',
    },
  ],
  '3': [
    {
      question: 'What is the best Seoul to Sokcho road trip route?',
      answer:
        'Route 3 is strongest when it uses Gapyeong and Chuncheon to soften the start, Yanggu and Inje to add northern terrain and memory, and a Seoraksan pass choice before Sokcho.',
    },
    {
      question: 'Why not drive directly from Seoul to Sokcho?',
      answer:
        'Direct is faster, but the route becomes more meaningful when Sokcho feels earned through river, lake, borderland, pass, Seoraksan, and East Sea chapters.',
    },
    {
      question: 'Which pass should I choose before Sokcho?',
      answer:
        'Use Jinburyeong for the northern Goseong handoff, Hangyeryeong for stronger Seoraksan drama, and Misiryeong for the cleanest practical mountain-to-coast move.',
    },
  ],
  '4': [
    {
      question: 'What is Korea National Route 7 best for?',
      answer:
        'National Route 7 is best for a long east coast road trip, linking Goseong, Sokcho, Yangyang, Gangneung, Donghae, Samcheok, Uljin, Yeongdeok, Pohang, Gyeongju, Ulsan, and Busan.',
    },
    {
      question: 'Is Goseong to Busan a realistic Korea east coast itinerary?',
      answer:
        'Yes, but it should be treated as a multi-day coastal route rather than a single transfer. The value is the sequence of surf towns, ports, seafood, heritage, industrial coast, and Busan.',
    },
    {
      question: 'Why include Ulsan before Busan?',
      answer:
        'Ulsan shows modern coastal Korea through industry, Daewangam Park, Jangsaengpo whale memory, and the restored Taehwa River before the final Busan arrival.',
    },
  ],
  '5': [
    {
      question: 'What is the best Seoul to Yeosu route for culture and food?',
      answer:
        'Route 5 works best as Seoul, Cheonan, Gongju, Jeonju, Gwangju, Suncheon, and Yeosu, with an Imsil-Namwon inland variant for travelers who want cheese, Chunhyang, and Jirisan depth.',
    },
    {
      question: 'Why include Gwangju on Route 5?',
      answer:
        'Gwangju is essential on Route 5 because it carries a defining chapter of modern Korean history through May 18 memory, then adds Asia Culture Center, food, Mudeungsan, and city-scale Honam culture before Suncheon and Yeosu.',
    },
    {
      question: 'Why include Jeonju before Yeosu?',
      answer:
        'Jeonju gives the route its strongest inland overnight through Hanok Village, bibimbap, makgeolli, markets, and Jeolla food culture before the trip turns toward the southern coast.',
    },
    {
      question: 'Is Suncheon worth stopping before Yeosu?',
      answer:
        'Yes. Suncheon Bay Wetland and Suncheon Bay National Garden add an ecological chapter that makes Yeosu feel like an earned sea arrival rather than a simple end point.',
    },
  ],
  '6': [
    {
      question: 'What is the best Seoul to Mokpo west coast route?',
      answer:
        'Route 6 works best as Seoul, Incheon, Suwon, Seosan, Boryeong, Gunsan, and Mokpo, linking open-port history, Hwaseong Fortress, Haemi and Taean access, Daecheon Beach, modern port memory, and a southwest harbor finale.',
    },
    {
      question: 'Why include Gunsan before Mokpo?',
      answer:
        'Gunsan gives the west coast a serious modern-history port chapter through museums, old streets, bakeries, seafood, and harbor memory before Mokpo becomes the final southwest arrival.',
    },
    {
      question: 'Is Boryeong only worth visiting during the Mud Festival?',
      answer:
        'No. The Boryeong Mud Festival is the strongest hook, but Daecheon Beach, seafood, sunsets, and coastal stays make Boryeong useful beyond festival dates.',
    },
  ],
};

export function getRouteSeoFaqs(routeCode: string) {
  return routeSeoFaqsByCode[routeCode] ?? [];
}
