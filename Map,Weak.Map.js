//      MAP        //
const mymap = new Map()
// Set Values:
// Fr00st:
mymap.set("key_one","value_one")
// Scound:
mymap.set({name: "key_obj"},"value_obj")
// Disply:
console.log(mymap.get("key_one"))
console.log(mymap.get({name: "key_obj"}))
mymap.delete("key_one")
console.log(mymap.has('key_one')); // false

//      WEAK.MAP        //
const myWeakMap = new WeakMap()
let objKey = { name: 'objectKey' }
myWeakMap.set(objKey, 'value1')
console.log(myWeakMap.get(objKey))

// Free Momare:
objKey = null
