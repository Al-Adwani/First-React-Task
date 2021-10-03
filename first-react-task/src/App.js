import "./App.css";
import Home from "./Components/Home";
import productsData from "./Components/Product-List";

let ProductArr = productsData.map((element) => <div>
  <img className = 'items' src = {element.image}/>
  <h5>{element.name}</h5>
  <p>{element.price}</p>
</div>);
function App() {
  return (
    <div>
      <Home/>
      <hr/>
      {ProductArr}
    </div>
  );
}

export default App;
