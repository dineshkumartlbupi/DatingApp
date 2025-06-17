import styles from "@/app/auth/styles/Onboarding.styles";
import Container from "@/components/RnContainer";
import RnText from "@/components/RnText";
import { Colors } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { ImageBackground, TouchableOpacity, View } from "react-native";

export default function Onboarding({ navigation }: any) {
  return (
    <Container>
      <ImageBackground
        source={require("@/assets/images/onboarding.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => {
            // Handle Google login
          }}
        >
          <View style={styles.iconContainer}>
            <FontAwesome name="google" size={24} color={Colors.light.redText} />
          </View>
          <RnText style={styles.socialwhiteText}>Login with Google</RnText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => {
            // Handle Apple login
          }}
        >
          <View style={styles.iconContainer}>
            <FontAwesome
              name="apple"
              size={24}
              color={Colors.light.blackText}
            />
          </View>
          <RnText style={styles.socialwhiteText}>Login with Apple</RnText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.emailButton}
          onPress={() => router.push("/auth/getStarted")}
        >
          <RnText style={styles.emailwhiteText}>Continue with Phone</RnText>
        </TouchableOpacity>

        <View style={styles.footer}>
          <RnText style={styles.footerText}>
            By Continuing you agree to our{" "}
            <RnText
              style={styles.footerLink}
              onPress={() => {
                // Navigate to Terms
              }}
            >
              Terms
            </RnText>
            {" & "}
            <RnText
              style={styles.footerLink}
              onPress={() => {
                // Navigate to Privacy Policy
              }}
            >
              Privacy
            </RnText>
          </RnText>
        </View>
      </View>
    </Container>
  );
}
