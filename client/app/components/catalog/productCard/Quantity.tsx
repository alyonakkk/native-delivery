import { FC } from 'react';
import { Text, View } from 'react-native';

interface IQuantityProps {
  quantity?: number;
}

export const Quantity: FC<IQuantityProps> = ({ quantity }) => {
  if (!quantity) return null;

  return (
    <View className={'absolute z-[2] w-full h-full justify-center items-center'}>
      <View className={'absolute w-full h-full bg-black opacity-40'} />
      <Text className={'relative z-[3] text-5xl text-white font-bold'}>{quantity}</Text>
    </View>
  );
};
