import { getCategories } from '@/config/api';
import { useAppQuery } from '@/config/query';
import { CATEGORY_API_KEY, ICategory } from '@/types/category';

export const useCategories = () => {
  return useAppQuery<null, ICategory[]>({
    queryKey: [CATEGORY_API_KEY.list],
    queryFn: getCategories
  });
};
