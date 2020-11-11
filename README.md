# soft-form

*A pure React form with some real-life validation scenarios* [View live](https://soft-form.netlify.app)

## How to run

You should have [Node.js](https://nodejs.org) and npm installed to be able to run this application.

**Development Mode** `npm run dev`

Running the app in the development mode does not minify the Tailwind CSS build file.
Once build is complete and app is running, visit [localhost:3000](http://localhost:3000) on your web browser

**Build** `npm run build`

Building the app generates a minified version of the app in the `build` folder. The generated `build` folder can be deployed as a static website

**Start locally** `npm run start:local`

Starting locally builds a minified version of the app and opens it in a web browser at [localhost:8080](http://localhost:8080)

## Tests
[No tests yet]

## Form Fields Specifications

- **Full name** `<FullNameField/>`
	- Must not be less that 2 characters, must include a space and then second name
- **Email** `<EmailField/>`
	- Must be a valid email address
- **Phone number** `<PhoneField/>`
	- Must not start with '+234'
	- Must start with '070', '080', '090', '081'
- **Password** `<PasswordFields/>`
	- Minimum of 6 characters
	- Must contain at least one uppercase character, one number, special
character
- **Confirm password**
	- Must match password field
- **Credit/Debit card number** `<CardNumberField/>`
	- Must match the ‘XXXX XXXX XXXX XXXX’ format.
	-As you type, it automatically adds space to the numbers
- **Expiration date**  `<CardExpirDateField/>`
	- Must match 'MM/YY' format
	- As you type 0123, it should fill the input as 01/23
- **PIN** `<CardPinField/>`
	- Should be 4 characters long
	- Only accepts numbers
	- Should be a password field

The form's submit button should be disabled until all fields are valid

On clicking the submit button, user should be directed to a dashboard page.

## Tools used
1. [create-react-app](https://create-react-app.dev/)
2. [react-router](https://reactrouter.com/)
3. [Tailwind CSS](https://tailwindcss.com/)

<!-- ## Documentation

To view a summary about how each form control field works, you can click on the link on each component in this file e.g [`<CardPinField/>`]().

Here is the full [documentation]() -->

