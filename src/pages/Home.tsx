import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  interface Task {
    id: number;
    title: string;
    done: boolean;
  }

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  function handleAddTask(newTaskTitle: string) {
    const task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((oldState) => [...oldState, task]);

    console.log(tasks);
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map((task) => ({ ...task }));

    const foundTask = updatedTasks.find((task) => task.id === id);

    if (!foundTask) return;

    foundTask.done = !foundTask.done;

    setTasks(updatedTasks);

    console.log(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />
      {/* <Pressable
        onPress={() => handleToggleTaskDone(1658421227484)}
        style={{ width: 200, height: 50, backgroundColor: "red" }}
      >
        <Text>Leonardo ASDASD</Text>
      </Pressable> */}
      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
