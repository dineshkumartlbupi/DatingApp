import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="onboarding"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="getStarted"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="otp"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="name"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="email"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="age"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
