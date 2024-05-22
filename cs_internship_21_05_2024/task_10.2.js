const prompt = require("prompt-sync")({sigint:true});
let n=prompt("Enter any number");
n=Number.parseInt(n);
for(let i=0;i<n;i++){
    for(let j=0;j<n-i-1;j++){
        process.stdout.write(" ");
    }
    for(let j=0;j<2*i+1;j++){
        process.stdout.write(j+1);
    }
    for(let j=0;j<n-i-1;j++){
        process.stdout.write(" ");
    }
    console.log();
}