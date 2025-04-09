# React Project Management Board
A dynamic Project management board build with React, Vite, Styled-Componentsand HTML5 drag and drop API.

## Git commands mostly used
- `git remote add origin <repository url>` to sync project to remote
- `git push --force -u -origin master` to push to remote
- `git add .` to add changes to commit
- `git commit -m "message"` to do commit with message
- `git push -u origin master` to push changes to origin
- `git log --oneline` to view commit logs
- `git status` to view current git status

## React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration
If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Starting project setup and structure scaffolding

`npm create vite@latest` to create a React project using Vite, then follow the prompts. After project creation go to project folder and run these commands: `npm install` and `npm run dev` to try application.

## Starting Development
We'll implement a custom hook for data fetching and a mock Rest Api created with My Json Server from Typicode. We'll use a Json file placed in the repository to create Rest endpoints.

We'll follow instruction in this page to create a fake server https://my-json-server.typicode.com/:
1. Create a repository on GitHub (<your-username>/<your-repo>)
2. Create a db.json file
3. Visit https://my-json-server.typicode.com/<your-username>/<your-repo> to access your server

No registration. Nothing to install.

We can also install [JSON Server|https://github.com/typicode/json-server] in Local environment and it is my choice.

`npm install json-server` to install Json Server and create a file db.json and pass it to Json Sever Cli with this command
`npx json-server db.json`, run json-server --help for a list of options.


## handling data flow and loading and displaying fetched data
In the commit with message: Loading and displaying data to the board we can see all the implemetations done so far.
We have made pages and components to display Project Board with Lanes and Tasks into the lanes.
We used Json server to fetch data for the application and now we explore custom hook to share data fetch logic with other components.

## Creating and using custom hook making the project board dynamic.
We'll create a custom Hook to fetch data from json server and we'll use it in the Board component to disply application data.

> Relative commit: Create custom hook for data fetching.

> [!NOTE]
> Hooks: A higher-order component is a function that takes a component and returns a new component.
> Hooks are a Higher Order Component (HOC) that are a popular pattern to reuse logic throught a HOC creation and that focus on reusability of components. All Hook nae start with 'use[hook-name]'.



> [!NOTE]
> Note ...