"use client";

import { SearchFilter } from "@/components/SearchFilter/SearchFilter";
import { BaseItem } from "@/types/searchFilter";

interface Course extends BaseItem {
  id: string;
  title: string;
  category: string;
}

export default function Task2() {
  const sampleItems: Course[] = [
    { id: "1", title: "React Basics", category: "Frontend" },
    { id: "2", title: "Node.js Fundamentals", category: "Backend" },
    { id: "3", title: "CSS Grid Layout", category: "Frontend" },
    { id: "4", title: "Database Design", category: "Backend" },
    { id: "5", title: "REST API Development", category: "Backend" },
  ];

  const renderItem = (item: Course) => (
    <div>
      <h3 className="font-medium text-lg">{item.title}</h3>
      <p className="text-sm text-gray-600">{item.category}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Course Search</h1>
        <SearchFilter<Course>
          items={sampleItems}
          renderItem={renderItem}
          placeholder="Search courses..."
          debounceTime={400}
        />
      </div>
    </div>
  );
}
