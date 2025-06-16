import { RnContainerProps } from "@/types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ScrollContainer: React.FC<RnContainerProps> = ({
  topBar,
  children,
  customStyle,
  props,
}) => {
  const styles = StyleSheet.create({
    mainContainer: {
      flexGrow: 1,
      backgroundColor: "white",
    },
    innerContainer: {
      flexGrow: 1,
      paddingHorizontal: 16,
    },
  });
  return (
    <View style={styles.mainContainer} {...props}>
      {topBar && topBar}
      <KeyboardAwareScrollView
        contentContainerStyle={[styles.innerContainer, customStyle]}
        keyboardShouldPersistTaps="always"
      >
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ScrollContainer;
