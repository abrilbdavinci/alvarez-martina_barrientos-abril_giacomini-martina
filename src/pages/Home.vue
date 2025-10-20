<script>
import AppH1 from '../components/AppH1.vue';

export default {
    name: 'Home',
    components: { AppH1, },
};
</script>

<template>
    <div class="min-h-screen">
        <!-- HERO -->
        <section class="w-full py-16 md:py-14 sm:py-6 lg:px-8">
            <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

                <!-- Texto principal -->
                <div class="lg:w-1/2 text-center lg:text-left">
                    <h2 class="text-[#006165] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                        Kälm: Tu asistente personal de cuidado.
                    </h2>
                    <p class="mt-4 text-lg md:text-xl text-[#4B4B4B] leading-relaxed">
                        Construir una rutina de vida y autocuidado basada en tus necesidades de piel y cabello.
                    </p>

                    <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <RouterLink to="/register"
                            class="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-[100px] shadow-md text-[#FFFFFF] bg-[#29D370] text-[#006165] border border-transparent ">
                            
                            Comenzar GRATIS
                        </RouterLink>
                        <RouterLink to="/publicaciones"
                            class="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-[100px] shadow-md border-2 border-[#179BAE] text-[#179BAE] bg-[#FFFFFF] ">
                            <i class="fa-solid fa-users mr-2 text-[#179BAE]"></i>
                            Comunidad
                        </RouterLink>
                    </div>
                </div>

                <!-- Imagen / Demo -->
                <div class="lg:w-1/2 mt-10 lg:mt-0 relative">
                    <div class="bg-[#E9F3F4] p-8 rounded-[20px] shadow-2xl border border-[#50B7C5]">
                        <div
                            class="w-full h-64 md:h-80 rounded-xl flex flex-col items-center justify-center text-[#1A1A1A]">
                            <img src="./../../favicon.ico" alt="">
                            <p class="text-xl font-bold">Kälm App</p>
                            <p class="text-sm mt-1 text-[#4B4B4B]">Skincare • Haircare • Rutina</p>
                        </div>
                    </div>
                    <div
                        class="hidden md:block absolute bottom-0 right-0 w-32 h-32 bg-[#50B7C5] rounded-full transform translate-x-1/4 translate-y-1/4 blur-xl opacity-30 z-0">
                    </div>
                </div>
            </div>
        </section>

        <!-- PASOS -->
        <section class="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-3xl font-bold text-center text-[#006165] mb-12">
                    Cómo Kälm crea tu rutina única
                </h2>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Paso 1 -->
                    <div
                        class="flex flex-col items-center text-center p-6 rounded-[20px] bg-[#E9F3F4] shadow-md border-t-4 border-[#50B7C5]">
                        <div
                            class="bg-[#50B7C5] w-12 h-12 rounded-full flex items-center justify-center text-[#E9F3F4] text-xl font-bold mb-4">
                            1
                        </div>
                        <i class="fa-solid fa-user-pen text-[#50B7C5] text-3xl mb-3"></i>
                        <h3 class="text-xl font-semibold text-[#1A1A1A] mb-2">
                            Define tu perfil
                        </h3>
                        <p class="text-[#4B4B4B]">
                            Completa tus datos y propósito: cuidado de piel, cabello o ambos.
                        </p>
                    </div>

                    <!-- Paso 2 -->
                    <div
                        class="flex flex-col items-center text-center p-6 rounded-[20px] bg-[#E9F3F4] shadow-md border-t-4 border-[#179BAE]">
                        <div
                            class="bg-[#179BAE] w-12 h-12 rounded-full flex items-center justify-center text-[#E9F3F4] text-xl font-bold mb-4">
                            2
                        </div>
                        <i class="fa-solid fa-flask text-[#179BAE] text-3xl mb-3"></i>
                        <h3 class="text-xl font-semibold text-[#1A1A1A] mb-2">
                            Análisis personalizado
                        </h3>
                        <p class="text-[#4B4B4B]">
                            Realiza nuestro test adaptado a tus respuestas y estilo de vida.
                        </p>
                    </div>

                    <!-- Paso 3 -->
                    <div
                        class="flex flex-col items-center text-center p-6 rounded-[20px] bg-[#E9F3F4] shadow-md border-t-4 border-[#006165]">
                        <div
                            class="bg-[#006165] w-12 h-12 rounded-full flex items-center justify-center text-[#E9F3F4] text-xl font-bold mb-4">
                            3
                        </div>
                        <i class="fa-solid fa-spa text-[#006165] text-3xl mb-3"></i>
                        <h3 class="text-xl font-semibold text-[#1A1A1A] mb-2">
                            Rutina personalizada
                        </h3>
                        <p class="text-[#4B4B4B]">
                            Obtén una rutina clara y guiada según tus resultados.
                        </p>
                    </div>

                    <!-- Paso 4 -->
                    <div
                        class="flex flex-col items-center text-center p-6 rounded-[20px] bg-[#E9F3F4] shadow-md border-t-4 border-[#29D370]">
                        <div
                            class="bg-[#29D370] w-12 h-12 rounded-full flex items-center justify-center text-[#E9F3F4] text-xl font-bold mb-4">
                            4
                        </div>
                        <i class="fa-solid fa-chart-line text-[#29D370] text-3xl mb-3"></i>
                        <h3 class="text-xl font-semibold text-[#1A1A1A] mb-2">
                            Dashboard personal
                        </h3>
                        <p class="text-[#4B4B4B]">
                            Visualiza tu progreso y mantén tus hábitos saludables.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA FINAL -->
        <section class="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#50B7C5]">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl md:text-4xl font-extrabold text-[#006165] mb-4">
                    Comenzar a cuidarte con Kälm
                </h2>
                <p class="text-lg text-[#4B4B4B] mb-8">
                    La rutina de cuidado propio perfecta está cerca.
                </p>
            </div>
        </section>
    </div>
</template>
