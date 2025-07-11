import createStyles from "@/app/authStyles/email.styles";
import RnButton from "@/components/RnButton";
import RnInput from "@/components/RnInput";
import RnProgressBar from "@/components/RnProgressBar";
import ScrollContainer from "@/components/RnScrollContainer";
import RnText from "@/components/RnText";
import { useColorScheme } from "@/hooks/useColorScheme";
import { EmailValues } from "@/types";
import { router } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import { View } from "react-native";
import * as Yup from "yup";

const emailSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .test("email-format", "Please enter a valid email address", (value) => {
      if (!value) return false;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value);
    }),
});

export default function Email() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? "dark" : "light";
  const styles = createStyles(theme);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = async (values: EmailValues) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/auth/age");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollContainer topBar={<RnProgressBar progress={4 / 11} />}>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={emailSchema}
        onSubmit={handleEmailSubmit}
        validateOnChange
        validateOnMount={false}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <View style={styles.innerContainer}>
            <View>
              <RnText style={styles.title}>Email Address</RnText>
              <RnText style={styles.subtitle}>
                We&apos;ll need your email to stay in touch
              </RnText>
              <RnInput
                value={values.email}
                onChangeText={handleChange("email")}
                error={errors.email}
                placeholder="Enter your email"
                keyboardType="email-address"
                maxLength={50}
              />
              <RnButton
                title="Continue"
                style={styles.button}
                onPress={handleSubmit}
                disabled={isLoading}
                loading={isLoading}
              />
            </View>
          </View>
        )}
      </Formik>
    </ScrollContainer>
  );
}
