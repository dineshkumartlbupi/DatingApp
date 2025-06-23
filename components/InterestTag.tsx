import { Colors } from "@/constants/Colors";
import { FontSize } from "@/constants/FontSize";
import { hp, wp } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import RnText from "./RnText";

interface InterestTagProps {
  title: string;
  icon?: keyof typeof Ionicons.glyphMap;
  isSelected?: boolean;
  onPress?: () => void;
}

const InterestTag: React.FC<InterestTagProps> = ({
  title,
  icon,
  isSelected = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.tag, isSelected && styles.selectedTag]}
      onPress={onPress}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={16}
          color={isSelected ? Colors.light.background : Colors.light.redText}
          style={styles.icon}
        />
      )}
      <RnText style={[styles.text, isSelected && styles.selectedText]}>
        {title}
      </RnText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tag: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    borderRadius: wp(5),
    borderWidth: 1,
    borderColor: Colors.light.greenText,
    marginRight: wp(2),
    marginBottom: hp(1),
  },
  selectedTag: {
    backgroundColor: Colors.light.redText,
  },
  icon: {
    marginRight: wp(1),
  },
  text: {
    fontSize: FontSize.regular,
    color: Colors.light.redText,
    fontWeight: "600",
  },
  selectedText: {
    color: Colors.light.background,
  },
});
export default InterestTag;
