// 1. إنشاء مصفوفة تحتوي على خمسة عناصر على الأقل وطباعتها في وحدة التحكم.
const myArray = [5, 15, 25, 35, 45];
console.log("المصفوفة الأساسية:", myArray);

// 2. كتابة دالتين لإضافة وإزالة عناصر من المصفوفة باستخدام push() و pop().
function addElement(arr, element) {
  arr.push(element);
  console.log(`تمت إضافة العنصر ${element}. المصفوفة المحدثة:`, arr);
}

function removeElement(arr) {
  const removed = arr.pop();
  console.log(`تمت إزالة العنصر ${removed}. المصفوفة المحدثة:`, arr);
}

// اختبار الدوال للإضافة والإزالة
addElement(myArray, 55);
removeElement(myArray);

// 3. استخدام طريقة forEach() للتكرار عبر المصفوفة وطباعه كل عنصر مع فهرسه.
myArray.forEach((element, index) => {
  console.log(`العنصر في الفهرس ${index}: ${element}`);
});

// 4. تنفيذ دالة تعيد مصفوفة جديدة تحتوي فقط على الأرقام الزوجية من مصفوفة أصلية.
function filterEvenNumbers(arr) {
  return arr.filter(number => number % 2 === 0);
}

// اختبار دالة التصفية للأعداد الزوجية
const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
console.log("الأعداد الزوجية:", evenNumbers);

// 5. إنشاء برنامج يقوم بترتيب مصفوفة من الأرقام بترتيب تصاعدي وطباعتها في وحدة التحكم.
const numbers = [4, 60, 98, 88, 85, 58, 98, 10, 44, 21, 77, 38, 8, 35, 3, 39, 23, 80, 23, 80];
numbers.sort((a, b) => a - b);
console.log("المصفوفة مرتبة بترتيب تصاعدي:", numbers);
