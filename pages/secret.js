import React from "react";
import useFetch from "../hooks/useFetch";
import Layout from "../components/common/Layout";
const secret = () => {
  const { response, error, isLoading } = useFetch(
    "http://localhost:3000/api/auth/user",
    {}
  );

  if (error) {
    console.log(error);
    return <Layout>{JSON.stringify(error.message)}</Layout>;
  }

  if (!response) {
    // console.log(response, error, isLoading);
    return <Layout>Loading...</Layout>;
  }

  return (
    response && (
      <Layout>
        <h1>Profile</h1>
        <p>_id: {response.user._id}</p>
        <p>fullname: {response.user.fullname}</p>
        <p>email: {response.user.email}</p>
        {/* <p>password: {response.auth.password}</p> */}
      </Layout>
    )
  );
};

export default secret;
