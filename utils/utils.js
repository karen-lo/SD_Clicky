var  symbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", 
                            "9", "a", "b", "c", "d", "e", "f", "g", 
                            "h", "i", "j", "k", "l", "m", "n", "o",
                            "p", "q", "r", "s", "t", "u", "v,", "w",
                            "x", "y", "z"]
module.exports = {
   randomGenerator: function( passLength)
   {

      var classPass = "";

      for( i = 0; i < passLength; i++)
      {
         classPass += symbols[Math.rand()*36];
      }

      return classPass;

   }
   classCreate:function( className, classSize, lectureTimes, user, callback)
   {
      if(user.type != "teacher")
      {
         var error = new Error("Sorry, only teachers can create classes.");
         return callback(error);
      }
      if( !user.classes )
      {
         user.classes = {};
      }
      if( !user.classes[className] )
      {
         var error = new Error("Sorry, a class with this name has already been created.");
         return callback(error);
      }
      if( classSize < 1)
      {
         var error = new Error("You need at least one student in your class.");
         return callback(error);
      }
      if( lectureNumber < 1)
      {
         var error = new Error("You need at least one lecture in your class.");
         return callback(error); 
      }
      user.classes[className]= {
         "classSize": classSize,
         "lectures":{},
         "lectureTimes": lectureTimes};

  
   }
   lectureCreate:function(user, className, lectureName, lectureTime)
   {
      if(!user.classes)
      {
         var error = new Error("You need to create a class first.");
         return callback(error); 
      }
      if( !user.classes[className])
      {
         var error = new Error("Pick one of the classes you've already created");
         return callback(error); 
      }
      user.classes[className].lectures[lectureName] = {
         "questions": {},
         "lectureTime": lectureTime};
      }
   }
}