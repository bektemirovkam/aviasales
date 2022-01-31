import React, { FC } from "react";
import Ticket from "./Ticket";
import { AppButton } from "./ui";

interface ITicketsListProps {}

const TicketsList: FC<ITicketsListProps> = ({}) => {
  return (
    <div className="ticket-list">
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <AppButton title="Показать еще 5 билетов" onClick={() => {}} />
    </div>
  );
};

export default TicketsList;
