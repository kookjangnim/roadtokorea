export type UpdatedCity = {
  name: string;
  slug: string;
  tier: 'tier-1' | 'tier-2' | 'tier-4';
  href: string;
  reason: string;
  role: string;
};

export const updatedCities: UpdatedCity[] = [
  {
    name: 'Chungju',
    slug: 'chungju',
    tier: 'tier-2',
    href: '/tier-2/chungju',
    reason: 'Reference-quality inland support page with clear stay and handoff logic.',
    role: 'Route 1 practical benchmark',
  },
  {
    name: 'Mungyeong',
    slug: 'mungyeong',
    tier: 'tier-2',
    href: '/tier-2/mungyeong',
    reason: 'Strong inland handoff page with quieter route logic that now reads intentionally.',
    role: 'Inland transition anchor',
  },
  {
    name: 'Andong',
    slug: 'andong',
    tier: 'tier-2',
    href: '/tier-2/andong',
    reason: 'Cultural support page with a convincing overnight and onward-route payoff.',
    role: 'Cultural inland chapter',
  },
  {
    name: 'Daegu',
    slug: 'daegu',
    tier: 'tier-2',
    href: '/tier-2/daegu',
    reason: 'Southern support page with clear city-scale sleep, food, and route-reset logic.',
    role: 'Southern route stabilizer',
  },
  {
    name: 'Gyeongju',
    slug: 'gyeongju',
    tier: 'tier-2',
    href: '/tier-2/gyeongju',
    reason: 'Route-support page now reads like a real stop choice instead of a generic destination card.',
    role: 'Historic support chapter',
  },
  {
    name: 'Daejeon',
    slug: 'daejeon',
    tier: 'tier-2',
    href: '/tier-2/daejeon',
    reason: 'Practical corridor sample with a strong station-versus-recovery split.',
    role: 'Central split city',
  },
  {
    name: 'Cheonan',
    slug: 'cheonan',
    tier: 'tier-4',
    href: '/tier-4/cheonan',
    reason: 'Early-route break page now has clear first-night and low-friction support value.',
    role: 'Early corridor reset',
  },
  {
    name: 'Gumi',
    slug: 'gumi',
    tier: 'tier-4',
    href: '/tier-4/gumi',
    reason: 'Middle-corridor page now clearly supports fatigue control before Daegu.',
    role: 'Pre-Daegu breather',
  },
  {
    name: 'Changnyeong',
    slug: 'changnyeong',
    tier: 'tier-4',
    href: '/tier-4/changnyeong',
    reason: 'Late-route recovery stop with a distinct quiet-finish purpose.',
    role: 'Lower-river recovery node',
  },
  {
    name: 'Gangneung',
    slug: 'gangneung',
    tier: 'tier-1',
    href: '/tier-1/gangneung',
    reason: 'East-coast entry page now feels intentional and ready for direct discovery.',
    role: 'Coast-entry anchor',
  },
  {
    name: 'Uljin',
    slug: 'uljin',
    tier: 'tier-4',
    href: '/tier-4/uljin',
    reason: 'Long-coast support page now explains why the overnight matters.',
    role: 'Coastal continuity node',
  },
  {
    name: 'Yeongdeok',
    slug: 'yeongdeok',
    tier: 'tier-4',
    href: '/tier-4/yeongdeok',
    reason: 'Small-port coast page now has clear seafood identity, stay logic, and a clean handoff into Pohang.',
    role: 'Coastal flavor anchor',
  },
  {
    name: 'Pohang',
    slug: 'pohang',
    tier: 'tier-2',
    href: '/tier-2/pohang',
    reason: 'Late-route hinge page now cleanly turns the long coast into a controlled final approach.',
    role: 'Late-coast hinge city',
  },
  {
    name: 'Jecheon',
    slug: 'jecheon',
    tier: 'tier-2',
    href: '/tier-2/jecheon',
    reason: 'Early inland threshold page now clearly explains why the route turns inward and how the first night should work.',
    role: 'Inland threshold city',
  },
  {
    name: 'Sangju',
    slug: 'sangju',
    tier: 'tier-2',
    href: '/tier-2/sangju',
    reason: 'Post-pass corridor page now gives the inland line a stable river-led handoff instead of a vague continuation.',
    role: 'Nakdong corridor hinge',
  },
  {
    name: 'Samcheok',
    slug: 'samcheok',
    tier: 'tier-4',
    href: '/tier-4/samcheok',
    reason: 'Scenic continuation page now gives the east coast one more real chapter between Gangneung and Uljin.',
    role: 'Scenic coastline continuation',
  },
  {
    name: 'Miryang',
    slug: 'miryang',
    tier: 'tier-4',
    href: '/tier-4/miryang',
    reason: 'Quiet-hinge page now gives the late Route 1 line a calmer final handoff before Busan.',
    role: 'Quiet southern hinge',
  },
];

export const featuredUpdatedCities = updatedCities.slice(0, 6);
