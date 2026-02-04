import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export const metadata: Metadata = {
  title: 'Account Settings',
  description: 'Manage your account settings, password, and preferences.',
};

const SettingsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
      <form className="space-y-12 max-w-2xl">
        <div className="p-8 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
              <Input id="email" type="email" defaultValue="user@example.com" disabled />
            </div>
          </div>
        </div>

        <div className="p-8 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Change Password</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="current-password" className="block text-sm font-medium mb-2">Current Password</label>
              <Input id="current-password" type="password" placeholder="••••••••" />
            </div>
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium mb-2">New Password</label>
              <Input id="new-password" type="password" placeholder="••••••••" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-start">
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
