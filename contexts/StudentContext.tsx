import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Student {
  id: string;
  name: string;
  age: number;
  studentCode: string;
  major: string;
  email: string;
  phone: string;
}

interface StudentContextType {
  students: Student[];
  addStudent: (student: Omit<Student, "id">) => void;
  deleteStudent: (id: string) => void;
  updateStudent: (id: string, student: Omit<Student, "id">) => void;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

const initialStudents: Student[] = [
  {
    id: "1",
    name: "Nguyễn Văn An",
    age: 20,
    studentCode: "SV001",
    major: "Công nghệ thông tin",
    email: "an.nguyen@email.com",
    phone: "0123456789",
  },
  {
    id: "2",
    name: "Trần Thị Bình",
    age: 21,
    studentCode: "SV002",
    major: "Kế toán",
    email: "binh.tran@email.com",
    phone: "0987654321",
  },
  {
    id: "3",
    name: "Lê Văn Cường",
    age: 19,
    studentCode: "SV003",
    major: "Quản trị kinh doanh",
    email: "cuong.le@email.com",
    phone: "0456789123",
  },
];

export function StudentProvider({ children }: { children: ReactNode }) {
  const [students, setStudents] = useState<Student[]>(initialStudents);

  const addStudent = (newStudent: Omit<Student, "id">) => {
    const student: Student = {
      ...newStudent,
      id: Date.now().toString(),
    };
    setStudents([...students, student]);
  };

  const deleteStudent = (id: string) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const updateStudent = (id: string, updatedStudent: Omit<Student, "id">) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...updatedStudent, id } : student
      )
    );
  };

  return (
    <StudentContext.Provider
      value={{ students, addStudent, deleteStudent, updateStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  const context = useContext(StudentContext);
  if (context === undefined) {
    throw new Error("useStudents must be used within a StudentProvider");
  }
  return context;
}
