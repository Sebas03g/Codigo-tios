 const tokenCsrf = async() => {
    const res = await fetch('http://localhost:3000/csrf-token',{
        method: "POST",
        credentials: 'include',
    });

}

export default tokenCsrf