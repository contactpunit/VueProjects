<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Got to t2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  props: ['teamId'],
  data() {
    return {
      members: [],
      teamName: '',
    };
  },
  inject: ['teams', 'users'],
  methods: {
    loadTeamMembers(teamId) {
      if (teamId) {
        const selectedTeam = this.teams.find((team) => team.id === teamId);
        this.teamName = selectedTeam.name;
        const reqMembers = selectedTeam.members;
        const selectedMembers = [];
        for (const user of this.users) {
          if (reqMembers.includes(user.id)) selectedMembers.push(user);
        }
        this.members = selectedMembers;
      }
    },
  },
  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
    },
  },
  created() {
    this.loadTeamMembers(this.teamId);
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>