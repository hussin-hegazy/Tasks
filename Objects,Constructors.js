// الدالة البانية Product لإنشاء كائنات المنتجات
function Product(name, price) {
    this.name = name; // خصائص الكائن: اسم المنتج
    this.price = price; // خصائص الكائن: سعر المنتج
    // طريقة لعرض معلومات المنتج
    this.displayInfo = function() {
        console.log(`Product: ${this.name}, Price: $${this.price}`);
    };
}

// إنشاء كائنات منتجات باستخدام الدالة البانية
const product1 = new Product('Laptop', 1200);
const product2 = new Product('Phone', 800);
const product3 = new Product('Headphones', 150);

// عرض معلومات كل منتج باستخدام طريقة displayInfo
product1.displayInfo(); // "Product: Laptop, Price: $1200"
product2.displayInfo(); // "Product: Phone, Price: $800"
product3.displayInfo(); // "Product: Headphones, Price: $150"

// تعديل خصائص كائن المنتج بعد الإنشاء
product1.price = 1000; // تعديل سعر اللابتوب
product1.displayInfo(); // "Product: Laptop, Price: $1000"

// إضافة خاصية جديدة لجميع المنتجات بعد الإنشاء
Product.prototype.category = 'Electronics';

// طباعة الفئة لكل منتج
console.log(product1.category); // "Electronics"
console.log(product2.category); // "Electronics"
console.log(product3.category); // "Electronics"
