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
  title: {
    fontSize: FontSize.extraLarge,
    fontWeight: "bold",
    width: wp(60),
    alignSelf: "center",
    marginTop: hp(20),
    marginBottom: hp(3),
    textAlign: "center",
  },
  button: {
    marginTop: hp(2),
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: hp(2),
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  orText: {
    marginHorizontal: wp(2),
    fontSize: FontSize.large,
    fontWeight: "bold",
  },
  socialContainer: {
    flexDirection: "row",
    alignSelf: "center",
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
