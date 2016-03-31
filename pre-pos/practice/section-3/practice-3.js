function create_updated_collection(collection_a, object_b) {
  
   var collection_c = same_elements_array(collection_a);

   collection_c=sub_same_element_count(collection_c,object_b);

   return collection_c;
}

function same_elements_array(collection_a)

{
   var collection_c = [];

   for(var i = 0;i < collection_a.length;i++)

   {
       for(var k = 0;k < collection_c.length && collection_c[k].key != collection_a[i];k++) ;

           if(k === collection_c.length)

               collection_c.push({key:collection_a[i],count:1});

           else

               collection_c[k].count++;

   }

   return collection_c;

}

function sub_same_element_count(collection_c,object_b)

{

   for(var i = 0;i < collection_c.length;i++)

   {
       for(var k = 0;k < object_b.value.length;k++)

          if(collection_c[i].key === object_b.value[k])

               collection_c[i].count -= Math.floor(collection_c[i].count/3);

   }

   return collection_c;

}
