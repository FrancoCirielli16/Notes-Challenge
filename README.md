# GitHubFrancoCirielli16-Ensolvers-Challenge

## To take into account

- [x] Add note
- [x] Edit note
- [x] Archived note
- [x] Remove note
- [ ] Categories
- [ ] Login

## Functionality of the categories
I did not finish this functionality. 
This function is not in the back-end is fully commented, even so you can create a note with categories and update it but not in the most efficient way possible because when using in Nestjs PlanetScale I could not manage to use the many to many relationship because PlanetScale has complications with this relationship so I decided to leave it aside.  

## Requirements

Make sure you have the following components installed before running the application:

- [Node.js](https://nodejs.org/): v14 or higher
- [npm](https://www.npmjs.com/) (Node Package Manager): v6 or higher
- [NestJS](https://nestjs.com/): Backend framework for Node.js
- [React](https://reactjs.org/): Version ^18.2.0, Frontend user interface library
- [Git](https://git-scm.com/): Version control system (optional but recommended)


## Usage
To initialize the app by starting the scrpit init.sh it should start installing the dependencies and then raise the back-end and front-end.
Access the application in your web browser at http://localhost:3000.
Start creating, editing, and deleting notes.
You can tag notes in Phase 2 and filter them by category.

```
    ./init.sh
```

## Structure
The application is structured into two main parts: the backend built with NestJS and the frontend built with React. The folder structure may vary, but it generally follows a similar pattern:

```bash

notes-app/
├── backend/
│   ├── src/
│   │   ├── categories/
│   │   ├── notes/
│   │   ├── app.ts
│   │   ├── ...
│   ├── .env
│   ├── package.json
│   └── ...
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── ...
│   ├── package.json
│   └── ...
├── README.md
└── ...

```




# Notes-Challenge
