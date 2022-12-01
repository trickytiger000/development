# Development

### Link to Deployed Website
`https://trickytiger000.github.io/development/`

### Goal and Value of the Application

The goal of this application was to create an interactive page for a fictional zoo that users would find fun to interact with and get excited about the animals at the zoo. I chose to make up the animals since it was just an example project, but this could be applied to an actual zoo, and the "friends list" could translate to acart where someone could donate to support the animals on their friends list or something. I also added the animal stack feature on the right just for fun and for a little more interactivity for the user, who might be a child or just an adult who is delighted by such visuals.

### Usability Principles Considered

I wanted the page to have a clear hierarchy, so I put everything in their own blocks, but kept the visual language (round corners, grey drop shadow and outline) consistent. I made certain text larger/darker/bold to make the whole thing readable, such as the name vs species name of each animal. I made the heart icon to add animals to the list easy to see and click on, and give the user some response by changing the heart icon to filled to easily distinguish the animals in the list. I included text to help users figure out what the heart icon does, and gave a message telling them to try clicking on a heart icon if they try filtering for animals in the friends list before they have added any.

### Organization of Components

I made a component for the animal "card", since they all followed the same formatting and presentation of data. I also made components for my inputs, since I found it annoying to re-type the same information repeatedly when creating the HTML elements and tags for a radio/checkbox input and label pair (ie. i used the same prop for multiple HTML fields to save the time of typing it repeatedly). I chose to keep pretty much the rest of the functionality in the main app since there wasn't too much extensibility required in any other features of thie small app.

### How Data is Passed Down Through Components

Data is passed via useState variables that are accessed through the props. The JSON objects for each animal for example are passed into the Animal components because all of their fields need to be acceseed in order to display the Animal cards (props.animal.name, props.animal.height,etc). I also passed through functions for adding the animals to the friends list or removing animals from the friends list, so that they could be activated when the heart icon within the animal component is pressed. This involved also using some useState variables inside of the Animal components so that I could update the heart icon when it is clicked on within the Animal component, and then pass that information back to the main app so that it could update the friends list. I also used props and functions passed through props in a similar way to have the checkboxes trigger sort/filter updates in the main app file.

### How the User Triggers State Changes 

The user triggers state changes by interfacing with the filtering/sorting panel on the left. Like in the bakery example, the user clicks on the radio input buttons to choose between different sort options, and clicks check boxes to filter by a couple of traits of the animals (endangered and fluffy). I figured these would be features of zoo animals that might draw people in. The user triggers the state change of adding/removing animals to the list by toggling the heart icon on each animal card. The last way users can trigger a state change is that if they have 2 or more animals in their friends list, they can click the "pyramid" button to arrange the animal images on the right into a neat and satisfying stack (the friends list is simply sorted by height).

