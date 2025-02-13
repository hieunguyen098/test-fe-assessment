import React, { useState, useCallback, useMemo } from "react";
import { debounce } from "lodash";
import { BaseItem, SearchFilterProps } from "@/types/searchFilter";

export function SearchFilter<T extends BaseItem>({
  items = [],
  renderItem,
  placeholder = "Search...",
  debounceTime = 300,
}: SearchFilterProps<T>) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<T[]>(items);

  const debouncedSearch = useMemo(
    () =>
      debounce((term: string) => {
        const filtered = items.filter((item) =>
          Object.values(item)
            .join(" ")
            .toLowerCase()
            .includes(term.toLowerCase())
        );
        setFilteredItems(filtered);
      }, debounceTime),
    [items, debounceTime]
  );

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const term = e.target.value;
      setSearchTerm(term);
      debouncedSearch(term);
    },
    [debouncedSearch]
  );

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* Search input */}
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder={placeholder}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          aria-label="Search"
        />
      </div>

      {/* Results count */}
      <div className="mb-4 text-sm text-gray-600">
        Found {filteredItems.length}{" "}
        {filteredItems.length === 1 ? "result" : "results"}
      </div>

      {/* Results list */}
      <div className="space-y-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 hover:bg-gray-50"
            >
              {renderItem ? renderItem(item) : JSON.stringify(item)}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-8">
            No results found for &quot;{searchTerm}&quot;
          </div>
        )}
      </div>
    </div>
  );
}
