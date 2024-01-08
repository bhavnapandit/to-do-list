"use client"
import React from "react";

type TodoTtemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void
  // deleteData:(id:string)=>void
};

function List({ id, title, complete, toggleTodo }: TodoTtemProps) {

  return (
    <tr>
      <td className="border border-slate-300 px-6 py-3 text-center align-middle">{title}</td>
      <td className="border border-slate-300 px-1 py-3">
        <input id={id} type="checkbox" className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={e => toggleTodo(id, e.target.checked)} />
      </td>
    </tr>
  );
}

export default List;
