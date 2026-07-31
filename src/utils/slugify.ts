export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}

// Generate url of style : /market-outlook/{slug}-{id}
export function generatePostUrl(id: string | number, title: string): string {
  const slug = slugify(title);
  return `/market-outlook/${slug}-${id}`;
}

// Generate URL of style: /news/{slug}-{id}
export function generateNewsPostUrl(id: string | number, title: string): string {
  const slug = slugify(title);
  return `/news/${slug}-${id}`;
}

export function extractIdFromSlug(slugWithId: string): string {
  const parts = slugWithId.split('-');
  return parts[parts.length - 1];
}
