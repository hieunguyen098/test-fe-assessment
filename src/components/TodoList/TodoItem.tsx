"use client";

import { useState } from "react";
import { Todo, TodoInput } from "@/types/todo";
import { Trash2, Edit2, Check, X } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onUpdate: (id: number, todo: TodoInput) => void;
  onDelete: (id: number) => void;
}

export function TodoItem({
  todo,
  onToggle,
  onUpdate,
  onDelete,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<TodoInput>({
    title: todo.title,
    description: todo.description,
  });

  const handleSave = () => {
    if (!editForm.title.trim()) return;
    onUpdate(todo.id, editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({ title: todo.title, description: todo.description });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="space-y-3">
        <input
          type="text"
          value={editForm.title}
          onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
        />
        <textarea
          value={editForm.description}
          onChange={(e) =>
            setEditForm({ ...editForm, description: e.target.value })
          }
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
        />
        <div className="flex gap-3">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            <Check size={18} />
            Save
          </button>
          <button
            onClick={handleCancel}
            className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            <X size={18} />
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <h3
          className={`text-xl font-semibold ${
            todo.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {todo.title}
        </h3>
      </div>
      {todo.description && (
        <p
          className={`ml-8 text-base ${
            todo.completed ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {todo.description}
        </p>
      )}
      <div className="flex gap-3 mt-3 ml-8">
        <button
          onClick={() => setIsEditing(true)}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
        >
          <Edit2 size={18} />
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="flex items-center gap-1 text-red-600 hover:text-red-700 font-medium"
        >
          <Trash2 size={18} />
          Delete
        </button>
      </div>
    </div>
  );
}
