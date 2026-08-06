export function generateStaticParams() {
  return [
    { id: "manufacturing" },
    { id: "aerospace-defence" },
    { id: "energy-utilities" },
    { id: "construction-engineering" },
    { id: "service-management" },
    { id: "healthcare" },
  ];
}

export default function Layout({ children }) {
  return children;
}
