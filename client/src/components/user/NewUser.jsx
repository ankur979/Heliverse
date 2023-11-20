import React, { useState } from "react";
import "../modal/modal.css";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
  const [editedValues, setEditedValues] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    domain: "",
    email: "",
    id: "",
    available: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedValues({
      ...editedValues,
      [name]: value,
    });
  };

  const handleSaveChanges = async () => {
  await dispatch(createUser(editedValues));
    navigate("/");
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
    <div className="create">
      <div className="modal-content">
        <div>
          <input
            className="form__input"
            name="id"
            type="number"
            value={editedValues.id}
            onChange={handleChange}
            placeholder="Id"
          />
        </div>
        <div>
          <input
            className="form__input"
            name="first_name"
            type="text"
            value={editedValues.first_name}
            onChange={handleChange}
            placeholder="First name"
          />
        </div>
        <div>
          <input
            className="form__input"
            name="last_name"
            type="text"
            value={editedValues.last_name}
            onChange={handleChange}
            placeholder="Last name"
          />
        </div>
        <div>
          <input
            name="email"
            className="form__input"
            type="text"
            value={editedValues.email}
            onChange={handleChange}
            placeholder="Email"
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
            <option value={""}>select domain</option>
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
            <option value={""}>select gender</option>
            {["Male", "Female", "Other"].map((g) => {
              return (
                <option key={g} value={g}>
                  {g}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <select
            name="available"
            id=""
            className="domain"
            value={editedValues.available}
            onChange={handleChange}
          >
            <option value={""}>select available</option>
            {["true", "false"].map((g) => {
              return (
                <option key={g} value={g}>
                  {g}
                </option>
              );
            })}
          </select>
        </div>
        <button className="btn draw-border" onClick={() => handleSaveChanges()}>
          Add User
        </button>
      </div>
    </div>
  );
};

export default NewUser;
