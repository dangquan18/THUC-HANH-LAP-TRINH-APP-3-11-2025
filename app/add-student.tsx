import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useStudents } from "@/contexts/StudentContext";

export default function AddStudentScreen() {
  const router = useRouter();
  const { addStudent } = useStudents();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    studentCode: "",
    major: "",
    email: "",
    phone: "",
  });

  // Cập nhật giá trị form
  const updateField = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  // Validate form
  const validateForm = () => {
    if (!formData.name.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập họ tên");
      return false;
    }
    if (!formData.studentCode.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập mã sinh viên");
      return false;
    }
    if (!formData.age.trim() || isNaN(Number(formData.age))) {
      Alert.alert("Lỗi", "Vui lòng nhập tuổi hợp lệ");
      return false;
    }
    if (!formData.major.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập ngành học");
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      Alert.alert("Lỗi", "Vui lòng nhập email hợp lệ");
      return false;
    }
    if (!formData.phone.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập số điện thoại");
      return false;
    }
    return true;
  };

  // Xử lý thêm sinh viên
  const handleAddStudent = () => {
    if (validateForm()) {
      // Thêm sinh viên vào context
      addStudent({
        name: formData.name,
        age: Number(formData.age),
        studentCode: formData.studentCode,
        major: formData.major,
        email: formData.email,
        phone: formData.phone,
      });

      Alert.alert("Thành công", "Đã thêm sinh viên mới!", [
        {
          text: "OK",
          onPress: () => router.back(),
        },
      ]);
    }
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
          <Ionicons name="close" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Thêm sinh viên mới</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Icon thêm */}
        <View style={styles.iconSection}>
          <View style={styles.iconCircle}>
            <Ionicons name="person-add" size={50} color="#4A90E2" />
          </View>
        </View>

        {/* Form nhập liệu */}
        <View style={styles.formSection}>
          {/* Họ tên */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Họ và tên *</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#95A5A6" />
              <TextInput
                style={styles.input}
                placeholder="Nhập họ và tên"
                value={formData.name}
                onChangeText={(text) => updateField("name", text)}
              />
            </View>
          </View>

          {/* MSSV */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Mã sinh viên *</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="card-outline" size={20} color="#95A5A6" />
              <TextInput
                style={styles.input}
                placeholder="Ví dụ: SV001"
                value={formData.studentCode}
                onChangeText={(text) => updateField("studentCode", text)}
              />
            </View>
          </View>

          {/* Tuổi */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Tuổi *</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="calendar-outline" size={20} color="#95A5A6" />
              <TextInput
                style={styles.input}
                placeholder="Nhập tuổi"
                value={formData.age}
                onChangeText={(text) => updateField("age", text)}
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Ngành học */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Ngành học *</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="school-outline" size={20} color="#95A5A6" />
              <TextInput
                style={styles.input}
                placeholder="Ví dụ: Công nghệ thông tin"
                value={formData.major}
                onChangeText={(text) => updateField("major", text)}
              />
            </View>
          </View>

          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email *</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="#95A5A6" />
              <TextInput
                style={styles.input}
                placeholder="example@email.com"
                value={formData.email}
                onChangeText={(text) => updateField("email", text)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Số điện thoại */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Số điện thoại *</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="call-outline" size={20} color="#95A5A6" />
              <TextInput
                style={styles.input}
                placeholder="0123456789"
                value={formData.phone}
                onChangeText={(text) => updateField("phone", text)}
                keyboardType="phone-pad"
              />
            </View>
          </View>
        </View>

        {/* Nút thêm */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddStudent}>
          <Ionicons name="checkmark-circle" size={24} color="#fff" />
          <Text style={styles.addButtonText}>Thêm sinh viên</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },
  header: {
    backgroundColor: "#4A90E2",
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
    padding: 20,
    paddingBottom: 40,
  },
  iconSection: {
    alignItems: "center",
    marginVertical: 20,
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E8F4FD",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#4A90E2",
    borderStyle: "dashed",
  },
  formSection: {
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2C3E50",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#2C3E50",
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: "#27AE60",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 10,
    shadowColor: "#27AE60",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    gap: 10,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
