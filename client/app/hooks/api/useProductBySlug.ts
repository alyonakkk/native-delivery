import { getProductBySlug } from '@/config/api';
import { ROUTES } from '@/config/navigation/types';
import { useAppRoute } from '@/config/navigation/useAppRoute';
import { useAppQuery } from '@/config/query';
import { IProduct, PRODUCT_API_KEY } from '@/types/product';

export const useProductBySlug = () => {
  const {
    params: { slug }
  } = useAppRoute<ROUTES.product>();

  return useAppQuery<null, IProduct>({
    queryKey: [PRODUCT_API_KEY.slug, slug],
    queryFn: () => getProductBySlug(slug),
    enabled: !!slug
  });
};
