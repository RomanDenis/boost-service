import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'All Games | Boosting Services',
  description: 'Select from our list of supported games including CS2, Valorant, League of Legends, and Dota 2.',
};

const games = [
  { name: 'Counter-Strike 2', href: '/games/cs2', img: '/images/cs2-card.jpg', description: 'Competitive rank and win boosting.' },
  { name: 'Valorant', href: '/games/valorant', img: '/images/valorant-card.jpg', description: 'Climb the ranks from Iron to Radiant.' },
  { name: 'League of Legends', href: '/games/lol', img: '/images/lol-card.jpg', description: 'Division, wins, and placement services.' },
  { name: 'Dota 2', href: '/games/dota2', img: '/images/dota2-card.jpg', description: 'MMR boosting and coaching from top players.' },
];

export default function AllGamesPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Choose Your Game
          </h1>
          <p className="mt-4 text-lg text-neutral-300">
            We offer professional boosting services for the world's top competitive titles.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game) => (
            <Link href={game.href} key={game.name}>
              <Card className="overflow-hidden group h-full flex flex-col">
                {/* Placeholder for an image */}
                <div className="h-40 bg-neutral-800 flex items-center justify-center">
                  <span className="text-neutral-500 italic">{game.name} Image</span>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {game.name}
                  </h2>
                  <p className="mt-2 text-sm text-neutral-400 flex-grow">{game.description}</p>
                   <span className="mt-4 text-sm font-semibold text-blue-500 group-hover:text-blue-400">
                    View Services &rarr;
                   </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
