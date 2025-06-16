import { borders } from "@/constants/Borders";
import { fontsSize } from "@/constants/FontsSize";
import { hp } from "@/utils";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontSize: fontsSize.large,
    fontWeight: "bold",
    marginBottom: hp(3),
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: hp(3),
    borderRadius: borders.radius1,
    alignItems: "center",
    marginTop: hp(2),
  },
  buttonText: {
    color: "#fff",
    fontSize: fontsSize.regular,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp(2),
  },
  link: {
    color: "#007AFF",
    fontWeight: "bold",
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  linkDisabled: {
    opacity: 0.7,
  },
});
