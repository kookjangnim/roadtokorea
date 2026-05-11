export type RouteBranchSlug = 'branch-a';

export interface RouteBranchCity {
  slug: string;
  name: string;
  href: string;
  role: string;
  summary: string;
}

export interface RouteBranch {
  routeSlug: 'route-2';
  branchSlug: RouteBranchSlug;
  code: string;
  label: string;
  title: string;
  href: string;
  summary: string;
  routeLogic: string;
  cities: RouteBranchCity[];
}

export const route2BranchA: RouteBranch = {
  routeSlug: 'route-2',
  branchSlug: 'branch-a',
  code: '2A',
  label: 'Branch 2A',
  title: 'Wonju to Samcheok, deep Gangwon inland-to-coast branch',
  href: '/route-2/branch-a',
  summary:
    'A deeper Gangwon inland extension from Route 2 where Wonju hands off to Jecheon, Yeongwol, Jeongseon, and Taebaek before the branch exits to the East Sea at Samcheok.',
  routeLogic:
    'Keep Route 2 as the Seoul-to-Gangneung mountain-to-sea main line. Branch 2A is the slower deep-Gangwon alternative: lake, Danjong memory, Arirang and coal-mining mountain culture, then a Route 4 handoff at Samcheok.',
  cities: [
    {
      slug: 'wonju',
      name: 'Wonju',
      href: '/route-2/wonju',
      role: 'Route 2 hinge',
      summary:
        'The branch starts where Route 2 already has structure: Wonju gathers the eastbound line before the traveler chooses coast or inland depth.',
    },
    {
      slug: 'jecheon',
      name: 'Jecheon',
      href: '/cities/jecheon',
      role: 'Lake and mountain threshold',
      summary:
        'Jecheon gives the branch a natural terrain transition before Yeongwol turns the trip into a more emotional history chapter.',
    },
    {
      slug: 'yeongwol',
      name: 'Yeongwol',
      href: '/cities/yeongwol',
      role: 'Emotional climax',
      summary:
        'Yeongwol carries Danjong exile memory, Cheongnyeongpo, Jangneung, river geography, and the Wang-gwa Saneun Namja revival layer before the branch moves deeper into mountain Gangwon.',
    },
    {
      slug: 'jeongseon',
      name: 'Jeongseon',
      href: '/cities/jeongseon',
      role: 'Arirang, railbike, and casino transition',
      summary:
        'Jeongseon brings Arirang Market, railbike scenery, old mining-era market revival, Kangwon Land, and a deeper Gangwon interior mood before Taebaek.',
    },
    {
      slug: 'taebaek',
      name: 'Taebaek',
      href: '/cities/taebaek',
      role: 'Coal and highland threshold',
      summary:
        'Taebaek turns the branch toward coal history, Taebaeksan, Hwangji Pond, highland air, and the final mountain-to-coast push toward Samcheok.',
    },
    {
      slug: 'samcheok',
      name: 'Samcheok',
      href: '/route-4/samcheok',
      role: 'Route 4 coast handoff',
      summary:
        'Samcheok is where the deep inland branch finally reaches the East Sea and joins the National Route 7 coastline.',
    },
  ],
};

export const routeBranches = [route2BranchA];

export function getRouteBranch(routeSlug: string, branchSlug: string): RouteBranch | null {
  return (
    routeBranches.find((branch) => branch.routeSlug === routeSlug && branch.branchSlug === branchSlug) ??
    null
  );
}
