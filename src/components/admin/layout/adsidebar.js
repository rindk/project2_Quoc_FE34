import React from "react";
import { NavLink } from "react-router-dom";

function AdSidebar() {
  return (
    <aside className="ad-sidebar">
      <NavLink to="/admin" activeClassName="active">
        <i className="fas fa-home"></i>
        <span>Dashboard</span>
      </NavLink>
      <NavLink to="/admin-user">
        <i className="fas fa-users-cog"></i>
        <span>User</span>
      </NavLink>
      <NavLink to="/admin-product">
        <i className="fas fa-warehouse"></i>
        <span>Product</span>
      </NavLink>
      <NavLink to="/admin-order">
        <i className="fas fa-briefcase"></i>
        <span>Order List</span>
      </NavLink>
    </aside>
  );
}

export default AdSidebar;
