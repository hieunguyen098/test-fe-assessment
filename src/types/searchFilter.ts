export interface BaseItem {
  [key: string]: string;
}

export interface SearchFilterProps<T extends BaseItem> {
  items: T[];
  renderItem?: (item: T) => React.ReactNode;
  placeholder?: string;
  debounceTime?: number;
}
