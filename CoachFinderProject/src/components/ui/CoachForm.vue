<template>
  <form @submit.prevent="register">
    <div class="form-control">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" v-model.trim="firstName" />
    </div>
    <div class="form-control">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" v-model.trim="lastName" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea id="description" rows="5" v-model.trim="description"></textarea>
    </div>
    <div class="form-control">
      <label for="hrlyrate">Hourly Rate</label>
      <input type="number" id="hrlyrate" v-model.number="rate" />
    </div>
    <div class="form-control">
      <h3>Choose area of expertise</h3>
      <div>
        <label for="frontend">Frontend</label>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
      </div>
      <div>
        <label for="backend">Backend</label>
        <input type="checkbox" id="backend" value="backend" v-model="areas" />
      </div>
      <div>
        <label for="career">Career</label>
        <input type="checkbox" id="career" value="career" v-model="areas" />
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: '',
      lastName: '',
      rate: null,
      description: '',
      areas: [],
    };
  },
  methods: {
    register() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        rate: this.rate,
        description: this.description,
        areas: this.areas,
      };
      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>