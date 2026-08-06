export function generateStaticParams() {
  return [
    { slug: "website-design-development" },
    { slug: "infrastructure-management-services" },
    { slug: "it-consulting" },
    { slug: "digital-marketing" },
    { slug: "business-intelligence-analytics" },
    { slug: "quality-assurance-testing" },
    { slug: "cloud-solutions" },
    { slug: "artificial-intelligence-automation" },
  ];
}

export default function Layout({ children }) {
  return children;
}
