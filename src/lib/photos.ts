import type { ImageMetadata } from 'astro';
import type { MemberId } from './team';

/**
 * Team photos. Put a photo in src/assets/team/ named after the person's id,
 * for example src/assets/team/ximen.jpg (jpg, jpeg, png or webp). Without a photo
 * the page shows a coloured block with initials.
 */
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/team/*.{jpg,jpeg,png,webp}', { eager: true });

export function photoOf(id: MemberId): ImageMetadata | undefined {
  const key = Object.keys(files).find((path) => path.split('/').pop()!.split('.')[0] === id);
  return key ? files[key].default : undefined;
}
