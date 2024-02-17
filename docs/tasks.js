module.exports = {
    paths: {
        '/create': {
            post: {
                tags: {
                    Tasks: "Create a task",
                },
                description: "Create Task",
                operationId: "createTask",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                            $ref: "#/components/schemas/Task",
                            }
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Task created successfully",
                    },
                    500: {
                        description: "There was a problem trying to create a new task",
                    },
                },
            }
        },
        '/': {
            get: {
                tags: {
                    Tasks: 'Get all created tasks'
                },
                description: "Get all Tasks",
                operationId: "getTasks",
                parameters: [],
                responses: {
                    201: {
                        description: "Tasks",
                    },
                    500: {
                        description: "There was a problem searching for your tasks",
                    },
                },
            }
        },
        '/id/{_id}': {
            get: {
                tags: {
                    Tasks: "Get task by ID",
                },
                description: "Get task by ID",
                operationId: "taskById",
                parameters: [
                    {
                    name: "_id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/Task",
                    },
                    description: "Id of Task to get",
                    },
                ],
                responses: {
                    200: { description: 'Your task '},
                    500: { description: "There was a problem searching for your task" },
                },
            },
        },
        '/id/{_id}': {
            put: {
                tags: {
                    Tasks: "Update task by ID",
                },
                description: "Update task by ID",
                operationId: "updateTaskById",
                parameters: [
                    {
                    name: "_id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/Task",
                    },
                    description: "Id of Task to update",
                    },
                ],
            requestBody: {
                content: {
                    "application/json": {
                        schema: { $ref: "#/components/schemas/Task" },
                    },
                },
            },
                responses: {
                    200: { description: 'Task updated' },
                    500: { description: "There was a problem updating your task" },
                },
            },
        },
        '/markAsCompleted/{_id}': {
            put: {
                tags: {
                    Tasks: "Mark task as completed by ID",
                },
                description: "Update task by ID, mark as completed",
                operationId: "updateTaskById",
                parameters: [
                    {
                    name: "_id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/Task",
                    },
                    description: "Id of Task to update",
                    },
                ],
            requestBody: {
                content: {
                    "application/json": {
                        schema: { $ref: "#/components/schemas/Task" },
                    },
                },
            },
                responses: {
                    200: { description: 'Task updated' },
                    500: { description: "There was a problem updating your task" },
                },
            },
        },
        '/id/{_id}': {
            delete: {
                tags: {
                    Tasks: "Delete task by ID",
                },
                description: "Delete task by ID",
                operationId: "deleteTaskById",
                parameters: [
                    {
                    name: "_id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/Task",
                    },
                    description: "Id of Task to delete",
                    },
                ],
                responses: {
                    200: { description: 'Task delted!' },
                    500: { description: "There was a problem deleting your task" },
                },
            },
        },
    },
};

