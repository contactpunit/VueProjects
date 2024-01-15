<template>
    <div>
        <h1>Posts</h1>
        <v-text-field
        v-model="search"
        append-icon="mdi-search"
        label="Search"
        single-line
        hide-details
        ></v-text-field>
        <v-data-table
            :headers="[
                {
                    title: 'All Posts',
                    align: 'start',
                    sortable: false,
                    key: 'title'
                },
                {
                    title: 'Author',
                    align: 'end',
                    key: 'author'
                }
            ]"
            :items="posts"
            show-select
            item-value="title"
            v-model="selected"
            :search="search"
        >
        <template #item.title="{item}">
            <v-dialog fullscreen>
            <template v-slot:activator="{ props }">
                <button v-bind="props"> {{ item.title }} </button>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Edit Post">
                <v-card-text>
                    <PostForm :post="item" ref="postForm"></PostForm>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                    text="Cancel"
                    @click="isActive.value = false"
                    ></v-btn>

                    <v-btn
                    color="blue"
                    variant="flat"
                    text="Save Post"
                    @click="() => {
                        postForm.submit();
                        isActive.value = false;
                    }"
                    ></v-btn>
                </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
        </template>
        </v-data-table>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { VDataTable } from 'vuetify/lib/components/index.mjs';
import PostForm from './PostForm.vue'

const selected = ref([])
const search = ref('')
const postForm = ref()
const posts = reactive([
    {
        title: 'Post1',
        author: 'Punit'
    },
    {
        title: 'Post2',
        author: 'Nidhi'
    },
    {
        title: 'Post3',
        author: 'Manu'
    },
    {
        title: 'Post4',
        author: 'Ankita'
    },
    {
        title: 'Post5',
        author: 'Priyal'
    },
    {
        title: 'Post6',
        author: 'Priyansh'
    },
    {
        title: 'Post7',
        author: 'Parveen'
    },
])
</script>