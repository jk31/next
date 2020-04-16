import { useGlobal } from 'reactn';
import { useState } from 'react';
import Layout from "../components/Layout"


function Test() {

    const [test, setTest] = useGlobal("test");
    const [name, setName] = useState("myname");
    const [isLogged, setisLogged] = useGlobal("isLogged")

    return (
        <Layout>
            <p>Test is: {test}</p>
            <p>Name is: {name}</p>
            {isLogged ? <p>Logged in </p> : <p>not logged in </p>}
            <button onClick={() => setTest("changed test")}>
                Change test to "changed test"
            </button>
        </Layout>
    )
}

export default Test;