import React from "react";

import MessageIcon from "../../assets/svgs/message-icon.svg";
import AtendIcon from "../../assets/svgs/atend-icon.svg";
import CorebizLogo from "../../assets/svgs/corebiz.svg";
import VtexLogo from "../../assets/svgs/vtex.svg";

import "./styles.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer__content">
      <div className="footer__container">
        <div className="footer__location">
          <span className="location__title">Localização</span>
          <span> Avenida Andrômeda, 2000. Bloco 6 e 8</span>
          <span>Alphavile SP</span>
          <span>brasil@corebiz.ag</span>
          <span>+55 11 3090 1039</span>
        </div>
        <div className="footer__contact">
          <a href="#" className="contato">
            <img src={MessageIcon} alt="Mensagem" />
            <span>ENTRE EM CONTATO</span>
          </a>
          <a href="#" className="atendimento">
            <img src={AtendIcon} alt="Mensagem" />
            <span>FALE COM O NOSSO CONSULTOR ONLINE</span>
          </a>
        </div>
        <div className="footer__responsible">
          <a href="#">
            <span>Created by</span>
            <img src={CorebizLogo} alt="Corebiz" />
          </a>
          <a href="#">
            <span>Created by</span>
            <img src={VtexLogo} alt="Vtex" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
