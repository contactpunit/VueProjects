<template>
  <form @submit.prevent="submit">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstName.value"
        @input="clearValidity('firstName')"
      />
    </div>
    <p v-if="!firstName.isValid">Firstname cannot be empty</p>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="lastName.value"
        @input="clearValidity('lastName')"
      />
    </div>
    <p v-if="!lastName.isValid">Lastname cannot be empty</p>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.value"
        @input="clearValidity('description')"
      ></textarea>
    </div>
    <p v-if="!description.isValid">Description cannot be empty</p>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.value"
        @input="clearValidity('rate')"
      />
    </div>
    <p v-if="!rate.isValid">Rate cannot be empty</p>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.value"
          @blur="clearValidity('areas')"
        />
        <label for="frontend">Frontend</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.value"
          @blur="clearValidity('areas')"
        />
        <label for="backend">Backend</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.value"
          @blur="clearValidity('areas')"
        />
        <label for="career">Career</label>
      </div>
    </div>
    <p v-if="!areas.isValid">Areas cannot be empty</p>
    <p v-if="!formIsValid">Please fix above errors and re-submit the form</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: {
        value: '',
        isValid: true,
      },
      lastName: {
        value: '',
        isValid: true,
      },
      rate: {
        value: null,
        isValid: true,
      },
      description: {
        value: '',
        isValid: true,
      },
      areas: {
        value: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  emits: ['submit-data'],
  methods: {
    clearValidity(input) {
      if (!this[input].value && (input !== 'areas' || input !== 'rate')) {
        this[input].isValid = false;
        return;
      }
      if (
        input === 'rate' &&
        (this[input].value <= 0 || this[input].value === null)
      ) {
        this[input].isValid = false;
        return;
      }
      if (input === 'areas' && !this[input].value.length) {
        this[input].isValid = false;
        return;
      }
      this[input].isValid = true;
    },
    validateForm() {
      if (!this.firstName.value) {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (!this.lastName.value) {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (!this.description.value) {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (this.rate.value === null || this.rate.value < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (!this.areas.value.length) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submit() {
      this.validateForm();

      if (!this.formIsValid) return;

      const formData = {
        firstname: this.firstName,
        lastname: this.lastName,
        rate: this.rate,
        description: this.description,
        areas: this.areas,
      };

      this.$emit('submit-data', formData);
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