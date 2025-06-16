import { IconNode, TextProps, ViewProps } from "@rneui/base";
import { ReactNode } from "react";
import {
  KeyboardTypeOptions,
  StatusBarProps,
  StatusBarStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

export interface RnInputProps {
  value: string;
  maxLength?: number;
  onChangeText(e: string): void;
  onChange?(e: any): void;
  onBlur?(e: any): void;
  onFocus?(e: any): void;
  keyboardType?: KeyboardTypeOptions;
  error?: string;
  errorStyle?: TextStyle;
  secureTextEntry?: boolean;
  style?: TextStyle;
  containerStyle?: TextStyle;
  inputContainerStyle?: TextStyle;
  placeholder: string;
  leftIcon?: IconNode;
  rightIcon?: IconNode;
}

export interface RnButtonProps {
  loading?: boolean;
  disabled?: boolean;
  style: any;
  onPress?(): void;
  hitSlop?: {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };
  title: string;
  icon?: string | undefined;
  loaderColor?: string;
  children?: ReactNode;
  noRightIcon?: boolean;
  rightIconColor?: string;
}

export interface RnTextProps extends TextProps {
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  selectable?: boolean;
  children: ReactNode;
}

export interface RnContainerProps {
  topBar?: ReactElement;
  children?: ReactNode;
  customStyle?: ViewStyle;
  props?: ViewProps;
}

export interface RnHeaderProps {
  statusbar?: StatusBarProps;
  barStyle?: StatusBarStyle;
  leftComponent?: ReactElement;
  rightComponent?: ReactElement;
  centerText?: string;
  backgroundColor?: string;
  containerStyle?: ViewStyle;
  centerContainerStyle?: ViewStyle;
  leftContainerStyle?: ViewStyle;
  rightContainerStyle?: ViewStyle;
}

export interface RnModalProps {
  show: boolean;
  backButton(): void;
  backDrop(): void;
  children: ReactNode;
}

export interface RnToastProps {
  type: string;
  message: string;
  heading?: string;
  position?: ToastPosition;
}
