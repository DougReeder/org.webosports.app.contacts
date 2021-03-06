org.webosports.app.contacts
===========================

The Contacts (address book) app for Lune OS, rewritten with Enyo 2.
Typically, most data is supplied by Synergy Connectors, but it also allows local editing.

## Building/Installation

You can develop in the browser like a normal Enyo 2 web app - 
Contacts will use the data in db8SourceMock.js and the mock directory.
You'll need node.js and enyo-dev: 
http://enyojs.com/docs/latest/developer-guide/getting-started/first-steps.html


After pulling this source code, start a bash shell, `cd` to the app directory, then run
`enyo init`
to pull in the dependencies.


To rebuild on any change (for developing in the browser), run this command once in the app directory:
`enyo pack --watch`

To test in a browswer (Chrome is most like LuneOS) surf to `dist/index.html`


To rebuild and install on a LuneOS device attached via USB, run this command in the app directory:
`enyo pack && adb push dist /usr/palm/applications/com.palm.app.contacts && adb shell systemctl restart luna-next; adb forward tcp:1122 tcp:1122`
Then, in Chrome, surf to `localhost:1122` to debug.

## Contributing

If you want to contribute you can just start with cloning the repository and make your contributions. 
We're using a pull-request based development and utilizing GitHub for the management of those. 
All contributions must be a pull-request on GitHub. At least one of the core developers needs to approve the pull-request before it can be merged.

Please refer to http://www.webos-ports.org/wiki/Communications for information about how to contact the developers of this project.

## API exposed to other apps
luna-send -n 1 palm://com.palm.applicationManager/launch '{"id":"com.palm.app.contacts", "params": {"launchType": "newContact", "contact": {"nickname": "Madoka"}}}'

see http://www.openwebosproject.org/docs/developer_reference/application_apis/add_contact/

## TODO
* searching for two names should work
* contact details displays address with locality, region, country and postal code on separate lines
* locale-specific code to parse a single address field into DB fields
* edit name components
* type of new phone, IM, address or relation should be different than existing
* fix race condition between launchParam & accountPicker
* allow deleting records
* edit photos
* edit ringtones
* display and edit notes as single concatenated field
* replace account picker in EditContact w/ icon btn & custom Menu
* re-think edit & detail layout to work properly on both phone- and tablet-sized screens
* handle users w/ more than 500 contacts (probably by loading them all into GlobalPersonCollection)
* when user is edited, make the list of linked contacts update

