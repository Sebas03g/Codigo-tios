export default function PosicionForm({ onClose, data }) {
  const [formData, setFormData] = useState({
    nombre: data.nombre,
    permisos: [],
  });

  const [permisos, setPermisos] = useState([]);

  useEffect(() => {
    const fetchPermisos = async () => {
      try {
        const allPermisos = await sentences.getAllData("permiso");
        const permisosActuales = await sentences.extraData("posicion", data.id, "permisos");
        setPermisos(allPermisos);
        setFormData((prev) => ({
          ...prev,
          permisos: permisosActuales.map((p) => String(p.id)),
        }));
      } catch (error) {
        console.log("Error al cargar permisos", error);
      }
    };
    fetchPermisos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = (e) => {
    const { checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      permisos: checked
        ? [...prev.permisos, value]
        : prev.permisos.filter((id) => id !== value),
    }));
  };

  return (
    <PosicionBase
      formData={formData}
      handleChange={handleChange}
      onClose={onClose}
      handleSubmit={handleSubmit}
      permisos={permisos}
      handleCheck={handleCheck}
    />
  );
}
