import createStyles from "@/app/auth/styles/lookingFor.styles";
import RnButton from "@/components/RnButton";
import RnProgressBar from "@/components/RnProgressBar";
import ScrollContainer from "@/components/RnScrollContainer";
import RnText from "@/components/RnText";
import { useColorScheme } from "@/hooks/useColorScheme";
import { LookingForValues } from "@/types";
import { router } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import * as Yup from "yup";

const lookingForSchema = Yup.object().shape({
  lookingFor: Yup.string()
    .oneOf(["male", "female", "other"], "Please select a valid option")
    .required("This field is required"),
});

export default function LookingFor() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? "dark" : "light";
  const styles = createStyles(theme);
  const [isLoading, setIsLoading] = useState(false);

  const handleLookingForSubmit = async (values: {
    lookingFor: LookingForValues["lookingFor"] | "";
  }) => {
    if (!values.lookingFor) return;
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/auth/interests");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderOption = (
    value: LookingForValues["lookingFor"],
    label: string,
    selectedOption: string,
    setFieldValue: (field: string, value: any) => void
  ) => {
    const isSelected = selectedOption === value;
    return (
      <TouchableOpacity
        onPress={() => setFieldValue("lookingFor", isSelected ? "" : value)}
        style={[styles.option, isSelected && styles.optionSelected]}
      >
        <RnText
          style={[styles.optionText, isSelected && styles.optionTextSelected]}
        >
          {label}
        </RnText>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollContainer topBar={<RnProgressBar progress={7 / 11} />}>
      <Formik
        initialValues={{ lookingFor: "" }}
        validationSchema={lookingForSchema}
        onSubmit={handleLookingForSubmit}
      >
        {({ values, setFieldValue, handleSubmit, errors }) => (
          <View style={styles.innerContainer}>
            <RnText style={styles.title}>I Am Looking For...</RnText>
            <RnText style={styles.subtitle}>
              Provide us with further insights into your preferences
            </RnText>

            <View style={styles.optionsContainer}>
              {renderOption("male", "Male", values.lookingFor, setFieldValue)}
              {renderOption(
                "female",
                "Female",
                values.lookingFor,
                setFieldValue
              )}
              {renderOption("other", "Other", values.lookingFor, setFieldValue)}
            </View>

            {errors.lookingFor && (
              <RnText style={styles.errorText}>{errors.lookingFor}</RnText>
            )}

            <RnButton
              title="Continue"
              style={styles.button}
              onPress={handleSubmit}
              disabled={isLoading}
              loading={isLoading}
            />
          </View>
        )}
      </Formik>
    </ScrollContainer>
  );
}
