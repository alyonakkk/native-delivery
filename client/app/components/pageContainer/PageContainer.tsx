import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { ScrollView } from 'react-native';

import { Header } from '@/components/header';
import { useAuth } from '@/hooks/useAuth';

interface IPageContainerProps extends PropsWithChildren {
  title?: string;
  productId?: number;
}

export const PageContainer: FC<IPageContainerProps> = ({ children, ...props }) => {
  const scrollRef = useRef(null);
  const { user } = useAuth();

  useEffect(() => {
    if (scrollRef.current) return;

    scrollRef.current?.scrollTo({
      y: 0,
      animated: true
    });
  }, [scrollRef.current]);

  return (
    <>
      {user && <Header {...props} />}
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 20,
          paddingTop: 40,
          height: 'auto',
          minHeight: '100%'
        }}
      >
        {children}
      </ScrollView>
    </>
  );
};
