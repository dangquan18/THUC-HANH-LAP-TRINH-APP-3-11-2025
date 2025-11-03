import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const router = useRouter();

  const profileData = {
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "+84 123 456 789",
    address: "Hà Nội, Việt Nam",
    bio: "Lập trình viên React Native đam mê công nghệ và học hỏi những điều mới mỗi ngày.",
    skills: ["React Native", "TypeScript", "Node.js", "MongoDB"],
    experience: "2 năm",
    education: "Đại học Bách Khoa Hà Nội",
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hồ sơ cá nhân</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Avatar */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person" size={60} color="#8E44AD" />
          </View>
          <Text style={styles.name}>{profileData.name}</Text>
          <Text style={styles.title}>Mobile Developer</Text>
        </View>

        {/* Bio */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="document-text" size={24} color="#8E44AD" />
            <Text style={styles.sectionTitle}>Giới thiệu</Text>
          </View>
          <Text style={styles.bioText}>{profileData.bio}</Text>
        </View>

        {/* Contact Info */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="mail" size={24} color="#8E44AD" />
            <Text style={styles.sectionTitle}>Thông tin liên hệ</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="mail-outline" size={20} color="#7F8C8D" />
            <Text style={styles.infoText}>{profileData.email}</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="call-outline" size={20} color="#7F8C8D" />
            <Text style={styles.infoText}>{profileData.phone}</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={20} color="#7F8C8D" />
            <Text style={styles.infoText}>{profileData.address}</Text>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="code-slash" size={24} color="#8E44AD" />
            <Text style={styles.sectionTitle}>Kỹ năng</Text>
          </View>
          <View style={styles.skillsContainer}>
            {profileData.skills.map((skill, index) => (
              <View key={index} style={styles.skillBadge}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="briefcase" size={24} color="#8E44AD" />
            <Text style={styles.sectionTitle}>Kinh nghiệm</Text>
          </View>
          <Text style={styles.infoText}>{profileData.experience}</Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="school" size={24} color="#8E44AD" />
            <Text style={styles.sectionTitle}>Học vấn</Text>
          </View>
          <Text style={styles.infoText}>{profileData.education}</Text>
        </View>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backHomeButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back-circle" size={24} color="#8E44AD" />
          <Text style={styles.backHomeText}>Quay lại Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },
  header: {
    backgroundColor: "#8E44AD",
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
  },
  avatarSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#F3E5F5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 4,
    borderColor: "#8E44AD",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: "#8E44AD",
    fontWeight: "600",
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  bioText: {
    fontSize: 15,
    color: "#7F8C8D",
    lineHeight: 22,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    gap: 12,
  },
  infoText: {
    fontSize: 15,
    color: "#7F8C8D",
    flex: 1,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  skillBadge: {
    backgroundColor: "#F3E5F5",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#8E44AD",
  },
  skillText: {
    fontSize: 14,
    color: "#8E44AD",
    fontWeight: "600",
  },
  backHomeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 10,
    gap: 10,
    borderWidth: 2,
    borderColor: "#8E44AD",
  },
  backHomeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#8E44AD",
  },
});
