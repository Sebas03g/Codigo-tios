import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../components/forms/pages/Login';
import { toast } from 'react-toastify'


export default function Login(){
    const [formData, setFormData] = useState({
        cedula: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await fetchLogin(formData);
        if(result.valido){
            toast.success(result.mensaje);
            setTimeout(() => {
                navigate("/home");
            }, 1500);
        }else{
            toast.error(result.mensaje)
        }

    };

    const handleChange = async (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }


    return (
        <>
            <LoginPage
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                formData={formData}
            />
        </>
        
        
    );

}