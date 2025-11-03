import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Animated,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ColorChangerScreen() {
  const router = useRouter();
  const [currentColor, setCurrentColor] = useState("#3498DB");
  const [fadeAnim] = useState(new Animated.Value(1));

  const colors = [
    "#3498DB", // Blue
    "#E74C3C", // Red
    "#2ECC71", // Green
    "#F39C12", // Orange
    "#9B59B6", // Purple
    "#1ABC9C", // Turquoise
    "#E67E22", // Carrot
    "#34495E", // Dark Gray
    "#FF6B9D", // Pink
    "#16A085", // Green Sea
  ];

  const getRandomColor = () => {
    let newColor;
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor);
    return newColor;
  };

  const changeColor = () => {
    // Hiệu ứng fade
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0.7,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    const newColor = getRandomColor();
    setCurrentColor(newColor);
  };

  const getColorName = (color: string) => {
    const colorNames: { [key: string]: string } = {
      "#3498DB": "Xanh Dương",
      "#E74C3C": "Đỏ",
      "#2ECC71": "Xanh Lá",
      "#F39C12": "Cam",
      "#9B59B6": "Tím",
      "#1ABC9C": "Xanh Ngọc",
      "#E67E22": "Cam Đậm",
      "#34495E": "Xám Đen",
      "#FF6B9D": "Hồng",
      "#16A085": "Xanh Biển",
    };
    return colorNames[color] || color;
  };

  const isDark = (color: string) => {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  };

  const textColor = isDark(currentColor) ? "#fff" : "#2C3E50";

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: currentColor, opacity: fadeAnim },
      ]}
    >
      <StatusBar
        barStyle={isDark(currentColor) ? "light-content" : "dark-content"}
      />

      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={textColor} />
      </TouchableOpacity>

      {/* Nội dung */}
      <View style={styles.content}>
        <View style={[styles.colorBox, { borderColor: textColor }]}>
          <Ionicons name="color-palette" size={80} color={textColor} />
        </View>

        <Text style={[styles.title, { color: textColor }]}>Đổi Màu Nền</Text>
        <Text style={[styles.colorName, { color: textColor }]}>
          {getColorName(currentColor)}
        </Text>
        <Text style={[styles.colorCode, { color: textColor, opacity: 0.7 }]}>
          {currentColor}
        </Text>

        {/* Nút đổi màu */}
        <TouchableOpacity
          style={[styles.changeButton, { backgroundColor: textColor }]}
          onPress={changeColor}
          activeOpacity={0.8}
        >
          <Ionicons name="shuffle" size={24} color={currentColor} />
          <Text style={[styles.buttonText, { color: currentColor }]}>
            Đổi màu
          </Text>
        </TouchableOpacity>

        {/* Palette màu */}
        <View style={styles.paletteContainer}>
          <Text
            style={[styles.paletteTitle, { color: textColor, opacity: 0.7 }]}
          >
            Nhấn để đổi màu ngẫu nhiên
          </Text>
          <View style={styles.palette}>
            {colors.map((color, index) => (
              <View
                key={index}
                style={[
                  styles.paletteColor,
                  { backgroundColor: color },
                  currentColor === color && styles.paletteColorActive,
                ]}
              />
            ))}
          </View>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    padding: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  colorBox: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  colorName: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 5,
  },
  colorCode: {
    fontSize: 16,
    marginBottom: 40,
    fontFamily: "monospace",
  },
  changeButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    gap: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  paletteContainer: {
    position: "absolute",
    bottom: 40,
    alignItems: "center",
  },
  paletteTitle: {
    fontSize: 12,
    marginBottom: 10,
  },
  palette: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
  },
  paletteColor: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.3)",
  },
  paletteColorActive: {
    borderWidth: 3,
    borderColor: "#fff",
    transform: [{ scale: 1.2 }],
  },
});
