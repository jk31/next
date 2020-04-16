import { useGlobal } from 'reactn';
import { useState } from 'react';
import Layout from "../components/Layout"

function Test() {

    const [test, setTest] = useGlobal("test");
    const [name, setName] = useState("myname");

    return (
        <Layout>
            <p>Test is: {test}</p>
            <p>Name is: {name}</p>
            <button onClick={() => setTest("changed test")}>
                Change test to "changed test"
            </button>
        </Layout>
    )
}

export default Test;