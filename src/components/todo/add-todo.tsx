import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React, { Ref, forwardRef, useImperativeHandle, useRef } from "react";

export interface AddTodoHandle {
  focusInput: () => void;
}
interface AddTodoProps {
  inputValue: string;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: () => void;
}
const AddTodo = (
  { inputValue, handleChangeInput, handleAddTodo }: AddTodoProps,
  ref: Ref<AddTodoHandle>
) => {
  const inputEl = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputEl.current?.focus();
    },
  }));
  return (
    <div className="w-1/2 flex justify-between items-end my-10">
      <div className="w-full mx-1">
        <Label htmlFor="input-todo">Input your task here</Label>
        <Input
          ref={inputEl}
          id="input-todo"
          value={inputValue}
          placeholder="Input your task here"
          onChange={handleChangeInput}
        />
      </div>
      <Button
        type="submit"
        className="mx-1 bg-green-700"
        variant="secondary"
        onClick={handleAddTodo}
      >
        Add
      </Button>
    </div>
  );
};

export default forwardRef(AddTodo);
