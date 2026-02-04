import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'How It Works | Simple & Secure Process',
  description: 'Learn how our game boosting service works, from placing an order to completion.',
};

const HowItWorksPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">How It Works</h1>
        <p className="text-lg text-gray-400 mb-16">
          Our process is designed to be simple, transparent, and secure from start to finish.
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-700" aria-hidden="true"></div>
        <div className="relative grid md:grid-cols-3 gap-12 text-center">
          
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-gray-800 border-2 border-purple-500 z-10">
              <span className="text-4xl font-bold text-purple-400">1</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Select Your Service</h2>
            <p className="text-gray-400">
              Choose your game and the specific service you need. Customize your order with our detailed calculators to match your exact goals.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-gray-800 border-2 border-purple-500 z-10">
              <span className="text-4xl font-bold text-purple-400">2</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Complete Your Order</h2>
            <p className="text-gray-400">
              Finalize your details and proceed with our secure payment system. Your order is processed instantly and assigned to a professional player.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-gray-800 border-2 border-purple-500 z-10">
              <span className="text-4xl font-bold text-purple-400">3</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Track Your Progress</h2>
            <p className="text-gray-400">
              Monitor your order's progress through your personal dashboard. You can communicate with your booster and see updates in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;