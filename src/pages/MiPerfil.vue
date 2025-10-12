<script>
import { reactive, onMounted } from 'vue';
import { subscribeToAuthStateChanges } from '../services/auth';
import { fetchPosts } from '../services/posts';
import AppH1 from '../components/AppH1.vue';
import PostTheme from '../components/PostTheme.vue';

export default {
    name: 'MiPerfil',
    components: { AppH1, PostTheme },
    setup() {
        const user = reactive({ email: null, id: null });
        const posts = reactive([]);

        subscribeToAuthStateChanges(current => {
            user.id = current.id;
            user.email = current.email;
        });

        const loadUserPosts = async () => {
            const allPosts = await fetchPosts();
            const myPosts = allPosts.filter(p => p.user_email === user.email);
            posts.splice(0, posts.length, ...myPosts);
        };

        onMounted(async () => {
            await loadUserPosts();
        });

        return { user, posts };
    }
}
</script>

<template>
    <AppH1>Mi perfil</AppH1>
    <section>

            <ul class="flex flex-col gap-4">
                <li v-for="post in posts" :key="post.id" class="bg-white p-4 rounded-[20px] shadow-sm border border-gray-200">
                    <div class="text-sm text-text-secondary mb-1">{{ post.theme }}</div>
                    <p class="text-text-paragraph mb-2">{{ post.content }}</p>
                    <div class="text-xs text-gray-500">{{ new Date(post.created_at).toLocaleDateString('es-AR') }}</div>
                </li>
            </ul>
    </section>
</template>
