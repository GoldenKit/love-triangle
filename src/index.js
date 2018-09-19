/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let res = 0;
  let pr = preferences;
   for (let i = 0; i < pr.length; i++) {
     if (pr[i] - 1 == i) continue;
     let ab = pr[i];
     let bc = pr[ab-1];
     let ca = pr[bc-1];
     if (ca - 1 == i){
       res++
       pr[i]=0
       pr[ab-1]=0
       pr[bc-1]=0;
     }
   }
 return res;
};
