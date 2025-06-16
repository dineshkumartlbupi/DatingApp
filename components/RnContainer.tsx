import { RnContainerProps } from "@/types";
import React from "react";
import { StyleSheet, View } from "react-native";

const Container: React.FC<RnContainerProps> = ({
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
      <View style={[styles.innerContainer, customStyle]}>{children}</View>
    </View>
  );
};

export default Container;
