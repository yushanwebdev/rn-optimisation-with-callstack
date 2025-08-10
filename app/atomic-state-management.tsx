import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AtomicStateManagement() {
  console.log("🔄 Root App component rendered");

  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React Native", completed: false },
    { id: 2, text: "Build an app", completed: true },
    { id: 3, text: "Write documentation", completed: false },
  ]);

  const handleToggleTodo = (id: number) => {
    console.log("💫 Toggling todo:", id);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleFilterChange = (newFilter: string) => {
    console.log("🔍 Changing filter to:", newFilter);
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List (useState)</Text>

      <View style={styles.filters}>
        {["all", "active", "completed"].map((filterType) => (
          <FilterMenuItem
            key={filterType}
            title={filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            filterType={filterType}
            currentFilter={filter}
            onFilterChange={handleFilterChange}
          />
        ))}
      </View>

      <View style={styles.todoList}>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} item={todo} onToggle={handleToggleTodo} />
        ))}
      </View>
    </View>
  );
}

interface IFilterMenuItemProps {
  title: string;
  filterType: string;
  currentFilter: string;
  onFilterChange: (newFilter: string) => void;
}

function FilterMenuItem({
  title,
  filterType,
  currentFilter,
  onFilterChange,
}: IFilterMenuItemProps) {
  console.log(`FilterMenuItem (${title}) rendered`);

  return (
    <TouchableOpacity
      style={[
        styles.filterButton,
        currentFilter === filterType && styles.activeFilter,
      ]}
      onPress={() => onFilterChange(filterType)}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

interface ITodoItemProps {
  item: { id: number; text: string; completed: boolean };
  onToggle: (id: number) => void;
}

function TodoItem({ item, onToggle }: ITodoItemProps) {
  console.log(`TodoItem (${item.text}) rendered`);

  return (
    <TouchableOpacity style={styles.todoItem} onPress={() => onToggle(item.id)}>
      <Text style={item.completed ? styles.completed : null}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  filters: {
    flexDirection: "row",
    marginBottom: 20,
  },
  filterButton: {
    padding: 10,
    marginRight: 10,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
  activeFilter: {
    backgroundColor: "#007AFF",
  },
  todoList: {
    gap: 10,
  },
  todoItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});
