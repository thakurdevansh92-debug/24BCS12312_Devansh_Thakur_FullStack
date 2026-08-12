import useUser from "../hooks/useUser";

function Profile() {
  const student = useUser();

  return (
    <div>
      <h1>Student Details</h1>
      <p>Name: {student.name}</p>
      <p>Email: {student.email}</p>
      <p>Year: {student.year}</p>
    </div>
  );
}

export default Profile;