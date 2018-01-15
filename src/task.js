/*
task is responsible for creating a single task object
*/
//
// const Task = (() => {
//   let taskId = 0
//   return class Task {
//     constructor(description, priority, list) {
//       this.id = ++taskId
//       this.description = description;
//       this.priority = priority;
//
//       if(list) {
//         this.listId = list.id;
//       }
//       store.tasks.push(this);
//     }
//   }
//
//   list() {
//     return store.lists.find(list => {
//       return list.id === this.listId
//     })
//   }
//
// })()
