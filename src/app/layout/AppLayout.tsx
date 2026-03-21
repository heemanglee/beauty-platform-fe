import { Outlet } from 'react-router-dom';
import { Header } from '@/app/layout/Header';
import { Navigation } from '@/app/layout/Navigation';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:flex-row lg:px-6">
        <Navigation />
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
