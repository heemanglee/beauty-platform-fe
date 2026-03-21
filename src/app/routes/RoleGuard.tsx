import type { UserRole } from '@/types/domain';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/store/auth-store';

type RoleGuardProps = {
  allowedRoles: UserRole[];
};

export function RoleGuard({ allowedRoles }: RoleGuardProps) {
  const role = useAuthStore((state) => state.user?.role);

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}
