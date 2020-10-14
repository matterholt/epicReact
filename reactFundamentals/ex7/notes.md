# Using Snowpack to set up a react project

Snowpack is a modern frontend build tool for faster web development. It replaces heavier, more complex bundlers like webpack or Parcel in your development workflow.

## Rendering a list in React

- without a Key prop on the list item, React will do it's best to update the component but is inconsistent.

- with the Key prop React is able to track and understand what has change over time.

- needs to be consistent, could have a generated id before maping

- shouldn't have the index, silence the warning but will have the same effect as if not having a key

- with proper key id then focus and hight-light and focus will keep on the the selected item. shown in KCD epic react
