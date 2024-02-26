import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
// import { AuthProvider } from 'react-firebase-hooks/auth';
// import { Link } from "wouter";

function Home() {
    const [user] = useAuthState(auth); // Obtén el estado de autenticación actual

    return (
        <>
            <h1>Registro Asociaciones Civiles Sin Fines de Lucro de Argentina</h1>
            <h2>Bienvenido: 
                {user && <p>Email: {user.email}</p>} 
                {/* Muestra el email del usuario si está autenticado */}
            </h2>
            <button onClick={() => auth.signOut()}>Cerrar sesión</button>

        </>
    )
}


export default Home