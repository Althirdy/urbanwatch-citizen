import { ConcernItem, ConcernCategory, ConcernEvent } from './utils';

let concernsStore: ConcernItem[] = [];

export function getConcerns(): ConcernItem[] {
  return concernsStore.slice().reverse();
}

export function addConcern(input: {
  title: string;
  description: string;
  category: ConcernCategory;
  imageUri?: string;
  location?: string;
}): ConcernItem {
  const newConcern: ConcernItem = {
    id: Math.random().toString(36).slice(2),
    title: input.title,
    description: input.description,
    category: input.category,
    imageUri: input.imageUri,
    location: input.location,
    date: new Date().toLocaleString(),
    status: 'Pending',
    timeline: [],
  };
  concernsStore.push(newConcern);
  return newConcern;
}

export function clearConcerns() {
  concernsStore = [];
}

export function getConcernById(id: string): ConcernItem | undefined {
  return concernsStore.find((c) => c.id === id);
}

export function addEventToConcern(id: string, event: ConcernEvent) {
  const c = concernsStore.find((x) => x.id === id);
  if (!c) return;
  c.timeline = c.timeline ?? [];
  c.timeline.push(event);
  // advance status according to event
  c.status = event.type;
}

