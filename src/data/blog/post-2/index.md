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
val numbers = listOf("one", "two", "three", "four") //implicit type declaration
val numbers2 = listOf<String>("one", "two", "three", "four") // explicit type declaration
```
- A mutable list can be created using `mutableListOf()`
```kotlin
val numbers = mutableListOf(1, 2, 3, 4) //implicit type declaration
val numbers2 = mutableListOf<Int>(1, 2, 3, 4) // explicit type declaration
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
This data structure is rarely used and for this reason Kotlin has opted to not implement it. [Here](https://discuss.kotlinlang.org/t/why-kotlin-does-not-provide-linkedlist-implementation/15991) is a thread on why they opted to not support it natively but you are still able to achieve this functionality using the [Java LinkedList](https://docs.oracle.com/javase/7/docs/api/java/util/LinkedList.html). It is worth noting that this class is a [doubly linked list](https://en.wikipedia.org/wiki/Doubly_linked_list).

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
| Action                                             | Method                         | Runtime                              |
|----------------------------------------------------|--------------------------------|--------------------------------------|
| Append element to the end of the linked list       | linkedList.add(element)        | O(1)                                 |
| Add element at a specific index in the linked list | linkedList.add(index, element) | O(n)                                 |
| Get element at index in the linked list            | linkedList.get(index)          | O(n)                                 |
| Remove an element from the linked list             | linkedList.remove(element)     | O(1)                                 |
| Remove element at a specific index                 | linkedList.removeAt(index)     | O(n)                                 |
| Check if a linked list contains an element         | linkedList.contains(element)   | O(n)                                 |
| Return the linked list in reverse order            | val r = linkedList.reversed()  | O(1) since the list is doubly linked |

## Set
A [Set](https://kotlinlang.org/docs/collections-overview.html#set) stores unique elements. Like all collections in Kotlin, we have the [read only set](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-set/) and the [MutableSet](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-set/) which offers write access. In some cases the order of a set is not reliable, that is to say that the order of insertion is not maintained. However, the default implementation of a set in Kotlin uses a [LinkedHashSet](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-linked-hash-set/) so the order of insertion is preserved.

### Creating a Set
- A `read only` set can be created using the `setOf` function
```kotlin
val mySet = setOf(1, 2, 3, 4) //implicit type declaration
val mySet2 = setOf<Int>(1, 2, 3, 4) // explicit type declaration
```
- A mutable set can be created using the `mutableSetOf` function
```kotlin
val mySet = mutableSetOf(1, 2, 3, 4) //implicit type declaration
val mySet2 = mutableSetOf<Int>(1, 2, 3, 4) // explicit type declaration
mySet.add(5)
mySet.add(3)
println(mySet2) // [1, 2, 3, 4, 5], notice how 4 was not added twice
```

### Set Methods and Runtimes
| Action                             | Method                  | Runtime |
|------------------------------------|-------------------------|---------|
| Get the size of the set            | mySet.size              | O(1)    |
| Add element to the set             | mySet.add(element)      | O(1)    |
| Remove element from set            | mySet.remove(element)   | O(1)    |
| Check if a set contains an element | mySet.contains(element) | O(1)    |

## Map
A [Map](https://kotlinlang.org/docs/collections-overview.html#map) stores key value pairs with unique keys. Values in the map can be stored more than once if they are stored under different keys. Similarly to the set, some implementations of this `interface` do not preserve order however the default implementation of [LinkedHashMap](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-linked-hash-map/) does.

### Creating a Map
- A `read only` map can be created using the `mapOf` function
- A map will always have a `type for the key` and a `type for the value` so you need to be mindful of that when explicitly declaring a map
```kotlin
val numsMap = mapOf("one" to 1, "two" to 2, "three" to 3) //implicit type declaration
val numsMap2 = mapOf<String, Int>("one" to 1, "two" to 2, "three" to 3) // explicit type declaration
// The above will create a map of type <String, Int> with the key/values {one=1, two=2, three=3}
```
- A mutable map can be created using the `mutableMapOf` function
```kotlin
val numsMap = mutableMapOf("one" to 1, "two" to 2, "three" to 3) //implicit type declaration
val numsMap2 = mutableMapOf<String, Int>("one" to 1, "two" to 2, "three" to 3) // explicit type 
println(numsMap) // {one=1, two=2, three=3}
numsMap.put("five", 5) // add an entry
println(numsMap) // {one=1, two=2, three=3, five=5}
println(numsMap.get("three")) // 3
numsMap.remove("one") // remove an enrty
println(numsMap) // {two=2, three=3, five=5}
```

### Map Methods and Runtimes
| Action                          | Method                     | Runtime | Alternative                          |
|---------------------------------|----------------------------|---------|--------------------------------------|
| Get the size of the map         | myMap.size                 | O(1)    |                                      |
| Add/modify an entry to the map  | myMap.put(key, value)      | O(1)    | myMap[key] = value                   |
| Remove an entry from the map    | myMap.remove(key)          | O(1)    |                                      |
| Check if map contains a key     | myMap.contains(key)        | O(1)    | myMap.contains(key).let {...}        |
| Check if a map contains a value | myMap.containsValue(value) | O(n)    | myMap.containsValue(value).let {...} |

## Heap
[Heaps](https://en.wikipedia.org/wiki/Heap_(data_structure)) are great! There are generally two types of heaps. A min heap which stores the minimum element at the root of the tree, and a max heap which stores the largest value at the root. In Kotlin we can leverage the [PriorityQueue](https://docs.oracle.com/javase/7/docs/api/java/util/PriorityQueue.html)  to create this data structure. 

### Creating a Min Heap with a Priority Queue
The default implementation of a PriorityQueue actually gives us the min heap functionality. Since Kotlin does not support this out of the box you will need to `import java.util.PriorityQueue`. Once you've imported PriorityQueue you can declare one like this.

```kotlin
import java.util.PriorityQueue

val nums = listOf(5, 2, 4, 1, 3)
val minHeap = PriorityQueue<Int>() // declare a min heap with int values
minHeap.addAll(nums) // you can add elements of a Collection with addAll assuming they are the same type
println(minHeap) // [1, 2, 4, 5, 3]
minHeap.add(0)
println(minHeap) // [0, 2, 1, 5, 3, 4]
val min = minHeap.poll() // 0, removes 0 from the heap
println(minHeap) // [1, 2, 4, 5, 3] since 1 is not the smallest value
val min2 = minHeap.peek() // returns 1 but does not remove it from the heap
println(min2) // 1
println(minHeap) // [1, 2, 4, 5, 3]
```

### Creating a Max Heap with a PriorityQueue
To turn our PriorityQueue into a max heap we will need to pass it an instance of [comparator](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-comparator/). Luckily most of the common comparators you'd want to use can be found [here](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.comparisons/). The one that will enable our max heap functionality is the [compareByDescending](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.comparisons/compare-by-descending.html#comparebydescending)] function. This will tell our PriorityQueue to give the highest priority to the highest value.

```kotlin
import java.util.PriorityQueue

val nums = listOf(5, 2, 4, 1, 3)
val maxHeap = PriorityQueue<Int>(compareByDescending{it})
maxHeap.addAll(nums)
println(maxHeap) // [5, 3, 4, 1, 2]
maxHeap.add(0)
println(maxHeap) // [5, 3, 4, 1, 2, 0]
val max = maxHeap.poll() // returns and removes 5 from the heap
println(max) // 5
println(maxHeap) // [4, 3, 0, 1, 2]
val max2 = maxHeap.peek()  // returns 4 but does not remove it from the heap
println(max2) // 4
println(maxHeap) // [4, 3, 0, 1, 2]
```

### Heap (PriorityQueue) Methods and Runtimes
| Action                                                             | Method                 | Runtime                                           |
|--------------------------------------------------------------------|------------------------|---------------------------------------------------|
| Get the size of the heap                                           | heap.size              | O(1)                                              |
| Add element to heap                                                | heap.add(element)      | O(logn)                                           |
| Add a collection of elements to a heap (does not work with arrays) | heap.addAll(list)      | O(nlogn)                                          |
| Return and remove the root of the heap (min/max value)             | heap.poll()            | O(logn) since we will need to re heapify the heap |
| Return the root of the heap (min/max)                              | heap.peek()            | O(1) as no reconstruction is needed               |
| Remove a specific element from the heap                            | heap.remove(element)   | O(n)                                              |
| Check if an element is present in the heap                         | heap.contains(element) | O(n)                                              |

## Stacks
A [Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) is a `last in, first out`, or `LIFO` for short, data structure. You can think of this as a stack of plates where the first plate you grab is going to be the top most plate (the one that was added last). Again, Kotlin does not provide an implementation of this out of the box for us so we must rely on our older brother Java. Java has a [Stack](https://docs.oracle.com/javase/7/docs/api/java/util/Stack.html) class but as per the documentation, it is recommended to use an [ArrayDeque](https://docs.oracle.com/javase/7/docs/api/java/util/ArrayDeque.html) for all you stack/queue needs. For more information on this decision you can check out [this thread](https://stackoverflow.com/questions/12524826/why-should-i-use-deque-over-stack). Once you `import java.util.ArrayDeque` you are ready to get started.

### Creating a Stack
We can use ArrayDeque for both `LIFI` and `FIFO` (first in first out) structures but by always pushing/popping from the front of the stack we can get the desired stack behaviour. 
```kotlin
import java.util.ArrayDeque

val stack = ArrayDeque<Int>()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
println(stack)           // [4, 3, 2, 1]
println(stack.isEmpty()) // false
println(stack.peek())    // 4
println(stack)           // [4, 3, 2, 1]
println(stack.pop())     // 4
println(stack)           // [3, 2, 1]
stack.push(9)
println(stack)           // --> [9, 3, 2, 1]
```

### Stack (ArrayDeque) Methods and Runtimes
| Action                                                 | Method                | Runtime |
|--------------------------------------------------------|-----------------------|---------|
| Get the size of the stack                              | stack.size            | O(1)    |
| Push element onto the stack                            | stack.push(element)   | O(1)    |
| Return and remove a the last element from the stack    | stack.pop()           | O(1)    |
| Return the last element from the stack (do not remove) | stack.peek()          | O(1)    |
| Remove a specific element from the stack               | stack.remove(element) | O(n)    |
| Check if the stack is empty                            | stack.isEmpty()       | O(1)    |

## Queue
A queue is a `first in first out` or `FIFO` for short, data structure. You can think of a queue as your average lineup to get into a concert. The earlier you get there the earlier you'll get in. [Queue](https://docs.oracle.com/javase/8/docs/api/java/util/Queue.html) is an interface that can be implemented by either and [ArrayDeque](https://docs.oracle.com/javase/7/docs/api/java/util/ArrayDeque.html), [PriorityQueue](https://docs.oracle.com/javase/8/docs/api/java/util/PriorityQueue.html) or [LinkedList](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html) (there are more options but these are by far the most common). 

### Creating a Queue
Since PriorityQueue will add extra functionality we don't need (see heap section above) and the LinkedList is not very cache friendly it is advised to use `ArrayDeque` to implement a queue. To get started you will need to import `import java.util.Queue` and `import java.util.ArrayDeque`.

```kotlin
import java.util.ArrayDeque
import java.util.Queue

val queue: Queue<Int> = ArrayDeque<Int>()
queue.add(1)
queue.add(2)
queue.add(3)
queue.add(4)
println(queue) // [1, 2, 3, 4]    
println(queue.isEmpty()) // false
println(queue.peek()) // 1
println(queue) // [1, 2, 3, 4]      
println(queue.poll()) // 1  
println(queue) // [2, 3, 4]
queue.add(9) 
println(queue) // [2, 3, 4, 9]
```
by implementing the interface `Queue` we no longer have access to the methods `push` and `pop` like we did in the `stack` example above.

### Queue Methods and Runtimes
| Action                                                  | Method                                     | Runtime |
|---------------------------------------------------------|--------------------------------------------|---------|
| Get the size of the queue                               | queue.size                                 | O(1)    |
| Add element to the queue                                | queue.add(element) or queue.offer(element) | O(1)    |
| Return and remove a the first element from the queue    | queue.poll()                               | O(1)    |
| Return the first element from the queue (do not remove) | queue.peek()                               | O(1)    |
| Remove a specific element from the queue                | queue.remove(element)                      | O(n)    |
| Check if the stack is empty                             | queue.isEmpty()                            | O(1)    |

## Undirected Graphs
There is no default Graph implementation in Kotlin however you can easily create one using a [HashMap](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-hash-map/) of [HashSets](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-hash-set/). Essentially the adjacency list is stored in a HashMap, which holds a HashSet of nodes.

### Creating a Graph
```kotlin
class Graph<T> {
    val adjacencyMap: HashMap<T, HashSet<T>> = HashMap()
    fun addEdge(sourceVertex: T, destinationVertex: T) {
        // Add edge to source vertex / node.
        adjacencyMap
            .computeIfAbsent(sourceVertex) { HashSet() }
            .add(destinationVertex)
        // Add edge to destination vertex / node.
        adjacencyMap
            .computeIfAbsent(destinationVertex) { HashSet() }
            .add(sourceVertex)
    }
}
```
The `computeIfAbsent` will create the edge if it is not present, and add the vertex to that edge. Since we are using maps/sets behind the scenes, our runtime for adding an edge remains constant with `O(1)` insertion.


