function Iterate() {
    const dogs = ["Misha", "Luna", "Bella"]
   
    return <>
        <h1>Doggie Names:</h1>
        <div>{dogs.map((dog, index) => {
            return <div key={dog}>{dog}</div>
            // ^^^ key helps react render more effectivly, will throw a warning
        })}</div>
    </>
}
export default Iterate