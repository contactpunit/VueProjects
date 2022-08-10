<template>
  <v-text-field
    v-model="searchText"
    @focus="expand"
    @blur="closed = true"
    class="expanding-search"
    :class="{ closed: closed && !searchText }"
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
      searchText: "",
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
    transition: max-width 0.3s
    .v-input__slot
        cursor: pointer !important
        &:before, &:after
            border-color: transparent !important
    &.closed
        max-width: 45px
        .v-input__slot
            background: transparent !important
</style>