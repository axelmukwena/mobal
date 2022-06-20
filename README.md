# Notes

Notes to prepare for a Technical Interview for a Software Engineer role at Mobal.io

### Introduction

The technical interview is a live coding interview where you are coding the frontend of an app. You have to connect the frontend to a backend server which you can access through an api. You can choose any modern frontend framework that want to complete the task.

### Technologies

1. React.js

## Reproduction

Clone the repository

Ensure you have `npm` installed

```shell
$ npm -v
```

Go to repository directory

```shell
$ cd mobal
```

Install packages

```shell
$ npm install
```

Launch

```shell
$ npm start
```

## Creation

Create React app.
Prerequsites: `Node >= 14.0.0` and `npm >= 5.6`

```shell
$ npx create-react-app mobal
$ cd mobal
```

Launch

```shell
$ npm start
```

## What? Some interesting readings

- https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/
- https://www.simplilearn.com/tutorials/reactjs-tutorial
- https://github.com/raulterhesdev/redux-toolkit-introduction-youtube

## Organization and Standards

#### Notables

1. `--save-dev` (only used in the development, not in production)
2. `--save` (production dependencies)
3. `--global` or `-g` (used globally i.e can be used anywhere in our local system)

Cnvert strings to paths

1. Either use

```javascript
const regex = /[^a-zA-Z0-9]+/g;
const title = "hello123!@#";

// Convert
const path = title.trim().replace(regex, "-").toLowerCase();
```

### Structure

```shell
-- src
   -- api
   -- components
   -- styles
   -- pages
   -- utilities
```

### Lints

Install prettier as a Dev dependency

```shell
$ npm install prettier --save-dev
```

Create a `.prettierrc` at root and

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": false
}
```

## UI and Styling

Install Material-UI: https://mui.com/material-ui/getting-started/installation/

```shell
$ npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

Moment.js to format our time

```shell
$ npm install moment
```

## API and Fetch Requests

Axios

```shell
$ npm install axios
```

```javascript
// Post data to api
async function postResource(path, params, handleResponse) {
  const url = API_URL + path;

  // Only send request if there's a authorize cookie set
  // if (!token) return;

  // headers
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "token",
    },
  };

  await axios
    .post(url, params, headers)
    .then((response) => {
      handleResponse({ resource: response.data });
    })
    .catch((error) => {
      handleResponse({ resource: null, message: error.message });
      console.log("POST Resource Error");
      console.log(error);
    });
}
```

## Global store

```shell
$ npm install @reduxjs/toolkit react-redux
```

### How to create a store

#### createSlice

1. Create a directory to keep everything, `store`
2. Create a file to handle the update and reading of a specific global variable. Lets call it a `slice.js`
3. Initialize the object `createSlice({})` with values:
   1. `name`: A unique string within the global stores
   2. `initialState: {}`: The default, initial state of the global variable. The keys in this object will be updated in the `reducers`
   3. `reducers: {}`: Here we declare
   4. You can use switch statements when having multiple variables

```javascript
// currentUserSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    user: null,
  },
  reducers: {
    updateCurrentUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
```

Import all the store slices within the global store

```javascript
import { configureStore } from "@reduxjs/toolkit";

// reducer import
import currentUserReducer from "./currentUserSlice";

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
  },
});

export default store;
```

Then, read and update persisted store value where ever

```javascript
// Read
import { useDispatch, useSelector } from "react-redux";

const Component = function Component() {
  const dispatch = useDispatch();

  // Update
  dispatch(updateCurrentUser({ name: "Axel", foo: true }));

  // Read value
  const currentUser = useSelector((state) => state.currentUser.user);

  return null;
};

export default Component;
```

#### createReducer

1. Create a directory to keep everything, `store`
2. Create `actions` directory to keep all defined action names for specific `reducers`
   1. `createAction` contains action name which will be used to dispatch payload
   ```javascript
   // /actions/counterActions.js
   import { createAction } from "@reduxjs/toolkit";
   export const increment = createAction("counter/increment");
   ```
3. Create a `reducer` directory to handle the update and reading of a specific global variables. Lets call it a `resourceReducer.js`
4. Create `initialState: {}` for variable/state
5. import `createReducer({})` and set:
   1. `initialState` argumenet
   2. `builder`: A callback object which provides addCase, addMatcher and addDefaultCase functions that may be called to define what actions this reducer will handle.
   ```javascript
   // /reducers/counterReducer.js
   const counterReducer = createReducer(initialState, (builder) => {
     builder.addCase(increment, (state, action) => {
       state.value++;
     });
   });
   ```

Create store

```javascript
// store.js
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./reducers/booksReducer";

const store = configureStore({
  reducer: { books: booksReducer },
});

export default store;
```

Then, read and update persisted store value where ever

```javascript
// Read
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../../store/actions/booksActions";

const Component = function Component() {
  const dispatch = useDispatch();

  // Update
  dispatch(deleteBook(id));

  // Read value
  const books = useSelector((state) => state.books.books);

  return null;
};

export default Component;
```

For both ways, initialize store at top level component

```javascript
// Top level component, e.g App.js
import { Provider } from "react-redux";
import store from "../store/store";

const App = function App() {
   <Provider store={store}>
      { children }
   <Provider>
}

export default App;
```

## Routing

```shell
$ npm install react-router-dom
```

Routes structure

```html
<!-- At top level -->
<BrowserRouter>
  <div />
</BrowserRouter>
```

then

```html
<Routes>
  <Route path="/" element={<Dashboard />}>
    <Route path="tasks" element={<DashboardTasks />} />
  </Route>
</Routes>
```
