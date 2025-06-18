import { useState } from "react";

export default function LoginForm() {
    const [formData, setFormData] = useState({
        cedula: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form
            onSubmit={handleSubmit}
        >
            <h2>Iniciar sesion</h2>
            <div>
                <label htmlFor="cedula">
                    Cedula
                </label>
            
                <input
                    type="text"
                    name="cedula"
                    value={formData.cedula}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">
                    Contraseña
                </label>
            
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">
                Entrar
            </button>
            
        </form>
    );
}