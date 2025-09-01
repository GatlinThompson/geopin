import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This setting only applies to <Image src="...svg" />, not component imports.
  images: { dangerouslyAllowSVG: true },

  // Production/Webpack build:
  webpack(config) {
    // Exclude .svg from Next's default asset/image handling
    const assetRule = config.module.rules.find(
      // @ts-ignore - rule shape differs per Next version
      (rule) => rule?.test?.test?.(".svg")
    );
    if (assetRule) {
      // @ts-ignore
      assetRule.exclude = /\.svg$/i;
    }

    // Use SVGR for .svg => React component
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            titleProp: true,
            svgo: true,
            // lets you color via CSS (text-* in Tailwind)
            svgProps: { fill: "currentColor" },
          },
        },
      ],
    });

    return config;
  },

  // Dev/Turbopack:
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
