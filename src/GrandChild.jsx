import useStudent from "./hooks/useStudent";

function GrandChild() {

  const student = useStudent();

  return (
    <>
      <h4>Grand Child Component</h4>
      <p>Name: {student.name}</p>
      <p>Roll No: {student.rollNo}</p>
      <p>Branch: {student.branch}</p>
    </>
  );
}

export default GrandChild;