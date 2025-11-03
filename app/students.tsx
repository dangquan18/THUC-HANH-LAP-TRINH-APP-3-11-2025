import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useStudents, Student } from "@/contexts/StudentContext";

export default function StudentListScreen() {
  const router = useRouter();
  const { students, deleteStudent } = useStudents();

  // Hàm xóa sinh viên với xác nhận
  const handleDeleteStudent = (id: string, name: string) => {
    Alert.alert("Xác nhận xóa", `Bạn có chắc muốn xóa sinh viên "${name}"?`, [
      { text: "Hủy", style: "cancel" },
      {
        text: "Xóa",
        style: "destructive",
        onPress: () => deleteStudent(id),
      },
    ]);
  };

  const renderStudent = ({ item }: { item: Student }) => (
    <TouchableOpacity
      style={styles.studentCard}
      onPress={() => {
        router.push({
          pathname: "/student-detail" as any,
          params: {
            id: item.id,
            name: item.name,
            age: item.age.toString(),
            studentCode: item.studentCode,
            major: item.major,
            email: item.email,
            phone: item.phone,
          },
        });
      }}
    >
      <View style={styles.avatarContainer}>
        <Ionicons name="person-circle" size={50} color="#4A90E2" />
      </View>
      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>{item.name}</Text>
        <Text style={styles.studentCode}>MSSV: {item.studentCode}</Text>
        <Text style={styles.studentMajor}>{item.major}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteStudent(item.id, item.name)}
      >
        <Ionicons name="trash-outline" size={24} color="#E74C3C" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Danh sách sinh viên</Text>
        <Text style={styles.headerSubtitle}>
          Tổng số: {students.length} sinh viên
        </Text>
      </View>

      {/* Danh sách sinh viên */}
      <FlatList
        data={students}
        renderItem={renderStudent}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Nút thêm sinh viên */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          router.push("/add-student" as any);
        }}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },
  header: {
    backgroundColor: "#4A90E2",
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#E8F4FD",
  },
  listContainer: {
    padding: 15,
    paddingBottom: 80,
  },
  studentCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    marginRight: 15,
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 4,
  },
  studentCode: {
    fontSize: 14,
    color: "#7F8C8D",
    marginBottom: 2,
  },
  studentMajor: {
    fontSize: 14,
    color: "#95A5A6",
  },
  deleteButton: {
    padding: 8,
  },
  addButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#4A90E2",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});
