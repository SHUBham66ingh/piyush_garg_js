function add(a,  b , cb)
{
    let result = a+b;
    cb(result);
}

add(2,7,(val) => console.log(val));