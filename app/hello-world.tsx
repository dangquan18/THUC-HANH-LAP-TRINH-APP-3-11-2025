import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HelloWorldScreen() {
  const router = useRouter();
  const [scaleAnim] = useState(new Animated.Value(1));

  // Animation khi nhấn text
  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Icon React Native */}
      <View style={styles.logoContainer}>
        <Ionicons name="logo-react" size={100} color="#61dafb" />
      </View>

      {/* Text chính */}
      <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Text style={styles.mainText}>Xin chào React Native!</Text>
        </Animated.View>
      </TouchableOpacity>

      {/* Thông tin bổ sung */}
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Ionicons name="checkmark-circle" size={24} color="#2ECC71" />
          <Text style={styles.infoText}>Hot Reload đang bật</Text>
        </View>

        <View style={styles.infoBox}>
          <Ionicons name="flash" size={24} color="#F39C12" />
          <Text style={styles.infoText}>Fast Refresh enabled</Text>
        </View>

        <View style={styles.infoBox}>
          <Ionicons name="code-slash" size={24} color="#9B59B6" />
          <Text style={styles.infoText}>TypeScript ready</Text>
        </View>
      </View>

      {/* Hướng dẫn */}
      <View style={styles.instructionBox}>
        <Ionicons name="information-circle" size={20} color="#61dafb" />
        <Text style={styles.instructionText}>
          Nhấn vào text để xem animation!
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Thay đổi code và xem kết quả ngay lập tức 🚀
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282c34",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    padding: 10,
    backgroundColor: "rgba(97, 218, 251, 0.2)",
    borderRadius: 25,
  },
  logoContainer: {
    marginBottom: 40,
    shadowColor: "#61dafb",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
  mainText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#61dafb",
    textAlign: "center",
    marginBottom: 40,
    letterSpacing: 1,
    textShadowColor: "rgba(97, 218, 251, 0.5)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  infoContainer: {
    width: "100%",
    maxWidth: 350,
    marginBottom: 30,
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#61dafb",
    gap: 12,
  },
  infoText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  instructionBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(97, 218, 251, 0.2)",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    marginBottom: 20,
    gap: 8,
  },
  instructionText: {
    fontSize: 14,
    color: "#61dafb",
    fontWeight: "600",
  },
  footer: {
    position: "absolute",
    bottom: 40,
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 14,
    color: "#8899a6",
    textAlign: "center",
    fontStyle: "italic",
  },
});
