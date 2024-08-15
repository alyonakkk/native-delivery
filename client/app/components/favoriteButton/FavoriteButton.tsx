import { FC } from 'react';
import { Pressable } from 'react-native';

import { useToggleFavorite } from '@/components/favoriteButton/useToggleFavorite';
import { Icon } from '@/ui/icon';

interface IFavoriteButtonProps {
  productId: number;
  size?: number;
}

export const FavoriteButton: FC<IFavoriteButtonProps> = ({ productId, size = 24 }) => {
  const { isActive, handleToggle } = useToggleFavorite(productId);

  return (
    <Pressable onPress={handleToggle}>
      <Icon size={size} className={isActive ? 'text-red-500' : 'text-gray-500'} name={isActive ? 'heart' : 'hearto'} />
    </Pressable>
  );
};
