<template>
  <v-container mb-12>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <h2>
          Popular Products
          <v-btn to="/store" color="primary" small text>View All</v-btn>
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-row>
          <v-col
            sm="6"
            md="4"
            v-for="product in $store.state.products"
            :key="product.name"
          >
            <v-card outlined>
              <v-img :src="product.image" height="200px" />
              <v-card-title>{{ product.name }}</v-card-title>
              <v-card-subtitle>${{ product.price }}</v-card-subtitle>
              <v-card-actions>
                <v-btn color="success" outlined>
                  <v-icon small left>mdi-plus-thick</v-icon>
                  Add to Cart
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>