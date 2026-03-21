import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { FormFieldError } from '@/components/common/FormFieldError';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type ProductEditorFormProps = {
  mode: 'create' | 'edit';
};

type ProductEditorFormValues = {
  name: string;
  price: string;
  stock: number;
  category: string;
};

export function ProductEditorForm({ mode }: ProductEditorFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductEditorFormValues>({
    defaultValues: {
      name: '',
      price: '',
      stock: 0,
      category: '',
    },
  });

  const onSubmit: SubmitHandler<ProductEditorFormValues> = () => undefined;

  return (
    <form className="grid gap-4 lg:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="lg:col-span-2">
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
          상품명
        </label>
        <Input id="name" {...register('name', { required: '상품명을 입력하세요.' })} />
        <FormFieldError message={errors.name?.message} />
      </div>

      <div>
        <label htmlFor="price" className="mb-2 block text-sm font-medium text-slate-700">
          가격
        </label>
        <Input id="price" {...register('price', { required: '가격을 입력하세요.' })} />
        <FormFieldError message={errors.price?.message} />
      </div>

      <div>
        <label htmlFor="stock" className="mb-2 block text-sm font-medium text-slate-700">
          재고
        </label>
        <Input id="stock" type="number" min={0} {...register('stock', { valueAsNumber: true })} />
      </div>

      <div className="lg:col-span-2">
        <label htmlFor="category" className="mb-2 block text-sm font-medium text-slate-700">
          카테고리
        </label>
        <Input id="category" placeholder="스킨케어" {...register('category', { required: '카테고리를 입력하세요.' })} />
        <FormFieldError message={errors.category?.message} />
      </div>

      <div className="lg:col-span-2 rounded-2xl border bg-slate-50 p-4 text-sm text-slate-600">
        이미지 업로드/정렬은 FM3에서 dnd-kit 및 업로드 API와 연결할 예정입니다.
      </div>

      <div className="lg:col-span-2 flex justify-end">
        <Button type="submit">{mode === 'create' ? '상품 등록' : '변경사항 저장'}</Button>
      </div>
    </form>
  );
}
