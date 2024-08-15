import { AntDesign } from '@expo/vector-icons';
import { memo } from 'react';
import { StyleProp, TextStyle } from 'react-native';

export type TIcons = keyof typeof AntDesign.glyphMap;

export interface IIconProps {
  name: TIcons;
  size?: number;
  className?: string;
  style?: StyleProp<TextStyle>;
}

export const Icon = memo(({ name, className, style, size }: IIconProps) => {
  return <AntDesign size={size} style={style} name={name} className={className} />;
});
