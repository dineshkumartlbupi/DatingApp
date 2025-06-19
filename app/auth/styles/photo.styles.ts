import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/FontFamily";
import { FontSize } from "@/constants/FontSize";
import { hp, wp } from "@/utils";
import { StyleSheet } from "react-native";

export default (theme: 'light' | 'dark') => StyleSheet.create({
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
    color: Colors[theme].blackText,
  },
  photoContainer: {
    width: wp(80),
    height: wp(80),
    alignSelf: "center",
    marginBottom: hp(3),
  },
  button: {
    marginTop: "auto",
  },
  errorText: {
    color: Colors[theme].redText,
    fontSize: FontSize.extraSmall,
    textAlign: "center",
    marginBottom: hp(1),
  },
}); 