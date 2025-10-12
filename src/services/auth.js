// auth.js
import { supabase } from "./supabase";

let user = {
    id: null,
    email: null,
};
let observers = [];

/**
 * Registrar un usuario
 */
export async function register(email, password) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
        console.error('[auth.js register] Error al crear el usuario:', error);
        throw new Error(error.message);
    }

    console.log("[auth.js register] Usuario registrado con éxito:", data);
    user = {
        id: data.user.id,
        email: data.user.email,
    };
    notifyAll();
}

/**
 * Login
 */
export async function login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        console.error("[auth.js login] Error al iniciar sesión con el usuario:", error);
        throw new Error(error.message);
    }

    console.log("Sesión iniciada correctamente:", data);

    user = {
        id: data.user.id,
        email: data.user.email,
    };
    notifyAll();
}

/**
 * Logout
 */
export async function logout() {
    await supabase.auth.signOut();

    user = { id: null, email: null };
    notifyAll();
}

/*----------------------------------------------------------
| Observer pattern
+-----------------------------------------------------------*/
export function subscribeToAuthStateChanges(callback) {
    observers.push(callback);

    // Notificar inmediatamente al observer con el estado actual
    notify(callback);
}

/**
 * Notifica a un observer
 */
function notify(callback) {
    callback({ ...user });
}

/**
 * Notifica a todos los observers
 */
function notifyAll() {
    observers.forEach(callback => notify(callback));
}

/*----------------------------------------------------------
| Mantener la sesión persistente
+-----------------------------------------------------------*/
async function initAuth() {
    // 1️⃣ Revisar si ya hay sesión al cargar la app
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) {
        console.error('[auth.js initAuth] Error al recuperar la sesión:', error);
        return;
    }

    if (session?.user) {
        user = { id: session.user.id, email: session.user.email };
        notifyAll();
    }

    // 2️⃣ Suscribirse a cambios de sesión (login, logout, refresh)
    supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
            user = { id: session.user.id, email: session.user.email };
        } else {
            user = { id: null, email: null };
        }
        notifyAll();
    });
}

// Inicializamos la sesión al cargar el archivo
initAuth();
