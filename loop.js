let a = [10, 70, -39, 7, -45];
let sum = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] > 0) {
    console.log(a[i])
    sum = sum + a[i];
  }
} 
console.log(sum);
