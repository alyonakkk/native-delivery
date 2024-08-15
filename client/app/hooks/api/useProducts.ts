import { getProducts } from '@/config/api';
import { useAppQuery } from '@/config/query';
import { IProduct, IProductsParams, PRODUCT_API_KEY } from '@/types/product';

export const useProducts = (params?: IProductsParams) => {
  return useAppQuery<null, IProduct[]>({
    queryKey: [PRODUCT_API_KEY.list, params],
    queryFn: () => getProducts(params)
  });
};
