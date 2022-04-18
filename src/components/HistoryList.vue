<script setup>
defineProps({
  histories: {
    type: Object,
    require: true,
    default: {},
  },
})
</script>

<template>
  <div class="container">
    <table id="history-list" v-if="histories.length > 0">
      <thead>
        <tr>
          <th class="user">User</th>
          <th class="book">Book</th>
          <th class="book-id">Book ID</th>
          <th class="status">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(history, index) in histories" :key="index">
          <td>{{ history.username.uName }}</td>
          <td>
            <img id="his-img" style="width: 50%" :src="history.bookz.bookImg" />
          </td>
          <td>{{ history.bookz.bookId }}</td>
          <td
            :style="{
              color:
                history.action == 'BORROW' ? 'palevioletred' : 'aquamarine',
            }"
          >
            {{ history.action }}
          </td>
        </tr>
      </tbody>
    </table>
    <h3 v-else style="width: 100%; text-align: center">
      No history(s) in history list.
    </h3>
  </div>
</template>

<style scoped>
#history-list {
  width: 100%;
  font-family: 'Skranji';
  border-collapse: collapse;
  background-color: rgb(0, 0, 0, 0.6);
}

#history-list thead tr {
  padding: 12px 8px;
  color: rgb(239, 187, 31);
  background-color: black;
}

#history-list thead tr th {
  padding: 10px;
  font-size: 22px;
  filter: drop-shadow(0 0 0.7rem rgba(255, 255, 255, 0.5));
}

#history-list thead,
tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

#history-list tbody {
  display: block;
  overflow-y: auto;
  height: 400px !important;
}

#history-list tbody tr td {
  text-align: center;
  filter: drop-shadow(0 0 0.7rem rgba(255, 255, 255, 0.5));
}

#history-list tbody tr {
  height: 150px;
  margin: 10px 0;
}

#history-list tbody tr:not(:last-child) {
  border-bottom: 1px groove rgba(200, 200, 200, 1);
}
</style>
