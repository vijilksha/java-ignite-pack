import { DayContent } from '../curriculum';

export const day9: DayContent = {
  day: 9,
  title: "Constructors, Static, This, Super",
  description: "Constructor types, static members, this and super keywords",
  icon: "⚙️",
  pptSlides: [
    {
      title: "What are Constructors?",
      content: [
        "Special method to initialize objects",
        "Same name as class, no return type",
        "Called automatically when new object created",
        "Can be overloaded (multiple constructors)"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Good morning! Today we're diving deep into constructors - the special methods that bring objects to life, and some essential keywords every Java developer must master."

📌 THE BIRTH ANALOGY:

"When a baby is born, certain things happen immediately:
- Baby gets a name
- Baby is assigned a gender
- Birth certificate is created with date/time
- Initial health checks are done

A constructor does the same for objects - it INITIALIZES the object when it's 'born' (created)."

📌 CONSTRUCTOR vs METHOD:

\`\`\`java
class Car {
    String brand;
    
    // This is a CONSTRUCTOR
    Car() {
        brand = "Unknown";
        System.out.println("Car created!");
    }
    
    // This is a METHOD
    void start() {
        System.out.println("Starting " + brand);
    }
}

// Differences:
// ┌─────────────────────┬────────────────────┐
// │    CONSTRUCTOR      │      METHOD        │
// ├─────────────────────┼────────────────────┤
// │ Same name as class  │ Any valid name     │
// │ No return type      │ Has return type    │
// │ Called by 'new'     │ Called on object   │
// │ Initializes object  │ Performs actions   │
// │ Cannot be inherited │ Can be inherited   │
// └─────────────────────┴────────────────────┘
\`\`\`

📌 DEFAULT CONSTRUCTOR:

"If you don't write any constructor, Java provides one automatically:"

\`\`\`java
class Student {
    String name;
    int age;
    // No constructor written - Java adds:
    // Student() { } (empty default constructor)
}

Student s = new Student();  // Works! Uses default constructor
\`\`\`

"BUT if you write ANY constructor, Java won't add the default one!"

\`\`\`java
class Student {
    String name;
    
    Student(String name) {  // Only parameterized constructor
        this.name = name;
    }
}

Student s = new Student();  // ERROR! No default constructor
Student s = new Student("John");  // OK!
\`\`\`

📌 TYPES OF CONSTRUCTORS:

\`\`\`java
class Employee {
    String name;
    int id;
    double salary;
    
    // 1. DEFAULT CONSTRUCTOR (no parameters)
    Employee() {
        name = "Unknown";
        id = 0;
        salary = 0;
    }
    
    // 2. PARAMETERIZED CONSTRUCTOR
    Employee(String name, int id, double salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    
    // 3. PARTIAL PARAMETERIZED
    Employee(String name, int id) {
        this.name = name;
        this.id = id;
        this.salary = 30000;  // Default salary
    }
    
    // 4. COPY CONSTRUCTOR (creates copy of another object)
    Employee(Employee other) {
        this.name = other.name;
        this.id = other.id;
        this.salary = other.salary;
    }
}
\`\`\`

📌 CONSTRUCTOR CHAINING WITH this():

\`\`\`java
class Student {
    String name;
    int age;
    String grade;
    
    Student() {
        this("Unknown", 0, "N/A");  // Calls 3-param constructor
    }
    
    Student(String name) {
        this(name, 18, "A");  // Calls 3-param constructor
    }
    
    Student(String name, int age, String grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}
\`\`\`

⚠️ IMPORTANT RULES:

\`\`\`java
// this() must be FIRST statement
Student(String name) {
    System.out.println("Hi");  // ERROR!
    this(name, 18, "A");       // Must be first!
}

// Can't have both this() and super()
Child() {
    this(10);    // ERROR! Can't have both
    super();     // Only one can be first
}
\`\`\``
    },
    {
      title: "The 'this' Keyword",
      content: [
        "this refers to current object",
        "this.variable - distinguish from parameter",
        "this.method() - call current object's method",
        "this() - call another constructor"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"The 'this' keyword is your way to refer to the CURRENT object - the one that's executing the code."

📌 THE "YOURSELF" ANALOGY:

"When you say 'my name', you're referring to YOUR OWN name, not someone else's.
'this' in Java means 'myself' - the current object."

📌 USE CASE 1: DISAMBIGUATION

"When parameter name matches instance variable name:"

\`\`\`java
class Person {
    String name;  // Instance variable
    int age;      // Instance variable
    
    void setDetails(String name, int age) {  // Parameters
        // Problem: Which 'name' is which?
        name = name;       // WRONG! Parameter = parameter (useless)
        
        this.name = name;  // CORRECT! Instance variable = parameter
        this.age = age;    // 'this' clarifies which is which
    }
}
\`\`\`

📌 USE CASE 2: CALLING CURRENT OBJECT'S METHOD

\`\`\`java
class Calculator {
    int result;
    
    void add(int value) {
        result += value;
        this.display();  // Calls display() on THIS object
        // Same as: display();
    }
    
    void display() {
        System.out.println("Result: " + this.result);
    }
}
\`\`\`

📌 USE CASE 3: RETURNING CURRENT OBJECT (METHOD CHAINING)

\`\`\`java
class StringBuilder {
    String text = "";
    
    StringBuilder append(String s) {
        text += s;
        return this;  // Return this object for chaining
    }
    
    StringBuilder appendLine(String s) {
        text += s + "\\n";
        return this;
    }
    
    String build() {
        return text;
    }
}

// Usage - Method chaining!
String result = new StringBuilder()
    .append("Hello ")
    .append("World")
    .appendLine("!")
    .append("Java")
    .build();
\`\`\`

📌 USE CASE 4: PASSING CURRENT OBJECT AS ARGUMENT

\`\`\`java
class Employee {
    String name;
    
    Employee(String name) {
        this.name = name;
    }
    
    void registerWith(Company company) {
        company.addEmployee(this);  // Pass THIS employee to company
    }
}

class Company {
    void addEmployee(Employee e) {
        System.out.println(e.name + " added to company");
    }
}

// Usage:
Employee emp = new Employee("John");
Company comp = new Company();
emp.registerWith(comp);  // John added to company
\`\`\`

📌 USE CASE 5: CONSTRUCTOR CHAINING

\`\`\`java
class Book {
    String title;
    String author;
    double price;
    
    Book() {
        this("Untitled", "Unknown", 0);  // Calls 3-param constructor
    }
    
    Book(String title) {
        this(title, "Unknown", 0);  // Calls 3-param constructor
    }
    
    Book(String title, String author, double price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}
\`\`\`

⚠️ this() RULES:

"1. Must be FIRST statement in constructor
2. Cannot use this() in a method (only constructors)
3. Cannot have both this() and super() in same constructor"`
    },
    {
      title: "The 'static' Keyword",
      content: [
        "static members belong to class, not objects",
        "Shared among all objects of the class",
        "Accessed using ClassName.member",
        "Static methods cannot use 'this' or instance members"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"The 'static' keyword creates members that belong to the CLASS itself, not to any specific object."

📌 THE SHARED WHITEBOARD ANALOGY:

"In a classroom:
- Each student has their OWN notebook (instance variables)
- There's ONE shared whiteboard (static variables)

If teacher writes on whiteboard, ALL students see the same thing.
If a student writes in their notebook, only THEY see it."

📌 STATIC vs INSTANCE:

\`\`\`java
class Student {
    // INSTANCE variables - each student has their own
    String name;
    int rollNumber;
    
    // STATIC variable - shared by ALL students
    static String schoolName = "ABC School";
    static int totalStudents = 0;
    
    Student(String name, int roll) {
        this.name = name;
        this.rollNumber = roll;
        totalStudents++;  // Increment for each new student
    }
}

// Usage:
Student s1 = new Student("John", 1);
Student s2 = new Student("Jane", 2);
Student s3 = new Student("Bob", 3);

System.out.println(Student.totalStudents);  // 3 (shared)
System.out.println(Student.schoolName);     // ABC School (shared)

System.out.println(s1.name);  // John (individual)
System.out.println(s2.name);  // Jane (individual)
\`\`\`

📌 MEMORY VISUALIZATION:

\`\`\`
Class Area (shared)          Heap (individual objects)
┌──────────────────┐         ┌─────────────────┐
│ Student class    │         │ s1 object       │
│ ├── schoolName   │         │ ├── name: John  │
│ │   "ABC School" │         │ └── roll: 1     │
│ └── totalStudents│         └─────────────────┘
│     = 3          │         ┌─────────────────┐
└──────────────────┘         │ s2 object       │
                             │ ├── name: Jane  │
                             │ └── roll: 2     │
                             └─────────────────┘
\`\`\`

📌 STATIC METHODS:

\`\`\`java
class MathUtils {
    // Static method - no object needed
    static int add(int a, int b) {
        return a + b;
    }
    
    static int max(int a, int b) {
        return a > b ? a : b;
    }
    
    static double PI = 3.14159;
}

// Usage - no object creation needed!
int sum = MathUtils.add(5, 3);
int bigger = MathUtils.max(10, 20);
double pi = MathUtils.PI;
\`\`\`

📌 STATIC METHOD RESTRICTIONS:

\`\`\`java
class Example {
    int instanceVar = 10;
    static int staticVar = 20;
    
    static void staticMethod() {
        // Can access static members
        System.out.println(staticVar);     // OK
        
        // CANNOT access instance members
        // System.out.println(instanceVar);   // ERROR!
        // System.out.println(this.instanceVar); // ERROR! No 'this'
        // instanceMethod();  // ERROR! Need object
    }
    
    void instanceMethod() {
        // Can access BOTH static and instance
        System.out.println(instanceVar);   // OK
        System.out.println(staticVar);     // OK
        staticMethod();                    // OK
    }
}
\`\`\`

📌 COMMON STATIC USAGE:

\`\`\`java
// 1. Utility methods (Math class)
Math.sqrt(16);
Math.random();
Math.abs(-5);

// 2. Factory methods
Integer.parseInt("123");
String.valueOf(42);

// 3. Constants
Math.PI;
Integer.MAX_VALUE;

// 4. Counters/trackers
static int objectCount = 0;
\`\`\`

📌 STATIC BLOCK:

\`\`\`java
class Database {
    static Connection connection;
    
    // Static block - runs once when class is loaded
    static {
        System.out.println("Loading database driver...");
        connection = createConnection();
        System.out.println("Database ready!");
    }
    
    static Connection createConnection() {
        return new Connection();
    }
}
\`\`\`

💡 WHEN TO USE STATIC:

"Use static for:
- Utility methods that don't need object state
- Constants shared by all objects
- Counters/trackers for all instances
- Factory methods that create objects"`
    },
    {
      title: "The 'super' Keyword (Revisited)",
      content: [
        "Refers to parent class",
        "super.variable - access parent's hidden variable",
        "super.method() - call parent's overridden method",
        "super() - call parent's constructor"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"We touched on 'super' in inheritance. Let's now master all its uses."

📌 super() - CALLING PARENT CONSTRUCTOR:

\`\`\`java
class Animal {
    String name;
    int age;
    
    Animal() {
        System.out.println("Animal no-arg constructor");
    }
    
    Animal(String name, int age) {
        this.name = name;
        this.age = age;
        System.out.println("Animal parameterized constructor");
    }
}

class Dog extends Animal {
    String breed;
    
    Dog() {
        super();  // Calls Animal() - optional, added automatically
        System.out.println("Dog no-arg constructor");
    }
    
    Dog(String name, int age, String breed) {
        super(name, age);  // Calls Animal(String, int)
        this.breed = breed;
        System.out.println("Dog parameterized constructor");
    }
}

// Output when: Dog d = new Dog("Buddy", 3, "Lab");
// Animal parameterized constructor
// Dog parameterized constructor
\`\`\`

📌 IMPLICIT super():

"If you don't call super(), Java adds super() (no-args) automatically:"

\`\`\`java
class Child extends Parent {
    Child() {
        // super();  ← Java adds this automatically!
        System.out.println("Child");
    }
}

// BUT if parent has NO default constructor:
class Parent {
    Parent(int x) { }  // Only parameterized
}

class Child extends Parent {
    Child() {
        // super();  ← Auto-added, but Parent() doesn't exist!
        // ERROR: no suitable constructor
    }
    
    Child(int x) {
        super(x);  // MUST explicitly call
    }
}
\`\`\`

📌 super.variable - ACCESS PARENT'S VARIABLE:

\`\`\`java
class Parent {
    String name = "Parent";
}

class Child extends Parent {
    String name = "Child";  // Same name - shadows parent's
    
    void display() {
        System.out.println(name);        // Child
        System.out.println(this.name);   // Child
        System.out.println(super.name);  // Parent
    }
}
\`\`\`

📌 super.method() - CALL PARENT'S METHOD:

\`\`\`java
class Animal {
    void makeSound() {
        System.out.println("Some sound");
    }
    
    void describe() {
        System.out.println("I am an animal");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof!");
    }
    
    @Override
    void describe() {
        super.describe();  // First call parent's version
        System.out.println("Specifically, I am a dog");
    }
    
    void bothSounds() {
        super.makeSound();  // "Some sound"
        this.makeSound();   // "Woof!"
    }
}
\`\`\`

📌 COMPLETE EXAMPLE:

\`\`\`java
class Employee {
    String name;
    double baseSalary;
    
    Employee(String name, double baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    
    double calculateSalary() {
        return baseSalary;
    }
    
    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Base Salary: " + baseSalary);
    }
}

class Manager extends Employee {
    double bonus;
    
    Manager(String name, double baseSalary, double bonus) {
        super(name, baseSalary);  // Initialize parent
        this.bonus = bonus;
    }
    
    @Override
    double calculateSalary() {
        return super.calculateSalary() + bonus;  // Parent's calculation + bonus
    }
    
    @Override
    void displayInfo() {
        super.displayInfo();  // Parent's display
        System.out.println("Bonus: " + bonus);
        System.out.println("Total: " + calculateSalary());
    }
}
\`\`\`

📌 this vs super COMPARISON:

\`\`\`
┌─────────────────────┬─────────────────────┐
│        this         │        super        │
├─────────────────────┼─────────────────────┤
│ Current object      │ Parent class        │
│ this.variable       │ super.variable      │
│ this.method()       │ super.method()      │
│ this() constructor  │ super() constructor │
│ Can chain in same   │ Can chain to parent │
│ class               │ class               │
└─────────────────────┴─────────────────────┘
\`\`\``
    },
    {
      title: "Putting It All Together",
      content: [
        "Complete example using all concepts",
        "Constructor chaining with this() and super()",
        "Static members with instance interaction",
        "Best practices"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Let's create a comprehensive example that uses constructors, this, super, and static together."

📌 COMPLETE EMPLOYEE MANAGEMENT SYSTEM:

\`\`\`java
class Employee {
    // Static members - shared by all
    private static int nextId = 1000;
    private static int employeeCount = 0;
    protected static String companyName = "TechCorp";
    
    // Instance members - individual
    protected int employeeId;
    protected String name;
    protected double salary;
    
    // Static method
    public static int getEmployeeCount() {
        return employeeCount;
    }
    
    public static void setCompanyName(String name) {
        companyName = name;
    }
    
    // Constructors
    public Employee() {
        this("Unknown", 30000);  // Chain to parameterized
    }
    
    public Employee(String name) {
        this(name, 30000);  // Chain to parameterized
    }
    
    public Employee(String name, double salary) {
        this.employeeId = nextId++;  // Auto-generate ID
        this.name = name;
        this.salary = salary;
        employeeCount++;
        System.out.println("Employee created: " + this.name + " (ID: " + this.employeeId + ")");
    }
    
    // Copy constructor
    public Employee(Employee other) {
        this(other.name, other.salary);
        System.out.println("Copy created from: " + other.name);
    }
    
    public double calculateSalary() {
        return salary;
    }
    
    public void displayInfo() {
        System.out.println("\\n=== Employee Info ===");
        System.out.println("Company: " + companyName);
        System.out.println("ID: " + employeeId);
        System.out.println("Name: " + name);
        System.out.println("Salary: ₹" + calculateSalary());
    }
}

class Manager extends Employee {
    private double bonus;
    private String department;
    
    public Manager() {
        super();  // Calls Employee()
        this.department = "General";
        this.bonus = 0;
    }
    
    public Manager(String name, double salary, String dept, double bonus) {
        super(name, salary);  // Calls Employee(String, double)
        this.department = dept;
        this.bonus = bonus;
    }
    
    @Override
    public double calculateSalary() {
        return super.calculateSalary() + bonus;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();  // Call parent's display
        System.out.println("Department: " + department);
        System.out.println("Bonus: ₹" + bonus);
        System.out.println("Total Package: ₹" + calculateSalary());
    }
    
    public void conductMeeting() {
        System.out.println(this.name + " is conducting a meeting");
    }
}

class Developer extends Employee {
    private String technology;
    private int overtimeHours;
    private static final double OVERTIME_RATE = 500;
    
    public Developer(String name, double salary, String tech) {
        super(name, salary);
        this.technology = tech;
        this.overtimeHours = 0;
    }
    
    public void addOvertime(int hours) {
        this.overtimeHours += hours;
    }
    
    @Override
    public double calculateSalary() {
        return super.calculateSalary() + (overtimeHours * OVERTIME_RATE);
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Technology: " + technology);
        System.out.println("Overtime: " + overtimeHours + " hrs (₹" + (overtimeHours * OVERTIME_RATE) + ")");
    }
}

public class EmployeeDemo {
    public static void main(String[] args) {
        System.out.println("=== Employee Management System ===\\n");
        
        Employee.setCompanyName("TechCorp Inc.");
        
        Manager mgr = new Manager("Alice", 70000, "Engineering", 15000);
        Developer dev1 = new Developer("Bob", 50000, "Java");
        Developer dev2 = new Developer("Carol", 55000, "Python");
        
        dev1.addOvertime(10);
        dev2.addOvertime(5);
        
        System.out.println("\\nTotal Employees: " + Employee.getEmployeeCount());
        
        mgr.displayInfo();
        dev1.displayInfo();
        dev2.displayInfo();
        
        mgr.conductMeeting();
    }
}
\`\`\`

📌 OUTPUT:

\`\`\`
=== Employee Management System ===

Employee created: Alice (ID: 1000)
Employee created: Bob (ID: 1001)
Employee created: Carol (ID: 1002)

Total Employees: 3

=== Employee Info ===
Company: TechCorp Inc.
ID: 1000
Name: Alice
Salary: ₹85000.0
Department: Engineering
Bonus: ₹15000.0
Total Package: ₹85000.0
...
\`\`\`

💡 KEY TAKEAWAYS:

"1. Static for shared data (nextId, count, companyName)
2. this() for constructor chaining within same class
3. super() for calling parent constructor
4. this.variable when parameter shadows instance variable
5. super.method() when extending parent's behavior"`
    }
  ],
  lessonPlan: {
    objectives: [
      "Master constructor types and constructor chaining",
      "Use 'this' keyword in all its contexts",
      "Understand static members and when to use them",
      "Apply 'super' keyword for inheritance scenarios",
      "Combine all concepts in real applications"
    ],
    timeSplit: [
      { phase: "Warm-up", duration: "10 mins", activity: "Recap OOP concepts + constructor quiz" },
      { phase: "Theory", duration: "50 mins", activity: "Constructors, this, static, super in depth" },
      { phase: "Demo", duration: "30 mins", activity: "Live coding: Complete class hierarchy with all concepts" },
      { phase: "Practice", duration: "50 mins", activity: "Labs building complex class structures" },
      { phase: "Wrap-up", duration: "10 mins", activity: "Summary of keywords and when to use each" }
    ],
    whiteboardPoints: [
      "Constructor vs Method comparison table",
      "this vs super comparison",
      "Static vs Instance memory diagram",
      "Constructor chaining flow"
    ],
    teachingScript: `"Good morning everyone! Today we master some fundamental Java keywords that you'll use in every project.

Think about when you're born - you get a name, birthdate, citizenship. That initialization happens through CONSTRUCTORS.

When you refer to 'myself', that's like 'this' keyword.
When you refer to 'my parents', that's like 'super' keyword.
When something belongs to your whole family, not just you, that's like 'static'.

These concepts tie together everything we've learned about OOP. By the end of today, you'll be able to:
- Create flexible constructors with chaining
- Use this and super appropriately
- Design classes with proper static vs instance decisions

Let's start with constructors - the birth givers of objects!"`,
    expectedOutcomes: [
      "Students can create multiple overloaded constructors",
      "Students implement constructor chaining with this() and super()",
      "Students correctly use this for disambiguation and method chaining",
      "Students understand static vs instance member differences",
      "Students apply super in inheritance hierarchies"
    ],
    commonMistakes: [
      "Forgetting this() and super() must be first statement",
      "Trying to have both this() and super() in same constructor",
      "Accessing instance members from static context",
      "Not calling super() when parent has no default constructor",
      "Confusing this and super"
    ]
  },
  labs: [
    {
      title: "Lab 9.1: Constructor Overloading",
      difficulty: "beginner",
      description: "Create Book class with multiple constructors",
      steps: [
        "Default constructor with default values",
        "Constructor with title only",
        "Constructor with all parameters",
        "Copy constructor",
        "Use this() for chaining"
      ],
      code: `class Book {
    private String title;
    private String author;
    private double price;
    private int pages;
    
    // Static counter
    private static int bookCount = 0;
    
    // Default constructor
    public Book() {
        this("Untitled", "Unknown", 0, 0);
    }
    
    // Title only
    public Book(String title) {
        this(title, "Unknown", 0, 0);
    }
    
    // Title and author
    public Book(String title, String author) {
        this(title, author, 0, 0);
    }
    
    // All parameters
    public Book(String title, String author, double price, int pages) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.pages = pages;
        bookCount++;
        System.out.println("Book created: " + title);
    }
    
    // Copy constructor
    public Book(Book other) {
        this(other.title, other.author, other.price, other.pages);
        System.out.println("(Copy of " + other.title + ")");
    }
    
    public static int getBookCount() {
        return bookCount;
    }
    
    public void display() {
        System.out.println("\\nTitle: " + title);
        System.out.println("Author: " + author);
        System.out.println("Price: ₹" + price);
        System.out.println("Pages: " + pages);
    }
}

public class BookDemo {
    public static void main(String[] args) {
        Book b1 = new Book();
        Book b2 = new Book("Java Programming");
        Book b3 = new Book("Clean Code", "Robert Martin", 500, 450);
        Book b4 = new Book(b3);
        
        b1.display();
        b2.display();
        b3.display();
        
        System.out.println("\\nTotal books created: " + Book.getBookCount());
    }
}`,
      sampleOutput: "Book created: Untitled\nBook created: Java Programming\nBook created: Clean Code\nBook created: Clean Code\n(Copy of Clean Code)\n..."
    },
    {
      title: "Lab 9.2: Static Counter and Utility Class",
      difficulty: "intermediate",
      description: "Create a class with static members for tracking and utilities",
      steps: [
        "Static counter for object instances",
        "Static utility methods",
        "Instance method using static data",
        "Static block for initialization"
      ],
      code: `class Student {
    private String name;
    private int studentId;
    private double marks;
    
    // Static members
    private static int nextId = 1;
    private static int totalStudents = 0;
    private static double totalMarks = 0;
    private static String schoolName;
    
    // Static block - runs once when class loads
    static {
        System.out.println("=== Student Class Loaded ===");
        schoolName = "Central High School";
        System.out.println("School: " + schoolName);
        System.out.println();
    }
    
    public Student(String name, double marks) {
        this.name = name;
        this.studentId = nextId++;
        this.marks = marks;
        totalStudents++;
        totalMarks += marks;
    }
    
    // Static utility methods
    public static double getClassAverage() {
        return totalStudents > 0 ? totalMarks / totalStudents : 0;
    }
    
    public static int getTotalStudents() {
        return totalStudents;
    }
    
    public static void printClassStats() {
        System.out.println("\\n=== Class Statistics ===");
        System.out.println("School: " + schoolName);
        System.out.println("Total Students: " + totalStudents);
        System.out.printf("Class Average: %.2f%n", getClassAverage());
    }
    
    // Instance methods
    public void display() {
        System.out.println("\\nStudent ID: " + studentId);
        System.out.println("Name: " + name);
        System.out.println("Marks: " + marks);
        System.out.println("Above Average: " + (marks > getClassAverage() ? "Yes" : "No"));
    }
    
    public boolean isTopPerformer() {
        return marks >= getClassAverage() + 10;
    }
}

public class StaticDemo {
    public static void main(String[] args) {
        Student s1 = new Student("Alice", 85);
        Student s2 = new Student("Bob", 72);
        Student s3 = new Student("Carol", 90);
        Student s4 = new Student("Dave", 68);
        
        s1.display();
        s2.display();
        
        Student.printClassStats();
        
        System.out.println("\\n=== Top Performers ===");
        System.out.println("Alice: " + s1.isTopPerformer());
        System.out.println("Carol: " + s3.isTopPerformer());
    }
}`
    },
    {
      title: "Lab 9.3: Inheritance with super",
      difficulty: "intermediate",
      description: "Create inheritance hierarchy using super keyword",
      steps: [
        "Base class with constructor",
        "Child class calling super()",
        "Override methods using super.method()",
        "Access hidden variables with super.variable"
      ],
      code: `class Vehicle {
    protected String brand;
    protected int year;
    protected double price;
    
    protected static int vehicleCount = 0;
    
    public Vehicle(String brand, int year, double price) {
        this.brand = brand;
        this.year = year;
        this.price = price;
        vehicleCount++;
        System.out.println("Vehicle constructor: " + brand);
    }
    
    public void start() {
        System.out.println(brand + " is starting...");
    }
    
    public void displayInfo() {
        System.out.println("\\nBrand: " + brand);
        System.out.println("Year: " + year);
        System.out.println("Price: ₹" + price);
    }
    
    public double calculateTax() {
        return price * 0.10;
    }
}

class Car extends Vehicle {
    private int numDoors;
    private String fuelType;
    
    public Car(String brand, int year, double price, int doors, String fuel) {
        super(brand, year, price);  // Call parent constructor
        this.numDoors = doors;
        this.fuelType = fuel;
        System.out.println("Car constructor: " + numDoors + " doors");
    }
    
    @Override
    public void start() {
        super.start();  // Call parent's start
        System.out.println("Press button to start engine");
        System.out.println(brand + " engine running smoothly");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();  // Call parent's display
        System.out.println("Doors: " + numDoors);
        System.out.println("Fuel: " + fuelType);
    }
    
    @Override
    public double calculateTax() {
        double baseTax = super.calculateTax();
        // Extra tax for luxury cars
        if (price > 1000000) {
            return baseTax + (price * 0.15);
        }
        return baseTax;
    }
}

public class SuperDemo {
    public static void main(String[] args) {
        Car car = new Car("Toyota", 2023, 1500000, 4, "Petrol");
        
        car.displayInfo();
        System.out.println("\\nTax: ₹" + car.calculateTax());
        
        System.out.println();
        car.start();
        
        System.out.println("\\nTotal vehicles: " + Vehicle.vehicleCount);
    }
}`
    }
  ],
  assignments: [
    {
      id: 9,
      title: "Bank Account System with All Concepts",
      difficulty: "intermediate",
      problemStatement: "Create BankAccount base class and SavingsAccount, CurrentAccount children. Use: static for nextAccountNumber and bankName, this() for constructor chaining, super() for inheritance, private with getters/setters. Include transfer between accounts.",
      hints: [
        "Static nextAccountNumber starts at 1001",
        "this() chains to main constructor",
        "super() passes common data to parent",
        "Instance methods for deposit/withdraw",
        "Static method for bank-wide operations"
      ],
      expectedOutput: "Account 1001 created for John (Savings)\nAccount 1002 created for Jane (Current)\n\nBank: National Bank\nTotal Accounts: 2\n\nTransfer ₹5000 from 1001 to 1002...\nTransfer successful!",
      evaluationCriteria: [
        "Proper use of static for shared data",
        "Constructor chaining with this()",
        "Inheritance with super()",
        "All access modifiers used correctly",
        "Complete functionality"
      ]
    },
    {
      id: 91,
      title: "Company Hierarchy",
      difficulty: "advanced",
      problemStatement: "Create Employee → Manager/Developer/Intern hierarchy. Static: nextEmpId, companyName, totalPayroll. Each type has different salary calculation. Use all concepts: constructors with chaining, this, super, static. Calculate and display company-wide statistics.",
      hints: [
        "Manager: base + bonus + allowances",
        "Developer: base + overtime pay",
        "Intern: fixed stipend only",
        "Static method to calculate total payroll",
        "Copy constructor for Employee cloning"
      ],
      expectedOutput: "=== TechCorp Payroll ===\nCompany: TechCorp\nTotal Employees: 5\n\n1. Manager: Alice - ₹85,000\n2. Developer: Bob - ₹55,000\n...\n\nTotal Payroll: ₹2,15,000",
      evaluationCriteria: [
        "Complete inheritance hierarchy",
        "All keywords used appropriately",
        "Static tracking works correctly",
        "Method overriding with super calls",
        "Clean output formatting"
      ]
    }
  ]
};
