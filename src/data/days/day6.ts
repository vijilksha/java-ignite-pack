import { DayContent } from '../curriculum';

export const day6: DayContent = {
  day: 6,
  title: "OOPS - Class, Object, Methods",
  description: "Classes, objects, instance variables, methods, constructors intro",
  icon: "🏗️",
  pptSlides: [
    {
      title: "What is Object-Oriented Programming?",
      content: [
        "Programming paradigm based on objects",
        "Objects contain data (attributes) and behavior (methods)",
        "Four pillars: Encapsulation, Inheritance, Polymorphism, Abstraction",
        "Java is fully object-oriented"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Good morning everyone! Today marks a MAJOR milestone in your Java journey. We're entering the world of Object-Oriented Programming - OOP. This is what makes Java so powerful!"

📌 THE PARADIGM SHIFT:

"So far, we've been writing what's called 'procedural' code - step by step instructions. But real-world software is COMPLEX. Imagine building WhatsApp with just if-else and loops - nightmare!

OOP is a way of ORGANIZING code that mirrors the real world."

📌 THE REAL WORLD ANALOGY:

"Look around this room. What do you see?
- Chairs (objects with properties: color, material, height)
- People (objects with properties: name, age, and behaviors: walk, talk)
- Phones (objects with properties: brand, battery, and behaviors: call, text)

Everything in the real world is an OBJECT with:
- PROPERTIES (what it HAS) - data/attributes
- BEHAVIORS (what it DOES) - methods/functions"

📌 WHY OOP MATTERS (Draw on board):

\`\`\`
PROCEDURAL                    vs    OBJECT-ORIENTED
─────────────────────────────────────────────────────
Code scattered everywhere     →    Code organized in classes
Hard to maintain             →    Easy to maintain
Can't reuse easily           →    Highly reusable
Changes break everything     →    Changes are isolated
Think in terms of steps      →    Think in terms of objects
\`\`\`

📌 THE FOUR PILLARS OF OOP:

"There are four fundamental concepts - think of them as the four legs of a table. Today we focus on the first two:"

\`\`\`
1. ENCAPSULATION (Day 8)
   "Bundling data and methods that operate on that data"
   Like a capsule containing medicine
   
2. INHERITANCE (Day 7)
   "Creating new classes from existing ones"
   Like children inheriting traits from parents
   
3. POLYMORPHISM (Day 7)
   "Same action, different behaviors"
   Like the word 'open' - open door, open file, open bottle
   
4. ABSTRACTION (Day 8)
   "Hiding complexity, showing only essentials"
   Like driving a car - you don't need to know the engine works
\`\`\`

💡 WHY COMPANIES LOVE OOP:

"In a company, teams work on DIFFERENT parts of an app:
- Team A builds User module
- Team B builds Payment module
- Team C builds Notification module

With OOP, each team works on separate classes without stepping on each other's toes!"

📌 TODAY'S FOCUS:

"Today we'll learn:
1. What is a Class (blueprint)
2. What is an Object (actual thing)
3. Instance Variables (data)
4. Methods (behavior)

By end of today, you'll create your own classes like Student, Employee, BankAccount!"`,
      analogy: "Think of a class as a blueprint for a house, and objects as actual houses built from that blueprint. Each house has same structure but different paint, furniture, etc."
    },
    {
      title: "Classes and Objects",
      content: [
        "Class: Blueprint/template for objects",
        "Object: Instance of a class",
        "Creating object: ClassName obj = new ClassName();",
        "Accessing members: obj.variableName, obj.methodName()"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Let's understand the two most important terms in OOP - Class and Object."

📌 THE CAR FACTORY ANALOGY:

"Imagine a car factory:

🏭 CAR DESIGN DOCUMENT = CLASS
- Specifies: 4 wheels, engine, steering, seats
- It's just a PLAN on paper
- You can't drive a plan!

🚗 ACTUAL CAR = OBJECT
- Built using the design
- Has real wheels, engine, color
- You CAN drive this!

Multiple cars can be built from ONE design, each with different colors, features."

📌 CLASS SYNTAX:

\`\`\`java
// Define a class (the blueprint)
class Car {
    // Properties (what it HAS)
    String color;
    String brand;
    int speed;
    
    // Behaviors (what it DOES)
    void start() {
        System.out.println("Car started!");
    }
    
    void accelerate() {
        speed += 10;
        System.out.println("Speed: " + speed);
    }
}
\`\`\`

📌 CREATING OBJECTS:

\`\`\`java
// In main method
public static void main(String[] args) {
    // Create objects (actual cars)
    Car myCar = new Car();        // First car
    Car yourCar = new Car();      // Second car
    
    // Set properties
    myCar.color = "Red";
    myCar.brand = "Toyota";
    
    yourCar.color = "Blue";
    yourCar.brand = "Honda";
    
    // Call methods
    myCar.start();        // "Car started!"
    myCar.accelerate();   // "Speed: 10"
}
\`\`\`

📌 BREAKDOWN OF OBJECT CREATION:

\`\`\`java
Car myCar = new Car();
│    │      │    │
│    │      │    └── Constructor call (creates object)
│    │      └────── 'new' keyword (allocates memory)
│    └───────────── Variable name (reference to object)
└────────────────── Type (class name)
\`\`\`

📌 MEMORY VISUALIZATION:

\`\`\`
Stack Memory              Heap Memory
┌──────────────┐         ┌────────────────────┐
│ myCar ───────┼────────→│ Car Object         │
│              │         │ color: "Red"       │
│ yourCar ─────┼────┐    │ brand: "Toyota"    │
└──────────────┘    │    │ speed: 0           │
                    │    └────────────────────┘
                    │    ┌────────────────────┐
                    └───→│ Car Object         │
                         │ color: "Blue"      │
                         │ brand: "Honda"     │
                         │ speed: 0           │
                         └────────────────────┘
\`\`\`

📌 KEY POINTS:

"1. Class is like a recipe, Object is the actual dish
2. One class → Many objects
3. Each object has its OWN copy of instance variables
4. Objects are stored in HEAP memory
5. References (myCar, yourCar) are in STACK memory"

⚠️ COMMON MISTAKE:

\`\`\`java
Car myCar;           // Just declares reference, NO object yet!
myCar.start();       // ERROR! NullPointerException!

Car myCar = new Car();  // Now object exists
myCar.start();          // Works!
\`\`\`

"Always use 'new' to create objects. Just declaring doesn't create anything!"`,
      diagram: `┌─────────────────────────────────────────────────┐
│               CLASS (Blueprint)                 │
│   ┌─────────────────────────────────────────┐   │
│   │  class Car {                            │   │
│   │      String color;  // Property         │   │
│   │      void start(); // Behavior          │   │
│   │  }                                      │   │
│   └─────────────────────────────────────────┘   │
│                      ↓                          │
│              new Car()                          │
│                      ↓                          │
│   ┌───────────────┐    ┌───────────────┐        │
│   │ OBJECT 1      │    │ OBJECT 2      │        │
│   │ color: "Red"  │    │ color: "Blue" │        │
│   └───────────────┘    └───────────────┘        │
└─────────────────────────────────────────────────┘`
    },
    {
      title: "Instance Variables",
      content: [
        "Variables declared inside class, outside methods",
        "Each object has its own copy",
        "Have default values (0, null, false)",
        "Also called fields or attributes"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Now let's dive deeper into the DATA part of objects - Instance Variables."

📌 WHAT ARE INSTANCE VARIABLES?

"Variables declared INSIDE a class but OUTSIDE any method. They define the PROPERTIES of an object."

\`\`\`java
class Student {
    // These are INSTANCE VARIABLES
    String name;          // What's their name?
    int rollNumber;       // What's their roll number?
    double marks;         // What are their marks?
    boolean isActive;     // Are they active?
    
    // This is a LOCAL variable (inside method)
    void display() {
        int temp = 10;    // LOCAL - exists only in this method
        System.out.println(name);  // Can access instance variable
    }
}
\`\`\`

📌 INSTANCE vs LOCAL VARIABLES:

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│  INSTANCE VARIABLES          │  LOCAL VARIABLES            │
├─────────────────────────────────────────────────────────────┤
│  Declared in class           │  Declared in method         │
│  Accessible throughout class │  Accessible only in method  │
│  Have default values         │  NO default (must init)     │
│  Stored in HEAP (with obj)   │  Stored in STACK            │
│  Exist as long as object     │  Exist during method call   │
└─────────────────────────────────────────────────────────────┘
\`\`\`

📌 DEFAULT VALUES:

\`\`\`java
class Defaults {
    int number;        // 0
    double decimal;    // 0.0
    boolean flag;      // false
    char character;    // '\\u0000' (null char)
    String text;       // null
    int[] array;       // null
}

// Demonstration
Defaults d = new Defaults();
System.out.println(d.number);   // 0 (not error!)
System.out.println(d.text);     // null
\`\`\`

📌 EACH OBJECT HAS ITS OWN COPY:

\`\`\`java
class Student {
    String name;
    int marks;
}

public class Demo {
    public static void main(String[] args) {
        Student s1 = new Student();
        Student s2 = new Student();
        
        s1.name = "Rahul";
        s1.marks = 85;
        
        s2.name = "Priya";
        s2.marks = 92;
        
        // Each has its OWN copy!
        System.out.println(s1.name);  // Rahul
        System.out.println(s2.name);  // Priya
        
        // Changing one doesn't affect other
        s1.marks = 90;
        System.out.println(s2.marks);  // Still 92!
    }
}
\`\`\`

📌 MEMORY PICTURE:

\`\`\`
      s1 ────→ ┌──────────────┐
               │ name: "Rahul"│
               │ marks: 85    │
               └──────────────┘
               
      s2 ────→ ┌──────────────┐
               │ name: "Priya"│
               │ marks: 92    │
               └──────────────┘

Separate copies in heap!
\`\`\`

💡 NAMING CONVENTIONS:

\`\`\`java
class Employee {
    // Use camelCase for instance variables
    String firstName;        // ✓
    String lastName;         // ✓
    double annualSalary;     // ✓
    
    // NOT these:
    String first_name;       // Python style - avoid in Java
    String FirstName;        // PascalCase - for class names
    String SALARY;           // ALL CAPS - for constants only
}
\`\`\`

⚠️ COMMON CONFUSION:

\`\`\`java
class Example {
    int count;  // Instance variable - has default value 0
    
    void method() {
        int number;  // Local variable - NO default!
        System.out.println(number);  // ERROR! Not initialized
    }
}
\`\`\`

"Instance variables get defaults, local variables DON'T!"`
    },
    {
      title: "Methods - The Behavior",
      content: [
        "Block of code that performs a task",
        "Syntax: returnType methodName(parameters) { }",
        "void: Returns nothing",
        "return statement: Sends value back to caller"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"If instance variables are WHAT an object HAS, methods are WHAT an object DOES. Methods define BEHAVIOR."

📌 METHOD ANATOMY:

\`\`\`java
public int calculateSum(int a, int b) {
   │     │       │          └─────────── Parameters (inputs)
   │     │       └──────────────────── Method name
   │     └──────────────────────────── Return type (output)
   └────────────────────────────────── Access modifier
   
    int result = a + b;
    return result;    // Send back to caller
}
\`\`\`

📌 TYPES OF METHODS:

\`\`\`java
class Calculator {
    
    // 1. No parameters, no return (void)
    void sayHello() {
        System.out.println("Hello!");
    }
    
    // 2. With parameters, no return
    void printSum(int a, int b) {
        System.out.println("Sum: " + (a + b));
    }
    
    // 3. No parameters, with return
    int getRandomNumber() {
        return 42;
    }
    
    // 4. With parameters and return
    int add(int a, int b) {
        return a + b;
    }
    
    // 5. Multiple parameters
    double calculateAverage(int a, int b, int c) {
        return (a + b + c) / 3.0;
    }
}
\`\`\`

📌 CALLING METHODS:

\`\`\`java
Calculator calc = new Calculator();

// Calling void method
calc.sayHello();  // Just call, don't store

// Calling with parameters
calc.printSum(10, 20);  // Output: Sum: 30

// Calling method that returns value
int random = calc.getRandomNumber();
System.out.println(random);  // 42

// Using return value directly
int sum = calc.add(5, 3);
System.out.println(sum);  // 8

// Or use directly in expression
System.out.println(calc.add(10, 20) * 2);  // 60
\`\`\`

📌 THE VENDING MACHINE ANALOGY:

"A method is like a vending machine:
- INPUT (parameters): You put in coins and select a button
- PROCESS (method body): Machine does something inside
- OUTPUT (return): You get your drink

\`\`\`
          ┌──────────────────┐
  Input   │                  │   Output
  ───────→│   VENDING        │───────→
  (coins) │   MACHINE        │ (drink)
          │                  │
          └──────────────────┘
          
          ┌──────────────────┐
  Input   │                  │   Output
  ───────→│   add(5, 3)      │───────→
  (5, 3)  │   return a + b;  │   (8)
          └──────────────────┘
\`\`\`"

📌 RETURN STATEMENT RULES:

\`\`\`java
// 1. void methods - return is optional
void greet() {
    System.out.println("Hi");
    return;  // Optional, can omit
}

// 2. void methods can use return to exit early
void checkAge(int age) {
    if (age < 0) {
        System.out.println("Invalid age");
        return;  // Exit method here
    }
    System.out.println("Age is: " + age);
}

// 3. Non-void MUST return a value
int getNumber() {
    return 42;  // Required!
    // System.out.println("Hi");  // ERROR! Unreachable code
}

// 4. Return type must match
int getValue() {
    return "Hello";  // ERROR! String doesn't match int
}
\`\`\`

⚠️ COMMON MISTAKES:

\`\`\`java
// Mistake 1: Forgetting to use return value
calc.add(5, 3);  // Result is lost! Should store it

// Mistake 2: Missing return in non-void
int getValue() {
    int x = 10;
    // ERROR! No return statement
}

// Mistake 3: Unreachable code after return
int test() {
    return 5;
    System.out.println("Hi");  // ERROR! Never executes
}
\`\`\``,
      diagram: `┌─────────────────────────────────────────┐
│        METHOD STRUCTURE                 │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ returnType methodName(params) {  │  │
│  │                                   │  │
│  │     // Method body               │  │
│  │     // Process inputs            │  │
│  │                                   │  │
│  │     return value; // if not void │  │
│  │ }                                 │  │
│  └───────────────────────────────────┘  │
│                                         │
│  Parameters → Processing → Return       │
└─────────────────────────────────────────┘`
    },
    {
      title: "Method Parameters and Return",
      content: [
        "Parameters: Inputs to the method",
        "Arguments: Actual values passed",
        "Return type: What method gives back",
        "Can return primitive or object"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Let's clarify the difference between parameters and arguments, and how return works."

📌 PARAMETERS vs ARGUMENTS:

\`\`\`java
// PARAMETERS are in the method DEFINITION (placeholders)
void greet(String name, int times) {  // ← Parameters
    for (int i = 0; i < times; i++) {
        System.out.println("Hello, " + name);
    }
}

// ARGUMENTS are the actual VALUES you pass when CALLING
greet("John", 3);  // ← Arguments
greet("Jane", 2);  // ← Different arguments
\`\`\`

📌 THE COOKIE CUTTER ANALOGY:

"Parameters are like cookie cutter shapes - they define what TYPE of input is expected.
Arguments are like the actual dough you put in - the real values.

Parameter (int age) → Expects an integer
Argument (25) → The actual integer you provide"

📌 PASS BY VALUE (Important concept!):

"In Java, primitives are PASSED BY VALUE - a COPY is sent to the method."

\`\`\`java
class Demo {
    void changeValue(int num) {
        num = 100;  // Changes the COPY, not original!
        System.out.println("Inside method: " + num);  // 100
    }
    
    public static void main(String[] args) {
        Demo d = new Demo();
        int x = 50;
        d.changeValue(x);
        System.out.println("After method: " + x);  // Still 50!
    }
}
\`\`\`

📌 PASS BY VALUE WITH OBJECTS:

"For objects, the REFERENCE is passed by value. You can modify the object's contents!"

\`\`\`java
class Student {
    String name;
}

class Demo {
    void changeName(Student s) {
        s.name = "Changed!";  // Modifies actual object!
    }
    
    public static void main(String[] args) {
        Student student = new Student();
        student.name = "Original";
        
        Demo d = new Demo();
        d.changeName(student);
        
        System.out.println(student.name);  // "Changed!"
    }
}
\`\`\`

📌 RETURNING VALUES:

\`\`\`java
class Calculator {
    // Return primitive
    int add(int a, int b) {
        return a + b;
    }
    
    // Return object
    Student createStudent(String name, int roll) {
        Student s = new Student();
        s.name = name;
        s.rollNumber = roll;
        return s;
    }
    
    // Return array
    int[] getScores() {
        return new int[]{85, 90, 78, 92};
    }
    
    // Return boolean (common pattern)
    boolean isEven(int num) {
        return num % 2 == 0;
    }
    
    // Return String
    String getGreeting(String name) {
        return "Hello, " + name + "!";
    }
}
\`\`\`

📌 USING RETURNED VALUES:

\`\`\`java
Calculator calc = new Calculator();

// Store in variable
int sum = calc.add(5, 3);

// Use directly in expression
if (calc.isEven(10)) {
    System.out.println("Even!");
}

// Chain method calls
String upper = calc.getGreeting("John").toUpperCase();

// Use in another method call
System.out.println(calc.add(10, calc.add(5, 3)));  // 18
\`\`\`

📌 METHOD CHAINING PREVIEW:

\`\`\`java
// When a method returns the object itself, you can chain calls
// (We'll see this more with StringBuilder later)
String result = "  hello world  "
    .trim()
    .toUpperCase()
    .replace("WORLD", "JAVA");
// Result: "HELLO JAVA"
\`\`\`

⚠️ COMMON MISTAKES:

\`\`\`java
// 1. Wrong number of arguments
void greet(String name, int age) { }
greet("John");  // ERROR! Missing argument

// 2. Wrong argument types
void setAge(int age) { }
setAge("twenty");  // ERROR! String given, int expected

// 3. Wrong argument order
void display(String name, int age) { }
display(25, "John");  // ERROR! Order matters!
\`\`\``
    },
    {
      title: "Putting It All Together - Complete Example",
      content: [
        "Creating a practical class",
        "Combining instance variables and methods",
        "Multiple objects interacting",
        "Real-world modeling"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Let's build a complete, practical example - a BankAccount class that demonstrates everything we've learned."

📌 COMPLETE BANK ACCOUNT EXAMPLE:

\`\`\`java
class BankAccount {
    // Instance Variables (What the account HAS)
    String accountNumber;
    String holderName;
    double balance;
    String accountType;
    
    // Methods (What the account DOES)
    
    // Deposit money
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: ₹" + amount);
            System.out.println("New Balance: ₹" + balance);
        } else {
            System.out.println("Invalid amount!");
        }
    }
    
    // Withdraw money
    boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: ₹" + amount);
            System.out.println("Remaining Balance: ₹" + balance);
            return true;
        } else if (amount > balance) {
            System.out.println("Insufficient balance!");
            return false;
        } else {
            System.out.println("Invalid amount!");
            return false;
        }
    }
    
    // Check balance
    double getBalance() {
        return balance;
    }
    
    // Display account info
    void displayInfo() {
        System.out.println("\\n=== Account Details ===");
        System.out.println("Account No: " + accountNumber);
        System.out.println("Holder: " + holderName);
        System.out.println("Type: " + accountType);
        System.out.println("Balance: ₹" + balance);
    }
    
    // Transfer to another account
    boolean transfer(BankAccount recipient, double amount) {
        if (this.withdraw(amount)) {
            recipient.deposit(amount);
            System.out.println("Transfer successful to " + recipient.holderName);
            return true;
        }
        return false;
    }
}

public class BankDemo {
    public static void main(String[] args) {
        // Create accounts
        BankAccount savings = new BankAccount();
        savings.accountNumber = "SB001";
        savings.holderName = "Rahul";
        savings.balance = 10000;
        savings.accountType = "Savings";
        
        BankAccount current = new BankAccount();
        current.accountNumber = "CA001";
        current.holderName = "Priya";
        current.balance = 50000;
        current.accountType = "Current";
        
        // Display initial state
        savings.displayInfo();
        current.displayInfo();
        
        // Perform operations
        System.out.println("\\n--- Transactions ---");
        savings.deposit(5000);
        savings.withdraw(3000);
        
        // Transfer between accounts
        System.out.println("\\n--- Transfer ---");
        savings.transfer(current, 2000);
        
        // Final state
        savings.displayInfo();
        current.displayInfo();
    }
}
\`\`\`

📌 OUTPUT:

\`\`\`
=== Account Details ===
Account No: SB001
Holder: Rahul
Type: Savings
Balance: ₹10000.0

=== Account Details ===
Account No: CA001
Holder: Priya
Type: Current
Balance: ₹50000.0

--- Transactions ---
Deposited: ₹5000.0
New Balance: ₹15000.0
Withdrawn: ₹3000.0
Remaining Balance: ₹12000.0

--- Transfer ---
Withdrawn: ₹2000.0
Remaining Balance: ₹10000.0
Deposited: ₹2000.0
New Balance: ₹52000.0
Transfer successful to Priya

=== Account Details ===
Account No: SB001
Holder: Rahul
Type: Savings
Balance: ₹10000.0

=== Account Details ===
Account No: CA001
Holder: Priya
Type: Current
Balance: ₹52000.0
\`\`\`

📌 KEY TAKEAWAYS:

"1. We modeled a REAL-WORLD entity (bank account)
2. Instance variables store STATE (account number, balance)
3. Methods define BEHAVIOR (deposit, withdraw)
4. Objects can interact (transfer between accounts)
5. Each object is INDEPENDENT (Rahul's and Priya's accounts are separate)"

💡 THINKING IN OBJECTS:

"When designing a class, ask:
1. What real-world thing am I modeling?
2. What properties does it have? → Instance variables
3. What actions can it perform? → Methods
4. How does it interact with other objects?"`
    }
  ],
  lessonPlan: {
    objectives: [
      "Understand OOP concepts and their real-world importance",
      "Create classes with instance variables",
      "Define and call methods with parameters and return types",
      "Create multiple objects and understand each has its own state",
      "Model real-world entities using classes"
    ],
    timeSplit: [
      { phase: "Warm-up", duration: "10 mins", activity: "Real-world object identification exercise - what objects do you see?" },
      { phase: "Theory", duration: "45 mins", activity: "Classes, objects, instance variables, methods explanation with diagrams" },
      { phase: "Demo", duration: "35 mins", activity: "Live coding: Creating Student, BankAccount classes step by step" },
      { phase: "Practice", duration: "50 mins", activity: "Labs - Creating custom classes (Employee, Product, etc.)" },
      { phase: "Wrap-up", duration: "10 mins", activity: "OOP benefits discussion + preview of constructors" }
    ],
    whiteboardPoints: [
      "Class vs Object diagram (blueprint vs actual house)",
      "Method anatomy breakdown (return type, name, parameters)",
      "Memory visualization - Stack (references) vs Heap (objects)",
      "Instance vs Local variables comparison table"
    ],
    teachingScript: `"Good morning everyone! Today is a BIG day. We're entering the world of Object-Oriented Programming. This is what separates hobbyists from professional developers.

Until now, we wrote code step by step - procedural programming. But real applications are complex. Instagram has users, posts, comments, likes - all interacting. How do we organize this?

The answer is OOP - we model our code like the real world. Just like everything around us is an object with properties and behaviors, we'll create software objects.

By end of today, you'll:
- Understand what makes Java object-oriented
- Create your own classes with properties and methods
- Build multiple objects that work independently
- Start thinking like a software architect!

Let's begin by looking around this room. What objects do you see?"`,
    expectedOutcomes: [
      "Students can design and create simple classes",
      "Students understand object creation and initialization",
      "Students can write methods with different signatures",
      "Students grasp the difference between class and object",
      "Students understand instance vs local variables"
    ],
    commonMistakes: [
      "Forgetting 'new' keyword for object creation - NullPointerException",
      "Confusing class name with object name",
      "Not returning value in non-void method",
      "Calling non-static method without creating object",
      "Wrong parameter order when calling methods",
      "Not storing return value from methods"
    ]
  },
  labs: [
    {
      title: "Lab 6.1: Student Class",
      difficulty: "beginner",
      description: "Create a Student class with basic attributes and methods",
      steps: [
        "Create Student class with name, rollNumber, marks",
        "Add method to display student info",
        "Add method to check if passed (marks >= 40)",
        "Create multiple student objects and test"
      ],
      code: `class Student {
    // Instance Variables
    String name;
    int rollNumber;
    double marks;
    String department;
    
    // Display student information
    void displayInfo() {
        System.out.println("\\n=== Student Details ===");
        System.out.println("Name: " + name);
        System.out.println("Roll No: " + rollNumber);
        System.out.println("Department: " + department);
        System.out.println("Marks: " + marks);
    }
    
    // Check if student passed
    boolean isPassed() {
        return marks >= 40;
    }
    
    // Get grade based on marks
    char getGrade() {
        if (marks >= 90) return 'A';
        else if (marks >= 80) return 'B';
        else if (marks >= 70) return 'C';
        else if (marks >= 60) return 'D';
        else if (marks >= 40) return 'E';
        else return 'F';
    }
    
    // Calculate percentage (assuming max is 100)
    double getPercentage() {
        return marks;
    }
}

public class StudentDemo {
    public static void main(String[] args) {
        // Create first student
        Student s1 = new Student();
        s1.name = "Rahul Sharma";
        s1.rollNumber = 101;
        s1.department = "Computer Science";
        s1.marks = 85.5;
        
        // Create second student
        Student s2 = new Student();
        s2.name = "Priya Patel";
        s2.rollNumber = 102;
        s2.department = "Information Technology";
        s2.marks = 35.0;
        
        // Display info
        s1.displayInfo();
        System.out.println("Passed: " + s1.isPassed());
        System.out.println("Grade: " + s1.getGrade());
        
        s2.displayInfo();
        System.out.println("Passed: " + s2.isPassed());
        System.out.println("Grade: " + s2.getGrade());
    }
}`,
      sampleOutput: "=== Student Details ===\nName: Rahul Sharma\nRoll No: 101\nDepartment: Computer Science\nMarks: 85.5\nPassed: true\nGrade: B"
    },
    {
      title: "Lab 6.2: Rectangle Class",
      difficulty: "beginner",
      description: "Create a Rectangle class with length, width and calculation methods",
      steps: [
        "Create Rectangle class with length and width",
        "Add method to calculate area",
        "Add method to calculate perimeter",
        "Add method to check if it's a square"
      ],
      code: `class Rectangle {
    double length;
    double width;
    
    // Calculate area
    double getArea() {
        return length * width;
    }
    
    // Calculate perimeter
    double getPerimeter() {
        return 2 * (length + width);
    }
    
    // Check if it's a square
    boolean isSquare() {
        return length == width;
    }
    
    // Display rectangle info
    void display() {
        System.out.println("\\n=== Rectangle ===");
        System.out.println("Length: " + length);
        System.out.println("Width: " + width);
        System.out.println("Area: " + getArea());
        System.out.println("Perimeter: " + getPerimeter());
        System.out.println("Is Square: " + isSquare());
    }
    
    // Compare with another rectangle
    boolean isLargerThan(Rectangle other) {
        return this.getArea() > other.getArea();
    }
}

public class RectangleDemo {
    public static void main(String[] args) {
        Rectangle r1 = new Rectangle();
        r1.length = 10;
        r1.width = 5;
        
        Rectangle r2 = new Rectangle();
        r2.length = 7;
        r2.width = 7;
        
        r1.display();
        r2.display();
        
        System.out.println("\\nR1 larger than R2: " + r1.isLargerThan(r2));
    }
}`,
      sampleOutput: "=== Rectangle ===\nLength: 10.0\nWidth: 5.0\nArea: 50.0\nPerimeter: 30.0\nIs Square: false"
    },
    {
      title: "Lab 6.3: BankAccount Class",
      difficulty: "intermediate",
      description: "Create a complete BankAccount class with all operations",
      steps: [
        "Create class with accountNumber, holderName, balance",
        "Add deposit method with validation",
        "Add withdraw method with balance check",
        "Add transfer method between accounts"
      ],
      code: `class BankAccount {
    String accountNumber;
    String holderName;
    double balance;
    String accountType;
    
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("✓ Deposited: ₹" + amount);
            System.out.println("  New Balance: ₹" + balance);
        } else {
            System.out.println("✗ Invalid deposit amount!");
        }
    }
    
    boolean withdraw(double amount) {
        if (amount <= 0) {
            System.out.println("✗ Invalid amount!");
            return false;
        }
        if (amount > balance) {
            System.out.println("✗ Insufficient balance! Available: ₹" + balance);
            return false;
        }
        balance -= amount;
        System.out.println("✓ Withdrawn: ₹" + amount);
        System.out.println("  Remaining: ₹" + balance);
        return true;
    }
    
    boolean transfer(BankAccount recipient, double amount) {
        System.out.println("\\nTransferring ₹" + amount + " to " + recipient.holderName);
        if (this.withdraw(amount)) {
            recipient.deposit(amount);
            return true;
        }
        return false;
    }
    
    void displayBalance() {
        System.out.println("\\n[" + accountNumber + "] " + holderName);
        System.out.println("Balance: ₹" + balance);
    }
}

public class BankDemo {
    public static void main(String[] args) {
        BankAccount acc1 = new BankAccount();
        acc1.accountNumber = "SB001";
        acc1.holderName = "Amit Kumar";
        acc1.balance = 10000;
        
        BankAccount acc2 = new BankAccount();
        acc2.accountNumber = "SB002";
        acc2.holderName = "Neha Singh";
        acc2.balance = 5000;
        
        System.out.println("=== Initial Balances ===");
        acc1.displayBalance();
        acc2.displayBalance();
        
        System.out.println("\\n=== Transactions ===");
        acc1.deposit(5000);
        acc1.withdraw(3000);
        acc1.withdraw(50000); // Should fail
        
        acc1.transfer(acc2, 2000);
        
        System.out.println("\\n=== Final Balances ===");
        acc1.displayBalance();
        acc2.displayBalance();
    }
}`,
      sampleOutput: "=== Initial Balances ===\n[SB001] Amit Kumar\nBalance: ₹10000.0\n..."
    },
    {
      title: "Lab 6.4: Employee Class",
      difficulty: "intermediate",
      description: "Create an Employee class with salary calculations",
      steps: [
        "Create Employee with id, name, basicSalary, department",
        "Calculate HRA (20% of basic), DA (15% of basic)",
        "Calculate tax (10% of gross if > 50000)",
        "Display salary slip"
      ],
      code: `class Employee {
    int empId;
    String name;
    String department;
    double basicSalary;
    
    double calculateHRA() {
        return basicSalary * 0.20;
    }
    
    double calculateDA() {
        return basicSalary * 0.15;
    }
    
    double calculateGross() {
        return basicSalary + calculateHRA() + calculateDA();
    }
    
    double calculateTax() {
        double gross = calculateGross();
        if (gross > 50000) {
            return gross * 0.10;
        }
        return 0;
    }
    
    double calculateNetSalary() {
        return calculateGross() - calculateTax();
    }
    
    void printSalarySlip() {
        System.out.println("\\n╔════════════════════════════════════╗");
        System.out.println("║         SALARY SLIP                ║");
        System.out.println("╠════════════════════════════════════╣");
        System.out.printf("║  Employee ID  : %-18d ║%n", empId);
        System.out.printf("║  Name         : %-18s ║%n", name);
        System.out.printf("║  Department   : %-18s ║%n", department);
        System.out.println("╠════════════════════════════════════╣");
        System.out.println("║  EARNINGS                          ║");
        System.out.printf("║  Basic Salary : ₹%-17.2f ║%n", basicSalary);
        System.out.printf("║  HRA (20%%)    : ₹%-17.2f ║%n", calculateHRA());
        System.out.printf("║  DA (15%%)     : ₹%-17.2f ║%n", calculateDA());
        System.out.printf("║  Gross Salary : ₹%-17.2f ║%n", calculateGross());
        System.out.println("╠════════════════════════════════════╣");
        System.out.println("║  DEDUCTIONS                        ║");
        System.out.printf("║  Tax (10%%)    : ₹%-17.2f ║%n", calculateTax());
        System.out.println("╠════════════════════════════════════╣");
        System.out.printf("║  NET SALARY   : ₹%-17.2f ║%n", calculateNetSalary());
        System.out.println("╚════════════════════════════════════╝");
    }
}

public class EmployeeDemo {
    public static void main(String[] args) {
        Employee e1 = new Employee();
        e1.empId = 1001;
        e1.name = "Rajesh Kumar";
        e1.department = "Engineering";
        e1.basicSalary = 60000;
        
        Employee e2 = new Employee();
        e2.empId = 1002;
        e2.name = "Sunita Sharma";
        e2.department = "Marketing";
        e2.basicSalary = 35000;
        
        e1.printSalarySlip();
        e2.printSalarySlip();
    }
}`
    }
  ],
  assignments: [
    {
      id: 6,
      title: "Library Book Management",
      difficulty: "intermediate",
      problemStatement: "Create a Book class and a simple library system. Book should have: bookId, title, author, price, isAvailable. Methods: display(), checkout(), returnBook(). Create 3 books and simulate borrowing and returning.",
      hints: [
        "Use boolean for isAvailable",
        "checkout() should check availability first",
        "returnBook() should update availability",
        "Handle cases when book is already borrowed"
      ],
      expectedOutput: "Book: Java Programming by James Gosling\nStatus: Available\n\nChecking out 'Java Programming'...\nCheckout successful!\n\nTrying to checkout again...\nSorry, book is not available!\n\nReturning book...\nBook returned successfully!",
      evaluationCriteria: [
        "Class structure is correct",
        "All methods work as expected",
        "Proper validation for checkout/return",
        "Clean output formatting"
      ]
    },
    {
      id: 61,
      title: "Shopping Cart System",
      difficulty: "advanced",
      problemStatement: "Create Product class (id, name, price, quantity) and ShoppingCart class. ShoppingCart should have: items (Product array), addItem(), removeItem(), calculateTotal(), displayCart(). Implement discount: 10% off if total > ₹1000.",
      hints: [
        "Use array of Product for items in cart",
        "Track number of items in cart",
        "addItem should handle adding same product (increase quantity)",
        "Apply discount in calculateTotal"
      ],
      expectedOutput: "=== Shopping Cart ===\n1. Laptop - ₹50000 x 1 = ₹50000\n2. Mouse - ₹500 x 2 = ₹1000\n\nSubtotal: ₹51000\nDiscount (10%): ₹5100\nTotal: ₹45900",
      evaluationCriteria: [
        "Both classes implemented correctly",
        "Cart operations work properly",
        "Discount applied correctly",
        "Edge cases handled"
      ]
    }
  ]
};
