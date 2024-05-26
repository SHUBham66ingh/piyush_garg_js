function add(a)
{
    return function(b)
    {
        return function(c)
        {
            return a+b+c;
        };
    };
}

function sendAutoEmail(to)
{
 return function(subject)
 {
    return function(body)
    {
        console.log(`sending email to ${to}  with subject ${subject}: #{body}`);
    }
 }
}


let step1 = sendAutoEmail('shubham.dev@gmail.com');
let step2 = step1('new order confirmation');

step2("hey shubham , here is something for you");


