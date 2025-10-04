(-- `5 State management for React. Recoil vs. Jotai vs. Zustand vs. Redux… | by Amanda G | Product Engineering` [waresix](https://waresix.engineering/5-state-management-for-react-9dbd34451b78))
具有简单API的小型轻量级库，Jotai或Zustand可能是一个不错的选择。

|Stars|Library|Pros|Cons|
|---|---|---|---|
|18.8K |[Recoil](https://github.com/facebookexperimental/Recoil)|Small bundle size (14kb), easy to use, supports Suspense and ErrorBoundary, can be used for both global and local state|Still in the early stages of development, not as well-documented as some other libraries, can be difficult to integrate into a mature application|
|13.7K |[jotai](https://github.com/pmndrs/jotai)|Tiny bundle size (3kb), minimal API, solves the extra re-render issue of React context, eliminates the need for the memoization technique|Does not have some functionalities that Recoil has|
|31.8K |[zustand](https://github.com/pmndrs/zustand)|Simple API, small bundle size (1.7kb minified), way more maintainable than Redux, can be used for both global and local state|Documentation could be improved |
|59.7K|Redux|Easy pattern to follow, well-documented, large community of users and developers, a wide range of third-party libraries available|Requires a lot of code (a store, a reducer, and three actions), managing loading and error states with Redux requires some custom implementation|
||Context|For mature application, no need significant architectural changes, easy to use|Need custom code to handle each loading state, need error handling wherever we are calling the API, dynamic addition/deletion: when adding a new context at runtime, you need to add a new provider, and its children will be re-mounted. Hence, not recommended for data that updates frequently|

