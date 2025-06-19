import { Colors } from "@/constants/Colors";
import { FontSize } from "@/constants/FontSize";
import { hp, wp } from "@/utils";
import { StyleSheet } from "react-native";

export default   StyleSheet.create({
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