import { reactive, readonly } from "vue";

interface PostsState {
    foo: string


}

export class PostsStore {
    #state: PostsState

    constructor() {
        this.#state = reactive<PostsState>({
            foo: 'testing store'
        })
    }

    getState() {
        return readonly(this.#state)
    }

    updateFoo(foo: string) {
        this.#state.foo = foo
    }
}

const mystore = new PostsStore()

export function usePosts() {
    return mystore
}