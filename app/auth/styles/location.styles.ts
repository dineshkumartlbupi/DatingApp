import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/FontFamily";
import { FontSize } from "@/constants/FontSize";
import { hp, wp } from "@/utils";
import { StyleSheet } from "react-native";

export default (theme: 'light' | 'dark') => StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: hp(2),
  },
  title: {
    fontSize: FontSize.extraLarge,
    fontFamily: FontFamily.bold,
    alignSelf: "center",
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
  locationIcon: {
    alignSelf: "center",
    // marginTop: hp(10),
    marginBottom: hp(2),
  },
  button: {
    marginVertical: hp(2),
  },
  manualButton: {
    backgroundColor: "transparent",
    marginBottom: hp(4),
    shadowColor: "transparent",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  manualButtonText: {
    color: Colors[theme].primary,
    fontSize: FontSize.small,
    fontFamily: FontFamily.medium,
  },
  errorText: {
    color: Colors[theme].redText,
    fontSize: FontSize.extraSmall,
    textAlign: "center",
    marginBottom: hp(1),
  },
}); 