<script setup lang="ts">
import { reactive } from 'vue'
import sourceData from '../data.json'

interface Thread {
    contributors: string[];
    firstPostId: string;
    forumId: string;
    lastPostAt: number;
    lastPostId: string;
    posts: string[];
    publishedAt: number;
    slug: string;
    title: string;
    userId: string;
    id: string;
}

interface Post {
    edited: {
        at: number;
        by: string;
        moderated: boolean;
    };
    publishedAt: number;
    text: string;
    threadId: string;
    userId: string;
    id: string;
    reactions?: object;
}

interface User {
    avatar: string;
    email: string;
    lastVisitAt: number;
    name: string;
    isModerator: boolean;
    registeredAt: number;
    username: string;
    usernameLower: string;
    id: string;
    bio?: string;
    twitter?: string;
    website?: URL;
}

const threads = <Thread[]> reactive(sourceData.threads)
const posts = <Post[]> reactive(sourceData.posts)
const users = <User[]> reactive(sourceData.users)

const postById = (id: string) => {
    return posts.find(post => post.id === id)!
}

const userById = (id: string) => {
    return users.find(user => user.id === id)
}
</script>

<template>
    <div 
        v-for="thread in threads"
        :key="thread.id"
        class="col-large push-top"
    >
        <h1>{{ thread.title }}</h1>

        <div class="post-list">
            <div 
            class="post"
            v-for="postid in thread.posts"
            :key="postid"
            >
            
            <div class="user-info">
                <a href="#" class="user-name">{{ userById(postById(postid).userId)?.name }}</a>

                <a href="#">
                    <img class="avatar-large" :src="userById(postById(postid).userId)?.avatar" alt="">
                </a>

                <p class="desktop-only text-small">107 posts</p>
            </div>
            
            <div class="post-content">
                <div>
                    <p>
                        {{ postById(postid).text }}
                    </p>
                </div>
            </div>
            
            <div class="post-date text-faded">
                {{ postById(postid).publishedAt }}
            </div>
        </div>
    </div>
</div>
</template>

<style></style>