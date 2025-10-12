<script>
import AppH1 from '../components/AppH1.vue';
import { login } from '../services/auth';

export default {
    name: 'Login',
    components: { AppH1 },
    data() {
        return {
            loading: false,
            user: {
                email: '',
                password: '',
            },
        }
    },
    methods: {
        async handleSubmit() {
            try {
                this.loading = true;
                await login(this.user.email, this.user.password);
                this.$router.push('/mi-perfil');
            } catch (error) {
                console.error("Error: ", error);
            }
            this.loading = false;
        },
    },
}
</script>

<template>
    <section class="flex justify-center items-center w-full max-w-5xl mx-auto px-4 py-10">
        <div class="bg-[#E9F3F4] w-5xl max-w-md p-8 rounded-[20px] shadow-sm shadow-gray-300">
            <AppH1 class="text-center mb-6 text-[#006165]">Ingresar a mi cuenta</AppH1>

            <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
                <div>
                    <label for="email" class="block text-[#4B4B4B] mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        v-model="user.email"
                        class="w-full p-3 rounded-[20px] border border-[#50B7C5] focus:outline-none focus:ring-2 focus:ring-[#179BAE] transition"
                    />
                </div>

                <div>
                    <label for="password" class="block text-[#4B4B4B] mb-1">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        v-model="user.password"
                        class="w-full p-3 rounded-[20px] border border-[#50B7C5] focus:outline-none focus:ring-2 focus:ring-[#179BAE] transition"
                    />
                </div>

                <button
                    type="submit"
                    :disabled="loading"
                    class="mt-2 bg-[#179BAE] text-white py-2 rounded-[20px] shadow-sm shadow-gray-300 hover:bg-[#006165] transition"
                >
                    {{ loading ? 'Ingresando...' : 'Ingresar' }}
                </button>
            </form>
        </div>
    </section>
</template>
