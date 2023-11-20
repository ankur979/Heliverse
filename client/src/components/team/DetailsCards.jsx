import React from "react";
import "../card/cards.css";

const DetailsCards = ({ user }) => {
  console.log(user)
  return (
    <div className="card" style={{
      height: "20rem"
    }}>
      <img src={user.avatar} alt="Person" className="card__image" />
      <p className="card__name">{`${user.first_name} ${user.last_name}`}</p>
      <div className="grid-container">
        <div className="grid-child-gender">Gender: {user.gender}</div>
        <div className="grid-child-domain">Domain: {user.domain}</div>
        <div className="grid-child-email">email: {user.email}</div>
        <div className="grid-child-available">available: {user.available?"true":"false"}</div>
      </div>
    </div>
  );
};

export default DetailsCards;
