import React, { useState } from "react";

const MemberForm = props =>{

  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    body: ""
  });

  const formChange = e =>{
    setMember({...member, [e.target.name]: e.target.value});
    console.log(e.target.value);
  }

  const submitForm = e =>{
    e.preventDefault();
    setMember({
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      body: ""
    });
    props.addNewMember(member);
  };

  return (
    <form className="actual-form" onSubmit={submitForm}>
      <label htmlFor="first name">First Name: </label>
      <input
      id="first name"
      type="text"
      placeholder="First Name"
      name="firstName"
    //  value={member.firstName}
      onChange={formChange}
      />
      <label htmlFor="last name">Last Name: </label>
      <input
      id="last name"
      type="text"
      placeholder="Last Name"
      name="lastName"
    //  value={member.lastName}
      onChange={formChange}
      />
      <label htmlFor="e-mail">E-mail: </label>
      <input
      id="e-mail"
      type="email"
      placeholder="E-mail"
      name="email"
      value={member.email}
      onChange={formChange}
      />
      <label htmlFor="role">Role:
        <select id="role" value={member.state} onChange={formChange}>
          <option>Please pick a role</option>
          <option value="Twin" onChange={formChange}>A Twin</option>
          <option value="Lover" onChange={formChange}>The Lover</option>
          <option value="Protector" onChange={formChange}>The Protector</option>
          <option value="Lonely Journal-keeper" onChange={formChange}>The Lonely Journal-keeper</option>
          <option value="Peacemaker" onChange={formChange}>The Peacemaker</option>
          <option value="Wordless" onChange={formChange}>The Wordless One</option>
          <option value="Reclaimer" onChange={formChange}>Reclaimer</option>
          <option value="Seeker" onChange={formChange}>Seeker</option>
          <option value="Regulator" onChange={formChange}>Regulator</option>
          <option value="Director" onChange={formChange}>The Director</option>
        </select>
      </label>
      <label htmlFor="body">About You? </label>
      <textarea
      id="body"
      name="body"
      value={member.body}
      placeholder="Tell us a little about yourself..."
      onChange={formChange}
      />
      <button type="submit" className="submit-button">Add New Member</button>
    </form>
  );
}

export default MemberForm;
