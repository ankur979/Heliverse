import React from "react";
import "./cards.css";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/userSlice";
import Modal from "../modal/Modal";

const Cards = ({ user, teamMembers, setTeamMembers }) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <img src={user.avatar} alt="Person" className="card__image" />
      <p className="card__name">{`${user.first_name} ${user.last_name}`}</p>
      <div className="grid-container">
        <div className="grid-child-gender">Gender: {user.gender}</div>
        <div className="grid-child-domain">Domain: {user.domain}</div>
        <div className="grid-child-email">email: {user.email}</div>
        <div className="grid-child-available">available: {user.available?"true":"false"}</div>
      </div>
      <button
        className="btn draw-border"
        onClick={() => dispatch(deleteUser(user._id))}
      >
        Delete
      </button>
      <Modal user={user} />
      <button
        className="btn draw-border"
        onClick={() => setTeamMembers(new Set([...teamMembers, user._id]))}
      >
        Add Member
      </button>
    </div>
  );
};

export default Cards;
