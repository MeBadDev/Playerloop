const postURL = 'https://api.playerloop.io/reports'
let APIKey = '';



function init(key) {
    APIKey = key;
}
// the basic data of players
// you can feed this into createReport()
class playerData {
	constructor (id,email = '',handle = 'Player',firstName = 'firstname',lastName = 'lastname') {
        this.id = id
        this.email = email
        this.handle = handle
        this.firstName = firstName
        this.lastName = lastName
	}
    toDictionary() {
        var data = {
            'id':this.id,
            'email':this.email,
            'handle':this.handle,
            // NOT WORKING: this might be a API bug
            // 'first_name':this.firstName,
            // 'last_name':this.lastName
        }
        
        return data
    }
}

function createReport(content,reportType,player) {
    let request = new XMLHttpRequest();
    request.open("POST", postURL);
    let data = {
        'text':content,
        'type':reportType,
        "accepted_privacy": true,
        "client":"javascript",
        'player':player.toDictionary()
    };
    console.log(data['player'])
    console.log(data)
    request.setRequestHeader('Content-Type','application/json')
    request.setRequestHeader('Authorization',' Bearer ' + APIKey)
    request.send(JSON.stringify(data));
}
init('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjo4MTIzMTgwOX0.MSi7D2rni-FQgyByA2Ek1fYPqzj2oKGeD05LuhTTP08')
