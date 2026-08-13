import Parent from "./Parent";
import UserContext from "./UserContext";

function App() {

  const student = {
    name: "Devansh",
    rollNo: "101",
    branch: "CSE"
  };

  return (
    <UserContext.Provider value={student}>
      <h1>Custom Hook Example</h1>
      <Parent />
    </UserContext.Provider>
  );
}

export default App;