<template>
  <div @click="setTheme" class="theme-cube" :key="theme">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <g id="theme-box" transform="translate(-2915 226)">
          <g
            id="background"
            transform="translate(2915 -226)"
            :fill="theme.background ? theme.background : 'var(--background)'"
          >
            <path
              d="M8,0H92a8,8,0,0,1,8,8V92a8,8,0,0,1-8,8H8a8,8,0,0,1-8-8V8A8,8,0,0,1,8,0Z"
              stroke="none"
            />
            <path
              d="M 8 3 C 5.24298095703125 3 3 5.24298095703125 3 8 L 3 92 C 3 94.75701904296875 5.24298095703125 97 8 97 L 92 97 C 94.75701904296875 97 97 94.75701904296875 97 92 L 97 8 C 97 5.24298095703125 94.75701904296875 3 92 3 L 8 3 M 8 0 L 92 0 C 96.41827392578125 0 100 3.58172607421875 100 8 L 100 92 C 100 96.41827392578125 96.41827392578125 100 92 100 L 8 100 C 3.58172607421875 100 0 96.41827392578125 0 92 L 0 8 C 0 3.58172607421875 3.58172607421875 0 8 0 Z"
              stroke="none"
              fill="var(--border)"
            />
          </g>
          <rect
            id="forgeround"
            width="45"
            height="45"
            rx="8"
            transform="translate(2963 -178)"
            :fill="theme.foreground ? theme.foreground : 'var(--foreground)'"
          />
          <rect
            id="primary"
            width="33"
            height="10"
            rx="4"
            transform="translate(2969 -151)"
            :fill="theme.primary ? theme.primary : 'var(--primary)'"
          />
          <g id="contour" transform="translate(-110 6)">
            <rect
              id="text"
              width="75"
              height="4"
              rx="2"
              transform="translate(3034 -223)"
              :fill="theme.text ? theme.text : 'var(--text)'"
            />
            <g
              id="text-hint"
              :fill="
                theme['text-hint'] ? theme['text-hint'] : 'var(--text-hint)'
              "
            >
              <rect
                id="矩形_50"
                data-name="矩形 50"
                width="60"
                height="2"
                rx="1"
                transform="translate(3034 -215)"
              />
              <rect
                id="矩形_52"
                data-name="矩形 52"
                width="60"
                height="2"
                rx="1"
                transform="translate(3034 -211)"
              />
            </g>
            <g
              id="border"
              :fill="theme.border ? theme.border : 'var(--border)'"
            >
              <rect
                id="矩形_51"
                data-name="矩形 51"
                width="25"
                height="2"
                rx="1"
                transform="translate(3034 -207)"
              />
              <rect
                id="矩形_53"
                data-name="矩形 53"
                width="25"
                height="2"
                rx="1"
                transform="translate(3034 -203)"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
    <span class="text-hint"> {{ theme.name }} </span>
    :
    <span class="text-hint">
      {{ $jetTheme.usedThemes.indexOf(theme) + 1 }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'j-theme-cube',
  props: {
    theme: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // 主题当前主题已被应用时清
    /* 当前主题已被应用时 */
    setTheme() {
      if (this.clearTheme()) {
        this.$jetTheme.usedThemes.push(this.theme);
      }
    },
    clearTheme() {
      if (
        this.$jetTheme.usedThemes.length ==
        this.getThemeIndexOfUsedTheme() + 1
      ) {
        return false;
      }

      while (this.getThemeIndexOfUsedTheme() != -1) {
        this.$jetTheme.usedThemes.splice(this.getThemeIndexOfUsedTheme(), 1);
      }

      return true;
    },
    getThemeIndexOfUsedTheme() {
      return this.$jetTheme.usedThemes.indexOf(this.theme);
    },
  },
};
</script>

<style>
.theme-cube * {
  user-select: none;
}

.theme-cube {
  display: inline-block;
  margin: 5px;
}
</style>
