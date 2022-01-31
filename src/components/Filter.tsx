import React, { FC, useState } from "react";
import { FilterValuesType } from "../models/Filter";
import { AppCheckbox, Card } from "./ui";

interface IFilterProps {}

const Filter: FC<IFilterProps> = () => {
  const [filter, setFilter] = useState({
    "0": false,
    "1": false,
    "2": false,
    "3": false,
    all: false,
  });

  const handlerChangeValue = (value: FilterValuesType) => {
    if (value === "all") {
      // const newFilter = Object.keys(filter).reduce(
      //   (prev, key) => ({
      //     ...prev,
      //     [key]: !filter[key as FilterValuesType],
      //   }),
      //   {} as typeof filter
      // );

      // setFilter(newFilter);

      if (filter.all) {
      }
    } else {
      setFilter({ ...filter, [value]: !filter[value] });
    }
  };

  return (
    <Card className="filter">
      <div className="filter__title">Количество пересадок</div>
      <AppCheckbox
        title="Все"
        value={"all"}
        onChange={handlerChangeValue}
        checked={filter.all}
      />
      <AppCheckbox
        title="Без пересадок"
        value={"0"}
        onChange={handlerChangeValue}
        checked={filter[0]}
      />
      <AppCheckbox
        title="1 пересадка"
        value={"1"}
        onChange={handlerChangeValue}
        checked={filter[1]}
      />
      <AppCheckbox
        title="2 пересадки"
        value={"2"}
        onChange={handlerChangeValue}
        checked={filter[2]}
      />
      <AppCheckbox
        title="3 пересадки"
        value={"3"}
        onChange={handlerChangeValue}
        checked={filter[3]}
      />
    </Card>
  );
};

export default Filter;
