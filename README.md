# OTB FE Take Home

**What I could have achieved with more time**
- Server-side logic: 
  - The current implementation is quite good with a smaller data set, but if we were working with a larger data set I would want to spin the logic off to be server-side to improve performance. If data handling is taken care off at the server level, it can reduce load times and the need for client-side management. It would also make sorting and filtering more efficient and less taxing client side. 

- Unit test more paths:
  - With exclusive focus on unhappy paths and trying to 'break' the code to ensure it covers all situations within a reasonable time frame and scope. The core tests do focus on the basic error scenarios like a network failure, but with more time I'd like to add error handling for an invalid API repsonse and also ensure the app is robust from a fetch perspective.

- Further fleshing out of loading and error states:
  - Having a dedicated time to improve on the 'loading' and 'error' state to be more visually appealing, but more importantly keeping and separating that logic out to it's own component (e.g. <LoadingWrapper></LoadingWrapper>). By focusing on a dedicated wrapper or 'spinner component' I feel like it would improve the current website's overall UX (the one I created, not OTB's site!)
- Cypress/Playwright Testing: 
  - Doing some very simple E2E test to ensure that all of the components of the website work together correctly and interact as expected would be ideal, but with limited time - unit testing was priortised. It also means that we can check if the entire page workflow works, such as fetching data, sorting, filtering and rendering. If the testing also checked if user interactions trigger expected behaviours, Cypress/Playwright allows us to catch issues that may be more difficult to detect with just manual testing and unit testing.

- Dedicated time to set up the stylings. 
  - There is likely some repeated code for stylings in CSS, by leveraging tailwind, or the globals file, I could have better formatted the stylings to ensure consistently across the site. The usage of scoped and component-level styles is useful, but dedicating time to a customised component library (like Shadcn!), or potentially leveraging something like TailwindCSS could have ensured that styling is consistent at the component level.
- Component Responsibility:
  - The <Home> Component currently has a lot of responsibility (fetching data, rendering UI components, loading states). If I followed SRP a lot closer, I could have likely extracted the different functionalities into smaller reusable components, such as having the LoadingWrapper and ErrorBoundary as separate components. 
  - This is also something I could have applied to the holidayCard and sortingMenu components, the current level og logic in both should be 'followable' but if I were to add more, I would see how this may be unkind to other developers working on it after me - a clean base is important for the team!
- Leveraging useCallback or Memo:
  - Leveraging states that refresh each time is bad practice in React, with more time I would have implemented useCallback to prevent unnecessary re-renders of the components, such as the button groups and the icons changing in <sortingMenu>
- Accessibility: 
  - Adding aria labelling to the buttons and icons will help with screen descriptions for screen readers and those requiring it. 

**What I should've done differently**
- Set-up proper git branching strategy:
  - Technical issues caused by laptop meant some code had to be redone and pushed in one massive git (apologies for that!).
  - As a piece of constructive feedback for myself - The lack of a structured branching strategy has led to challenges with merging and some issues requiring redoing code. Setting up a well-defined Git branching strategy would have helped me in organising features, bug fixes, and releases more efficiently. This could have saved time on refactoring and ensured a more stable, collaborative development process for myself.
- Shadcn/UI for the project. 
  - Although ChakraUI is less bulky than MUI and other components, Shadcn/UI allows you to only install specific components as a dependency and package and reduces the bulk associated with a lot of libraries. Chakra is likely overkill for a few components, for this usecase Shadcn/UI would've allowed greater control over what components I can install to minimise package bloat, bundle size, and improve load times.
- TypeScript: 
  - Following a more opinionated language with clear typing is a preferred way of work, where I can ensure that the developer experience of implementing code ensures that code is clean, maintainable, and more importantly follows the set rules I've defined, which also ensures that runtime errors are reduced.

---

_**Tip**: Read these instructions carefully! There's important details in here to help you produce a great test. If in doubt, trust whatever is written over how the example image looks._

You're expected to spend around an evening on this test, probably around 2-5 hours. Don't go overboard - when you've done enough work, stop and document in the Readme what else you would do if you had more time (though do look at the “**Things we’re looking for**” section below - this is a clue as to what we’re really interested in seeing - bonus points for explaining roughly how you’d achieve each point!)

You can use AI to help you with the test, but bear in mind we’ll be asking questions about your code at the interview stage so make sure you understand what it’s all doing.

If anything isn’t clear, please reach out to us with your questions. We’re happy to help.

**What we want to see**

Produce a HTML, CSS and JavaScript representation of the given `design.png` below with the following features:

- Sort the results by price (this should be the default)
- Sort the results by star rating and highlight when active
- Sort the results alphabetically by hotel name and highlight when active
- Ability to toggle expanded hotel description

![](design.png)

**How you’ll build it**

- You must consume the data from this file asynchronously https://static.onthebeach.co.uk/fe-code-test/data.json  (you'll find the hotel images you need in there)
- You can find the background image here https://static.onthebeach.co.uk/fe-code-test/background.png
- We are looking for a client side solution, there should be no server logic involved. Imagine this will be a component added to a large website
- Feel free to use JavaScript libraries or frameworks
- You may use things like CSS Preprocessors and JavaScript build tools, but if you do please include the dependencies/source files
- Feel free to source your own icons - emojis are fine too! 🔤 💵 ⭐️ 🔽 🔼

Some colours, to save you hunting around for them

- Dark blue: `#17317F`
- Yellow: `#FEDC07`
- Grey: `#CCC`

**Things we’re looking for**

We’re not just looking for technical ability - we also want to gain an insight into your thought process.

- Some form of testing - we'd particularly like to see component testing using a tool such as [Testing Library](https://testing-library.com/) or a suitable alternative
- Small Git commits with clear messages
- Semantic HTML
- Modular and responsive CSS
- Error/warning free JavaScript
- Clean flow of state throughout the application
- We’d love to see comments in the code or the Readme explaining your thought process/where you might have struggled with this test (especially if you’re applying for a junior position)
