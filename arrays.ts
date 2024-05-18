
 ///                  simple arrays assigment 

//qusetion no 01 
    //Create an array named fruits that contains the following string
    //elements: "apple", "banana", "mango", "orange"
   
     let fruits:string[]=["apple","banana","mango","orange"];
       console.log (fruits);
//                 xxxxxxxxxxxxxxxxxxxxxxxxxxxx

//question no 02
  // Declare an array named numbers that can contain only number
  //  elements and initialize it with the values 10, 20, 30, and 40.

     let numbers:number[] =[10 ,20, 30 , 40];
      console.log (numbers);
//           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//Question no 03
   //  Access the third element of the fruits array and assign it to a
   //    variable named thirdFruit.    
   let thirdFruit:string[]=["apple","banana","mango","orange"];
   console.log (thirdFruit[2])
//            xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//Question no 04 
   //Change the second element of the numbers array to 25.
        
      let secondelement:number[]=[10 ,20, 30 , 40];
      secondelement[1]=25
      console.log(secondelement);

//                 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//Question no 05
   //Add the element "grape" to the end of the fruits array using the
   //method.

      let addfruit:string[]=["apple","banana","mango","orange"];
        addfruit.push("grapes");
        console.log(addfruit);

//                 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Question no 06
   //Remove the last element from the fruits array using the
   //method and assign it to a variable named lastFruit.   

        let lastFruit:string[]=["apple","banana","mango","orange"];
           lastFruit.pop();
           console.log(lastFruit);

//                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Question no 07
   //Remove the first element from the fruits array using the
   //method and assign it to a variable named firstFruit.
        
       let firstFruit:string[]=["apple","banana","mango","orange"];
       firstFruit.shift();
       console.log (firstFruit);  

//               XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//Question no 08
   //  Add the element "kiwi" to the beginning of the fruits array
   //using the method.

       let Fruits:string[]=["apple","banana","mango","orange"];
        Fruits.unshift("kiwi");
        console.log(Fruits); 

//            XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//Question no 09
   //Remove 2 elements from the fruits array starting from index 1
   //using the method.
    
   fruits.splice(1,2);
   console.log(fruits);
  
//        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   
// Question no 10
   // Insert the elements "pineapple" and "pear" at index 2 of the
   //fruits array using the method.
    
   fruits.splice(0,2 ,"pineapple","pear");
    console.log(fruits);
 
//         XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//Question no 11
   // Create a new array named citrusFruits that contains the first
   // two elements of the fruits array using the method.

    let citrusFruits= fruits.splice(0,2);
    console.log (citrusFruits);

//       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXx    

// Question no 12
   //Create a new array named lastTwoFruits that contains the last
   //two elements of the fruits array using the method.
        
     let lastfruit=fruits.splice(-2);
       console.log (lastfruit);

 //         XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxx      

       
         














        

            
