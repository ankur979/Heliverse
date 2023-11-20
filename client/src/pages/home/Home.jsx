import React, { useEffect, useState } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/userSlice";
import Cards from "../../components/card/Cards ";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import ModalTeam from "../../components/modal/ModalTeam";

const Home = ({search}) => {
  const dispatch = useDispatch();
  const { users, userLength } = useSelector((e) => e.users);
  const [activePage, setActivePage] = useState(1);
  const [selectDomain, setSelectDomain] = useState("");
  const [gender, setGender] = useState("");
  const [teamMembers, setTeamMembers] = useState(new Set([]));

  useEffect(() => {
    dispatch(getUser(activePage, selectDomain, gender,search));
  }, [activePage, selectDomain, gender,search]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
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
    <>
      <div class="select">
        <select
          placeholder="domain"
          onClick={(e) => setSelectDomain(e.target.value)}
        >
          <option value=""> select domain</option>
          {domain.map((d) => {
            return (
              <option value={d} key={d}>
                {d}
              </option>
            );
          })}
        </select>
        <select onClick={(e) => setGender(e.target.value)}>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <Link
          className="btn draw-border"
          style={{ textDecoration: "none", margin: "0", width: "27rem" }}
          to={`/create`}
        >
          Create New User
        </Link>
        <ModalTeam teamMembers={Array.from(teamMembers)} />
      </div>
      <div className="container">
        {users.map((user) => {
          return (
            <Cards
              user={user}
              teamMembers={teamMembers}
              setTeamMembers={setTeamMembers}
            />
          );
        })}
        <Pagination
          className="pagination"
          activePage={activePage}
          itemsCountPerPage={20}
          totalItemsCount={userLength}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Home;
