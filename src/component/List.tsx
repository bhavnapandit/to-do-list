"use client"
import React from "react";

type TodoTtemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo:(id:string,complete:boolean)=>void
  deleteData:(id:string)=>void
};

function List({ id, title, complete,toggleTodo,deleteData}: TodoTtemProps) {
    
  return (
    <tr>
      <td className="border border-slate-300 px-6 py-3 text-center align-middle">{title}</td>
      <td className="border border-slate-300 px-1 py-3">
        <input id={id} type="checkbox" className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={e=>toggleTodo(id,e.target.checked)}/>
      </td>
      <td className="border border-slate-300 px-1 py-3 "><button
           onClick={e=>deleteData(id)}
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Delete
          </button></td>
    </tr>
  );
}

export default List;
