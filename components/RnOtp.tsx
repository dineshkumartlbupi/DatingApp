import { Borders } from "@/constants/Borders";
import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/FontFamily";
import { FontSize } from "@/constants/FontSize";
import { RnOtpProps } from "@/types";
import { hp } from "@/utils/Dimensions";
import React, { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
} from "react-native-confirmation-code-field";
import RnText from "./RnText";

const RnOtp = ({ verifyCode, isError, cell, style, value }: RnOtpProps) => {
  const ref = useBlurOnFulfill({ value, cellCount: cell ?? 4 });

  const styles = StyleSheet.create({
    root: {
      justifyContent: "center",
    },
    cell: {
      width: hp(7),
      height: hp(7),
      fontSize: FontSize.large,
      fontFamily: FontFamily.semiBold,
      color: Colors.light.blackText,
      borderWidth: 1,
      borderColor: isError ? Colors.light.redText : Colors.light.blackText,
      textAlign: "center",
      textAlignVertical: "center",
      borderRadius: Borders.radius4,
    },
    focusCell: {
      borderColor: isError ? Colors.light.redText : Colors.light.primary,
      borderWidth: 2,
      lineHeight: hp(6),
    },
  });

  return (
    <View style={[styles.root, style]}>
      <CodeField
        ref={ref}
        value={value}
        onChangeText={(input) => {
          verifyCode(input);
        }}
        keyboardType="number-pad"
        submitBehavior="blurAndSubmit"
        cellCount={cell ?? 4}
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Fragment key={index}>
            <RnText
              key={`value-${index}`}
              style={[styles.cell, isFocused && styles.focusCell]}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </RnText>
          </Fragment>
        )}
      />
    </View>
  );
};

export default RnOtp;
