# Test "Rule the Thumb"

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.

## Requirements Accomplished:
  * Create a data feed in JSON format with the structure that best suits the content for the voting boxes and populate the initial content from it.
  
  * The user can select either thumb up or thumb down button on each of the boxes (when the button is selected, a white border is displayed as featured in the comp) Once the user clicks on the "Vote now” button, a message is displayed saying “Thank you for voting!” as well as a vote again button to vote again.
  
  - There is no limit in the amount of votes
  
  - Percentage bars change depending on the up/or downs votes.
  
  - Think on a way to persist the current votes so if the page is refreshed the data is not lost. (could be local in the browser or server side if you have those skills)
  
  - We want to see your vanilla/DOM JS skills so please do not use jQuery.
  
  - You can solve this part with either full Vanilla JS and some patterns, OR any sort of framework such as Angular, React, Vuejs, Ember, etc. Use the one you feel more confortable with.

For the design process I used the component destructuring technique as follows:

* Header

Contains the first image, the higligted poll on the header, and the menu. 

* Menu

Menu Bar, contains navigation links, the "logo" and the mobile menu.

* PollBox

Shows the header higligted Poll

* Countdown

* CallToAction

* Poll

Poll Object defined by the following interface

```javascript
export interface Poll {
  id:number;
  name:string;
  pubdate: Date;
  category: string;
  description: string;
  votesUp:number;
  votesDown:number;
  selectedDown:boolean;
  selectedUp:boolean;
  voted:boolean;
  showNotSelectedError:boolean;
}
```

* Polls

Group of Polls defined by mock-polls, it have the initial data:

```javascript
{
    id: 1,
    name: 'Kanye West',
    pubdate: new Date('2021-01-14'),
    category: 'Entertainment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing, elit egestas venenatis cubilia ornare, mauris vivamus curabitur dis aenean.',
    votesUp: 1,
    votesDown: 2,
    selectedUp: false,
    selectedDown: false,
    voted: false,
    showNotSelectedError: false,
  },
  {
    id: 2,
    name: 'Mark Zuckerberg',
    pubdate: new Date('2020-10-14'),
    category: 'Business',
    description:
      'Suspendisse congue ornare felis. Donec bibendum tempus augue, faucibus congue mi maximus vel. Nullam turpis nunc, posuere sit amet consequat consequat, vehicula et risus. Vivamus congue volutpat metus eu porta.',
    votesUp: 124,
    votesDown: 321,
    selectedUp: false,
    selectedDown: false,
    voted: false,
    showNotSelectedError: false,
  },
  {
    id: 3,
    name: 'Cristina Fernández de Kirchner',
    pubdate: new Date('2010-10-14'),
    category: 'Politics',
    description:
      'Ut suscipit bibendum potenti aliquet fames et scelerisque purus, nam mi inceptos.',
    votesUp: 629,
    votesDown: 923,
    selectedUp: false,
    selectedDown: false,
    voted: false,
    showNotSelectedError: false,
  },
  {
    id: 4,
    name: 'Malala Yousafzai',
    pubdate: new Date('2019-09-24'),
    category: 'Entertainment',
    description:
      'Feugiat integer cras sed himenaeos fermentum in viverra sem eros per hendrerit ut, habitasse quis sociis fames nec urna facilisi semper nullam eleifend.',
    votesUp: 1290,
    votesDown: 923,
    selectedUp: false,
    selectedDown: false,
    voted: true,
    showNotSelectedError: false,
  }
```

* SubmitPollBar

* Footer

![GitHub Logo](/images/componentDestructuring.png)

# Application

The application could be seen on https://juandaosp12.github.io/testPolls/home
