import React from "react";
import axios from "axios";

import "./styles.scss";

const Newsletter: React.FC = () => {
  function validateAll(email, name) {
    const reEmail = /^[^\s@]+@[^\s@]+$/;
    const reName = /^\S+$/;

    if (!reEmail.test(email)) return false;
    if (!reName.test(name)) return false;

    return true;
  }

  function sendEmail(e) {
    e.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;

    if (validateAll(email, name))
      axios
        .post("https://corebiz-test.herokuapp.com/api/v1/newsletter", {
          name: name,
          email: email,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  return (
    <div className="newsletter__container">
      <div className="newsletter__content">
        <div className="newsletter__title">
          <span className="title">
            Participe de nossas news com promoções e novidades!
          </span>
        </div>
        <form className="newsletter__form">
          <input
            type="text"
            className="name"
            id="name"
            placeholder="Digite seu nome"
          />
          <input
            type="email"
            className="email"
            id="email"
            placeholder="Digite seu email"
          />
          <button className="submit-btn" onClick={(e) => sendEmail(e)}>
            Eu quero!
          </button>
        </form>
      </div>
    </div>
  );
};
export default Newsletter;
