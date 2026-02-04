import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const CTA = () => {
  return (
    <section className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Dominate the Game?</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Let our professional players help you achieve your goals. Get started now and experience a better way to play.
          </p>
          <Link href="/pricing" passHref>
            <Button size="lg" as="a">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
