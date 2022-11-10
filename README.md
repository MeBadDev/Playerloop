# PlayerLoop for javascript

## How do i use this?
```javascript
// First you must initalize it with your key
init('My Key')
// To send a report you create a playerData object
// Give it Player ID, Player's email, Player's Handle
let data = new playerData('Player ID','example@gmail.com','Player Handle','Player name')
// 'bug' at the middle is report type. it could only be one of 
createReport('Report Title','bug',data)
```
IMPORTANT: Your **MUST** let your user accept PlayerLoop's Privacy Policy before sending there data.