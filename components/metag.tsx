// components/MetaTags.tsx
import Head from "next/head";

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string; // website, article, product, etc.
  publishedTime?: string; // ISO date string
  updatedTime?: string; // ISO date string
}

export default function MetaTags({
  title = "My Awesome Site",
  description = "The best place to find awesome stuff online.",
  keywords = ["awesome", "website", "nextjs", "seo"],
  image = "/default-image.jpg",
  url = "https://www.example.com",
  type = "website",
  publishedTime,
  updatedTime
}: MetaTagsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: title,
    url,
    logo: `${url}/logo.png`,
    sameAs: [
      "https://twitter.com/yourhandle",
      "https://facebook.com/yourpage",
      "https://www.linkedin.com/in/yourprofile"
    ]
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: url
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: url
      }
    ]
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {updatedTime && <meta property="article:modified_time" content={updatedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </Head>
  );
}
