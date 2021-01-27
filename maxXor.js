// 算法题
// For two positive integers, lo and hi, and a limit k, find two integers, a and b, satisfying the following criteria. Return the value of a⊕ b. The ⊕ symbol denotes the bitwise XOR operator.
// lo≤a<b≤hi
// The value of a ⊕ b is maximal for a ⊕ b ≤ k.

function maxXor(lo, hi, k) {
  const arr = [];
  for(let a = lo; a < hi; a ++) {
    for(let b=a+1; b <=hi; b++) {
      // ^ 位运算， 要用括号括起来是因为 位或与 优先级低于<=
      if ((a^b) <= k) {  
        console.log(a^b, k);
        arr.push(a^b);
      }
    }
  }
  
  console.log(k)
  return Math.max(...arr);
}

console.log(maxXor(3, 5, 6));
