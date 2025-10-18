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
        class="fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-10 py-5 bg-white rounded-b-[20px] z-50 transition-all duration-300 shadow-md">
        <!-- Logo / título -->
        <div class="brand flex items-center">
            <img src="/public/k-dark.svg" alt="Kälm logo dark" class="h-8 me-4">
            <p class="text-lg md:text-2xl font-bold text-(--color-dark-kalm) whitespace-nowrap">
                Kälm <span class="text-(--color-primary-kalm)"></span>
            </p>
        </div>


        <!-- Menú -->
        <ul
            class="flex items-center gap-3 md:gap-6 text-sm md:text-base font-medium text-[#1A1A1A] flex-wrap justify-end">
            <li>
                <RouterLink to="/" class="hover:text-(--color-primary-kalm) transition-colors duration-200">Home</RouterLink>
            </li>

            <template v-if="user.id === null">
                <li>
                    <RouterLink to="/login"
                        class="px-4 py-2 bg-(--color-primary-kalm) text-white rounded-[20px] hover:bg-(--color-dark-kalm) transition">Ingresar
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/register"
                        class="px-4 py-2 border border-(--color-primary-kalm) text-(--color-primary-kalm) rounded-[20px] hover:bg-(--color-dark-kalm) hover:text-white transition">
                        Crear cuenta</RouterLink>
                </li>
            </template>

            <template v-else>
                <li>
                    <RouterLink to="/publicaciones" class="hover:text-(--color-primary-kalm) transition">Publicaciones</RouterLink>
                </li>
                <li>
                    <RouterLink to="/mi-perfil" class="hover:text-(--color-primary-kalm) transition">Mi Perfil</RouterLink>
                </li>
                <li>
                    <form action="#" @submit.prevent="handleLogout" class="m-0">
                        <button type="submit"
                            class="px-4 py-2 bg-[#772527] text-white rounded-[20px] hover:opacity-90 transition">
                            {{ user.email }} (Cerrar sesión)
                        </button>
                    </form>
                </li>
            </template>
        </ul>
    </nav>


    <!-- Contenido principal -->
    <main class="w-full flex flex-col justify-start items-center pt-35 pb-35 px-4 bg-white text-[#1A1A1A]">
        <RouterView />
    </main>

    <!-- Footer fijo abajo -->
    <footer class="flex items-end px-4 py-10 justify-between bg-(--color-dark-kalm) rounded-t-2xl text-white">
        <div>
                <ul>
                    <li><router-link to="/">Inicio</router-link></li>
                    <li><router-link to="/publicaciones">Publicaciones</router-link></li>
                    <li><router-link to="/login">Iniciar sesión</router-link></li>
                    <li><router-link to="/signin">Crear cuenta</router-link></li>
                </ul>
            <p class="mt-3">© 2025 Kälm. All rights reserved.</p>
        </div>
        <div class="text-end flex flex-col items-end flex-wrap">
                <img class="h-20" src="/public/K.svg" alt="Kälm logo">
            <p class="mt-3">Escuela Da Vinci - DWM4AP</p>
            <p>Clientes Web Mobile, Parcial 1. Alvarez, Barrientos, Giacomini</p>
        </div>
    </footer>
</template>
