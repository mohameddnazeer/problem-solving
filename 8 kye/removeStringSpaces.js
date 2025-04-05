function noSpace(x){
    return x.trim().replace(/\s+/g, '');
}

console.log(noSpace("Hello World"));
console.log(noSpace("  Hello   World  "));