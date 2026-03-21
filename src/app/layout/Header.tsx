import { Link, useNavigate } from 'react-router-dom';
import { getDefaultPathForRole } from '@/features/auth/lib/access-control';
import { useAuthStore } from '@/store/auth-store';

const navLinks = [
  { label: 'Best Sellers', href: '/products' },
  { label: 'New Arrivals', href: '/products' },
  { label: 'Brands', href: '/products' },
  { label: 'Skincare', href: '/products' },
  { label: 'Wellness', href: '/products' },
];

export function Header() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  return (
    <header className="fixed top-0 z-50 w-full bg-glow-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-4">
        <Link
          to={user ? getDefaultPathForRole(user.role) : '/products'}
          className="text-2xl font-bold uppercase tracking-tighter text-glow-on-surface font-jakarta"
        >
          GLOW CURATOR
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              to={link.href}
              className={`font-jakarta text-sm tracking-tight transition-colors duration-300 ${
                i === 0
                  ? 'border-b-2 border-glow-primary font-semibold text-glow-primary pb-1'
                  : 'text-glow-on-surface-variant hover:text-glow-on-surface'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center rounded-full bg-glow-surface-container-highest/50 px-4 py-2 lg:flex">
            <span className="material-symbols-outlined text-sm text-glow-on-surface-variant">search</span>
            <input
              type="text"
              placeholder="Search curated beauty..."
              className="w-48 border-none bg-transparent text-sm placeholder:text-glow-on-surface-variant/60 focus:outline-none focus:ring-0"
            />
          </div>

          <button className="rounded-full p-2 transition-colors hover:bg-glow-surface-container-highest/50">
            <span className="material-symbols-outlined text-glow-on-surface">favorite</span>
          </button>

          <button
            onClick={() => {
              if (user) {
                navigate(getDefaultPathForRole(user.role));
              } else {
                navigate('/login');
              }
            }}
            className="rounded-full p-2 transition-colors hover:bg-glow-surface-container-highest/50"
          >
            <span className="material-symbols-outlined text-glow-on-surface">person</span>
          </button>

          <button className="relative rounded-full p-2 transition-colors hover:bg-glow-surface-container-highest/50">
            <span className="material-symbols-outlined text-glow-on-surface">shopping_bag</span>
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-glow-secondary text-[10px] text-white">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
