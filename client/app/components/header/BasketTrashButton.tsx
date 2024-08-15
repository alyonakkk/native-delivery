import { FC } from 'react';
import { Pressable } from 'react-native';

import { useBasket } from '@/hooks/api/useBasket';
import { useResetBasket } from '@/hooks/api/useResetBasket';
import { Icon } from '@/ui/icon';

export const BasketTrashButton: FC = () => {
  const { data } = useBasket();
  const { mutate } = useResetBasket();
  const isEmptyBasket = !data?.products?.length;

  return (
    <Pressable disabled={isEmptyBasket} onPress={() => mutate(data.id)}>
      <Icon name={'delete'} size={24} className={isEmptyBasket ? 'text-gray-500' : 'text-red-500'} />
    </Pressable>
  );
};
