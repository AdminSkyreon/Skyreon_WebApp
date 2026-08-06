import Navbar from '@/components/Navbar';
import HomeClient from '@/components/HomeClient';

// SEO & Meta Tags for Home Page (Server-side)
export const metadata = {
  title: "Skyreon | Leading IT & Software Development Company",
  description: "Skyreon is a premier IT and software solutions provider specializing in custom web development, mobile apps, cloud computing, and enterprise IT services.",
  keywords: "IT company, software development company, web development services, mobile app development, custom software solutions, IT consulting",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <HomeClient />
    </>
  );
}