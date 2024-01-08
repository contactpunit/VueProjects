<template>
    <div>
        <h1>Posts</h1>
        <v-table
          :height="500"
          :fixed-header="true"
          density="comfortable"
          :hover="true"
        >
            <thead>
                <tr>
                    <th class="text-left">
                    Name
                    </th>
                    <th class="text-left">
                    Author
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in posts"
                    :key="item.title"
                >
                    <td>{{ item.title }}</td>
                    <td>{{ item.author }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

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