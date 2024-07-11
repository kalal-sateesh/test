import { useState } from "react";
import Cookies from "js-cookie";

const Form = () => {
  const [data, setData] = useState({
    userName: "",
    password: "",
    email: "",
    gender: "",
  });

  const handleCookieget = () => {
    //Cookie storing data
    console.log(Cookies.get("gender", JSON.stringify(data)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("https://google.com", reqObj)
      .then((res) => res.json())
      .then((userData) => console.log(userData))
      .catch((err) => console.log(err, "error"));
    //Cookie storing data
    Cookies.set("gender", JSON.stringify(data), { expires: 7 });
    setData({ ...data, userName: "", password: "", email: "", gender: "" });
  };
  return (
    <form onSubmit={handleSubmit} method="POST">
      <label htmlFor="userName">UserName:</label>
      <input
        type="text"
        placeholder="User name"
        onChange={(e) => setData({ ...data, userName: e.target.value })}
        required
        value={data.userName}
      />
      <br></br>
      <br></br>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
        required
        value={data.password}
      />
      <br></br>
      <br></br>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
        required
        value={data.email}
      />
      <br></br>
      <br></br>
      <label>Gender : </label>
      <input
        type="text"
        placeholder="Gender"
        onChange={(e) => setData({ ...data, gender: e.target.value })}
        required
        value={data.gender}
      />
      <br></br>
      <button type="submit">Submit</button>
      <button onClick={handleCookieget}>Get Cookie</button>
    </form>
  );
};

export default Form;
