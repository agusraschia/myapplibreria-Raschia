
import './App.css';
import 'core-js/actual';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import CarroSuma from './components/itemCount';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  console.log(Array.from(new Set([1, 2, 3, 3, 2])));

  let imagen = "libro 1.png";
  let titulo = "MENTE MILLONARIA";
  let descripcion = "Este libro une la educación financiera con el desarrollo personal. Contiene información útil para conocer los pilares de la abundancia; revela los secretos de la nutrición financiera; y enseña cómo alcanzar la prosperidad individual y en pareja. Incluye lineamientos prácticos para mejorar las (...)";
 
 
  const productos = [
    {id:1, nombre: "libro 1", precio: "1500"},
    {id:2, nombre: "libro 2", precio: "2500"},
    {id:3, nombre: "libro 3", precio: "3000"}
]

   return (
    <div>
      <div>
        <Header />
        <Navbar />
        <ItemListContainer />
        <ItemDetailContainer />
        
        <CarroSuma />

        <h2> Productos </h2>
        <ul>
          {
            productos.map(item => (
              <li key ={item.id}>{item.nombre} - $ {item.precio}</li> 
              
            ))
          }
        </ul>
          <div className='container'>

            <div className='row'>
              <div className='col-md-4 offset-md-2'> 
                <img src={imagen} alt={titulo} className= "img-fluid"/>
              
              </div>
            <div class='col-md-4'>
              <h1>{titulo}</h1>
              <p>{descripcion}</p>

              </div>
            </div>
          


          
          </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
