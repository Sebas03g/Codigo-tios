import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../components/forms/pages/Login.jsx';
import { toast } from 'react-toastify'
import fetchLogin from '../services/fetch/fetchLogin.js'
import { getTokenData } from '../services/getLocalStorageData.js';


export default function Login({ruta}){
    const [formData, setFormData] = useState({
        cedula: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await fetchLogin(formData);
        if(result.valido){
            toast.success(result.mensaje);
            setTimeout(() => {
                if(getTokenData()?.primera){
                    navigate("/update-password", { state : { ruta } });
                }else{
                    navigate(ruta);
                }
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