import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'About Us | BountyHub',
  description: 'Learn about BountyHub, our mission, vision, and the team behind the marketplace.'
};
export default function AboutLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}