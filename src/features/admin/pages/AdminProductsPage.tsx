import { PageSection } from '@/components/common/PageSection';
import { ProductStatusBadge } from '@/components/common/ProductStatusBadge';
import { Button } from '@/components/ui/button';

const products = [
  { name: 'Glow Fit Cushion', seller: 'Glow House', stock: 24, status: 'ON_SALE' as const },
  { name: 'Calming Barrier Cream', seller: 'Skin Ritual', stock: 0, status: 'SOLD_OUT' as const },
];

export function AdminProductsPage() {
  return (
    <PageSection
      title="상품 운영"
      description="Admin이 전체 상품을 보고 판매금지 액션을 수행하는 운영 화면의 초기 베이스입니다."
    >
      <div className="space-y-3">
        {products.map((product) => (
          <div key={product.name} className="flex flex-col gap-4 rounded-2xl border p-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <h2 className="font-semibold text-slate-900">{product.name}</h2>
              <p className="text-sm text-slate-600">
                판매자: {product.seller} · 재고: {product.stock}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <ProductStatusBadge status={product.status} />
              <Button variant="danger">판매금지</Button>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
