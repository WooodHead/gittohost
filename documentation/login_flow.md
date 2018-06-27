# How the Login Flow works
This site will use a special form of login, without username and passwords. Only an email address is required.

## Logging in - Step by step
* User types his/her `email` into the `login-form` and clicks `Login`
* An `email` with be sent to the user with a `link` that need to be `clicked`
* After `clicking the link`, the user gets back to the `website` again but now `logged in`

## But why?
The target audience for this service is going to setup the serice once and then never login again for multiply months. This make remembering a username and password a hassle. So instead we use the secure way that you login to your email in order to sign a user in. The chance that the user forgots his email's username and password is much smaller then a random username and password that he created once for 4 months ago.

## Negative points
The users email inbox could be filled with "Grant Login?" emails, but hopefully not a lot, only when the user signs in to the website, which should not happen often at all in this case.