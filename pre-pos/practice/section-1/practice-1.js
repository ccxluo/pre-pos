/*
function collect_same_elements(collection_a, collection_b) {
  
   var same_elements = [];

   for(var i = 0;i < collection_a.length;i ++)

      if(isExsists(collection_a[i],collection_b))

         same_elements.push(collection_a[i]);

   return same_elements;
}
function isExsists(x,collection_b)
{
   var flag = false;

   for(var k = 0;k < collection_b.length;k ++)

       if(collection_b[k] === x)

           flag = true;

   return flag;
}
*/

function collect_same_elements(collection_a, collection_b) {
  
   var same_elements = [];

   collection_a.forEach(function(item){

      if(isExsists(item,collection_b))

         same_elements.push(item);    
})
   
   return same_elements;
}
function isExsists(element,collection_b)
{
   var flag = false;

   collection_b.forEach(function(item){

     if(element === item)

        flag = true;
})
   
   return flag;
}
