import { ConfirmDialog } from '@/components/common/ConfirmDialog';
import { PageSection } from '@/components/common/PageSection';
import { Button } from '@/components/ui/button';

const categories = [
  { name: '스킨케어', products: 12, editable: false },
  { name: '메이크업', products: 0, editable: true },
];

export function AdminCategoriesPage() {
  return (
    <PageSection
      title="카테고리 관리"
      description="연결 상품 수에 따라 수정/삭제 가능 여부를 제어하는 FM2 화면의 베이스입니다."
    >
      <div className="space-y-3">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col justify-between gap-4 rounded-2xl border p-4 md:flex-row md:items-center">
            <div>
              <h2 className="font-semibold text-slate-900">{category.name}</h2>
              <p className="text-sm text-slate-600">연결 상품 수: {category.products}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" disabled={!category.editable}>
                수정
              </Button>
              <ConfirmDialog
                title="카테고리를 삭제할까요?"
                description={category.editable ? '삭제 후 되돌릴 수 없습니다.' : '상품이 연결된 카테고리는 삭제할 수 없습니다.'}
                trigger={
                  <Button variant="danger" disabled={!category.editable}>
                    삭제
                  </Button>
                }
                onConfirm={() => undefined}
              />
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
