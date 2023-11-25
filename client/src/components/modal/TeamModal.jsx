import React, { useState } from "react";
import "./modal.css";
import { useDispatch } from "react-redux";
import { createTeam } from "../../store/teamSlice";

const TeamModal = ({ teamMembers, setTeamMembers }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSaveChanges = async () => {
    const data = {
      name: name,
      teamMembers,
    };
    const success = await dispatch(createTeam(data));
    if (!success) return;
    setTeamMembers(new Set([]));
    toggleModal();
    setName("");
  };

  return (
    <div>
      <button
        className="btn draw-border"
        style={{
          margin: "0",
          width: "12rem",
          display: teamMembers.length <= 0 && "none",
          textDecoration: "none",
          position: "fixed",
          right: 0,
        }}
        onClick={toggleModal}
      >
        Add teams
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Team Member</h2>
            <div>
              <input
                className="form__input"
                name="first_name"
                type="text"
                value={name}
                placeholder="Team name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button className="btn draw-border" onClick={toggleModal}>
              Close
            </button>
            <button
              className="btn draw-border"
              onClick={() => handleSaveChanges()}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamModal;
