import React, { useEffect, useState } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/userSlice";
import Cards from "../../components/card/Cards ";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import TeamModal from "../../components/modal/TeamModal";

const Home = ({ search }) => {
  const dispatch = useDispatch();
  const { users, userLength } = useSelector((e) => e.users);
  const [activePage, setActivePage] = useState(1);
  const [selectDomain, setSelectDomain] = useState("");
  const [gender, setGender] = useState("");
  const [teamMembers, setTeamMembers] = useState(new Set([]));

  useEffect(() => {
    dispatch(getUser(activePage, selectDomain, gender, search));
  }, [activePage, selectDomain, gender, search]);

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
    <div className="home-page-container">
      <div className="side-bar">
        <TeamModal teamMembers={Array.from(teamMembers)}  setTeamMembers={setTeamMembers} />
        <div className="select">
          <select
            placeholder="domain"
            onClick={(e) => setSelectDomain(e.target.value)}
          >
            <option value=""> Select domain</option>
            {domain.map((d) => {
              return (
                <option value={d} key={d}>
                  {d}
                </option>
              );
            })}
          </select>
        </div>
        <div className="select">
          <select onClick={(e) => setGender(e.target.value)}>
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="select">
          <Link className="link" to={`/create`}>
            Create User
          </Link>
        </div>
      </div>
      <div className="container">
        {users?.map((user) => {
          return (
            <Cards
              user={user}
              teamMembers={teamMembers}
              setTeamMembers={setTeamMembers}
              key={user._id}
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
    </div>
  );
};

export default Home;
