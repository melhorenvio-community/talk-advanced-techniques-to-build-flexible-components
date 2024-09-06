<template>
  <div class="w-[800px] h-auto p-10 bg-white rounded-xl">
    <h3 class="font-bold text-xl text-center text-gray-950">
      Start a New Discussion
    </h3>

    <form
      action="javascript:;"
      class="grid grid-cols-2 gap-8 mt-10"
    >
      <fieldset class="flex flex-col gap-2">
        <label
          for="title"
          class="font-semibold"
        >
          Title
        </label>

        <input
          id="title"
          type="text"
          name="title"
          placeholder="New discussion..."
          class="block p-3 border-2"
        >
      </fieldset>

      <fieldset class="flex flex-col gap-2">
        <label
          for="category"
          class="font-semibold"
        >
          Category
        </label>

        <select
          id="category"
          name="category"
          class="block p-3 pr-4 border-2 text-gray-950"
        >
          <option
            disabled
            selected
          >
            Choose category...
          </option>

          <option value="issue">
            Issue
          </option>

          <option value="enhancement">
            Enhancement
          </option>

          <option value="docs">
            Docs
          </option>
        </select>
      </fieldset>

      <textarea
        id="description"
        name="description"
        placeholder="Write your ideas..."
        rows="5"
        class="col-span-2 block p-3 border-2 resize-none"
      />

      <fieldset class="col-span-2 flex flex-col gap-2">
        <label
          for="tags"
          class="font-semibold"
        >
          Tags
        </label>

        <slot />
      </fieldset>

      <button
        class="
          col-start-2
          flex
          items-center
          justify-center
          w-full
          max-w-[200px]
          ml-auto
          p-2
          rounded-sm
          font-bold
          text-white
          bg-purple-400
          hover:bg-purple-500 transition-all
        "
      >
        Start Discussion
      </button>
    </form>
  </div>
</template>
