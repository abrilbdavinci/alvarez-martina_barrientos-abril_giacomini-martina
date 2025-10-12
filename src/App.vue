<script>
import { logout, subscribeToAuthStateChanges } from './services/auth';

export default {
    name: 'App',
    data() {
        return {
            user: {
                id: null,
                email: null,
            },
        }
    },
    methods: {
        handleLogout() {
            logout();
            this.$router.push('/login');
        },
    },
    mounted() {
        subscribeToAuthStateChanges(newUserState => this.user = newUserState);
    }
}
</script>

<template>
    <!-- Navbar fijo arriba -->
    <nav
        class="fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-10 py-3 bg-[#E9F3F4] rounded-b-[20px] z-50 transition-all duration-300">
        <!-- Logo / título -->
        <div class="brand flex items-center">
            <img src="/public/favicon.ico" alt="">
            <p class="text-lg md:text-2xl font-bold text-[#006165] whitespace-nowrap">
                älm <span class="text-[#179BAE]">| Skincare & Haircare</span>
            </p>
        </div>


        <!-- Menú -->
        <ul
            class="flex items-center gap-3 md:gap-6 text-sm md:text-base font-medium text-[#1A1A1A] flex-wrap justify-end">
            <li>
                <RouterLink to="/" class="hover:text-[#179BAE] transition-colors duration-200">Home</RouterLink>
            </li>

            <template v-if="user.id === null">
                <li>
                    <RouterLink to="/login"
                        class="px-4 py-2 bg-[#50B7C5] text-white rounded-[20px] hover:bg-[#179BAE] transition">Ingresar
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/register"
                        class="px-4 py-2 border border-[#179BAE] text-[#179BAE] rounded-[20px] hover:bg-[#179BAE] hover:text-white transition">
                        Crear cuenta</RouterLink>
                </li>
            </template>

            <template v-else>
                <li>
                    <RouterLink to="/publicaciones" class="hover:text-[#179BAE] transition">Publicaciones</RouterLink>
                </li>
                <li>
                    <RouterLink to="/mi-perfil" class="hover:text-[#179BAE] transition">Mi Perfil</RouterLink>
                </li>
                <li>
                    <form action="#" @submit.prevent="handleLogout" class="m-0">
                        <button type="submit"
                            class="px-4 py-2 bg-[#F8393C] text-white rounded-[20px] hover:opacity-90 transition">
                            {{ user.email }} (Cerrar sesión)
                        </button>
                    </form>
                </li>
            </template>
        </ul>
    </nav>


    <!-- Contenido principal -->
    <main class="w-full flex flex-col justify-start items-center min-h-screen pt-24 pb-24 px-4 bg-white text-[#1A1A1A]">
        <RouterView />
    </main>

    <!-- Footer fijo abajo -->
    <footer
        class="fixed bottom-0 left-0 w-full flex justify-center items-center h-16 bg-[#006165] text-white rounded-t-[20px] shadow-sm shadow-gray-300 text-center text-sm md:text-base">
        <p>Parcial 1 - CWM | Alvarez Barrientos Giacomini</p>
    </footer>
</template>
