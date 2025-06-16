import { RnInputProps } from "@/types";
import { Input } from "@rneui/themed";
import React from "react";
import { StyleSheet } from "react-native";
import RnText from "./RnText";

const RnInput: React.FC<RnInputProps> = ({
  value,
  maxLength,
  onChangeText,
  onChange,
  onBlur,
  onFocus,
  keyboardType,
  error,
  errorStyle,
  secureTextEntry,
  style,
  containerStyle,
  inputContainerStyle,
  placeholder,
  leftIcon,
  rightIcon,
}) => {
  function errorMessage() {
    return <RnText style={[styles.errorText, errorStyle]}>{error}</RnText>;
  }

  return (
    <Input
      maxLength={maxLength}
      onChangeText={onChangeText}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      ErrorComponent={errorMessage}
      renderErrorMessage={Boolean(error)}
      allowFontScaling={false}
      style={[styles.style, style]}
      containerStyle={(styles.containerStyle, containerStyle)}
      inputContainerStyle={[styles.inputContainerStyle, inputContainerStyle]}
      placeholder={placeholder}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    />
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 2,
  },
  style: {},
  containerStyle: {},
  inputContainerStyle: {
    borderBottomWidth: 1.5,
    borderWidth: 1.5,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 6.5,
  },
});

export default RnInput;
