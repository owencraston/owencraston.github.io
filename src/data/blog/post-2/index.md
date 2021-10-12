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

 ### Array Methods and Runtimes
 
| Action                | Method                  | Time Complexity | Alternative          |
|-----------------------|-------------------------|---------|----------------------|
| Access value at index | array.get(index)        | O(1)    | array[index]         |
| Set value at index    | array.set(index, value) | O(1)    | array[index] = value |
| Sort array in place by natural order    | array.sort() | O(nlogn)    | |
| Sort array in place in reverse order    | array.sortDescending()| O(nlogn)    | |

## Lists
Similarly to the [Java list](https://docs.oracle.com/javase/8/docs/api/java/util/List.html), the [Kotlin List](https://kotlinlang.org/docs/collections-overview.html#list) is an interface that allows you to store elements in a specified order with indexed access to these elements. It also allows for the growing and shrinking of the list (if the list is mutable). The default implementation of `List` in Kotlin is an [ArrayList](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-array-list/) but others are available. 

### Creating A List
- A `read only` list can be created using the `listOf()` function.
```kotlin
val numbers = listOf("one", "two", "three", "four")
```
- A mutable list can be created using `mutableListOf()`
```kotlin
val numbers = mutableListOf(1, 2, 3, 4)
```
### List Methods and Runtimes
| Action                                                                                                                                                      | Method                                                                                  | Runtime                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| Get the size of the list                                                                                                                                    | list.size                                                                               | O(1)                                                                                                                             |
| Add element to list                                                                                                                                         | list.add(element)                                                                       | O(1) unless a new backing array needs to be created. In this case all the old values will need to be copied over making it O(n)  |
| Add element at index                                                                                                                                        | list.add(index, element)                                                                | O(n)                                                                                                                             |
| Get element at index                                                                                                                                        | list.get(index)                                                                         | O(1)                                                                                                                             |
| Remove a specific element                                                                                                                                   | list.remove(element)                                                                    | O(n)                                                                                                                             |
| Remove an element at a specific index                                                                                                                       | list.removeAt(index)                                                                    | O(n)                                                                                                                             |
| Get the index of a specific element                                                                                                                         | list.indexOf(element)                                                                   | O(n)                                                                                                                             |
| Check if the list contains an element                                                                                                                       | list.contains(element)                                                                  | O(n)                                                                                                                             |
| Check if the list is null or empty                                                                                                                          | list.isNullOrEmpty()                                                                    | O(1)                                                                                                                             |
| randomly shuffle list in place                                                                                                                              | list.shuffle()                                                                          | O(n)                                                                                                                             |
| return randomly shuffled version of a list                                                                                                                  | val shuffled = list.shuffled()                                                          | O(n)                                                                                                                             |
| sort list in place by natural order                                                                                                                         | list.sort()                                                                             | O(nlogn)                                                                                                                         |
| return sorted list by natural order                                                                                                                         | val s = list.sorted()                                                                   | O(nlogn)                                                                                                                         |
| sort list in place in descending order                                                                                                                      | list.sortByDescending{ it }                                                             | O(nlogn)                                                                                                                         |
| return sorted list in descending order                                                                                                                      | val s = list.sortedByDescending{ it }                                                   | O(nlogn)                                                                                                                         |
| sort list in place according to its natural order based on the returned property of the expression. This can be used to sort objects by a certain property. | val values = mutableListOf(1 to "a", 2 to "b")  values.sortBy { it.second }             | O(nlogn)                                                                                                                         |
| return sorted list according to its natural order based on the returned property of the expression. This can be used to sort objects by a certain property. | val values = mutableListOf(1 to "a", 2 to "b") val sorted = values.sortBy { it.second } | O(nlogn)                                                                                                                         |
| Return a read only view of a portion of a list from starting index (inclusive) until end index (exclusive)                                                  | val list =  listOf(1, 2, 3, 4, 5) val s = list.subList(2, 4) // [3, 4]                  | O(1) since its backed by the source array                                                                                        |
| Return list as an array                                                                                                                                     | val arr = list.toTypedArray()                                                                | O(n)                                                                                                                             |

## Linked List
This data structure is rarely used and for this reason Kotlin has opted to not implement it. [Here](https://discuss.kotlinlang.org/t/why-kotlin-does-not-provide-linkedlist-implementation/15991) is a thread on why they opted to not support it natively but you are still able to achieve this functionality using the [Java LinkedList](https://docs.oracle.com/javase/7/docs/api/java/util/LinkedList.html). 

### Creating a Linked List
By importing `import java.util.LinkedList` you are able to instantiate it the way you would any other class.
```kotlin
import java.util.LinkedList
val list = listOf("Dog", "Cat", "Lion")
val linkedList =  LinkedList<String>()
linkedList.addAll(list) 
println(linkedList) // [Dog, Cat, Lion]
linkedList.add("Parrot")
println(linkedList) // [Dog, Cat, Lion, Parrot]
```
### Linked List Methods and Runtimes
| Action                                             | Method                         | Runtime |
|----------------------------------------------------|--------------------------------|---------|
| Append element to the end of the linked list       | linkedList.add(element)        | O(1)    |
| Add element at a specific index in the linked list | linkedList.add(index, element) | O(n)    |
| Get element at index in the linked list            | linkedList.get(index)          | O(n)    |
| Remove an element from the linked list             | linkedList.remove(element)     | O(1)    |
| Remove element at a specific index                 | linkedList.removeAt(index)     | O(n)    |
| Check if a linked list contains an element         | linkedList.contains(element)   | O(n)    |
