export function Fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}
export default function Factorial(n) {
  if (n === 0) return 1;
  return n * Factorial(n - 1);
}
