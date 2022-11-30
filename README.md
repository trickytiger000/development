# Development

### Link to Deployed Website
`https://trickytiger000.github.io/development/`

### Goal and Value of the Application

The goal of this application was to create an interactive page for a fictional zoo that users would find fun to interact with and get excited about the animals at the zoo. I chose to make up the animals since it was just an example project, but this could be applied to an actual zoo, and the "friends list" could translate to acart where someone could donate to support the animals on their friends list or something.

### Usability Principles Considered

I wanted the page to have a clear hierarchy, so I put everything in their own blocks. I made certain text larger/darker/bold to make the whole thing readable and nice to look at. The animals are easy to tell apart, and I made them stack propotionally to get a sense of scale for the animals. This visual makes the "friends" list more noticeable and to encourage the use of the program.

### Organization of Components

I made a component for each of my animal cards, since they all followed the same formatting and presentation of data. I also made components for my inputs, since I found it annoying to re-type the same information repeatedly when creating the HTML elements and tags for a radio/checkbox input and label pair. I chose to keep pretty much the rest of the functionality in the main app since there wasn't too much extensibility required in any other features of thie small app.

### How Data is Passed Down Through Components

Data is passed via useState variables that are accessed through the props. The JSON objects for each animal for example are passed into the Animal components because all of their fields need to be acceseed in order to display the Animal cards. I also passed through functions for adding the animals to the friends list or removing animals from the friends list, so that they could be activated when the heart icon within the animal component is pressed. This involved also using some useState variables inside of the Animal components.

### How the User Triggers State Changes 

The user triggers state changes by interfacing with the filtering/sorting panel on the left. As the assignment lays out 

