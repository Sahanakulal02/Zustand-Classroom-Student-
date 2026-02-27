"use client";

import { useState } from "react";
import { useStore } from "../store/userStore";

export default function AddStudentForm() {
  const [name, setName] = useState("");
  const addStudent = useStore((state) => state.addStudent);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
      />

      <button
        onClick={() => {
          addStudent(name);
          setName("");
        }}
        className="bg-blue-400 text-white px-4 py-2 ml-2"
      >
        Add
      </button>
    </div>
  );
}