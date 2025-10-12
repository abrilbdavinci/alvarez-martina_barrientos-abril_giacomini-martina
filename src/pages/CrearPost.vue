<script>
import { ref } from 'vue';
import { createPost } from '../services/posts';
import { subscribeToAuthStateChanges } from '../services/auth';

export default {
  name: 'CrearPost',
  setup() {
    const content = ref('');
    const theme = ref('haircare');
    const currentUser = ref(null);

    subscribeToAuthStateChanges(user => currentUser.value = user);

    const handleSubmit = async () => {
      if (!content.value.trim()) return;
      await createPost({
        content: content.value,
        theme: theme.value,
        user_email: currentUser.value.email
      });
      content.value = '';
      window.location.href = '/publicaciones';
    };

    return { content, theme, currentUser, handleSubmit };
  }
}
</script>

<template>
  <section class="flex justify-center items-center min-h-[80vh]">
    <div class="bg-[#E9F3F4] w-full max-w-lg p-8 rounded-[20px] shadow-sm shadow-gray-300">
      <h2 class="text-2xl font-semibold text-[#006165] mb-6 text-center">Crear nuevo post</h2>
      
      <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
        <div>
          <label class="block mb-1 text-[#4B4B4B]">Tema</label>
          <select
            v-model="theme"
            class="w-full p-3 rounded-[20px] border border-[#50B7C5] focus:outline-none focus:ring-2 focus:ring-[#179BAE] transition"
          >
            <option value="haircare">Haircare</option>
            <option value="skincare">Skincare</option>
          </select>
        </div>

        <div>
          <label class="block mb-1 text-[#4B4B4B]">Contenido</label>
          <textarea
            v-model="content"
            rows="4"
            class="w-full p-3 rounded-[20px] border border-[#50B7C5] focus:outline-none focus:ring-2 focus:ring-[#179BAE] transition"
          ></textarea>
        </div>

        <button
          type="submit"
          class="bg-[#29D370] text-white py-2 rounded-[20px] shadow-sm shadow-gray-300 hover:bg-[#179BAE] transition"
        >
          Publicar
        </button>
      </form>
    </div>
  </section>
</template>
