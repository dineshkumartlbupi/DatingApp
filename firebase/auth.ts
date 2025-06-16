import type { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { getAuth, signInWithPhoneNumber } from "@react-native-firebase/auth";

export const signIn = async (
  phone: string
): Promise<FirebaseAuthTypes.ConfirmationResult> => {
  const auth = getAuth();
  return signInWithPhoneNumber(auth, phone);
};

export const getCurrentAuth = () => {
  return getAuth();
};
