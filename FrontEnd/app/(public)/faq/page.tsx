import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions',
  description: 'Find answers to common questions about our game boosting services.',
};

const FAQPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="p-6 border rounded-lg bg-gray-800 border-gray-700">
          <h2 className="text-xl font-semibold mb-2">What is game boosting?</h2>
          <p className="text-gray-400">
            Game boosting is a service where a professional player helps you achieve your desired in-game goals, such as reaching a higher rank or completing difficult challenges.
          </p>
        </div>
        <div className="p-6 border rounded-lg bg-gray-800 border-gray-700">
          <h2 className="text-xl font-semibold mb-2">Is the service safe?</h2>
          <p className="text-gray-400">
            We prioritize account security. Our team consists of experienced players who follow strict protocols to ensure a secure process. We recommend enabling all available account security features from your end as well.
          </p>
        </div>
        <div className="p-6 border rounded-lg bg-gray-800 border-gray-700">
          <h2 className="text-xl font-semibold mb-2">How long does an order take?</h2>
          <p className="text-gray-400">
            The completion time depends on the specific service and the size of the order. We offer express options for faster delivery, and you can see an estimated completion time before you finalize your order.
          </p>
        </div>
        <div className="p-6 border rounded-lg bg-gray-800 border-gray-700">
          <h2 className="text-xl font-semibold mb-2">Can I play on my account during the boost?</h2>
          <p className="text-gray-400">
            It is generally not recommended to log into your game account while a Solo order is in progress to avoid any conflicts. If you choose a Duo (self-play) service, you will be playing alongside our professional player.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;