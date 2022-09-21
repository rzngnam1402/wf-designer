// export const copyObject = (array, birth, level) => {
//   let indexNode = 0;

//   array.forEach((ele) => {
//     indexNode++;

//     // Neu tim ra Object
//     if (ele.dopzoneCurrent.birthOrder === birth) {
//       ele.preperties = {};

//       return array;
//     } else {
//       if (ele.children !== []) {
//         if (level > ele.dopzoneCurrent.level) {
//           ele.children = copyObject(ele.children, birth, level);
//         }
//       }
//     }
//   });
//   return array;
// };
