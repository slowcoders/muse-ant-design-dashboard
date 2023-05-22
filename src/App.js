/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
// import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Sidenav from "./components/layout/Sidenav";
import { useState } from "react";
import DocsPage from "./pages/DocsPage";
import { NavLink } from "react-router-dom";

function App() {
  const [ charts, setCharts ] = useState([])

  async function load_chart_templates() {
    setCharts([
      <Route path="d1" element={<DocsPage/>}/>,
      <Route path="d2" element={<DocsPage/>}/>
    ])
  }

  if (charts.length === 0) {
    // load_chart_templates();
  }

  const t_charts = [
    <Route path="d1" element={<DocsPage/>}/>,
    <Route path="d2" element={<DocsPage/>}/>
  ]
  // (<>
  //   <NavLink to="docs/:d1">News</NavLink>,
  //   <NavLink to="docs/:d2">D2</NavLink>
  // </>);

  return (
    <div>
      {/* <Main> */}
      <Routes>
      <Route path="/" element={<Main />}>
          {/* <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} /> */}
          <Route path="dashboard" element={<Home/>}/>
          <Route path="docs/:chartId" element={<DocsPage/>} basename="charts"/>}
          <Route path="tables" element={<Tables/>} />
          <Route path="/billing" element={<Billing/>} />
          <Route path="/rtl" element={<Rtl/>} />
          <Route path="/profile" element={<Profile/>} />
          {/* <Navigate from="*" to="/dashboard" /> */}
        </Route>
        </Routes>
      {/* </Main> */}
      </div>
  );
}

export default App;
