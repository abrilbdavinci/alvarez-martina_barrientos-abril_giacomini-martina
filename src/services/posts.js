// src/services/posts.js
import { supabase } from "./supabase";

// Traer todos los posts
export async function fetchPosts() {
  const { data, error } = await supabase
    .from("posts")
    .select("id, content, theme, user_email, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

// Crear un nuevo post
export const createPost = async (post) => {
  const { data, error } = await supabase
    .from("posts")
    .insert([post])
    .select()
    .single();

  if (error) throw error;
  return data;
};

// **Suscribirse a nuevos posts en tiempo real**
export const subscribeToNewPosts = (callback) => {
  supabase
    .channel("posts-realtime")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "posts" },
      (payload) => {
        callback(payload.new);
      }
    )
    .subscribe();
};
