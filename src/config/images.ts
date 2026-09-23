import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/bled/*.jpg', { eager: true });

export function localImage(url: string): ImageMetadata {
  const filename = url.split('/').pop();
  const image = images[`../assets/bled/${filename}`]?.default;
  if (!image) throw new Error(`Missing local image: ${url}`);
  return image;
}
