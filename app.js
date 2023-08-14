const App = {
  data() {
    return {
      task: "",
      taskList: [],
      favoredTasks: 0,
    };
  },
  methods: {
    checkTheTaskList() {
      return this.taskList.length !== 0;
    },
    addTask(event) {
      if (this.task === "") return;

      if (event) {
        console.log();
      }

      this.taskList.push(this.task);
      this.task = "";
    },
    deleteTask(index) {
      this.taskList.splice(index, 1);
      this.favoredTasks++;
    },

    mark(event) {
      const element = event.target.parentElement.previousElementSibling;
      const taggedElement = element.classList.toggle("primary");

      event.target.textContent = taggedElement ? "убрать пометку" : "пометить";
    },
  },
  computed: {},
  watch: {},
};

Vue.createApp(App).mount("#app");
