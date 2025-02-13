"use client";

import { useTodos } from "@/hooks/useTodos";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const { todos, addTodo, toggleTodo, updateTodo, deleteTodo } = useTodos();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center font-abril">
        Task Master
      </h1>

      <TodoForm onSubmit={addTodo} />

      <div className="space-y-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`p-5 border-2 rounded-lg transition-all ${
              todo.completed
                ? "bg-gray-50 border-gray-200"
                : "bg-white border-gray-200 hover:border-blue-200"
            }`}
          >
            <TodoItem
              todo={todo}
              onToggle={toggleTodo}
              onUpdate={updateTodo}
              onDelete={deleteTodo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
