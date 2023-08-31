# Great Vibes Frontend Task

This application provides a basic job portal, where we can perform CRUD operations. You can see a live demo [here](https://main--peaceful-gecko-d17552.netlify.app/)

## Tech Stack

1. `Next.Js`
2. `Javascript`
3. `Tailwind CSS`
4. `React-hook-form`
5. `Eslint`
6. `Headlessui`
7. `Heroicons`
8. `Axios`
9. `Mock API`

## Requirement to run an application on local

1. Ensure that you have Node Package Manager (NPM) installed on your machine.

## Steps to start an application on local

1. Navigate to the root directory of the application.
2. Run `npm install`.
3. Run `npm run dev`. This will launch the application on a local server. You can access it by opening [http://localhost:3000/](http://localhost:3000/) in your browser.

## Features we added

1. We have `Create job` button at top left of screen
2. Job cards to show created jobs with edit and delete buttons
3. Form to create and edit job
4. Populating job data in form when click on edit button
5. Form validations
6. Perform CRUD operations with [mockapi.io](https://mockapi.io/)
7. Delete and update job
8. Integrate API with axios
9. Reusable components
10. UI looks similar to figma
11. Add application's background color(#D8D8D8) as given in figma
12. Add confirmation modal to confirm before delete job
13. Add backdrop to modal
14. There is no required fields in 2nd step but we have handled other validations like maximum salary/experience should be greater than minimum value, minimum value is required when only enter maximum values.
15. Truncate job card heading texts after 2 lines
16. Make Responsive UI (in small screens one card shows in one row and in form all fields show in individual row)
