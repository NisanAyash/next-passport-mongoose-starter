import React from "react";
import useFetch from "../hooks/useFetch";
import Layout from "../components/common/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
const secret = () => {
  const router = useRouter();

  const { response, error, isLoading } = useFetch(
    "http://localhost:3000/api/auth/user",
    {}
  );

  if (error) {
    return (
      <Layout>
        <p>Error:</p>
        <p>You aren't authenticated</p>
        <p>{error.name}</p>
        <p>{error.message}</p>

        <Link href="/">
          <button>Go Home.</button>
        </Link>
      </Layout>
    );
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
        <Link href="/">
          <button>Go Home.</button>
        </Link>
      </Layout>
    )
  );
};

export default secret;
