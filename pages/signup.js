import React from "react";

const signup = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="fullname" />
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password..." />
        <input type="password" placeholder="re-password..." />
        <button>send</button>
      </form>
    </div>
  );
};

export default signup;
