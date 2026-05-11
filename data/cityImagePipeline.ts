import { getCityImageSlots } from './cityImageSlots';

export type ImagePipelinePriority = 'publish-ready' | 'replace-soon' | 'blocked';

export type ImagePipelineItem = {
  slot: string;
  priority: ImagePipelinePriority;
  brief: string;
  sourceHref: string;
};

export function getCityImagePipeline(citySlug: string): ImagePipelineItem[] {
  const citySlots = getCityImageSlots(citySlug);
  if (!citySlots) return [];

  return Object.entries(citySlots.slots).map(([slot, value]) => {
    const priority: ImagePipelinePriority =
      value.status === 'ready' ? 'publish-ready' : value.status === 'briefed' ? 'replace-soon' : 'blocked';

    return {
      slot,
      priority,
      brief: value.brief,
      sourceHref: value.sourceHref,
    };
  });
}
