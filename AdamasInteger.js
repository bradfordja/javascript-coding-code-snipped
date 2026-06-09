public class AdamsInteger {
    public static void main(String[] args) {
        System.out.println(isAdamInteger(12));     // true
        System.out.println(isAdamInteger(36));     // false
        System.out.println(isAdamInteger(5));      // false
        System.out.println(isAdamInteger(65432));  // false
    }

    public static boolean isAdamInteger(int num) {
        return ((ReverseInteger.reverseInteger(ReverseInteger.reverseInteger(num) * ReverseInteger.reverseInteger(num))) == (num * num));
    }       
}

/*
An Adam number is a type of integer where the square of the number is the reverse of the square of its digits. 
In other words, if you reverse the digits of the number and then square the reversed number, it should be equal to the square of the original number.

For example, let's consider the number 12:

The square of 12 is 144.
Reversing the digits of 12 gives 21.
The square of 21 is 441.
Since reverse of 144 is equal to 441, 12 is an Adam number.
*/