import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/app/layout/Header';
import { Footer } from '@/app/layout/Footer';
import { Navigation } from '@/app/layout/Navigation';

export function AppLayout() {
  const location = useLocation();
  const isMainPage = location.pathname === '/' || location.pathname === '/products';

  if (isMainPage) {
    return (
      <div className="min-h-screen bg-glow-surface font-jakarta">
        <Header />
        <main className="pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 pt-24 lg:flex-row lg:px-6">
        <Navigation />
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
