import React from "react";

const Member = props =>{
  return (
    <div className="member-list">
      {props.teamMember.map(member =>(
        <div className="member" key={member.id}>
          <h2>{`${member.firstName} ${member.lastName}`}</h2>
          <p>E-mail: {member.email}</p>
          <p>Role: {member.role}</p>
          <p>Self description: {member.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Member;
