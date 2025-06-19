import styles from "@/app/auth/styles/signup.styles";
import RnButton from "@/components/RnButton";
import RnPhoneInput from "@/components/RnPhoneInput";
import RnProgressBar from "@/components/RnProgressBar";
import ScrollContainer from "@/components/RnScrollContainer";
import RnText from "@/components/RnText";
import { SignupValues } from "@/types";
import { router } from "expo-router";
import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import * as Yup from "yup";

const signupSchema = Yup.object().shape({
  phone: Yup.string().required("Phone is required"),
});

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  const handleSignup = async (values: SignupValues) => {
    router.push({
      pathname: "/auth/otp",
      params: { phone: values.phone },
    });
  };

  return (
    <ScrollContainer topBar={<RnProgressBar progress={1 / 11} />}>
      <Formik
        initialValues={{ phone: "" }}
        validationSchema={signupSchema}
        onSubmit={handleSignup}
        validateOnChange
        validateOnMount={false}
      >
        {({ handleChange, handleSubmit, values, errors, resetForm }) => (
          <View style={styles.innerContainer}>
            <View>
              <RnText style={styles.title}>Create your account</RnText>
              <RnText
                style={styles.subtitle}
              >{`We'll need your phone number to send an OTP for verification.`}</RnText>
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
                onPress={handleSubmit}
                disabled={isLoading}
                loading={isLoading}
              />
            </View>
            <View style={styles.footer}>
              <RnText>Already have an account? </RnText>
              <TouchableOpacity
                onPress={() => {
                  resetForm();
                }}
                disabled={isLoading}
              >
                <RnText style={styles.link}>Login</RnText>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </ScrollContainer>
  );
}
