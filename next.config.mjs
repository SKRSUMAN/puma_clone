/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.visa.com','www.npci.org.in','www.rupay.co.in','images.puma.com','cdn.sanity.io'], // Allow external images from this domain
    },
  };
  
  export default nextConfig;
  