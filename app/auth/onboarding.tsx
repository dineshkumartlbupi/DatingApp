import createStyles from "@/app/authStyles/onboarding.styles";
import Container from "@/components/RnContainer";
import RnText from "@/components/RnText";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { ImageBackground, TouchableOpacity, View } from "react-native";

export default function Onboarding({ navigation }: any) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? "dark" : "light";
  const styles = createStyles(theme);

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
            <FontAwesome
              name="google"
              size={24}
              color={Colors[theme].redText}
            />
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
              color={Colors[theme].blackText}
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
