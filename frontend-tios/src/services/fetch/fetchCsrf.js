 const tokenCsrf = async() => {
    return await fetch('http://localhost:3000/csrf-token',{
        method: "GET",
        credentials: 'include',
    });
}

export default tokenCsrf