import Link from 'next/link';

export interface Todo {
  id: number;
  name: string;
  completed: boolean;
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <h1 className="text-8xl font-italic">Trang chủ đây nhé</h1>
      </div>
      <ul >
        <li>
          <Link href="/todo-app">Todo App</Link>
        </li>
        <li>
          <Link href="/auth/login">Login</Link>
        </li>
        <li>
          <Link href="/auth/register">Register</Link>
        </li>
      </ul>
    </main>
  );
}
