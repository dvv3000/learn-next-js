import { Todo } from "@/app/page";
import React from "react";

export default function TodoList({ todoList }: { todoList: Todo[] }) {
  return (
    <div className="w-1/2">
      {todoList.map((todo) => (
        <div key={todo.id} className="flex justify-between items-center my-1">
          <div className="mx-1">{todo.name}</div>
        </div>
      ))}
    </div>
  );
}
