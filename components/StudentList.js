"use client";

import { useStore } from "../store/userStore";

export default function StudentList() {
  const { students, removeStudent, selectedClassroomId } = useStore();

  const classroomStudents = students.filter(
    (s) => s.classroomId === selectedClassroomId
  );

  return (
    <div className="p-4">
      <h2>Students</h2>
      {classroomStudents.length === 0 ? (
        <p>No students in this classroom</p>
      ) : (
        <ul>
          {classroomStudents.map((student) => (
            <li
              key={student.id}
              className="flex justify-between items-center p-2 border-b"
            >
              <span>{student.name}</span>
              <button
                onClick={() => removeStudent(student.id)}
                className="bg-red-500 text-white px-2 py-1"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
