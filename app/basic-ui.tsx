import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function BasicUIScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#61dafb" />
      </TouchableOpacity>

      {/* Logo React Native */}
      <View style={styles.logoContainer}>
        <Ionicons name="logo-react" size={120} color="#61dafb" />
      </View>

      {/* Text chính */}
      <Text style={styles.mainText}>Hello React Native</Text>

      {/* Text phụ */}
      <Text style={styles.subText}>Chào mừng đến với React Native!</Text>
      <Text style={styles.descText}>
        Framework tuyệt vời để xây dựng ứng dụng di động
      </Text>
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
  },
  logoContainer: {
    marginBottom: 30,
    shadowColor: "#61dafb",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
  mainText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#61dafb",
    marginBottom: 15,
    textAlign: "center",
    letterSpacing: 1,
  },
  subText: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  descText: {
    fontSize: 14,
    color: "#8899a6",
    textAlign: "center",
    maxWidth: 300,
  },
});
