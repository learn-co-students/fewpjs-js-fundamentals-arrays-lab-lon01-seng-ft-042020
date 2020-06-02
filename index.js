// Write your solution here!

function pets(){
    return ["Milo", "Otis", "Garfield"]
};


const append = pets(), prepend = pets(), removeLast = pets(), removeFirst =pets();

append.push("Odie");
prepend.unshift("Odie");
removeLast.pop();
removeFirst.shift();