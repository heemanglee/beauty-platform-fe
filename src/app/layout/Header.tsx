import { Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getDefaultPathForRole } from '@/features/auth/lib/access-control';
import { useAuthStore } from '@/store/auth-store';

export function Header() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const clearSession = useAuthStore((state) => state.clearSession);

  const handleLogout = () => {
    clearSession();
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-6">
        <Link
          to={user ? getDefaultPathForRole(user.role) : '/products'}
          className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900"
        >
          <span className="flex size-9 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-soft">
            <Sparkles className="size-5" />
          </span>
          Beauty Platform
        </Link>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <div className="hidden text-right sm:block">
                <p className="text-sm font-medium text-slate-900">{user.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{user.role}</p>
              </div>
              <Button variant="secondary" onClick={handleLogout}>
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="ghost">
                <Link to="/signup">회원가입</Link>
              </Button>
              <Button asChild>
                <Link to="/login">로그인</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
