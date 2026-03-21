import { Package, ShieldCheck, ShoppingBag, Store, UserRoundCog } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/store/auth-store';

type NavItem = {
  label: string;
  to: string;
  icon: typeof ShoppingBag;
};

const guestItems: NavItem[] = [{ label: '상품 목록', to: '/products', icon: ShoppingBag }];
const buyerItems: NavItem[] = [
  { label: '상품 목록', to: '/products', icon: ShoppingBag },
  { label: '주문 내역', to: '/orders', icon: Package },
];
const sellerItems: NavItem[] = [
  { label: '상품 관리', to: '/seller/products', icon: Store },
  { label: '신규 상품', to: '/seller/products/new', icon: ShoppingBag },
];
const adminItems: NavItem[] = [
  { label: '판매자 관리', to: '/admin/sellers', icon: UserRoundCog },
  { label: '카테고리 관리', to: '/admin/categories', icon: ShieldCheck },
  { label: '상품 운영', to: '/admin/products', icon: Package },
];

export function Navigation() {
  const role = useAuthStore((state) => state.user?.role);

  const items =
    role === 'BUYER' ? buyerItems : role === 'SELLER' ? sellerItems : role === 'ADMIN' ? adminItems : guestItems;

  return (
    <aside className="w-full shrink-0 lg:w-72">
      <nav className="rounded-3xl border bg-white p-3 shadow-soft">
        <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Navigation</p>
        <ul className="space-y-1">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition',
                      isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    )
                  }
                >
                  <Icon className="size-4" />
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
