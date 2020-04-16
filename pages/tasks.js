import fetch from "node-fetch";
import Layout from "../components/Layout";

import cookies from 'next-cookies'


function Tasks({ tasks }) {
    return (
        <Layout>
            <h1>Tasks</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title} <br />
                        {task.description}
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {

    let tasks = {};

    const req = await fetch("http://127.0.0.1:8000/app/tasks/tasks/", {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                "Authorization": `Token ${cookies(ctx).tokenjk}`
                            },
                            body: null,
        })
        .then(resp => resp.json())
        .then(resp => {tasks = resp})
        .catch(error => console.log("ERROR:", error))

    return {
        props: {
            tasks,
        },
    }
}


export default Tasks;