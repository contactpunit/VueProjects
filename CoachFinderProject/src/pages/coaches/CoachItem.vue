<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hr</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :title="area"
        :type="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button :to="coachContactLink" link mode="outline"
        >Contact</base-button
      >
      <base-button :to="coachDetailLink" link :fullName="fullName" :rate="rate"
        >View Details</base-button
      >
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      return `/coaches/${this.id}/contact`;
    },
    coachDetailLink() {
      return `/coaches/${this.id}`;
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