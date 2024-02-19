module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"Task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"Task to show",
                        example:"Task 1"
                    },
                    completed:{
                        type:'boolean',
                        description:"Check if task is completed",
                        example:"true"
                    },
                }
            },
            TaskInput:{
                type:'object',
                properties:{
                    title:{
                        type:'string',
                        description:"Task to register",
                        example:"Task 1"
                    },
                    completed:{
                        type:'boolean',
                        description:"Check if task is completed",
                        example:"true"
                    },
                }
            },
            ID:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"Task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    }
                }
            }
        }
    }
}