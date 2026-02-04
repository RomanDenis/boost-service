import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'My Orders',
  description: 'View your order history.',
};

const orders = [
    { id: 'ORD-002', game: 'Valorant', service: 'Wins Boost', status: 'In Progress', date: '2024-03-01' },
    { id: 'ORD-001', game: 'CS2', service: 'Rank Boost', status: 'Completed', date: '2024-02-15' },
];

const OrdersPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      <div className="bg-gray-800 rounded-lg shadow-md">
        <ul className="divide-y divide-gray-700">
          {orders.map((order) => (
            <li key={order.id}>
              <Link href={`/orders/${order.id}`} className="p-4 flex justify-between items-center hover:bg-gray-700/50 transition-colors duration-200">
                <div>
                  <p className="font-semibold">{order.game} - {order.service}</p>
                  <p className="text-sm text-gray-400">Ordered on {order.date}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${order.status === 'Completed' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
                  {order.status}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrdersPage;