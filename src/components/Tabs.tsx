import React, { FC, useState, ChangeEvent } from "react";

interface ITabsProps {}

const Tabs: FC<ITabsProps> = ({}) => {
  const [value, setValue] = useState("Самый дешевый");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <fieldset onChange={(e) => console.log(e.currentTarget)} className="tabs">
      <label>
        <input
          className="tabs__input"
          type="radio"
          value="Самый дешевый"
          name="tab"
          onChange={handleChange}
          checked={value === "Самый дешевый"}
        />
        <span className="tabs__text">Самый дешевый</span>
      </label>

      <label>
        <input
          className="tabs__input"
          type="radio"
          value="Самый быстрый"
          name="tab"
          onChange={handleChange}
          checked={value === "Самый быстрый"}
        />
        <span className="tabs__text">Самый быстрый</span>
      </label>

      <label>
        <input
          className="tabs__input"
          type="radio"
          value="Оптимальный"
          name="tab"
          onChange={handleChange}
          checked={value === "Оптимальный"}
        />
        <span className="tabs__text">Оптимальный</span>
      </label>
    </fieldset>
  );
};

export default Tabs;
