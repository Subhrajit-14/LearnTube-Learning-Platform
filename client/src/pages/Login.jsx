import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const {storeTokenInLS, API} = useAuth();

  const URL = `${API}/api/auth/login`;
  

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      console.log("login from", response);
      if (response.ok) { 
        storeTokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        toast.success("Login successful");
        navigate("/");
      }else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        console.log("invalid credential");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-Login">
            <div className="container grid grid-two-cols">
              <div className="Login-image reg-img">
                <img src="/images/login.png" alt="Please Login" width="400" height="500"/>
              </div>
              <div className="login-form">
                    <h1 className="main-heading mb-3">Login Form</h1>
                    <br />
                    <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">email</label>
                        <input
                          type="text" name="email" value={user.email} onChange={handleInput} placeholder="email"/>
                      </div>
                      <div>
                        <label htmlFor="password">password</label>
                        <input type="password"name="password" value={user.password} onChange={handleInput} placeholder="password"/>
                      </div>
                      <br />
                      <button type="submit" className="btn btn-submit">Login Now</button>
                    </form>
                  </div>
                </div>
              </div>
            </main>
          </section>
        </>
    );
};