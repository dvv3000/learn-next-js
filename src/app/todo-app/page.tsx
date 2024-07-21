'use client';
import AddTodo, { AddTodoHandle } from '@/components/todo/add-todo';
import TodoList from '@/components/todo/todo-list';
import { useRef, useState } from 'react';

export interface Todo {
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
  const [inputValue, setInputValue] = useState<string>('');
  const inputEl = useRef<AddTodoHandle>(null);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }
  const handleAddTodo = () => {
    if (inputValue) {
      setTodoList([...todoList, {
        id: todoList.length + 1,
        name: inputValue,
        completed: false
      }]);
      setInputValue('');
      inputEl.current?.focusInput();
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-my_bg_image">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <h1 className="text-6xl font-bold text-center">Todo App</h1>
      </div>
      <AddTodo inputValue={inputValue} handleChangeInput={handleChangeInput} handleAddTodo={handleAddTodo} ref={inputEl} />
      <div className="w-1/2 border-2 border-white my-2"></div>
      <TodoList todoList={todoList} />
    </main>
  );
}
