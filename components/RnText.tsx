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
  const styles = StyleSheet.create({
    textStyle: {
      color: "black",
      fontSize: 16,
    },
  });

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

export default RnText;
