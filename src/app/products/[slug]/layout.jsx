export function generateStaticParams() {
  return [
    { slug: "bizsky-app" },
    { slug: "migration-tool" },
    { slug: "dashboard" },
  ];
}

export default function Layout({ children }) {
  return children;
}
