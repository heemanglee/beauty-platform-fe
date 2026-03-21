import { PageSection } from '@/components/common/PageSection';
import { ProductEditorForm } from '@/features/seller/shared/ProductEditorForm';

export function SellerProductCreatePage() {
  return (
    <PageSection
      title="신규 상품 등록"
      description="FM3 상품 생성과 이미지 관리의 베이스 폼입니다."
    >
      <ProductEditorForm mode="create" />
    </PageSection>
  );
}
