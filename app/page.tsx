

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-2">
      <main className="flex items-center justify-center py-5">
        <div className="text-center w-xl mb-5">
          <h3 className="text-xl mb-5 font-bold">7- Solution: Frontend Assignment</h3>
           <a href="/auto-delete-todo-list"  className="text-white bg-blue-500 mb-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 p-5 block rounded">Auto Delete To-Do List</a>
           <a href="/group-user"  className="text-white bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 p-5 block rounded">Group User</a>
        
        </div>
      </main>
    </div>
  );
}
