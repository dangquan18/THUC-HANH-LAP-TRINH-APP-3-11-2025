import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function GradeCalculatorScreen() {
  const router = useRouter();
  const [math, setMath] = useState("");
  const [physics, setPhysics] = useState("");
  const [chemistry, setChemistry] = useState("");
  const [average, setAverage] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateAverage = () => {
    const mathScore = parseFloat(math);
    const physicsScore = parseFloat(physics);
    const chemistryScore = parseFloat(chemistry);

    if (isNaN(mathScore) || isNaN(physicsScore) || isNaN(chemistryScore)) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ điểm các môn!");
      return;
    }

    if (
      mathScore < 0 ||
      mathScore > 10 ||
      physicsScore < 0 ||
      physicsScore > 10 ||
      chemistryScore < 0 ||
      chemistryScore > 10
    ) {
      Alert.alert("Lỗi", "Điểm phải nằm trong khoảng 0-10!");
      return;
    }

    const avg = (mathScore + physicsScore + chemistryScore) / 3;
    setAverage(avg);
    setShowResult(true);
  };

  const getGrade = (avg: number) => {
    if (avg >= 8.5)
      return { text: "Xuất sắc", color: "#2ECC71", icon: "trophy" };
    if (avg >= 7) return { text: "Giỏi", color: "#3498DB", icon: "star" };
    if (avg >= 5.5) return { text: "Khá", color: "#F39C12", icon: "ribbon" };
    if (avg >= 4) return { text: "Trung bình", color: "#E67E22", icon: "flag" };
    return { text: "Yếu", color: "#E74C3C", icon: "close-circle" };
  };

  const reset = () => {
    setMath("");
    setPhysics("");
    setChemistry("");
    setAverage(null);
    setShowResult(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tính điểm trung bình</Text>
      </View>

      <View style={styles.content}>
        {/* Icon */}
        <View style={styles.iconContainer}>
          <Ionicons name="calculator" size={60} color="#3498DB" />
        </View>

        {/* Form nhập điểm */}
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Toán</Text>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="calculator-outline"
                size={20}
                color="#3498DB"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Nhập điểm Toán"
                keyboardType="decimal-pad"
                value={math}
                onChangeText={setMath}
                maxLength={4}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Lý</Text>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="flask-outline"
                size={20}
                color="#9B59B6"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Nhập điểm Lý"
                keyboardType="decimal-pad"
                value={physics}
                onChangeText={setPhysics}
                maxLength={4}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Hóa</Text>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="beaker-outline"
                size={20}
                color="#E74C3C"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Nhập điểm Hóa"
                keyboardType="decimal-pad"
                value={chemistry}
                onChangeText={setChemistry}
                maxLength={4}
              />
            </View>
          </View>
        </View>

        {/* Nút tính điểm */}
        <TouchableOpacity
          style={styles.calculateButton}
          onPress={calculateAverage}
        >
          <Ionicons name="analytics" size={24} color="#fff" />
          <Text style={styles.calculateButtonText}>Tính điểm</Text>
        </TouchableOpacity>

        {/* Kết quả */}
        {showResult && average !== null && (
          <View style={styles.resultContainer}>
            <View
              style={[
                styles.resultCard,
                { borderColor: getGrade(average).color },
              ]}
            >
              <Ionicons
                name={getGrade(average).icon as any}
                size={50}
                color={getGrade(average).color}
              />
              <Text style={styles.resultLabel}>Điểm trung bình</Text>
              <Text
                style={[styles.resultValue, { color: getGrade(average).color }]}
              >
                {average.toFixed(2)}
              </Text>
              <View
                style={[
                  styles.gradeBadge,
                  { backgroundColor: getGrade(average).color },
                ]}
              >
                <Text style={styles.gradeText}>{getGrade(average).text}</Text>
              </View>
            </View>

            {/* Nút tính lại */}
            <TouchableOpacity style={styles.resetButton} onPress={reset}>
              <Ionicons name="refresh" size={20} color="#3498DB" />
              <Text style={styles.resetButtonText}>Tính lại</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },
  header: {
    backgroundColor: "#3498DB",
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 15,
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  iconContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2C3E50",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  inputIcon: {
    marginLeft: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#2C3E50",
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  calculateButton: {
    backgroundColor: "#3498DB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 12,
    gap: 10,
    shadowColor: "#3498DB",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  calculateButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultContainer: {
    marginTop: 20,
  },
  resultCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 25,
    alignItems: "center",
    borderWidth: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  resultLabel: {
    fontSize: 16,
    color: "#7F8C8D",
    marginTop: 15,
    marginBottom: 5,
  },
  resultValue: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 15,
  },
  gradeBadge: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  gradeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resetButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    marginTop: 15,
    gap: 8,
  },
  resetButtonText: {
    color: "#3498DB",
    fontSize: 16,
    fontWeight: "600",
  },
});
