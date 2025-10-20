// Servicio que ofrece las funciones para interactuar con la tabla de "posts".
import { supabase } from "./supabase";

/* =============================
   🟢 CREAR UN NUEVO POST
   ============================= */
export async function createPost({ sender_id, user_email, theme, content }) {
  // Insertamos un nuevo registro en la tabla "posts".
  const { data, error } = await supabase
    .from("posts")
    .insert({
      sender_id,
      user_email,
      theme,
      content,
    })
    .select()
    .single();

  if (error) {
    console.error("[posts.js createPost] Error al crear post:", error);
    throw error;
  }

  return data;
}

/* =============================
   🟣 TRAER TODOS LOS POSTS
   ============================= */
export async function fetchPosts() {
  // Traemos los posts más recientes primero.
  const { data, error } = await supabase
    .from("posts")
    .select("id, sender_id, user_email, theme, content, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[posts.js fetchPosts] Error al traer posts:", error);
    return [];
  }

  return data;
}

/* =============================
   🔵 TRAER POSTS DE UN USUARIO
   ============================= */
export async function fetchPostsByUserId(sender_id) {
  if (!sender_id) {
    throw new Error("[posts.js fetchPostsByUserId] sender_id es obligatorio");
  }

  const { data, error } = await supabase
    .from("posts")
    .select("id, sender_id, user_email, theme, content, created_at")
    .eq("sender_id", sender_id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[posts.js fetchPostsByUserId] Error:", error);
    throw error;
  }

  return data;
}

/* =============================
   🟠 SUSCRIBIRSE A NUEVOS POSTS
   ============================= */
export function subscribeToNewPosts(callback) {
  // Creamos un canal para escuchar los nuevos posts en tiempo real.
  const postsChannel = supabase.channel("posts-realtime");

  // Escuchamos los eventos INSERT (nuevos posts)
  postsChannel.on(
    "postgres_changes",
    {
      event: "INSERT",
      schema: "public",
      table: "posts",
    },
    payload => {
      // Ejecutamos el callback con el nuevo post recibido
      callback(payload.new);
    }
  );

  // Activamos la suscripción
  postsChannel.subscribe();

  // Devolvemos una función que permite desuscribirse cuando el componente se desmonte
  return () => {
    postsChannel.unsubscribe();
  };
}
