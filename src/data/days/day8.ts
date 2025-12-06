import { DayContent } from '../curriculum';

export const day8: DayContent = {
  day: 8,
  title: "OOPS - Abstraction, Encapsulation",
  description: "abstract classes, interfaces, access modifiers, getters/setters",
  icon: "🔐",
  pptSlides: [
    {
      title: "What is Abstraction?",
      content: [
        "Hiding complex implementation details",
        "Showing only essential features",
        "Achieved through abstract classes and interfaces",
        "Focus on WHAT, not HOW"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Good morning! Today we complete the four pillars of OOP with Abstraction and Encapsulation. These are what make professional code truly professional."

📌 THE CAR DRIVING ANALOGY:

"When you drive a car:
- You know: steering wheel, accelerator, brake
- You DON'T know: how fuel injection works, how ABS calculates brake force

You interact with a SIMPLE INTERFACE while complex stuff is HIDDEN. That's ABSTRACTION!"

📌 WHAT IS ABSTRACTION?

"Abstraction means:
- Hiding the 'how' (implementation)
- Exposing the 'what' (interface)
- User sees simplified view

Real examples:
- TV Remote: Press button → Channel changes (you don't know the signal processing)
- ATM: Enter PIN → Get cash (you don't know the banking network)
- Phone: Tap contact → Call connects (you don't know cell tower routing)"

📌 TWO WAYS TO ACHIEVE ABSTRACTION:

\`\`\`
1. ABSTRACT CLASSES (partial abstraction)
   - Can have abstract AND concrete methods
   - Can have instance variables
   - Single inheritance only
   
2. INTERFACES (full abstraction)
   - Only abstract methods (before Java 8)
   - No instance variables (only constants)
   - Multiple inheritance supported
\`\`\`

📌 ABSTRACT CLASS SYNTAX:

\`\`\`java
abstract class Shape {
    String color;
    
    // Abstract method - NO body, child MUST implement
    abstract double calculateArea();
    
    // Concrete method - has body, child inherits
    void displayColor() {
        System.out.println("Color: " + color);
    }
}

class Circle extends Shape {
    double radius;
    
    @Override
    double calculateArea() {
        return Math.PI * radius * radius;
    }
}
\`\`\`

📌 KEY RULES:

\`\`\`
ABSTRACT CLASS RULES:
1. Cannot create objects of abstract class
   Shape s = new Shape();  // ERROR!
   
2. CAN have constructors (called by child)

3. Abstract method has no body - ends with semicolon
   abstract void doSomething();
   
4. If class has ANY abstract method, class MUST be abstract

5. Child MUST implement all abstract methods (or be abstract too)
\`\`\`

💡 WHEN TO USE ABSTRACT CLASS:

"Use abstract class when:
- You have a common base with shared code
- Some methods should be implemented by children
- You need instance variables
- You want to provide partial implementation"`,
      analogy: "Abstraction is like a car - you know how to drive it (interface) without knowing how the engine works (implementation)."
    },
    {
      title: "Abstract Classes in Practice",
      content: [
        "abstract keyword for class and methods",
        "Cannot instantiate abstract classes",
        "Child classes must implement abstract methods",
        "Can have constructors and concrete methods"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Let's build a complete example with abstract classes."

📌 COMPLETE EXAMPLE - EMPLOYEE SYSTEM:

\`\`\`java
abstract class Employee {
    String name;
    int id;
    double baseSalary;
    
    // Constructor
    Employee(String name, int id, double baseSalary) {
        this.name = name;
        this.id = id;
        this.baseSalary = baseSalary;
    }
    
    // Abstract method - MUST be implemented by child
    abstract double calculateSalary();
    
    // Abstract method
    abstract String getDesignation();
    
    // Concrete method - inherited as-is
    void displayInfo() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Designation: " + getDesignation());
        System.out.println("Salary: ₹" + calculateSalary());
    }
}

class Manager extends Employee {
    double bonus;
    
    Manager(String name, int id, double baseSalary, double bonus) {
        super(name, id, baseSalary);
        this.bonus = bonus;
    }
    
    @Override
    double calculateSalary() {
        return baseSalary + bonus;
    }
    
    @Override
    String getDesignation() {
        return "Manager";
    }
}

class Developer extends Employee {
    int overtimeHours;
    static final double OVERTIME_RATE = 500;
    
    Developer(String name, int id, double baseSalary, int overtime) {
        super(name, id, baseSalary);
        this.overtimeHours = overtime;
    }
    
    @Override
    double calculateSalary() {
        return baseSalary + (overtimeHours * OVERTIME_RATE);
    }
    
    @Override
    String getDesignation() {
        return "Developer";
    }
}
\`\`\`

📌 USING ABSTRACT CLASSES:

\`\`\`java
public class AbstractDemo {
    public static void main(String[] args) {
        // Employee e = new Employee(...);  // ERROR! Cannot instantiate
        
        // But we CAN use Employee as reference type
        Employee[] team = new Employee[2];
        
        team[0] = new Manager("Alice", 101, 50000, 10000);
        team[1] = new Developer("Bob", 102, 40000, 20);
        
        System.out.println("=== Team Details ===\\n");
        for (Employee e : team) {
            e.displayInfo();
            System.out.println();
        }
    }
}
\`\`\`

📌 OUTPUT:

\`\`\`
=== Team Details ===

ID: 101
Name: Alice
Designation: Manager
Salary: ₹60000.0

ID: 102
Name: Bob
Designation: Developer
Salary: ₹50000.0
\`\`\`

📌 ABSTRACT CLASS WITH CONSTRUCTOR:

\`\`\`java
abstract class Animal {
    String name;
    
    // Abstract class CAN have constructor
    Animal(String name) {
        this.name = name;
        System.out.println("Animal constructor called");
    }
    
    abstract void makeSound();
}

class Dog extends Animal {
    Dog(String name) {
        super(name);  // Calls parent constructor
        System.out.println("Dog constructor called");
    }
    
    @Override
    void makeSound() {
        System.out.println(name + " says Woof!");
    }
}

// Usage:
Dog d = new Dog("Buddy");
// Output:
// Animal constructor called
// Dog constructor called
\`\`\`

⚠️ COMMON MISTAKES:

\`\`\`java
// 1. Trying to instantiate abstract class
abstract class Shape { }
Shape s = new Shape();  // ERROR!

// 2. Forgetting to implement abstract methods
abstract class Animal {
    abstract void sound();
}
class Dog extends Animal { }  // ERROR! Must implement sound()

// 3. Abstract method with body
abstract void calculate() {  // ERROR! No body allowed
    return 0;
}
\`\`\``
    },
    {
      title: "Interfaces - Complete Abstraction",
      content: [
        "interface keyword",
        "All methods are implicitly public abstract",
        "All variables are public static final",
        "Class implements interface (can implement multiple)"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"If abstract class is PARTIAL abstraction, interface is FULL abstraction. It's a CONTRACT that says 'any class that implements me MUST have these methods.'"

📌 THE CONTRACT ANALOGY:

"An interface is like a job contract:
- It specifies WHAT you must do
- It doesn't tell you HOW to do it
- You sign it (implement), you're bound to fulfill it

Example: 'Drawable' interface says you MUST have draw() method
- Circle implements Drawable → must have draw()
- Square implements Drawable → must have draw()
- Car implements Drawable → must have draw()

Each implements draw() differently, but the contract is fulfilled!"

📌 INTERFACE SYNTAX:

\`\`\`java
interface Drawable {
    // All methods are public abstract by default
    void draw();
    void resize(int factor);
    
    // All variables are public static final by default
    int MAX_SIZE = 100;  // constant
}

class Circle implements Drawable {
    @Override
    public void draw() {  // MUST be public
        System.out.println("Drawing a circle");
    }
    
    @Override
    public void resize(int factor) {
        System.out.println("Resizing circle by " + factor);
    }
}
\`\`\`

📌 MULTIPLE INTERFACES:

\`\`\`java
interface Playable {
    void play();
    void pause();
}

interface Recordable {
    void record();
    void stop();
}

// Class can implement MULTIPLE interfaces!
class MediaPlayer implements Playable, Recordable {
    @Override
    public void play() {
        System.out.println("Playing media");
    }
    
    @Override
    public void pause() {
        System.out.println("Pausing media");
    }
    
    @Override
    public void record() {
        System.out.println("Recording started");
    }
    
    @Override
    public void stop() {
        System.out.println("Recording stopped");
    }
}
\`\`\`

📌 INTERFACE vs ABSTRACT CLASS:

\`\`\`
┌────────────────────┬────────────────────┬────────────────────┐
│                    │   ABSTRACT CLASS   │     INTERFACE      │
├────────────────────┼────────────────────┼────────────────────┤
│ Keyword            │ abstract class     │ interface          │
│ Methods            │ Abstract + Concrete│ Only abstract*     │
│ Variables          │ Any type           │ Only constants     │
│ Constructor        │ Yes                │ No                 │
│ Inheritance        │ extends (single)   │ implements (multi) │
│ Access modifiers   │ Any                │ public only        │
│ Use when           │ Related classes    │ Unrelated classes  │
│                    │ share code         │ share behavior     │
└────────────────────┴────────────────────┴────────────────────┘
* Java 8+ allows default and static methods
\`\`\`

📌 REAL-WORLD EXAMPLE:

\`\`\`java
interface Flyable {
    void fly();
    void land();
}

interface Swimmable {
    void swim();
    void dive();
}

// Bird can fly
class Bird implements Flyable {
    public void fly() { System.out.println("Bird flying"); }
    public void land() { System.out.println("Bird landing"); }
}

// Fish can swim
class Fish implements Swimmable {
    public void swim() { System.out.println("Fish swimming"); }
    public void dive() { System.out.println("Fish diving"); }
}

// Duck can do BOTH!
class Duck implements Flyable, Swimmable {
    public void fly() { System.out.println("Duck flying"); }
    public void land() { System.out.println("Duck landing"); }
    public void swim() { System.out.println("Duck swimming"); }
    public void dive() { System.out.println("Duck diving"); }
}
\`\`\`

💡 WHEN TO USE INTERFACE:

"Use interface when:
- Unrelated classes need same behavior
- You need multiple inheritance
- You want to define a contract
- You want loose coupling"`
    },
    {
      title: "What is Encapsulation?",
      content: [
        "Bundling data and methods together",
        "Restricting direct access to data",
        "Using access modifiers (private, protected, public)",
        "Accessing via getters and setters"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Now let's talk about ENCAPSULATION - protecting your data from unauthorized access."

📌 THE CAPSULE ANALOGY:

"Think of a medicine capsule:
- The medicine (data) is INSIDE the capsule
- The capsule (class) PROTECTS the medicine
- You can't directly touch the medicine
- You take it through a CONTROLLED way (swallowing)

Encapsulation is the same - wrap data in a class and control access!"

📌 WHY ENCAPSULATION?

"Without encapsulation:"

\`\`\`java
class BankAccount {
    double balance;  // Anyone can access!
}

BankAccount acc = new BankAccount();
acc.balance = -10000;  // Negative balance? No validation!
acc.balance = 999999999;  // Suddenly rich? No audit trail!
\`\`\`

"With encapsulation:"

\`\`\`java
class BankAccount {
    private double balance;  // Hidden!
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            logTransaction("Deposit", amount);
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            logTransaction("Withdraw", amount);
            return true;
        }
        return false;
    }
    
    public double getBalance() {
        return balance;  // Read-only access
    }
}
\`\`\`

📌 ACCESS MODIFIERS:

\`\`\`
┌────────────┬────────────┬────────────┬────────────┬────────────┐
│  Modifier  │ Same Class │ Same Pkg   │ Subclass   │ Everywhere │
├────────────┼────────────┼────────────┼────────────┼────────────┤
│ private    │    ✓       │    ✗       │    ✗       │    ✗       │
│ default    │    ✓       │    ✓       │    ✗       │    ✗       │
│ protected  │    ✓       │    ✓       │    ✓       │    ✗       │
│ public     │    ✓       │    ✓       │    ✓       │    ✓       │
└────────────┴────────────┴────────────┴────────────┴────────────┘
\`\`\`

📌 VISIBILITY ANALOGY:

\`\`\`
private   → Your bedroom - only you can access
default   → Your house - family members can access
protected → Your family (including married kids in different cities)
public    → Public park - anyone can access
\`\`\`

📌 THE ENCAPSULATION PATTERN:

\`\`\`java
class Student {
    // 1. Make variables PRIVATE
    private String name;
    private int age;
    private double marks;
    
    // 2. Provide PUBLIC getters (read access)
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public double getMarks() {
        return marks;
    }
    
    // 3. Provide PUBLIC setters with VALIDATION (write access)
    public void setName(String name) {
        if (name != null && !name.isEmpty()) {
            this.name = name;
        }
    }
    
    public void setAge(int age) {
        if (age > 0 && age < 150) {
            this.age = age;
        }
    }
    
    public void setMarks(double marks) {
        if (marks >= 0 && marks <= 100) {
            this.marks = marks;
        }
    }
}
\`\`\`

💡 BENEFITS OF ENCAPSULATION:

"1. DATA HIDING: Internal data is protected
2. VALIDATION: Control what values are set
3. FLEXIBILITY: Change internal implementation without affecting users
4. READ-ONLY/WRITE-ONLY: Can make properties read-only (no setter)
5. DEBUGGING: Single point of access makes debugging easier"`
    },
    {
      title: "Getters and Setters in Practice",
      content: [
        "Getter: Returns the value (getXxx)",
        "Setter: Sets the value with validation (setXxx)",
        "Boolean getter can use isXxx",
        "Can have computed/derived properties"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Let's master getters and setters with practical examples."

📌 NAMING CONVENTIONS:

\`\`\`java
class Person {
    private String name;
    private int age;
    private boolean active;
    
    // Getter for String/Object: getName()
    public String getName() {
        return name;
    }
    
    // Setter: setName(value)
    public void setName(String name) {
        this.name = name;
    }
    
    // Getter for int: getAge()
    public int getAge() {
        return age;
    }
    
    // Boolean getter: isActive() (not getActive)
    public boolean isActive() {
        return active;
    }
    
    // Boolean setter: setActive()
    public void setActive(boolean active) {
        this.active = active;
    }
}
\`\`\`

📌 VALIDATION IN SETTERS:

\`\`\`java
class Employee {
    private String email;
    private double salary;
    private String department;
    
    public void setEmail(String email) {
        // Validate email format
        if (email != null && email.contains("@") && email.contains(".")) {
            this.email = email.toLowerCase();
        } else {
            System.out.println("Invalid email format!");
        }
    }
    
    public void setSalary(double salary) {
        // Salary cannot be negative
        if (salary >= 0) {
            this.salary = salary;
        } else {
            System.out.println("Salary cannot be negative!");
        }
    }
    
    public void setDepartment(String dept) {
        // Only allow valid departments
        String[] validDepts = {"IT", "HR", "Finance", "Marketing"};
        for (String valid : validDepts) {
            if (valid.equalsIgnoreCase(dept)) {
                this.department = dept;
                return;
            }
        }
        System.out.println("Invalid department!");
    }
}
\`\`\`

📌 READ-ONLY AND WRITE-ONLY:

\`\`\`java
class User {
    private String id;       // Read-only (set only in constructor)
    private String password; // Write-only (no getter for security)
    private String name;     // Read-write
    
    public User(String id) {
        this.id = id;  // Set only once
    }
    
    // READ-ONLY: Only getter, no setter
    public String getId() {
        return id;
    }
    
    // WRITE-ONLY: Only setter, no getter
    public void setPassword(String password) {
        // Store hashed password
        this.password = hashPassword(password);
    }
    
    // READ-WRITE: Both getter and setter
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
\`\`\`

📌 COMPUTED PROPERTIES:

\`\`\`java
class Rectangle {
    private double length;
    private double width;
    
    // Regular getters
    public double getLength() { return length; }
    public double getWidth() { return width; }
    
    // Setters with validation
    public void setLength(double length) {
        if (length > 0) this.length = length;
    }
    public void setWidth(double width) {
        if (width > 0) this.width = width;
    }
    
    // COMPUTED property - no corresponding variable!
    public double getArea() {
        return length * width;
    }
    
    public double getPerimeter() {
        return 2 * (length + width);
    }
    
    public boolean isSquare() {
        return length == width;
    }
}

// Usage:
Rectangle r = new Rectangle();
r.setLength(10);
r.setWidth(5);
System.out.println("Area: " + r.getArea());  // Computed on the fly!
\`\`\`

📌 COMPLETE ENCAPSULATED CLASS:

\`\`\`java
class BankAccount {
    private String accountNumber;
    private String holderName;
    private double balance;
    private boolean active;
    
    // Constructor
    public BankAccount(String accountNumber, String holderName) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = 0;
        this.active = true;
    }
    
    // Getters
    public String getAccountNumber() { return accountNumber; }
    public String getHolderName() { return holderName; }
    public double getBalance() { return balance; }
    public boolean isActive() { return active; }
    
    // Controlled operations instead of direct setters
    public void deposit(double amount) {
        if (active && amount > 0) {
            balance += amount;
        }
    }
    
    public boolean withdraw(double amount) {
        if (active && amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }
    
    public void deactivate() {
        this.active = false;
    }
}
\`\`\`

"Notice: No setBalance()! Balance should only change through deposit/withdraw."`
    }
  ],
  lessonPlan: {
    objectives: [
      "Understand abstraction and its importance",
      "Create and use abstract classes",
      "Define and implement interfaces",
      "Apply encapsulation with access modifiers",
      "Write proper getters and setters with validation"
    ],
    timeSplit: [
      { phase: "Warm-up", duration: "10 mins", activity: "Recap inheritance + discuss real-world abstraction examples" },
      { phase: "Theory", duration: "50 mins", activity: "Abstract classes, interfaces, encapsulation, access modifiers" },
      { phase: "Demo", duration: "30 mins", activity: "Live coding: Shape interface, BankAccount encapsulation" },
      { phase: "Practice", duration: "50 mins", activity: "Labs implementing interfaces and encapsulated classes" },
      { phase: "Wrap-up", duration: "10 mins", activity: "When to use abstract class vs interface discussion" }
    ],
    whiteboardPoints: [
      "Abstract class vs Interface comparison table",
      "Access modifiers visibility diagram",
      "Encapsulation pattern: private variables + public getters/setters",
      "Real-world interface examples (USB, Power outlet)"
    ],
    teachingScript: `"Good morning everyone! Today we complete the four pillars of OOP with Abstraction and Encapsulation.

Think about your phone. You use it every day - tap, swipe, call. But do you know how the touchscreen registers your finger? How the cellular signal reaches the tower? No, and you don't need to! That complexity is HIDDEN from you. That's ABSTRACTION.

Now think about your bank account. Can anyone directly change your balance? No! You have to go through deposit/withdraw operations that verify, validate, and log. That's ENCAPSULATION - protecting data and controlling access.

Today you'll learn:
- Abstract classes - partial blueprints that force children to implement certain methods
- Interfaces - contracts that classes must fulfill
- Access modifiers - controlling who can see what
- Getters and setters - the proper way to access private data

These concepts separate amateur code from professional code. Let's begin!"`,
    expectedOutcomes: [
      "Students can create abstract classes and interfaces",
      "Students understand when to use each",
      "Students apply proper access modifiers",
      "Students write encapsulated classes with validation",
      "Students understand the benefits of data hiding"
    ],
    commonMistakes: [
      "Trying to instantiate abstract class",
      "Forgetting to implement all abstract methods",
      "Not making interface method implementations public",
      "Making instance variables public instead of private",
      "Not adding validation in setters"
    ]
  },
  labs: [
    {
      title: "Lab 8.1: Shape Interface",
      difficulty: "beginner",
      description: "Create Drawable and Resizable interfaces for shapes",
      steps: [
        "Create Drawable interface with draw() method",
        "Create Resizable interface with resize(factor) method",
        "Create Circle and Rectangle implementing both",
        "Demonstrate interface polymorphism"
      ],
      code: `interface Drawable {
    void draw();
}

interface Resizable {
    void resize(double factor);
}

class Circle implements Drawable, Resizable {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    public double getRadius() {
        return radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing Circle with radius: " + radius);
    }
    
    @Override
    public void resize(double factor) {
        radius *= factor;
        System.out.println("Circle resized. New radius: " + radius);
    }
}

class Rectangle implements Drawable, Resizable {
    private double length;
    private double width;
    
    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing Rectangle: " + length + " x " + width);
    }
    
    @Override
    public void resize(double factor) {
        length *= factor;
        width *= factor;
        System.out.println("Rectangle resized: " + length + " x " + width);
    }
}

public class InterfaceDemo {
    public static void main(String[] args) {
        Drawable[] shapes = {new Circle(5), new Rectangle(10, 5)};
        
        System.out.println("=== Drawing Shapes ===");
        for (Drawable d : shapes) {
            d.draw();
        }
        
        System.out.println("\\n=== Resizing Shapes ===");
        Resizable[] resizables = {new Circle(5), new Rectangle(10, 5)};
        for (Resizable r : resizables) {
            r.resize(2);
        }
    }
}`,
      sampleOutput: "=== Drawing Shapes ===\nDrawing Circle with radius: 5.0\nDrawing Rectangle: 10.0 x 5.0\n\n=== Resizing Shapes ===\nCircle resized. New radius: 10.0\nRectangle resized: 20.0 x 10.0"
    },
    {
      title: "Lab 8.2: Encapsulated Student Class",
      difficulty: "intermediate",
      description: "Create fully encapsulated Student class with validation",
      steps: [
        "Private variables: name, age, marks, email",
        "Validation: age 5-100, marks 0-100, email contains @",
        "Computed property: getGrade() based on marks",
        "toString() method for display"
      ],
      code: `class Student {
    private String name;
    private int age;
    private double marks;
    private String email;
    
    // Constructor
    public Student(String name) {
        setName(name);
    }
    
    // Getters
    public String getName() { return name; }
    public int getAge() { return age; }
    public double getMarks() { return marks; }
    public String getEmail() { return email; }
    
    // Setters with validation
    public void setName(String name) {
        if (name != null && name.length() >= 2) {
            this.name = name;
        } else {
            System.out.println("Invalid name! Min 2 characters.");
        }
    }
    
    public void setAge(int age) {
        if (age >= 5 && age <= 100) {
            this.age = age;
        } else {
            System.out.println("Invalid age! Must be 5-100.");
        }
    }
    
    public void setMarks(double marks) {
        if (marks >= 0 && marks <= 100) {
            this.marks = marks;
        } else {
            System.out.println("Invalid marks! Must be 0-100.");
        }
    }
    
    public void setEmail(String email) {
        if (email != null && email.contains("@") && email.contains(".")) {
            this.email = email.toLowerCase();
        } else {
            System.out.println("Invalid email format!");
        }
    }
    
    // Computed properties
    public char getGrade() {
        if (marks >= 90) return 'A';
        if (marks >= 80) return 'B';
        if (marks >= 70) return 'C';
        if (marks >= 60) return 'D';
        return 'F';
    }
    
    public boolean isPassed() {
        return marks >= 40;
    }
    
    @Override
    public String toString() {
        return "Student{name='" + name + "', age=" + age + 
               ", marks=" + marks + ", grade=" + getGrade() + 
               ", passed=" + isPassed() + ", email='" + email + "'}";
    }
}

public class StudentDemo {
    public static void main(String[] args) {
        Student s = new Student("Rahul");
        s.setAge(20);
        s.setMarks(85);
        s.setEmail("rahul@email.com");
        
        System.out.println(s);
        
        // Test validation
        System.out.println("\\n--- Testing Validation ---");
        s.setAge(-5);      // Should fail
        s.setMarks(150);   // Should fail
        s.setEmail("bad"); // Should fail
    }
}`
    },
    {
      title: "Lab 8.3: Abstract Vehicle System",
      difficulty: "intermediate",
      description: "Create abstract Vehicle class with Car and Motorcycle implementations",
      steps: [
        "Abstract Vehicle with abstract methods: start(), stop(), fuelEfficiency()",
        "Concrete method: displayInfo()",
        "Car and Motorcycle extending Vehicle",
        "Each with unique properties and method implementations"
      ],
      code: `abstract class Vehicle {
    protected String brand;
    protected String model;
    protected int year;
    protected double fuelCapacity;
    
    public Vehicle(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    
    // Abstract methods
    abstract void start();
    abstract void stop();
    abstract double getFuelEfficiency();  // km per liter
    
    // Concrete method
    void displayInfo() {
        System.out.println(year + " " + brand + " " + model);
        System.out.println("Fuel Capacity: " + fuelCapacity + "L");
        System.out.println("Fuel Efficiency: " + getFuelEfficiency() + " km/L");
        System.out.println("Range: " + (fuelCapacity * getFuelEfficiency()) + " km");
    }
}

class Car extends Vehicle {
    private int numDoors;
    private boolean isAutomatic;
    
    public Car(String brand, String model, int year, int doors, boolean auto) {
        super(brand, model, year);
        this.numDoors = doors;
        this.isAutomatic = auto;
        this.fuelCapacity = 50;
    }
    
    @Override
    void start() {
        System.out.println("Insert key / Press button");
        System.out.println(brand + " " + model + " engine started!");
    }
    
    @Override
    void stop() {
        System.out.println("Turn key off / Press button");
        System.out.println("Engine stopped.");
    }
    
    @Override
    double getFuelEfficiency() {
        return isAutomatic ? 12 : 15;  // Automatic less efficient
    }
    
    @Override
    void displayInfo() {
        super.displayInfo();
        System.out.println("Doors: " + numDoors);
        System.out.println("Transmission: " + (isAutomatic ? "Automatic" : "Manual"));
    }
}

class Motorcycle extends Vehicle {
    private int cc;
    
    public Motorcycle(String brand, String model, int year, int cc) {
        super(brand, model, year);
        this.cc = cc;
        this.fuelCapacity = 15;
    }
    
    @Override
    void start() {
        System.out.println("Kick start or electric start");
        System.out.println(brand + " " + model + " engine roaring!");
    }
    
    @Override
    void stop() {
        System.out.println("Turn key off");
        System.out.println("Engine stopped.");
    }
    
    @Override
    double getFuelEfficiency() {
        return cc < 200 ? 50 : 30;  // Smaller cc = more efficient
    }
}

public class VehicleDemo {
    public static void main(String[] args) {
        Vehicle[] vehicles = {
            new Car("Toyota", "Camry", 2023, 4, true),
            new Motorcycle("Harley", "Davidson", 2022, 1200)
        };
        
        for (Vehicle v : vehicles) {
            System.out.println("\\n=== " + v.brand + " " + v.model + " ===");
            v.displayInfo();
            System.out.println();
            v.start();
            v.stop();
        }
    }
}`
    }
  ],
  assignments: [
    {
      id: 8,
      title: "Payment System with Interfaces",
      difficulty: "intermediate",
      problemStatement: "Create a Payable interface with processPayment(double amount) and getPaymentDetails(). Implement: CreditCard (has limit check), DebitCard (checks balance), UPI (has linked account). Create PaymentProcessor class that can process any Payable.",
      hints: [
        "Each payment method has different validation",
        "CreditCard: check if amount <= availableLimit",
        "DebitCard: check if amount <= balance",
        "UPI: simulate OTP verification",
        "PaymentProcessor works with Payable interface"
      ],
      expectedOutput: "Processing payment of ₹5000...\nCreditCard: Checking limit... Approved!\nTransaction ID: CC-12345\n\nProcessing ₹10000 via UPI...\nOTP verified. Payment successful!\n\nDebitCard: Insufficient balance!",
      evaluationCriteria: [
        "Interface properly defined",
        "All payment methods implement interface",
        "Validation logic correct",
        "Polymorphism demonstrated"
      ]
    },
    {
      id: 81,
      title: "Secure Employee Management",
      difficulty: "advanced",
      problemStatement: "Create encapsulated Employee class with: private id (read-only), name, email (validated), salary (can only increase, not decrease), department (from fixed list). Add audit log for any changes. Implement Comparable interface to sort by salary.",
      hints: [
        "ID set only in constructor",
        "Email validation with regex or basic checks",
        "Salary setter rejects decreases",
        "Keep ArrayList of change logs",
        "compareTo() compares salaries"
      ],
      expectedOutput: "Employee created: E001 - John\nSalary updated: 50000 → 60000\nAttempt to decrease salary rejected!\n\n=== Audit Log ===\n2024-01-15: Salary changed to 60000\n2024-01-16: Department changed to IT",
      evaluationCriteria: [
        "All fields properly encapsulated",
        "Validation works correctly",
        "Audit log records changes",
        "Comparable implemented",
        "Sorted list works"
      ]
    }
  ]
};
