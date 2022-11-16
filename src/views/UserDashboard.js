import React, { useState, useMemo, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";

import {
    Form,
    Input,
    Row,
    Col,
    Container, Button
} from "reactstrap";

import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import axios from "axios";

const UserDashboard = (props, {user}) => {
    const { loginWithRedirect } = useAuth0();
    // const { user, isAuthenticated, isLoading } = useAuth0();
    console.log("*****", props.user.role[0] );
    const isAManager = props.user.role[0] === "Managers" ? true : false;
    const [activeNav, setActiveNav] = useState(1);
    const [chartExample1Data, setChartExample1Data] = useState("data1");

    const baseStyle = {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "90px",
        borderWidth: 2,
        borderRadius: 2,
        borderColor: "#eeeeee",
        borderStyle: "dashed",
        backgroundColor: "#bab8b8",
        color: "#bdbdbd",
        outline: "none",
        transition: "border .24s ease-in-out",
    };
    const activeStyle = {
        borderColor: "#2196f3",
    };
    const acceptStyle = {
        borderColor: "#00e676",
    };
    const rejectStyle = {
        borderColor: "#ff1744",
    };

    const [files, setFiles] = useState([]);

    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        open,
    } = useDropzone({
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isDragActive, isDragReject, isDragAccept]
    );

    const filepath = acceptedFiles.map((file) => (
        <li key={file.name}>
            {file.name} - {file.size} bytes
        </li>
    ));

    const toggleNavs = (e, index) => {
        e.preventDefault();
        setActiveNav(index);
        setChartExample1Data("data" + index);
    };

    const initialValues = {
        enableReinitialize: true,
        validateOnMount: true,
        msgContent: ""
    };

    const onSubmit = (values) => {
        console.log("message ---> ", values)
        axios.post("https://localhost:8080/savemessage", values)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    // useEffect(() => {
    //   loginWithRedirect();
    // })

    const formik = useFormik({
        initialValues,
        onSubmit,
    });

    console.log('------23>', props.user);


    return (
        <>
            {/*<Header />*/}
            <Container className="bg-info" style={{height: "200px"}} fluid>
                <Row>
                    <Col>
                        <div style={{display: 'flex', float: 'right', marginTop: "20px", marginRight: "50px"}}>
                            <Logout />
                            {/*<Login/>*/}
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* Page content */}
            <Container className="mt-2" fluid >
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col className="mb-5 mb-xl-0" xl="8">
                            <h1>Enter Message here : </h1>
                            <Input
                                id="exampleFormControlTextarea1"
                                placeholder="Write a large text here ..."
                                rows="3"
                                type="textarea"
                                name="msgContent"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.msgContent}
                            />
                        </Col>
                    </Row>
                    <br/>
                    {isAManager &&
                        <Row>
                            <Col className="mb-5 mb-xl-0" xl="8">
                                <h1>Upload the file here : </h1>
                                <div {...getRootProps({style})}>
                                    <input {...getInputProps()} />
                                    {/* <FileBase><input {...getInputProps()} /></FileBase> */}
                                    <p>
                                        Drag 'n' drop your image file here, or click to select
                                        files
                                    </p>
                                </div>

                                <h4>File Details</h4>
                                <ul>{filepath}</ul>
                            </Col>
                        </Row>
                    }
                    <br/>
                    <Row>
                        <Col className="mb-5 mb-xl-0" xl="8">
                            <div className="text-center">
                                <Button className="my-4" color="primary" type="submit">
                                    Submit
                                </Button>
                            </div>

                        </Col>
                    </Row>
                </Form>
                {/*<Login/>*/}

            </Container>
        </>
    );
};

export default UserDashboard;
