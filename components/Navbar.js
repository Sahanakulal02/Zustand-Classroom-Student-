"use client";

import { useStore } from "../store/userStore";

export default function Navbar() {
  const total = useStore((state) => state.getTotalStudents());

  return (
    <div className="p-4 bg-blue-500 text-white flex justify-between">
      <h1>Classroom Manager</h1>
      <p>Total Students: {total}</p>
    </div>
  );
}