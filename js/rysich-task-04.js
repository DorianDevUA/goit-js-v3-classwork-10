// Example 4 - Нотатки
// Напиши клас Tasks який керує колекцією завдань у властивості items.
// Завдання це об'єкт із властивостями title та priority.
// Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }

// Додай методи addTask(task), removeTask(title) та updateTask(title, newPriority).

class Tasks {
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high',
  };

  constructor(task) {
    this.items = task;
  }

  addTask(newTask) {
    const inArr = this.items.some(({ title }) => title === newTask.title);
    if (!inArr) {
      this.items.push(newTask);
    }
  }

  // removeTask(title) {
  //   this.items = this.items.filter(task => task.title !== title);
  // }

  removeTask(title) {
    const idx = this.items.findIndex(({ title: taskTitle }) => taskTitle === title);

    if (!!~idx) {
      // аналогічно idx !== -1 або idx > -1
      this.items.splice(idx, 1);
    }
  }

  // updateTask(title, newPriority) {
  //   const task = this.items.find(({ title: taskTitle }) => taskTitle === title);

  //   if (task) {
  //     task.priority = newPriority;
  //   }
  // }

  updateTask(title, newPriority) {
    const idx = this.items.findIndex(({ title: taskTitle }) => taskTitle === title);
    if (!!~idx) {
      // аналогічно idx !== -1 або idx > -1
      this.items[idx].priority = newPriority;
    }
  }
}

const myTasks = new Tasks([]);

myTasks.addTask({
  title: 'Моя перша замітка',
  priority: Tasks.Priority.LOW,
});
myTasks.addTask({
  title: 'Моя перша замітка',
  priority: Tasks.Priority.LOW,
});
console.log(myTasks.items);
// [{"title": "Моя перша замітка", "priority": "low" }]

myTasks.addTask({
  title: 'Моя друга замітка',
  priority: Tasks.Priority.NORMAL,
});
console.log(myTasks.items);
// [{"title": "Моя перша замітка", "priority": "low" }, {"title": "Моя друга замітка", "priority": "normal" }]

myTasks.removeTask('Моя перша замітка');
console.log(myTasks.items);
// [{"title": "Моя друга замітка", "priority": "normal" }]

myTasks.updateTask('Моя друга замітка', Tasks.Priority.HIGH);
console.log(myTasks.items);
// [{"title": "Моя друга замітка", "priority": "high" }]
