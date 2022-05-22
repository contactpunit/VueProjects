import { createApp } from "vue"

import App from "./App.vue"
import FriendContact from "./components/FriendContact.vue"
import AddFriend from "./components/AddFriend.vue"

const app = createApp(App)

app.component("add-friend", AddFriend)
app.component("friend-contact", FriendContact)

app.mount("#app")
