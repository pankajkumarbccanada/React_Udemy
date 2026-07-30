import CardsComponent from "./Components/CardsComponent";

function App(){

  const fruits=[{
    key:1,
    value:"Mango"
  },{
 key:2,
    value:"banana"
  },{
 key:3,
    value:"Orange"
  }]

  return<>
  <h1>Hey Welcome to react app</h1>
  <div>
    <CardsComponent fruits={fruits} />
   
  </div>
  </>
}

export default App;