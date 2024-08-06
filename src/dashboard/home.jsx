import React from "react";
import "./style.css";
import Navbar from "../components/NavBar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Title from "../components/title/title";
import Order from "./Components/orderdetail/order";
import Doughnut from "../components/charts/doughnutchart";
import CustFeedback from "./Components/custFeedback/custFeedback";
import RecentOrder from "./Components/RecentOrder/RecentOrder";
import BarChart from "../components/charts/BarChart";
import AddItem from "../Assets/add-to-cart.png";
import Moneyloss from "../Assets/money-loss.png";
import Delivered from "../Assets/shoppdelivered.png";
import Deleted from "../Assets/shopping-delete.png";
import Goal from "../Assets/goal.png";
import Burger from "../Assets/burger.png";
import Menu from "../Assets/restaurant.png";
import { useState } from "react";

function Home() {
  console.log( window.innerHeight, window.innerWidth);
  const [state1, setstate] = useState(0);
  return (
    <div className="MainContainer">
      <Sidebar />
      <Navbar />
      <div className="dashboardContainer">
        <div>
          <Title />
        </div>

        <div className="Boxgrid">
          <div className="BoxgridIn item-1">
            <Order
              iconcolor="#415ff7"
              background="#283567"
              icon={AddItem}
              arrowUp={true}
              Text="Total Orders"
              number="75"
              percent="3%"
            />
          </div>
          <div className="BoxgridIn item-2 ">
            <Order
              iconcolor="#00ca8c"
              background="#125447"
              icon={Delivered}
              arrowUp={false}
              Text="Total Delivered"
              number="70"
              percent="3%"
            />
          </div>
          <div className="BoxgridIn item-3">
            <Order
              iconcolor="#f45c5b"
              background="#603534"
              icon={Deleted}
              arrowUp={true}
              Text="Total Cancelled"
              number="05"
              percent="3%"
            />
          </div>
          <div className="BoxgridIn item-4">
            <Order
              iconcolor="#e342a1"
              background="#592b4e"
              icon={Moneyloss}
              arrowUp={false}
              Text="Total Revenue"
              number="$12k"
              percent="3%"
            />
          </div>

          <div className="BoxgridIn item-5">
            <div>
              <p style={{ fontSize: "12px" }}>Net Profit</p>
              <h3>$6759.25</h3>
              <span style={{ color: "#1ab58a", fontSize: "13px" }}>
                <i class="bi bi-caret-up-fill"></i> 3%
              </span>
            </div>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Doughnut />

              <p style={{ fontSize: "10px", color: "#aaa", marginBottom: 0 }}>
                *The values here has been rounded Off
              </p>
            </div>
          </div>
          <div className="BoxgridIn item-6">
            <div className="itm6Div">
              <h5>Activity</h5>
              <span>
                Weekly <i class="bi bi-caret-down-fill"></i>
              </span>
            </div>

            <BarChart />
          </div>
          <div className="BoxgridIn item-7">
            <div className="Itm7DivIn">
              <div>
                {" "}
                <span
                  className="icospan"
                  style={{ background: "#5e3336", color: "#c15e37" }}
                >
                  {/* <i class="bi bi-bag-check"></i> */}
                  <img src={Goal} height="25px" width="25px"></img>
                </span>
                &nbsp;&nbsp;Goals
              </div>
              <span className="span-Arrow">
                <i class="bi bi-chevron-right"></i>
              </span>
            </div>
            <div className="Itm7DivIn">
              <div>
                {" "}
                <span
                  className="icospan"
                  style={{ background: "#293268", color: "#7680cd" }}
                >
                  <img src={Burger} height="25px" width="25px"></img>
                </span>
                &nbsp;&nbsp;Popular Dishes
              </div>
              <span className="span-Arrow">
                <i class="bi bi-chevron-right"></i>
              </span>
            </div>
            <div className="Itm7DivIn">
              <div>
                {" "}
                <span
                  className="icospan"
                  style={{ background: "#204a60", color: "#3295c0" }}
                >
                  <img src={Menu} height="25px" width="25px"></img>
                </span>
                &nbsp;&nbsp;Menus
              </div>
              <span className="span-Arrow">
                <i class="bi bi-chevron-right"></i>
              </span>
            </div>
          </div>
          <div className="BoxgridIn item-8">
            <h5>Recent Orders</h5>
            <RecentOrder />
          </div>
          <div className="BoxgridIn item-9">
            <h5>Customer's Feedbook</h5>
            <CustFeedback />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
