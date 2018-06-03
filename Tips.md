# React Tips

### 9-things-every-reactjs-beginner-should-know

1.  It's just a view library, no MVC
2.  Keep your components small
3.  Write functional components
4.  Write stateless components
5.  Use Redux.js
6.  Always use propTypes
    ...

### Multi-Import

import Button from '../../../../Button/Button.jsx';
import Icon from '../../../../Icon/Icon.jsx';
import Footer from '../../Footer/Footer.jsx';

import {Button, Icon, Footer} from 'Components';

### Always start Component with Capital Letter

Not starting a component name with a capital letter
html5 is lowercase

```
    Warning: The tag <greeting> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
```

###  Alaways using back-ticks instead of single quotes

```
// Current time string
const time = new Date().toLocaleTimeString();
// When using regular strings (single or double quotes),
// you need to use string concatenation:
'Time is ' + time
// When using back-ticks,
// you can inject the time in the string using ${}
`Time is ${time}`
```

### Not confusing beteween functions with classes

Not:

```
class Numbers extends React.Component {
  const arrayOfNumbers = _.range(1, 10);
  // ...
}
```

But OK:

```
    const Number = (props) => {
    const arrayOfNumbers = _.range(1, 10);
    // ...
    };
```

###  Passing numbers in curly braces and not as strings

```
    // Don't do this
    <Greeting counter="7" />
    // OK
    <Greeting counter={7} />
```

### Forgetting that another app instance is still using the same port

```
    Error: listen EADDRINUSE 127.0.0.1:8080
```

use :

```
lsof -i :8080
```

### Forgetting to create environment variables

use export:

```
    export MONGO_URI="mongodb://localhost:27017/mydb"

    Use:
    process.env.MONGO_URI
```

### Confusing curly braces {} with parentheses ()

Since any <tag> in JSX will translate to a function call, this problem applies when returning any JSX.
This problem is also common in arrow functions’ short syntax.

Not

```
return {
  something();
};
```

Use:

```
return (
  something();
);
```

### Not wrapping objects with parentheses

Not work:
this.setState(prevState => { answer: 42 });

Working:
this.setState(prevState => ({ answer: 42 }));

### Not using the right capitalization of API elements and props

```
<Greeting userName="Max" />
// Inside the component, you need
props.userName
```

### Using propsTypes

1.  Add the new prop-types package to your project: npm install prop-types
2.  Import it: import PropTypes from 'prop-types'
3.  Then you can use it. For example: PropTypes.string.

### Always use propTypes

* It can catch bugs early, by preventing silly mistakes
* If you use isRequired, then you don't need to check for undefined or null as often
* It acts as documentation, saving readers from having to search through a component to find all the props that it needs

### setState() is async

React components essentially comprises 3 things: state ,props and markup (or other components).
Props are immutable. However, the state is mutable.
Changing the state causes the component to re-render. If the state is managed internally by the component, this.setState function is employed to update the state.

There are a few important things to note about this function. Let’s look —

Solution use Arrow function to modify state:

```
    this.setState((prevState, props) => {
        counter: prevState.counter + props.increment
    });
```

### Props in Initial State

Probleme

```
import React, { Component } from 'react'

class MyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
        someValue: props.someValue,
        };
    }
}
```

The constructor or (getInitialState) is called only at the time of component creation.
That is, constructor is invoked only once. Hence, when you change the props next time, the state won’t be updated and will retain its previous value.

Solution: You can use componentWillReceiveProps lifecycle method to keep the state and props in sync, as shown here.

```
import React, { Component } from 'react'

class MyComponent extends Component {
 constructor(props){
   super(props);
   this.state = {
     someValue: props.someValue,
   };
 }

 componentWillReceiveProps(nextProps){
   if (nextProps.inputValue !== this.props.inputValue) {
     this.setState({ inputVal: nextProps.inputValue })
   }
 }
}
```
