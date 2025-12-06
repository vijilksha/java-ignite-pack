import { DayContent } from '../curriculum';

export const day11: DayContent = {
  day: 11,
  title: "Exception Handling",
  description: "try-catch-finally, throw, throws, custom exceptions",
  icon: "⚠️",
  pptSlides: [
    {
      title: "Understanding Exceptions",
      content: [
        "Exception: Unexpected event disrupting normal flow",
        "Without handling: Program crashes",
        "With handling: Program continues gracefully",
        "Java provides robust exception handling mechanism"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Good morning! Today we learn how to make our programs ROBUST - they won't crash when things go wrong!"

📌 WHAT IS AN EXCEPTION?

"An exception is like a speed bump in your code - something unexpected happens!"

\`\`\`java
// Without exception handling:
int result = 10 / 0;  // ArithmeticException - CRASH!

// Real scenarios:
// - File not found when reading
// - Network connection lost
// - User enters text when number expected
// - Array index out of bounds
// - Null pointer access
\`\`\`

📌 REAL-WORLD ANALOGY:

"Think of a delivery service:
📦 Normal: Package delivered successfully
⚠️ Exception: Wrong address, package damaged, recipient not home

Without handling: Delivery person gives up, goes home
With handling: Try alternate address, leave at neighbor, reschedule

Same in programming - we HANDLE problems gracefully!"

📌 EXCEPTION HIERARCHY:

\`\`\`
                      Throwable
                      ↙      ↘
                  Error      Exception
                   ↓           ↙    ↘
          OutOfMemoryError  RuntimeException  IOException
          StackOverflowError      ↓              ↓
                          NullPointerException  FileNotFoundException
                          ArithmeticException   
                          ArrayIndexOutOfBoundsException
\`\`\`

📌 TYPES OF EXCEPTIONS:

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│  TYPE              │  CHECK       │  HANDLING                   │
├─────────────────────────────────────────────────────────────────┤
│  Checked           │  Compile     │  MUST handle (try/throws)   │
│  (IOException)     │  time        │                             │
├─────────────────────────────────────────────────────────────────┤
│  Unchecked         │  Runtime     │  Optional (recommended)     │
│  (NullPointer)     │              │                             │
├─────────────────────────────────────────────────────────────────┤
│  Error             │  Runtime     │  Don't handle (fatal)       │
│  (OutOfMemory)     │              │                             │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

📌 COMMON EXCEPTIONS:

\`\`\`java
// 1. ArithmeticException
int x = 10 / 0;

// 2. NullPointerException
String s = null;
s.length();  // NPE!

// 3. ArrayIndexOutOfBoundsException
int[] arr = {1, 2, 3};
arr[5] = 10;  // Only 0-2 valid!

// 4. NumberFormatException
int num = Integer.parseInt("abc");

// 5. FileNotFoundException
FileReader fr = new FileReader("missing.txt");
\`\`\`

💡 KEY INSIGHT:

"Without exception handling, ONE error crashes the WHOLE program!
With proper handling, we can:
- Log the error
- Show user-friendly message
- Try alternative approach
- Continue with remaining work"`
    },
    {
      title: "try-catch Block",
      content: [
        "try: Code that might throw exception",
        "catch: Handle the exception",
        "Multiple catch blocks for different exceptions",
        "Exception object contains error details"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"The try-catch is your safety net! Code in try is 'risky', catch handles problems."

📌 BASIC SYNTAX:

\`\`\`java
try {
    // Risky code that might throw exception
    int result = 10 / 0;
    System.out.println("Result: " + result);
} catch (ArithmeticException e) {
    // Handle the exception
    System.out.println("Error: Cannot divide by zero!");
}

System.out.println("Program continues...");
// Without try-catch, this line would NEVER execute!
\`\`\`

📌 VISUAL FLOW:

\`\`\`
          try block
              ↓
    [Exception occurs?]
        ↙         ↘
      YES          NO
       ↓            ↓
  catch block   Skip catch
       ↓            ↓
    Continue → Continue
\`\`\`

📌 EXCEPTION OBJECT:

\`\`\`java
try {
    int[] arr = {1, 2, 3};
    System.out.println(arr[10]);
} catch (ArrayIndexOutOfBoundsException e) {
    // Exception object 'e' has useful info:
    
    System.out.println(e.getMessage());
    // "Index 10 out of bounds for length 3"
    
    System.out.println(e.toString());
    // "java.lang.ArrayIndexOutOfBoundsException: Index 10..."
    
    e.printStackTrace();
    // Full stack trace - shows exact line number!
}
\`\`\`

📌 MULTIPLE CATCH BLOCKS:

\`\`\`java
try {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter a number: ");
    int num = Integer.parseInt(sc.nextLine());
    int result = 100 / num;
    System.out.println("Result: " + result);
} catch (NumberFormatException e) {
    System.out.println("Please enter a valid number!");
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero!");
}

// Order matters! More specific exceptions first!
\`\`\`

📌 CATCH ORDER MATTERS:

\`\`\`java
// WRONG - Compilation error!
try {
    // code
} catch (Exception e) {  // Parent first - catches ALL
    
} catch (ArithmeticException e) {  // Child - UNREACHABLE!
    
}

// CORRECT - Child before parent
try {
    // code
} catch (ArithmeticException e) {  // Specific first
    
} catch (Exception e) {  // General last (catches remaining)
    
}
\`\`\`

📌 MULTI-CATCH (Java 7+):

\`\`\`java
// Instead of:
try {
    // code
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
} catch (NumberFormatException e) {
    System.out.println("Error: " + e.getMessage());
}

// Use multi-catch:
try {
    // code
} catch (ArithmeticException | NumberFormatException e) {
    System.out.println("Error: " + e.getMessage());
}
\`\`\`

📌 PRACTICAL EXAMPLE:

\`\`\`java
public static int getAge() {
    Scanner sc = new Scanner(System.in);
    int age = 0;
    boolean valid = false;
    
    while (!valid) {
        try {
            System.out.print("Enter your age: ");
            age = Integer.parseInt(sc.nextLine());
            if (age < 0 || age > 150) {
                throw new IllegalArgumentException("Age must be 0-150");
            }
            valid = true;
        } catch (NumberFormatException e) {
            System.out.println("Please enter a number!");
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
    }
    return age;
}
\`\`\`

⚠️ COMMON MISTAKES:

\`\`\`java
// 1. Empty catch block (swallowing exceptions)
try {
    // code
} catch (Exception e) {
    // NOTHING - Bad! Problem hidden!
}

// 2. Catching Exception for everything
try {
    // code
} catch (Exception e) {
    // Too broad - handle specific exceptions
}

// 3. Business logic in catch
try {
    // normal flow
} catch (Exception e) {
    // Don't put normal business logic here!
}
\`\`\``
    },
    {
      title: "finally Block",
      content: [
        "finally: Always executes (with or without exception)",
        "Used for cleanup (close files, connections)",
        "Runs even if return statement in try/catch",
        "Only exception: System.exit()"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"finally is your GUARANTEED cleanup crew - it runs NO MATTER WHAT!"

📌 WHY FINALLY?

"Think of a restaurant:
- try: Order and eat food
- catch: Handle if food is bad
- finally: ALWAYS pay the bill and leave!

Even if you get sick (exception), you still pay!"

📌 BASIC SYNTAX:

\`\`\`java
try {
    System.out.println("Opening file...");
    // risky code
    int x = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Error occurred!");
} finally {
    System.out.println("Cleaning up...");
    // ALWAYS runs!
}
\`\`\`

📌 FINALLY EXECUTION SCENARIOS:

\`\`\`java
// Scenario 1: No exception
try {
    System.out.println("Try");      // 1. Executes
} catch (Exception e) {
    System.out.println("Catch");    // Skipped
} finally {
    System.out.println("Finally");  // 2. Executes
}
// Output: Try, Finally

// Scenario 2: Exception caught
try {
    System.out.println("Try");      // 1. Executes
    int x = 10 / 0;                 // Exception!
} catch (Exception e) {
    System.out.println("Catch");    // 2. Executes
} finally {
    System.out.println("Finally");  // 3. Executes
}
// Output: Try, Catch, Finally

// Scenario 3: Exception NOT caught (still runs finally!)
try {
    System.out.println("Try");      // 1. Executes
    int x = 10 / 0;                 // Exception!
} catch (NullPointerException e) { // Wrong type!
    System.out.println("Catch");    // Skipped
} finally {
    System.out.println("Finally");  // 2. Executes
}
// Output: Try, Finally, then CRASH
\`\`\`

📌 FINALLY WITH RETURN:

\`\`\`java
public static int testFinally() {
    try {
        System.out.println("In try");
        return 1;
    } catch (Exception e) {
        System.out.println("In catch");
        return 2;
    } finally {
        System.out.println("In finally");
        // Runs BEFORE return!
    }
}

// Output: In try, In finally
// Returns: 1
\`\`\`

📌 PRACTICAL USE - FILE HANDLING:

\`\`\`java
FileReader reader = null;
try {
    reader = new FileReader("data.txt");
    // read file
    char c = (char) reader.read();
    System.out.println(c);
} catch (FileNotFoundException e) {
    System.out.println("File not found!");
} catch (IOException e) {
    System.out.println("Error reading file!");
} finally {
    // ALWAYS close the file!
    if (reader != null) {
        try {
            reader.close();
        } catch (IOException e) {
            System.out.println("Error closing file!");
        }
    }
}
\`\`\`

📌 TRY-WITH-RESOURCES (Java 7+) - BETTER WAY:

\`\`\`java
// Automatically closes resources!
try (FileReader reader = new FileReader("data.txt")) {
    char c = (char) reader.read();
    System.out.println(c);
} catch (FileNotFoundException e) {
    System.out.println("File not found!");
} catch (IOException e) {
    System.out.println("Error reading file!");
}
// No finally needed - auto-closes!
\`\`\`

📌 TRY-FINALLY (NO CATCH):

\`\`\`java
// Valid - just try and finally
try {
    // code
} finally {
    // cleanup
}
// Exception propagates up, but finally still runs
\`\`\`

📌 WHEN FINALLY DOESN'T RUN:

\`\`\`java
try {
    System.out.println("Try");
    System.exit(0);  // JVM terminates!
} finally {
    System.out.println("Finally");  // Never runs!
}

// Also doesn't run if:
// - JVM crashes
// - Infinite loop in try/catch
// - Thread is killed
\`\`\``
    },
    {
      title: "throw and throws Keywords",
      content: [
        "throw: Manually throw an exception",
        "throws: Declare method may throw exception",
        "throw for creating exceptions",
        "throws for delegating responsibility"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"throw creates an exception, throws warns about it. Think of throw as 'fire alarm' and throws as 'fire exit sign'!"

📌 throw VS throws:

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│  throw                    │  throws                        │
├─────────────────────────────────────────────────────────────┤
│  Used in method body      │  Used in method signature      │
│  Actually throws exception│  Declares possible exception   │
│  Followed by instance     │  Followed by class name        │
│  Can throw one at a time  │  Can declare multiple          │
└─────────────────────────────────────────────────────────────┘
\`\`\`

📌 throw KEYWORD:

\`\`\`java
// Manually throwing an exception
public static void validateAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Age cannot be negative!");
    }
    if (age > 150) {
        throw new IllegalArgumentException("Age seems unrealistic!");
    }
    System.out.println("Valid age: " + age);
}

// Usage:
try {
    validateAge(-5);
} catch (IllegalArgumentException e) {
    System.out.println("Error: " + e.getMessage());
}
\`\`\`

📌 throws KEYWORD:

\`\`\`java
// Method declares it might throw IOException
public static void readFile(String filename) throws IOException {
    FileReader reader = new FileReader(filename);
    // ... read file
    reader.close();
}

// Caller MUST handle or declare throws
public static void main(String[] args) {
    try {
        readFile("data.txt");
    } catch (IOException e) {
        System.out.println("File error: " + e.getMessage());
    }
}

// OR propagate further
public static void main(String[] args) throws IOException {
    readFile("data.txt");  // Exception passed to JVM
}
\`\`\`

📌 MULTIPLE throws:

\`\`\`java
public static void processFile(String filename) 
        throws FileNotFoundException, IOException, ParseException {
    FileReader reader = new FileReader(filename);
    // process...
}
\`\`\`

📌 PRACTICAL EXAMPLE - BANK ACCOUNT:

\`\`\`java
class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String message) {
        super(message);
    }
}

class BankAccount {
    private double balance;
    
    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }
    
    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(
                "Cannot withdraw " + amount + ". Balance: " + balance
            );
        }
        balance -= amount;
        System.out.println("Withdrawn: " + amount + ", Remaining: " + balance);
    }
}

// Usage:
BankAccount account = new BankAccount(1000);
try {
    account.withdraw(500);   // Works
    account.withdraw(800);   // Throws exception
} catch (InsufficientFundsException e) {
    System.out.println("Transaction failed: " + e.getMessage());
}
\`\`\`

📌 RETHROWING EXCEPTIONS:

\`\`\`java
public static void method1() throws IOException {
    try {
        // risky code
        throw new IOException("Original error");
    } catch (IOException e) {
        System.out.println("Logging error...");
        throw e;  // Rethrow same exception
    }
}

// Or wrap in another exception:
public static void method2() throws CustomException {
    try {
        method1();
    } catch (IOException e) {
        throw new CustomException("Failed to process", e);  // Chain
    }
}
\`\`\`

📌 WHEN TO USE:

\`\`\`
throw:
✅ When validation fails
✅ When business rule violated
✅ When converting exceptions
✅ When rethrowing

throws:
✅ For checked exceptions
✅ When caller should handle
✅ For method documentation
✅ When propagating exceptions
\`\`\`

⚠️ COMMON MISTAKES:

\`\`\`java
// 1. Throwing but not handling
public void method() throws Exception {
    throw new Exception("Error");
}
// Caller forgets to handle!

// 2. Catching and rethrowing without value
try {
    riskyMethod();
} catch (Exception e) {
    throw e;  // Why catch then?
}

// 3. Using throws for RuntimeException
public void method() throws NullPointerException {
    // Not needed - runtime exceptions don't require throws
}
\`\`\``
    },
    {
      title: "Custom Exceptions",
      content: [
        "Create your own exception classes",
        "Extend Exception (checked) or RuntimeException (unchecked)",
        "Add custom fields and methods",
        "Meaningful exception names"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Custom exceptions make your code more readable and provide specific error information!"

📌 WHY CUSTOM EXCEPTIONS?

"Built-in exceptions are generic. Custom exceptions:
- Have meaningful names (InvalidAgeException vs IllegalArgumentException)
- Carry specific data (failed username, invalid amount)
- Make debugging easier
- Improve code readability"

📌 CREATING CUSTOM EXCEPTION:

\`\`\`java
// Simple custom exception (checked)
public class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

// Usage:
public static void setAge(int age) throws InvalidAgeException {
    if (age < 0 || age > 150) {
        throw new InvalidAgeException("Age must be between 0 and 150");
    }
}
\`\`\`

📌 CUSTOM EXCEPTION WITH EXTRA DATA:

\`\`\`java
public class InsufficientBalanceException extends Exception {
    private double currentBalance;
    private double requestedAmount;
    
    public InsufficientBalanceException(double current, double requested) {
        super("Insufficient balance. Required: " + requested + ", Available: " + current);
        this.currentBalance = current;
        this.requestedAmount = requested;
    }
    
    public double getCurrentBalance() {
        return currentBalance;
    }
    
    public double getRequestedAmount() {
        return requestedAmount;
    }
    
    public double getShortfall() {
        return requestedAmount - currentBalance;
    }
}

// Usage:
try {
    throw new InsufficientBalanceException(500, 1000);
} catch (InsufficientBalanceException e) {
    System.out.println(e.getMessage());
    System.out.println("Shortfall: " + e.getShortfall());
}
\`\`\`

📌 CHECKED VS UNCHECKED CUSTOM:

\`\`\`java
// CHECKED (extend Exception)
// Caller MUST handle or declare
public class DatabaseConnectionException extends Exception {
    public DatabaseConnectionException(String message) {
        super(message);
    }
    
    public DatabaseConnectionException(String message, Throwable cause) {
        super(message, cause);  // Chain original exception
    }
}

// UNCHECKED (extend RuntimeException)
// Caller doesn't need to handle
public class InvalidConfigurationException extends RuntimeException {
    public InvalidConfigurationException(String message) {
        super(message);
    }
}
\`\`\`

📌 COMPLETE EXAMPLE - USER VALIDATION:

\`\`\`java
// Exception classes
class InvalidUsernameException extends Exception {
    public InvalidUsernameException(String message) {
        super(message);
    }
}

class InvalidPasswordException extends Exception {
    public InvalidPasswordException(String message) {
        super(message);
    }
}

class UserAlreadyExistsException extends Exception {
    private String username;
    
    public UserAlreadyExistsException(String username) {
        super("User already exists: " + username);
        this.username = username;
    }
    
    public String getUsername() {
        return username;
    }
}

// Validator class
class UserValidator {
    private Set<String> existingUsers = new HashSet<>();
    
    public void registerUser(String username, String password) 
            throws InvalidUsernameException, InvalidPasswordException, 
                   UserAlreadyExistsException {
        
        // Validate username
        if (username == null || username.length() < 3) {
            throw new InvalidUsernameException(
                "Username must be at least 3 characters"
            );
        }
        if (!username.matches("[a-zA-Z0-9_]+")) {
            throw new InvalidUsernameException(
                "Username can only contain letters, numbers, and underscore"
            );
        }
        
        // Check if exists
        if (existingUsers.contains(username.toLowerCase())) {
            throw new UserAlreadyExistsException(username);
        }
        
        // Validate password
        if (password == null || password.length() < 8) {
            throw new InvalidPasswordException(
                "Password must be at least 8 characters"
            );
        }
        
        // Register user
        existingUsers.add(username.toLowerCase());
        System.out.println("User registered: " + username);
    }
}

// Main
public static void main(String[] args) {
    UserValidator validator = new UserValidator();
    
    try {
        validator.registerUser("john_doe", "password123");
        validator.registerUser("ab", "pass");  // Too short!
    } catch (InvalidUsernameException e) {
        System.out.println("Username Error: " + e.getMessage());
    } catch (InvalidPasswordException e) {
        System.out.println("Password Error: " + e.getMessage());
    } catch (UserAlreadyExistsException e) {
        System.out.println("User Error: " + e.getMessage());
    }
}
\`\`\`

📌 BEST PRACTICES:

\`\`\`
1. Name clearly: XxxException (UserNotFoundException)
2. Extend appropriate parent (Exception or RuntimeException)
3. Provide multiple constructors
4. Include relevant data
5. Document when thrown
6. Use for exceptional cases, not flow control
\`\`\``
    }
  ],
  lessonPlan: {
    objectives: [
      "Understand what exceptions are and why they occur",
      "Master try-catch-finally blocks",
      "Learn to use throw and throws keywords",
      "Create and use custom exceptions"
    ],
    materials: ["IDE", "Exception Hierarchy Chart", "Sample programs with bugs"],
    warmUp: {
      duration: "15 min",
      activity: "Run buggy programs that crash, discuss what went wrong"
    },
    mainContent: [
      { topic: "Exception Concepts", duration: "30 min" },
      { topic: "try-catch Blocks", duration: "40 min" },
      { topic: "finally Block", duration: "25 min" },
      { topic: "throw and throws", duration: "35 min" },
      { topic: "Custom Exceptions", duration: "30 min" }
    ],
    practiceExercises: [
      "Handle division by zero",
      "Validate user input with exceptions",
      "Create custom exception for banking app"
    ],
    assessment: "Build a robust calculator that handles all errors gracefully"
  },
  labs: [
    {
      title: "Lab 1: Basic Exception Handling",
      objective: "Handle common runtime exceptions",
      steps: [
        "Create array and handle index out of bounds",
        "Handle number format exception",
        "Handle null pointer exception",
        "Use exception object methods"
      ],
      codeExamples: [
        {
          title: "Multiple Exception Handler",
          code: `import java.util.Scanner;

public class ExceptionLab {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Handle different exceptions
        try {
            System.out.print("Enter array size: ");
            int size = Integer.parseInt(scanner.nextLine());
            
            int[] numbers = new int[size];
            
            System.out.print("Enter index to access: ");
            int index = Integer.parseInt(scanner.nextLine());
            
            System.out.print("Enter value: ");
            int value = Integer.parseInt(scanner.nextLine());
            
            numbers[index] = value;
            System.out.println("Value set successfully!");
            
            System.out.print("Enter divisor: ");
            int divisor = Integer.parseInt(scanner.nextLine());
            
            int result = value / divisor;
            System.out.println("Result: " + result);
            
        } catch (NumberFormatException e) {
            System.out.println("Error: Please enter valid numbers!");
            System.out.println("Details: " + e.getMessage());
        } catch (NegativeArraySizeException e) {
            System.out.println("Error: Array size cannot be negative!");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Index is out of bounds!");
            System.out.println("Details: " + e.getMessage());
        } catch (ArithmeticException e) {
            System.out.println("Error: Cannot divide by zero!");
        } finally {
            System.out.println("Thank you for using the program!");
            scanner.close();
        }
    }
}`
        }
      ]
    },
    {
      title: "Lab 2: Custom Exception Implementation",
      objective: "Create and use custom exceptions",
      steps: [
        "Create InvalidAgeException class",
        "Create Person class with validation",
        "Throw custom exception when validation fails",
        "Handle custom exception in main"
      ],
      codeExamples: [
        {
          title: "Complete Custom Exception Example",
          code: `// Custom Exception
class InvalidAgeException extends Exception {
    private int invalidAge;
    
    public InvalidAgeException(int age, String message) {
        super(message);
        this.invalidAge = age;
    }
    
    public int getInvalidAge() {
        return invalidAge;
    }
}

// Person class with validation
class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) throws InvalidAgeException {
        if (age < 0) {
            throw new InvalidAgeException(age, "Age cannot be negative");
        }
        if (age > 150) {
            throw new InvalidAgeException(age, "Age cannot exceed 150");
        }
        this.name = name;
        this.age = age;
    }
    
    public void display() {
        System.out.println(name + " is " + age + " years old");
    }
}

// Main class
public class CustomExceptionLab {
    public static void main(String[] args) {
        // Test cases
        int[] testAges = {25, -5, 200, 30};
        String[] testNames = {"Alice", "Bob", "Carol", "David"};
        
        for (int i = 0; i < testAges.length; i++) {
            try {
                Person person = new Person(testNames[i], testAges[i]);
                person.display();
            } catch (InvalidAgeException e) {
                System.out.println("Failed to create " + testNames[i]);
                System.out.println("Reason: " + e.getMessage());
                System.out.println("Invalid age provided: " + e.getInvalidAge());
            }
            System.out.println("---");
        }
    }
}`
        }
      ]
    }
  ],
  assignments: [
    {
      title: "Assignment 1: Robust Calculator",
      description: "Build a calculator that handles all possible errors",
      tasks: [
        "Handle division by zero",
        "Handle invalid number format",
        "Handle null operations",
        "Use try-catch-finally properly"
      ],
      expectedOutput: "Calculator that never crashes regardless of input",
      hints: ["Use multiple catch blocks", "Provide clear error messages"]
    },
    {
      title: "Assignment 2: Bank Transaction System",
      description: "Create banking system with custom exceptions",
      tasks: [
        "Create InsufficientFundsException",
        "Create InvalidAmountException",
        "Create AccountNotFoundException",
        "Implement deposit, withdraw, transfer methods"
      ],
      expectedOutput: "Bank system that handles all error scenarios",
      hints: ["Each exception should carry relevant data", "Use method chaining for exceptions"]
    }
  ]
};
