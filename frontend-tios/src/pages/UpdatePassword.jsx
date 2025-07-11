import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UpdatePasswordPage from "../components/pages/UpdatePassword";
import { getTokenData } from "../services/getLocalStorageData";
import { updatePassword } from "../services/fetch/updatePassword";

export default function UpdatePassword(){
    const location = useLocation();
    const ruta = location.state?.ruta;
    const id_usuario = getTokenData?.id;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        newPassword: "",
        confirmedNewPassword: ""
    });

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(formData.newPassword == formData.confirmedNewPassword){
            await updatePassword(formData.newPassword);
            navigate("/home");
        }
    }

    const updateFormData = (e) => {
        setFormData({
            ...formData,
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