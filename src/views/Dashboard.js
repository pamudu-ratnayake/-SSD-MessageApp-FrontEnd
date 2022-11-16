import React, { useState, useMemo, useEffect } from "react";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";

const Dashboard = (props, {user}) => {

    return(
        <>
            {props.user.role[0] === "Admin" ?
                <AdminDashboard/> : <UserDashboard user={props.user}/>
            }
        </>
    )
}

export default Dashboard;