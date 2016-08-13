var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};

for(key in grades) {
    console.log("key: ", key, "value: ",grades['key']);
}
/* grades['key'] 사용시 속성값이 안뜨고 undefined이 뜬다. 
VM1002:2 key :  egoing  value :  
VM1002:2 key :  k8805  value :  
VM1002:2 key :  sorialgi  value :  */

for(key in grades) {
    console.log("key : ", key, " value : ", grades[key]);
}
/* quote를 지우고 grades[key]로 접근하니 값이 나온다. 
VM1003:2 key :  egoing  value :  10
VM1003:2 key :  k8805  value :  6
VM1003:2 key :  sorialgi  value :  80 */

//for문 밖에서는...
//grades[key]는 실행이 되지 않는다. 
// console.log( grades[egoing] );
//반면 grades['egoing']은 실행이 된다.
//왤까염? 
console.log( grades['egoing'] );