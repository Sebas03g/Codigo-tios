export default login = async(credenciales) => {
    const res = await fetch('http://localhost:3000/empleado/login',{
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credenciales),
    });

    return await res.json();
}