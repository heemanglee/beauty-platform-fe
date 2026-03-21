import { useParams } from 'react-router-dom';
import { AlertMessage } from '@/components/common/AlertMessage';
import { PageSection } from '@/components/common/PageSection';
import { ProductStatusBadge } from '@/components/common/ProductStatusBadge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAuthStore } from '@/store/auth-store';

export function ProductDetailPage() {
  const { productId } = useParams();
  const role = useAuthStore((state) => state.user?.role);

  return (
    <PageSection
      title={`상품 상세 #${productId}`}
      description="대표 이미지 캐러셀, 설명 이미지 스택, 구매 영역이 함께 배치되는 상세 화면의 베이스입니다."
    >
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="space-y-4 p-5">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-pink-100 via-white to-violet-100" />
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="aspect-square rounded-2xl bg-slate-100" />
            ))}
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">Calming Barrier Cream</h2>
            <ProductStatusBadge status="ON_SALE" />
            <p className="text-sm leading-6 text-slate-600">
              설명 이미지는 FM4에서, 즉시구매 섹션은 FM5에서 백엔드 API와 함께 연결합니다.
            </p>
          </div>
        </Card>

        <Card className="space-y-4">
          <div>
            <p className="text-sm text-slate-500">구매 영역</p>
            <h3 className="text-xl font-semibold text-slate-900">₩21,000</h3>
          </div>

          {!role ? (
            <AlertMessage variant="warning">로그인 후 구매할 수 있습니다.</AlertMessage>
          ) : role === 'BUYER' ? (
            <>
              <div className="space-y-2 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                <p>수량 입력, 총 금액 계산, 구매 확인 모달은 FM5 구현 범위입니다.</p>
                <p>현재는 라우팅/권한/레이아웃 검증용 UI를 제공합니다.</p>
              </div>
              <Button className="w-full">구매하기</Button>
            </>
          ) : (
            <AlertMessage variant="warning">Seller/Admin 역할은 구매 권한이 없습니다.</AlertMessage>
          )}
        </Card>
      </div>
    </PageSection>
  );
}
