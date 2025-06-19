import { Borders } from "@/constants/Borders";
import { Colors } from "@/constants/Colors";
import { RnProgressBarProps } from "@/types";
import { hp, wp } from "@/utils/Dimensions";
import React from "react";
import { StyleSheet } from "react-native";
import { Bar } from "react-native-progress";

const RnProgressBar: React.FC<RnProgressBarProps> = ({
  progress,
  height,
  width,
  style,
}) => {
  const styles = StyleSheet.create({
    progressBar: {
      alignSelf: "center",
      marginTop: hp(2),
    },
  });

  return (
    <Bar
      progress={progress}
      color={Colors.light.primary}
      unfilledColor={Colors.light.track}
      borderColor={Colors.light.track}
      borderRadius={Borders.radius1}
      height={height ?? hp(1)}
      width={width ?? wp(80)}
      style={[styles.progressBar, style]}
    />
  );
};

export default RnProgressBar;
