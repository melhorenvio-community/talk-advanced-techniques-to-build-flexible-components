<script lang="ts">
import { Fragment } from 'vue';
import { v4 as uuidv4 } from 'uuid';

// TYPES
import type { InputHTMLAttributes, PropType } from 'vue';
import type {
  TagsInputListeners,
  TagsModel,
} from '@components/TagsInput/types';

export default defineComponent({
  name: 'TagsInputV4',

  inheritAttrs: false,

  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },

  props: {
    modelValue: {
      type: Array as PropType<TagsModel[]>,
      required: true,
    },
  },

  emits: [
    'update:modelValue',
  ],

  setup(_, { slots, attrs, emit }) {
    const tags = ref<TagsModel[]>([]);

    const newTag = ref<string>('');

    const inputBindings = reactive<InputHTMLAttributes>({
      ...attrs,
      value: newTag.value,
    });

    const inputListeners: TagsInputListeners = {
      input: (e: Event) => onInput(e),

      keydown: (e: KeyboardEvent) => {
        if (e.key === 'Backspace') {
          removeTag();

          return;
        }

        if (e.key === 'Enter') {
          e.preventDefault();

          addTag(newTag.value);
        }
      },
    };

    function onInput(event: Event): void {
      newTag.value = (event.target as HTMLInputElement).value;
    }

    function addTag(text: string): void {
      const tagAlreadyExists = tags.value?.find(tag => tag.text === text);

      if (newTag.value.length === 0 || tagAlreadyExists) {
        return;
      }

      tags.value?.push({
        id: uuidv4(),
        text,
      });

      newTag.value = '';

      emit('update:modelValue', tags.value);
    }

    function removeTag(id?: string): void {
      if (newTag.value.length || !tags.value) {
        return;
      }

      if (!id && newTag.value.length === 0) {
        tags.value.pop();

        return;
      }

      const target = tags.value.findIndex(tag => tag.id === id);

      tags.value.splice(target, 1);
    }

    return () => {
      return h(Fragment, [
        slots.default?.({
          tags: tags.value,
          inputBindings,
          inputListeners,
          removeTag,
        }),
      ]);
    };
  },
});
</script>
