export function generateStaticParams() {
  return [
    { id: "oracle-sql" },
    { id: "flutter-mobile" },
    { id: "java-backend" },
    { id: "ai-agents" },
    { id: 'cloud-devops' },
    { id: 'security-infra' },
  ];
}

export default function Layout({ children }) {
  return children;
}
