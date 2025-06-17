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
    fontWeight: "bold",
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
});
