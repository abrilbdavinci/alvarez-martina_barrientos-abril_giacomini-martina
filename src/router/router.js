import { createRouter, createWebHistory } from 'vue-router';
import Publicaciones from '../pages/Publicaciones.vue';
import CrearPost from '../pages/CrearPost.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import MiPerfil from '../pages/MiPerfil.vue';
import { supabase } from '../services/supabase';

const routes = [
    { path: '/', component: Publicaciones },
    { path: '/publicaciones', component: Publicaciones },
    { path: '/crear-post', component: CrearPost, meta: { requiresAuth: true } },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/mi-perfil', component: MiPerfil, meta: { requiresAuth: true } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to) => {
    if(to.meta.requiresAuth) {
        // Obtiene el usuario actual de Supabase
        const { data } = await supabase.auth.getUser();
        const user = data.user;

        if(!user) {
            return '/login';
        }
    }
});

export default router;
