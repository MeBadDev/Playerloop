# PlayerLoop for javascript
## PlayerLoop? What is it?
Playerloop is a tool to help you track player's feedback, bug reports.
Go to https://app.playerloop.io to register an account.
## How do i use this?

First you need project key, you must create a PlayerLoop account in order to get it
```html
<script src = 'https://mebaddev.github.io/Playerloop/PlayerLoopAPI.js' defer></script>
```
```javascript
// First you must initalize it with your key
init('My Key')
// To send a report you create a playerData object
// Give it Player ID, Player's email, Player's Handle
let data = new playerData('Player ID','example@gmail.com','Player Handle','Player name');
// 'bug' at the middle is report type. it could only be one of 
createReport('Report Title','bug',data);
```
IMPORTANT: Your **MUST** make sure your user accept Playerloop's Privacy Policy before sending there data.