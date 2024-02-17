module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"task to register",
                        example:"Task 1"
                    },
                    completed:{
                        type:'boolean',
                        description:"Check if task is completed",
                        example:"true"
                    },
                }
            }
        }
    }
}