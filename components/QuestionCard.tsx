import { Colors } from '@/constants/Colors';
import { FontSize } from '@/constants/FontSize';
import { hp, wp } from '@/utils';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import RnText from './RnText';

interface QuestionCardProps {
  id: string;
  category: string;
  question: string;
  user: {
    name: string;
    location: string;
    avatar: string;
  };
  backgroundImage: string;
  onLike: () => void;
  onComment: () => void;
  onMore: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  category,
  question,
  user,
  backgroundImage,
  onLike,
  onComment,
  onMore,
}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: backgroundImage }} style={styles.backgroundImage} />
      <View style={styles.overlay} />
      
      <View style={styles.content}>
        <View style={styles.categoryContainer}>
          {/* <MapPin size={16} color={Colors.light.background} /> */}
          <Feather name="map-pin" size={22} color={Colors.dark.whiteText} />
          <RnText style={styles.categoryText}>{category}</RnText>
        </View>
        
        <View style={styles.bottomContainer}>
        <RnText style={styles.questionText}>{question}</RnText>
        
        <View style={styles.userInfo}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <View style={styles.userDetails}>
            <RnText style={styles.userName}>{user.name}</RnText>
            <RnText style={styles.userLocation}>{user.location}</RnText>
          </View>
        </View>
        </View>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={onLike}>
        
        <AntDesign name="like1" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={onComment}>
         
          <Ionicons name="chatbubble-sharp" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={onMore}>
  
      <Entypo name="dots-three-horizontal" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: wp(92),
    height: hp(46),
    borderRadius: wp(6),
    overflow: 'hidden',
    marginBottom: hp(2),
    position: 'relative',
    flexDirection:'row'
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  content: {
    flex: 1,
    padding: wp(6),
    justifyContent: 'space-between',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    borderRadius: wp(5),
    alignSelf: 'flex-start',
    borderColor:Colors.dark.whiteText,
    borderWidth:0.2
  },
  categoryText: {
    color: Colors.light.background,
    fontSize: FontSize.regular,
    fontWeight: '600',
    marginLeft: wp(1),
  },
  questionText: {
    color: Colors.light.background,
    fontSize: FontSize.large,
    fontWeight: 'bold',
    lineHeight: 28,
    textAlign: 'left',
    marginTop: hp(2),

  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
  },
  avatar: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    marginRight: wp(3),
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    color: Colors.light.background,
    fontSize: FontSize.small,
    fontWeight: 'bold',
  },
  userLocation: {
    color: Colors.light.background,
    fontSize: FontSize.regular,
    opacity: 0.8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
 actions: {
  
  
  alignItems: 'center',
  alignSelf: 'center',
  backgroundColor: "rgba(255,255,255,0.4)",
  padding:hp(1.5),
  borderTopLeftRadius:hp(2.5),
  borderBottomLeftRadius:hp(2.5)
},

  actionButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 30,
    padding: wp(3),
    marginVertical: hp(1),
  },
  bottomContainer:{
    width:wp(70)
  }
});

export default QuestionCard;