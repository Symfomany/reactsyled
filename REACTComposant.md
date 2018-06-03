### Le deign pattern Provider

Beaucoup de bibliotèques React ont besoin de faire passer des data au travers de tout l'arbre de composants de votre app. 

Coup de bol, l'API de React nous offre une solution à ce problème: le context. 
Si l'on résume sa nature, c'est comme l'objet global de votre arbre de composants.

Le context fonctionne de la façon suivante:

* On définit haut dans notre app un context que l'on donne aux composants descendants de l'app
* On récupère ce contexte dans les composants descendants.

Du coup, pour donner ce context, on doit avoir un Provider. Son rôle est simplement de fournir un context pour que les composants enfants y aient accès.

Maintenant que notre theme est bien ajouté au context, on a besoin d'un moyen simple pour que nos composants dans l'app puissent le consommer. Ça nous amène au second pattern.

Probleme du Composant:
* La maintenabilité : si à un moment, on a besoin de refacto, avoir tous ces contextTypes éparpillés dans notre repository peut faire bien mal.
* La complexité: L'API des context étant encore obscure pour beaucoup, il est préférable de faire une abstraction pour la masquer.

### HOC

La meilleure façon de créer une fonctionnalité réutilisable est d'utiliser le pattern du Higher Order Component (ou HOC). Ce que ça veut dire, c'est qu'on va simplement wrapper un composant dans un autre, lequel a pour *unique rôle d'injecter la fonctionnalité et de la passer via les props.* 



Exemple en 3 étapes: 


https://codesandbox.io/s/y33v62359z


Il s'agit tout bêtement du principe de composition : au lieu d'exporter A, vous exportez Wrapped(A), et ce dernier retourne un composant React qui va appeler A dans sa méthode render.

Pour le voir simplement, il s'agit d'un point intermédiaire dans l'arbre de vos composants, qui injecte quelques props. Il existe beaucoup d'avantages apportés par ce pattern :

* Isolation : Il n'y a pas de risque de collision de propriétés au sein du composant.
* Interopérabilité : Ce principe s'adapte à tout composant React, peu importe la façon dont il a été défini.
* Maintenabilité : Le wrapper n'aura qu'une seule fonctionnalité, ce qui le rend plus simple à comprendre. De plus, si l'on utilise le context, on ne trouvera le mapping contextTypes qu'à un seul endroit dans l'app.

Bonus : La Closure dans une HOC:

Puisqu'il s'agit simplement d'une fonction, on peut y passer des options à l'aide d'une simple closure.





### Props Children

There is also props.children property that gives us an access to the child components passed by the owner of the component. For example:

```
class Title extends React.Component {
  render() {
    return (
      <h1>
        { this.props.text }
        { this.props.children }
      </h1>
    );
  }
};

class App extends React.Component {
  render() {
    return (
      <Title text='Hello React'>
        <span>community</span>
      </Title>
    );
  }
};
```


## Composition Atomiques

```
    <App>
        <Header>
            <Navigation> ... </Navigation>
        </Header>
    </App>
```
We may consider the App as a place where we wire stuff, as an entry point. So, it’s a good place for such composition. 


## Passing a child as a property

This technique is helpful when we have a mix between components that exist inside the Header and components that have to be provided from the outside.


```
<Header icon={Icon} logo={logo} title={Title} />

```


### Styled Componants

Créer un dossier styled avec des fichier tel que
ToolbarStyled.js



### HOC: Hight Order Component


Créer un dossier HOC avec des fichiers LoaderHOC.js

https://www.youtube.com/watch?v=LTunyI2Oyzw

```
const config = require('path/to/configuration');

const enhanceComponent = (Component) =>
  class Enhance extends React.Component {
    render() {
      return (
        <Component
          {...this.state}
          {...this.props}
          title={ config.appTitle }
        />
      )
    }
  };

    export default enhanceComponent;
```
Very often we expose a factory function that accepts our original component and when called returns the enhanced/wrapped version of it. For example:



```
// Title.jsx
export default function Title(props) {
return <h1>{ props.title }</h1>;
}

// Header.jsx
import Title from './Title.jsx';
export default function Header() {
return (
    <header>
    <Title />
    </header>
);
}

// App.jsx
import Header from './Header.jsx';
class App extends React.Component {
constructor(props) {
    super(props);
    this.state = { title: 'React in patterns' };
}
render() {
    return <Header />;
}
};
```
The string “React in patterns” should somehow reach the Title component. The direct way of doing this is to pass it from App to Header and then Header to pass it to Title

We already saw how the higher-order component may be used to inject data. 


Amélioration pour passer des données à Title du titre:

```
// enhance.jsx
const title = 'React in patterns';

// fabrique à composant avec le title
const enhanceComponent = (Component) =>
class Enhance extends React.Component {
    render() {
    return (
        <Component
        {...this.state}
        {...this.props}
        title={ title }
        />
    )
    }
};

// Header.jsx
import enhance from './enhance.jsx';
import Title from './Title.jsx';

// amélioration de Title
const EnhancedTitle = enhance(Title);

export default function Header() {
return (
    <header>
        <EnhancedTitle />
    </header>
);
}
```

### Context

* React has the concept of context. The context is something that every component may have access to.
* It’s something like an event bus but for data. 
* A single model which we can access from everywhere.

```
App.childContextTypes = {
  data: PropTypes.object,
  get: PropTypes.func,
  register: PropTypes.func
};
```