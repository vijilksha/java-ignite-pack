import { DayContent } from '../curriculum';

export const day7: DayContent = {
  day: 7,
  title: "OOPS - Inheritance, Polymorphism",
  description: "extends, super, method overloading, method overriding",
  icon: "🧬",
  pptSlides: [
    {
      title: "What is Inheritance?",
      content: [
        "Child class inherits from parent class",
        "Use 'extends' keyword",
        "Promotes code reuse",
        "IS-A relationship (Dog IS-A Animal)"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Good morning everyone! Yesterday we created classes. Today we learn how to build NEW classes based on EXISTING ones. This is INHERITANCE - one of the most powerful OOP concepts!"

📌 THE FAMILY ANALOGY:

"Think about your family:
- You inherit traits from your parents (height, eye color)
- But you also have your OWN unique traits
- Your parent's traits don't disappear when you're born

In Java, it's the same:
- Child class INHERITS from parent class
- Child gets all parent's variables and methods
- Child can ADD its own unique features
- Child can even MODIFY inherited behavior"

📌 THE IS-A RELATIONSHIP:

"Inheritance creates an IS-A relationship:"

\`\`\`
Dog IS-A Animal       ✓
Car IS-A Vehicle      ✓
Manager IS-A Employee ✓

Car IS-A Animal       ✗ (makes no sense!)
\`\`\`

📌 WHY INHERITANCE?

"Imagine you're building a company HR system:

WITHOUT inheritance:
\`\`\`java
class Manager {
    String name, email, phone;     // Duplicate!
    double salary;                 // Duplicate!
    String department;             // Manager-specific
    int teamSize;                  // Manager-specific
}

class Developer {
    String name, email, phone;     // Duplicate!
    double salary;                 // Duplicate!
    String programmingLanguage;    // Developer-specific
    int experienceYears;           // Developer-specific
}
\`\`\`

WITH inheritance:
\`\`\`java
class Employee {
    String name, email, phone;
    double salary;
}

class Manager extends Employee {
    String department;    // Only unique stuff!
    int teamSize;
}

class Developer extends Employee {
    String programmingLanguage;
    int experienceYears;
}
\`\`\`

Look how much duplication we avoided!"

📌 THE SYNTAX:

\`\`\`java
class Parent {
    // Parent properties and methods
}

class Child extends Parent {
    // Child inherits everything from Parent
    // Plus its own unique stuff
}
\`\`\`

📌 TERMINOLOGY:

\`\`\`
Parent Class  = Superclass = Base Class
Child Class   = Subclass   = Derived Class

          [Animal]           ← Superclass
              ↑
     extends  |
              |
           [Dog]             ← Subclass
\`\`\`

💡 BENEFITS OF INHERITANCE:

"1. CODE REUSE: Write once in parent, use everywhere
2. MAINTAINABILITY: Fix bug in parent, fixed for all children
3. EXTENSIBILITY: Add new features easily
4. NATURAL MODELING: Reflects real-world hierarchies"`,
      analogy: "Like family inheritance - children inherit traits from parents but can have their own unique features too."
    },
    {
      title: "extends Keyword in Action",
      content: [
        "Syntax: class Child extends Parent",
        "Child inherits all non-private members",
        "Child can add new variables and methods",
        "Child can override parent methods"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Let's see inheritance in action with a complete example."

📌 LIVE CODING - ANIMAL HIERARCHY:

\`\`\`java
// Parent class
class Animal {
    String name;
    int age;
    
    void eat() {
        System.out.println(name + " is eating.");
    }
    
    void sleep() {
        System.out.println(name + " is sleeping.");
    }
    
    void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

// Child class
class Dog extends Animal {
    String breed;  // Additional property
    
    void bark() {  // Additional method
        System.out.println(name + " says: Woof! Woof!");
    }
    
    void fetch() {
        System.out.println(name + " is fetching the ball!");
    }
}

// Another child
class Cat extends Animal {
    boolean isIndoor;
    
    void meow() {
        System.out.println(name + " says: Meow!");
    }
    
    void scratch() {
        System.out.println(name + " is scratching the furniture!");
    }
}
\`\`\`

📌 USING THE CLASSES:

\`\`\`java
public class InheritanceDemo {
    public static void main(String[] args) {
        // Create a Dog
        Dog myDog = new Dog();
        myDog.name = "Buddy";      // Inherited from Animal
        myDog.age = 3;             // Inherited from Animal
        myDog.breed = "Labrador";  // Dog's own property
        
        // Dog can use inherited methods
        myDog.eat();         // From Animal: "Buddy is eating."
        myDog.sleep();       // From Animal: "Buddy is sleeping."
        myDog.displayInfo(); // From Animal
        
        // Dog can use its own methods
        myDog.bark();        // From Dog: "Buddy says: Woof! Woof!"
        myDog.fetch();       // From Dog
        
        // Create a Cat
        Cat myCat = new Cat();
        myCat.name = "Whiskers";
        myCat.age = 2;
        myCat.isIndoor = true;
        
        myCat.eat();    // Inherited
        myCat.meow();   // Cat's own
        
        // But Cat CANNOT bark!
        // myCat.bark();  // ERROR! bark() is only in Dog
    }
}
\`\`\`

📌 WHAT GETS INHERITED?

\`\`\` 
✓ INHERITED:
  - public variables
  - protected variables
  - public methods
  - protected methods
  - Default (package-private) if same package

✗ NOT INHERITED:
  - private variables (but they exist in parent)
  - private methods
  - Constructors (but can be called with super())
\`\`\`

📌 MEMORY VISUALIZATION:

\`\`\`
Dog object in memory:
┌─────────────────────────┐
│  ANIMAL PART            │
│  ├── name: "Buddy"      │
│  ├── age: 3             │
│  ├── eat()              │
│  └── sleep()            │
├─────────────────────────┤
│  DOG-SPECIFIC PART      │
│  ├── breed: "Labrador"  │
│  ├── bark()             │
│  └── fetch()            │
└─────────────────────────┘
\`\`\`

"Dog object contains BOTH Animal parts and Dog parts!"

⚠️ JAVA ALLOWS ONLY SINGLE INHERITANCE:

\`\`\`java
class A { }
class B { }
class C extends A { }      // OK - single parent
class D extends A, B { }   // ERROR! No multiple inheritance

// But this is allowed (multilevel):
class Animal { }
class Dog extends Animal { }
class Labrador extends Dog { }  // OK - chain of inheritance
\`\`\``
    },
    {
      title: "The super Keyword",
      content: [
        "super refers to parent class",
        "super.variable - access parent's variable",
        "super.method() - call parent's method",
        "super() - call parent's constructor"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"The 'super' keyword is your way to talk to the parent class from inside the child class."

📌 THREE USES OF super:

\`\`\`java
class Animal {
    String name = "Generic Animal";
    
    Animal() {
        System.out.println("Animal constructor called");
    }
    
    void makeSound() {
        System.out.println("Some generic sound");
    }
}

class Dog extends Animal {
    String name = "Dog";  // Same name as parent's variable!
    
    Dog() {
        super();  // 1. Call parent's constructor
        System.out.println("Dog constructor called");
    }
    
    void displayNames() {
        System.out.println("Child name: " + name);        // Dog
        System.out.println("Parent name: " + super.name); // 2. Access parent's variable
    }
    
    void makeSound() {
        super.makeSound();  // 3. Call parent's method first
        System.out.println("Woof! Woof!");  // Then add own behavior
    }
}
\`\`\`

📌 USE CASE 1: super() - CALLING PARENT CONSTRUCTOR:

\`\`\`java
class Person {
    String name;
    int age;
    
    Person(String name, int age) {
        this.name = name;
        this.age = age;
        System.out.println("Person created: " + name);
    }
}

class Student extends Person {
    int rollNumber;
    
    Student(String name, int age, int roll) {
        super(name, age);  // MUST be first line!
        this.rollNumber = roll;
        System.out.println("Student created with roll: " + roll);
    }
}

// Usage:
Student s = new Student("Rahul", 20, 101);
// Output:
// Person created: Rahul
// Student created with roll: 101
\`\`\`

📌 USE CASE 2: super.variable - WHEN NAMES CONFLICT:

\`\`\`java
class Parent {
    int value = 10;
}

class Child extends Parent {
    int value = 20;  // Same name, shadows parent's
    
    void show() {
        System.out.println("Child value: " + value);        // 20
        System.out.println("Parent value: " + super.value); // 10
    }
}
\`\`\`

📌 USE CASE 3: super.method() - EXTENDING PARENT BEHAVIOR:

\`\`\`java
class Employee {
    void work() {
        System.out.println("Employee is working");
    }
}

class Manager extends Employee {
    void work() {
        super.work();  // First do what employee does
        System.out.println("Manager is also managing the team");
        System.out.println("Manager is conducting meetings");
    }
}

// Usage:
Manager m = new Manager();
m.work();
// Output:
// Employee is working
// Manager is also managing the team
// Manager is conducting meetings
\`\`\`

⚠️ IMPORTANT RULES:

\`\`\`java
// 1. super() must be FIRST statement in constructor
class Child extends Parent {
    Child() {
        System.out.println("Something");  // ERROR!
        super();  // Must be first!
    }
}

// 2. If parent has no default constructor, super() with args is REQUIRED
class Parent {
    Parent(int x) { }  // No default constructor!
}

class Child extends Parent {
    Child() {
        // ERROR! Must call super(someInt);
    }
    
    Child(int value) {
        super(value);  // Correct!
    }
}
\`\`\`

💡 this vs super:

\`\`\`
this                          super
─────────────────────────────────────────
Refers to current object      Refers to parent class
this.variable                 super.variable
this.method()                 super.method()
this()  - call sibling        super() - call parent
        constructor                   constructor
\`\`\``
    },
    {
      title: "Method Overloading (Compile-time Polymorphism)",
      content: [
        "Same method name, different parameters",
        "Parameters differ in: number, type, or order",
        "Return type alone cannot differentiate",
        "Decided at compile time"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Now let's talk about POLYMORPHISM - one of the four OOP pillars. The word means 'many forms'. There are TWO types, and we'll start with OVERLOADING."

📌 WHAT IS METHOD OVERLOADING?

"Method overloading means having MULTIPLE methods with the SAME NAME but DIFFERENT parameters in the SAME class."

\`\`\`java
class Calculator {
    // Same name 'add', different parameters
    
    int add(int a, int b) {
        return a + b;
    }
    
    int add(int a, int b, int c) {  // Different NUMBER of params
        return a + b + c;
    }
    
    double add(double a, double b) {  // Different TYPE of params
        return a + b;
    }
    
    String add(String a, String b) {  // Different TYPE
        return a + b;  // Concatenation
    }
}
\`\`\`

📌 THE REAL-WORLD ANALOGY:

"Think about the word 'open':
- Open a door → Push/pull
- Open a book → Flip pages
- Open a jar → Twist lid
- Open a file → Double-click

Same word, different actions based on CONTEXT!"

📌 RULES FOR OVERLOADING:

\`\`\`java
✓ VALID OVERLOADING (parameters differ):
  - Different NUMBER of parameters
  - Different TYPE of parameters
  - Different ORDER of types

✗ INVALID (not overloading):
  - Only return type differs
  - Only parameter NAMES differ
\`\`\`

📌 EXAMPLES:

\`\`\`java
class Display {
    // Valid overloading
    void show(int x) { }
    void show(double x) { }
    void show(String x) { }
    void show(int x, int y) { }
    void show(int x, double y) { }
    void show(double x, int y) { }  // Order matters!
    
    // INVALID - only parameter name differs
    // void show(int a) { }  // Same as show(int x) - ERROR!
    
    // INVALID - only return type differs
    // int show(int x) { }   // Same parameters as void show(int x) - ERROR!
}
\`\`\`

📌 LIVE DEMO - PRINT UTILITY:

\`\`\`java
class Printer {
    void print(String message) {
        System.out.println(message);
    }
    
    void print(String message, int times) {
        for (int i = 0; i < times; i++) {
            System.out.println(message);
        }
    }
    
    void print(String message, boolean uppercase) {
        if (uppercase) {
            System.out.println(message.toUpperCase());
        } else {
            System.out.println(message);
        }
    }
    
    void print(int[] numbers) {
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}

// Usage:
Printer p = new Printer();
p.print("Hello");              // Uses first version
p.print("Hi", 3);              // Uses second version
p.print("world", true);        // Uses third version
p.print(new int[]{1, 2, 3});   // Uses fourth version
\`\`\`

📌 REAL-WORLD EXAMPLE - System.out.println():

"You've been using overloading all along!"

\`\`\`java
System.out.println();           // No parameter
System.out.println("Hello");    // String
System.out.println(42);         // int
System.out.println(3.14);       // double
System.out.println(true);       // boolean
System.out.println(myObject);   // Object
\`\`\`

"println has MANY overloaded versions!"

💡 WHY IS IT CALLED COMPILE-TIME POLYMORPHISM?

"The compiler decides WHICH method to call based on the arguments you pass. It's resolved at COMPILE time, not when the program runs."

\`\`\`java
add(5, 10);      // Compiler picks: add(int, int)
add(5.0, 10.0);  // Compiler picks: add(double, double)
add("a", "b");   // Compiler picks: add(String, String)
\`\`\``
    },
    {
      title: "Method Overriding (Runtime Polymorphism)",
      content: [
        "Child provides specific implementation of parent's method",
        "Same method signature as parent",
        "Use @Override annotation (recommended)",
        "Decided at runtime based on object type"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Now let's learn OVERRIDING - when a child class provides its OWN version of a parent's method."

📌 OVERLOADING vs OVERRIDING:

\`\`\`
OVERLOADING                    OVERRIDING
──────────────────────────────────────────────────────
Same class                     Parent-Child relationship
Different parameters           SAME parameters
Compile-time polymorphism      Runtime polymorphism
Add new behaviors              Modify inherited behavior
\`\`\`

📌 THE REAL-WORLD ANALOGY:

"Think about 'speak':
- Animal speaks → generic sound
- Dog speaks → Woof!
- Cat speaks → Meow!
- Cow speaks → Moo!

The child OVERRIDES what 'speak' means for that specific animal."

📌 SYNTAX AND EXAMPLE:

\`\`\`java
class Animal {
    void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

class Dog extends Animal {
    @Override  // Annotation - tells compiler we intend to override
    void makeSound() {
        System.out.println("Woof! Woof!");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow!");
    }
}

class Cow extends Animal {
    @Override
    void makeSound() {
        System.out.println("Moo!");
    }
}
\`\`\`

📌 RUNTIME POLYMORPHISM IN ACTION:

\`\`\`java
public class PolymorphismDemo {
    public static void main(String[] args) {
        // Parent reference, child objects
        Animal myAnimal;
        
        myAnimal = new Dog();
        myAnimal.makeSound();  // Output: Woof! Woof!
        
        myAnimal = new Cat();
        myAnimal.makeSound();  // Output: Meow!
        
        myAnimal = new Cow();
        myAnimal.makeSound();  // Output: Moo!
        
        // Powerful: Array of animals
        Animal[] animals = {new Dog(), new Cat(), new Cow(), new Dog()};
        
        for (Animal a : animals) {
            a.makeSound();  // Each calls its own version!
        }
    }
}
\`\`\`

📌 WHY RUNTIME POLYMORPHISM?

"Notice: Animal myAnimal = new Dog();

The REFERENCE type is Animal, but the OBJECT type is Dog.
At RUNTIME, Java looks at the actual object (Dog) to decide which makeSound() to call!"

📌 RULES FOR OVERRIDING:

\`\`\`java
1. Method name MUST be same
2. Parameters MUST be same
3. Return type must be same (or covariant - subtype)
4. Access modifier can be SAME or LESS restrictive
   - Parent: protected → Child: protected or public ✓
   - Parent: public → Child: protected ✗ (more restrictive!)
5. Cannot override static, final, or private methods
\`\`\`

📌 THE @Override ANNOTATION:

\`\`\`java
class Animal {
    void makeSound() { }
}

class Dog extends Animal {
    @Override
    void makeSound() { }  // Correct!
    
    @Override
    void makesound() { }  // ERROR! Typo caught by @Override
}
\`\`\`

"@Override is optional but HIGHLY recommended - it catches typos!"

📌 COMPLETE PRACTICAL EXAMPLE:

\`\`\`java
class Employee {
    String name;
    double baseSalary;
    
    double calculateSalary() {
        return baseSalary;
    }
    
    void displayInfo() {
        System.out.println("Employee: " + name);
        System.out.println("Salary: ₹" + calculateSalary());
    }
}

class Manager extends Employee {
    double bonus;
    
    @Override
    double calculateSalary() {
        return baseSalary + bonus;  // Manager gets bonus
    }
}

class Developer extends Employee {
    int overtimeHours;
    double overtimeRate = 500;
    
    @Override
    double calculateSalary() {
        return baseSalary + (overtimeHours * overtimeRate);
    }
}

// Usage
Employee[] staff = new Employee[3];
staff[0] = new Employee();
staff[0].name = "John"; 
staff[0].baseSalary = 30000;

Manager m = new Manager();
m.name = "Alice";
m.baseSalary = 50000;
m.bonus = 10000;
staff[1] = m;

Developer d = new Developer();
d.name = "Bob";
d.baseSalary = 40000;
d.overtimeHours = 10;
staff[2] = d;

for (Employee e : staff) {
    e.displayInfo();  // Each calculates salary differently!
}
\`\`\``
    },
    {
      title: "Putting It Together - Inheritance Hierarchy",
      content: [
        "Designing class hierarchies",
        "When to use inheritance",
        "Common mistakes to avoid",
        "Best practices"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Let's put everything together and learn when and how to design good inheritance hierarchies."

📌 COMPLETE HIERARCHY EXAMPLE:

\`\`\`java
// Base class
class Vehicle {
    String brand;
    String model;
    int year;
    double fuelCapacity;
    
    void start() {
        System.out.println("Vehicle starting...");
    }
    
    void stop() {
        System.out.println("Vehicle stopping...");
    }
    
    void displayInfo() {
        System.out.println(year + " " + brand + " " + model);
    }
}

// First level children
class Car extends Vehicle {
    int numDoors;
    String transmissionType;
    
    @Override
    void start() {
        System.out.println("Turn key/Press button to start car");
        System.out.println(brand + " " + model + " engine purring...");
    }
    
    void openTrunk() {
        System.out.println("Trunk opened");
    }
}

class Motorcycle extends Vehicle {
    boolean hasSidecar;
    String handleType;
    
    @Override
    void start() {
        System.out.println("Kick start the motorcycle");
        System.out.println(brand + " " + model + " engine roaring...");
    }
    
    void wheelie() {
        System.out.println("Doing a wheelie!");
    }
}

// Second level - multilevel inheritance
class ElectricCar extends Car {
    double batteryCapacity;
    int chargingTime;
    
    @Override
    void start() {
        System.out.println("Press button to start silently");
        System.out.println(brand + " " + model + " ready (no engine sound!)");
    }
    
    void charge() {
        System.out.println("Charging... will take " + chargingTime + " hours");
    }
}
\`\`\`

📌 USING THE HIERARCHY:

\`\`\`java
public class VehicleDemo {
    public static void main(String[] args) {
        Vehicle[] fleet = new Vehicle[3];
        
        Car sedan = new Car();
        sedan.brand = "Toyota";
        sedan.model = "Camry";
        sedan.year = 2023;
        sedan.numDoors = 4;
        fleet[0] = sedan;
        
        Motorcycle bike = new Motorcycle();
        bike.brand = "Harley";
        bike.model = "Davidson";
        bike.year = 2022;
        fleet[1] = bike;
        
        ElectricCar tesla = new ElectricCar();
        tesla.brand = "Tesla";
        tesla.model = "Model 3";
        tesla.year = 2024;
        tesla.batteryCapacity = 75;
        fleet[2] = tesla;
        
        // Polymorphism in action
        for (Vehicle v : fleet) {
            v.displayInfo();
            v.start();
            System.out.println();
        }
    }
}
\`\`\`

📌 WHEN TO USE INHERITANCE:

\`\`\`
USE INHERITANCE when:
✓ There's a clear IS-A relationship
✓ Child is a specialized version of parent
✓ You want to share code among related classes
✓ You need runtime polymorphism

DON'T USE when:
✗ Just to reuse some code (use composition instead)
✗ Classes are unrelated (Car IS-A Engine? NO!)
✗ Too deep hierarchies (prefer flat)
\`\`\`

📌 COMPOSITION vs INHERITANCE:

\`\`\`java
// INHERITANCE - Car IS-A Vehicle
class Car extends Vehicle { }

// COMPOSITION - Car HAS-A Engine (better for this case!)
class Car {
    Engine engine;  // Car contains an Engine
    
    void start() {
        engine.start();
    }
}

class Engine {
    void start() {
        System.out.println("Engine starting...");
    }
}
\`\`\`

"Rule of thumb: Prefer composition over inheritance when in doubt.
Use inheritance only for true IS-A relationships."

📌 COMMON MISTAKES:

\`\`\`java
// 1. Too deep hierarchies
Animal → Mammal → Dog → Labrador → ChocolateLabrador
// Hard to maintain! Keep it shallow.

// 2. Breaking IS-A
class Square extends Rectangle { }  // Problem: Square IS-A Rectangle?
// If you change width, height should change too - breaks Rectangle contract!

// 3. Inheriting for wrong reasons
class Stack extends ArrayList { }  // Stack is NOT an ArrayList!
// Better: class Stack { private ArrayList list; }
\`\`\`

💡 BEST PRACTICES:

"1. Keep hierarchies shallow (2-3 levels max)
2. Use @Override annotation always
3. Follow Liskov Substitution: child should work anywhere parent works
4. Don't inherit just for code reuse
5. Consider 'final' for classes/methods not meant to be overridden"`
    }
  ],
  lessonPlan: {
    objectives: [
      "Understand inheritance and the IS-A relationship",
      "Use extends keyword to create child classes",
      "Use super keyword to access parent members",
      "Implement method overloading (compile-time polymorphism)",
      "Implement method overriding (runtime polymorphism)",
      "Design proper class hierarchies"
    ],
    timeSplit: [
      { phase: "Warm-up", duration: "10 mins", activity: "Recap classes and objects + discuss real-world inheritance examples" },
      { phase: "Theory", duration: "45 mins", activity: "Inheritance, super keyword, overloading vs overriding" },
      { phase: "Demo", duration: "35 mins", activity: "Animal hierarchy, Employee system live coding" },
      { phase: "Practice", duration: "50 mins", activity: "Labs with Vehicle, Shape, Employee hierarchies" },
      { phase: "Wrap-up", duration: "10 mins", activity: "IS-A vs HAS-A discussion + preview of abstraction" }
    ],
    whiteboardPoints: [
      "Inheritance hierarchy diagram (Animal → Dog, Cat)",
      "super keyword three uses",
      "Overloading vs Overriding comparison table",
      "Memory layout of inherited object"
    ],
    teachingScript: `"Good morning everyone! Yesterday we created our own classes. Today we'll learn to BUILD on existing classes - that's INHERITANCE.

Think about it: In real life, you don't design a car from scratch. You take an existing car design and modify it - add features, change things.

Inheritance lets us do the same in code:
- Create a base class with common features
- Extend it to create specialized versions
- Override behaviors when needed

We'll also learn POLYMORPHISM - how one method can behave differently depending on the object. Like how 'speak' means different things for a dog vs a cat.

By end of today, you'll build class hierarchies like:
- Animal → Dog, Cat, Bird
- Employee → Manager, Developer, Designer

Let's start with the concept of inheritance..."`
    ,
    expectedOutcomes: [
      "Students can create inheritance hierarchies",
      "Students understand and use super keyword correctly",
      "Students differentiate between overloading and overriding",
      "Students implement runtime polymorphism",
      "Students design appropriate class relationships"
    ],
    commonMistakes: [
      "Forgetting super() call in child constructor",
      "Confusing overloading with overriding",
      "Trying multiple inheritance (not allowed in Java)",
      "Not using @Override annotation",
      "Making methods more restrictive when overriding"
    ]
  },
  labs: [
    {
      title: "Lab 7.1: Animal Hierarchy",
      difficulty: "beginner",
      description: "Create Animal parent class with Dog, Cat, Bird children",
      steps: [
        "Create Animal class with name, age, makeSound()",
        "Create Dog, Cat, Bird extending Animal",
        "Override makeSound() in each child",
        "Create array of Animals and demonstrate polymorphism"
      ],
      code: `class Animal {
    String name;
    int age;
    
    void eat() {
        System.out.println(name + " is eating.");
    }
    
    void sleep() {
        System.out.println(name + " is sleeping.");
    }
    
    void makeSound() {
        System.out.println(name + " makes a sound.");
    }
}

class Dog extends Animal {
    String breed;
    
    @Override
    void makeSound() {
        System.out.println(name + " says: Woof! Woof!");
    }
    
    void fetch() {
        System.out.println(name + " is fetching the ball!");
    }
}

class Cat extends Animal {
    boolean isIndoor;
    
    @Override
    void makeSound() {
        System.out.println(name + " says: Meow!");
    }
    
    void purr() {
        System.out.println(name + " is purring...");
    }
}

class Bird extends Animal {
    double wingspan;
    
    @Override
    void makeSound() {
        System.out.println(name + " says: Tweet tweet!");
    }
    
    void fly() {
        System.out.println(name + " is flying!");
    }
}

public class AnimalDemo {
    public static void main(String[] args) {
        Animal[] zoo = new Animal[4];
        
        Dog dog = new Dog();
        dog.name = "Buddy";
        dog.age = 3;
        dog.breed = "Labrador";
        zoo[0] = dog;
        
        Cat cat = new Cat();
        cat.name = "Whiskers";
        cat.age = 2;
        zoo[1] = cat;
        
        Bird bird = new Bird();
        bird.name = "Tweety";
        bird.age = 1;
        zoo[2] = bird;
        
        zoo[3] = new Animal();
        zoo[3].name = "Generic Animal";
        
        System.out.println("=== Zoo Animals ===\n");
        for (Animal a : zoo) {
            a.makeSound();
        }
    }
}`,
      sampleOutput: `=== Zoo Animals ===

Buddy says: Woof! Woof!
Whiskers says: Meow!
Tweety says: Tweet tweet!
Generic Animal makes a sound.`
    },
    {
      title: "Lab 7.2: Shape Hierarchy with Method Overloading",
      difficulty: "intermediate",
      description: "Create shapes with overloaded area calculation methods",
      steps: [
        "Create Shape base class",
        "Create Circle, Rectangle, Triangle children",
        "Override calculateArea() in each",
        "Add overloaded print() methods"
      ],
      code: `class Shape {
    String color;
    
    double calculateArea() {
        return 0;
    }
    
    void display() {
        System.out.println("A " + color + " shape");
    }
}

class Circle extends Shape {
    double radius;
    
    @Override
    double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    void display() {
        System.out.println("Circle - Radius: " + radius + ", Color: " + color);
        System.out.printf("Area: %.2f%n", calculateArea());
    }
}

class Rectangle extends Shape {
    double length;
    double width;
    
    @Override
    double calculateArea() {
        return length * width;
    }
    
    @Override
    void display() {
        System.out.println("Rectangle - " + length + " x " + width + ", Color: " + color);
        System.out.printf("Area: %.2f%n", calculateArea());
    }
}

class Triangle extends Shape {
    double base;
    double height;
    
    @Override
    double calculateArea() {
        return 0.5 * base * height;
    }
    
    @Override
    void display() {
        System.out.println("Triangle - Base: " + base + ", Height: " + height);
        System.out.printf("Area: %.2f%n", calculateArea());
    }
}

public class ShapeDemo {
    public static void main(String[] args) {
        Shape[] shapes = new Shape[3];
        
        Circle c = new Circle();
        c.radius = 5;
        c.color = "Red";
        shapes[0] = c;
        
        Rectangle r = new Rectangle();
        r.length = 10;
        r.width = 5;
        r.color = "Blue";
        shapes[1] = r;
        
        Triangle t = new Triangle();
        t.base = 8;
        t.height = 6;
        t.color = "Green";
        shapes[2] = t;
        
        double totalArea = 0;
        System.out.println("=== Shapes ===\n");
        for (Shape s : shapes) {
            s.display();
            totalArea += s.calculateArea();
            System.out.println();
        }
        
        System.out.printf("Total area of all shapes: %.2f%n", totalArea);
    }
}`
    },
    {
      title: "Lab 7.3: Calculator with Method Overloading",
      difficulty: "beginner",
      description: "Create calculator with multiple overloaded methods",
      steps: [
        "Create Calculator class",
        "Overload add() for 2, 3, 4 integers",
        "Overload add() for doubles",
        "Overload add() for arrays"
      ],
      code: `class Calculator {
    // Overloaded add methods
    int add(int a, int b) {
        System.out.println("Adding 2 integers");
        return a + b;
    }
    
    int add(int a, int b, int c) {
        System.out.println("Adding 3 integers");
        return a + b + c;
    }
    
    int add(int a, int b, int c, int d) {
        System.out.println("Adding 4 integers");
        return a + b + c + d;
    }
    
    double add(double a, double b) {
        System.out.println("Adding 2 doubles");
        return a + b;
    }
    
    int add(int[] numbers) {
        System.out.println("Adding array of " + numbers.length + " integers");
        int sum = 0;
        for (int n : numbers) {
            sum += n;
        }
        return sum;
    }
    
    String add(String a, String b) {
        System.out.println("Concatenating 2 strings");
        return a + b;
    }
    
    // Overloaded multiply methods
    int multiply(int a, int b) {
        return a * b;
    }
    
    double multiply(double a, double b) {
        return a * b;
    }
}

public class CalculatorDemo {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        
        System.out.println("=== Method Overloading Demo ===\n");
        
        System.out.println("Result: " + calc.add(5, 10));
        System.out.println();
        
        System.out.println("Result: " + calc.add(5, 10, 15));
        System.out.println();
        
        System.out.println("Result: " + calc.add(5.5, 10.5));
        System.out.println();
        
        System.out.println("Result: " + calc.add(new int[]{1, 2, 3, 4, 5}));
        System.out.println();
        
        System.out.println("Result: " + calc.add("Hello ", "World!"));
    }
}`
    }
  ],
  assignments: [
    {
      id: 7,
      title: "Employee Hierarchy System",
      difficulty: "intermediate",
      problemStatement: "Create an Employee base class with: name, id, baseSalary, calculateSalary(). Create Manager (has bonus), Developer (has overtimeHours at ₹500/hr), and Intern (fixed stipend, no baseSalary). Override calculateSalary() appropriately. Create 5 employees of different types and calculate total payroll.",
      hints: [
        "Manager salary = base + bonus",
        "Developer salary = base + (overtime × rate)",
        "Intern salary = fixed stipend only",
        "Use array of Employee type for polymorphism",
        "Loop through array to calculate total"
      ],
      expectedOutput: `=== Payroll Report ===

Manager: Alice - ₹60,000
Developer: Bob - ₹45,000
Developer: Carol - ₹42,500
Manager: Dave - ₹75,000
Intern: Eve - ₹15,000

Total Payroll: ₹2,37,500`,
      evaluationCriteria: [
        "Proper inheritance hierarchy",
        "Correct method overriding",
        "Polymorphism used with Employee array",
        "All salary calculations correct",
        "Clean formatted output"
      ]
    },
    {
      id: 71,
      title: "Banking Account Types",
      difficulty: "advanced",
      problemStatement: "Create BankAccount base class. Create SavingsAccount (4% interest on balance > ₹10,000), CurrentAccount (no interest, ₹500 overdraft fee if balance goes negative), and FixedDeposit (6% interest, penalty for early withdrawal). Implement deposit(), withdraw(), calculateInterest() with appropriate overriding.",
      hints: [
        "SavingsAccount: interest only if balance > 10000",
        "CurrentAccount: allow negative balance but charge fee",
        "FixedDeposit: track duration, penalize early withdrawal",
        "Use super.withdraw() where appropriate"
      ],
      expectedOutput: `Savings Account - Balance: ₹15,000 - Interest: ₹600
Current Account - Balance: -₹500 - Overdraft Fee Applied
Fixed Deposit - Balance: ₹100,000 - Interest: ₹6,000`,
      evaluationCriteria: [
        "Three account types implemented",
        "Interest calculations correct",
        "Overdraft handling correct",
        "Early withdrawal penalty works"
      ]
    }
  ]
};
