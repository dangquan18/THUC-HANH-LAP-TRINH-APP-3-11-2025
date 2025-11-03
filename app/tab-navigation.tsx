import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type TabType = "home" | "search" | "settings";

export default function TabNavigationScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("home");

  // Home Tab Content
  const HomeContent = () => (
    <ScrollView contentContainerStyle={styles.tabContent}>
      <View style={styles.iconCircle}>
        <Ionicons name="home" size={60} color="#3498DB" />
      </View>
      <Text style={styles.tabTitle}>Trang chủ</Text>
      <Text style={styles.tabDescription}>
        Chào mừng bạn đến với ứng dụng! Đây là trang chủ với các thông tin
        chính.
      </Text>

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Ionicons name="notifications" size={30} color="#E74C3C" />
          <Text style={styles.cardTitle}>Thông báo</Text>
          <Text style={styles.cardNumber}>5 mới</Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="chatbubbles" size={30} color="#2ECC71" />
          <Text style={styles.cardTitle}>Tin nhắn</Text>
          <Text style={styles.cardNumber}>12</Text>
        </View>
      </View>

      <View style={styles.infoBox}>
        <Ionicons name="information-circle" size={24} color="#3498DB" />
        <Text style={styles.infoText}>
          Sử dụng các tab bên dưới để điều hướng giữa các màn hình
        </Text>
      </View>
    </ScrollView>
  );

  // Search Tab Content
  const SearchContent = () => (
    <ScrollView contentContainerStyle={styles.tabContent}>
      <View style={styles.iconCircle}>
        <Ionicons name="search" size={60} color="#9B59B6" />
      </View>
      <Text style={styles.tabTitle}>Tìm kiếm</Text>
      <Text style={styles.tabDescription}>
        Tìm kiếm nội dung, người dùng, và nhiều thứ khác trong ứng dụng.
      </Text>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#95A5A6" />
        <Text style={styles.searchPlaceholder}>Tìm kiếm...</Text>
      </View>

      <View style={styles.popularSection}>
        <Text style={styles.popularTitle}>Tìm kiếm phổ biến</Text>
        {[
          "React Native",
          "TypeScript",
          "Expo Router",
          "Mobile Development",
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.popularItem}>
            <Ionicons name="trending-up" size={18} color="#9B59B6" />
            <Text style={styles.popularText}>{item}</Text>
            <Ionicons name="chevron-forward" size={18} color="#BDC3C7" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );

  // Settings Tab Content
  const SettingsContent = () => (
    <ScrollView contentContainerStyle={styles.tabContent}>
      <View style={styles.iconCircle}>
        <Ionicons name="settings" size={60} color="#E67E22" />
      </View>
      <Text style={styles.tabTitle}>Cài đặt</Text>
      <Text style={styles.tabDescription}>
        Quản lý tài khoản và cài đặt ứng dụng của bạn.
      </Text>

      <View style={styles.settingsSection}>
        <Text style={styles.sectionLabel}>Tài khoản</Text>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="person-circle" size={24} color="#3498DB" />
            <Text style={styles.settingText}>Thông tin cá nhân</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#BDC3C7" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="lock-closed" size={24} color="#E74C3C" />
            <Text style={styles.settingText}>Bảo mật</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#BDC3C7" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="notifications" size={24} color="#F39C12" />
            <Text style={styles.settingText}>Thông báo</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#BDC3C7" />
        </TouchableOpacity>

        <Text style={[styles.sectionLabel, { marginTop: 20 }]}>Khác</Text>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="help-circle" size={24} color="#2ECC71" />
            <Text style={styles.settingText}>Trợ giúp</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#BDC3C7" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="information-circle" size={24} color="#9B59B6" />
            <Text style={styles.settingText}>Về ứng dụng</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#BDC3C7" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

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
        <Text style={styles.headerTitle}>Tab Navigation</Text>
      </View>

      {/* Tab Content */}
      <View style={styles.contentContainer}>
        {activeTab === "home" && <HomeContent />}
        {activeTab === "search" && <SearchContent />}
        {activeTab === "settings" && <SettingsContent />}
      </View>

      {/* Bottom Tabs */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab("home")}
        >
          <Ionicons
            name={activeTab === "home" ? "home" : "home-outline"}
            size={28}
            color={activeTab === "home" ? "#3498DB" : "#95A5A6"}
          />
          <Text
            style={[
              styles.tabLabel,
              activeTab === "home" && styles.tabLabelActive,
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab("search")}
        >
          <Ionicons
            name={activeTab === "search" ? "search" : "search-outline"}
            size={28}
            color={activeTab === "search" ? "#9B59B6" : "#95A5A6"}
          />
          <Text
            style={[
              styles.tabLabel,
              activeTab === "search" && styles.tabLabelActive,
            ]}
          >
            Search
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab("settings")}
        >
          <Ionicons
            name={activeTab === "settings" ? "settings" : "settings-outline"}
            size={28}
            color={activeTab === "settings" ? "#E67E22" : "#95A5A6"}
          />
          <Text
            style={[
              styles.tabLabel,
              activeTab === "settings" && styles.tabLabelActive,
            ]}
          >
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },
  header: {
    backgroundColor: "#2C3E50",
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
  contentContainer: {
    flex: 1,
  },
  tabContent: {
    padding: 20,
    paddingBottom: 40,
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  tabTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C3E50",
    textAlign: "center",
    marginBottom: 10,
  },
  tabDescription: {
    fontSize: 15,
    color: "#7F8C8D",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 25,
  },
  cardsContainer: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 14,
    color: "#7F8C8D",
    marginTop: 10,
    marginBottom: 5,
  },
  cardNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  infoBox: {
    flexDirection: "row",
    backgroundColor: "#E8F4FD",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    gap: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: "#3498DB",
    lineHeight: 20,
  },
  searchBox: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    gap: 10,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchPlaceholder: {
    fontSize: 16,
    color: "#95A5A6",
  },
  popularSection: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  popularTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 15,
  },
  popularItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F8F9FA",
    gap: 12,
  },
  popularText: {
    flex: 1,
    fontSize: 15,
    color: "#2C3E50",
  },
  settingsSection: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#95A5A6",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F8F9FA",
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  settingText: {
    fontSize: 16,
    color: "#2C3E50",
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingBottom: 25,
    borderTopWidth: 1,
    borderTopColor: "#E8E8E8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 5,
  },
  tabLabel: {
    fontSize: 12,
    color: "#95A5A6",
    marginTop: 4,
  },
  tabLabelActive: {
    color: "#2C3E50",
    fontWeight: "600",
  },
});
