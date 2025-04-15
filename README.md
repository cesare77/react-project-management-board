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

## Creating and using custom hook to fetch data.
We'll create a custom Hook to fetch data from json server and we'll use it in the Board component to disply application data.

> Relative commit: Create custom hook for data fetching.

> [!NOTE]
> Hooks: A higher-order component is a function that takes a component and returns a new component.
> Hooks are a Higher Order Component (HOC) that are a popular pattern to reuse logic throught a HOC creation and that focus on reusability of components. All Hook nae start with 'use[hook-name]'.

Now we'll create a Backlog components for new tasks that aren't in the other lanes and re-use the custom hook to highlight the custom hook reusability.

> Relative commit: Backlog component and other small changes.

##  Making the project board dynamic with drag 'n' drop feature
We'll now adds the ability to drag and drop tasks from one lane to another using HTML5 drag and drop Api which is available in every modern browser.
We'l use the Drag Events in more depth we'll use the: onDragStart, onDragOver and onDrop.

> Relative commit: Drag and Drop feature implemented

## Styling with styled-components package
Styled-components package allow us to styling components without import css file and to write css inside javascript (CSS-in-JS).
`npm install styled-components` to install package. With this package we'll be able to prevent duplication or overlapping of styles due to _classNames_ and add dynamic styling to components with ease.

Official website and documentation https://styled-components.com/.

We'll style all applicaiton components with styled-components directly inside relative jsx file.
We can also create a **global style** for the applicaiton, which is currently done in _src/index.css_.
The file is imported in _main.jsx_ nd therefore loaded into every page of the application.
Well implement global style in _App.jsx_ 'cause this component wraps al our components.

> Relative commit: styled components

> [!NOTE]
> The <> notation is shorthand for <React.Fragment>; you can use both notations in React. For the <React.Fragment> notation, you can also import Fragment from React to write <Fragment>.


> [!NOTE]
> Set up **react-router** for this project to render the Backlog component on a different page.
> Implement drag and drop also for Backlog component or make this logic reusable with another custom hook.
> Implement creation, update and delete (CRUD) of task and relative update on db.json

## Further reading
- The HTML Drag and Drop API: https://developer.mozilla.org/
en-US/docs/Web/API/HTML_Drag_and_Drop_API
- DataTransfer: https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer
- React DnD: https://github.com/react-dnd/react-dnd