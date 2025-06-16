import { RnHeaderProps } from "@/types";
import { Header } from "@rneui/base";
import React from "react";
import { StyleSheet } from "react-native";
import RnText from "./RnText";

const RnHeader: React.FC<RnHeaderProps> = ({
  statusbar,
  barStyle,
  leftComponent,
  rightComponent,
  centerText,
  backgroundColor,
  containerStyle,
  centerContainerStyle,
  leftContainerStyle,
  rightContainerStyle,
}) => {
  const styles = StyleSheet.create({
    statusbar: {
      backgroundColor: "#6432ff",
    },
    sideContainerStyle: {
      marginHorizontal: 16,
      justifyContent: "center",
    },
    centerTextStyle: {
      color: "white",
      fontSize: 24,
    },
  });
  return (
    <Header
      statusBarProps={statusbar ?? styles.statusbar}
      barStyle={barStyle ?? "light-content"}
      leftComponent={leftComponent}
      centerComponent={
        <RnText style={styles.centerTextStyle}>{centerText}</RnText>
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

export default RnHeader;
