import classNames from 'classnames';
import { memo } from 'react';
import { Image as ImageNative, ImageProps } from 'react-native';

import PlugImage from '@/assets/images/plug.png';

export interface IImageProps extends ImageProps {
  className?: string;
  objectFit?: 'cover' | 'contain';
}

export const Image = memo(({ source, objectFit = 'contain', className, ...props }: IImageProps) => {
  if (!source)
    return <ImageNative resizeMode={objectFit} source={PlugImage} className={'m-auto w-[60px] h-[60px]'} {...props} />;

  return <ImageNative source={source} resizeMode={objectFit} className={classNames('', className)} {...props} />;
});
