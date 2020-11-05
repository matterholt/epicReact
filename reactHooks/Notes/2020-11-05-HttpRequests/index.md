---
title: Fetching HTTP request data on useEffect
date: 2020-11-05
published: true
slug: Data helps move and create the app, Let explore how to get thing going in React
---

## NOTES

- Any time the app need to perform a side-effect, then it will be executed within a useEffect hook.

- This hook allows us to ensure that whenever certain changes take place, we apply the side-effects based on those changes. -Kent c dodds

- useEffect can not return anything but a clean up function, This is why a use effect can not be an async function since it returns a promise

- when fetching, If the variable has not change then there is no need to send request. So if we have a return before the fetch of the request then wil save us time to fetch data to the API

## Extra credit 1

- To control what get render is a bunch of if , else if statements to determine what gets passed in to the child component. depends on if things exist or not.

- Displaying a failure of a fetch request is handled in similar fashion, we have state that results in null and once the fetch is cast then if it return an error will update and render the display letting the user know what is going on

- also adding a role to 'alert' would make the screen readers read it first letting the user know what is going on with the request

#
