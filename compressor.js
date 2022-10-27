const fs = require('fs');

let text = fs.readFileSync(process.argv[2]).toString();

let counter = {}
const parts = text.split(" ");
parts.forEach(word => {
    if(word.length > 0 && counter.hasOwnProperty(word)) {
        counter[word] += word.length
    } else {
        counter[word] = word.length
    }
});       

// Source: https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
let sorted = [];
for (const c in counter) {
    sorted.push([c, counter[c]]);
}
sorted.sort(function(a, b) {
    return b[1] - a[1];
});

// Code generation
let output_text = `d=[`
sorted.forEach(element => {
    output_text += `"${element[0]}",`;
});
output_text.slice(0, -1)
output_text += ']\n';

eval(output_text)

output_text += `a=[`
parts.forEach(word => {
    output_text += `${d.indexOf(word)},`
}); 
output_text.slice(0, -1)
output_text += ']\n';

output_text += `t=""\n`
output_text += `a.forEach(i=>t+=d[i]+" ")
t+=""
const fs=require('fs')
if(process.argv.length < 3) console.log(t)
else fs.writeFile(process.argv[2],t,(err=>{if(err)return console.log(err)}))
fs.unlinkSync("process.argv[1]);`

require('fs').writeFile(process.argv[3],output_text,(err=>{if(err)return console.log(err)}))