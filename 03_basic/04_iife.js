// Immediately Invoked Function Expressions (IIFE)

// ()();  SYNTEX ; is used to end iife
(function chai(){
    // named IIFE
    console.log("db connected")
})();

( (name) =>{
    console.log(`db connected two ${name}`);
} )("hites");