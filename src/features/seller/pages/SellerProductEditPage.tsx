import { useParams } from 'react-router-dom';
import { PageSection } from '@/components/common/PageSection';
import { ProductEditorForm } from '@/features/seller/shared/ProductEditorForm';

export function SellerProductEditPage() {
  const { productId } = useParams();

  return (
    <PageSection
      title={`상품 수정 #${productId}`}
      description="본인 상품만 수정 가능하도록 가드가 추가될 자리입니다."
    >
      <ProductEditorForm mode="edit" />
    </PageSection>
  );
}
