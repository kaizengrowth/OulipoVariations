import DynamicForm from './components/DynamicForm.client';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-24">
      <div className="w-full max-w-5xl text-center">
        <h1 className="text-2xl border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border bg-gray-200 p-4 dark:bg-zinc-800/30">
          Oulipo Variations
        </h1>
      </div>

      <div className="w-full md:w-3/4 mx-auto">
        <DynamicForm />
      </div>
    </main>
  );
}