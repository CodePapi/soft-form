# Documentation

Each input field component was developed in such a way that it emits its value and validity to its parent component for every change in its value. Its parent component can read these values and make decisions based on them as it pleases (without modifying the values of course.)

In the case of the [hosted example](https://soft-form.netlify.app), the parent component monitors the validity of each field and enables the SUBMIT button when all fields are valid.

The `value` each field emits is the value in the input field. The `validity` of each field is a boolean. `true` if the field is valid and `false` if it is not.

## Notes

Only Vanilla JavaScript and [HTML5 Constraint Validation APIs](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validationonly were used. As such, the algorithm of each input component field can be ported to other frameworks as long as the functions attached to the keyboard events and the validation contraints on each input field is maintaned.

## Input Fields

Some properties (`props`) are common across many input field components. These properties will be stated here to avoid repitition.

| prop | data type | is required? | default value | description|
|---|---|---|---|---|
| fieldName  | string  | no  | varies by field | basically the field's id. not applicable to `<PasswordFields/>`|
| setFieldValidity  |  function | yes  | undefined  | a function that receives the input component field's `value [string]` and `validity [boolean]` in one object.|
|prvtNonNumeric   |   function| yes (for fields that need it)  | undefined  | a function to prevent non numeric characters from being entered to the field  |
|styleOnErr   | function   | no  | (f) => f  | a function that accepts the input component field's `id [string]` and `isValid [boolean]` for styling it based on its validity  |

### `<FullNameField/>`

**specifications**

- Must not be less that 2 characters, must include a space and then a second name

**props**

- fieldName  [`default="fullName"`]
- setFieldValidity
- styleOnErr

### `<EmailField/>`

**specifications**

- Must be a valid email address

**props**

- fieldName  [`default="email"`]
- setFieldValidity
- styleOnErr

### `<PhoneField/>`

**specifications**

- Must not start with '+234'
- Must start with '070', '080', '090' or '081'

**props**

- fieldName  [`default="phone"`]
- setFieldValidity
- prvtNonNumeric
- styleOnErr

### `<PasswordFields/>`

**specifications**

- Minimum of 6 characters
- Must contain at least one uppercase character, one number, one special
character
- Confirm password must match password field

**props**

- setFieldValidity
- styleOnErr


### `<CardNumberField/>`

**specifications**

- Must match the `XXXX XXXX XXXX XXXX` format.
- As you type, it automatically adds space inbetween each 4 sets of numbers

**props**

- fieldName  [`default="cardNumber"`]
- setFieldValidity
- prvtNonNumeric
- styleOnErr

### `<CardExpirDateField/>`

**specifications**

- Must match `MM/YY` format
- As you type 0123, it should fill the input as 01/23

**props**

- fieldName  [`default="cardExpirDate"`]
- setFieldValidity
- prvtNonNumeric
- styleOnErr

### `<CardPinField/>`

**specifications**

- Should be 4 characters long
- Only accepts numbers
- Should be a password field

**props**

- fieldName  [`default="cardPin"`]
- setFieldValidity
- prvtNonNumeric
- styleOnErr