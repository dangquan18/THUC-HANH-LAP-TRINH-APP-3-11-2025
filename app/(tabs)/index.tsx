import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Xin chào React Native!</Text>
        <Text style={styles.subtitle}>Chọn bài tập muốn xem</Text>
      </View>

      {/* Menu các bài tập */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.menuContainer}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/hello-world")}
        >
          <Ionicons name="rocket" size={30} color="#FF6B9D" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Bài 2</Text>
            <Text style={styles.menuDescription}>Làm quen dự án</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#95A5A6" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/basic-ui")}
        >
          <Ionicons name="logo-react" size={30} color="#61dafb" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Bài 3</Text>
            <Text style={styles.menuDescription}>Giao diện cơ bản</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#95A5A6" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/business-card")}
        >
          <Ionicons name="card" size={30} color="#667eea" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Bài 4</Text>
            <Text style={styles.menuDescription}>Danh thiếp cá nhân</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#95A5A6" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/grade-calculator")}
        >
          <Ionicons name="calculator" size={30} color="#3498DB" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Bài 5</Text>
            <Text style={styles.menuDescription}>Tính điểm trung bình</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#95A5A6" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/color-changer")}
        >
          <Ionicons name="color-palette" size={30} color="#E74C3C" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Bài 6</Text>
            <Text style={styles.menuDescription}>Đổi màu nền</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#95A5A6" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/todo-list")}
        >
          <Ionicons name="list" size={30} color="#2ECC71" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Bài 7</Text>
            <Text style={styles.menuDescription}>Danh sách công việc</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#95A5A6" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/two-screen-home")}
        >
          <Ionicons name="layers" size={30} color="#8E44AD" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Bài 8</Text>
            <Text style={styles.menuDescription}>App 2 màn hình</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#95A5A6" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/tab-navigation")}
        >
          <Ionicons name="menu" size={30} color="#E67E22" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Bài 9</Text>
            <Text style={styles.menuDescription}>Tab Navigation</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#95A5A6" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/students")}
        >
          <Ionicons name="people" size={30} color="#4A90E2" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Bài 10</Text>
            <Text style={styles.menuDescription}>Danh sách sinh viên</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#95A5A6" />
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
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#7F8C8D",
  },
  scrollView: {
    flex: 1,
  },
  menuContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  menuTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 4,
  },
  menuDescription: {
    fontSize: 14,
    color: "#95A5A6",
  },
});
