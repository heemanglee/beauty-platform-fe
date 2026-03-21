import type { UserRole } from '@/types/domain';

export const DEFAULT_ROUTE_BY_ROLE: Record<UserRole, string> = {
  ADMIN: '/admin/sellers',
  SELLER: '/seller/products',
  BUYER: '/products',
};

export function getDefaultPathForRole(role: UserRole) {
  return DEFAULT_ROUTE_BY_ROLE[role];
}

export function canAccessRole(role: UserRole, allowedRoles: UserRole[]) {
  return allowedRoles.includes(role);
}
