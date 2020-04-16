import { useGlobal } from 'reactn';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";

import Layout from "../components/Layout";

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
                        loginFetch(JSON.stringify(values));
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

export async function loginFetch(values) {

    const req = await fetch("http://127.0.0.1:8000/user/token/login/", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: values,
        })
        .then(resp => resp.json())
        .then(resp => Cookies.set('tokenjk', resp["auth_token"], { sameSite: "lax" }))
        .catch(error => console.log("ERROR:", error))
}


export default Login;