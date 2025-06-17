import RnButton from "@/components/RnButton";
import RnPhoneInput from "@/components/RnPhoneInput";
import ScrollContainer from "@/components/RnScrollContainer";
// import { signIn } from "@/firebase/auth";
import styles from "@/app/auth/styles/Login.styles";
import { LoginValues } from "@/types";
import { SocialIcon } from "@rneui/themed";
import { Formik } from "formik";
import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  phone: Yup.string().required("Phone is required"),
});

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (values: LoginValues) => {
    console.log("🚀 ~ handleLogin ~ values:", values);
    // try {
    //   setIsLoading(true);
    //   const user = await signIn(values.phone);
    //   console.log("🚀 ~ handleLogin ~ user:", user);
    // } catch (error: any) {
    //   const errorMessage =
    //     error.message.match(/\[(.*?)\] (.*)/)?.[2] || error.message;
    //   Alert.alert("Error", errorMessage);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const phoneInput = useRef<PhoneInput>(null);

  return (
    <ScrollContainer>
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
          <View style={styles.innerContainer}>
            <View>
              <Text style={styles.title}>{`Let's start with your number`}</Text>
              <RnPhoneInput
                ref={phoneInput}
                value={values.phone}
                onChangeText={(text) => {
                  handleChange("phone")(text);
                }}
                error={errors.phone}
              />
              <RnButton
                title="Continue"
                style={[styles.button]}
                onPress={() => {
                  handleSubmit();
                  console.log("errors", errors);
                }}
                disabled={isLoading}
                loading={isLoading}
              />
              <View style={styles.orContainer}>
                <View style={styles.orLine} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.orLine} />
              </View>
              <View style={styles.socialContainer}>
                <SocialIcon type="google" />
                <SocialIcon type="apple" light />
              </View>
            </View>
            <View style={styles.footer}>
              <Text>{`Don't have an account? `}</Text>
              <TouchableOpacity
                onPress={() => {
                  resetForm();
                }}
                disabled={isLoading}
              >
                <Text style={styles.link}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </ScrollContainer>
  );
}
