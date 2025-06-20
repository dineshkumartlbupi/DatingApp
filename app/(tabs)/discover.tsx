
import InterestTag from '@/components/InterestTag';
import ScrollContainer from '@/components/RnScrollContainer';
import RnText from '@/components/RnText';
import RoundButton from '@/components/RoundButton';
import UserCard from '@/components/UserCard';
import { Colors } from '@/constants/Colors';
import { FontSize } from '@/constants/FontSize';
import { hp, wp } from '@/utils';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, TouchableOpacity, View,StyleSheet } from 'react-native';

type User = {
  id: string;
  name: string;
  age: number;
  location: string;
  distance: string;
  image: string;
  isNew: boolean;
};

const newUsers: User[] = [
  {
    id: '1',
    name: 'Halime',
    age: 18,
    location: 'BERLIN',
    distance: '18 km away',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    isNew: true,
  },
  {
    id: '2',
    name: 'Vanessa',
    age: 18,
    location: 'MUNICH',
    distance: '14 km away',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300',
    isNew: true,
  },
  {
    id: '3',
    name: 'James',
    age: 20,
    location: 'HANOVER',
    distance: '32 km away',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    isNew: true,
  },
];

const interests = [
  { id: '1', title: 'Football', icon: 'football-outline' as keyof typeof Ionicons.glyphMap },
  { id: '2', title: 'Nature', icon: 'leaf-outline' as keyof typeof Ionicons.glyphMap },
  { id: '3', title: 'Language', icon: 'chatbubble-outline' as keyof typeof Ionicons.glyphMap },
  { id: '4', title: 'Photography', icon: 'camera-outline' as keyof typeof Ionicons.glyphMap },
  { id: '5', title: 'Music', icon: 'musical-notes-outline' as keyof typeof Ionicons.glyphMap },
  { id: '6', title: 'Writing', icon: 'pencil-outline' as keyof typeof Ionicons.glyphMap },
];

export default function Discover() {
  const [selectedLocation, setSelectedLocation] = useState('Germany');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['2', '5']);

  const handleInterestPress = (interestId: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  return (
    <ScrollContainer>
      {/* Header */}
      <View style={styles.header}>
        <View>
             <View style={styles.locationContainer}>
          <Ionicons name="location" size={16} color={Colors.light.redText} />
          <TouchableOpacity>
            <RnText style={styles.locationText}>{selectedLocation}</RnText>
          </TouchableOpacity>
          <Ionicons name="chevron-down" size={16} color={Colors.light.redText} />
        </View>
        
        <RnText style={styles.title}>Discover</RnText>
        </View>
     
        
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.actionButton}>
          <RoundButton
  iconName="search"
  iconSize={24}
  iconColor={Colors.light.redText}
  borderColor={Colors.light.redText}
  onPress={() => console.log('Pressed')}
/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
         <RoundButton
  iconName="menu"
  iconSize={24}
  iconColor={Colors.light.redText}
  borderColor={Colors.light.redText}
  onPress={() => console.log('Pressed')}
/>
          </TouchableOpacity>
        </View>
      </View>

      {/* New Users Section */}
      <View style={styles.section}>
        <FlatList
          data={newUsers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <UserCard
              id={item.id}
              name={item.name}
              age={item.age}
              location={item.location}
              distance={item.distance}
              image={item.image}
              isNew={item.isNew}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.usersList}
        />
      </View>

      {/* Interests Section */}
      <View style={styles.section}>
        <View style={styles.subHeadContainer}>
               <RnText style={styles.sectionTitle}>Interests</RnText> 
               <RnText style={styles.viewAllText}>View All</RnText>
        </View>
  
       
        
        <View style={styles.interestsContainer}>
          {interests.map((interest) => (
            <InterestTag
              key={interest.id}
              title={interest.title}
              icon={interest.icon}
              isSelected={selectedInterests.includes(interest.id)}
              onPress={() => handleInterestPress(interest.id)}
            />
          ))}
        </View>
      </View>

      {/* Around Me Section */}
      <View style={styles.section}>
        <RnText style={styles.sectionTitle}>Around me</RnText>
        <RnText style={styles.sectionSubtitle}>People with "Music" interest around you</RnText>
        
        <View style={styles.aroundMeContainer}>
         
          
          <View style={styles.mapContainer}>
            <View style={styles.mapPlaceholder}>
              <Ionicons name="map" size={40} color={Colors.light.redText} />
              <RnText style={styles.mapText}>Map View</RnText>
            </View>
            
            <View style={styles.userPins}>
              <View style={[styles.userPin, { top: '30%', left: '20%' }]}>
                <View style={styles.pinImage}>
                  <Ionicons name="person" size={16} color={Colors.light.background} />
                </View>
              </View>
               <View style={styles.connectButton}>
            <RnText style={styles.connectText}>Connect with Clara</RnText>
          </View>
              <View style={[styles.userPin, { top: '60%', right: '25%' }]}>
                <View style={styles.pinImage}>
                  <Ionicons name="person" size={16} color={Colors.light.background} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(2),
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: Colors.light.greenText,
    fontSize: FontSize.regular,
    fontWeight: '600',
    marginHorizontal: wp(1),
  },
  title: {
    fontSize: FontSize.extraLarge,
    fontWeight: 'bold',
    color: Colors.light.greenText,
  },
  headerActions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: wp(3),
  },
  section: {
    marginBottom: hp(3),
  },
  usersList: {
    paddingLeft: wp(2),
  },
  sectionTitle: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
    color: Colors.light.greenText,
    marginBottom: hp(1),
  },
  hugText: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
    color: Colors.light.redText,
    marginBottom: hp(2),
  },
  sectionSubtitle: {
    fontSize: FontSize.regular,
    color: Colors.light.blackText,
    marginBottom: hp(2),
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  aroundMeContainer: {
    position: 'relative',
  },
  connectButton: {
    backgroundColor: Colors.light.redText,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: wp(5),
    alignSelf: 'flex-start',
    marginBottom: hp(2),
  },
  connectText: {
    color: Colors.light.background,
    fontSize:FontSize.regular,
    fontWeight: '600',
  },
  mapContainer: {
    height: hp(25),
    backgroundColor: Colors.light.greenText,
    borderRadius: wp(4),
    position: 'relative',
    overflow: 'hidden',
  },
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    color: Colors.light.greenText,
    marginTop: hp(1),
  },
  userPins: {
    ...StyleSheet.absoluteFillObject,
  },
  userPin: {
    position: 'absolute',
    width: wp(8),
    height: wp(8),
  },
  pinImage: {
    width: '100%',
    height: '100%',
    borderRadius: wp(4),
    backgroundColor: Colors.light.redText,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeadContainer:{
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between'
  },
  viewAllText:{
    color:Colors.light.greenText
  }
  
})