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
        'Route 2 works as an eastbound opening: Yeoju and Wonju prepare the move before Gangneung gives the first full East Sea payoff.',
    },
    {
      question: 'Should I continue past Gangneung to Samcheok?',
      answer:
        'Continue to Samcheok when you want cliffs, caves, ports, and a slower east-coast continuation rather than stopping at the first famous beach city.',
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
};

export function getRouteSeoFaqs(routeCode: string) {
  return routeSeoFaqsByCode[routeCode] ?? [];
}
