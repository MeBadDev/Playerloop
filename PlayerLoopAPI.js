const postURL = 'https://api.playerloop.io/reports';
let APIKey = '';

function init(key) {
    APIKey = key;
}
// the basic data of players
// you can feed this into createReport()
class playerData {
	constructor (id,email = '',handle = '',fullname = '') {
        this.id = id
        this.email = email
        this.handle = handle
        this.fullname = fullname
	}
    toDictionary() {
        var data = {
            'id':this.id,
            'email':this.email,
            'handle':this.handle,
            'full_name':this.fullname,
        }
        
        return data;
    };
};

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
    console.log(data['player']);
    request.setRequestHeader('Content-Type','application/json');
    request.setRequestHeader('Authorization',' Bearer ' + APIKey);
    request.send(JSON.stringify(data));
    console.log(request.responseText);
}

function openPrivacyPolicy() {
    window.open('https://playerloop.io/privacy-policy');
}
function ready() {
    console.log('ready!!')
}
export {openPrivacyPolicy,createReport,playerData,init,ready}