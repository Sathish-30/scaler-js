const impure = () => {
    const a = 4;
    function add (x){
        console.log(x + a);
    }
    add(7);
}