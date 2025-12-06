import { DayContent } from '../curriculum';

export const day10: DayContent = {
  day: 10,
  title: "Collections Framework",
  description: "List, Set, Map, ArrayList, HashMap, iteration",
  icon: "📚",
  pptSlides: [
    {
      title: "Introduction to Collections",
      content: [
        "Collections: Groups of objects in a single unit",
        "Better than arrays: Dynamic size, built-in methods",
        "Part of java.util package",
        "Three main types: List, Set, Map"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Good morning! Today we enter the world of Collections - Java's powerful framework for managing groups of objects. This is what you'll use DAILY in real projects!"

📌 WHY NOT JUST ARRAYS?

"Arrays have limitations:"

\`\`\`java
// Array problems:
int[] arr = new int[5];  // Fixed size!
// Can't add 6th element without creating new array

// Can't easily:
// - Add in middle
// - Remove element
// - Search efficiently
// - Check if element exists
\`\`\`

"Collections solve all these problems!"

📌 THE COLLECTION FRAMEWORK:

\`\`\`
                    Iterable
                        ↑
                   Collection
                   ↗    ↑    ↖
                List   Set   Queue
                 ↑      ↑
         ArrayList  HashSet
         LinkedList TreeSet
         
                     Map (separate hierarchy)
                      ↑
                HashMap
                TreeMap
\`\`\`

📌 THREE MAIN TYPES:

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│  TYPE  │  DUPLICATES  │  ORDER     │  EXAMPLE              │
├─────────────────────────────────────────────────────────────┤
│  List  │  Allowed     │  Preserved │  Shopping list        │
│  Set   │  NOT allowed │  May vary  │  Unique email IDs     │
│  Map   │  Keys unique │  May vary  │  Dictionary (word→def)│
└─────────────────────────────────────────────────────────────┘
\`\`\`

📌 REAL-WORLD ANALOGIES:

"LIST (ArrayList):
📝 Shopping list - order matters, duplicates OK
- Item 1: Milk
- Item 2: Bread
- Item 3: Milk (duplicate OK)

SET (HashSet):
🎫 Concert tickets - each ticket unique, no duplicates
- Ticket A001
- Ticket A002
- Ticket A001 ← REJECTED!

MAP (HashMap):
📖 Dictionary - word → definition
- 'Java' → 'Programming language'
- 'Coffee' → 'Hot beverage'"

📌 IMPORTING COLLECTIONS:

\`\`\`java
import java.util.ArrayList;
import java.util.HashSet;
import java.util.HashMap;
import java.util.List;
import java.util.Set;
import java.util.Map;

// Or import all:
import java.util.*;
\`\`\`

💡 WHY COLLECTIONS MATTER:

"In real applications:
- User list → ArrayList
- Unique usernames → HashSet
- User settings → HashMap
- Cart items → ArrayList
- Product categories → Set
- Product details → Map"`
    },
    {
      title: "ArrayList - Dynamic Arrays",
      content: [
        "Resizable array implementation",
        "Maintains insertion order",
        "Allows duplicates and null",
        "Random access by index (fast)"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"ArrayList is the most commonly used collection. Think of it as an array that grows and shrinks automatically!"

📌 CREATING ARRAYLISTS:

\`\`\`java
// Old way (raw type - not recommended)
ArrayList list = new ArrayList();

// Generic way (type-safe - ALWAYS use this!)
ArrayList<String> names = new ArrayList<String>();

// Diamond syntax (Java 7+)
ArrayList<String> names = new ArrayList<>();

// Using List interface (preferred)
List<String> names = new ArrayList<>();

// With initial capacity
List<Integer> numbers = new ArrayList<>(100);
\`\`\`

📌 COMMON OPERATIONS:

\`\`\`java
List<String> fruits = new ArrayList<>();

// ADD elements
fruits.add("Apple");           // Add at end
fruits.add("Banana");
fruits.add("Cherry");
fruits.add(1, "Mango");        // Add at index 1

// [Apple, Mango, Banana, Cherry]

// GET elements
String first = fruits.get(0);  // "Apple"
String second = fruits.get(1); // "Mango"

// SET (update) elements
fruits.set(0, "Apricot");      // Replace Apple with Apricot

// REMOVE elements
fruits.remove("Banana");       // Remove by value
fruits.remove(0);              // Remove by index

// SIZE
int size = fruits.size();      // Number of elements

// CHECK
boolean hasCherry = fruits.contains("Cherry");  // true/false
boolean empty = fruits.isEmpty();

// FIND
int index = fruits.indexOf("Cherry");  // -1 if not found

// CLEAR all
fruits.clear();
\`\`\`

📌 ITERATING ARRAYLIST:

\`\`\`java
List<String> names = new ArrayList<>();
names.add("John");
names.add("Jane");
names.add("Bob");

// Method 1: for-each (RECOMMENDED)
for (String name : names) {
    System.out.println(name);
}

// Method 2: Traditional for loop
for (int i = 0; i < names.size(); i++) {
    System.out.println(names.get(i));
}

// Method 3: forEach with lambda (Java 8+)
names.forEach(name -> System.out.println(name));

// Method 4: Iterator
Iterator<String> it = names.iterator();
while (it.hasNext()) {
    System.out.println(it.next());
}
\`\`\`

📌 ARRAYLIST WITH OBJECTS:

\`\`\`java
class Student {
    String name;
    int age;
    
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

List<Student> students = new ArrayList<>();
students.add(new Student("Alice", 20));
students.add(new Student("Bob", 22));

for (Student s : students) {
    System.out.println(s.name + " - " + s.age);
}
\`\`\`

📌 USEFUL METHODS:

\`\`\`java
List<Integer> nums = new ArrayList<>(Arrays.asList(5, 2, 8, 1, 9));

// Sort
Collections.sort(nums);  // [1, 2, 5, 8, 9]

// Reverse
Collections.reverse(nums);  // [9, 8, 5, 2, 1]

// Shuffle (random order)
Collections.shuffle(nums);

// Min/Max
int min = Collections.min(nums);
int max = Collections.max(nums);

// Convert array to ArrayList
String[] arr = {"A", "B", "C"};
List<String> list = new ArrayList<>(Arrays.asList(arr));

// Convert ArrayList to array
String[] back = list.toArray(new String[0]);
\`\`\`

⚠️ COMMON MISTAKES:

\`\`\`java
// Using index out of bounds
List<String> list = new ArrayList<>();
list.get(0);  // ERROR! List is empty

// Modifying while iterating with for-each
for (String s : list) {
    list.remove(s);  // ConcurrentModificationException!
}

// Use Iterator.remove() instead
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    String s = it.next();
    if (s.equals("remove")) {
        it.remove();  // Safe!
    }
}
\`\`\``
    },
    {
      title: "HashSet - Unique Elements",
      content: [
        "No duplicate elements allowed",
        "No guaranteed order",
        "Allows one null element",
        "Fast lookup O(1)"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"HashSet stores UNIQUE elements only. If you try to add a duplicate, it's silently ignored."

📌 WHEN TO USE SET:

"Use Set when:
- You need unique values (no duplicates)
- Order doesn't matter
- Fast lookup is important

Real examples:
- Unique usernames in system
- Unique product categories
- Visited pages in browser history
- Unique tags on a post"

📌 CREATING AND USING HASHSET:

\`\`\`java
Set<String> names = new HashSet<>();

// Add elements
names.add("John");       // Added
names.add("Jane");       // Added
names.add("John");       // Ignored! Duplicate

System.out.println(names);  // [Jane, John] (order may vary)
System.out.println(names.size());  // 2

// Check existence
boolean hasJohn = names.contains("John");  // true

// Remove
names.remove("Jane");

// Iterate
for (String name : names) {
    System.out.println(name);
}
\`\`\`

📌 SET OPERATIONS (Math operations!):

\`\`\`java
Set<Integer> setA = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5));
Set<Integer> setB = new HashSet<>(Arrays.asList(4, 5, 6, 7, 8));

// UNION (all elements from both)
Set<Integer> union = new HashSet<>(setA);
union.addAll(setB);
System.out.println(union);  // [1, 2, 3, 4, 5, 6, 7, 8]

// INTERSECTION (common elements)
Set<Integer> intersection = new HashSet<>(setA);
intersection.retainAll(setB);
System.out.println(intersection);  // [4, 5]

// DIFFERENCE (A - B)
Set<Integer> difference = new HashSet<>(setA);
difference.removeAll(setB);
System.out.println(difference);  // [1, 2, 3]
\`\`\`

📌 TREESET - SORTED SET:

\`\`\`java
// TreeSet maintains sorted order!
Set<String> sortedNames = new TreeSet<>();
sortedNames.add("Charlie");
sortedNames.add("Alice");
sortedNames.add("Bob");

System.out.println(sortedNames);  // [Alice, Bob, Charlie] - sorted!

// TreeSet with numbers
Set<Integer> sortedNums = new TreeSet<>();
sortedNums.add(50);
sortedNums.add(10);
sortedNums.add(30);

System.out.println(sortedNums);  // [10, 30, 50] - sorted!
\`\`\`

📌 LINKEDHASHSET - MAINTAINS INSERTION ORDER:

\`\`\`java
Set<String> orderedSet = new LinkedHashSet<>();
orderedSet.add("First");
orderedSet.add("Second");
orderedSet.add("Third");

System.out.println(orderedSet);  // [First, Second, Third] - order preserved!
\`\`\`

📌 PRACTICAL EXAMPLE - REMOVE DUPLICATES:

\`\`\`java
// Remove duplicates from a list
List<String> listWithDups = Arrays.asList("A", "B", "A", "C", "B", "A");

Set<String> unique = new HashSet<>(listWithDups);
System.out.println(unique);  // [A, B, C]

// Convert back to list if needed
List<String> uniqueList = new ArrayList<>(unique);
\`\`\`

📌 SET COMPARISON:

\`\`\`
┌─────────────────┬─────────────┬─────────────┬──────────────┐
│                 │  HashSet    │  TreeSet    │ LinkedHashSet│
├─────────────────┼─────────────┼─────────────┼──────────────┤
│ Order           │ No order    │ Sorted      │ Insertion    │
│ Performance     │ O(1)        │ O(log n)    │ O(1)         │
│ Null allowed    │ Yes (one)   │ No          │ Yes (one)    │
│ Thread-safe     │ No          │ No          │ No           │
└─────────────────┴─────────────┴─────────────┴──────────────┘
\`\`\``
    },
    {
      title: "HashMap - Key-Value Pairs",
      content: [
        "Stores data as key-value pairs",
        "Keys must be unique",
        "Values can be duplicated",
        "Allows one null key, multiple null values"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"HashMap is like a dictionary - you look up a word (key) to get its definition (value). It's one of the most useful collections!"

📌 KEY-VALUE CONCEPT:

\`\`\`
HashMap = { key → value } pairs

Examples:
  "name" → "John"
  "age" → 25
  "city" → "Mumbai"
  
  101 → Student("Alice")
  102 → Student("Bob")
  
  "apple" → 50.0  (price)
  "banana" → 30.0
\`\`\`

📌 CREATING AND USING HASHMAP:

\`\`\`java
Map<String, Integer> ages = new HashMap<>();

// PUT (add/update)
ages.put("John", 25);
ages.put("Jane", 30);
ages.put("Bob", 22);

// GET (retrieve)
int johnAge = ages.get("John");  // 25
int unknown = ages.get("Unknown");  // null (not found)

// GET with default
int unknownAge = ages.getOrDefault("Unknown", 0);  // 0

// UPDATE (put with existing key)
ages.put("John", 26);  // Replaces old value

// CHECK
boolean hasJohn = ages.containsKey("John");      // true
boolean has25 = ages.containsValue(25);          // false (was updated to 26)

// SIZE
int count = ages.size();  // 3

// REMOVE
ages.remove("Bob");
ages.remove("John", 26);  // Only removes if value matches
\`\`\`

📌 ITERATING HASHMAP:

\`\`\`java
Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.put("Bob", 87);
scores.put("Carol", 92);

// Method 1: Iterate keys
for (String name : scores.keySet()) {
    System.out.println(name + ": " + scores.get(name));
}

// Method 2: Iterate values only
for (int score : scores.values()) {
    System.out.println(score);
}

// Method 3: Iterate entries (MOST EFFICIENT)
for (Map.Entry<String, Integer> entry : scores.entrySet()) {
    System.out.println(entry.getKey() + " = " + entry.getValue());
}

// Method 4: forEach with lambda
scores.forEach((name, score) -> {
    System.out.println(name + " scored " + score);
});
\`\`\`

📌 PRACTICAL EXAMPLES:

\`\`\`java
// Example 1: Word frequency counter
String text = "hello world hello java world";
String[] words = text.split(" ");

Map<String, Integer> frequency = new HashMap<>();
for (String word : words) {
    frequency.put(word, frequency.getOrDefault(word, 0) + 1);
}
System.out.println(frequency);
// {hello=2, world=2, java=1}

// Example 2: Student grades
Map<Integer, String> grades = new HashMap<>();
grades.put(101, "A");
grades.put(102, "B");
grades.put(103, "A");

// Example 3: Product catalog
Map<String, Double> prices = new HashMap<>();
prices.put("Laptop", 50000.0);
prices.put("Mouse", 500.0);
prices.put("Keyboard", 1500.0);

double total = 0;
for (double price : prices.values()) {
    total += price;
}
\`\`\`

📌 HASHMAP WITH OBJECTS:

\`\`\`java
class Employee {
    int id;
    String name;
    
    Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }
}

Map<Integer, Employee> directory = new HashMap<>();
directory.put(101, new Employee(101, "Alice"));
directory.put(102, new Employee(102, "Bob"));

Employee emp = directory.get(101);
System.out.println(emp.name);  // Alice
\`\`\`

📌 TREEMAP - SORTED BY KEYS:

\`\`\`java
Map<String, Integer> sortedMap = new TreeMap<>();
sortedMap.put("Charlie", 30);
sortedMap.put("Alice", 25);
sortedMap.put("Bob", 28);

System.out.println(sortedMap);
// {Alice=25, Bob=28, Charlie=30} - sorted by keys!
\`\`\`

📌 MAP COMPARISON:

\`\`\`
┌────────────────┬─────────────┬─────────────┬──────────────┐
│                │  HashMap    │  TreeMap    │ LinkedHashMap│
├────────────────┼─────────────┼─────────────┼──────────────┤
│ Order          │ No order    │ Key sorted  │ Insertion    │
│ Performance    │ O(1)        │ O(log n)    │ O(1)         │
│ Null keys      │ One allowed │ Not allowed │ One allowed  │
│ Thread-safe    │ No          │ No          │ No           │
└────────────────┴─────────────┴─────────────┴──────────────┘
\`\`\``
    },
    {
      title: "Comparing Collections",
      content: [
        "When to use which collection",
        "Performance considerations",
        "Common operations comparison",
        "Best practices"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Let's compare all collections and learn when to use each."

📌 DECISION FLOWCHART:

\`\`\`
Do you need key-value pairs?
├── YES → Use Map
│         ├── Need sorted keys? → TreeMap
│         ├── Need insertion order? → LinkedHashMap
│         └── Otherwise → HashMap
│
└── NO → Do you need unique elements?
          ├── YES → Use Set
          │         ├── Need sorted? → TreeSet
          │         ├── Need insertion order? → LinkedHashSet
          │         └── Otherwise → HashSet
          │
          └── NO → Use List
                    ├── Frequent add/remove in middle? → LinkedList
                    └── Otherwise → ArrayList
\`\`\`

📌 PERFORMANCE COMPARISON:

\`\`\`
Operation       │ ArrayList │ LinkedList │ HashSet │ HashMap
────────────────┼───────────┼────────────┼─────────┼────────
get(index)      │ O(1)      │ O(n)       │ N/A     │ N/A
get(key)        │ N/A       │ N/A        │ N/A     │ O(1)
add(end)        │ O(1)*     │ O(1)       │ O(1)    │ O(1)
add(middle)     │ O(n)      │ O(1)       │ N/A     │ N/A
remove          │ O(n)      │ O(1)       │ O(1)    │ O(1)
contains        │ O(n)      │ O(n)       │ O(1)    │ O(1)
────────────────┴───────────┴────────────┴─────────┴────────
* Amortized - occasional resize needed
\`\`\`

📌 MEMORY COMPARISON:

\`\`\`
ArrayList:  Less memory (simple array)
LinkedList: More memory (node pointers)
HashSet:    More memory (hash table)
HashMap:    More memory (key-value storage)
\`\`\`

📌 COMPLETE EXAMPLE - STUDENT MANAGEMENT:

\`\`\`java
class Student {
    int id;
    String name;
    double marks;
    
    Student(int id, String name, double marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
}

public class StudentManagement {
    public static void main(String[] args) {
        // List - ordered collection of students
        List<Student> studentList = new ArrayList<>();
        studentList.add(new Student(101, "Alice", 85));
        studentList.add(new Student(102, "Bob", 78));
        studentList.add(new Student(103, "Carol", 92));
        
        // Map - quick lookup by ID
        Map<Integer, Student> studentMap = new HashMap<>();
        for (Student s : studentList) {
            studentMap.put(s.id, s);
        }
        
        // Find student by ID (O(1) lookup)
        Student found = studentMap.get(102);
        System.out.println("Found: " + found.name);
        
        // Set - unique subjects
        Set<String> subjects = new HashSet<>();
        subjects.add("Math");
        subjects.add("Science");
        subjects.add("Math");  // Duplicate ignored
        
        // Count by grade
        Map<String, Integer> gradeCount = new HashMap<>();
        for (Student s : studentList) {
            String grade = s.marks >= 90 ? "A" : s.marks >= 80 ? "B" : "C";
            gradeCount.put(grade, gradeCount.getOrDefault(grade, 0) + 1);
        }
        System.out.println("Grade distribution: " + gradeCount);
    }
}
\`\`\`

📌 BEST PRACTICES:

\`\`\`java
// 1. Use interface types for declarations
List<String> list = new ArrayList<>();     // ✓
ArrayList<String> list = new ArrayList<>(); // ✗

// 2. Use generics always
List<String> names = new ArrayList<>();    // ✓
List names = new ArrayList();              // ✗

// 3. Initialize with capacity if known
List<String> list = new ArrayList<>(1000); // ✓ Avoids resizing

// 4. Use isEmpty() instead of size() == 0
if (list.isEmpty()) { }  // ✓
if (list.size() == 0) { } // ✗

// 5. Use getOrDefault for Map
map.getOrDefault(key, defaultValue);  // ✓
if (map.containsKey(key)) { map.get(key) } else { defaultValue }  // ✗
\`\`\`

💡 INTERVIEW TIP:

"Common interview questions:
- Difference between ArrayList and LinkedList?
- How does HashMap work internally?
- When would you use TreeSet over HashSet?
- How to make collections thread-safe?

Be ready to explain trade-offs and use cases!"`
    }
  ],
  lessonPlan: {
    objectives: [
      "Understand the Collections Framework hierarchy",
      "Master ArrayList for dynamic lists",
      "Use HashSet for unique elements",
      "Implement HashMap for key-value storage",
      "Choose the right collection for each scenario"
    ],
    timeSplit: [
      { phase: "Warm-up", duration: "10 mins", activity: "Discuss limitations of arrays + why we need collections" },
      { phase: "Theory", duration: "50 mins", activity: "List, Set, Map concepts with examples" },
      { phase: "Demo", duration: "30 mins", activity: "Live coding: Student management with all collection types" },
      { phase: "Practice", duration: "50 mins", activity: "Labs with different collections" },
      { phase: "Wrap-up", duration: "10 mins", activity: "Which collection to use flowchart + Q&A" }
    ],
    whiteboardPoints: [
      "Collection framework hierarchy diagram",
      "List vs Set vs Map comparison table",
      "ArrayList operations with complexity",
      "HashMap key-value visualization"
    ],
    teachingScript: `"Good morning everyone! Today we learn about Collections - Java's powerful framework for managing groups of objects.

You've used arrays, but they have limitations: fixed size, no built-in search, difficult to add/remove. Collections solve all these problems!

Think about real applications:
- E-commerce cart: ArrayList of products
- Unique usernames: HashSet
- User profiles: HashMap (username → user)

By end of today, you'll:
- Use ArrayList for dynamic lists
- Use HashSet for unique values
- Use HashMap for key-value storage
- Know which collection to pick for any scenario

This is what you'll use in EVERY real Java project. Let's begin!"`,
    expectedOutcomes: [
      "Students can use ArrayList, HashSet, HashMap confidently",
      "Students understand when to use each collection type",
      "Students can iterate collections multiple ways",
      "Students handle common operations (add, remove, search)",
      "Students can convert between collection types"
    ],
    commonMistakes: [
      "Not using generics (raw types)",
      "Using ArrayList when order doesn't matter (use Set)",
      "ConcurrentModificationException during iteration",
      "Not checking null when getting from Map",
      "Using get(index) on HashMap (it's get(key))"
    ]
  },
  labs: [
    {
      title: "Lab 10.1: ArrayList Operations",
      difficulty: "beginner",
      description: "Practice all ArrayList operations",
      steps: [
        "Create ArrayList of Strings",
        "Add, remove, update elements",
        "Search and iterate",
        "Sort and reverse"
      ],
      code: `import java.util.*;

public class ArrayListLab {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        
        // Adding
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");
        fruits.add(1, "Mango");  // At index 1
        System.out.println("After adding: " + fruits);
        
        // Accessing
        System.out.println("First: " + fruits.get(0));
        System.out.println("Last: " + fruits.get(fruits.size() - 1));
        
        // Updating
        fruits.set(0, "Apricot");
        System.out.println("After update: " + fruits);
        
        // Removing
        fruits.remove("Banana");
        fruits.remove(0);
        System.out.println("After remove: " + fruits);
        
        // Searching
        System.out.println("Contains Cherry: " + fruits.contains("Cherry"));
        System.out.println("Index of Mango: " + fruits.indexOf("Mango"));
        
        // Adding more for demo
        fruits.addAll(Arrays.asList("Date", "Fig", "Grape"));
        
        // Iteration methods
        System.out.println("\\n=== Iteration ===");
        
        // for-each
        System.out.print("for-each: ");
        for (String f : fruits) {
            System.out.print(f + " ");
        }
        
        // Sorting
        Collections.sort(fruits);
        System.out.println("\\nSorted: " + fruits);
        
        // Reverse
        Collections.reverse(fruits);
        System.out.println("Reversed: " + fruits);
        
        // Size and clear
        System.out.println("Size: " + fruits.size());
        fruits.clear();
        System.out.println("After clear, isEmpty: " + fruits.isEmpty());
    }
}`,
      sampleOutput: "After adding: [Apple, Mango, Banana, Cherry]\n..."
    },
    {
      title: "Lab 10.2: HashSet - Remove Duplicates",
      difficulty: "beginner",
      description: "Use HashSet to find unique elements and perform set operations",
      steps: [
        "Create HashSet and add elements",
        "Demonstrate duplicate rejection",
        "Perform union, intersection, difference",
        "Compare HashSet, TreeSet, LinkedHashSet"
      ],
      code: `import java.util.*;

public class HashSetLab {
    public static void main(String[] args) {
        // Remove duplicates from list
        List<Integer> numbers = Arrays.asList(1, 2, 3, 2, 4, 3, 5, 1, 6, 5);
        System.out.println("Original list: " + numbers);
        
        Set<Integer> unique = new HashSet<>(numbers);
        System.out.println("Unique (HashSet): " + unique);
        
        Set<Integer> sorted = new TreeSet<>(numbers);
        System.out.println("Unique sorted (TreeSet): " + sorted);
        
        Set<Integer> ordered = new LinkedHashSet<>(numbers);
        System.out.println("Unique ordered (LinkedHashSet): " + ordered);
        
        // Set operations
        System.out.println("\\n=== Set Operations ===");
        Set<String> setA = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
        Set<String> setB = new HashSet<>(Arrays.asList("C", "D", "E", "F"));
        
        System.out.println("Set A: " + setA);
        System.out.println("Set B: " + setB);
        
        // Union
        Set<String> union = new HashSet<>(setA);
        union.addAll(setB);
        System.out.println("Union: " + union);
        
        // Intersection
        Set<String> intersection = new HashSet<>(setA);
        intersection.retainAll(setB);
        System.out.println("Intersection: " + intersection);
        
        // Difference (A - B)
        Set<String> difference = new HashSet<>(setA);
        difference.removeAll(setB);
        System.out.println("A - B: " + difference);
        
        // Practical: Unique words
        String sentence = "the quick brown fox jumps over the lazy dog";
        String[] words = sentence.split(" ");
        Set<String> uniqueWords = new TreeSet<>(Arrays.asList(words));
        System.out.println("\\nUnique words (sorted): " + uniqueWords);
    }
}`
    },
    {
      title: "Lab 10.3: HashMap - Word Frequency",
      difficulty: "intermediate",
      description: "Use HashMap to count word frequency",
      steps: [
        "Read a text and split into words",
        "Count frequency of each word",
        "Find most and least common words",
        "Display sorted by frequency"
      ],
      code: `import java.util.*;

public class WordFrequency {
    public static void main(String[] args) {
        String text = "to be or not to be that is the question " +
                      "whether tis nobler in the mind to suffer";
        
        // Count frequency
        Map<String, Integer> frequency = new HashMap<>();
        String[] words = text.toLowerCase().split(" ");
        
        for (String word : words) {
            frequency.put(word, frequency.getOrDefault(word, 0) + 1);
        }
        
        System.out.println("Word Frequency:");
        System.out.println(frequency);
        
        // Find most common word
        String mostCommon = "";
        int maxCount = 0;
        for (Map.Entry<String, Integer> entry : frequency.entrySet()) {
            if (entry.getValue() > maxCount) {
                maxCount = entry.getValue();
                mostCommon = entry.getKey();
            }
        }
        System.out.println("\\nMost common: '" + mostCommon + "' (" + maxCount + " times)");
        
        // Words appearing once
        System.out.println("\\nWords appearing once:");
        for (Map.Entry<String, Integer> entry : frequency.entrySet()) {
            if (entry.getValue() == 1) {
                System.out.print(entry.getKey() + " ");
            }
        }
        
        // Sort by frequency
        System.out.println("\\n\\nSorted by frequency:");
        List<Map.Entry<String, Integer>> sorted = new ArrayList<>(frequency.entrySet());
        sorted.sort((a, b) -> b.getValue() - a.getValue());
        for (Map.Entry<String, Integer> entry : sorted) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}`
    },
    {
      title: "Lab 10.4: Student Management System",
      difficulty: "advanced",
      description: "Build complete student management using all collections",
      steps: [
        "Use ArrayList for student list",
        "Use HashMap for quick ID lookup",
        "Use Set for unique departments",
        "Implement add, search, update, delete operations"
      ],
      code: `import java.util.*;

class Student {
    int id;
    String name;
    String department;
    double marks;
    
    Student(int id, String name, String dept, double marks) {
        this.id = id;
        this.name = name;
        this.department = dept;
        this.marks = marks;
    }
    
    @Override
    public String toString() {
        return id + ": " + name + " (" + department + ") - " + marks;
    }
}

public class StudentManagementSystem {
    private List<Student> students = new ArrayList<>();
    private Map<Integer, Student> idMap = new HashMap<>();
    private Set<String> departments = new TreeSet<>();
    
    public void addStudent(Student s) {
        students.add(s);
        idMap.put(s.id, s);
        departments.add(s.department);
        System.out.println("Added: " + s);
    }
    
    public Student findById(int id) {
        return idMap.get(id);
    }
    
    public List<Student> findByDepartment(String dept) {
        List<Student> result = new ArrayList<>();
        for (Student s : students) {
            if (s.department.equalsIgnoreCase(dept)) {
                result.add(s);
            }
        }
        return result;
    }
    
    public void displayAll() {
        System.out.println("\\n=== All Students ===");
        for (Student s : students) {
            System.out.println(s);
        }
    }
    
    public void displayDepartments() {
        System.out.println("\\nDepartments: " + departments);
    }
    
    public Map<String, Double> averageByDepartment() {
        Map<String, List<Double>> deptMarks = new HashMap<>();
        
        for (Student s : students) {
            deptMarks.computeIfAbsent(s.department, k -> new ArrayList<>()).add(s.marks);
        }
        
        Map<String, Double> averages = new HashMap<>();
        for (Map.Entry<String, List<Double>> entry : deptMarks.entrySet()) {
            double avg = entry.getValue().stream()
                             .mapToDouble(Double::doubleValue)
                             .average().orElse(0);
            averages.put(entry.getKey(), avg);
        }
        return averages;
    }
    
    public static void main(String[] args) {
        StudentManagementSystem sms = new StudentManagementSystem();
        
        sms.addStudent(new Student(101, "Alice", "CS", 85));
        sms.addStudent(new Student(102, "Bob", "IT", 78));
        sms.addStudent(new Student(103, "Carol", "CS", 92));
        sms.addStudent(new Student(104, "Dave", "IT", 88));
        sms.addStudent(new Student(105, "Eve", "CS", 79));
        
        sms.displayAll();
        sms.displayDepartments();
        
        System.out.println("\\nFinding ID 103: " + sms.findById(103));
        System.out.println("\\nCS Students: " + sms.findByDepartment("CS"));
        System.out.println("\\nAverages: " + sms.averageByDepartment());
    }
}`
    }
  ],
  assignments: [
    {
      id: 10,
      title: "Phone Book Application",
      difficulty: "intermediate",
      problemStatement: "Create a phone book using HashMap. Features: Add contact (name → phone), Search by name, Delete contact, Display all contacts sorted, Search by partial name, Handle duplicate names (show all matches).",
      hints: [
        "Use HashMap<String, String> for name → phone",
        "Use TreeMap for sorted display",
        "For partial search, iterate and check contains()",
        "For duplicates, use HashMap<String, List<String>>"
      ],
      expectedOutput: "=== Phone Book ===\n1. Add Contact\n2. Search\n3. Delete\n4. Display All\n5. Search Partial\n\nAdded: John → 9876543210\n\nSearching 'Jo': Found John → 9876543210",
      evaluationCriteria: [
        "All operations work correctly",
        "Sorted display using TreeMap",
        "Partial search implemented",
        "Duplicate handling works",
        "Good user interface"
      ]
    },
    {
      id: 101,
      title: "Shopping Cart System",
      difficulty: "advanced",
      problemStatement: "Build shopping cart using collections. Product class (id, name, price). Cart uses Map<Product, Integer> for quantities. Features: Add/remove items, Update quantity, Calculate total, Apply discount for items > 3, Display cart with formatting.",
      hints: [
        "Override hashCode and equals in Product",
        "Use Map.Entry for iteration",
        "Calculate total in separate method",
        "Format output with printf"
      ],
      expectedOutput: "=== Shopping Cart ===\nProduct          Qty    Price    Total\nLaptop           1      50000    50000\nMouse            3      500      1500\nKeyboard         1      1500     1500\n\nSubtotal: ₹53000\nDiscount: ₹0\nTotal: ₹53000",
      evaluationCriteria: [
        "Product class with proper equals/hashCode",
        "Cart operations work correctly",
        "Discount applied properly",
        "Formatted output",
        "Handle edge cases (empty cart, item not found)"
      ]
    }
  ]
};
