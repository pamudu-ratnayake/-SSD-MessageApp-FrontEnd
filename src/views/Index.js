
import React, { useState, useMemo, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserDashboard from "./UserDashboard";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Logout from "./Logout";

import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container, Button
} from "reactstrap";


import Header from "components/Headers/Header.js";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import axios from "axios";

const Index = (props) => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const isAManager = false;

  console.log('------>', user, isAuthenticated,isLoading);


  return (
    <>
      {isAuthenticated ?
          <Dashboard user = {user}/> : <Login/>
      }
    </>
  );
};

export default Index;
