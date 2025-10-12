<script>
import { reactive, ref, onMounted } from 'vue';
import { fetchPosts } from '../services/posts';
import { subscribeToAuthStateChanges } from '../services/auth';
import AppH1 from '../components/AppH1.vue';
import PostTheme from '../components/PostTheme.vue';

export default {
    name: 'Publicaciones',
    components: { AppH1, PostTheme },
    setup() {
        const posts = reactive([]);
        const currentUser = ref(null);

        subscribeToAuthStateChanges(user => currentUser.value = user);

        const loadPosts = async () => {
            const allPosts = await fetchPosts();
            posts.splice(0, posts.length, ...allPosts);
        };

        const formatDate = dateString => {
            const date = new Date(dateString);
            return date.toLocaleDateString('es-AR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        };

        onMounted(loadPosts);

        return { posts, currentUser, formatDate };
    }
};
</script>

<template>
    <section class="w-full max-w-5xl mx-auto px-4 py-10">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <AppH1>Publicaciones</AppH1>

            <RouterLink v-if="currentUser" to="/crear-post"
                class="bg-[#29D370] hover:bg-[#179BAE] text-white font-medium px-6 py-2 rounded-[20px] transition-all duration-200">
                Crear nueva publicación
            </RouterLink>
        </div>

        <!-- Listado de posts -->
        <div v-if="posts.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article v-for="post in posts" :key="post.id"
                class="bg-[#E9F3F4] border border-[#d6e9eb] rounded-[20px] p-5 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200">
                <div>
                    <p class="text-[#179BAE] font-semibold mb-1">
                        {{ post.user_email }}
                    </p>
                    <PostTheme class="text-[#FF7A18] font-medium mb-2">
                        {{ post.theme }}
                    </PostTheme>
                    <p class="text-[#1A1A1A] mb-3 leading-relaxed">
                        {{ post.content }}
                    </p>
                </div>
                <p class="text-xs text-[#4B4B4B] mt-2">
                    {{ formatDate(post.created_at) }}
                </p>
            </article>
        </div>

        <!-- Estado vacío -->
        <div v-else class="text-center py-20 text-[#4B4B4B]">
            <p class="text-lg mb-2">Todavía no hay publicaciones</p>
            <p class="text-sm">
                Sé el primero en compartir tu rutina o recomendación.
            </p>
            <RouterLink v-if="currentUser" to="/crear-post"
                class="inline-block mt-6 bg-[#179BAE] text-white px-6 py-2 rounded-[20px] hover:bg-[#006165] transition">
                Crear mi primera publicación
            </RouterLink>
        </div>
    </section>
</template>
