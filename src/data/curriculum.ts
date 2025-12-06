export interface Slide {
  title: string;
  content: string[];
  trainerNotes?: string;
  diagram?: string;
  analogy?: string;
}

export interface LessonPlan {
  objectives: string[];
  timeSplit: { phase: string; duration: string; activity: string }[];
  whiteboardPoints: string[];
  teachingScript: string;
  expectedOutcomes: string[];
  commonMistakes: string[];
}

export interface Lab {
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  steps: string[];
  sampleInput?: string;
  sampleOutput?: string;
  code?: string;
}

export interface Assignment {
  id: number;
  title: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  problemStatement: string;
  hints: string[];
  expectedOutput: string;
  evaluationCriteria: string[];
}

export interface DayContent {
  day: number;
  title: string;
  description: string;
  icon: string;
  pptSlides: Slide[];
  lessonPlan: LessonPlan;
  labs: Lab[];
  assignments: Assignment[];
}

export const curriculumData: DayContent[] = [
  {
    day: 1,
    title: "Introduction to Java",
    description: "JDK/JRE/JVM, first program, environment setup",
    icon: "🚀",
    pptSlides: [
      {
        title: "Welcome to Java Programming",
        content: [
          "Java: A platform-independent, object-oriented programming language",
          "Created by James Gosling at Sun Microsystems (1995)",
          "Write Once, Run Anywhere (WORA) philosophy",
          "Used in enterprise, Android, web applications, and more"
        ],
        trainerNotes: "Start with enthusiasm! Ask who has programmed before. Relate Java to apps they use daily.",
        analogy: "Java is like a universal translator - write your code once, and it works on any computer, just like how a good translator can communicate the same message in any language."
      },
      {
        title: "JDK, JRE, and JVM Explained",
        content: [
          "JVM (Java Virtual Machine): The engine that runs Java bytecode",
          "JRE (Java Runtime Environment): JVM + libraries to run programs",
          "JDK (Java Development Kit): JRE + development tools (compiler, debugger)",
          "Relationship: JDK ⊃ JRE ⊃ JVM"
        ],
        trainerNotes: "Draw the nested diagram on whiteboard. Emphasize that developers need JDK, users need JRE.",
        diagram: "JDK → Contains → JRE → Contains → JVM",
        analogy: "Think of it like a car factory: JVM is the engine, JRE is the complete car, and JDK is the entire factory with tools to build cars."
      },
      {
        title: "Setting Up Your Environment",
        content: [
          "Download JDK from Oracle or OpenJDK",
          "Set JAVA_HOME environment variable",
          "Add Java bin folder to PATH",
          "Verify installation: java -version"
        ],
        trainerNotes: "Do live demo. Have backup screenshots ready. Help students who face issues."
      },
      {
        title: "Your First Java Program",
        content: [
          "Create HelloWorld.java file",
          "public class HelloWorld { ... }",
          "public static void main(String[] args)",
          "System.out.println(\"Hello, World!\");"
        ],
        trainerNotes: "Type slowly, explain each keyword. Class name must match filename. Compile and run together."
      },
      {
        title: "Understanding the Code Structure",
        content: [
          "public: Access modifier - accessible from anywhere",
          "class: Blueprint for objects",
          "static: Belongs to class, not instance",
          "void: Returns nothing",
          "main: Entry point of program",
          "String[] args: Command line arguments"
        ],
        trainerNotes: "Don't go too deep into OOP yet. Just introduce concepts they'll learn later."
      },
      {
        title: "Compilation and Execution",
        content: [
          "Step 1: Write code in .java file",
          "Step 2: Compile with javac HelloWorld.java",
          "Step 3: Creates HelloWorld.class (bytecode)",
          "Step 4: Run with java HelloWorld"
        ],
        trainerNotes: "Show the .class file. Explain bytecode is platform-independent.",
        diagram: "Source Code (.java) → Compiler (javac) → Bytecode (.class) → JVM → Output"
      }
    ],
    lessonPlan: {
      objectives: [
        "Understand what Java is and its history",
        "Differentiate between JDK, JRE, and JVM",
        "Set up Java development environment",
        "Write, compile, and run first Java program"
      ],
      timeSplit: [
        { phase: "Warm-up", duration: "15 mins", activity: "Icebreaker + What do you know about programming?" },
        { phase: "Theory", duration: "45 mins", activity: "Introduction to Java, JDK/JRE/JVM concepts" },
        { phase: "Demo", duration: "30 mins", activity: "Environment setup + First program walkthrough" },
        { phase: "Practice", duration: "45 mins", activity: "Students write and run HelloWorld" },
        { phase: "Wrap-up", duration: "15 mins", activity: "Q&A + Preview tomorrow's topics" }
      ],
      whiteboardPoints: [
        "Draw JDK ⊃ JRE ⊃ JVM diagram",
        "Write compilation flow: .java → javac → .class → java → output",
        "List key terms: class, method, main, public, static"
      ],
      teachingScript: "Good morning everyone! Today marks the beginning of your Java journey. By the end of these 15 days, you'll be writing real applications. Let's start with a question - how many of you have used an Android app? Well, most Android apps are built with Java!",
      expectedOutcomes: [
        "Students can explain what Java is used for",
        "Students can identify JDK, JRE, JVM differences",
        "Students have working Java environment",
        "Students have successfully run their first program"
      ],
      commonMistakes: [
        "Class name not matching filename (case-sensitive!)",
        "Missing semicolons at end of statements",
        "Using wrong quotes (smart quotes from Word)",
        "PATH not set correctly after installation"
      ]
    },
    labs: [
      {
        title: "Lab 1.1: Environment Setup Verification",
        difficulty: "beginner",
        description: "Verify your Java installation is working correctly",
        steps: [
          "Open Command Prompt or Terminal",
          "Type: java -version",
          "Type: javac -version",
          "Take a screenshot of both outputs",
          "If errors occur, check PATH and JAVA_HOME variables"
        ],
        sampleOutput: "java version \"17.0.1\" 2021-10-19 LTS\nJava(TM) SE Runtime Environment (build 17.0.1+12-LTS-39)"
      },
      {
        title: "Lab 1.2: Hello World Program",
        difficulty: "beginner",
        description: "Write and run your first Java program",
        steps: [
          "Create a new file called HelloWorld.java",
          "Write the HelloWorld class with main method",
          "Print \"Hello, World!\" to console",
          "Save, compile with javac, and run with java"
        ],
        code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        sampleOutput: "Hello, World!"
      },
      {
        title: "Lab 1.3: Personalized Greeting",
        difficulty: "beginner",
        description: "Modify the program to print your name",
        steps: [
          "Create a new file called Greeting.java",
          "Print a personalized message with your name",
          "Print your batch name on a separate line",
          "Compile and run the program"
        ],
        code: `public class Greeting {
    public static void main(String[] args) {
        System.out.println("Hello, I am [Your Name]!");
        System.out.println("Welcome to Java Training - Batch 2024");
    }
}`
      },
      {
        title: "Lab 1.4: Multiple Print Statements",
        difficulty: "intermediate",
        description: "Practice using different print methods",
        steps: [
          "Learn difference between println and print",
          "Create a program with multiple output lines",
          "Create an ASCII art pattern using print statements"
        ],
        code: `public class PrintDemo {
    public static void main(String[] args) {
        System.out.println("Line 1 - println adds newline");
        System.out.print("Line 2 - ");
        System.out.print("print stays on same line");
        System.out.println(); // Empty line
        System.out.println("*****");
        System.out.println("*   *");
        System.out.println("*****");
    }
}`
      }
    ],
    assignments: [
      {
        id: 1,
        title: "Personal Introduction Program",
        difficulty: "basic",
        problemStatement: "Create a Java program that prints your complete introduction including: Name, Age, Hometown, Why you chose IT, and Your goal after training.",
        hints: [
          "Use multiple System.out.println() statements",
          "Each piece of information should be on a new line",
          "You can use + to concatenate strings"
        ],
        expectedOutput: "Name: John Doe\nAge: 22\nHometown: Mumbai\nWhy IT: Passion for technology\nGoal: Become a full-stack developer",
        evaluationCriteria: [
          "Program compiles without errors",
          "All 5 pieces of information are displayed",
          "Output is properly formatted",
          "Code follows naming conventions"
        ]
      }
    ]
  },
  {
    day: 2,
    title: "Variables, Data Types, Operators",
    description: "Primitive types, declarations, arithmetic and logical operators",
    icon: "🔢",
    pptSlides: [
      {
        title: "What are Variables?",
        content: [
          "Variables are containers for storing data values",
          "Each variable has a type, name, and value",
          "Syntax: dataType variableName = value;",
          "Variable names follow camelCase convention"
        ],
        trainerNotes: "Use the box analogy. Draw boxes with labels.",
        analogy: "Think of variables like labeled boxes in a warehouse. The label is the variable name, the box size is the data type, and what's inside is the value."
      },
      {
        title: "Primitive Data Types",
        content: [
          "byte: 1 byte (-128 to 127)",
          "short: 2 bytes (-32,768 to 32,767)",
          "int: 4 bytes (most common for whole numbers)",
          "long: 8 bytes (suffix with L)",
          "float: 4 bytes (suffix with f)",
          "double: 8 bytes (default for decimals)",
          "char: 2 bytes (single character in quotes)",
          "boolean: true or false"
        ],
        trainerNotes: "Create a comparison table. Emphasize int and double are most common.",
        diagram: "byte(1) < short(2) < int(4) < long(8) | float(4) < double(8)"
      },
      {
        title: "Variable Declaration and Initialization",
        content: [
          "Declaration: int age;",
          "Initialization: age = 25;",
          "Combined: int age = 25;",
          "Multiple: int x = 5, y = 10, z = 15;"
        ],
        trainerNotes: "Live code each example. Show compilation errors for uninitialized variables."
      },
      {
        title: "Arithmetic Operators",
        content: [
          "+ Addition",
          "- Subtraction",
          "* Multiplication",
          "/ Division (integer division truncates)",
          "% Modulus (remainder)",
          "++ Increment, -- Decrement"
        ],
        trainerNotes: "Emphasize integer division behavior: 5/2 = 2, not 2.5"
      },
      {
        title: "Comparison & Logical Operators",
        content: [
          "== Equal to, != Not equal",
          "< Less than, > Greater than",
          "<= Less or equal, >= Greater or equal",
          "&& Logical AND",
          "|| Logical OR",
          "! Logical NOT"
        ],
        trainerNotes: "Create truth tables for AND, OR. Common mistake: = vs =="
      },
      {
        title: "Type Casting",
        content: [
          "Implicit casting: smaller to larger type (automatic)",
          "int to double: int x = 5; double d = x;",
          "Explicit casting: larger to smaller type (manual)",
          "double to int: double d = 5.7; int x = (int) d;"
        ],
        trainerNotes: "Show data loss with explicit casting. double 5.7 becomes int 5."
      }
    ],
    lessonPlan: {
      objectives: [
        "Understand what variables are and how to declare them",
        "Know all 8 primitive data types and their uses",
        "Apply arithmetic, comparison, and logical operators",
        "Understand type casting and when it's needed"
      ],
      timeSplit: [
        { phase: "Warm-up", duration: "10 mins", activity: "Recap Day 1 + Quiz on Java basics" },
        { phase: "Theory", duration: "50 mins", activity: "Variables, data types, operators explanation" },
        { phase: "Demo", duration: "30 mins", activity: "Live coding examples of each concept" },
        { phase: "Practice", duration: "50 mins", activity: "Hands-on labs with variables and operators" },
        { phase: "Wrap-up", duration: "10 mins", activity: "Common pitfalls discussion" }
      ],
      whiteboardPoints: [
        "Data type size comparison chart",
        "Operator precedence pyramid",
        "Type casting flow diagram"
      ],
      teachingScript: "Yesterday we said hello to Java. Today, we learn how to make Java remember things. Variables are like the brain's memory cells - they store information for later use.",
      expectedOutcomes: [
        "Students can declare and initialize variables correctly",
        "Students choose appropriate data types for different scenarios",
        "Students can write expressions using all operators",
        "Students understand when and how to cast types"
      ],
      commonMistakes: [
        "Using = instead of == for comparison",
        "Integer division confusion (5/2 = 2)",
        "Forgetting L suffix for long, f for float",
        "Variable name starting with number"
      ]
    },
    labs: [
      {
        title: "Lab 2.1: Variable Explorer",
        difficulty: "beginner",
        description: "Practice declaring and printing all primitive types",
        steps: [
          "Declare one variable of each primitive type",
          "Assign meaningful values to each",
          "Print all variables with descriptive labels"
        ],
        code: `public class VariableExplorer {
    public static void main(String[] args) {
        byte smallNumber = 100;
        short mediumNumber = 30000;
        int age = 25;
        long population = 7800000000L;
        float price = 99.99f;
        double pi = 3.14159265359;
        char grade = 'A';
        boolean isJavaFun = true;
        
        System.out.println("Byte: " + smallNumber);
        System.out.println("Short: " + mediumNumber);
        System.out.println("Int: " + age);
        System.out.println("Long: " + population);
        System.out.println("Float: " + price);
        System.out.println("Double: " + pi);
        System.out.println("Char: " + grade);
        System.out.println("Boolean: " + isJavaFun);
    }
}`
      },
      {
        title: "Lab 2.2: Calculator Program",
        difficulty: "beginner",
        description: "Create a simple calculator demonstrating all arithmetic operators",
        steps: [
          "Declare two integer variables",
          "Perform all arithmetic operations",
          "Display results with labels"
        ],
        code: `public class SimpleCalculator {
    public static void main(String[] args) {
        int a = 20, b = 7;
        
        System.out.println("a = " + a + ", b = " + b);
        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
        System.out.println("Modulus: " + (a % b));
    }
}`,
        sampleOutput: "a = 20, b = 7\nAddition: 27\nSubtraction: 13\nMultiplication: 140\nDivision: 2\nModulus: 6"
      },
      {
        title: "Lab 2.3: Temperature Converter",
        difficulty: "intermediate",
        description: "Convert Celsius to Fahrenheit using the formula",
        steps: [
          "Formula: F = (C × 9/5) + 32",
          "Declare a double for Celsius",
          "Calculate and display Fahrenheit",
          "Use proper type casting"
        ],
        code: `public class TemperatureConverter {
    public static void main(String[] args) {
        double celsius = 37.5;
        double fahrenheit = (celsius * 9 / 5) + 32;
        
        System.out.println(celsius + "°C = " + fahrenheit + "°F");
    }
}`
      }
    ],
    assignments: [
      {
        id: 2,
        title: "Employee Salary Calculator",
        difficulty: "intermediate",
        problemStatement: "Create a program that calculates an employee's net salary. Given: Basic salary = ₹50,000, HRA = 20% of basic, DA = 15% of basic, Tax = 10% of gross salary. Calculate and display all components and the net salary.",
        hints: [
          "Calculate HRA: basic * 0.20",
          "Calculate DA: basic * 0.15",
          "Gross = Basic + HRA + DA",
          "Tax = Gross * 0.10",
          "Net = Gross - Tax"
        ],
        expectedOutput: "Basic: 50000.0\nHRA: 10000.0\nDA: 7500.0\nGross: 67500.0\nTax: 6750.0\nNet Salary: 60750.0",
        evaluationCriteria: [
          "Correct calculation of all components",
          "Proper use of double data type",
          "Clear output formatting",
          "Code is well-commented"
        ]
      }
    ]
  },
  {
    day: 3,
    title: "Control Statements",
    description: "if-else, nested if, switch-case, ternary operator",
    icon: "🔀",
    pptSlides: [
      {
        title: "Introduction to Control Flow",
        content: [
          "Programs need to make decisions",
          "Control statements direct the flow of execution",
          "Types: Selection (if, switch) and Iteration (loops)",
          "Today: Focus on selection statements"
        ],
        trainerNotes: "Use real-life examples: traffic lights, eligibility checks.",
        analogy: "Control statements are like road signs - they tell your program which path to take based on conditions."
      },
      {
        title: "The if Statement",
        content: [
          "Syntax: if (condition) { statements }",
          "Condition must be boolean (true/false)",
          "Executes block only if condition is true",
          "Single statement doesn't need braces (but always use them!)"
        ],
        trainerNotes: "Draw flowchart. Emphasize always using braces."
      },
      {
        title: "if-else Statement",
        content: [
          "Two-way decision making",
          "Syntax: if (condition) { } else { }",
          "else block executes when condition is false",
          "Example: Check if number is positive or negative"
        ]
      },
      {
        title: "else-if Ladder",
        content: [
          "Multiple condition checking",
          "if → else if → else if → else",
          "First true condition's block executes",
          "else is the catch-all at the end"
        ],
        trainerNotes: "Grade calculation is perfect example: A, B, C, D, F"
      },
      {
        title: "Switch Statement",
        content: [
          "Alternative to long else-if chains",
          "Works with: byte, short, int, char, String, enum",
          "case values must be constants",
          "break prevents fall-through",
          "default handles unmatched cases"
        ]
      },
      {
        title: "Ternary Operator",
        content: [
          "Shorthand for simple if-else",
          "Syntax: result = condition ? valueIfTrue : valueIfFalse",
          "Example: String status = (age >= 18) ? \"Adult\" : \"Minor\";",
          "Use for simple assignments only"
        ],
        trainerNotes: "Show equivalent if-else, then ternary. Warn against nesting."
      }
    ],
    lessonPlan: {
      objectives: [
        "Write programs using if, if-else, and else-if ladder",
        "Implement switch statements for multiple choices",
        "Apply ternary operator for concise conditions",
        "Choose the right control structure for each scenario"
      ],
      timeSplit: [
        { phase: "Warm-up", duration: "10 mins", activity: "Quick quiz on operators" },
        { phase: "Theory", duration: "45 mins", activity: "Control statements with flowcharts" },
        { phase: "Demo", duration: "35 mins", activity: "Live coding: grade calculator, menu system" },
        { phase: "Practice", duration: "50 mins", activity: "Labs with increasing complexity" },
        { phase: "Wrap-up", duration: "10 mins", activity: "When to use if vs switch discussion" }
      ],
      whiteboardPoints: [
        "if-else flowchart",
        "switch flowchart with fall-through arrows",
        "Ternary operator visualization"
      ],
      teachingScript: "So far, our programs run from top to bottom. But real programs need to make decisions. Should we show error or success? Should we grant access or deny? This is where control statements come in.",
      expectedOutcomes: [
        "Students write decision-making programs confidently",
        "Students understand when to use if vs switch",
        "Students avoid common bugs like missing break",
        "Students use ternary for simple conditions"
      ],
      commonMistakes: [
        "Using = instead of == in conditions",
        "Forgetting break in switch (fall-through)",
        "Wrong logical operator (& instead of &&)",
        "Empty if blocks"
      ]
    },
    labs: [
      {
        title: "Lab 3.1: Voting Eligibility",
        difficulty: "beginner",
        description: "Check if a person is eligible to vote based on age",
        steps: [
          "Declare an int variable for age",
          "Use if-else to check if age >= 18",
          "Print appropriate message"
        ],
        code: `public class VotingEligibility {
    public static void main(String[] args) {
        int age = 17;
        
        if (age >= 18) {
            System.out.println("You are eligible to vote!");
        } else {
            System.out.println("You are not eligible to vote yet.");
            System.out.println("Wait for " + (18 - age) + " more year(s).");
        }
    }
}`
      },
      {
        title: "Lab 3.2: Grade Calculator",
        difficulty: "intermediate",
        description: "Convert marks to grades using else-if ladder",
        steps: [
          "90-100: A, 80-89: B, 70-79: C, 60-69: D, Below 60: F",
          "Use else-if ladder for checking",
          "Also validate marks are between 0-100"
        ],
        code: `public class GradeCalculator {
    public static void main(String[] args) {
        int marks = 85;
        char grade;
        
        if (marks < 0 || marks > 100) {
            System.out.println("Invalid marks!");
        } else if (marks >= 90) {
            grade = 'A';
            System.out.println("Grade: " + grade + " - Excellent!");
        } else if (marks >= 80) {
            grade = 'B';
            System.out.println("Grade: " + grade + " - Very Good!");
        } else if (marks >= 70) {
            grade = 'C';
            System.out.println("Grade: " + grade + " - Good");
        } else if (marks >= 60) {
            grade = 'D';
            System.out.println("Grade: " + grade + " - Pass");
        } else {
            grade = 'F';
            System.out.println("Grade: " + grade + " - Fail");
        }
    }
}`
      },
      {
        title: "Lab 3.3: Day of Week (Switch)",
        difficulty: "intermediate",
        description: "Display day name based on number using switch",
        steps: [
          "1 = Sunday, 2 = Monday, ... 7 = Saturday",
          "Use switch statement",
          "Handle invalid numbers with default"
        ],
        code: `public class DayOfWeek {
    public static void main(String[] args) {
        int dayNumber = 3;
        String dayName;
        
        switch (dayNumber) {
            case 1:
                dayName = "Sunday";
                break;
            case 2:
                dayName = "Monday";
                break;
            case 3:
                dayName = "Tuesday";
                break;
            case 4:
                dayName = "Wednesday";
                break;
            case 5:
                dayName = "Thursday";
                break;
            case 6:
                dayName = "Friday";
                break;
            case 7:
                dayName = "Saturday";
                break;
            default:
                dayName = "Invalid day number";
        }
        
        System.out.println("Day " + dayNumber + " is " + dayName);
    }
}`
      }
    ],
    assignments: [
      {
        id: 3,
        title: "ATM Menu System",
        difficulty: "intermediate",
        problemStatement: "Create an ATM menu simulation. Display options: 1. Check Balance, 2. Deposit, 3. Withdraw, 4. Exit. Use switch statement. Initial balance = ₹10,000. For now, just display what would happen (actual input handling comes later).",
        hints: [
          "Use switch with int for menu choice",
          "Include all 4 cases plus default",
          "Print descriptive messages for each option",
          "Show remaining balance after operations"
        ],
        expectedOutput: "=== ATM Menu ===\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit\n\nYou selected: Check Balance\nCurrent Balance: ₹10000",
        evaluationCriteria: [
          "Switch statement used correctly",
          "All menu options handled",
          "Default case for invalid input",
          "Clean output formatting"
        ]
      }
    ]
  },
  {
    day: 4,
    title: "Loops",
    description: "for, while, do-while, break, continue, nested loops",
    icon: "🔄",
    pptSlides: [
      {
        title: "Why Do We Need Loops?",
        content: [
          "Repeat a block of code multiple times",
          "Avoid writing repetitive code",
          "Process collections of data",
          "Three types: for, while, do-while"
        ],
        analogy: "Loops are like a music playlist on repeat. Instead of playing a song once, you can play it 10 times automatically."
      },
      {
        title: "The for Loop",
        content: [
          "Used when number of iterations is known",
          "Syntax: for (init; condition; update) { }",
          "init: Starting point (int i = 0)",
          "condition: Continue while true (i < 10)",
          "update: Change after each iteration (i++)"
        ],
        trainerNotes: "Draw the for loop flowchart. Show execution step by step."
      },
      {
        title: "The while Loop",
        content: [
          "Used when iterations depend on condition",
          "Syntax: while (condition) { statements }",
          "Check condition first, then execute",
          "May execute 0 times if condition is false initially"
        ]
      },
      {
        title: "The do-while Loop",
        content: [
          "Executes at least once",
          "Syntax: do { statements } while (condition);",
          "Check condition after execution",
          "Use for menus, input validation"
        ],
        trainerNotes: "Note the semicolon after while. Compare with while loop."
      },
      {
        title: "break and continue",
        content: [
          "break: Exit the loop immediately",
          "continue: Skip current iteration, go to next",
          "Use sparingly - can make code hard to read",
          "Common with conditional checks inside loops"
        ]
      },
      {
        title: "Nested Loops",
        content: [
          "Loop inside another loop",
          "Inner loop completes fully for each outer iteration",
          "Used for: 2D arrays, patterns, matrices",
          "Example: Multiplication table"
        ],
        trainerNotes: "Start with simple patterns. Build complexity gradually."
      }
    ],
    lessonPlan: {
      objectives: [
        "Write programs using for, while, and do-while loops",
        "Choose the appropriate loop for each scenario",
        "Use break and continue effectively",
        "Create patterns using nested loops"
      ],
      timeSplit: [
        { phase: "Warm-up", duration: "10 mins", activity: "Recap if-else with quick exercise" },
        { phase: "Theory", duration: "40 mins", activity: "All loop types with flowcharts" },
        { phase: "Demo", duration: "35 mins", activity: "Live coding: counting, patterns, tables" },
        { phase: "Practice", duration: "55 mins", activity: "Pattern printing labs" },
        { phase: "Wrap-up", duration: "10 mins", activity: "Loop selection criteria discussion" }
      ],
      whiteboardPoints: [
        "for loop flowchart with variable trace",
        "while vs do-while comparison",
        "Nested loop execution visualization"
      ],
      teachingScript: "Yesterday we learned to make decisions. Today we learn to repeat. Imagine printing 'Hello' 100 times - would you write 100 print statements? Of course not! That's what loops are for.",
      expectedOutcomes: [
        "Students can write any loop type confidently",
        "Students understand when to use each loop",
        "Students can trace loop execution with variables",
        "Students can create basic patterns"
      ],
      commonMistakes: [
        "Infinite loops (forgetting to update counter)",
        "Off-by-one errors (< vs <=)",
        "Wrong loop type for scenario",
        "Semicolon after for/while (empty loop body)"
      ]
    },
    labs: [
      {
        title: "Lab 4.1: Print Numbers 1 to 10",
        difficulty: "beginner",
        description: "Use a for loop to print numbers",
        steps: [
          "Write a for loop starting at 1",
          "Continue while <= 10",
          "Print each number"
        ],
        code: `public class PrintNumbers {
    public static void main(String[] args) {
        System.out.println("Counting from 1 to 10:");
        for (int i = 1; i <= 10; i++) {
            System.out.print(i + " ");
        }
        System.out.println(); // New line at end
    }
}`,
        sampleOutput: "Counting from 1 to 10:\n1 2 3 4 5 6 7 8 9 10"
      },
      {
        title: "Lab 4.2: Sum of Numbers",
        difficulty: "beginner",
        description: "Calculate sum of numbers 1 to 100 using while loop",
        steps: [
          "Initialize sum = 0, counter = 1",
          "While counter <= 100, add to sum",
          "Increment counter",
          "Print final sum"
        ],
        code: `public class SumNumbers {
    public static void main(String[] args) {
        int sum = 0;
        int i = 1;
        
        while (i <= 100) {
            sum += i;  // sum = sum + i
            i++;
        }
        
        System.out.println("Sum of 1 to 100 = " + sum);
    }
}`,
        sampleOutput: "Sum of 1 to 100 = 5050"
      },
      {
        title: "Lab 4.3: Star Pattern",
        difficulty: "intermediate",
        description: "Print a right triangle pattern using nested loops",
        steps: [
          "Outer loop for rows (1 to 5)",
          "Inner loop for stars (1 to current row)",
          "Print newline after each row"
        ],
        code: `public class StarPattern {
    public static void main(String[] args) {
        int rows = 5;
        
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
        sampleOutput: "* \n* * \n* * * \n* * * * \n* * * * *"
      },
      {
        title: "Lab 4.4: Multiplication Table",
        difficulty: "intermediate",
        description: "Print multiplication table for a given number",
        steps: [
          "Set the number for table (e.g., 7)",
          "Loop from 1 to 10",
          "Print each multiplication result"
        ],
        code: `public class MultiplicationTable {
    public static void main(String[] args) {
        int number = 7;
        
        System.out.println("Multiplication Table of " + number);
        System.out.println("========================");
        
        for (int i = 1; i <= 10; i++) {
            System.out.println(number + " x " + i + " = " + (number * i));
        }
    }
}`
      }
    ],
    assignments: [
      {
        id: 4,
        title: "Pattern Collection",
        difficulty: "intermediate",
        problemStatement: "Create a program that prints 3 different patterns using nested loops:\n1. Right triangle with numbers\n2. Inverted right triangle with stars\n3. Square border pattern",
        hints: [
          "Pattern 1: Inner loop prints 1 to row number",
          "Pattern 2: Start outer loop from n, go down",
          "Pattern 3: Print * only for first/last row/column"
        ],
        expectedOutput: "Pattern 1:\n1\n1 2\n1 2 3\n1 2 3 4\n\nPattern 2:\n* * * *\n* * *\n* *\n*\n\nPattern 3:\n* * * *\n*     *\n*     *\n* * * *",
        evaluationCriteria: [
          "All three patterns are correct",
          "Nested loops used properly",
          "Clean spacing and formatting",
          "Code is organized with comments"
        ]
      }
    ]
  },
  {
    day: 5,
    title: "Arrays and Strings",
    description: "1D arrays, 2D arrays, String class, common operations",
    icon: "📊",
    pptSlides: [
      {
        title: "Introduction to Arrays",
        content: [
          "Array: Collection of similar data types",
          "Fixed size once created",
          "Zero-indexed (first element at index 0)",
          "Access elements using index: arr[0]"
        ],
        analogy: "An array is like a row of lockers. Each locker has a number (index) and can hold one item of the same type."
      },
      {
        title: "Declaring and Initializing Arrays",
        content: [
          "Declaration: int[] numbers; or int numbers[];",
          "Creation: numbers = new int[5];",
          "Combined: int[] numbers = new int[5];",
          "With values: int[] numbers = {10, 20, 30, 40, 50};"
        ]
      },
      {
        title: "Array Operations",
        content: [
          "Access: int x = arr[2];",
          "Modify: arr[2] = 100;",
          "Length: arr.length (no parentheses!)",
          "Traversal: for loop or enhanced for-each"
        ]
      },
      {
        title: "2D Arrays",
        content: [
          "Array of arrays (matrix/table)",
          "Declaration: int[][] matrix = new int[3][4];",
          "Access: matrix[row][column]",
          "Nested loops for traversal"
        ],
        trainerNotes: "Draw a grid. Show row and column indices clearly."
      },
      {
        title: "String Basics",
        content: [
          "String is a class, not primitive",
          "Immutable: cannot change once created",
          "Created with: String s = \"Hello\";",
          "Or: String s = new String(\"Hello\");"
        ]
      },
      {
        title: "Common String Methods",
        content: [
          "length(): Number of characters",
          "charAt(index): Character at position",
          "substring(start, end): Extract portion",
          "equals(): Compare content",
          "toUpperCase(), toLowerCase()",
          "indexOf(), contains(), split()"
        ]
      }
    ],
    lessonPlan: {
      objectives: [
        "Declare, initialize, and manipulate 1D arrays",
        "Work with 2D arrays (matrices)",
        "Use String class methods effectively",
        "Solve problems using arrays and strings"
      ],
      timeSplit: [
        { phase: "Warm-up", duration: "10 mins", activity: "Loop pattern challenge" },
        { phase: "Theory", duration: "50 mins", activity: "Arrays (1D, 2D) and Strings" },
        { phase: "Demo", duration: "30 mins", activity: "Array search, String manipulation" },
        { phase: "Practice", duration: "50 mins", activity: "Labs with arrays and strings" },
        { phase: "Wrap-up", duration: "10 mins", activity: "Q&A and common pitfalls" }
      ],
      whiteboardPoints: [
        "Array memory diagram with indices",
        "2D array as grid visualization",
        "String immutability explanation"
      ],
      teachingScript: "So far we've worked with single values. But what if you need to store 100 student marks? Create 100 variables? No! Arrays let us store multiple values in one variable.",
      expectedOutcomes: [
        "Students can create and use arrays confidently",
        "Students understand array indexing (0-based)",
        "Students can traverse arrays with loops",
        "Students use common String methods"
      ],
      commonMistakes: [
        "ArrayIndexOutOfBoundsException (index >= length)",
        "Using == to compare Strings (use equals())",
        "Confusing length (array) with length() (String)",
        "Not initializing array before using"
      ]
    },
    labs: [
      {
        title: "Lab 5.1: Array Basics",
        difficulty: "beginner",
        description: "Create an array and find sum, average, min, max",
        steps: [
          "Create an array of 5 numbers",
          "Calculate sum using loop",
          "Find average, minimum, maximum",
          "Print all results"
        ],
        code: `public class ArrayStats {
    public static void main(String[] args) {
        int[] numbers = {45, 23, 78, 12, 56};
        
        int sum = 0, min = numbers[0], max = numbers[0];
        
        for (int i = 0; i < numbers.length; i++) {
            sum += numbers[i];
            if (numbers[i] < min) min = numbers[i];
            if (numbers[i] > max) max = numbers[i];
        }
        
        double avg = (double) sum / numbers.length;
        
        System.out.println("Array: 45, 23, 78, 12, 56");
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + avg);
        System.out.println("Minimum: " + min);
        System.out.println("Maximum: " + max);
    }
}`
      },
      {
        title: "Lab 5.2: 2D Array - Matrix Operations",
        difficulty: "intermediate",
        description: "Create a 3x3 matrix and display it formatted",
        steps: [
          "Create a 3x3 2D array with values",
          "Print as a formatted grid",
          "Calculate sum of all elements"
        ],
        code: `public class MatrixDemo {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        int sum = 0;
        
        System.out.println("Matrix:");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + "\\t");
                sum += matrix[i][j];
            }
            System.out.println();
        }
        
        System.out.println("Sum of all elements: " + sum);
    }
}`
      },
      {
        title: "Lab 5.3: String Manipulation",
        difficulty: "intermediate",
        description: "Practice common String methods",
        steps: [
          "Create a String variable",
          "Use at least 6 different String methods",
          "Display results of each operation"
        ],
        code: `public class StringMethods {
    public static void main(String[] args) {
        String text = "Hello, Java World!";
        
        System.out.println("Original: " + text);
        System.out.println("Length: " + text.length());
        System.out.println("Uppercase: " + text.toUpperCase());
        System.out.println("Lowercase: " + text.toLowerCase());
        System.out.println("Character at 7: " + text.charAt(7));
        System.out.println("Substring (7-11): " + text.substring(7, 11));
        System.out.println("Contains 'Java': " + text.contains("Java"));
        System.out.println("Index of 'World': " + text.indexOf("World"));
        System.out.println("Replace 'Java' with 'Python': " + text.replace("Java", "Python"));
    }
}`
      }
    ],
    assignments: [
      {
        id: 5,
        title: "Student Score Analyzer",
        difficulty: "advanced",
        problemStatement: "Create a program that stores marks of 5 students in 3 subjects using a 2D array. Calculate and display: each student's total and percentage, each subject's average, highest scorer, class topper.",
        hints: [
          "Use int[5][3] for 5 students, 3 subjects",
          "Row = student, Column = subject",
          "Calculate row-wise for student totals",
          "Calculate column-wise for subject averages"
        ],
        expectedOutput: "Student 1: Total=240, Percentage=80%\n...\nSubject 1 Average: 75.5\n...\nClass Topper: Student 3 with 92%",
        evaluationCriteria: [
          "Correct 2D array implementation",
          "All calculations are accurate",
          "Output is well-formatted",
          "Efficient use of nested loops"
        ]
      }
    ]
  },
  // Days 6-15 follow the same structure...
  {
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
        analogy: "Think of a class as a blueprint for a house, and objects as actual houses built from that blueprint. Each house has same structure but different paint, furniture, etc."
      },
      {
        title: "Classes and Objects",
        content: [
          "Class: Blueprint/template for objects",
          "Object: Instance of a class",
          "Creating object: ClassName obj = new ClassName();",
          "Accessing members: obj.variableName, obj.methodName()"
        ]
      },
      {
        title: "Instance Variables",
        content: [
          "Variables declared inside class, outside methods",
          "Each object has its own copy",
          "Have default values (0, null, false)",
          "Also called fields or attributes"
        ]
      },
      {
        title: "Methods",
        content: [
          "Block of code that performs a task",
          "Syntax: returnType methodName(parameters) { }",
          "void: Returns nothing",
          "return statement: Sends value back to caller"
        ]
      },
      {
        title: "Method Parameters and Return",
        content: [
          "Parameters: Inputs to the method",
          "Arguments: Actual values passed",
          "Return type: What method gives back",
          "Can return primitive or object"
        ]
      }
    ],
    lessonPlan: {
      objectives: [
        "Understand OOP concepts and their importance",
        "Create classes with instance variables",
        "Define and call methods with parameters",
        "Create objects and access their members"
      ],
      timeSplit: [
        { phase: "Warm-up", duration: "10 mins", activity: "Real-world object identification exercise" },
        { phase: "Theory", duration: "45 mins", activity: "Classes, objects, methods explanation" },
        { phase: "Demo", duration: "35 mins", activity: "Creating Student, BankAccount classes" },
        { phase: "Practice", duration: "50 mins", activity: "Labs - Creating custom classes" },
        { phase: "Wrap-up", duration: "10 mins", activity: "OOP benefits discussion" }
      ],
      whiteboardPoints: [
        "Class vs Object diagram",
        "Method anatomy breakdown",
        "Memory visualization of objects"
      ],
      teachingScript: "We've been writing code in main() so far. Now we learn to organize code into classes. Think about this - when you describe a 'car', you think of properties (color, speed) and actions (start, stop). That's exactly what a class does!",
      expectedOutcomes: [
        "Students can design simple classes",
        "Students understand object creation",
        "Students can write methods with parameters",
        "Students grasp instance vs local variables"
      ],
      commonMistakes: [
        "Forgetting 'new' keyword for object creation",
        "Confusing class name with object name",
        "Not returning value in non-void method",
        "Calling non-static method without object"
      ]
    },
    labs: [
      {
        title: "Lab 6.1: Student Class",
        difficulty: "beginner",
        description: "Create a Student class with basic attributes and methods",
        steps: [
          "Create Student class with name, roll, marks",
          "Add method to display student info",
          "Create objects in main and test"
        ],
        code: `class Student {
    String name;
    int rollNumber;
    double marks;
    
    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Roll No: " + rollNumber);
        System.out.println("Marks: " + marks);
    }
    
    boolean isPassed() {
        return marks >= 40;
    }
}

public class StudentDemo {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Rahul";
        s1.rollNumber = 101;
        s1.marks = 85.5;
        
        s1.displayInfo();
        System.out.println("Passed: " + s1.isPassed());
    }
}`
      }
    ],
    assignments: [
      {
        id: 6,
        title: "BankAccount Class",
        difficulty: "intermediate",
        problemStatement: "Create a BankAccount class with: accountNumber, holderName, balance. Methods: deposit(amount), withdraw(amount), displayBalance(). Create 2 accounts and perform transactions.",
        hints: [
          "Check for valid amounts (> 0)",
          "Check sufficient balance before withdrawal",
          "Update balance after each transaction"
        ],
        expectedOutput: "Account: 1001, Holder: John\nDeposit: ₹5000, Balance: ₹15000\nWithdraw: ₹2000, Balance: ₹13000",
        evaluationCriteria: [
          "Class structure is correct",
          "Methods work as expected",
          "Validation for invalid operations",
          "Multiple objects work independently"
        ]
      }
    ]
  },
  {
    day: 7,
    title: "OOPS - Inheritance, Polymorphism",
    description: "extends, super, method overloading, method overriding",
    icon: "🧬",
    pptSlides: [
      {
        title: "Inheritance",
        content: [
          "Child class inherits from parent class",
          "Use 'extends' keyword",
          "Promotes code reuse",
          "IS-A relationship (Dog IS-A Animal)"
        ],
        analogy: "Like family inheritance - children inherit traits from parents but can have their own unique features too."
      }
    ],
    lessonPlan: {
      objectives: [
        "Implement inheritance using extends",
        "Understand method overloading (compile-time polymorphism)",
        "Implement method overriding (runtime polymorphism)",
        "Use super keyword effectively"
      ],
      timeSplit: [
        { phase: "Warm-up", duration: "10 mins", activity: "Recap classes and objects" },
        { phase: "Theory", duration: "45 mins", activity: "Inheritance and polymorphism" },
        { phase: "Demo", duration: "35 mins", activity: "Animal hierarchy example" },
        { phase: "Practice", duration: "50 mins", activity: "Labs with inheritance" },
        { phase: "Wrap-up", duration: "10 mins", activity: "IS-A vs HAS-A discussion" }
      ],
      whiteboardPoints: [],
      teachingScript: "",
      expectedOutcomes: [],
      commonMistakes: []
    },
    labs: [],
    assignments: []
  },
  {
    day: 8,
    title: "OOPS - Abstraction, Encapsulation",
    description: "abstract classes, interfaces, private, getters/setters",
    icon: "🔐",
    pptSlides: [],
    lessonPlan: {
      objectives: [],
      timeSplit: [],
      whiteboardPoints: [],
      teachingScript: "",
      expectedOutcomes: [],
      commonMistakes: []
    },
    labs: [],
    assignments: []
  },
  {
    day: 9,
    title: "Constructors, Static, This, Super",
    description: "Constructor types, static members, this and super keywords",
    icon: "⚙️",
    pptSlides: [],
    lessonPlan: {
      objectives: [],
      timeSplit: [],
      whiteboardPoints: [],
      teachingScript: "",
      expectedOutcomes: [],
      commonMistakes: []
    },
    labs: [],
    assignments: []
  },
  {
    day: 10,
    title: "Collections Framework",
    description: "List, Set, Map, ArrayList, HashMap, iteration",
    icon: "📚",
    pptSlides: [],
    lessonPlan: {
      objectives: [],
      timeSplit: [],
      whiteboardPoints: [],
      teachingScript: "",
      expectedOutcomes: [],
      commonMistakes: []
    },
    labs: [],
    assignments: []
  },
  {
    day: 11,
    title: "Exception Handling",
    description: "try-catch-finally, throw, throws, custom exceptions",
    icon: "⚠️",
    pptSlides: [],
    lessonPlan: {
      objectives: [],
      timeSplit: [],
      whiteboardPoints: [],
      teachingScript: "",
      expectedOutcomes: [],
      commonMistakes: []
    },
    labs: [],
    assignments: []
  },
  {
    day: 12,
    title: "File Handling & Java IO",
    description: "File class, reading/writing files, BufferedReader/Writer",
    icon: "📁",
    pptSlides: [],
    lessonPlan: {
      objectives: [],
      timeSplit: [],
      whiteboardPoints: [],
      teachingScript: "",
      expectedOutcomes: [],
      commonMistakes: []
    },
    labs: [],
    assignments: []
  },
  {
    day: 13,
    title: "Java 8 Features",
    description: "Lambda expressions, Stream API, functional interfaces",
    icon: "✨",
    pptSlides: [],
    lessonPlan: {
      objectives: [],
      timeSplit: [],
      whiteboardPoints: [],
      teachingScript: "",
      expectedOutcomes: [],
      commonMistakes: []
    },
    labs: [],
    assignments: []
  },
  {
    day: 14,
    title: "Mini Project Workshop",
    description: "Build a complete project applying all concepts",
    icon: "🛠️",
    pptSlides: [],
    lessonPlan: {
      objectives: [],
      timeSplit: [],
      whiteboardPoints: [],
      teachingScript: "",
      expectedOutcomes: [],
      commonMistakes: []
    },
    labs: [],
    assignments: []
  },
  {
    day: 15,
    title: "Revision & Assessment",
    description: "Complete review, final assessment, Q&A session",
    icon: "🎓",
    pptSlides: [],
    lessonPlan: {
      objectives: [],
      timeSplit: [],
      whiteboardPoints: [],
      teachingScript: "",
      expectedOutcomes: [],
      commonMistakes: []
    },
    labs: [],
    assignments: []
  }
];
