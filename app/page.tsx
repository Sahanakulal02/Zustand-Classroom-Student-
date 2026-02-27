import Navbar from "../components/Navbar";
import ClassroomList from "../components/Classroom";
import StudentList from "../components/StudentList";
import AddStudentForm from "../components/AddStudentForm";

export default function Page() {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <ClassroomList />
        <div className="flex-1">
          <AddStudentForm />
          <StudentList />
        </div>
      </div>
    </div>
  );
}