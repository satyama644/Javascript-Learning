// Write a JavaScript program to compute the union 
// of two arrays . Input array will only have unique elements in there respective array. 
// Input arr1= [1, 2, 3] 
// arr2= [100, 2, 1,10] 
// Output: [1,2,3,100,10]


let arr1= [1, 2, 3] ;
let arr2= [100, 2, 1,10] ;
for(let i=0;i<arr1.length;i++)
{
    let elementtoput = arr1[i];
    let ispresent = false;
    for(let j=0;j<arr2.length;j++)
    {
        if(elementtoput==arr2[j])
        {
            ispresent = true;
        }
    }
    if(ispresent==false)
    {
        arr2.push(elementtoput);

    }
}
console.log(arr2);