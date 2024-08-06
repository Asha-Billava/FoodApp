import React from "react";
import "./style.css";
function Order(props) {
  return (
    <div>
      <div className="orderdetail">
        <span
          className="orderIcon"
          style={{ background: props.background, color: props.iconcolor }}
        >
          {/* <i className={`bi ${props.icon}`}></i> */}
          <img src={props.icon} height="30px" width="30px"></img>
        </span>
        <p>{props.Text}</p>
      </div>
      <div className="ordercount">
        <h3>{props.number}</h3>
        <span style={{ color: props.arrowUp == false ? "#d45656" : "#1ab58a" }}>
          {props.arrowUp == false ? (
            <i class="bi bi-caret-down-fill"></i>
          ) : (
            <i class="bi bi-caret-up-fill"></i>
          )}
          {props.percent}
        </span>
      </div>
    </div>
  );
}

export default Order;
