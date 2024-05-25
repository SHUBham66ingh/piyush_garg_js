function add(a,  b , cb)
{
    let result = a+b;
    cb(result);
}

console.log(add(2,3));
