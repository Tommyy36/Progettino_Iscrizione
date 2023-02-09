import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./FirstPage.css";
// import "../Responsive.css";

const FirstPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [check, setCheck] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    if (data.Age >= 18 && data.Age <= 99) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  return (
    <div className="FirstPage">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="label">
            {" "}
            Nome:
            <input
              className="input"
              placeholder="Nome"
              {...register("Name", {
                required: true,
                maxLength: 20,
              })}
            />
          </label>
          {errors.Name && <p className="alert">Compila questo campo</p>}
        </div>

        <div className="form-group">
          <label className="label">
            {" "}
            Cognome:
            <input
              className="input"
              placeholder="Cognome"
              {...register("Surname", {
                required: true,
                pattern: "/^[A-Za-z]+$/i",
              })}
            />
          </label>
          {errors.Surname && <p className="alert">Compila questo campo</p>}
        </div>

        <div className="form-group">
          <label className="label">
            {" "}
            Età:
            <input
              className="input"
              placeholder="Età"
              type="number"
              {...register("Age", {
                required: true,
                min: 18,
                max: 99,
              })}
            />
          </label>
          {errors.Age && <p className="alert">Non hai l'età adatta</p>}
        </div>
        {check ? (
          <Link to="/SecondPage">
            <input className="btn" type="submit" value="Next" />
          </Link>
        ) : (
          <input className="btn" type="submit" value="Controlla" />
        )}
      </form>
    </div>
  );
};

export default FirstPage;
