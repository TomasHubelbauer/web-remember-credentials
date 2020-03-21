# Web Remember Credentials

Seeing how to make the browser offer to remember your credentials in a web app.

## Sources

- [How can I get browser to prompt to save password?](https://stackoverflow.com/a/17133187/2715716)
- [How to enable remember password in case of AJAX login?](https://stackoverflow.com/a/18611519/2715716)

## Running

Run `index.html`.

## Support

I only tested this in Firefox, because it is for a personal project and I don't
care about other browsers in this case.

## Scenarios

### `form` with `input[type=text]` and `input[type=password]`, submitted

The inputs do not seem to need to have `name`s or anything else, the credentials
save prompt is displayed.

### `form` with `input[type=password]` only, submitted

This also works, the `input` need not have a `name`.

### `form` with `input[type=password]` only, handled

Again, the `input` need not have a `name` and with `preventDefault`, the prompt
still shows. In fact, it appears to appear before the form submission navigation
even occurs (or, would occur).
