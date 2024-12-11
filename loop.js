let a = [10, 20, -39, 67, -45];
let sum = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] > 0) {
    sum = sum + a[i];
  }
} 
console.log(sum);
