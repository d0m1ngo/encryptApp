import React, { useState } from "react";

import "./sidebar.css";

const Sidebar = () => {
  const [isOpened, openNext] = useState(false);
  const [innerCategory, setInnerCategory] = useState(null);
  const stubCategories = { firstCategory: { innerCategoryFirst: "smth", innerCategorysSecond: "smth" }, secondCategory: { inererer: "sss", uheiuewth: "aiushfiauf" } };
  const openNewSidebar = item => {
    openNext(true);
    setInnerCategory(item);
  };
  const li = (stubCategories) =>
    Object.keys(stubCategories).map(item => {
      return (
        <li onClick={() => openNewSidebar(item)} key={item}>
          {item}
        </li>
      );
    });
  return (
    <aside className="sidebar">
      {isOpened ? (
        <React.Fragment>
          <h2>{innerCategory}</h2>
          <ul>{li(stubCategories[innerCategory])}</ul>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h2>Categories</h2>
          <ul>{li(stubCategories)}</ul>
        </React.Fragment>
      )}
    </aside>
  );
};

export default Sidebar;
