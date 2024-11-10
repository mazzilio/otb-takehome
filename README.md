# On the Beach Frontend Software Engineer code test

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
