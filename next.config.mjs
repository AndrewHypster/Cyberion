/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Дозволяємо Next.js конвертувати картинки в AVIF (краще за WebP)
    formats: ["image/avif", "image/webp"],
    // Якщо картинки на Vercel, це допоможе з TTL
    minimumCacheTTL: 60,
    // Налаштування пристроїв для генерації srcset (опційно)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  // Якщо хочеш ще трохи витиснути з JS (TBT)
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // прибере логи в продакшені
  },
};

export default nextConfig;
