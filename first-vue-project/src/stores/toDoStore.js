import { defineStore } from "pinia";


const useStore = defineStore('counter', {
    state : () => ({
        tasks : [
            { name : "task 2", completed : false, deadline : new Date(2022, 10, 25)},
            { name : "task 3", completed : true , deadline : new Date(2025, 10 ,25)},
            { name : "task 1", completed : true , deadline : new Date()},
            { name : "task 4", completed : false , deadline : new Date()},
        ],
        nameToAdd : "",
        dateToAdd : new Date(),
        showCompleted : true
    }),

    getters : { 
        filterCompleted () {
            return this.showCompleted ? this.tasks.filter( (t) => !t.completed ) : this.tasks
        }
       },

    actions : { 
        delete(task) {
            const index = this.tasks.findIndex( (t) => t.name == task.name)
            this.tasks.splice(index , 1 )
        },
        completed(task) {
            task.completed = ! task.completed
        },
        add() {
            this.tasks.push({ name : this.nameToAdd, completed : false, deadline : new Date(this.dateToAdd) })
            
            

            this.nameToAdd = ""
            this.dateToAdd = new Date(2025, 10 ,25)
        },
        hide() {
            this.showCompleted = ! this.showCompleted
        }
    }
})

    export default useStore;