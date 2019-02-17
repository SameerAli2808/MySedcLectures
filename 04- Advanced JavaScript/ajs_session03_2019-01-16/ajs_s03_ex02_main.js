/******************************** Exercis 02 ***************************/


let source = {
    name: "root",
    weight: 10,
    children: [
        {
            name: "one",
            weight: 1,
            children: [
                {
                    name: "one-one",
                    weight: 11,
                    children: [
                        {
                            name: "one-one-one",
                            weight: 111,
                            children: []
                        },
                        {
                            name: "one-one-two",
                            weight: 112,
                            children: []
                        },
                        {
                            name: "one-one-three",
                            weight: 113,
                            children: []
                        }
                    ]
                },
                {
                    name: "one-two",
                    weight: 12,
                    children: []
                }
            ]
        },
        {
            name: "two",
            weight: 2,
            children: [
                {
                    name: "two-one",
                    weight: 21,
                    children: []
                },
                {
                    name: "two-two",
                    weight: 22,
                    children: []
                }
            ]
        }
    ]
}

function getWeight(arr) {
    let totalWeight = arr.weight;

    for(let child of arr.children) {
        totalWeight += getWeight(child);
    }
	
//   for (var i=0; i<arr.children.length; i++){
//     //   console.log(arr.name);
//        totalWeight += getWeight(arr.children[i]);
        
//         // console.log(arr.children[i]);
//   }
  return totalWeight;
}

console.log(getWeight(source));

// const sumWeight = (source) => {
//     let totalWeight = source.weight 
//         + source.children[0].weight 
//             + source.children[0].children[0].weight
//                 + source.children[0].children[0].children[0].weight + source.children[0].children[0].children[1].weight +source.children[0].children[0].children[2].weight
//             + source.children[0].children[1].weight
//         + source.children[1].weight
//             + source.children[1].children[0].weight + source.children[1].children[1].weight;

//     return totalWeight;
// }
// console.log(sumWeight(source));
