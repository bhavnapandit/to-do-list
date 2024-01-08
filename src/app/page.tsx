import Image from 'next/image'
import Link from 'next/link'
import { prisma } from './db';
import List from '@/component/List';
import Router, { useRouter } from 'next/navigation';


function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({ where: { id }, data: { complete } })
}
// async function deleteData(id:string) {
//   "use server"
//   await prisma.todo.delete({
//         where: {
//          id:id
//         },
//     });
//   // location.reload()
      
// }

export default async function Home() {
 
  const todos = await getTodos()
  
  return (
   <>
   <header className='flex justify-between'>
    <h1 className='text-2xl'>Todos</h1>
    <Link className='border border-slate-300 test-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none' href="/new">New</Link>
   </header>
   <div className="relative overflow-x-auto shadow-md sm:rounded-lg container py-9">
   <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
  <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
    <tr>
      <th className="border border-slate-300 px-6 py-3 bg-slate-500 text-left">Title</th>
      <th className="border border-slate-300 px-1 py-3 bg-slate-500 text-left">Status</th>
    </tr>
  </thead>
  <tbody>
    {todos.map(todo=> (
      <List key={todo.id} {...todo} toggleTodo={toggleTodo} />
    ))}
  </tbody>
</table>
   </div>
   </>
  )
}
