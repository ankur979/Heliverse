import React, { useState } from "react";
import "./modal.css";
import { useDispatch } from "react-redux";
import { editUser } from "../../store/userSlice";

const Modal = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editedValues, setEditedValues] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    gender: user.gender,
    domain: user.domain,
    email: user.email,
  });
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedValues({
      ...editedValues,
      [name]: value,
    });
  };

  const handleSaveChanges = (id) => {
    dispatch(editUser(id, editedValues));
    toggleModal();
  };

  const domain = [
    "Sales",
    "Finance",
    "Marketing",
    "IT",
    "Management",
    "UI Designing",
    "Business Development",
  ];

  return (
    <div>
      <button className="btn draw-border" onClick={toggleModal}>
        Edit
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Edit</h2>
            <div>
              <input
                className="form__input"
                name="first_name"
                type="text"
                value={editedValues.first_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="form__input"
                name="last_name"
                type="text"
                value={editedValues.last_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                name="email"
                className="form__input"
                type="text"
                value={editedValues.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <select
                name="domain"
                id=""
                className="domain"
                value={editedValues.domain}
                onChange={handleChange}
              >
                {domain.map((d) => {
                  return (
                    <option value={d} key={d}>
                      {d}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <select
                name="gender"
                id=""
                className="domain"
                value={editedValues.gender}
                onChange={handleChange}
              >
                {["Male", "Female"].map((g) => {
                  return (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn draw-border" onClick={toggleModal}>
              Close
            </button>
            <button
              className="btn draw-border"
              onClick={() => handleSaveChanges(user._id)}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
