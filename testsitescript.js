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

//GLOBALS?
let type1 = 'neutral'
let type2 = ''

var listDiv = document.getElementById('type1list');
var ul = document.createElement('ul');
listDiv.appendChild(ul);
for(var i = 0; i < data.matchups.length; ++i) {
    var li = document.createElement('li');
    li.innerText = data.matchups[i].type;
    li.onclick = function(){
        type1 = this.innerText;
        type1El.innerText = type1;
        defense_calculation(type1,type2);
    }
    ul.appendChild(li);                                 
}
var type1El = document.getElementById('type1');

var listDiv2 = document.getElementById('type2list');
var ul2 = document.createElement('ul');
listDiv2.appendChild(ul2);
for(var i = 0; i < data.matchups.length; ++i) {
    var li2 = document.createElement('li');
    li2.innerText = data.matchups[i].type;
    li2.onclick = function(){
        type2 = this.innerText;
        type2El.innerText = type2;
        defense_calculation(type1,type2);
    }
    ul2.appendChild(li2);                                 
}

var li2 = document.createElement('li');
    li2.innerText = 'no type';
    li2.onclick = function(){
        type2 = '';
        type2El.innerText = '';
        defense_calculation(type1,type2);
    }
    ul2.appendChild(li2);            
var type2El = document.getElementById('type2');

type1El.innerText = type1;
type2El.innerText = type2;




// var input = document.getElementById('input');
// var but = document.createElement('button');
// but.innerText = 'TEST';
// but.onclick = function(){
//     defense_calculation(type1,type2);
// }
// input.appendChild(but)

function defense_calculation(type1,type2){
    console.log("type1");
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

    console.log(newtype);
    this.output(newtype);
}

function output(newtype){
    console.log("CALLING");
    var quads = document.createElement('ul');
    var doubles = document.createElement('ul');
    var singles = document.createElement('ul');
    var halfs = document.createElement('ul');
    var fourths = document.createElement('ul');
    let singletypes = types;

    for(var i = 0; i < newtype.quad.length; ++i) {
        var li = document.createElement('li');
        li.innerText = newtype.quad[i];
        quads.appendChild(li);
        console.log("added to quads");
    }
    for(var i = 0; i < newtype.double.length; ++i) {
        var li = document.createElement('li');
        li.innerText = newtype.double[i];
        doubles.appendChild(li);
        console.log("added to doubles");
    }
    for(var i = 0; i < newtype.half.length; ++i) {
        var li = document.createElement('li');
        li.innerText = newtype.half[i];
        halfs.appendChild(li);
        console.log("added to halfs");
    }
    for(var i = 0; i < newtype.fourth.length; ++i) {
        var li = document.createElement('li');
        li.innerText = newtype.fourth[i];
        fourths.appendChild(li);
        console.log("added to fourths");
    }

    singletypes = singletypes.filter(element => !newtype.quad.includes(element));
    singletypes = singletypes.filter(element => !newtype.double.includes(element));
    singletypes = singletypes.filter(element => !newtype.half.includes(element));
    singletypes = singletypes.filter(element => !newtype.fourth.includes(element));

    for(var i = 0; i < types.length; ++i) {
        var li = document.createElement('li');
        li.innerText = types[i];
        singles.appendChild(li);
    }

    var output = document.getElementById('output');
    output.innerText = '';

    let quadtext = document.createElement('p');
    quadtext.innerText = '4x';
    output.appendChild(quadtext);
    output.appendChild(quads);

    let doubletext = document.createElement('p');
    doubletext.innerText = '2x';
    output.appendChild(doubletext);
    output.appendChild(doubles);

    let singletext = document.createElement('p');
    singletext.innerText = '1x';
    output.appendChild(singletext);
    output.appendChild(singles);

    let halftext = document.createElement('p');
    halftext.innerText = '.5x';
    output.appendChild(halftext);
    output.appendChild(halfs);

    let fourthtext = document.createElement('p');
    fourthtext.innerText = '.25x';
    output.appendChild(fourthtext);
    output.appendChild(fourths);
}

defense_calculation(type1,type2);