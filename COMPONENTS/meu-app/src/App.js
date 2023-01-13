//styles /css
import {useState} from "react";
import './App.css';

import City from "./asset/city.jpg";
import Paissagem from "./asset/paissagem.jpg"
import ManegeData from "./components/ManegeData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import ChangeMessageState from "./components/ChangeMessageState";
import Message from "./components/Message";

function App() {
  /*const name ="Joaquim"*/
    const [userName] = useState("Maria");

const cars =[
  {id:1,brand:"ferrari",color:"amarela",newCar:true,km:0},
  {id:2,brand:"Kia",color:"branco",newCar:false,km:34343},
  {id:3,brand:"Renauld" ,color:"Azul", newCar: false,km: 234},
]

  function showMessage() {
      console.log("Evento do componente pai!")
  }

 const [message,setMessage] = useState(""); {/*estado gerenciado pelo componente pai*/ }
  
{/*forma de alterar esse estado */}  

const handleMessage = (msg) => {
  setMessage(msg);};


  return (
    <div className="App">
      <h1>avançando em React!</h1>
      <div>
        <img src={City}alt="Cidade" />
        </div> 
        <div>
          <img src={Paissagem}alt="Paissagem" />
          </div>
          <ManegeData />
          <ListRender />
          <ConditionalRender />
          {/*props*/}
          <ShowUserName name={userName} />
          {/* destructuring*/}
          <CarDetails brand="VW" km={1001} color="azul"newCar={false}/>
          {/*reaproveitando */}
          <CarDetails brand="ford" color="vermelho" km={0} newCar={true}/>
          <CarDetails brand="fiat" color="preto" km={4500} newCar={false}/>
          {/*loop em array de objt */}
          {cars.map((car)=>(
            <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
            />
          ))}
          {/*Fragment
          <Fragments propsFragments="Teste"/> */}
          {/*Children*/}
          <Container myValue="testing ">     
            <p>este é o conteudo!</p>
          </Container>
          <Container myValue="testing 2">
          <h5>testando o conteiner</h5>
          </Container>
          {/*executar função!*/}
          <ExecuteFunction myFunction={showMessage}/>
          {/*state lift*/}  {/*componente que consome esse estado */}
          <Message msg={message}/>
          {/*altera e eleva */}
          <ChangeMessageState handleMessage={handleMessage}/>
     </div>  
  );
}
  
export default App; 