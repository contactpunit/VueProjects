<template>
  <li>
    <h3>{{ fullname }}</h3>
    <h4>${{ rate }}/hr</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="contactLink">Contact</base-button>
      <base-button link :to="coachLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['firstName', 'lastName', 'rate', 'areas', 'id'],
  computed: {
    fullname() {
      return this.firstName + ' ' + this.lastName;
    },
    contactLink() {
      return '/coaches/' + this.id + '/contact';
    },
    coachLink() {
      return '/coaches/' + this.id;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>