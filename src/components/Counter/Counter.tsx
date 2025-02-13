"use client";
import { useCounter } from "@/hooks/useCounter";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon, RotateCcwIcon } from "lucide-react";

interface CounterProps {
  initialValue?: number;
}

export function Counter({ initialValue = 0 }: CounterProps) {
  const { count, increment, decrement, reset, mounted } =
    useCounter(initialValue);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <div className="text-4xl font-bold">{count}</div>

      <div className="flex gap-4">
        <Button
          onClick={decrement}
          variant="outline"
          size="lg"
          className="w-24"
        >
          <MinusIcon className="h-4 w-4 mr-2" />
          Dec
        </Button>

        <Button
          onClick={increment}
          variant="outline"
          size="lg"
          className="w-24"
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          Inc
        </Button>

        <Button
          onClick={reset}
          variant="destructive"
          size="lg"
          className="w-24"
        >
          <RotateCcwIcon className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>

      <div className="text-sm text-gray-500 mt-4">
        Count persists after page reload!
      </div>
    </div>
  );
}
