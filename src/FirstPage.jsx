import fish from "./assets/fightingfish.jpg";
function FirstPage() {
    return (
        <>
            <h1>First</h1>
            <p>Content on first page</p>
            <img src={fish} alt="Fish" style={{ width: "300px" }} />
        </>
    )
}

export default FirstPage;
