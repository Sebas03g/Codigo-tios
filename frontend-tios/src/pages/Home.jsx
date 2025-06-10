
const [permisos, setPermisos] = useState([]);

function obtenerPermisos(){
  fetch('', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
}


export default function Home() {

  return <h1 className="text-2xl font-bold">Página principal</h1>;
}
