import type { CollectionEntry } from 'astro:content';

/** Newest year first; `order` breaks ties within a year. */
export function byNewestProject(a: CollectionEntry<'projects'>, b: CollectionEntry<'projects'>) {
  return b.data.year - a.data.year || a.data.order - b.data.order;
}

// Robots have no dates, so status stands in for recency: in-progress builds first, retired last.
const statusRank = { building: 0, active: 1, retired: 2 } as const;

export function byNewestRobot(a: CollectionEntry<'robots'>, b: CollectionEntry<'robots'>) {
  return statusRank[a.data.status] - statusRank[b.data.status] || a.data.order - b.data.order;
}
