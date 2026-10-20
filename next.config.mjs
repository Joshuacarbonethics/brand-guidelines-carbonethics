const nextConfig = {
  reactCompiler: true,
  compress: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/brand-guidelines",
        destination: "/",
        permanent: true,
      },
      {
        source: "/brand-guidelines/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
