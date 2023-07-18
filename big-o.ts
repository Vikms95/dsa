// 1 - Growth is always based on input
// 2 - Constants are dropped (if you iterate twice over the same input, it does not matter)
// 3 - We always measure based on the worst case
// Trick - Count the nested loops that the input is passed over.

function sum_char_codes(n: string): number {
  let sum = 0;

  for (let i = 0; i < n.length; i++) {
    const char = n.charCodeAt(i);

    if (char === 69) {
      return sum;
    }

    sum += char;
  }

  return sum;
}

// My answer
// Big O is O(log n) - Since it may decrease depending on whether the loop is truncated

// Answer
// O(n)

// The reason is because in Big O, YOU NEED TO CONSIDER THE WORST CASE (e.g: the variable n)
// has no char with character 69 at all
