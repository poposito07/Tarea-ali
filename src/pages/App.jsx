import { useState } from 'react';

function App() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [validationResult, setValidationResult] = useState('');

    const validateEmail = (email) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(email);
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setValidationResult('');

        if (!validateEmail(newEmail)) {
            setError('Correo electrónico no válido');
        } else {
            setError(null);
        }
    };

    const handleValidationClick = () => {
        if (validateEmail(email)) {
            setValidationResult('Es un correo electrónico válido.');
        } else {
            setValidationResult('No es un correo electrónico válido.');
        }
    };

    return (
        <form>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" />

            <label htmlFor="email">Correo</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
            />

            <button onClick={handleValidationClick}>Validar Correo</button>
            <p>{validationResult}</p>

            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" />

            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input type="password" id="confirmPassword" name="confirmPassword" />

            <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
            <input type="date" id="fechaNacimiento" name="fechaNacimiento" />

            <label htmlFor="Pais">País</label>
            <select id="Pais" name="Pais">
                <option value="mx">México</option>
                <option value="co">Colombia</option>
                <option value="ar">Argentina</option>
            </select>
        </form>
    );
}

export default App;
