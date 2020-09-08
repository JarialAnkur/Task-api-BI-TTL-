# Task-REST-API with TTL

Task API is a REST-API which takes Task to be done with the duration after which it will get deleted.

## Installation

Download  [NodeJS](https://nodejs.org/en/) to get npm and install all the dependencies used to run the project.

```` bash
node -v
v12.18.3
````

```bash
npm -v
6.14.8
```

Open the project file and in the root folder run the following command.

```bash
npm init
```

### Usage

This API have two endpoints 

- /add (POST)

- /list(GET)

When you are Posting,  these are the fields that you want to send data using POST (**Take care of the spellings**)

- taskname = This will have the name of your task.
- task_description = This will have the description of the task.
- creator = This will have the name of creator.
- duration = This field will get a numeric value that will be the Time in **Minutes** after which the Task will               be removed from database.

You will get back the data that you sent and a status code of 200 if it was successfully saved in database, otherwise you will get an error and status code of 404.

```javascript
{
    "duration": 1,
    "taskname": "task 2",
    "task_description": "Description of task 2",
    "creator": "Jarial",
    "createdAt": "2020-09-08T19:07:21.592Z"
}
```

```javascript
{
    "error": "Something went wrong"
}
```

