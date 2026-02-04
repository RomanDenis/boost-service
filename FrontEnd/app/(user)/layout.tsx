// import { DashboardSidebar } from '@/components/shared/DashboardSidebar';

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* <DashboardSidebar /> */}
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
}
