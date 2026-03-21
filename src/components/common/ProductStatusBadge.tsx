import { Badge } from '@/components/ui/badge';
import type { ProductStatus } from '@/types/domain';

type ProductStatusBadgeProps = {
  status: ProductStatus;
};

const statusLabelMap: Record<ProductStatus, string> = {
  PENDING: '판매 대기',
  ON_SALE: '판매중',
  SOLD_OUT: '품절',
  BANNED: '판매금지',
};

const statusVariantMap: Record<ProductStatus, 'warning' | 'success' | 'neutral' | 'danger'> = {
  PENDING: 'warning',
  ON_SALE: 'success',
  SOLD_OUT: 'neutral',
  BANNED: 'danger',
};

export function ProductStatusBadge({ status }: ProductStatusBadgeProps) {
  return <Badge variant={statusVariantMap[status]}>{statusLabelMap[status]}</Badge>;
}
