import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsCards from "./DetailsCards";
import { useDispatch, useSelector } from "react-redux";
import { getSingleTean } from "../../store/teamSlice";

const DetailsTeam = () => {
  const dispatch = useDispatch();
  const { team } = useSelector((e) => e.teams);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getSingleTean(id));
  }, []);
  console.log(team)
  return (
    <>
      <div className="details">
        <h1 style={{ textAlign: "center" }}>Team Name: {team?.name}</h1>
        <div className="card-details">
         {team?.members?.map((t)=>{
          return  <DetailsCards user={t} />
         })} 
        </div>
      </div>
    </>
  );
};

export default DetailsTeam;
