# Recipe Discovery App

The Recipe Discovery App is an app users can use for recipes by category, search for dishes, view recipe information, and manage a list of favorite recipes. It uses an  API to fetch recipe data and usses React concepts like custom hooks, Context API and dynamic routing.

You should be able to find recipes by category. View recipe pages with ingredients and instructions and search recipes by name.

For the application to run locally you would cd into the code folder and then 'npm install' inside your terminal and then 'npm run dev'. That is were the localhost will appear for you to run the project locally.

## Reflection
The Most challenging part was implementing the FavoritesContext(which I am still having trouble with). I have to coordinate between global state management and localStorage while making sure UI updates were reactive to state changes. I also kept coding in Typescript which was causing syntax errors. 

## Resources
- https://medium.com/@64rohanmalo/fetch-and-display-data-from-an-api-with-react-228de56bb446
- https://www.freecodecamp.org/news/react-context-api-explained-with-examples/
- https://usehooks.com/uselocalstorage
- https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
- https://stackoverflow.com/questions/71430785/reactjs-how-to-pass-api-data-to-components/71431217
