import React, { FC, ReactNode } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "tamagui";

interface ContainerProps {
  children: ReactNode;
  noPadding?: boolean;
  bottomInset?: boolean;
}

const Container: FC<ContainerProps> = ({ children, noPadding, bottomInset = true }) => {
  const insets = useSafeAreaInsets();

  return (
    <View bg="$background" flex={1} paddingTop={insets.top} paddingBottom={bottomInset ? insets.bottom : 0} paddingHorizontal={noPadding ? 0 : 10}>
      {children}
    </View>
  );
};

export default Container;
