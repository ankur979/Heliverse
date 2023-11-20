import React, { useEffect, useState } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/userSlice";
import Cards from "../../components/card/Cards ";
import Pagination from "react-js-pagination";

const Home = () => {
  const dispatch = useDispatch();
  const { users, userLength } = useSelector((e) => e.users);
  const [activePage, setActivePage] = useState(1);
  const [selectDomain, setSelectDomain] = useState("");
  const [gender, setGender] = useState("");
  useEffect(() => {
    dispatch(getUser(activePage, selectDomain, gender));
  }, [activePage, selectDomain, gender]);

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
            return <option value={d}>{d}</option>;
          })}
        </select>
        <select onClick={(e) => setGender(e.target.value)}>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="container">
        {users.map((user) => {
          return <Cards user={user} />;
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
