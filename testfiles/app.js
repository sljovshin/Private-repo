const a = [{
    "rawType":1,
    "type":"INCOMING",
    "dateTime":"17. jun. 2019 09:11:19",
    "timestamp":"1560755479695",
    "name":null,
    "duration":2698,
    "phoneNumber":"52022105"},
    {"rawType":1,
    "type":"INCOMING",
    "dateTime":"17. jun. 2019 08:27:12",
    "timestamp":"1560752832187",
    "name":null,
    "duration":2514,
    "phoneNumber":"5202210502"},
    {"rawType":2,
    "type":"OUTGOING",
    "dateTime":"16. jun. 2019 19:27:28",
    "timestamp":"1560706048565",
    "name":"Sofie <3",
    "duration":35,
    "phoneNumber":"93497641"},
    {"rawType":2,
    "type":"OUTGOING",
    "dateTime":"15. jun. 2019 16:53:52",
    "timestamp":"1560610432813",
    "name":null,
    "duration":9,
    "phoneNumber":"+4721523231"},
    {"rawType":1,
    "type":"INCOMING",
    "dateTime":"14. jun. 2019 16:57:06",
    "timestamp":"1560524226296",
    "name":"Sofie <3",
    "duration":129,
    "phoneNumber":"93497641"},
    {"rawType":1,
    "type":"INCOMING",
    "dateTime":"14. jun. 2019 15:04:26",
    "timestamp":"1560517466213",
    "name":"Christer Tønnessen",
    "duration":336,
    "phoneNumber":"95088967"},
    {"rawType":1,
    "type":"INCOMING",
    "dateTime":"14. jun. 2019 13:02:59",
    "timestamp":"1560510179356",
    "name":null,
    "duration":182,
    "phoneNumber":"7415080502"
}];

const b = [{
    "timestamp":"1560510179356",
    "name":null,
    "phoneNumber":"7415080502"
}, {
    "timestamp":"1560610432813",
    "name":null,
    "phoneNumber":"+4721523231"
},{
    "timestamp":"1560706048565",
    "name":"Sofie <3",
    "phoneNumber":"93497641"
}];

const c = [{
    "timestamp":"1560755479695",
    "name":null,
    "phoneNumber":"52022105"
}];


function filter(a, b, c) {
    if (!b) { b = []; }
    if (!c) { c = []; }
    const filtered = a.filter(entry => {
        return !b.some(({timestamp}) => entry.timestamp === timestamp) &&
               !c.some(({timestamp}) => entry.timestamp === timestamp);
    });
    return filtered;
}
console.log("orginal list");
console.log(a);
console.log("blacklist");
console.log(b);
console.log("completed list");
console.log(c);
console.log("Filtered list");
console.log(filter(a, b, c));
