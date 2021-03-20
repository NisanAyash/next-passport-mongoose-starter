import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/common/Layout";
const signin = () => {
  const router = useRouter();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const d = await fetcher("http://localhost:3000/api/auth/login", {
      ...state,
    });

    if (d.success) {
      router.push("/secret");
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
        <h1>SignIn</h1>
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
        <button onClick={handleSubmit}>send</button>

        <p>Try some provider</p>

        <Link href="http://127.0.0.1:3000/api/auth/github/callback">
          <button>Login with github</button>
        </Link>
      </form>

      <Link href="/signup">signup</Link>
    </Layout>
  );
};

export default signin;
