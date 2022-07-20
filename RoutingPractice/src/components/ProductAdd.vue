<template>
  <base-container>
    <h2>Add a Product</h2>
    <form @submit.prevent="addProduct">
      <div>
        <label for="title">Title</label>
        <input type="text" name="title" v-model.trim="title" />
      </div>
      <div>
        <label for="price">Price</label>
        <input type="number" name="price" v-model.number="price" />
      </div>
      <label for="description">Description</label>
      <div>
        <textarea
          name="description"
          id="description"
          rows="3"
          v-model.trim="description"
        ></textarea>
      </div>
      <p v-if="!isValid">Please enter valid data</p>
      <button>Add Product</button>
    </form>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      isValid: true,
      price: null,
      title: "",
      description: "",
    };
  },
  methods: {
    addProduct() {
      if (!this.title || !this.description || this.price === null)
        this.isValid = false;
      else {
        this.isValid = true;
        this.$store.dispatch("addProduct", {
          id: new Date().toString(),
          title: this.title,
          price: this.price,
          description: this.description,
        });
        this.$router.replace("/products");
      }
    },
  },
};
</script>

<style scoped>
p {
  color: red;
}

input,
label,
textarea {
  display: block;
  width: 100%;
}

label {
  font-weight: bold;
}

input,
textarea {
  font: inherit;
  margin-bottom: 0.5rem;
}

button {
  font: inherit;
  background-color: #570080;
  border: 1px solid #570080;
  color: white;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #220031;
  border-color: #220031;
}
</style>