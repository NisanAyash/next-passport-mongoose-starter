import React from "react";
import useFetch from "../hooks/useFetch";

const secret = () => {
  const { response, error, isLoading } = useFetch(
    "http://localhost:3000/api/auth/user",
    {}
  );

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!response) {
    // console.log(response, error, isLoading);
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {response && (
        <div>
          <h1>Profile</h1>
          <p>_id: {response.user._id}</p>
          <p>fullname: {response.user.fullname}</p>
          <p>email: {response.user.email}</p>
          {/* <p>password: {response.auth.password}</p> */}
        </div>
      )}
    </div>
  );
};

export default secret;
