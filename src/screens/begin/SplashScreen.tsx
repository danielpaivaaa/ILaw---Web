import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/welcome');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div style={styles.container}>
            <h1 style={styles.text}>Ilaw</h1>
        </div>
    );
}

const styles = {
    container: {
        height: '100vh',
        backgroundColor: "#111",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color:'#fff',
        fontSize: 40,
    },
};