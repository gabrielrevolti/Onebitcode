import Card from "../components/Card"
import img from "../assets/star-wars.jpg"
import img2 from "../assets/esb-poster.jpg"
import img3 from "../assets/rotj-poster.jpg"

function App() {
  return (
    <>
    <h1 style={{textAlign: "center"}}>Exercício 2</h1>
    <Card title="Pôster: Star Wars (1977)" img={img}/>
    <Card title="Pôster: Empire Strikes Back (1980)" img={img2}/>
    <Card title="Pôster: Return of the Jedi(1983)" img={img3}/>
    </>
  )
}

export default App
