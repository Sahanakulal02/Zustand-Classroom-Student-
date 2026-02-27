import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      // 🧑 Students
      students: [],

      // 🏫 Classrooms
      classrooms: [
        { id: 1, name: "Class A", capacity: 5 },
        { id: 2, name: "Class B", capacity: 5 },
      ],

      selectedClassroomId: 1,

      // ➕ Add Student
      addStudent: (name) => {
        const { students, selectedClassroomId, classrooms } = get();

        const classroom = classrooms.find(
          (c) => c.id === selectedClassroomId
        );

        const studentsInClass = students.filter(
          (s) => s.classroomId === selectedClassroomId
        );

        if (studentsInClass.length >= classroom.capacity) {
          alert("Classroom is full!");
          return;
        }

        set({
          students: [
            ...students,
            {
              id: Date.now(),
              name,
              classroomId: selectedClassroomId,
              attendance: "present",
            },
          ],
        });
      },

      // ❌ Remove Student
      removeStudent: (id) =>
        set((state) => ({
          students: state.students.filter((s) => s.id !== id),
        })),

      // 🔁 Move Student
      moveStudent: (id, newClassroomId) => {
        const { students, classrooms } = get();

        const studentsInTarget = students.filter(
          (s) => s.classroomId === newClassroomId
        );

        const targetClass = classrooms.find(
          (c) => c.id === newClassroomId
        );

        if (studentsInTarget.length >= targetClass.capacity) {
          alert("Target classroom full!");
          return;
        }

        set({
          students: students.map((s) =>
            s.id === id ? { ...s, classroomId: newClassroomId } : s
          ),
        });
      },

      // 📌 Select Classroom
      setSelectedClassroom: (id) =>
        set({ selectedClassroomId: id }),

      // 📊 Derived State
      getTotalStudents: () => get().students.length,

      getStudentsByClassroom: (id) =>
        get().students.filter((s) => s.classroomId === id),
    }),
    {
      name: "classroom-storage",
    }
  )
);