<template>
  <button :class="[theme, isRound, isBorder, isSize, blockCss]" :disabled="disabled || loading " :style="[minWidthCss]"
          class="huang-button"
          @click="change">
        <span class="icon-loading">
          <i v-if="loading" class="iconfont icon-loading icon-prefix"></i>
        </span>
    <span>
    <!--      <i v-if="prefix" class="iconfont icon-prefix icon-loading"></i>-->
        </span>
    <slot></slot>
    <!--    <span>-->
    <!--        <i v-if="loading" class="iconfont icon-prefix icon-loading"></i>-->
    <!--      <i v-if="prefix" :class="iconPrefix" class="iconfont icon-prefix"></i>-->
    <!--        <slot></slot>-->
    <!--      <i v-if="suffix" :class="iconSuffix" class="iconfont icon-suffix"></i>-->
    <!--    </span>-->
  </button>
</template>

<script>
export default {
  name: 'index',
  props: {
    type: {
      type: String,
      default: ''
    },
    minWidth: {
      type: String,
      default: '95px'
    },
    size: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    round: Boolean,
    border: Boolean,
    disabled: Boolean,
    block: Boolean,
    loading: Boolean

  },
  computed: {
    theme() {
      return this.type ? `huang-button-${this.type}` : ''
    },
    isRound() {
      return this.round ? 'is-round' : ''
    },
    isBorder() {
      return this.border ? 'is-border' : ''
    },
    isSize() {
      return this.size ? `huang-button-${this.size}` : ''
    },
    minWidthCss() {
      if (!this.minWidth) return ''
      return {'min-width': this.minWidth}
    },
    iconPrefix() {
      return this.prefix ? `icon-${this.prefix}` : ''
    },
    iconSuffix() {
      return this.suffix ? `icon-${this.suffix}` : ''
    },
    blockCss() {
      return this.block ? 'huang-button-block' : ''
    }

  },
  methods: {
    change() {
      this.$emit('click')

    }
  }
}
</script>

<style lang="scss" scoped>
@import "./button.scss";
</style>
