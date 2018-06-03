### Contenu du Cours


* 1/ Expliquer le principe de Context ...  Puis HOC avec les props
* Article interessant sur le Provider et HOC:
http://putaindecode.io/fr/articles/js/react/higher-order-component/


* Bonnes pratique de cours au niveau arhitecture
* Using Ref (Comportement JS/HTML: focus, input qui se vide et qui vibre) OU atteindre un Composant
* Comment créer des Components différement... props , function et Hoc
* Passer des Childrens des props: design Pattern Communication
* Parler du Context
* Passer dans le Provider qui fourni le Context du projet
![Provider et Context](https://github.com/react-theming/react-theme-provider/blob/master/doc/ThemeProvider.png)

* Parle de PropsTypes et DefaultProps
Liste des PropsTypes: https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
* Cours sur le HOC: Hight order Components
* natures des Composants: composant de Présentation (Presenters), Composant Metier (Containers) 
* Store: Au départ votre application initialiser avec un State of Machine: tri, filtre, display: liste: Créer un Composant provider fournissant les données à partir d'un Store mis dans le Context.
* Montrer les props on initial state:



### Astuces du Cours


Paser de fonctiond e composant stateless ----->>> à Hight Order Components

### Questions du Cours


* Comment créer tout un thème?
* Comment passer des props ?


### Multi-Import


import Button from '../../../../Button/Button.jsx';
import Icon from '../../../../Icon/Icon.jsx';
import Footer from '../../Footer/Footer.jsx';

import {Button, Icon, Footer} from 'Components';


### Store

My suggestion is this:
Work out the general structure of your components and the data they will require
Design your store to support those requirements
Do whatever you need to do to your incoming data to make it fit into the store.

