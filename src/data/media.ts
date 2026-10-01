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
import ladyPhone720 from '@/assets/lady-phone-720.webp'
import ladyPhone1440 from '@/assets/lady-phone-1440.webp'

export const media = {
  logo,
  heroBg,
  phoneMockup: phoneMockup480,
  phoneMockupSrcset: `${phoneMockup480} 480w, ${phoneMockup960} 960w`,
  /** From public/assets/fiynix-lady-phone-dark-overlay.jpg (overlay baked in); 3:2 */
  ladyPhone: ladyPhone720,
  ladyPhoneSrcset: `${ladyPhone720} 720w, ${ladyPhone1440} 1440w`,
  bannerBg,
  /** Blog cover from public/assets/blog-lady.jpg; 800w + 1480w (aspect 2:3) */
  blogCover: blogCover800,
  blogCoverSrcset: `${blogCover800} 800w, ${blogCover1480} 1480w`,
}
