# Web Remember Credentials

Seeing how to make the browser offer to remember your credentials in a web app.

## Sources

- [How can I get browser to prompt to save password?](https://stackoverflow.com/a/17133187/2715716)
- [How to enable remember password in case of AJAX login?](https://stackoverflow.com/a/18611519/2715716)

## Running

Run `index.html`.

This site is also served using GitHub Pages on
https://tomashubelbauer.github.io/web-remember-credentials.

## Testing

Submit any of the forms. Once you've done so and saved the credentials, they
will be pre-filled and you won't be able to emulate this unless you remove them
throught the Settings. There is an easier way to keep testing though: change the
password to a new value and observe the behavior of the *update credentials*
prompt, which is triggered under similar conditions.

## Support

I only tested this in Firefox, because it is for a personal project and I don't
care about other browsers in this case.

I also tried with mobile Safari, but in it, it does not work.
It should be possible to fix that using https://stackoverflow.com/a/60607611/2715716.

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

### `form` with `input[type=password]` only with `button` instead of `input[type=submit]`, handled

It is well known that any button in a `form` will submit it, even it it lacks
`type=submit`. This is frequently used even in non-SPAs to be able to use richer
display in the `button`, such that is not provided by `input[type=submit]`.

Turns out this also triggers the prompt!
