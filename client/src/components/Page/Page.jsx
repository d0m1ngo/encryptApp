import React from "react";

import "./page.css";

const Page = props => {
  // const { title, text, innerPageisOpened } = props.data;
  return (
    <div className="mainpage main">
      {/* {innerPageisOpened ? (
        <React.Fragment>
          <div>
            title: <input type="text" value={title} />
          </div>
          <textarea name="" id="" cols="30" rows="10" className="mainpage__textarea" value={text} />
        </React.Fragment>
      ) : ( */}
        <React.Fragment>
          <div>
            <h2>Categories</h2>
            <div>
              <span>category: </span> <input type="text" />
            </div>
            <button>add category</button>
          </div>
        </React.Fragment>
      {/* )} */}
    </div>
  );
};

export default Page;
