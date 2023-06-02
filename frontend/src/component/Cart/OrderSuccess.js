import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./orderSucces.css";

const OrderSuccess = () => {
    return (
        <div className="orderSuccess">
            <CheckCircleIcon/>

            <Typography>Your order has been placed successfully</Typography>
            <Link to="/orders">View your orders</Link>
        </div>
    );
};

export default OrderSuccess;