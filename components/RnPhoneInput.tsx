import { borders } from "@/constants/Borders";
import { RnPhoneInputProps } from "@/types";
import { hp, wp } from "@/utils";
import React, { forwardRef } from "react";
import { StyleSheet } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import RnText from "./RnText";

const RnPhoneInput = forwardRef<any, RnPhoneInputProps>(
  ({ value, onChangeText, error, errorStyle }, ref) => {
    return (
      <>
        <PhoneInput
          ref={ref}
          defaultValue={value}
          defaultCode="GB"
          layout="second"
          onChangeText={onChangeText}
          onChangeFormattedText={onChangeText}
          containerStyle={styles.container}
          textContainerStyle={styles.textInput}
          flagButtonStyle={styles.flagButtonStyle}
        />
        <RnText style={[styles.errorText, errorStyle]}>{error}</RnText>
      </>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1.5,
    borderWidth: 1.5,
    borderColor: "#ddd",
    borderRadius: borders.radius1,
    height: hp(6.5),
    width: wp(92),
  },
  flagButtonStyle: {
    width: wp(20),
  },
  textInput: {
    borderRadius: borders.radius1,
    paddingVertical: 0,
  },
  errorText: {
    color: "red",
    marginLeft: wp(1),
  },
});

RnPhoneInput.displayName = "RnPhoneInput";

export default RnPhoneInput;
