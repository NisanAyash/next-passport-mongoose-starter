import React, { useState } from "react";
import Link from "next/link";

const signup = () => {
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

    const d = await fetcher("http://localhost:3000/api/auth/users", {
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
      </form>

      <Link href="/signin">signin</Link>
    </div>
  );
};

export default signup;
