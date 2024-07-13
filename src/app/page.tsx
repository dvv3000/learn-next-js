'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

interface Todo {
  id: number;
  name: string;
  completed: boolean;
}
export default function Home() {
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      id: 1,
      name: 'Todo 1',
      completed: false
    }
  ]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-my_bg_image">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <h1 className="text-6xl font-bold text-center">Todo App</h1>
      </div>
      <div className="w-1/2 flex justify-between items-end my-10">
        <div className="w-full mx-1">
          <Label htmlFor="input-todo">Input your task here</Label>
          <Input id="input-todo" placeholder="Input your task here" />
        </div>
        <Button type="submit" className="mx-1 bg-green-700" variant="secondary">
          Add
        </Button>
      </div>
      <div className="w-1/2 border-2 border-white my-2"></div>
      <div className="w-1/2">
        {todoList.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center my-1"
          >
            <div className="mx-1">{todo.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
