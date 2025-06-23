import { Borders } from "@/constants/Borders";
import { Colors } from "@/constants/Colors";
import { FontSize } from "@/constants/FontSize";
import { hp, wp } from "@/utils";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import RnText from "./RnText";

interface MatchCardProps {
  id: string;
  name: string;
  age: number;
  location: string;
  distance: string;
  image: string;
  matchPercentage: number;
  onPress: () => void;
}

const MatchCard: React.FC<MatchCardProps> = ({
  name,
  age,
  location,
  distance,
  image,
  matchPercentage,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.overlay} />

      <View style={styles.matchBadge}>
        <RnText style={styles.matchText}>{matchPercentage}% Match</RnText>
      </View>

      <View style={styles.content}>
        <View style={styles.nameCon}>
          <RnText style={styles.distance}>{distance}</RnText>
        </View>

        <RnText style={styles.name}>
          {name}, {age}
        </RnText>
        <View style={styles.locationContainer}>
          {/* <Ionicons name="location-outline" size={14} color={Colors.light.background} /> */}
          <RnText style={styles.location}>{location}</RnText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: wp(42),
    height: hp(28),
    borderRadius: Borders.radius3,
    overflow: "hidden",
    margin: wp(2),
    position: "relative",
    borderWidth: 4,
    borderColor: Colors.light.redText,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  matchBadge: {
    position: "absolute",
    alignSelf: "center",

    backgroundColor: Colors.light.redText,
    paddingHorizontal: wp(3),
    paddingVertical: wp(1),
    borderBottomLeftRadius: Borders.radius2,
    borderBottomRightRadius: Borders.radius2,
  },
  matchText: {
    color: Colors.light.background,
    fontSize: 10,
    fontWeight: "bold",
  },
  content: {
    position: "absolute",
    bottom: wp(2),
    left: wp(2),
    right: wp(2),
  },
  name: {
    color: Colors.light.whiteText,
    fontSize: FontSize.regular,
    fontWeight: "bold",
    marginBottom: hp(0.5),
    textAlign: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(0.3),
    justifyContent: "center",
  },
  location: {
    color: Colors.light.background,
    fontSize: FontSize.extraSmall,
    marginLeft: wp(1),
    textTransform: "uppercase",
  },
  distance: {
    color: Colors.light.whiteText,
    fontSize: FontSize.extraSmall,
    opacity: 0.8,
    textAlign: "center",
    fontWeight: "700",
  },
  nameCon: {
    paddingVertical: wp(1),
    paddingHorizontal: wp(0.1),
    borderRadius: Borders.circle,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderColor: Colors.light.whiteText,
    borderWidth: 0.3,
  },
});

export default MatchCard;
