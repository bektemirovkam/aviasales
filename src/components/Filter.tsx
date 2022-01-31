import React, { FC } from "react";
import { AppCheckbox, Card } from "./ui";

interface IFilterProps {}

const Filter: FC<IFilterProps> = () => {
  const handlerChangeValue = (value: string | number) => {
    // console.log(value);
  };

  return (
    <Card className="filter">
      <div className="filter__title">Количество пересадок</div>
      <AppCheckbox title="Все" value={"Все"} onChange={handlerChangeValue} />
      <AppCheckbox
        title="Без пересадок"
        value={"Без пересадок"}
        onChange={handlerChangeValue}
      />
      <AppCheckbox
        title="1 пересадка"
        value={"1 пересадка"}
        onChange={handlerChangeValue}
      />
      <AppCheckbox
        title="2 пересадки"
        value={"2 пересадки"}
        onChange={handlerChangeValue}
      />
      <AppCheckbox
        title="3 пересадки"
        value={"3 пересадки"}
        onChange={handlerChangeValue}
      />
    </Card>
  );
};

export default Filter;
