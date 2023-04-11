import React from "react";
import Link from "next/link";


const Index = () => {
  return (
    <div className="dashboard-container">
      <h1 >Dashboard</h1>
      <div className="dashboard-links">
        <Link style={{textDecoration: 'none'}} href="/userLogin">
          <p className="dashboard-link">User Login</p>
        </Link>
        <Link style={{textDecoration: 'none'}} href="/adminLogin">
          <p className="dashboard-link">Admin Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Index;

