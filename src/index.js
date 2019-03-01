/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation


  var lt = 0;

  for (var p = 1;p<=preferences.length+1;p++)
  {
      var pos1, pos2, pos3;
      pos1 = p-1;
      var z1 = preferences[pos1];
      pos2 = z1-1;
      var z2 = preferences[pos2];
      pos3 = z2-1;
      var z3 = preferences[pos3];


       if ((pos1+1 == z3 && pos2+1 == z1 && pos3+1 == z2)&& ( z1!=z2 && z2!=z3)) {
          lt = lt+1;

          //alert((pos1+1) +'='+ z1 +'||'+ (pos2+1) +'='+ z2 +'||'+ (pos3+1) +'='+ z3 );
       }


  }

  return lt/3;


};
