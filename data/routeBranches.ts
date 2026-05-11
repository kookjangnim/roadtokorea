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
  title: 'Wonju to Yeongwol, short inland branch',
  href: '/route-2/branch-a',
  summary:
    'A compact inland extension from Route 2 where Wonju hands off to Jecheon, then Yeongwol turns river geography, Danjong history, and film-driven interest into the emotional payoff.',
  routeLogic:
    'Keep Route 2 as the Seoul-to-Gangneung eastbound main line. Branch 2A is the optional inland deepening for travelers who have one extra day and want a story-led detour instead of a new flagship route.',
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
        'Yeongwol carries Danjong exile memory, Cheongnyeongpo, Jangneung, river geography, and the Wang-gwa Saneun Namja revival layer.',
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
