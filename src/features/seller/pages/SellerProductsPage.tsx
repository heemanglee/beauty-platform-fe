import { Link } from 'react-router-dom';
import { PageSection } from '@/components/common/PageSection';
import { ProductStatusBadge } from '@/components/common/ProductStatusBadge';
import { Button } from '@/components/ui/button';

const products = [
  { id: '1', name: 'Glow Fit Cushion', stock: 24, status: 'PENDING' as const },
  { id: '2', name: 'Calming Barrier Cream', stock: 0, status: 'SOLD_OUT' as const },
];

export function SellerProductsPage() {
  return (
    <PageSection
      title="내 상품 관리"
      description="Seller 전용 상품 목록, 상태 관리, 수정 진입점입니다."
    >
      <div className="mb-4 flex justify-end">
        <Button asChild>
          <Link to="/seller/products/new">신규 상품 등록</Link>
        </Button>
      </div>

      <div className="space-y-3">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col gap-4 rounded-2xl border p-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-semibold text-slate-900">{product.name}</h2>
              <p className="text-sm text-slate-600">재고 {product.stock}개</p>
            </div>
            <div className="flex items-center gap-3">
              <ProductStatusBadge status={product.status} />
              <Button asChild variant="secondary">
                <Link to={`/seller/products/${product.id}/edit`}>수정</Link>
              </Button>
              {product.status === 'PENDING' ? <Button>판매 시작</Button> : null}
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
