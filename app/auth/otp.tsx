import styles from "@/app/auth/styles/otp.styles";
import RnButton from "@/components/RnButton";
import RnOtp from "@/components/RnOtp";
import RnProgressBar from "@/components/RnProgressBar";
import ScrollContainer from "@/components/RnScrollContainer";
import RnText from "@/components/RnText";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";

export default function OtpScreen() {
  const { phone } = useLocalSearchParams();
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const phoneNumber = phone;

  const handleVerify = async () => {
    router.replace("/auth/name");
  };

  const handleResend = () => {};

  return (
    <ScrollContainer topBar={<RnProgressBar progress={2 / 11} />}>
      <View style={styles.innerContainer}>
        <RnText style={styles.title}>Verification Code</RnText>
        <RnText style={styles.subtitle}>
          Please enter code we just send to {"\n"}
          <RnText style={styles.phoneNumber}>{phoneNumber}</RnText>
        </RnText>
        <RnOtp
          value={otp}
          verifyCode={setOtp}
          isError={isError}
          cell={4}
          style={styles.otp}
        />
        <RnText style={styles.resendText}>Didn&apos;t receive OTP?</RnText>
        <TouchableOpacity onPress={handleResend} style={undefined}>
          <RnText style={styles.link}>Resend Code</RnText>
        </TouchableOpacity>
        <RnButton
          title="Verify"
          style={[styles.verifyButton]}
          onPress={handleVerify}
          disabled={isLoading || otp.length !== 4}
          loading={isLoading}
        />
      </View>
    </ScrollContainer>
  );
}
