import { Colors } from "@/constants/Colors";
import { FontSize } from "@/constants/FontSize";
import { RnHeaderProps } from "@/types";
import { wp } from "@/utils";
import { Header } from "@rneui/base";
import React from "react";
import { StyleSheet } from "react-native";
import RnText from "./RnText";

const RnHeader: React.FC<RnHeaderProps> = ({
  statusbar,
  barStyle,
  centerComponent,
  leftComponent,
  rightComponent,
  centerText,
  backgroundColor,
  containerStyle,
  centerContainerStyle,
  leftContainerStyle,
  rightContainerStyle,
}) => {
  return (
    <Header
      statusBarProps={statusbar ?? styles.statusbar}
      barStyle={barStyle ?? "light-content"}
      leftComponent={leftComponent}
      centerComponent={
        centerText ? (
          <RnText style={styles.centerTextStyle}>{centerText}</RnText>
        ) : (
          centerComponent
        )
      }
      rightComponent={rightComponent}
      backgroundColor={backgroundColor ?? styles.statusbar.backgroundColor}
      containerStyle={containerStyle}
      centerContainerStyle={centerContainerStyle}
      leftContainerStyle={[styles.sideContainerStyle, leftContainerStyle]}
      rightContainerStyle={[styles.sideContainerStyle, rightContainerStyle]}
    />
  );
};

const styles = StyleSheet.create({
  statusbar: {
    backgroundColor: Colors.light.background,
  },
  sideContainerStyle: {
    marginHorizontal: wp(4),
    justifyContent: "center",
  },
  centerTextStyle: {
    color: Colors.light.blackText,
    fontSize: FontSize.large,
  },
});

export default RnHeader;
