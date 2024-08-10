import "./App.css";

// import { useState } from "react";

// import Padre1 from "./components/01-padre-hijo"
// import Padre2 from "./components/02-hijo-padre-1"
// import Padre3 from "./components/02-hijo-padre-2"
// import FormularioLogin from "./components/03-formulario-login"
// import UseEffect00 from "./components/04-useEffect00"
// import UseEffect01 from "./components/05-useEffect01"
// import UseEffect02 from "./components/06-useEffect02"
// import UseEffect03 from "./components/07-useEffect03"
import Actividad from "./components/Actividad";

function App() {
  // const [autenticado, setAutenticado] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {/* 1. Pasaje de información Padre a Hijo */}
        {/* <Padre1/> */}

        {/* 2. Pasaje de información Hijo a Padre */}
        {/* <Padre2/> */}
        {/* <Padre3/> */}

        {/* 3. Formularios */}
        {/* <h2>{autenticado? "Autenticado": "No Autenticado"}</h2>
        <FormularioLogin 
          autenticadoHook={(auth) => setAutenticado(auth)}
        /> */}

        {/* 4. UseEffect */}
        {/* <UseEffect00/> */}

        {/* 5. UseEffect y usestate */}
        {/* <UseEffect01/> */}

        {/* 6. UseEffect para monitorear una variable */}
        {/* <UseEffect02/> */}

        {/* 7. UseEffect ejemplo integrador */}
        {/* <UseEffect03/> */}

        <Actividad />
      </header>
    </div>
  );
}

export default App;
