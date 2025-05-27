import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  keywords = [], 
  schemaType = 'Organization',
  breadcrumbs = []
}) => {
  const { pathname } = useLocation();
  const canonicalUrl = `https://aitmcodingclub.example.com${pathname}`;
  const defaultTitle = 'AITM Coding Club | Code • Collaborate • Create';
  const defaultDescription = 'Join AITM Coding Club to enhance your programming skills through workshops, hackathons, and real-world projects. Foster innovation and problem-solving through technology.';
  
  const fullTitle = title ? `${title} | AITM Coding Club` : defaultTitle;
  const metaDescription = description || defaultDescription;
  
  // Combine keywords
  const allKeywords = [
    'aitm coding club', 
    'coding club aitm', 
    'coding club bhatkal', 
    'engineering college coding club',
    ...keywords
  ].join(', ');

  // Basic organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'AITM Coding Club',
    'url': 'https://aitmcodingclub.example.com',
    'logo': 'https://aitmcodingclub.example.com/logo.png',
    'description': defaultDescription,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Bhatkal',
      'addressRegion': 'Karnataka',
      'postalCode': '581320',
      'streetAddress': 'AITM Campus, Anjumanabad',
      'addressCountry': 'IN'
    },
    'sameAs': [
      'https://github.com/AITM-Coding-Club',
      'https://linkedin.com/company/aitm-coding-club',
      'https://instagram.com/aitm_coding_club'
    ],
    'email': 'aitmcodingclub@example.com'
  };

  // FAQ Schema if available
  const faqSchema = breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://aitmcodingclub.example.com${item.path}`
    }))
  } : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content="https://aitmcodingclub.example.com/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content="https://aitmcodingclub.example.com/twitter-image.jpg" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;