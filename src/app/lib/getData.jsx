import axios from "axios";

async function getData() {
    try {
        const { data } = await axios.get('http://localhost:3002/data');
        return data;
    } catch (error) {
        // log and return empty array so UI can handle no-data case
        // Keep error handling minimal for server component
        // eslint-disable-next-line no-console
        console.error('getData error:', error?.message ?? error);
        return [];
    }
}

export default async function DataUser() {
    const data = await getData();

    return (
        <ul>
            {Array.isArray(data) && data.map((user) => (
                <li key={user.id}>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </li>
            ))}
        </ul>
    );
}