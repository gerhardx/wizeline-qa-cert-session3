# Wizeline QA Certification

Assessment session 3, backend performance testing with artillery

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Node, NPM](https://nodejs.org/en/) - Javascriptruntime and package manager
* [artillery](https://artillery.io) - Tool to automate backend testing

### Installing

With node and npm installed just run in the root project folder

```
npm install
```

If you didn't installed artillery globally, you will need to add it to the project manually.

## Running the tests

- Export you todoist token for your local environment:

```
export TOKEN="YOUR_TOKEN_HERE"
```

Teste are divided on cases:

- To run get all tasks:

```
npm run getall
```

- To run specific task tests (get byid, update, close, reopen, delete): 

```
npm start
```

[^Reports]: `data.csv` needs to be edited with the tasks id to test

- To create tasks with random content: 

```
npm run create
```

### TODO:

- Add other random fields on task creation
- Refactor data files for better structure

## Authors

* **Gerardo Alvarez Muñoz** - *Not updated* - [Github](https://github.com/gerhardx)

## Acknowledgments

* Assesment for session 3 of Wizeline Academy 
* [Wizeline Academy](https://academy.wizeline.com)
