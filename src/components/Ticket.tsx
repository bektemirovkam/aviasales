import React, { FC } from "react";
import { Card } from "./ui";
import logo from "../assets/logo.png";

interface ITicketProps {}

const Ticket: FC<ITicketProps> = () => {
  return (
    <Card className="ticket">
      <div className="ticket__header">
        <div className="ticket__price">13 400 P</div>
        <div className="ticket__company">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="ticket__info">
        <div className="ticket__column">
          <div className="ticket__item">
            <div className="ticket__item-title">MOW – HKT</div>
            <div className="ticket__item-value">10:45 – 08:00</div>
          </div>
          <div className="ticket__item">
            <div className="ticket__item-title">MOW – HKT</div>
            <div className="ticket__item-value">11:20 – 00:50</div>
          </div>
        </div>
        <div className="ticket__column">
          <div className="ticket__item">
            <div className="ticket__item-title">В пути</div>
            <div className="ticket__item-value">21ч 15м</div>
          </div>
          <div className="ticket__item">
            <div className="ticket__item-title">В пути</div>
            <div className="ticket__item-value">13ч 30м</div>
          </div>
        </div>
        <div className="ticket__column">
          <div className="ticket__item">
            <div className="ticket__item-title">2 пересадки</div>
            <div className="ticket__item-value">HKG, JNB</div>
          </div>
          <div className="ticket__item">
            <div className="ticket__item-title">1 пересадка</div>
            <div className="ticket__item-value">HKT</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Ticket;
