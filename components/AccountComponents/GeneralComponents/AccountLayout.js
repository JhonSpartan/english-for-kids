import React from "react";
import Sidebar from "./Sidebar";
import AccountHeader from "./AccountHeader";

const AccountLayout = ({children}) => {
  return (
    <div className="account-container">
      <Sidebar />
      <AccountHeader />
      {children}
    </div>
  )
}

export default AccountLayout;