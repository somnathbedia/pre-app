import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <div className="mt-28">
      <h1 className="text-center">Please Sign up Here!</h1>
      <div className="flex gap-2 items-center justify-center">
        <form className="mb-8 mt-4 " onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="email">Email:</label>
            </div>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <div>
              {" "}
              <label htmlFor="email">Password:</label>
            </div>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mt-2">
            <input
              type="submit"
              className="w-full bg-blue-700 text-white rounded"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
