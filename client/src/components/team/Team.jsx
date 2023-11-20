import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeam } from "../../store/teamSlice";
import "./team.css";
import { Link } from "react-router-dom";

const Team = () => {
  const dispatch = useDispatch();
  const { teams } = useSelector((e) => e.teams);

  useEffect(() => {
    dispatch(getTeam());
  }, []);
  console.log(teams);
  return (
    <table class="rwd-table">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Details</th>
        </tr>
        {teams.map((t) => {
          return (
            <tr>
              <td data-th="Supplier Code" style={{width: "14rem"}}>{t.name}</td>
              <td>
                {" "}
                <Link
                  className="btn draw-border"
                  style={{textDecoration: "none"}}
                  to={`/teamDetailes/${t._id}`}
                >
                  View
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Team;
