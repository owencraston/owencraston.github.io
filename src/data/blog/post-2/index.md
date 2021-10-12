# Common Data Structures in Kotlin
Recently I have been using a lot more data structures in Kotlin but found there was a lack of information for `Kotlin` vs its older brother `Java`. Here I have tried to compile a list of common data structures with their runtimes and syntax in Kotlin. 
It's worth noting that since `Kotlin is backwards compatible with Java`, you may use all the [collections you are used to in Java](https://docs.oracle.com/javase/7/docs/api/java/util/Collections.html). The main difference between [Kotlin collections](https://kotlinlang.org/docs/collections-overview.html) and its Java counterpart is the concept of a [mutable collection](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-collection/). `Immutable collections are read only` where as the mutable collections allow for adding, removing and updating elements in the collection. Since `mutable` collections are inherently ...mutable... you do not need to instantiate them with `var` as the reference will not be changing, just the contents of the collection. 

## Arrays
[Arrays in Kotlin](https://kotlinlang.org/docs/basic-types.html#arrays) are a primitive data structure that are fixed in size and allow for getting and setting values in constant time.

### Creating an Array
- Using `arrayOf`
	-  Here you can pass in the values for the array and the array will be created with the proper size, type and elements
	- You can also use `arrayOfNulls` to create an array of a given size with all null values
```Kotlin
	// Create an array with values
	val nums1 = arrayOf(1, 2, 3, 4)   //implicit type declaration
	val nums2 = arrayOf<Int>(1, 2, 3) //explicit type declaration
	// Creates an Array<Int?> of size 4 with values [null, null, null, null]
	val nulls: Array<Int?> = arrayOfNulls<Int>(4)
```
- Using the Array `constructor`
- The constructor takes...
	- The size of the array
	- A function that returns the array value given an index 
```Kotlin
	// Creates an Array<Int> with values [0, 1, 2, 3, 4]
	val nums = Array(5) { i -> i}
	// Creates an Array<String> with values ["0", "1", "4", "9", "16"]
	val strings = Array(5) { i -> (i * i).toString() }
```
### Primitive Arrays
Kotlin also provides Array classes for primitives that can offer some nice syntax. The options are the following
- ByteArray
- CharArray
- ShortArray
- IntArray
- LongArray
- DoubleArray
- FloatArray
- BooleanArray

You can create these arrays by passing the values of the array, the size of the array or the size and a lambda expression.
```Kotlin
	// Array of int of size 3 with values [1, 2, 3]
	var arr1 =  intArrayOf(1, 2, 3)
	// Array of booleans of size 3 with values [true, false, true]
	var arr2 =  booleanArrayOf(true, false, true)
	// Array of int of size 5 with values [0, 0, 0, 0, 0]
	val arr3 = IntArray(5)
	// Array of chars of size 5 with values [, , , , ]
	val arr4 = CharArray(5)
	// Array of int of size 5 with values [42, 42, 42, 42, 42]  
	val arr5 =  IntArray(5)  {  42  }
	// Array of int of size 5 with values [0, 1, 2, 3, 4] 
	// (values initialised to their index value)  
	var arr6 =  IntArray(5)  { it -> it  }
```

 ### Access
 
| Action                | Method                  | Time Complexity | Alternative          |
|-----------------------|-------------------------|---------|----------------------|
| Access value at index | array.get(index)        | O(1)    | array[index]         |
| Set value at index    | array.set(index, value) | O(1)    | array[index] = value |

