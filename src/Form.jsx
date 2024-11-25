import React, { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import db from './firebase-config';

const Form = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const validator = useRef(new SimpleReactValidator());

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const auth = getAuth();
        if (validator.current.allValid()) {
            try {
                // Registrar usuario con Firebase Auth
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    formData.email,
                    formData.password
                );
                console.log('Usuario registrado:', userCredential.user);

                alert('Usuario registrado exitosamente');
                setFormData({ email: '', password: '' });
                validator.current.hideMessages();
            } catch (error) {
                console.error('Error al registrar usuario:', error);
                alert('Hubo un error al registrar el usuario');
            }
        } else {
            validator.current.showMessages();
            forceUpdate(1);
        }
    };

    const [, forceUpdate] = useState();

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded">
                <h2 className="mb-4">Formulario</h2>
                <div className="mb-3">
                    <label className="form-label">Correo:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => validator.current.showMessageFor('email')}
                        className="form-control"
                    />
                    {validator.current.message('email', formData.email, 'required|email') && (
                        <div className="text-danger">
                            {validator.current.message('email', formData.email, 'required|email')}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={() => validator.current.showMessageFor('password')}
                        className="form-control"
                    />
                    {validator.current.message('password', formData.password, 'required|min:6') && (
                        <div className="text-danger">
                            {validator.current.message('password', formData.password, 'required|min:6')}
                        </div>
                    )}
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Registrar
                </button>
            </form>
        </div>
    );
};

export default Form;
