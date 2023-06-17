setImmediate(()=>console.log("Imm"));
setTimeout(function() {}, 2000);
setTimeout(()=>console.log("time"));
setTimeout(function() {}, 2000);
process.nextTick(()=>console.log("next"));
setTimeout(function() {}, 2000);