import { useState } from "react";
import { useLocation } from 'react-router-dom';
import UpdatePasswordPage from "../components/pages/UpdatePassword";

export default function UpdatePassword(){
    const location = useLocation();
    const ruta = location.state?.ruta;

    const [formData, setFormData] = useState({
        newPassword: "",
        confirmedNewPassword: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const updateFormData = (e) => {
        setFormData({
            ...setFormData,
            [e.target.name]:e.target.value
        });
    }

    return(
        <UpdatePasswordPage
            handleSubmit={handleSubmit}
            newPassword={formData.newPassword}
            confirmedNewPassword={formData.confirmedNewPassword}
            updateFormData={updateFormData}
        />
    )
}