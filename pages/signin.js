import React, { useState } from "react";
import Link from "next/link";

const signin = () => {
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

    console.log(d);
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
    <div>
      <form>
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
      </form>

      <Link href="/signup">signup</Link>
    </div>
  );
};

export default signin;
