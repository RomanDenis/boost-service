import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard Overview',
  description: 'View a summary of your recent activity and orders.',
};

const OverviewPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Overview</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold">Active Order</h2>
          <p className="text-gray-400 mt-2">Valorant Wins Boost - In Progress</p>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mt-4">
            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `60%` }}></div>
          </div>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold">Account Status</h2>
          <p className="text-gray-400 mt-2">Verified User</p>
          <p className="text-sm text-gray-500 mt-1">Ready for all services</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;