import MatchCard from '@/components/MatchCard';
import ScrollContainer from '@/components/RnScrollContainer';
import RnText from '@/components/RnText';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import styles from '@/app/(tabs)/styles/matches.styles';
import PrimaryHeader from '@/components/PrimaryHeader';
import { wp } from '@/utils';
import { StatusBar } from 'expo-status-bar';

type Match = {
  id: string;
  name: string;
  age: number;
  location: string;
  distance: string;
  image: string;
  matchPercentage: number;
};

const matches: Match[] = [
  {
    id: '1',
    name: 'James',
    age: 20,
    location: 'HANOVER',
    distance: '1.3 km away',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    matchPercentage: 100,
  },
  {
    id: '2',
    name: 'Eddie',
    age: 23,
    location: 'DORTMUND',
    distance: '4 km away',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300',
    matchPercentage: 94,
  },
  {
    id: '3',
    name: 'Brandon',
    age: 20,
    location: 'BERLIN',
    distance: '2.5 km away',
    image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=300',
    matchPercentage: 88,
  },
  {
    id: '4',
    name: 'Jessica',
    age: 23,
    location: 'MUNICH',
    distance: '3.5 km away',
    image: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=300',
    matchPercentage: 85,
  },
];

export default function Matches() {
  const [likedCount] = useState(32);
  const [connectCount] = useState(16);
  const [totalMatches] = useState(47);

  const handleMatchPress = (matchId: string) => {
    console.log(`Open match profile: ${matchId}`);
  };

  const handleBackPress = () => {
    console.log('Navigate back');
  };

  const handleFilterPress = () => {
    console.log('Open filters');
  };

  return (
    <ScrollContainer>
      {/* Header */}
    <StatusBar style="dark" backgroundColor={Colors.light.background} />
     <PrimaryHeader
  title="Matches"
  leftIconName="arrow-left"
  rightIconName="filter"
  onLeftPress={()=>console.log('')}
  onRightPress={()=>console.log()}
  titleColor={Colors.light.greenText}
  leftIconSize={18}

/>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <View style={[styles.statCircle, { backgroundColor: Colors.light.redText }]}>
            <Ionicons name="heart" size={20} color={Colors.light.background} />
          </View>
          <View style={styles.statTextContainer}>
              <RnText style={styles.statLabel}>Likes</RnText>
          <RnText style={styles.statNumber}>{likedCount}</RnText>
       
          </View>
           
        </View>
        
        <View style={styles.statItem}>
          <View style={[styles.statCircle, { backgroundColor: Colors.light.greenText }]}>
            <Ionicons name="people" size={20} color={Colors.light.background} />
          </View>
          <View style={styles.statTextContainer}>
             <RnText style={styles.statLabel}>Connect</RnText>
             <RnText style={styles.statNumber}>{connectCount}</RnText>
         
          </View>
         
        </View>
      </View>

      {/* Your Matches Section */}
      <View >
        <View style={styles.statTextContainer}>
               <RnText style={styles.sectionTitle}>Your Matches</RnText>
               <RnText style={[styles.sectionTitle,{color:Colors.light.redText}]}>{totalMatches}</RnText>
        </View>
     
        <View style={styles.section}>

      
        <FlatList
          data={matches}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MatchCard
              id={item.id}
              name={item.name}
              age={item.age}
              location={item.location}
              distance={item.distance}
              image={item.image}
              matchPercentage={item.matchPercentage}
              onPress={() => handleMatchPress(item.id)}
            />
          )}
          
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.matchesList}
          style={{width:wp(100)}}
        />
          </View>
      </View>
    </ScrollContainer>
  );
}


