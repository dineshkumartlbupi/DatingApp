import { Borders } from "@/constants/Borders";
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
  genderContainer: {
    alignSelf: "center",
  },
  genderOption: {
    alignItems: "center",
    padding: hp(2),
    marginBottom: hp(2),
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    width: wp(25),
    height: wp(25),
    borderRadius: Borders.circle,
  },
  genderOptionSelected: {
    backgroundColor: Colors.light.primary,
  },
  genderIcon: {
    marginBottom: hp(1),
    justifyContent: "center",
    alignItems: "center",
  },
  genderText: {
    fontSize: FontSize.small,
    fontFamily: FontFamily.medium,
  },
  genderTextSelected: {
    color: "#FFFFFF",
  },
  errorText: {
    color: Colors.light.redText,
    fontSize: FontSize.small,
    textAlign: "center",
    marginBottom: hp(1),
  },
}); 