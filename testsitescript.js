data = {
    "matchups": [
        {
            "type": "neutral",
            "attack": {
                "half": [
                    "mental"
                ],
                "double": []
            },
            "defend": {
                "half": [],
                "double": [
                    "mental"
                ]
            }
        },
        {
            "type": "wind",
            "attack": {
                "half": [
                    "wind",
                    "electric"
                ],
                "double": [
                    "toxic"
                ]
            },
            "defend": {
                "half": [
                    "wind",
                    "earth"
                ],
                "double": [
                    "electric"
                ]
            }
        },
        {
            "type": "earth",
            "attack": {
                "half": [
                    "wind",
                    "water",
                    "nature"
                ],
                "double": [
                    "fire",
                    "electric",
                    "crystal"
                ]
            },
            "defend": {
                "half": [
                    "fire",
                    "electric",
                    "crystal",
                    "toxic"
                ],
                "double": [
                    "water",
                    "nature",
                    "melee"
                ]
            }
        },
        {
            "type": "water",
            "attack": {
                "half": [
                    "water",
                    "nature",
                    "toxic"
                ],
                "double": [
                    "earth",
                    "fire",
                    "digital"
                ]
            },
            "defend": {
                "half": [
                    "earth",
                    "water",
                    "fire"
                ],
                "double": [
                    "nature",
                    "electric",
                    "toxic"
                ]
            }
        },
        {
            "type": "fire",
            "attack": {
                "half": [
                    "earth",
                    "water",
                    "fire"
                ],
                "double": [
                    "nature",
                    "crystal"
                ]
            },
            "defend": {
                "half": [
                    "fire",
                    "nature",
                    "crystal"
                ],
                "double": [
                    "earth",
                    "water"
                ]
            }
        },
        {
            "type": "nature",
            "attack": {
                "half": [
                    "fire",
                    "nature",
                    "toxic"
                ],
                "double": [
                    "earth",
                    "water"
                ]
            },
            "defend": {
                "half": [
                    "earth",
                    "water",
                    "nature",
                    "electric"
                ],
                "double": [
                    "fire",
                    "toxic"
                ]
            }
        },
        {
            "type": "electric",
            "attack": {
                "half": [
                    "earth",
                    "nature",
                    "electric",
                    "crystal"
                ],
                "double": [
                    "wind",
                    "water",
                    "mental",
                    "digital"
                ]
            },
            "defend": {
                "half": [
                    "wind",
                    "electric"
                ],
                "double": [
                    "earth",
                    "crystal"
                ]
            }
        },
        {
            "type": "mental",
            "attack": {
                "half": [
                    "crystal"
                ],
                "double": [
                    "neutral",
                    "melee"
                ]
            },
            "defend": {
                "half": [
                    "neutral",
                    "melee"
                ],
                "double": [
                    "electric",
                    "digital",
                    "crystal"
                ]
            }
        },
        {
            "type": "digital",
            "attack": {
                "half": [],
                "double": [
                    "mental",
                    "digital",
                    "melee"
                ]
            },
            "defend": {
                "half": [
                    "toxic"
                ],
                "double": [
                    "water",
                    "electric",
                    "digital"
                ]
            }
        },
        {
            "type": "melee",
            "attack": {
                "half": [
                    "mental",
                    "melee"
                ],
                "double": [
                    "earth",
                    "crystal"
                ]
            },
            "defend": {
                "half": [
                    "melee"
                ],
                "double": [
                    "mental",
                    "digital"
                ]
            }
        },
        {
            "type": "crystal",
            "attack": {
                "half": [
                    "earth",
                    "fire"
                ],
                "double": [
                    "electric",
                    "mental"
                ]
            },
            "defend": {
                "half": [
                    "electric",
                    "mental",
                    "toxic"
                ],
                "double": [
                    "earth",
                    "fire",
                    "melee"
                ]
            }
        },
        {
            "type": "toxic",
            "attack": {
                "half": [
                    "earth",
                    "digital",
                    "crystal",
                    "toxic"
                ],
                "double": [
                    "water",
                    "nature"
                ]
            },
            "defend": {
                "half": [
                    "water",
                    "nature",
                    "toxic"
                ],
                "double": [
                    "wind"
                ]
            }
        }
    ]
}
types = [
"neutral",
"wind",
"earth",
"water",
"fire",
"nature",
"electric",
"mental",
"digital",
"melee",
"crystal",
"toxic"]

typecolors = {
    "neutral":"e6f7f7",
    "wind":"08fab3",
    "earth":"ba795c",
    "water":"45cbff",
    "fire":"e85c4e",
    "nature":"adde77",
    "electric":"ffe174",
    "mental":"c369a3",
    "digital":"a4c0c1",
    "melee":"fa9260",
    "crystal":"ea4a68",
    "toxic":"5c565c"
    }

let type1 = 'neutral'
let type2 = ''

var listDiv = document.getElementById('type1list');
for(var i = 0; i < data.matchups.length; ++i) {
    listDiv.appendChild(makeClickableLi(data.matchups[i].type, 1));                                 
}
var type1El = document.getElementById('type1');

var listDiv2 = document.getElementById('type2list');
for(var i = 0; i < data.matchups.length; ++i) {
    listDiv2.appendChild(makeClickableLi(data.matchups[i].type, 2));                               
}         
var type2El = document.getElementById('type2');
var divrem = document.createElement('div');
divrem.setAttribute("class", "typeContainer");
divrem.setAttribute("id", 2);
var img = document.createElement('img');
var p = document.createElement('p');
img.src = "./images/remove.png";
p.innerText = 'no type';
divrem.onclick = function(){
    type2 = '';
    type2El.innerText = 'Type 2: ';
    defense_calculation(type1,type2);
    var list = document.getElementById("type2list")
        for (var i = 0; i < list.children.length; ++i){
            list.children[i].setAttribute("class", "typeContainer");
        }
        this.setAttribute("class", "typeContainerSelected");
}  
divrem.appendChild(img);
divrem.appendChild(p);
listDiv2.appendChild(divrem); 

type1El.innerText = "Type 1: "+type1;
type2El.innerText = "Type 2: "+type2;

function defense_calculation(type1,type2){

    let newtype = {
        "quad": [],
        "double": [],
        "half": [],
        "fourth": []
    }
    let t1half = [];
    let t1double = [];
    let t2half = [];
    let t2double = [];

    //Get defense values for first type
    for(var i = 0; i < data.matchups.length; ++i) {
       
        if(data.matchups[i].type == type1){
            t1half = data.matchups[i].defend.half;              //Get resistance type 2
            t1double = data.matchups[i].defend.double;          //Get weakness type 2
            break;
        }
    }
    //Get defense values for second type
    if(type2!='' && type2!=type1){
        for(var i = 0; i < data.matchups.length; ++i) {
            if(data.matchups[i].type == type2){
                t2half = data.matchups[i].defend.half;      //Get resistance type 2
                t2double = data.matchups[i].defend.double;  //Get weakness type 2
                break;
            }
        }
    }

    //cancel out
    let cancel1 = t1half.filter(element => t2double.includes(element)); //check cancelled out values 1
    let cancel2 = t2half.filter(element => t1double.includes(element)); //check cancelled out values 2

    //remove ignoreable types (cuz they be canceling eachother)
    cancel1 = cancel1.concat(cancel2);

    t1half = t1half.filter(element => !cancel1.includes(element));
    t1double = t1double.filter(element => !cancel1.includes(element));
    t2half = t2half.filter(element => !cancel1.includes(element));
    t2double = t2double.filter(element => !cancel1.includes(element));

    //double ups
    let quad = t1double.filter(element => t2double.includes(element)); //check dupe weakness
    let fourth = t1half.filter(element => t2half.includes(element)); //check dupe resistance

    //remove doubles
    t1half = t1half.filter(element => !fourth.includes(element));
    t2half = t2half.filter(element => !fourth.includes(element));

    t1double = t1double.filter(element => !quad.includes(element));
    t2double = t2double.filter(element => !quad.includes(element));

    newtype.quad = quad;
    newtype.fourth = fourth;
    newtype.half = t1half.concat(t2half);
    newtype.double = t1double.concat(t2double);

    this.output(newtype);
}

function output(newtype){
    //TODO: Turn into divs instead of lists
    var quads = document.createElement('ul');
    var doubles = document.createElement('ul');
    var singles = document.createElement('ul');
    var halfs = document.createElement('ul');
    var fourths = document.createElement('ul');
    let singletypes = types;

    for(var i = 0; i < newtype.quad.length; ++i) {
        var li = document.createElement('li');
        li.innerText = newtype.quad[i];
        li.id = newtype.quad[i];
        quads.appendChild(li);
    }
    for(var i = 0; i < newtype.double.length; ++i) {
        var li = document.createElement('li');
        li.innerText = newtype.double[i];
        li.id = newtype.double[i];
        doubles.appendChild(li);
    }
    for(var i = 0; i < newtype.half.length; ++i) {
        var li = document.createElement('li');
        li.innerText = newtype.half[i];
        li.id = newtype.half[i];
        halfs.appendChild(li);
    }
    for(var i = 0; i < newtype.fourth.length; ++i) {
        var li = document.createElement('li');
        li.innerText = newtype.fourth[i];
        li.id = newtype.fourth[i];
        fourths.appendChild(li);
    }

    singletypes = singletypes.filter(element => !newtype.quad.includes(element));
    singletypes = singletypes.filter(element => !newtype.double.includes(element));
    singletypes = singletypes.filter(element => !newtype.half.includes(element));
    singletypes = singletypes.filter(element => !newtype.fourth.includes(element));

    for(var i = 0; i < singletypes.length; ++i) {
        var li = document.createElement('li');
        li.innerText = types[i];
        li.id = singletypes[i];
        singles.appendChild(li);
    }

    var output = document.getElementById('output');
    output.innerText = '';

    if(quads.childElementCount >= 1){
        let quadtext = document.createElement('p');
        quadtext.innerText = 'Takes 4x damage from:';
        output.appendChild(quadtext);
        output.appendChild(quads);
    }

    if(doubles.childElementCount >= 1){
        let doubletext = document.createElement('p');
        doubletext.innerText = 'Takes 2x damage from:';
        output.appendChild(doubletext);
        output.appendChild(doubles);
    }

    if(singles.childElementCount >= 1){
        let singletext = document.createElement('p');
        singletext.innerText = 'Takes 1x damage from:';
        output.appendChild(singletext);
        output.appendChild(singles);
    }

    if(halfs.childElementCount >= 1){
        let halftext = document.createElement('p');
        halftext.innerText = 'Takes .5x damage from:';
        output.appendChild(halftext);
        output.appendChild(halfs);
    }

    if(fourths.childElementCount >= 1){
        let fourthtext = document.createElement('p');
        fourthtext.innerText = 'Takes .25x damage from:';
        output.appendChild(fourthtext);
        output.appendChild(fourths);
    }
}

defense_calculation(type1,type2);




function makeClickableLi(type, num){
    var div = document.createElement('div');
    div.setAttribute("class", "typeContainer");
    div.setAttribute("id", num);
    var img = document.createElement('img');
    var p = document.createElement('p');
    img.src = "./images/types/"+type+".png";
    p.innerText = type;
    div.onclick = function(){
        if(this.id == 1){
            type1 = type;
            type1El.innerText = "Type 1: "+type;
        } else {
            type2 = type;
            type2El.innerText = "Type 2: "+type;
        }
        var list = document.getElementById("type"+num+"list")
        for (var i = 0; i < list.children.length; ++i){
            list.children[i].setAttribute("class", "typeContainer");
        }
        this.setAttribute("class", "typeContainerSelected");
        defense_calculation(type1,type2);
    }  
    div.appendChild(img);
    div.appendChild(p);
    return div;
}

document.getElementById("type1list").children[0].setAttribute("class", "typeContainerSelected");
document.getElementById("type2list").children[12].setAttribute("class", "typeContainerSelected");