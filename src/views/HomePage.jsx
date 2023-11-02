import Nav from "../layout/Nav";

export default function HomePage() {
    const username = "Mohamed"
    return (
        <div>
            <Nav username={username} />
            <h1>HomePage</h1>
        </div>
    )
}
