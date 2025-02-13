"use client";

import { useState } from "react";
import { TodoInput } from "@/types/todo";
import { AlertCircle, PlusCircle } from "lucide-react";

interface TodoFormProps {
  onSubmit: (todo: TodoInput) => void;
  initialValues?: TodoInput;
}

interface FormErrors {
  title?: string;
  description?: string;
}

export function TodoForm({
  onSubmit,
  initialValues = { title: "", description: "" },
}: TodoFormProps) {
  const [todo, setTodo] = useState<TodoInput>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!todo.title.trim()) {
      newErrors.title = "Task title is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched on submit attempt
    setTouched({ title: true });

    if (validateForm()) {
      onSubmit(todo);
      setTodo({ title: "", description: "" });
      setErrors({});
      setTouched({});
    }
  };

  const handleBlur = (field: keyof TodoInput) => {
    setTouched({ ...touched, [field]: true });
    validateForm();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof TodoInput
  ) => {
    const value = e.target.value;
    setTodo({ ...todo, [field]: value });

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-12" noValidate>
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={todo.title}
            onChange={(e) => handleChange(e, "title")}
            onBlur={() => handleBlur("title")}
            className={`w-full p-4 border rounded-lg outline-none transition-all text-lg
            ${
              errors.title && touched.title
                ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-200"
                : "border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
            }`}
          />
          {errors.title && touched.title && (
            <div className="flex items-center gap-1 text-red-600 text-sm pl-1">
              <AlertCircle size={16} />
              <span>{errors.title}</span>
            </div>
          )}
        </div>

        <textarea
          placeholder="Add details (optional)"
          value={todo.description}
          onChange={(e) => handleChange(e, "description")}
          className="p-4 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition-all min-h-[120px] text-base"
        />

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <PlusCircle size={20} />
          Add Task
        </button>
      </div>
    </form>
  );
}
