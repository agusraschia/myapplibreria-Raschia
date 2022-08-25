
import './App.css';

function App() {

  let imagen = "libro 1.png";
  let titulo = "MENTE MILLONARIA";
  let descripcion = "Este libro une la educación financiera con el desarrollo personal. Contiene información útil para conocer los pilares de la abundancia; revela los secretos de la nutrición financiera; y enseña cómo alcanzar la prosperidad individual y en pareja. Incluye lineamientos prácticos para mejorar las (...)";
  return (
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
  );
}

export default App;
