import React, { FC } from "react";
import { Card } from "./ui";

interface ITicketProps {}

const Ticket: FC<ITicketProps> = () => {
  return <Card className="ticket">Ticket</Card>;
};

export default Ticket;
