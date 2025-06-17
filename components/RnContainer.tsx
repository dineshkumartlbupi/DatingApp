import { RnContainerProps } from "@/types";
import { wp } from "@/utils";
import React from "react";
import { StyleSheet, View } from "react-native";

const Container: React.FC<RnContainerProps> = ({
  topBar,
  children,
  customStyle,
  props,
}) => {
  return (
    <View style={styles.mainContainer} {...props}>
      {topBar && topBar}
      <View style={[styles.innerContainer, customStyle]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  innerContainer: {
    flexGrow: 1,
    paddingHorizontal: wp(4),
  },
});

export default Container;
