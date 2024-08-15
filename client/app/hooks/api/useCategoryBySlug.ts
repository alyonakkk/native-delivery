import { getCategoryBySlug } from '@/config/api';
import { ROUTES } from '@/config/navigation/types';
import { useAppRoute } from '@/config/navigation/useAppRoute';
import { useAppQuery } from '@/config/query';
import { CATEGORY_API_KEY, ICategory } from '@/types/category';

export const useCategoryBySlug = () => {
  const {
    params: { slug }
  } = useAppRoute<ROUTES.category>();

  return useAppQuery<null, ICategory>({
    queryKey: [CATEGORY_API_KEY.slug, slug],
    queryFn: () => getCategoryBySlug(slug),
    enabled: !!slug
  });
};
