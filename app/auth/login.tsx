import RnButton from "@/components/RnButton";
import RnInput from "@/components/RnInput";
import ScrollContainer from "@/components/RnScrollContainer";
import { signIn } from "@/firebase/auth";
import { LoginValues } from "@/types";
import { router } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { styles } from "./styles/Login.styles";

const loginSchema = Yup.object().shape({
  phone: Yup.string().required("Phone is required"),
});

export default function Login() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (values: LoginValues) => {
    try {
      setIsLoading(true);
      const user = await signIn(values.phone);
      console.log("🚀 ~ handleLogin ~ user:", user);
      // dispatch(setUser(user.user));
      // dispatch(setToken(user.user.uid));
      router.replace("/home");
    } catch (error: any) {
      const errorMessage =
        error.message.match(/\[(.*?)\] (.*)/)?.[2] || error.message;
      Alert.alert("Error", errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollContainer>
      <Text style={styles.title}>Welcome Back</Text>
      <Formik
        initialValues={{ phone: "" }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
        validateOnChange
        validateOnMount={false}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          resetForm,
        }) => (
          <View>
            <RnInput
              value={values.phone}
              placeholder="Phone"
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              error={errors.phone as string}
              keyboardType="phone-pad"
            />
            <RnButton
              title="Login"
              style={[styles.button, styles.buttonText]}
              onPress={handleSubmit}
              disabled={isLoading}
              loading={isLoading}
            />
            <View style={styles.footer}>
              <Text>{`Don't have an account? `}</Text>
              <TouchableOpacity
                onPress={() => {
                  resetForm();
                  router.push("/auth/signup");
                }}
                disabled={isLoading}
              >
                <Text style={[styles.link, isLoading && styles.linkDisabled]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </ScrollContainer>
  );
}
