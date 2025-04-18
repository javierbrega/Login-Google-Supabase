import { supabase } from '../supabaseClient';

function App() {
  const loginWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      console.error('Error en el login:', error.message);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={loginWithGoogle} style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
        Iniciar sesión con Google
      </button>
    </div>
  );
}

export default App;
