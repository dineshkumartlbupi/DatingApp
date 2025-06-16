import { RnButtonProps } from "@/types";
import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Text from "./RnText";

const RnButton: React.FC<RnButtonProps> = ({
  loading,
  disabled,
  style,
  onPress,
  hitSlop,
  title,
  loaderColor,
  children,
  icon,
  noRightIcon,
  rightIconColor,
}) => {
  const styles = StyleSheet.create({
    whiteColor: {
      color: "white",
    },
    buttonContainer: {
      height: 6.5,
      width: 92,
      backgroundColor: "#6432ff",
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    iconContainer: {
      alignItems: "flex-start",
      paddingHorizontal: 16,
    },
    disabledButton: {
      backgroundColor: "gray",
    },
    buttonText: {
      color: "white",
      fontSize: 16,
    },
    iconText: {
      flex: 1,
    },
    icon: {
      fontSize: 20,
      color: "white",
      marginRight: 24,
      marginLeft: 24,
    },
    rowView: {
      flexDirection: "row",
      alignItems: "center",
    },
  });

  return (
    <>
      {!loading ? (
        !disabled ? (
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              style[0],
              icon && styles.iconContainer,
            ]}
            onPress={onPress}
            hitSlop={hitSlop}
          >
            <View style={styles.rowView}>
              {icon ? (
                <>
                  <FontAwesome6
                    name={icon}
                    color={styles.icon.color}
                    size={styles.icon.fontSize}
                    style={{ marginRight: styles.icon.marginRight }}
                  />
                  <Text
                    style={[
                      styles.buttonText,
                      style[1],
                      icon && styles.iconText,
                    ]}
                  >
                    {title}
                  </Text>
                  {!noRightIcon && (
                    <FontAwesome6
                      solid
                      name="caret-right"
                      size={styles.icon.fontSize}
                      color={rightIconColor ?? styles.icon.color}
                      style={{ marginLeft: styles.icon.marginLeft }}
                    />
                  )}
                </>
              ) : (
                <Text style={[styles.buttonText, style[1]]}>{title}</Text>
              )}
            </View>
            {children && children}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            disabled
            style={[
              styles.buttonContainer,
              style[0],
              styles.disabledButton,
              icon && styles.iconContainer,
            ]}
          >
            <View style={styles.rowView}>
              {icon ? (
                <>
                  <FontAwesome6
                    name={icon}
                    color={styles.icon.color}
                    size={styles.icon.fontSize}
                    style={{ marginRight: styles.icon.marginRight }}
                  />
                  <Text
                    style={[
                      styles.buttonText,
                      style[1],
                      icon && styles.iconText,
                    ]}
                  >
                    {title}
                  </Text>
                  {!noRightIcon && (
                    <FontAwesome6
                      solid
                      name="caret-right"
                      size={styles.icon.fontSize}
                      color={styles.icon.color}
                      style={{ marginLeft: styles.icon.marginLeft }}
                    />
                  )}
                </>
              ) : (
                <Text style={[styles.buttonText, style[1]]}>{title}</Text>
              )}
            </View>
            {children && children}
          </TouchableOpacity>
        )
      ) : (
        <TouchableOpacity
          disabled
          style={[styles.buttonContainer, style[0]]}
          onPress={onPress}
        >
          <ActivityIndicator color={loaderColor || styles.whiteColor.color} />
        </TouchableOpacity>
      )}
    </>
  );
};

export default RnButton;
