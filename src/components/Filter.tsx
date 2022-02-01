import React, { FC } from "react";
import { FilterValuesType, IFilter } from "../models/Filter";
import { AppCheckbox, Card } from "./ui";

interface IFilterProps {
  filter: IFilter;
  setFilter: (value: IFilter) => void;
}

const Filter: FC<IFilterProps> = ({ filter, setFilter }) => {
  const handlerChangeValue = (value: FilterValuesType) => {
    if (value === "all") {
      let newFilter = Object.keys(filter).reduce(
        (prev, key) => ({
          ...prev,
          [key]: filter.all ? false : true,
        }),
        {} as typeof filter
      );

      setFilter(newFilter);
    } else {
      setFilter({ ...filter, [value]: !filter[value] });
    }
  };

  return (
    <Card className="filter">
      <div className="filter__title">Количество пересадок</div>
      <AppCheckbox
        title="Все"
        value="all"
        onChange={handlerChangeValue}
        checked={filter.all}
      />
      <AppCheckbox
        title="Без пересадок"
        value="0"
        onChange={handlerChangeValue}
        checked={filter[0]}
      />
      <AppCheckbox
        title="1 пересадка"
        value="1"
        onChange={handlerChangeValue}
        checked={filter[1]}
      />
      <AppCheckbox
        title="2 пересадки"
        value="2"
        onChange={handlerChangeValue}
        checked={filter[2]}
      />
      <AppCheckbox
        title="3 пересадки"
        value="3"
        onChange={handlerChangeValue}
        checked={filter[3]}
      />
    </Card>
  );
};

export default Filter;
