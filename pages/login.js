import { useGlobal } from 'reactn';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import Layout from "../components/Layout";
import fetch from "node-fetch";

function Login() {

    const [isLogged, setisLogged] = useGlobal("isLogged");

    return (
        <Layout>
            <h1>Login</h1>
            <p>login status: {isLogged}</p>
            <Formik
                initialValues={{ username: "", password: ""}}
                validationSchema={Yup.object({
                    username: Yup.string()
                    .required("Required"),
                    password: Yup.string()
                    .required("Required")
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values));
                        LoginFetch(JSON.stringify(values));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <label htmlFor="username">Username</label> <br />
                    <Field name="username" type="text" />
                    <ErrorMessage name="username"/> <br />
                    <label htmlFor="password">Password</label> <br />
                    <Field name="password" type="password" />
                    <ErrorMessage name="upassword"/> <br />
                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </Layout>
    );
};

export async function LoginFetch(loginData) {

    const req = await fetch("http://127.0.0.1:8000/user/token/login/", {
                            method: 'post',
                            body: loginData,
                            headers: {
                                'Content-Type': 'application/json'
                            }
    })
    const res  = await req.json()
    console.log("reponse from loginfetch: ", res)
    return res
}

export async function LoginTest(values) {
    console.log("start login");
    console.log(values);
    return values
}

export default Login;