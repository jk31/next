import fetch from "node-fetch";
import useSWR from 'swr'
import Cookies from "js-cookie";

import Layout from "../components/Layout";


function TaskList () {
    const { data, error } = useSWR("http://127.0.0.1:8000/app/tasks/tasks/", fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    if (data["detail"] === "Invalid token.") return <div>Invalid token</div>
    return <div>
                <ul>
                {data.map(task => (
                    <li key={task.id}>
                        {task.title} <br />
                        {task.description}
                    </li>
                ))}
                </ul>
            </div>
}

function Tasks() {

    return (
        <Layout>
            <h1>Tasks</h1>
            <TaskList />
        </Layout>
    )
}

const fetcher = url => fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            "Authorization": `Token ${Cookies.get("tokenjk")}`
                        },
                        body: null,
    })
    .then(resp => resp.json())
    .catch(error => console.log("ERROR:", error))


export default Tasks;

