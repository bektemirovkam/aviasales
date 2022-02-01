import React, { FC, useCallback, useEffect, useState } from "react";
import { IFilter, TabsValuesType } from "../models/Filter";
import { ITicket } from "../models/Search";
import searchAPI from "../services/search";
import Ticket from "./Ticket";
import { AppButton } from "./ui";

interface ITicketsListProps {
  searchId: string;
  filter: IFilter;
  tabValue: TabsValuesType;
  setTicketsLoading: (value: boolean) => void;
}

const TicketsList: FC<ITicketsListProps> = ({
  searchId,
  filter,
  tabValue,
  setTicketsLoading,
}) => {
  const [loadingError, setLoadingError] = useState<string | null>(null);
  const [tickets, setTickets] = useState<ITicket[]>([]);
  const [showTicketsCounter, setShowTicketCounter] = useState(5);

  const getTickets = useCallback(
    async (searchId: string) => {
      try {
        setTicketsLoading(true);
        const { tickets, stop } = await searchAPI.getTickets(searchId);

        // if (stop) {
        setTickets(tickets);
        // }
      } catch (error) {
        setLoadingError("Произошла ошибка!");
      } finally {
        setTicketsLoading(false);
      }
    },
    [setTicketsLoading]
  );

  useEffect(() => {
    if (searchId) {
      getTickets(searchId);
    }
  }, [getTickets, searchId]);

  const addTickets = () => {
    setShowTicketCounter((prev) => prev + 5);
  };

  return (
    <div className="ticket-list">
      {loadingError ? (
        <div className="ticket-list__error">
          <span>{loadingError}</span>
        </div>
      ) : (
        <>
          {tickets.slice(0, showTicketsCounter).map((ticket) => (
            <Ticket ticket={ticket} key={`${ticket.carrier}_${ticket.price}`} />
          ))}
          <AppButton title="Показать еще 5 билетов" onClick={addTickets} />
        </>
      )}
    </div>
  );
};

export default TicketsList;
