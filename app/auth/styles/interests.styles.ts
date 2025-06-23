import { Borders } from "@/constants/Borders";
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
  },
  searchContainer: {
    width: wp(80),
    alignSelf: "center",
    marginBottom: hp(3),
    borderWidth: 1,
      borderRadius: Borders.radius1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
  searchInput: {
    flex: 1,
    fontSize: FontSize.small,
    fontFamily: FontFamily.regular,
    color: Colors[theme].blackText,
  },
  searchIcon: {
    width: wp(5),
    height: wp(5),
    tintColor: Colors[theme].blackText,
  },
  interestsContainer: {
    width: wp(80),
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  interestTag: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
      borderRadius: Borders.radius1,
    marginRight: wp(2),
    marginBottom: hp(2),
  },
  selectedTag: {
    backgroundColor: Colors[theme].primary,
  },
  unselectedTag: {
    backgroundColor: Colors[theme].background,
    borderWidth: 1,
  },
  tagText: {
    fontSize: FontSize.extraSmall,
    fontFamily: FontFamily.medium,
    marginLeft: wp(2),
  },
  selectedTagText: {
    color: Colors[theme].whiteText,
  },
  unselectedTagText: {
    color: Colors[theme].blackText,
  },
  tagIcon: {
    width: wp(4),
    height: wp(4),
    tintColor: Colors[theme].blackText,
  },
  button: {
    marginTop: hp(2),
  },
  errorText: {
    color: Colors[theme].redText,
    fontSize: FontSize.extraSmall,
    textAlign: "center",
    marginBottom: hp(1),
  },
}); 