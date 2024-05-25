function add(a,  b , cb)
{
    let result = a+b;
    cb(result);
    return  () => console.log(result);
}

add(2,7,(val) => console.log(val));
add(500,10,(res)=> console.log(res));