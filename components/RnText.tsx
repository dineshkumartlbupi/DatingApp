import { Colors } from "@/constants/Colors";
import { fontsSize } from "@/constants/FontsSize";
import { RnTextProps } from "@/types";
import React from "react";
import { StyleSheet, Text } from "react-native";

const RnText: React.FC<RnTextProps> = ({
  onPress,
  style,
  numberOfLines,
  selectable,
  children,
}) => {
  return (
    <Text
      onPress={onPress}
      style={[styles.textStyle, style]}
      numberOfLines={numberOfLines ?? 0}
      allowFontScaling={false}
      selectable={selectable ?? false}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.light.primaryText,
    fontSize: fontsSize.regular,
  },
});

export default RnText;
