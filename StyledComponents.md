# Styled Components

## Objectifs

* Jouer avec Styled Components
* Créer son thème avec Styled Components

Awesome Styled Components
https://github.com/styled-components/awesome-styled-components

Styled Components Links
https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components

Grid Boostrap 4
https://github.com/dragma/styled-bootstrap-grid

### Wrapper

```
<Wrapper>
    <Paragraph>Je suis un paragraphe</Paragraph>
    <p>jE SUIS UN AUTRE PARAGRAPHE</p>
    <Input type="search" placeholder="@mxstbr" />
  </Wrapper>
```

### Passed on DOM props traditionnal

```
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
```

### Styling any components

The styled method works perfectly on all of your own or any third-party components as well, as long as they pass the className prop to their rendered sub-components,which should pass it too, and so on. Ultimately, the className must be passed down the line to an actual DOM node for the styling to take any effect.

```
const BeautifulTitle = styled(Title)`
  color: palevioletred;
  font-weight: bold;
`;
```

Marche si Title as className={this.props.className}

### Extends Styled Componant

### Add attrs to props

```
const InputStyled = Input.extend.attrs({
// we can define static props
type: "password",
required: "required",
placeholder: props => props.placeholder || "Mot de passe",

// or we can define dynamic ones
margin: props => props.size || "1em",
padding: props => props.size || "1em"
})`font-size: 1em; /* here we use the dynamically computed props */ margin: ${props => props.margin}; padding: ${props => props.padding};`;
```

### Theming with Styled Composants

```
<ThemeProvider theme={invertTheme}>
  <Button>Inverted Theme</Button>
</ThemeProvider>
```

### Theming props with Styled Composants

```
  <ButtonOutline theme={{ fg: "orange" }}>Cliquez-moi ici</ButtonOutline>
  <ButtonOutline>Cliquez-moi</ButtonOutline>
```

### The Age of Props

```
const Paragraph = styled.p`
  color: ${props => (props.gold ? "gold" : "brown")};
`;
```

```
const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
```

## Demonstration

### Existing CSS

la partie Existing CSS pour composer avec de la CSS existante:

[CSS existing](https://www.styled-components.com/docs/advanced#existing-css)

#### Medias Integration

```
const Content = styled.div`
  background: papayawhip;
  height: 3em;
  width: 3em;

  @media (max-width: 700px) {
    background: palevioletred;
  }
`;
```

### Using Ref in innerRef

[Utiliser le Ref](https://www.styled-components.com/docs/advanced#refs)
