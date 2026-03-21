import { Link } from 'react-router-dom';
import { EmptyState } from '@/components/common/EmptyState';
import { PageSection } from '@/components/common/PageSection';
import { ProductStatusBadge } from '@/components/common/ProductStatusBadge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const mockProducts = [
  { id: '1', name: 'Glow Fit Cushion', price: '₩29,000', status: 'ON_SALE' as const, category: '베이스' },
  { id: '2', name: 'Calming Barrier Cream', price: '₩21,000', status: 'SOLD_OUT' as const, category: '스킨케어' },
];

export function ProductsPage() {
  return (
    <PageSection
      title="상품 탐색"
      description="비로그인과 Buyer가 함께 접근하는 공개 카탈로그 영역입니다. FM4부터 실제 API 기반 목록/필터링으로 확장합니다."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {['전체', '스킨케어', '메이크업', '베이스'].map((category) => (
          <Button key={category} variant={category === '전체' ? 'primary' : 'secondary'} size="sm">
            {category}
          </Button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {mockProducts.map((product) => (
          <Card key={product.id} className="space-y-4 p-4">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-pink-100 to-violet-100" />
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs text-slate-500">{product.category}</p>
                <h2 className="font-semibold text-slate-900">{product.name}</h2>
                <p className="mt-1 text-sm text-slate-600">{product.price}</p>
              </div>
              <ProductStatusBadge status={product.status} />
            </div>
            <Button asChild className="w-full">
              <Link to={`/products/${product.id}`}>상세 보기</Link>
            </Button>
          </Card>
        ))}
      </div>

      <div className="mt-6">
        <EmptyState
          title="페이지네이션/실데이터는 다음 단계"
          description="TanStack Query와 API client는 준비되어 있으며, FM4에서 공개 목록/필터 API를 연결하면 됩니다."
        />
      </div>
    </PageSection>
  );
}
