import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SecondPage.css";
// import "../Responsive.css";

const SecondPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [check, setCheck] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    if (data.Email !== "" && data.Location !== "") {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  return (
    <div className="SecondPage">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="label">
            {" "}
            Email:
            <input
              className="input"
              placeholder="Email"
              type="email"
              {...register("Email", {
                required: true,
              })}
            />
          </label>
          {errors.Email && <p className="alert">Compila questo campo</p>}
        </div>
        <div className="form-group">
          <label className="label">
            {" "}
            Indirizzo di residenza:
            <input
              className="input"
              placeholder="Indirizzo di residenza"
              type="address"
              {...register("Location", {
                required: true,
                pattern: "/^[0-1000a-zA-Z]/",
              })}
            />
          </label>
          {errors.Location && <p className="alert">Compila questo campo</p>}
        </div>

        <div className="btnContainer">
          <Link to="/">
            <button className="btn">Indietro</button>
          </Link>
          {check ? (
            <Link to="/ThirdPage">
              <input className="btn" type="submit" value="Prossimo" />
            </Link>
          ) : (
            <input className="btn" type="submit" value="Controlla" />
          )}
        </div>
      </form>
    </div>
  );
};

export default SecondPage;
