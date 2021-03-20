import React, { useState } from "react";
import Link from "next/link";
import Layout from "../components/common/Layout";
import { useRouter } from "next/router";

const signup = () => {
  const router = useRouter();

  const [state, setState] = useState({
    fullname: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("loading");

    const d = await fetcher("http://localhost:3000/api/auth/users", {
      ...state,
    });

    console.log(d);

    if (d.success) {
      router.push("/signin");
    }
  };

  const fetcher = async (url, body) => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return data;
  };

  return (
    <Layout>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>SignUp</h1>
        <input
          type="text"
          placeholder="fullname"
          name="fullname"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password..."
          name="password"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="re-password..."
          name="rePassword"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>send</button>
        <Link href="/signin">signin</Link>
      </form>
    </Layout>
  );
};

export default signup;
