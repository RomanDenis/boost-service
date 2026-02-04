import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Order Details',
  description: 'View the details and progress of a specific order.',
};


const OrderDetailsPage = ({ params }: { params: { orderId: string } }) => {
  const order = {
    id: params.orderId,
    game: 'Valorant',
    service: 'Wins Boost',
    status: 'In Progress',
    date: '2024-03-01',
    details: '5 Wins, Duo Queue',
    progress: 60,
  };

  return (
    <div>
      <Link href="/orders" className="text-purple-400 hover:underline mb-8 block">&larr; Back to all orders</Link>
      
      <div className="bg-gray-800 p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold">Order #{order.id}</h1>
            <p className="text-gray-400 mt-1">{order.game} - {order.service}</p>
          </div>
          <span className="px-3 py-1 text-sm font-bold rounded-full bg-yellow-500/20 text-yellow-300">
            {order.status}
          </span>
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold">Details</h2>
            <p className="text-gray-300">{order.details}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Progress</h2>
            <div className="w-full bg-gray-700 rounded-full h-4 mt-2">
              <div className="bg-purple-600 h-4 rounded-full text-center text-xs text-white" style={{ width: `${order.progress}%` }}>
                {order.progress}%
              </div>
            </div>
          </div>
          {/* Placeholder for booster chat */}
          <div>
            <h2 className="text-lg font-semibold">Chat with your Booster</h2>
            <div className="mt-2 p-4 bg-gray-900 rounded-lg h-40 flex items-center justify-center">
              <p className="text-gray-500">Chat component placeholder.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
