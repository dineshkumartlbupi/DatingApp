import { RootState } from "@/redux/store";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useSelector } from "react-redux";

export default function Index() {
  const { token } = useSelector((state: RootState) => state.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("🚀 ~ timer ~ token:", token);
      if (token) {
        router.replace("/(tabs)/home");
      } else {
        router.replace("/auth/onboarding");
      }
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [token]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return null;
}
