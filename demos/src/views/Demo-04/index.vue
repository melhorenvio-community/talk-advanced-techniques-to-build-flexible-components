<script setup lang="ts">
// TYPES
import type { TagsModel } from '@components/TagsInput/types';

// COMPONENTS
import Trash from '~icons/iconamoon/trash';
import CloseFill from '~icons/iconamoon/close-fill';

const tagsModel = ref<TagsModel[]>([]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <demo-heading />

    <new-discussion-form>
      <tags-input-v4
        id="tags"
        v-model="tagsModel"
        name="tags"
        autocomplete="off"
      >
        <template
          #default="{
            tags,
            themeClasses,
            removeTag,
            inputBindings,
            inputListeners,
          }"
        >
          <div class="w-full flex items-center flex-wrap gap-2 p-2 border-2">
            <transition-group
              v-if="tags?.length"
              name="fade"
              tag="div"
              class="flex items-center flex-wrap gap-2"
              appear
            >
              <span
                v-for="tag in tags"
                :key="tag.id"
                :class="themeClasses"
                class="flex gap-2 px-3 py-1 rounded-sm select-none"
              >
                {{ tag.text }}

                <button
                  type="button"
                  @click="removeTag(tag.id)"
                >
                  <close-fill />
                </button>
              </span>
            </transition-group>

            <input
              class="w-auto h-8 grow outline-none"
              placeholder="Type something new..."
              v-bind="inputBindings"
              v-on="inputListeners"
            >
          </div>
        </template>
      </tags-input-v4>

      <tags-input-v4
        id="tags"
        v-model="tagsModel"
        name="tags"
        autocomplete="off"
      >
        <template
          #default="{
            tags,
            themeClasses,
            removeTag,
            inputBindings,
            inputListeners,
          }"
        >
          <div class="w-full flex flex-col gap-2">
            <input
              class="w-full p-3 border-2 outline-none"
              placeholder="Type something new..."
              v-bind="inputBindings"
              v-on="inputListeners"
            >

            <transition-group
              v-if="tags?.length"
              name="fade"
              tag="div"
              class="flex items-center flex-wrap gap-2"
              appear
            >
              <span
                v-for="tag in tags"
                :key="tag.id"
                :class="themeClasses"
                class="flex gap-2 px-3 py-1 rounded-sm select-none bg-green-500"
              >
                <button
                  type="button"
                  @click="removeTag(tag.id)"
                >
                  <trash />
                </button>

                {{ tag.text }}
              </span>
            </transition-group>
          </div>
        </template>
      </tags-input-v4>
    </new-discussion-form>
  </div>
</template>
