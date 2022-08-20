<template>
    <div class="posts">
        <h2>All Posts</h2>
        <ul>
            <li>
                <router-link to="/post/1">Post 1</router-link>
            </li>
            <li>
                <router-link to="/post/2">Post 2</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
ul {
    margin-bottom: 30px;
}
</style>