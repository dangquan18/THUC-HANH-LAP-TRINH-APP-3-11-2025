import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Linking,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function BusinessCardScreen() {
  const router = useRouter();

  // Thông tin cá nhân
  const personalInfo = {
    name: "Nguyễn Văn A",
    position: "Mobile Developer",
    company: "Tech Solutions",
    email: "nguyenvana@email.com",
    phone: "+84 123 456 789",
    website: "www.nguyenvana.dev",
    address: "Hà Nội, Việt Nam",
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${personalInfo.email}`);
  };

  const handlePhone = () => {
    Linking.openURL(`tel:${personalInfo.phone}`);
  };

  const handleWebsite = () => {
    Linking.openURL(`https://${personalInfo.website}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header với gradient */}
      <LinearGradient
        colors={["#667eea", "#764ba2"]}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Danh thiếp cá nhân</Text>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Card chính */}
        <View style={styles.card}>
          {/* Ảnh đại diện */}
          <View style={styles.avatarContainer}>
            <View style={styles.avatarCircle}>
              <Ionicons name="person" size={80} color="#667eea" />
            </View>
            <View style={styles.statusBadge}>
              <View style={styles.statusDot} />
            </View>
          </View>

          {/* Tên và chức vụ */}
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.position}>{personalInfo.position}</Text>
          <Text style={styles.company}>{personalInfo.company}</Text>

          {/* Đường phân cách */}
          <View style={styles.divider} />

          {/* Thông tin liên hệ */}
          <View style={styles.contactSection}>
            {/* Email */}
            <TouchableOpacity
              style={styles.contactItem}
              onPress={handleEmail}
              activeOpacity={0.7}
            >
              <View style={styles.iconWrapper}>
                <LinearGradient
                  colors={["#667eea", "#764ba2"]}
                  style={styles.iconGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Ionicons name="mail" size={22} color="#fff" />
                </LinearGradient>
              </View>
              <View style={styles.contactTextContainer}>
                <Text style={styles.contactLabel}>Email</Text>
                <Text style={styles.contactValue}>{personalInfo.email}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#BDC3C7" />
            </TouchableOpacity>

            {/* Số điện thoại */}
            <TouchableOpacity
              style={styles.contactItem}
              onPress={handlePhone}
              activeOpacity={0.7}
            >
              <View style={styles.iconWrapper}>
                <LinearGradient
                  colors={["#667eea", "#764ba2"]}
                  style={styles.iconGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Ionicons name="call" size={22} color="#fff" />
                </LinearGradient>
              </View>
              <View style={styles.contactTextContainer}>
                <Text style={styles.contactLabel}>Số điện thoại</Text>
                <Text style={styles.contactValue}>{personalInfo.phone}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#BDC3C7" />
            </TouchableOpacity>

            {/* Website */}
            <TouchableOpacity
              style={styles.contactItem}
              onPress={handleWebsite}
              activeOpacity={0.7}
            >
              <View style={styles.iconWrapper}>
                <LinearGradient
                  colors={["#667eea", "#764ba2"]}
                  style={styles.iconGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Ionicons name="globe" size={22} color="#fff" />
                </LinearGradient>
              </View>
              <View style={styles.contactTextContainer}>
                <Text style={styles.contactLabel}>Website</Text>
                <Text style={styles.contactValue}>{personalInfo.website}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#BDC3C7" />
            </TouchableOpacity>

            {/* Địa chỉ */}
            <View style={styles.contactItem}>
              <View style={styles.iconWrapper}>
                <LinearGradient
                  colors={["#667eea", "#764ba2"]}
                  style={styles.iconGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Ionicons name="location" size={22} color="#fff" />
                </LinearGradient>
              </View>
              <View style={styles.contactTextContainer}>
                <Text style={styles.contactLabel}>Địa chỉ</Text>
                <Text style={styles.contactValue}>{personalInfo.address}</Text>
              </View>
            </View>
          </View>

          {/* Social Links */}
          <View style={styles.socialSection}>
            <Text style={styles.socialTitle}>Mạng xã hội</Text>
            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-facebook" size={24} color="#3b5998" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-linkedin" size={24} color="#0077b5" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-github" size={24} color="#333" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Nút chia sẻ */}
        <TouchableOpacity style={styles.shareButton}>
          <LinearGradient
            colors={["#667eea", "#764ba2"]}
            style={styles.shareButtonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Ionicons name="share-social" size={20} color="#fff" />
            <Text style={styles.shareButtonText}>Chia sẻ danh thiếp</Text>
          </LinearGradient>
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
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },
  avatarCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#F0E6FF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#fff",
    shadowColor: "#667eea",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  statusBadge: {
    position: "absolute",
    bottom: 10,
    right: "30%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  statusDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#2ECC71",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C3E50",
    textAlign: "center",
    marginBottom: 8,
  },
  position: {
    fontSize: 18,
    color: "#667eea",
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 4,
  },
  company: {
    fontSize: 16,
    color: "#95A5A6",
    textAlign: "center",
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#ECF0F1",
    marginVertical: 20,
  },
  contactSection: {
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F8F9FA",
  },
  iconWrapper: {
    marginRight: 15,
  },
  iconGradient: {
    width: 45,
    height: 45,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  contactTextContainer: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 13,
    color: "#95A5A6",
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 15,
    color: "#2C3E50",
    fontWeight: "600",
  },
  socialSection: {
    marginTop: 10,
  },
  socialTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2C3E50",
    marginBottom: 15,
    textAlign: "center",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F8F9FA",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  shareButton: {
    marginTop: 20,
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#667eea",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  shareButtonGradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    gap: 10,
  },
  shareButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
