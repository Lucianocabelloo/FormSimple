import React from "react";
import FormCard from "./FormCard";

export const FormList = ({ user }) => {


  return (
    <div className="flex justify-evenly flex-wrap gap-5">
      {user.map((data,index) => {
        return <FormCard data={data} key={index} />;
      })}
    </div>
  );
};
