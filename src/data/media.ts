/**
 * Every image the site uses is imported here, so swapping a placeholder for a
 * real asset is a one-line change. Prefer WebP/AVIF for photos and mockups.
 */
import logo from '@/assets/logo.webp'
import heroBg from '@/assets/hero-bg-orange.svg'
import phoneMockup480 from '@/assets/hero-phone-480.webp'
import phoneMockup960 from '@/assets/hero-phone-960.webp'
import bannerBg from '@/assets/banner-bg.svg'
import blogCover800 from '@/assets/blog-lady-800.webp'
import blogCover1480 from '@/assets/blog-lady-1480.webp'

/** Lives in public/ so it ships as-is; referenced by URL, not imported. */
const ladyPhone = '/assets/fiynix-lady-phone-dark-overlay.jpg'

export const media = {
  logo,
  heroBg,
  phoneMockup: phoneMockup480,
  phoneMockupSrcset: `${phoneMockup480} 480w, ${phoneMockup960} 960w`,
  ladyPhone,
  bannerBg,
  /** Blog cover from public/assets/blog-lady.jpg; 800w + 1480w (aspect 2:3) */
  blogCover: blogCover800,
  blogCoverSrcset: `${blogCover800} 800w, ${blogCover1480} 1480w`,
}
