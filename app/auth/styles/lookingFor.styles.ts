import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/FontFamily";
import { FontSize } from "@/constants/FontSize";
import { hp, wp } from "@/utils";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: "flex-start",
    marginBottom: hp(2),
  },
  title: {
    fontSize: FontSize.extraLarge,
    fontFamily: FontFamily.bold,
    width: wp(80),
    alignSelf: "center",
    marginTop: hp(10),
    marginBottom: hp(1),
    textAlign: "center",
  },
  subtitle: {
    fontSize: FontSize.small,
    width: wp(80),
    alignSelf: "center",
    textAlign: "center",
    marginBottom: hp(3),
  },
  button: {
    marginTop: hp(2),
  },
  optionsContainer: {
    width: wp(80),
    alignSelf: "center",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: hp(2),
    marginBottom: hp(2),
    borderRadius: hp(4),
    backgroundColor: "#F5F5F5",
  },
  optionSelected: {
    backgroundColor: Colors.light.primary,
  },
  optionText: {
    fontSize: FontSize.small,
    fontFamily: FontFamily.medium,
    marginLeft: wp(4),
  },
  optionTextSelected: {
    color: "#FFFFFF",
  },
  errorText: {
    color: Colors.light.redText,
    fontSize: FontSize.small,
    textAlign: "center",
    marginBottom: hp(1),
  },
}); 