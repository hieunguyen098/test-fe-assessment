import { useCallback, useEffect, useState } from "react";

export const useCounter = (initialValue: number = 0) => {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    setMounted(true);
    const savedCount = localStorage.getItem("counter");
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("counter", count.toString());
    }
  }, [count, mounted]);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return {
    count,
    increment,
    decrement,
    reset,
    mounted,
  };
};
