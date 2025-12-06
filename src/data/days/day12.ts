import { DayContent } from '../curriculum';

export const day12: DayContent = {
  day: 12,
  title: "File I/O Operations",
  description: "Reading, writing files, streams, serialization",
  icon: "📁",
  pptSlides: [
    {
      title: "Introduction to File I/O",
      content: [
        "File: Permanent storage for data",
        "I/O: Input (read) and Output (write)",
        "Streams: Flow of data between program and file",
        "Java provides java.io and java.nio packages"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Today we learn to save data permanently! When program ends, variables are lost - files keep data forever!"

📌 WHY FILE I/O?

"Think about it:
- You write a game - where do you save high scores?
- Bank application - where are account details stored?
- Configuration settings - how do they persist?

Answer: FILES!"

📌 REAL-WORLD ANALOGY:

"Think of a library:
📖 READING: Taking a book from shelf, reading it
✍️ WRITING: Writing in a notebook, putting on shelf

File I/O is the same:
- Open file
- Read or Write
- Close file"

📌 TYPES OF FILES:

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│  TYPE        │  CONTENT           │  EXAMPLES               │
├─────────────────────────────────────────────────────────────┤
│  Text        │  Human readable    │  .txt, .csv, .json      │
│  Binary      │  Machine readable  │  .exe, .jpg, .class     │
└─────────────────────────────────────────────────────────────┘
\`\`\`

📌 STREAM CONCEPT:

\`\`\`
            ┌────────────┐
            │    FILE    │
            └────────────┘
                  ↕
            [  STREAM  ]  ← Pipe/Channel for data flow
                  ↕
            ┌────────────┐
            │  PROGRAM   │
            └────────────┘

Input Stream:  FILE → PROGRAM (Reading)
Output Stream: PROGRAM → FILE (Writing)
\`\`\`

📌 JAVA I/O CLASSES:

\`\`\`
For Text Files:
├── FileReader / FileWriter (character by character)
├── BufferedReader / BufferedWriter (line by line, faster)
├── PrintWriter (convenient writing)
└── Scanner (convenient reading)

For Binary Files:
├── FileInputStream / FileOutputStream
├── BufferedInputStream / BufferedOutputStream
└── DataInputStream / DataOutputStream

For Objects:
├── ObjectInputStream
└── ObjectOutputStream
\`\`\`

📌 FILE CLASS BASICS:

\`\`\`java
import java.io.File;

File file = new File("data.txt");

// Check if exists
if (file.exists()) {
    System.out.println("File exists!");
    System.out.println("Name: " + file.getName());
    System.out.println("Path: " + file.getAbsolutePath());
    System.out.println("Size: " + file.length() + " bytes");
    System.out.println("Can read: " + file.canRead());
    System.out.println("Can write: " + file.canWrite());
    System.out.println("Is directory: " + file.isDirectory());
}

// Create new file
File newFile = new File("newfile.txt");
boolean created = newFile.createNewFile();

// Create directory
File dir = new File("myFolder");
dir.mkdir();

// Delete file
file.delete();
\`\`\``
    },
    {
      title: "Reading Text Files",
      content: [
        "FileReader: Basic character reading",
        "BufferedReader: Efficient line-by-line reading",
        "Scanner: Convenient parsing",
        "Always close resources after use"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Let's learn to READ files! We have several ways - from basic to convenient."

📌 METHOD 1: FileReader (Basic):

\`\`\`java
import java.io.FileReader;
import java.io.IOException;

// Reading character by character
try {
    FileReader reader = new FileReader("data.txt");
    int ch;
    while ((ch = reader.read()) != -1) {
        System.out.print((char) ch);
    }
    reader.close();
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}
\`\`\`

📌 METHOD 2: BufferedReader (Recommended):

\`\`\`java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

// Reading line by line - MUCH faster!
try {
    BufferedReader reader = new BufferedReader(new FileReader("data.txt"));
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
    reader.close();
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}
\`\`\`

📌 METHOD 3: Try-With-Resources (Best Practice):

\`\`\`java
// Auto-closes file even if exception occurs!
try (BufferedReader reader = new BufferedReader(new FileReader("data.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}
// No need to call close() - automatic!
\`\`\`

📌 METHOD 4: Scanner (Convenient):

\`\`\`java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

try {
    Scanner scanner = new Scanner(new File("data.txt"));
    
    while (scanner.hasNextLine()) {
        String line = scanner.nextLine();
        System.out.println(line);
    }
    
    scanner.close();
} catch (FileNotFoundException e) {
    System.out.println("File not found!");
}
\`\`\`

📌 READING SPECIFIC DATA:

\`\`\`java
// File content: John 25 85.5
try (Scanner scanner = new Scanner(new File("student.txt"))) {
    while (scanner.hasNext()) {
        String name = scanner.next();
        int age = scanner.nextInt();
        double marks = scanner.nextDouble();
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Marks: " + marks);
    }
} catch (FileNotFoundException e) {
    System.out.println("File not found!");
}
\`\`\`

📌 READ ENTIRE FILE TO STRING (Java 11+):

\`\`\`java
import java.nio.file.Files;
import java.nio.file.Path;

String content = Files.readString(Path.of("data.txt"));
System.out.println(content);
\`\`\`

📌 READ ALL LINES TO LIST:

\`\`\`java
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

List<String> lines = Files.readAllLines(Paths.get("data.txt"));
for (String line : lines) {
    System.out.println(line);
}
\`\`\`

📌 COMPARISON:

\`\`\`
┌──────────────────────────────────────────────────────────────┐
│  METHOD         │  USE CASE                    │  SPEED      │
├──────────────────────────────────────────────────────────────┤
│  FileReader     │  Small files, char by char   │  Slow       │
│  BufferedReader │  Large files, line by line   │  Fast       │
│  Scanner        │  Parsing mixed data types    │  Medium     │
│  Files.readAll  │  Small files, need all       │  Convenient │
└──────────────────────────────────────────────────────────────┘
\`\`\``
    },
    {
      title: "Writing Text Files",
      content: [
        "FileWriter: Basic character writing",
        "BufferedWriter: Efficient buffered writing",
        "PrintWriter: Convenient printing methods",
        "Append mode vs Overwrite mode"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Now let's WRITE to files! Remember: writing can destroy existing content, be careful!"

📌 METHOD 1: FileWriter (Basic):

\`\`\`java
import java.io.FileWriter;
import java.io.IOException;

try {
    // Overwrites existing content
    FileWriter writer = new FileWriter("output.txt");
    writer.write("Hello, World!");
    writer.write("\\n");  // New line
    writer.write("This is Java I/O");
    writer.close();
    System.out.println("File written successfully!");
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}
\`\`\`

📌 APPEND MODE:

\`\`\`java
// true = append mode (don't erase existing content)
try {
    FileWriter writer = new FileWriter("output.txt", true);
    writer.write("\\nNew line appended!");
    writer.close();
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}
\`\`\`

📌 METHOD 2: BufferedWriter (Faster):

\`\`\`java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))) {
    writer.write("Line 1");
    writer.newLine();  // Platform-independent new line
    writer.write("Line 2");
    writer.newLine();
    writer.write("Line 3");
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}
\`\`\`

📌 METHOD 3: PrintWriter (Most Convenient):

\`\`\`java
import java.io.PrintWriter;
import java.io.FileNotFoundException;

try (PrintWriter writer = new PrintWriter("output.txt")) {
    // Familiar print methods!
    writer.println("Hello World");
    writer.println("Name: John");
    writer.printf("Age: %d%n", 25);
    writer.printf("Score: %.2f%n", 85.75);
} catch (FileNotFoundException e) {
    System.out.println("Cannot create file!");
}
\`\`\`

📌 PRACTICAL EXAMPLE - SAVE STUDENT DATA:

\`\`\`java
import java.io.*;
import java.util.*;

class Student {
    String name;
    int age;
    double marks;
    
    Student(String name, int age, double marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
}

public class StudentFileDemo {
    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();
        students.add(new Student("Alice", 20, 85.5));
        students.add(new Student("Bob", 22, 78.0));
        students.add(new Student("Carol", 21, 92.5));
        
        // Write to file
        try (PrintWriter writer = new PrintWriter("students.txt")) {
            for (Student s : students) {
                writer.println(s.name + "," + s.age + "," + s.marks);
            }
            System.out.println("Data saved!");
        } catch (FileNotFoundException e) {
            System.out.println("Error: " + e.getMessage());
        }
        
        // Read from file
        try (BufferedReader reader = new BufferedReader(
                new FileReader("students.txt"))) {
            String line;
            System.out.println("\\nReading data:");
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                System.out.printf("Name: %s, Age: %s, Marks: %s%n",
                    parts[0], parts[1], parts[2]);
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
\`\`\`

📌 FILES CLASS (Java 7+):

\`\`\`java
import java.nio.file.*;
import java.util.*;

// Write string
Files.writeString(Path.of("output.txt"), "Hello World");

// Write lines
List<String> lines = Arrays.asList("Line 1", "Line 2", "Line 3");
Files.write(Path.of("output.txt"), lines);

// Append
Files.writeString(Path.of("output.txt"), "\\nAppended", 
    StandardOpenOption.APPEND);
\`\`\`

⚠️ COMMON MISTAKES:

\`\`\`java
// 1. Forgetting to close
FileWriter fw = new FileWriter("file.txt");
fw.write("data");
// fw.close(); - MISSING! Data may not be saved!

// 2. Forgetting append mode
FileWriter fw = new FileWriter("log.txt");  // Erases existing!
// Should be:
FileWriter fw = new FileWriter("log.txt", true);

// 3. Not using try-with-resources
// Always use try-with-resources for auto-close!
\`\`\``
    },
    {
      title: "Object Serialization",
      content: [
        "Serialization: Convert object to byte stream",
        "Deserialization: Convert byte stream to object",
        "Implement Serializable interface",
        "transient keyword to skip fields"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Serialization lets you SAVE entire objects to files and LOAD them back! Like freezing food and thawing it later."

📌 WHY SERIALIZATION?

"Normal files store text. But what if you want to save:
- A Student object with all its fields
- A list of Product objects
- Game state with player, inventory, scores

Serialization converts objects to bytes that can be saved!"

📌 SERIALIZABLE INTERFACE:

\`\`\`java
import java.io.Serializable;

// Class must implement Serializable
class Student implements Serializable {
    // serialVersionUID - version control for class
    private static final long serialVersionUID = 1L;
    
    private String name;
    private int age;
    private double marks;
    
    // transient - won't be serialized
    private transient String password;
    
    public Student(String name, int age, double marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    
    @Override
    public String toString() {
        return "Student{name='" + name + "', age=" + age + ", marks=" + marks + "}";
    }
}
\`\`\`

📌 SAVING OBJECT (Serialization):

\`\`\`java
import java.io.*;

Student student = new Student("Alice", 20, 85.5);

try (ObjectOutputStream oos = new ObjectOutputStream(
        new FileOutputStream("student.ser"))) {
    oos.writeObject(student);
    System.out.println("Object saved!");
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}
\`\`\`

📌 LOADING OBJECT (Deserialization):

\`\`\`java
try (ObjectInputStream ois = new ObjectInputStream(
        new FileInputStream("student.ser"))) {
    Student loaded = (Student) ois.readObject();
    System.out.println("Loaded: " + loaded);
} catch (IOException | ClassNotFoundException e) {
    System.out.println("Error: " + e.getMessage());
}
\`\`\`

📌 SAVING MULTIPLE OBJECTS:

\`\`\`java
List<Student> students = new ArrayList<>();
students.add(new Student("Alice", 20, 85.5));
students.add(new Student("Bob", 22, 78.0));
students.add(new Student("Carol", 21, 92.5));

// Save list
try (ObjectOutputStream oos = new ObjectOutputStream(
        new FileOutputStream("students.ser"))) {
    oos.writeObject(students);
    System.out.println("List saved!");
} catch (IOException e) {
    e.printStackTrace();
}

// Load list
try (ObjectInputStream ois = new ObjectInputStream(
        new FileInputStream("students.ser"))) {
    List<Student> loaded = (List<Student>) ois.readObject();
    for (Student s : loaded) {
        System.out.println(s);
    }
} catch (IOException | ClassNotFoundException e) {
    e.printStackTrace();
}
\`\`\`

📌 transient KEYWORD:

\`\`\`java
class User implements Serializable {
    private String username;
    private transient String password;  // Won't be saved!
    private transient Connection dbConn; // Can't serialize connections
    
    // After deserialization:
    // - username will have value
    // - password will be null
    // - dbConn will be null
}
\`\`\`

📌 serialVersionUID:

\`\`\`java
class Product implements Serializable {
    // If class structure changes, update this!
    private static final long serialVersionUID = 1L;
    
    // If you add new fields and don't update serialVersionUID,
    // old serialized objects may fail to load
}
\`\`\`

📌 PRACTICAL EXAMPLE - GAME SAVE:

\`\`\`java
class GameState implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private String playerName;
    private int level;
    private int score;
    private List<String> inventory;
    
    // ... constructor and methods
    
    public void save(String filename) {
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream(filename))) {
            oos.writeObject(this);
            System.out.println("Game saved!");
        } catch (IOException e) {
            System.out.println("Failed to save game!");
        }
    }
    
    public static GameState load(String filename) {
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream(filename))) {
            return (GameState) ois.readObject();
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Failed to load game!");
            return null;
        }
    }
}
\`\`\``
    },
    {
      title: "Binary Files and Streams",
      content: [
        "Binary files: Store raw bytes",
        "FileInputStream/FileOutputStream for bytes",
        "DataInputStream/DataOutputStream for primitives",
        "Useful for images, audio, custom formats"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Binary files store raw data - images, audio, custom formats. Let's see how to handle them!"

📌 BYTE STREAMS:

\`\`\`java
import java.io.*;

// Reading bytes
try (FileInputStream fis = new FileInputStream("image.jpg")) {
    int byteData;
    while ((byteData = fis.read()) != -1) {
        // Process each byte
    }
} catch (IOException e) {
    e.printStackTrace();
}

// Writing bytes
try (FileOutputStream fos = new FileOutputStream("copy.jpg")) {
    byte[] data = {65, 66, 67};  // ABC
    fos.write(data);
} catch (IOException e) {
    e.printStackTrace();
}
\`\`\`

📌 COPYING FILES:

\`\`\`java
public static void copyFile(String source, String dest) throws IOException {
    try (FileInputStream fis = new FileInputStream(source);
         FileOutputStream fos = new FileOutputStream(dest)) {
        
        byte[] buffer = new byte[1024];  // 1KB buffer
        int bytesRead;
        
        while ((bytesRead = fis.read(buffer)) != -1) {
            fos.write(buffer, 0, bytesRead);
        }
    }
    System.out.println("File copied!");
}

// Modern way (Java 7+):
Files.copy(Path.of("source.jpg"), Path.of("dest.jpg"));
\`\`\`

📌 DATA STREAMS (Primitives):

\`\`\`java
// Writing primitive data
try (DataOutputStream dos = new DataOutputStream(
        new FileOutputStream("data.bin"))) {
    dos.writeInt(100);
    dos.writeDouble(3.14);
    dos.writeBoolean(true);
    dos.writeUTF("Hello");
} catch (IOException e) {
    e.printStackTrace();
}

// Reading primitive data
try (DataInputStream dis = new DataInputStream(
        new FileInputStream("data.bin"))) {
    int num = dis.readInt();
    double pi = dis.readDouble();
    boolean flag = dis.readBoolean();
    String text = dis.readUTF();
    
    System.out.println(num + ", " + pi + ", " + flag + ", " + text);
} catch (IOException e) {
    e.printStackTrace();
}
\`\`\`

📌 PRACTICAL: SAVE GAME SCORES:

\`\`\`java
class HighScoreManager {
    private static final String FILE = "scores.dat";
    
    public static void saveScores(int[] scores) {
        try (DataOutputStream dos = new DataOutputStream(
                new FileOutputStream(FILE))) {
            dos.writeInt(scores.length);  // Write count first
            for (int score : scores) {
                dos.writeInt(score);
            }
        } catch (IOException e) {
            System.out.println("Failed to save scores!");
        }
    }
    
    public static int[] loadScores() {
        try (DataInputStream dis = new DataInputStream(
                new FileInputStream(FILE))) {
            int count = dis.readInt();
            int[] scores = new int[count];
            for (int i = 0; i < count; i++) {
                scores[i] = dis.readInt();
            }
            return scores;
        } catch (IOException e) {
            return new int[0];
        }
    }
}
\`\`\`

📌 COMPARISON:

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│  STREAM TYPE              │  USE CASE                          │
├─────────────────────────────────────────────────────────────────┤
│  FileInputStream/Output   │  Raw bytes, copying files          │
│  DataInputStream/Output   │  Primitive types (int, double)     │
│  ObjectInputStream/Output │  Complete objects                  │
│  BufferedInputStream/Out  │  Faster I/O with buffering         │
└─────────────────────────────────────────────────────────────────┘
\`\`\``
    }
  ],
  lessonPlan: {
    objectives: [
      "Understand file handling concepts and streams",
      "Read and write text files using various methods",
      "Implement object serialization and deserialization",
      "Work with binary files and data streams"
    ],
    materials: ["IDE", "Sample text files", "Sample data files"],
    warmUp: {
      duration: "10 min",
      activity: "Discuss where applications store their data"
    },
    mainContent: [
      { topic: "File I/O Introduction", duration: "25 min" },
      { topic: "Reading Text Files", duration: "40 min" },
      { topic: "Writing Text Files", duration: "35 min" },
      { topic: "Object Serialization", duration: "40 min" },
      { topic: "Binary Streams", duration: "30 min" }
    ],
    practiceExercises: [
      "Read and display a text file",
      "Write user input to file",
      "Serialize and deserialize objects"
    ],
    assessment: "Build a student record system with file persistence"
  },
  labs: [
    {
      title: "Lab 1: Text File Operations",
      objective: "Master reading and writing text files",
      steps: [
        "Create a file and write multiple lines",
        "Read the file line by line",
        "Append new content",
        "Count lines, words, characters"
      ],
      codeExamples: [
        {
          title: "Complete Text File Example",
          code: `import java.io.*;
import java.util.*;

public class TextFileDemo {
    public static void main(String[] args) {
        String filename = "sample.txt";
        
        // Write to file
        try (PrintWriter writer = new PrintWriter(filename)) {
            writer.println("Hello, World!");
            writer.println("Java File I/O is fun");
            writer.println("This is line 3");
            System.out.println("File written successfully!");
        } catch (FileNotFoundException e) {
            System.out.println("Cannot create file!");
        }
        
        // Read and count
        int lines = 0, words = 0, chars = 0;
        
        try (BufferedReader reader = new BufferedReader(
                new FileReader(filename))) {
            String line;
            while ((line = reader.readLine()) != null) {
                lines++;
                words += line.split("\\\\s+").length;
                chars += line.length();
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error reading file!");
        }
        
        System.out.println("\\nStatistics:");
        System.out.println("Lines: " + lines);
        System.out.println("Words: " + words);
        System.out.println("Characters: " + chars);
        
        // Append
        try (FileWriter writer = new FileWriter(filename, true)) {
            writer.write("\\nAppended line");
            System.out.println("\\nContent appended!");
        } catch (IOException e) {
            System.out.println("Error appending!");
        }
    }
}`
        }
      ]
    },
    {
      title: "Lab 2: Object Serialization",
      objective: "Save and load objects to/from files",
      steps: [
        "Create a serializable Employee class",
        "Save employee to file",
        "Load employee from file",
        "Save and load a list of employees"
      ],
      codeExamples: [
        {
          title: "Employee Serialization",
          code: `import java.io.*;
import java.util.*;

class Employee implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private int id;
    private String name;
    private double salary;
    private transient String tempData;  // Won't be saved
    
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    
    @Override
    public String toString() {
        return "Employee{id=" + id + ", name='" + name + "', salary=" + salary + "}";
    }
}

public class SerializationDemo {
    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee(1, "Alice", 50000));
        employees.add(new Employee(2, "Bob", 60000));
        employees.add(new Employee(3, "Carol", 55000));
        
        // Save
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream("employees.ser"))) {
            oos.writeObject(employees);
            System.out.println("Employees saved!");
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        // Load
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream("employees.ser"))) {
            List<Employee> loaded = (List<Employee>) ois.readObject();
            System.out.println("\\nLoaded employees:");
            for (Employee emp : loaded) {
                System.out.println(emp);
            }
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}`
        }
      ]
    }
  ],
  assignments: [
    {
      title: "Assignment 1: Contact Manager",
      description: "Build a contact manager that saves to file",
      tasks: [
        "Create Contact class with name, phone, email",
        "Add contact and save to file",
        "Load contacts from file",
        "Search contacts by name"
      ],
      expectedOutput: "Contact manager with file persistence",
      hints: ["Use serialization or CSV format", "Handle file not found gracefully"]
    },
    {
      title: "Assignment 2: Log File Analyzer",
      description: "Read and analyze a log file",
      tasks: [
        "Read log file line by line",
        "Count ERROR, WARN, INFO entries",
        "Extract timestamps",
        "Generate summary report"
      ],
      expectedOutput: "Summary of log file analysis",
      hints: ["Use BufferedReader", "Use String split or regex"]
    }
  ]
};
