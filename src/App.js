import "./App.css";
import Profile from "./Component/Profile";

function App() {
   return(
   <div className="App">
   <h1 style={{border:"5px dotted pink"}}>React-props</h1>
   <Profile fullName="Khemiri Ons " bio="hello everyone" profession="student" handleName="Ons">
    <img src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="person"/>
   </Profile>
   </div>
   );
  }
export default App;
