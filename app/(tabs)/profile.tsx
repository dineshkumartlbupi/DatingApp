
import InterestTag from "@/components/InterestTag";
import RnText from "@/components/RnText";
import RoundButton from "@/components/RoundButton";
import { Colors } from "@/constants/Colors";
import { FontSize } from "@/constants/FontSize";
import { hp, wp } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
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


const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: Colors.light.background,
   },
   header: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     paddingHorizontal: wp(4),
     paddingTop: hp(6),
     paddingBottom: hp(2),
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     zIndex: 20,
     backgroundColor: 'transparent',
   },
   headerButton: {
     width: wp(12),
     height: wp(12),
     borderRadius: wp(6),
     backgroundColor: 'rgba(255,255,255,0.9)',
     justifyContent: 'center',
     alignItems: 'center',
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.1,
     shadowRadius: 4,
     elevation: 3,
   },
   imageContainer: {
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     height: IMAGE_HEIGHT,
     zIndex: 1,
   },
   mainImage: {
     width: '100%',
     height: '100%',
     borderBottomLeftRadius: wp(6),
     borderBottomRightRadius: wp(6),
   },
   floatingActionButtons: {
     position: 'absolute',
     top: hp(47),
     left: 0,
     right: 0,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     gap: wp(6),
     zIndex: 15,
   
   },
   actionButton: {
     width: wp(16),
     height: wp(16),
     borderRadius: wp(8),
     backgroundColor: 'rgba(255,255,255,0.95)',
     justifyContent: 'center',
     alignItems: 'center',
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 4 },
     shadowOpacity: 0.15,
     shadowRadius: 8,
     elevation: 8,
   },
   likeButton: {
     backgroundColor: Colors.light.redText,
     width: wp(20),
     height: wp(20),
     borderRadius: wp(10),
   },
   scrollView: {
     flex: 1,
     zIndex: 10,
    
   },
   
   imageSpacer: {
     height: IMAGE_HEIGHT - hp(8),
   },
   contentContainer: {
     backgroundColor: Colors.light.background,
     borderTopLeftRadius: wp(6),
     borderTopRightRadius: wp(6),
     paddingTop: hp(6),
     minHeight: SCREEN_HEIGHT - IMAGE_HEIGHT + hp(8),
     shadowColor: '#000',
     shadowOffset: { width: 0, height: -2 },
     shadowOpacity: 0.1,
     shadowRadius: 8,
     elevation: 5,
     paddingHorizontal:wp(4)
   },
   profileInfo: {
     paddingHorizontal: wp(4),
     marginBottom: hp(2),
     flexDirection:'row',
     justifyContent:'space-between'
   },
   nameContainer: {
    
     justifyContent: 'space-between',
   
     marginBottom: hp(0.5),
   },
   name: {
     fontSize: FontSize.extraLarge,
     fontWeight: 'bold',
     color: Colors.light.blackText,
   },
   sendButton: {
     padding: wp(2),
   },
   profession: {
     fontSize: FontSize.small,
     color: Colors.light.blackText,
   },
   section: {
     paddingHorizontal: wp(4),
     marginBottom: hp(3),
   },
   sectionTitle: {
     fontSize: FontSize.large,
     fontWeight: 'bold',
     color: Colors.light.blackText,
     marginBottom: hp(1),
   },
   bio: {
     fontSize: FontSize.small,
     color: Colors.light.blackText,
     lineHeight: 24,
   },
   locationContainer: {
     flexDirection: 'row',
     alignItems: 'center',
     marginBottom: hp(0.5),
   },
   distance: {
     fontSize: FontSize.regular,
     color: Colors.light.redText,
     marginLeft: wp(1),
   },
   location: {
    fontSize: FontSize.small,
     color: Colors.light.blackText,
   },
   about: {
  fontSize: FontSize.small,
     color: Colors.light.blackText,
     lineHeight: 24,
     marginBottom: hp(1),
   },
   readMore: {
    fontSize: FontSize.small,
     color: Colors.light.redText,
     fontWeight: '600',
   },
   interestsContainer: {
     flexDirection: 'row',
     flexWrap: 'wrap',
     gap: wp(2),
   },
   galleryHeader: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     marginBottom: hp(2),
   },
   seeAll: {
    fontSize: FontSize.small,
     color: Colors.light.redText,
     fontWeight: '600',
   },
   gallery: {
     gap: wp(2),
   },
   galleryRow: {
     flexDirection: 'row',
     gap: wp(2),
     marginBottom: wp(2),
   },
   largeGalleryItem: {
     flex: 1,
     height: hp(25),
     borderRadius: wp(3),
     overflow: 'hidden',
     position: 'relative',
   },
   smallGalleryItem: {
     flex: 1,
     height: hp(12),
     borderRadius: wp(3),
     overflow: 'hidden',
   },
   galleryImage: {
     width: '100%',
     height: '100%',
   },
   playButton: {
     position: 'absolute',
     top: wp(2),
     left: wp(2),
     width: wp(8),
     height: wp(8),
     borderRadius: wp(4),
     backgroundColor: Colors.light.redText,
     justifyContent: 'center',
     alignItems: 'center',
   },
})