<template>
  <v-text-field
    :value="searchValue"
    @input="setSearchText($event)"
    @focus="expand"
    @blur="closed = true"
    class="expanding-search"
    :class="{ closed: closed && !searchValue }"
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
  computed: {
    searchValue() {
      return this.$store.state.searchText;
    },
  },
  methods: {
    setSearchText(event) {
      this.$store.dispatch("setSearchText", event);
    },
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