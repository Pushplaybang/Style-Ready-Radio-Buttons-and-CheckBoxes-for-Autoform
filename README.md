# Style Ready Radio Buttons and CheckBoxes for Autoform
Styling radio buttons and checkboxes can be a little tricky, but mostly relies on the correct markup to allow the checked status of the input to visibly affect the label (using the `+` css operator), and allowing clicks on the label to update the form control state via the `for` and `id` attributes.

```html
<!-- The required markup style for these inputs -->
<div>
  <input type="radio" id='uniqueId' />
  <label for="uniqueId">label</label>
</div>
```

## install
With autoform 6 and its dependancies installed, running the following from your project root directory.

```sh
meteor add pushplaybang:autoform-style-ready-radio-and-checkbox
```

**NB: simply installing this package will have no visible result, unless you inspect your markup**

## New Fields
The package provides four new field types, that can be set in your schema, or on a quickField etc.  These are

* `boolean-checkbox-styled`
* `boolean-radios-styled`
* `select-checkbox-styled`
* `select-radio-styled`

please refer to the autoform documentation for more about these forms default behaviour.  Very specifically this package adjusts the markup, and sets up a unique id for each field to associate the label with the input.

Heres an example of how you might use this in your schema

```js
favouriteFlavour: {
  type: String,
  label: 'favourite flavour',
  allowedValues: ['chocolate', 'vanilla'],
  autoform: {
    defaultValue: 'vanilla',
    type: 'select-radio-styled',
    label: false,
  },
},
```

## Style Example
Heres some example `scss` to style all radio buttons and checkboxes like flat minimal switches.  note the use of the variables, you may wish to create these, or swop them out for your preffered colours.

```scss
form {
  // hide the browser controls
  input[type="radio"],
  input[type="checkbox"] {
    display: none;
  }

  // create a large click target with the label
  label {
    width: 100%;
    display: block;
    position: relative;

    // we'll use the pseudo elements to create the switches
    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      top:0.75rem;
      right:0;
      height: 1.5rem;
      box-sizing:border-box;
    }

    &::before {
      width: 3rem;
      background: #bbb;
      border-radius: 10px;
      transition: background .162s;
    }

    &::after {
      width: 1.5rem;
      background: #fff;
      border: 2px solid #bbb;
      border-radius: 100%;
      transform: translateX(-100%);
      transition: transform .162s, border-color .162s;
    }
  }

  // when the input state changes it will affect the label pseudo elements style
  input[type="radio"]:checked + label,
  input[type="checkbox"]:checked + label {
    &::before {
      background: $primary;
    }

    &::after {
      transform: translateX(0);
      border-color: $primary;
    }
  }
}

```


### Contributions and Suggestions Welcome!
Have something you think this needs or could use as an improvement? Let me know.  add [an issue on github](https://github.com/Pushplaybang/common-polyfills) or fork and create a pull request.



____


### License [MIT](https://opensource.org/licenses/MIT)
Copyright (c) 2016 Paul van Zyl

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
