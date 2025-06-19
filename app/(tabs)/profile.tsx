import styles from "@/app/(tabs)/styles/profile.styles";
import InterestTag from "@/components/InterestTag";
import RnText from "@/components/RnText";
import RoundButton from "@/components/RoundButton";
import { Colors } from "@/constants/Colors";
import { hp } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  TouchableOpacity,
  View,
} from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const IMAGE_HEIGHT = hp(60);
const HEADER_HEIGHT = hp(8);

const profileData = {
  name: "Jessica Parker",
  age: 23,
  profession: "Professional model",
  bio: "lorem ipsum lorem ipsum lorem ipsum",
  location: "Chicago, IL United States",
  distance: "1 km",
  about:
    "My name is Jessica Parker and I enjoy meeting new people and finding ways to help them have an uplifting experience. I enjoy reading...",
  interests: [
    { title: "Travelling", isSelected: true },
    { title: "Books", isSelected: true },
    { title: "Music", isSelected: false },
    { title: "Dancing", isSelected: false },
    { title: "Modeling", isSelected: false },
  ],
  gallery: [
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=300",
  ],
  mainImage:
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
};

export default function Profile() {
  const [showFullAbout, setShowFullAbout] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleBackPress = () => {
    console.log("Navigate back");
  };

  const handleEditPress = () => {
    console.log("Edit profile");
  };

  const handleDislikePress = () => {
    console.log("Dislike profile");
  };

  const handleLikePress = () => {
    console.log("Like profile");
  };

  const handleSuperLikePress = () => {
    console.log("Super like profile");
  };

  const handleSendPress = () => {
    console.log("Send message");
  };

  // Image transform animations
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, IMAGE_HEIGHT],
    outputRange: [0, -IMAGE_HEIGHT / 2],
    extrapolate: "clamp",
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, IMAGE_HEIGHT / 2, IMAGE_HEIGHT],
    outputRange: [1, 0.8, 0.3],
    extrapolate: "clamp",
  });

  const imageScale = scrollY.interpolate({
    inputRange: [0, IMAGE_HEIGHT],
    outputRange: [1, 1.2],
    extrapolate: "clamp",
  });

  // Action buttons animation
  const actionButtonsTranslateY = scrollY.interpolate({
    inputRange: [0, IMAGE_HEIGHT / 5],
    outputRange: [0, -hp(8)],
    extrapolate: "clamp",
  });

  const actionButtonsOpacity = scrollY.interpolate({
  inputRange: [0, IMAGE_HEIGHT / 3, IMAGE_HEIGHT / 2],
  outputRange: [1, 1, 0],
  extrapolate: "clamp",
});

  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.headerButton}>
          <Ionicons
            name="chevron-back"
            size={24}
            color={Colors.light.redText}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleEditPress} style={styles.headerButton}>
          <Ionicons
            name="create-outline"
            size={24}
            color={Colors.light.redText}
          />
        </TouchableOpacity>
      </View>

      {/* Animated Profile Image */}
      <Animated.View
        style={[
          styles.imageContainer,
          {
            transform: [{ translateY: imageTranslateY }, { scale: imageScale }],
            opacity: imageOpacity,
          },
        ]}
      >
        <Image
          source={{ uri: profileData.mainImage }}
          style={styles.mainImage}
        />
      </Animated.View>

      {/* Floating Action Buttons */}
      <Animated.View
        style={[
          styles.floatingActionButtons,
          {
            transform: [{ translateY: actionButtonsTranslateY }],
            opacity: actionButtonsOpacity,
          },
        ]}
      >
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleDislikePress}
        >
          <Ionicons name="close" size={28} color={Colors.light.greenText} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.likeButton]}
          onPress={handleLikePress}
        >
          <Ionicons name="heart" size={32} color={Colors.light.whiteText} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleSuperLikePress}
        >
          <Ionicons name="star" size={28} color={Colors.light.greenText} />
        </TouchableOpacity>
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        {/* Spacer to account for image */}
        <View style={styles.imageSpacer} />

        {/* Content Container */}
        <View style={styles.contentContainer}>
          {/* Profile Info */}
          <View style={styles.profileInfo}>
            <View style={styles.nameContainer}>
              <RnText style={styles.name}>
                {profileData.name}, {profileData.age}
              </RnText>
              <RnText style={styles.profession}>
                {profileData.profession}
              </RnText>
            </View>
            <TouchableOpacity
              style={styles.sendButton}
              onPress={handleSendPress}
            >
              {/* <Ionicons name="send" size={20} color={Colors.light.redText} /> */}
              <RoundButton
                iconName="send"
                iconSize={26}
                iconColor={Colors.light.redText}
                borderColor={Colors.light.redText}
              />
            </TouchableOpacity>
          </View>

          {/* Bio Section */}
          <View style={styles.section}>
            <RnText style={styles.sectionTitle}>Bio</RnText>
            <RnText style={styles.bio}>{profileData.bio}</RnText>
          </View>

          {/* Location Section */}
          <View style={styles.section}>
            <RnText style={styles.sectionTitle}>Location</RnText>
            <View style={styles.locationContainer}>
              <Ionicons
                name="location"
                size={16}
                color={Colors.light.redText}
              />
              <RnText style={styles.distance}>{profileData.distance}</RnText>
            </View>
            <RnText style={styles.location}>{profileData.location}</RnText>
          </View>

          {/* About Section */}
          <View style={styles.section}>
            <RnText style={styles.sectionTitle}>About</RnText>
            <RnText
              style={styles.about}
              numberOfLines={showFullAbout ? undefined : 3}
            >
              {profileData.about}
            </RnText>
            <TouchableOpacity onPress={() => setShowFullAbout(!showFullAbout)}>
              <RnText style={styles.readMore}>
                {showFullAbout ? "Read less" : "Read more"}
              </RnText>
            </TouchableOpacity>
          </View>

          {/* Interests Section */}
          <View style={styles.section}>
            <RnText style={styles.sectionTitle}>Interests</RnText>
            <View style={styles.interestsContainer}>
              {profileData.interests.map((interest, index) => (
                <InterestTag
                  key={index}
                  title={interest.title}
                  isSelected={interest.isSelected}
                />
              ))}
            </View>
          </View>

          {/* Gallery Section */}
          <View style={styles.section}>
            <View style={styles.galleryHeader}>
              <RnText style={styles.sectionTitle}>Gallery</RnText>
              <TouchableOpacity>
                <RnText style={styles.seeAll}>See all</RnText>
              </TouchableOpacity>
            </View>

            <View style={styles.gallery}>
              <View style={styles.galleryRow}>
                <TouchableOpacity style={styles.largeGalleryItem}>
                  <Image
                    source={{ uri: profileData.gallery[0] }}
                    style={styles.galleryImage}
                  />
                  <View style={styles.playButton}>
                    <Ionicons
                      name="play"
                      size={20}
                      color={Colors.light.whiteText}
                    />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.galleryRow}>
                {profileData.gallery.slice(1).map((item, index) => (
                  <TouchableOpacity key={index} style={styles.smallGalleryItem}>
                    <Image source={{ uri: item }} style={styles.galleryImage} />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}
