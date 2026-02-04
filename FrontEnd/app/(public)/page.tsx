import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

// Let's define our games here for easy mapping.
// In a real app, this would come from a CMS or a config file.
const games = [
  { name: 'Counter-Strike 2', href: '/games/cs2', img: '/images/cs2-card.jpg' },
  { name: 'Valorant', href: '/games/valorant', img: '/images/valorant-card.jpg' },
  { name: 'League of Legends', href: '/games/lol', img: '/images/lol-card.jpg' },
  { name: 'Dota 2', href: '/games/dota2', img: '/images/dota2-card.jpg' },
];

const features = [
    { name: 'Experienced Players', description: 'Our team consists of verified, top-tier players.' },
    { name: 'Secure Process', description: 'Account safety is our priority. We use secure methods for all services.' },
    { name: 'Fast Delivery', description: 'We work efficiently to complete your order as quickly as possible.' },
    { name: '24/7 Support', description: 'Our customer support team is available around the clock to assist you.' },
];

export default function HomePage() {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="text-center pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Reach Your Desired Rank in Your Favorite Games
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            Professional and reliable boosting services by experienced players. Select your game and start climbing today.
          </p>
          <div className="mt-8">
            <Link href="/games">
              <Button size="lg" variant="primary">
                Browse Games
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <Link href={game.href} key={game.name}>
                <Card className="overflow-hidden group">
                    {/* Placeholder for an image */}
                    <div className="h-48 bg-neutral-800 flex items-center justify-center">
                        <span className="text-neutral-500 italic">{game.name} Image</span>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                            {game.name}
                        </h3>
                    </div>
                </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-neutral-300">A professional service you can trust.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
                <div key={feature.name} className="p-6 bg-neutral-800/50 rounded-lg">
                    <h3 className="text-xl font-semibold text-white">{feature.name}</h3>
                    <p className="mt-2 text-neutral-400">{feature.description}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What Our Customers Say</h2>
        <div className="mt-8 flow-root">
            <div className="-m-2">
                <div className="p-2">
                    <Card className="p-6">
                        <blockquote className="text-neutral-300">
                            <p>"The service was incredibly fast and professional. I was kept updated throughout the entire process. Highly recommend!"</p>
                        </blockquote>
                        <figcaption className="mt-4 font-semibold text-white">- Alex_P, CS2 Rank Boost</figcaption>
                    </Card>
                </div>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16">
        <div className="bg-blue-600 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Climb the Ranks?</h2>
            <p className="mt-4 text-lg text-blue-100">Don't let the grind hold you back. Let our experts help you achieve your goals.</p>
            <div className="mt-8">
                <Link href="/games">
                  <Button size="lg" variant="light">
                    Start Your Order
                  </Button>
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
