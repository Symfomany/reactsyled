React HOC

Concretely, a higher-order component is a function that takes a component and returns a new component.
Whereas a component transforms props into UI, a higher-order component transforms a component into another component.
A HOC is a pure function with zero side-effects.


Appeler Mixin auparavant.
We previously recommended mixins as a way to handle cross-cutting concerns. We’ve since realized that mixins create more trouble than they are worth. Read more about why we’ve moved away from mixins and how you can transition your existing components.


Components are the primary unit of code reuse in React. However, you’ll find that some patterns aren’t a straightforward fit for traditional components.

Read: https://reactjs.org/docs/higher-order-components.html

CommentList and BlogPost aren’t identical — they call different methods on DataSource, and they render different output. But much of their implementation is the same:
* On mount, add a change listener to DataSource.
* Inside the listener, call setState whenever the data source changes.
* On unmount, remove the change listener.

```
const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);
```

- The first parameter is the wrapped component. 
- The second parameter retrieves the data we’re interested in, given a DataSource and the current props.

When CommentListWithSubscription and BlogPostWithSubscription are rendered,
 CommentList and BlogPost will be passed a data prop with the most current data retrieved from DataSource


Note that a HOC doesn’t modify the input component, nor does it use inheritance to copy its behavior. 
Rather, a HOC composes the original component by wrapping it in a container component.

A HOC is a pure function with zero side-effects.



Noooo:

```
function logProps(InputComponent) {
    InputComponent.prototype.componentWillReceiveProps = function(nextProps) {
        console.log('Current props: ', this.props);
        console.log('Next props: ', nextProps);
    };
    // The fact that we're returning the original input is a hint that it has
    // been mutated.
    return InputComponent;
    }

    // EnhancedComponent will log whenever props are received
    const EnhancedComponent = logProps(InputComponent);
```


Yessss:

Instead of mutation, HOCs should use composition,
 by wrapping the input component in a container component:

```
    function logProps(WrappedComponent) {
        return class extends React.Component {
            componentWillReceiveProps(nextProps) {
            console.log('Current props: ', this.props);
            console.log('Next props: ', nextProps);
            }
            render() {
            // Wraps the input component in a container, without mutating it. Good!
            return <WrappedComponent {...this.props} />;
            }
        }
    }
```