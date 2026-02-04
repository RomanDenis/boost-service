import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Pricing | Game Boosting Services',
  description: 'Explore pricing for our professional game boosting services for CS2, Valorant, Dota 2, and League of Legends.',
};

const games = [
  { name: 'Counter-Strike 2', href: '/games/cs2/boost/rank', description: 'Premier Rating, Wingman, and more.' },
  { name: 'Valorant', href: '/games/valorant/boost/rank', description: 'Rank, Wins, and Placement matches.' },
  { name: 'League of Legends', href: '/games/lol/boost/rank', description: 'Solo/Duo Queue, Wins, and Placements.' },
  { name: 'Dota 2', href: '/games/dota2/boost/rank', description: 'MMR Boosting for all roles.' },
];

const PricingPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Our Services & Pricing</h1>
        <p className="text-lg text-gray-400 mb-16">
          Select a game to view detailed pricing and customize your order.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {games.map((game) => (
          <div key={game.name} className="p-8 border border-gray-700 rounded-lg flex flex-col bg-gray-900 hover:border-purple-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-2">{game.name}</h2>
            <p className="text-gray-400 mb-6 flex-grow">{game.description}</p>
            <Link href={game.href} passHref>
              <Button as="a" className="w-full mt-auto">
                View Pricing
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;