import React from "react";
import FormCard from "./FormCard";

export const FormList = ({ user }) => {

    const key = user.length > 0 ? user[0].codigo : null;
    console.log(key)

  return (
    <div className="flex justify-evenly flex-wrap gap-5">
      {user.map((data,index) => {
        return <FormCard data={data} key={key} />;
      })}
    </div>
  );
};
