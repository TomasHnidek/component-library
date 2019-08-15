### Basic Usage

```react
<Button>My Button</Button>
```

```hint
TODO: improve button styling alignment with Digital Style Guide, add typographic scale base to buttons
```


### Button Types

In addition to the primary button style, there are two types of buttons, which can be defined by passing `type`: `secondary`, and `tertiary`:

```react
<div>
  <Button type="primary" className="mr-4">Primary Button</Button>
  <Button type="secondary" className="mr-4">Secondary Button</Button>
  <Button type="tertiary">Tertiary Button</Button>
</div>
```


### Color Options

Pass `color` prop:

```react|plain
<div className="row bg-gray-8 p-4">
  <div className="col-4">
    <Button color="teal" className="mb-2">Teal Button</Button><br/>
    <Button color="fuchsia" className="mb-2">fuchsia Button</Button><br/>
    <Button color="white">White Button</Button><br/>
  </div>
  
  <div className="col-4">
    <Button color="teal" type="secondary" className="mb-2">Teal Secondary</Button><br/>
    <Button color="fuchsia" type="secondary" className="mb-2">fuchsia Secondary</Button><br/>
    <Button color="white" type="secondary">White Secondary</Button>
  </div>
  
  <div className="col-4">
    <Button color="teal" type="tertiary" className="mb-2">Teal Tertiary</Button><br/>
    <Button color="fuchsia" type="tertiary" className="mb-2">fuchsia Tertiary</Button><br/>
    <Button color="white" type="tertiary">White Tertiary</Button><br/>
  </div>
</div>
```


### Size Options

Pass `size` prop. Options include `xs`, `sm`, `lg`, and `xl`:

```react
<div>
  <Button size="xs" className="mb-2">XS Button</Button><br/>
  <Button size="sm" className="mb-2">SM Button</Button><br/>
  <Button className="mb-2">Default Button</Button><br/>
  <Button size="lg" className="mb-2">LG Button</Button><br/>
  <Button size="xl" className="mb-2">XL Button</Button><br/>
</div>
```

```hint|directive
The `Button` size options align with the size options for the [form control component](/components/form-control#size-options)
```

```hint
TODO: work with UX team to standardize button size options
```


### Button Actions

For a JavaScript click event, pass an event handler in an `onClick` prop:

```react
<Button onClick={(e)=>{alert('Clicked!')}}>Button with JavaScript event</Button>
```

For a static link, pass a `href` prop, optionally pass a `target` prop:

```react
<Button href="http://www.google.com" target="_blank">Google It!</Button>
```


### Button States

To disable the button, pass `disabled` prop:

```react
<Button disabled>Disabled Button</Button>
```


To define a loading state, pass `loading` prop:

```react
<Button loading>Loading Button</Button>
```

```hint|directive
The loading state is used to show immediate feedback to the user, for instance when a form is submitted, but you are waiting for a server response.
```

```hint
TODO: work with UX team to define loading animation for buttons, possibly also success state
```


### Class Names

Pass `className` prop, which will be inherited by the top level element:

```react
<Button className="my-custom-class-name">Button with custom class name</Button>
```


### Full Button Options

- `className`: String (optional): class name to add to main button element
- `type`: String (optional): type of button, options include `primary`, `secondary`, `tertiary`, defaults to `primary`
- `color`: String (optional): color modifier, options include `teal`, `fuchsia`, `white`, defaults to `fuchsia`
- `size`: String (optional): size modifier, options include `xs`, `sm`, `lg`, `xl`
- `onClick`: Function (optional): click handler
- `href`: String (optional): external link URL
- `target`: String (optional): target for external link to pass through, e.g. `"_blank"`
- `disabled`: Boolean/Null Check (optional): whether to disable the button
- `loading`: Boolean/Null Check (optional): whether to show loading state & disable the button

```hint|directive
Other props will be passed through to the main button element, e.g. an `onMouseOver` event handler
```