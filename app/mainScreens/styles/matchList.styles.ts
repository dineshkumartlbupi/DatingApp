import { Borders } from '@/constants/Borders';
import { Colors } from '@/constants/Colors';
import { FontSize } from '@/constants/FontSize';
import { hp, wp } from '@/utils';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  backgroundImages: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: wp(8),
    paddingTop: hp(15),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(50),
    
  },
  leftImageContainer: {
    position: 'relative',
    transform: [{ rotate: '-5deg' }],
    marginTop: hp(8),
    zIndex: 1,
    marginLeft: wp(20),
    left: 20,
  },
  rightImageContainer: {
    position: 'relative',
    transform: [{ rotate: '8deg' }],
    marginBottom: hp(20),
    marginRight: wp(20),
    right: 20,
  },
  backgroundImage: {
    width: wp(40),
    height: wp(65),
    borderRadius: wp(4),
  },
 leftHeartBadge: {
  position: 'absolute',
  bottom: -wp(2),
  left: -wp(2),
  width: wp(12),
  height: wp(12),
  borderRadius: Borders.circle,
  backgroundColor: Colors.light.whiteText,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: Colors.light.whiteText,
  elevation: 5,
},
rightHeartBadge: {
  position: 'absolute',
  top: -wp(2),
  left: -wp(2),
  width: wp(12),
  height: wp(12),
  borderRadius: Borders.circle,
  backgroundColor: Colors.light.whiteText,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: Colors.light.whiteText,
  elevation: 5,
},
  content: {
    paddingHorizontal: wp(8),
    paddingBottom: hp(12),
    alignItems: 'center',
  },
  title: {
    fontSize: FontSize.extraLarge,
    fontWeight: 'bold',
    color: Colors.light.pink,
    textAlign: 'center',
    marginBottom: hp(1),
  },
  subtitle: {
    fontSize: FontSize.medium,
    color: Colors.light.tabIconDefault,
    textAlign: 'center',
    marginBottom: hp(4),
    lineHeight: 20,
    
  },
  buttonContainer: {
  height: hp(12),
    width: '100%',
    gap: hp(2),
  },
  bookButton: {
    backgroundColor: Colors.light.pink,
    paddingVertical: hp(1.6),
    borderRadius: Borders.radius2,
    alignItems: 'center',
  },
  bookButtonText: {
    color: Colors.light.whiteText,
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
  messageButton: {
    backgroundColor: 'rgba(255,88,98,0.15)',
   paddingVertical: hp(1.6),
    borderRadius: Borders.radius2,
    alignItems: 'center',
   
  },
  messageButtonText: {
    color: Colors.light.pink,
    fontSize: FontSize.large,
     fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: hp(6),
    right: wp(6),
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    backgroundColor: Colors.light.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});