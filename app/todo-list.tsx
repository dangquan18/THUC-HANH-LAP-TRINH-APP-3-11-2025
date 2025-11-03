import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function TodoListScreen() {
  const router = useRouter();
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", text: "Học React Native", completed: false },
    { id: "2", text: "Làm bài tập", completed: true },
  ]);

  const addTodo = () => {
    if (todoText.trim() === "") {
      Alert.alert("Lỗi", "Vui lòng nhập công việc!");
      return;
    }

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: todoText,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setTodoText("");
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string, text: string) => {
    Alert.alert("Xác nhận xóa", `Bạn muốn xóa công việc "${text}"?`, [
      { text: "Hủy", style: "cancel" },
      {
        text: "Xóa",
        style: "destructive",
        onPress: () => setTodos(todos.filter((todo) => todo.id !== id)),
      },
    ]);
  };

  const clearCompleted = () => {
    const completedCount = todos.filter((t) => t.completed).length;
    if (completedCount === 0) {
      Alert.alert("Thông báo", "Không có công việc nào đã hoàn thành!");
      return;
    }

    Alert.alert("Xác nhận", `Xóa ${completedCount} công việc đã hoàn thành?`, [
      { text: "Hủy", style: "cancel" },
      {
        text: "Xóa",
        style: "destructive",
        onPress: () => setTodos(todos.filter((todo) => !todo.completed)),
      },
    ]);
  };

  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    pending: todos.filter((t) => !t.completed).length,
  };

  const renderTodo = ({ item }: { item: Todo }) => (
    <TouchableOpacity
      style={[styles.todoItem, item.completed && styles.todoItemCompleted]}
      onPress={() => toggleTodo(item.id)}
      onLongPress={() => deleteTodo(item.id, item.text)}
      activeOpacity={0.7}
    >
      <View style={styles.todoContent}>
        <View
          style={[styles.checkbox, item.completed && styles.checkboxCompleted]}
        >
          {item.completed && (
            <Ionicons name="checkmark" size={20} color="#fff" />
          )}
        </View>
        <Text
          style={[styles.todoText, item.completed && styles.todoTextCompleted]}
        >
          {item.text}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTodo(item.id, item.text)}
      >
        <Ionicons name="close-circle" size={24} color="#E74C3C" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

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
        <Text style={styles.headerTitle}>Danh sách công việc</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{stats.total}</Text>
          <Text style={styles.statLabel}>Tổng</Text>
        </View>
        <View style={[styles.statItem, styles.statItemMiddle]}>
          <Text style={[styles.statNumber, { color: "#F39C12" }]}>
            {stats.pending}
          </Text>
          <Text style={styles.statLabel}>Chưa xong</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statNumber, { color: "#2ECC71" }]}>
            {stats.completed}
          </Text>
          <Text style={styles.statLabel}>Hoàn thành</Text>
        </View>
      </View>

      {/* Input */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Ionicons
            name="create-outline"
            size={20}
            color="#95A5A6"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Nhập công việc mới..."
            value={todoText}
            onChangeText={setTodoText}
            onSubmitEditing={addTodo}
            returnKeyType="done"
          />
        </View>
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Ionicons name="add-circle" size={50} color="#3498DB" />
        </TouchableOpacity>
      </View>

      {/* Todo List */}
      <FlatList
        data={todos}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="clipboard-outline" size={80} color="#BDC3C7" />
            <Text style={styles.emptyText}>Chưa có công việc nào</Text>
            <Text style={styles.emptySubText}>
              Thêm công việc mới để bắt đầu!
            </Text>
          </View>
        }
      />

      {/* Clear Completed Button */}
      {stats.completed > 0 && (
        <TouchableOpacity style={styles.clearButton} onPress={clearCompleted}>
          <Ionicons name="trash-outline" size={20} color="#E74C3C" />
          <Text style={styles.clearButtonText}>Xóa đã hoàn thành</Text>
        </TouchableOpacity>
      )}
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
  statsContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statItemMiddle: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ECF0F1",
  },
  statNumber: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3498DB",
  },
  statLabel: {
    fontSize: 12,
    color: "#7F8C8D",
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    gap: 10,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
    color: "#2C3E50",
  },
  addButton: {
    shadowColor: "#3498DB",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  listContainer: {
    padding: 20,
    paddingTop: 10,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  todoItemCompleted: {
    opacity: 0.6,
    backgroundColor: "#F8F9FA",
  },
  todoContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#3498DB",
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxCompleted: {
    backgroundColor: "#2ECC71",
    borderColor: "#2ECC71",
  },
  todoText: {
    fontSize: 16,
    color: "#2C3E50",
    flex: 1,
  },
  todoTextCompleted: {
    textDecorationLine: "line-through",
    color: "#95A5A6",
  },
  deleteButton: {
    padding: 5,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#7F8C8D",
    marginTop: 20,
  },
  emptySubText: {
    fontSize: 14,
    color: "#95A5A6",
    marginTop: 8,
  },
  clearButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 12,
    borderRadius: 10,
    gap: 8,
    borderWidth: 1,
    borderColor: "#E74C3C",
  },
  clearButtonText: {
    color: "#E74C3C",
    fontSize: 16,
    fontWeight: "600",
  },
});
