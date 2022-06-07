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

## Organization and Standards

#### Notables

1. `--save-dev` (only used in the development, not in production)
2. `--save` (production dependencies)
3. `--global` or `-g` (used globally i.e can be used anywhere in our local system)

### Structure

```shell
-- src
   -- api
   -- components
   -- styles
   -- views
   -- utilities
```

## UI and Styling

Install Material-UI: https://mui.com/material-ui/getting-started/installation/

```shell
$ npm install @mui/material @emotion/react @emotion/styled
$ npm install @mui/icons-material
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

## Global store

```shell
$ npm install @reduxjs/toolkit
$ npm install react-redux
```

How to create a store slice

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
    }
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

Initialize store at top level component

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

return null
}

export default Component;
```

## Routing

```shell
$ npm install react-router-dom
```

Routes structure

```html
<!-- At top level -->
<BrowserRouter>
  ...
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