"use client";

import { useStore } from "../store/userStore";

export default function Classroom() {
  const { classrooms, setSelectedClassroom, selectedClassroomId } =
    useStore();

  return (
    <div className="p-4">
      <h2>Classrooms</h2>
      {classrooms.map((c) => (
        <button
          key={c.id}
          onClick={() => setSelectedClassroom(c.id)}
          className={`block p-2 my-2 ${
            selectedClassroomId === c.id ? "bg-green-300" : "bg-gray-200"
          }`}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}