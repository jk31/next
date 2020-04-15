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
    const res = await fetch("http://127.0.0.1:8000/app/tasks/tasks/")
    const tasks = await res.json()

    return {
        props: {
            tasks,
        },
    }
}


export default Tasks;