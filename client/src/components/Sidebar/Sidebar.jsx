import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = props => {
  console.log(props);
  const [isOpened, openNext] = useState(false);
  const [innerCategory, setInnerCategory] = useState(null);
  const stubCategories = props.data.categories;
  const openNewSidebar = item => {
    openNext(true);
    setInnerCategory(item);
    props.togglePageDisplay();
  };

  const closeNewSidebar = () => {
    openNext(false);
    setInnerCategory(null);
    props.setInitial();
  };
  const li = stubCategories =>
    Object.keys(stubCategories).map(item => {
      return (
        <li key={item}>
          <Link to={{ pathname: "/details", search: `?category=${item}` }}>{item}</Link>
        </li>
      );
    });

  // const innerLi = categories => {
  //   return categories.map(item => {
  //     return (
  //       <li
  //         key={item.id}
  //         onClick={() => {
  //           props.setPageData(item);
  //         }}
  //         className="sidebar__item"
  //       >
  //         {item.title}
  //       </li>
  //     );
  //   });
  // };
  return (
    <aside className="sidebar">
      {/* {isOpened ? (
        <React.Fragment>
          <div className="sidebar__header"><div><button onClick={() => closeNewSidebar()}>back</button></div><h3 className="sidebar__header__title">{innerCategory}</h3><div><button>search</button></div></div>
          <ul className="sidebar__ul">{innerLi(stubCategories[innerCategory])}</ul>
        </React.Fragment>
      ) : ( */}
      <React.Fragment>
        <div className="sidebar__header">Categories</div>
        <ul className="sidebar__ul">{li(stubCategories)}</ul>
      </React.Fragment>
      {/* )} */}
    </aside>
  );
};

export default Sidebar;
