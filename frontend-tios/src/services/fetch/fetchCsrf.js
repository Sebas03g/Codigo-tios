export default tokenCsrf = async() => {
    const res = await fetch('http://localhost:3000/csrf-token',{
        method: "GET",
        credentials: 'include',
    });

    return await res.json();
}