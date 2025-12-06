import { DayContent } from '../curriculum';

export const day15: DayContent = {
  day: 15,
  title: "Revision & Assessment",
  description: "Comprehensive review, practice problems, final assessment",
  icon: "📝",
  pptSlides: [
    {
      title: "Course Recap - Journey Overview",
      content: [
        "15 days of intensive Java learning",
        "From basics to advanced concepts",
        "Ready for real-world projects",
        "Foundation for further learning"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Congratulations! You have completed 15 days of Java training. Let's recap everything!"

📌 YOUR LEARNING JOURNEY:

\`\`\`
Week 1: Java Fundamentals
├── Day 1: Java Introduction, Setup, First Program
├── Day 2: Variables, Data Types, Operators
├── Day 3: Control Statements (if, switch)
├── Day 4: Loops (for, while, do-while)
└── Day 5: Arrays and Strings

Week 2: Object-Oriented Programming
├── Day 6: Classes, Objects, Methods
├── Day 7: Constructors, Static, this/super
├── Day 8: Inheritance and Polymorphism
├── Day 9: Abstraction and Encapsulation
└── Day 10: Collections Framework

Week 3: Advanced Topics & Project
├── Day 11: Exception Handling
├── Day 12: File I/O Operations
├── Day 13: Multithreading Basics
├── Day 14: Mini Project
└── Day 15: Revision & Assessment ← YOU ARE HERE!
\`\`\`

📌 WHAT YOU CAN NOW DO:

\`\`\`
✅ Write Java programs from scratch
✅ Design object-oriented solutions
✅ Handle errors gracefully
✅ Work with files and data persistence
✅ Create multi-threaded applications
✅ Use collections for data management
✅ Build complete applications
\`\`\``
    },
    {
      title: "Quick Revision - Fundamentals",
      content: [
        "Java syntax and structure",
        "Data types and variables",
        "Operators and expressions",
        "Control flow and loops"
      ],
      trainerNotes: `🎯 QUICK REVISION:

📌 JAVA PROGRAM STRUCTURE:

\`\`\`java
// Package declaration (optional)
package com.example;

// Import statements
import java.util.*;

// Class declaration
public class ClassName {
    // Fields (variables)
    private int field;
    
    // Constructor
    public ClassName() {
        // initialization
    }
    
    // Methods
    public void methodName() {
        // logic
    }
    
    // Main method (entry point)
    public static void main(String[] args) {
        // program starts here
    }
}
\`\`\`

📌 DATA TYPES:

\`\`\`
Primitive Types:
├── byte (8-bit)
├── short (16-bit)
├── int (32-bit)      ← Most common
├── long (64-bit)
├── float (32-bit)
├── double (64-bit)   ← Most common for decimals
├── char (16-bit)
└── boolean (true/false)

Reference Types:
├── String
├── Arrays
├── Classes
└── Interfaces
\`\`\`

📌 OPERATORS:

\`\`\`java
// Arithmetic: + - * / %
int sum = a + b;
int remainder = a % b;

// Comparison: == != > < >= <=
boolean isEqual = (a == b);

// Logical: && || !
boolean both = (a > 0 && b > 0);
boolean either = (a > 0 || b > 0);
boolean not = !flag;

// Assignment: = += -= *= /=
count += 1;  // count = count + 1

// Increment/Decrement: ++ --
i++;  // i = i + 1
\`\`\`

📌 CONTROL FLOW:

\`\`\`java
// if-else
if (condition) {
    // code
} else if (another) {
    // code
} else {
    // code
}

// switch
switch (value) {
    case 1: /* code */ break;
    case 2: /* code */ break;
    default: /* code */
}

// Loops
for (int i = 0; i < n; i++) { }
while (condition) { }
do { } while (condition);
for (Type item : collection) { }  // for-each
\`\`\``
    },
    {
      title: "Quick Revision - OOP Concepts",
      content: [
        "Classes and Objects",
        "Inheritance and Polymorphism",
        "Abstraction and Encapsulation",
        "Interfaces and Abstract classes"
      ],
      trainerNotes: `🎯 OOP REVISION:

📌 FOUR PILLARS:

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│  PILLAR         │  MEANING                │  KEYWORD/TECHNIQUE  │
├─────────────────────────────────────────────────────────────────┤
│  Encapsulation  │  Data hiding            │  private, getters   │
│  Inheritance    │  Code reuse             │  extends            │
│  Polymorphism   │  Many forms             │  Override, interfaces│
│  Abstraction    │  Hide complexity        │  abstract, interface │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

📌 CLASS AND OBJECT:

\`\`\`java
// Class = Blueprint
class Car {
    private String brand;
    private int speed;
    
    public Car(String brand) {
        this.brand = brand;
    }
    
    public void accelerate() {
        speed += 10;
    }
}

// Object = Instance
Car myCar = new Car("Toyota");
myCar.accelerate();
\`\`\`

📌 INHERITANCE:

\`\`\`java
class Animal {
    protected String name;
    public void eat() { System.out.println("Eating"); }
}

class Dog extends Animal {
    @Override
    public void eat() { System.out.println("Dog eating"); }
    public void bark() { System.out.println("Woof!"); }
}
\`\`\`

📌 INTERFACE:

\`\`\`java
interface Flyable {
    void fly();  // abstract by default
}

class Bird implements Flyable {
    @Override
    public void fly() {
        System.out.println("Bird flying");
    }
}
\`\`\`

📌 ABSTRACT CLASS:

\`\`\`java
abstract class Shape {
    protected String color;
    
    abstract double getArea();  // Must implement
    
    void display() {  // Can have implementation
        System.out.println("Shape: " + color);
    }
}

class Circle extends Shape {
    private double radius;
    
    @Override
    double getArea() {
        return Math.PI * radius * radius;
    }
}
\`\`\``
    },
    {
      title: "Quick Revision - Advanced Topics",
      content: [
        "Collections Framework",
        "Exception Handling",
        "File I/O",
        "Multithreading"
      ],
      trainerNotes: `🎯 ADVANCED TOPICS REVISION:

📌 COLLECTIONS:

\`\`\`java
// List - ordered, duplicates allowed
List<String> list = new ArrayList<>();
list.add("A");
list.get(0);

// Set - unique elements
Set<String> set = new HashSet<>();
set.add("A");
set.contains("A");

// Map - key-value pairs
Map<String, Integer> map = new HashMap<>();
map.put("age", 25);
map.get("age");
\`\`\`

📌 EXCEPTION HANDLING:

\`\`\`java
try {
    // risky code
    int result = 10 / 0;
} catch (ArithmeticException e) {
    // handle specific exception
    System.out.println("Cannot divide by zero!");
} catch (Exception e) {
    // handle general exception
} finally {
    // always executes
}

// Custom exception
class MyException extends Exception {
    public MyException(String msg) {
        super(msg);
    }
}
\`\`\`

📌 FILE I/O:

\`\`\`java
// Reading
try (BufferedReader reader = new BufferedReader(
        new FileReader("file.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
}

// Writing
try (PrintWriter writer = new PrintWriter("file.txt")) {
    writer.println("Hello, World!");
}

// Serialization
ObjectOutputStream oos = new ObjectOutputStream(
    new FileOutputStream("data.ser"));
oos.writeObject(myObject);
\`\`\`

📌 MULTITHREADING:

\`\`\`java
// Creating thread
Thread t = new Thread(() -> {
    System.out.println("Running in thread");
});
t.start();

// Synchronized method
public synchronized void safeMethod() {
    // thread-safe code
}

// Wait and notify
synchronized(lock) {
    while (condition) wait();
    // do work
    notify();
}
\`\`\``
    },
    {
      title: "Common Interview Questions",
      content: [
        "OOP concepts questions",
        "Java-specific questions",
        "Problem-solving questions",
        "Best practices discussion"
      ],
      trainerNotes: `🎯 INTERVIEW PREPARATION:

📌 FREQUENTLY ASKED QUESTIONS:

\`\`\`
1. What is the difference between JDK, JRE, and JVM?
   JDK = Development Kit (includes JRE + tools)
   JRE = Runtime Environment (includes JVM + libraries)
   JVM = Virtual Machine (executes bytecode)

2. What is the difference between == and equals()?
   == compares references
   equals() compares content

3. What is the difference between ArrayList and LinkedList?
   ArrayList: Fast random access, slow insert/delete
   LinkedList: Slow access, fast insert/delete

4. What is the difference between abstract class and interface?
   Abstract: partial implementation, single inheritance
   Interface: contract only, multiple implementation

5. What is the difference between final, finally, and finalize?
   final: constant/cannot override/cannot extend
   finally: always executes after try-catch
   finalize: called before garbage collection

6. What is method overloading vs overriding?
   Overloading: same name, different parameters (compile-time)
   Overriding: same signature in subclass (runtime)

7. What is the difference between checked and unchecked exceptions?
   Checked: must handle (IOException)
   Unchecked: optional (NullPointerException)

8. What is synchronization?
   Controlling access to shared resources
   Only one thread can access at a time

9. What is the difference between String, StringBuilder, StringBuffer?
   String: immutable
   StringBuilder: mutable, not thread-safe, faster
   StringBuffer: mutable, thread-safe, slower

10. What is garbage collection?
    Automatic memory management
    Removes unused objects
\`\`\`

📌 PROBLEM-SOLVING TIPS:

\`\`\`
1. Understand the problem completely
2. Think about edge cases
3. Plan before coding
4. Start with brute force, then optimize
5. Test with examples
6. Explain your thought process
\`\`\``
    },
    {
      title: "Assessment Overview",
      content: [
        "Written test on concepts",
        "Practical coding assessment",
        "Code review exercise",
        "Mini project presentation"
      ],
      trainerNotes: `🎯 ASSESSMENT STRUCTURE:

📌 PART 1: WRITTEN TEST (30 mins)

\`\`\`
Multiple Choice Questions:
- Java basics and syntax
- OOP concepts
- Exception handling
- Collections

Short Answer Questions:
- Explain concepts briefly
- Compare and contrast
- Identify errors in code
\`\`\`

📌 PART 2: PRACTICAL CODING (90 mins)

\`\`\`
Problem 1: Basic Logic (20 mins)
- Array manipulation
- String operations
- Loop-based problems

Problem 2: OOP Design (30 mins)
- Create classes with inheritance
- Implement interfaces
- Use proper encapsulation

Problem 3: Complete Application (40 mins)
- File operations
- Exception handling
- Collections usage
\`\`\`

📌 PART 3: CODE REVIEW (20 mins)

\`\`\`
Given a code snippet:
- Find bugs
- Suggest improvements
- Identify best practice violations
\`\`\`

📌 GRADING CRITERIA:

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│  CRITERIA                │  WEIGHT                             │
├─────────────────────────────────────────────────────────────────┤
│  Correctness             │  40%                                │
│  Code Quality            │  25%                                │
│  OOP Design              │  20%                                │
│  Error Handling          │  15%                                │
└─────────────────────────────────────────────────────────────────┘
\`\`\``
    }
  ],
  lessonPlan: {
    objectives: [
      "Review all concepts learned in 15 days",
      "Practice problem-solving skills",
      "Prepare for technical interviews",
      "Complete final assessment"
    ],
    materials: ["Revision notes", "Practice problems", "Assessment papers"],
    warmUp: {
      duration: "15 min",
      activity: "Quick quiz on key concepts"
    },
    mainContent: [
      { topic: "Fundamentals Revision", duration: "45 min" },
      { topic: "OOP Revision", duration: "45 min" },
      { topic: "Advanced Topics Revision", duration: "45 min" },
      { topic: "Practice Problems", duration: "60 min" },
      { topic: "Assessment", duration: "90 min" }
    ],
    practiceExercises: [
      "Solve mixed practice problems",
      "Debug code snippets",
      "Design class hierarchies"
    ],
    assessment: "Comprehensive written and practical test"
  },
  labs: [
    {
      title: "Practice Problems Set",
      objective: "Test understanding with mixed problems",
      steps: [
        "Solve array problems",
        "Implement OOP designs",
        "Handle exceptions properly",
        "Work with collections"
      ],
      codeExamples: [
        {
          title: "Sample Practice Problems",
          code: `/* PROBLEM 1: Array Operations
   Write methods to find:
   - Maximum element
   - Minimum element
   - Average
   - Second largest
*/

public class ArrayProblems {
    public static int findMax(int[] arr) {
        int max = arr[0];
        for (int num : arr) {
            if (num > max) max = num;
        }
        return max;
    }
    
    public static int findSecondLargest(int[] arr) {
        int first = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;
        
        for (int num : arr) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num != first) {
                second = num;
            }
        }
        return second;
    }
}

/* PROBLEM 2: String Operations
   - Reverse a string
   - Check palindrome
   - Count vowels
   - Remove duplicates
*/

public class StringProblems {
    public static String reverse(String str) {
        return new StringBuilder(str).reverse().toString();
    }
    
    public static boolean isPalindrome(String str) {
        str = str.toLowerCase().replaceAll("[^a-z]", "");
        return str.equals(reverse(str));
    }
    
    public static int countVowels(String str) {
        int count = 0;
        String vowels = "aeiouAEIOU";
        for (char c : str.toCharArray()) {
            if (vowels.indexOf(c) != -1) count++;
        }
        return count;
    }
}

/* PROBLEM 3: OOP Design
   Design a simple banking system with:
   - Account class (abstract)
   - SavingsAccount (extends Account)
   - CurrentAccount (extends Account)
   - Deposit and withdraw methods
   - Interest calculation for savings
*/

abstract class Account {
    protected String accountNumber;
    protected double balance;
    
    public abstract void deposit(double amount);
    public abstract void withdraw(double amount) throws Exception;
}

class SavingsAccount extends Account {
    private double interestRate = 0.04;
    
    @Override
    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }
    
    @Override
    public void withdraw(double amount) throws Exception {
        if (amount > balance) {
            throw new Exception("Insufficient balance");
        }
        balance -= amount;
    }
    
    public void addInterest() {
        balance += balance * interestRate;
    }
}`
        }
      ]
    }
  ],
  assignments: [
    {
      title: "Final Assessment",
      description: "Comprehensive test covering all topics",
      tasks: [
        "Complete written test",
        "Solve practical problems",
        "Review and improve code",
        "Present mini project"
      ],
      expectedOutput: "Demonstration of Java proficiency",
      hints: ["Review all day notes", "Practice coding daily", "Understand concepts, don't memorize"]
    },
    {
      title: "Self-Study Roadmap",
      description: "Continue your Java learning journey",
      tasks: [
        "Learn Java 8+ features (Streams, Lambdas)",
        "Study JDBC and database connectivity",
        "Explore Spring Framework basics",
        "Practice on coding platforms (LeetCode, HackerRank)",
        "Build personal projects"
      ],
      expectedOutput: "Continuous improvement plan",
      hints: ["Set weekly goals", "Join Java communities", "Read official documentation"]
    }
  ]
};
