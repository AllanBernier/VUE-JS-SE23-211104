import { defineStore } from "pinia";


const useCounter = defineStore('counter', {
    state : () => ({
        count : 0,
        tasks : [
            { name : "task 2", completed : false, deadline : new Date(2022, 10, 25)},
            { name : "task 3", completed : true , deadline : new Date(2025, 10 ,25)},
            { name : "task 1", completed : true , deadline : new Date()},
            { name : "task 4", completed : false , deadline : new Date()},
        ]
    }),

    getters : {
        completedTask() {
            return this.tasks.filter( (t) => t.completed)
        }
    },

    actions : {
        increment() {
            this.count ++
        },

        decrement() {
            this.count --
        }
    }
})

export default useCounter;


// export default A;
// import A from file

export default = { A, B };
import { A, B } from file