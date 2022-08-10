<template>
  <v-text-field
    @focus="expand"
    @blur="closed = true"
    class="expanding-search"
    :class="{ closed: closed }"
    placeholder="Search"
    filled
    dense
    clearable
    prepend-inner-icon="mdi-magnify"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      closed: true,
    };
  },
  methods: {
    expand() {
      this.closed = false;
    },
  },
};
</script>


<style lang="sass">
.expanding-search
    .v-input__slot
        &:before, &:after
            border-color: transparent!important
    &.closed
        max-width: 45px
</style>