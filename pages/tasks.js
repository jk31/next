import Layout from "../components/Layout";
import fetch from "node-fetch";

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

export async function getStaticProps() {

    const res = await fetch("http://127.0.0.1:8000/app/tasks/tasks/", {
                            method: 'get',
                            body: null,
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': "Token 0a0a7776fcd8c7bd1458d42a739261cbadc0e0f6"
                            }
    })
    const tasks = await res.json()

    return {
        props: {
            tasks,
        },
    }
}


export default Tasks;