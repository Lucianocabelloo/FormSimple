import React from "react";
import FormCard from "./FormCard";

export const FormList = ({ user }) => {
  return (
    <div>
      {user.map((data, index) => {
        return <FormCard data={data} key={index} />;
      })}
    </div>
  );
};
