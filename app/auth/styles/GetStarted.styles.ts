import { Colors } from "@/constants/Colors";
import { FontSize } from "@/constants/FontSize";
import { hp, wp } from "@/utils";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: hp(2),
  },
  image: {
    width: wp(100),
    height: hp(40),
    alignSelf: "center",
    marginTop: hp(9),
    marginBottom: hp(9),
  },
  title: {
    fontSize: FontSize.extraLarge,
    fontWeight: "bold",
    width: wp(80),
    alignSelf: "center",
    textAlign: "center",
  },
  subtitle: {
    fontSize: FontSize.small,
    width: wp(70),
    alignSelf: "center",
    textAlign: "center",
    marginVertical: hp(2),
  },
  button: {
    marginTop: hp(2),
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp(2),
  },
  link: {
    color: Colors.light.greenText,
    fontWeight: "bold",
  },
});
