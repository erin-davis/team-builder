import React, {useState} from 'react';
import './App.css';
import MemberForm from "./Components/MemberForm";
import Member from "./Components/Member";

function App() {
  //this is to start off the people in the list that should be showing up under the form
  const [teamMember, setTeamMember] = useState([
    {
      id: 1,
      firstName: "Merle",
      lastName: "Highchurch",
      email: "xtremepan.tastic@bob.org",
      role: {},
      body:`Merle Hitower Highchurch is a player character in The Balance Arc campaign controlled by Clint McElroy.
       He is a beach dwarf cleric and former mercenary soldier with a neutral good alignment who enjoys long walks on the beach.`
    }
  ]);

  const addNewMember = member =>{
    const newMember ={
      id: Date.now(),
      firstName: member.firstName,
      lastName: member.lastName,
      email: member.email,
      role: member.role,
      body: member.body
    };
    setTeamMember([...teamMember, newMember])
  }


  return (
    <div className="App">
    <MemberForm addNewMember={addNewMember} />
        <h1>The Crew So Far</h1>
    <Member teamMember={teamMember} />

    </div>
  );
}

export default App;
