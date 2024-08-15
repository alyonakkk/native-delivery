import { FC } from 'react';
import Toast, { BaseToast } from 'react-native-toast-message';

const options = (primary: string) => ({
  style: { backgroundColor: '#fff', borderLeftColor: primary },
  text1Style: { color: '#000', fontSize: 16 },
  text2Style: { fontSize: 14 }
});

export const NotificationProvider: FC = () => {
  return (
    <Toast
      topOffset={40}
      config={{
        success: (props) => <BaseToast {...props} {...options('#67e769')} />,
        info: (props) => <BaseToast {...props} {...options('#65d4ff')} />,
        error: (props) => <BaseToast {...props} {...options('#ff4949')} />
      }}
    />
  );
};
