import { DayContent } from '../curriculum';

export const day14: DayContent = {
  day: 14,
  title: "Mini Project Day",
  description: "Build a complete Java application combining all concepts",
  icon: "🚀",
  pptSlides: [
    {
      title: "Project Overview",
      content: [
        "Apply all learned concepts in one project",
        "Build a Library Management System",
        "Practice OOP, Collections, Exception Handling, File I/O",
        "Work in teams or individually"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Today is PROJECT DAY! You will build a complete application using everything you have learned!"

📌 PROJECT: LIBRARY MANAGEMENT SYSTEM

"We will build a system that:
- Manages books (add, view, search, delete)
- Manages members (register, view)
- Handles book borrowing and returning
- Saves data to files
- Handles all errors gracefully"

📌 CONCEPTS WE WILL USE:

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│  CONCEPT              │  WHERE USED                            │
├─────────────────────────────────────────────────────────────────┤
│  Classes & Objects    │  Book, Member, Library classes         │
│  Inheritance          │  Different book types                  │
│  Encapsulation        │  Private fields, getters/setters       │
│  Polymorphism         │  Common interfaces                     │
│  Collections          │  ArrayList for books and members       │
│  Exception Handling   │  Input validation, file errors         │
│  File I/O             │  Save/load library data                │
│  Interfaces           │  Searchable, Displayable               │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

📌 PROJECT STRUCTURE:

\`\`\`
LibraryManagementSystem/
├── model/
│   ├── Book.java
│   ├── Member.java
│   └── BorrowRecord.java
├── service/
│   ├── LibraryService.java
│   └── FileManager.java
├── exception/
│   ├── BookNotFoundException.java
│   ├── MemberNotFoundException.java
│   └── BookNotAvailableException.java
├── util/
│   └── InputValidator.java
└── Main.java
\`\`\`

📌 MENU SYSTEM:

\`\`\`
╔═══════════════════════════════════════╗
║     LIBRARY MANAGEMENT SYSTEM         ║
╠═══════════════════════════════════════╣
║  1. Add New Book                      ║
║  2. View All Books                    ║
║  3. Search Book                       ║
║  4. Register Member                   ║
║  5. View All Members                  ║
║  6. Borrow Book                       ║
║  7. Return Book                       ║
║  8. View Borrowed Books               ║
║  9. Save Data                         ║
║  10. Exit                             ║
╚═══════════════════════════════════════╝
\`\`\``
    },
    {
      title: "Model Classes Design",
      content: [
        "Book class with properties and methods",
        "Member class for library members",
        "BorrowRecord to track borrowing",
        "Use proper encapsulation"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Let's design our model classes - the building blocks of our system!"

📌 BOOK CLASS:

\`\`\`java
import java.io.Serializable;
import java.util.Objects;

public class Book implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private String isbn;
    private String title;
    private String author;
    private String category;
    private boolean isAvailable;
    
    public Book(String isbn, String title, String author, String category) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.category = category;
        this.isAvailable = true;
    }
    
    // Getters and setters
    public String getIsbn() { return isbn; }
    public String getTitle() { return title; }
    public String getAuthor() { return author; }
    public String getCategory() { return category; }
    public boolean isAvailable() { return isAvailable; }
    
    public void setAvailable(boolean available) {
        this.isAvailable = available;
    }
    
    @Override
    public String toString() {
        return String.format("%-10s | %-30s | %-20s | %-15s | %s",
            isbn, title, author, category, 
            isAvailable ? "Available" : "Borrowed");
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Book book = (Book) o;
        return Objects.equals(isbn, book.isbn);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(isbn);
    }
}
\`\`\`

📌 MEMBER CLASS:

\`\`\`java
import java.io.Serializable;
import java.time.LocalDate;

public class Member implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private String memberId;
    private String name;
    private String email;
    private String phone;
    private LocalDate joinDate;
    
    public Member(String memberId, String name, String email, String phone) {
        this.memberId = memberId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.joinDate = LocalDate.now();
    }
    
    // Getters
    public String getMemberId() { return memberId; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getPhone() { return phone; }
    public LocalDate getJoinDate() { return joinDate; }
    
    @Override
    public String toString() {
        return String.format("%-10s | %-25s | %-25s | %-15s | %s",
            memberId, name, email, phone, joinDate);
    }
}
\`\`\`

📌 BORROW RECORD CLASS:

\`\`\`java
import java.io.Serializable;
import java.time.LocalDate;

public class BorrowRecord implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private String recordId;
    private String bookIsbn;
    private String memberId;
    private LocalDate borrowDate;
    private LocalDate dueDate;
    private LocalDate returnDate;
    
    public BorrowRecord(String bookIsbn, String memberId) {
        this.recordId = "BR" + System.currentTimeMillis();
        this.bookIsbn = bookIsbn;
        this.memberId = memberId;
        this.borrowDate = LocalDate.now();
        this.dueDate = borrowDate.plusDays(14);  // 2 weeks
        this.returnDate = null;
    }
    
    public void returnBook() {
        this.returnDate = LocalDate.now();
    }
    
    public boolean isOverdue() {
        if (returnDate != null) return false;
        return LocalDate.now().isAfter(dueDate);
    }
    
    // Getters
    public String getBookIsbn() { return bookIsbn; }
    public String getMemberId() { return memberId; }
    public LocalDate getBorrowDate() { return borrowDate; }
    public LocalDate getDueDate() { return dueDate; }
    public LocalDate getReturnDate() { return returnDate; }
    public boolean isReturned() { return returnDate != null; }
}
\`\`\``
    },
    {
      title: "Custom Exceptions",
      content: [
        "BookNotFoundException for missing books",
        "MemberNotFoundException for missing members",
        "BookNotAvailableException for borrowed books",
        "Meaningful error messages"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Let's create custom exceptions for better error handling!"

📌 BOOK NOT FOUND EXCEPTION:

\`\`\`java
public class BookNotFoundException extends Exception {
    private String isbn;
    
    public BookNotFoundException(String isbn) {
        super("Book not found with ISBN: " + isbn);
        this.isbn = isbn;
    }
    
    public String getIsbn() {
        return isbn;
    }
}
\`\`\`

📌 MEMBER NOT FOUND EXCEPTION:

\`\`\`java
public class MemberNotFoundException extends Exception {
    private String memberId;
    
    public MemberNotFoundException(String memberId) {
        super("Member not found with ID: " + memberId);
        this.memberId = memberId;
    }
    
    public String getMemberId() {
        return memberId;
    }
}
\`\`\`

📌 BOOK NOT AVAILABLE EXCEPTION:

\`\`\`java
public class BookNotAvailableException extends Exception {
    private String isbn;
    private String currentBorrower;
    
    public BookNotAvailableException(String isbn) {
        super("Book is not available for borrowing: " + isbn);
        this.isbn = isbn;
    }
    
    public BookNotAvailableException(String isbn, String borrower) {
        super("Book " + isbn + " is currently borrowed by member: " + borrower);
        this.isbn = isbn;
        this.currentBorrower = borrower;
    }
}
\`\`\`

📌 INVALID INPUT EXCEPTION:

\`\`\`java
public class InvalidInputException extends RuntimeException {
    public InvalidInputException(String message) {
        super(message);
    }
}
\`\`\`

📌 USING EXCEPTIONS:

\`\`\`java
public Book findBook(String isbn) throws BookNotFoundException {
    for (Book book : books) {
        if (book.getIsbn().equals(isbn)) {
            return book;
        }
    }
    throw new BookNotFoundException(isbn);
}

public void borrowBook(String isbn, String memberId) 
        throws BookNotFoundException, MemberNotFoundException, 
               BookNotAvailableException {
    
    Book book = findBook(isbn);  // May throw BookNotFoundException
    Member member = findMember(memberId);  // May throw MemberNotFoundException
    
    if (!book.isAvailable()) {
        throw new BookNotAvailableException(isbn);
    }
    
    // Process borrowing
    book.setAvailable(false);
    BorrowRecord record = new BorrowRecord(isbn, memberId);
    borrowRecords.add(record);
}
\`\`\``
    },
    {
      title: "Library Service Implementation",
      content: [
        "Core business logic",
        "CRUD operations for books and members",
        "Borrow and return functionality",
        "Search and filter capabilities"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"The LibraryService class contains all business logic!"

📌 LIBRARY SERVICE CLASS:

\`\`\`java
import java.util.*;
import java.util.stream.Collectors;

public class LibraryService {
    private List<Book> books;
    private List<Member> members;
    private List<BorrowRecord> borrowRecords;
    
    public LibraryService() {
        this.books = new ArrayList<>();
        this.members = new ArrayList<>();
        this.borrowRecords = new ArrayList<>();
    }
    
    // ===== BOOK OPERATIONS =====
    
    public void addBook(Book book) {
        if (findBookByIsbn(book.getIsbn()) != null) {
            throw new IllegalArgumentException("Book with ISBN already exists!");
        }
        books.add(book);
        System.out.println("Book added successfully: " + book.getTitle());
    }
    
    public Book findBookByIsbn(String isbn) {
        for (Book book : books) {
            if (book.getIsbn().equalsIgnoreCase(isbn)) {
                return book;
            }
        }
        return null;
    }
    
    public List<Book> searchBooks(String keyword) {
        String search = keyword.toLowerCase();
        return books.stream()
            .filter(b -> b.getTitle().toLowerCase().contains(search) ||
                        b.getAuthor().toLowerCase().contains(search) ||
                        b.getCategory().toLowerCase().contains(search))
            .collect(Collectors.toList());
    }
    
    public List<Book> getAllBooks() {
        return new ArrayList<>(books);
    }
    
    public List<Book> getAvailableBooks() {
        return books.stream()
            .filter(Book::isAvailable)
            .collect(Collectors.toList());
    }
    
    // ===== MEMBER OPERATIONS =====
    
    public void registerMember(Member member) {
        if (findMemberById(member.getMemberId()) != null) {
            throw new IllegalArgumentException("Member ID already exists!");
        }
        members.add(member);
        System.out.println("Member registered: " + member.getName());
    }
    
    public Member findMemberById(String memberId) {
        for (Member member : members) {
            if (member.getMemberId().equalsIgnoreCase(memberId)) {
                return member;
            }
        }
        return null;
    }
    
    public List<Member> getAllMembers() {
        return new ArrayList<>(members);
    }
    
    // ===== BORROW OPERATIONS =====
    
    public void borrowBook(String isbn, String memberId) 
            throws BookNotFoundException, MemberNotFoundException, 
                   BookNotAvailableException {
        
        Book book = findBookByIsbn(isbn);
        if (book == null) {
            throw new BookNotFoundException(isbn);
        }
        
        Member member = findMemberById(memberId);
        if (member == null) {
            throw new MemberNotFoundException(memberId);
        }
        
        if (!book.isAvailable()) {
            throw new BookNotAvailableException(isbn);
        }
        
        book.setAvailable(false);
        BorrowRecord record = new BorrowRecord(isbn, memberId);
        borrowRecords.add(record);
        
        System.out.printf("Book '%s' borrowed by %s. Due: %s%n",
            book.getTitle(), member.getName(), record.getDueDate());
    }
    
    public void returnBook(String isbn) throws BookNotFoundException {
        Book book = findBookByIsbn(isbn);
        if (book == null) {
            throw new BookNotFoundException(isbn);
        }
        
        // Find active borrow record
        for (BorrowRecord record : borrowRecords) {
            if (record.getBookIsbn().equals(isbn) && !record.isReturned()) {
                record.returnBook();
                book.setAvailable(true);
                
                if (record.isOverdue()) {
                    System.out.println("Note: This book was overdue!");
                }
                System.out.println("Book returned successfully: " + book.getTitle());
                return;
            }
        }
        
        System.out.println("This book was not borrowed!");
    }
    
    public List<BorrowRecord> getActiveBorrows() {
        return borrowRecords.stream()
            .filter(r -> !r.isReturned())
            .collect(Collectors.toList());
    }
    
    // ===== DATA ACCESS =====
    
    public void setBooks(List<Book> books) { this.books = books; }
    public void setMembers(List<Member> members) { this.members = members; }
    public void setBorrowRecords(List<BorrowRecord> records) { this.borrowRecords = records; }
    
    public List<BorrowRecord> getBorrowRecords() { return borrowRecords; }
}
\`\`\``
    },
    {
      title: "File Management",
      content: [
        "Save data using serialization",
        "Load data on startup",
        "Handle file errors gracefully",
        "Backup functionality"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"The FileManager handles saving and loading our library data!"

📌 FILE MANAGER CLASS:

\`\`\`java
import java.io.*;
import java.util.*;

public class FileManager {
    private static final String BOOKS_FILE = "library_books.dat";
    private static final String MEMBERS_FILE = "library_members.dat";
    private static final String RECORDS_FILE = "library_records.dat";
    
    public static void saveBooks(List<Book> books) {
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream(BOOKS_FILE))) {
            oos.writeObject(books);
            System.out.println("Books saved successfully!");
        } catch (IOException e) {
            System.out.println("Error saving books: " + e.getMessage());
        }
    }
    
    @SuppressWarnings("unchecked")
    public static List<Book> loadBooks() {
        File file = new File(BOOKS_FILE);
        if (!file.exists()) {
            return new ArrayList<>();
        }
        
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream(file))) {
            return (List<Book>) ois.readObject();
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Error loading books: " + e.getMessage());
            return new ArrayList<>();
        }
    }
    
    public static void saveMembers(List<Member> members) {
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream(MEMBERS_FILE))) {
            oos.writeObject(members);
            System.out.println("Members saved successfully!");
        } catch (IOException e) {
            System.out.println("Error saving members: " + e.getMessage());
        }
    }
    
    @SuppressWarnings("unchecked")
    public static List<Member> loadMembers() {
        File file = new File(MEMBERS_FILE);
        if (!file.exists()) {
            return new ArrayList<>();
        }
        
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream(file))) {
            return (List<Member>) ois.readObject();
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Error loading members: " + e.getMessage());
            return new ArrayList<>();
        }
    }
    
    public static void saveBorrowRecords(List<BorrowRecord> records) {
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream(RECORDS_FILE))) {
            oos.writeObject(records);
            System.out.println("Borrow records saved successfully!");
        } catch (IOException e) {
            System.out.println("Error saving records: " + e.getMessage());
        }
    }
    
    @SuppressWarnings("unchecked")
    public static List<BorrowRecord> loadBorrowRecords() {
        File file = new File(RECORDS_FILE);
        if (!file.exists()) {
            return new ArrayList<>();
        }
        
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream(file))) {
            return (List<BorrowRecord>) ois.readObject();
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Error loading records: " + e.getMessage());
            return new ArrayList<>();
        }
    }
    
    public static void saveAll(LibraryService library) {
        saveBooks(library.getAllBooks());
        saveMembers(library.getAllMembers());
        saveBorrowRecords(library.getBorrowRecords());
    }
    
    public static void loadAll(LibraryService library) {
        library.setBooks(loadBooks());
        library.setMembers(loadMembers());
        library.setBorrowRecords(loadBorrowRecords());
        System.out.println("Library data loaded!");
    }
}
\`\`\``
    },
    {
      title: "Main Application",
      content: [
        "Menu-driven interface",
        "Input validation",
        "Proper exception handling",
        "Clean user experience"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Now let's put it all together in the Main class!"

📌 MAIN CLASS:

\`\`\`java
import java.util.*;

public class Main {
    private static Scanner scanner = new Scanner(System.in);
    private static LibraryService library = new LibraryService();
    
    public static void main(String[] args) {
        System.out.println("Loading library data...");
        FileManager.loadAll(library);
        
        boolean running = true;
        while (running) {
            displayMenu();
            int choice = getIntInput("Enter choice: ");
            
            switch (choice) {
                case 1: addBook(); break;
                case 2: viewAllBooks(); break;
                case 3: searchBook(); break;
                case 4: registerMember(); break;
                case 5: viewAllMembers(); break;
                case 6: borrowBook(); break;
                case 7: returnBook(); break;
                case 8: viewBorrowedBooks(); break;
                case 9: saveData(); break;
                case 10: 
                    saveData();
                    running = false;
                    break;
                default:
                    System.out.println("Invalid choice!");
            }
        }
        
        System.out.println("Thank you for using Library Management System!");
    }
    
    private static void displayMenu() {
        System.out.println("\\n╔═══════════════════════════════════════╗");
        System.out.println("║     LIBRARY MANAGEMENT SYSTEM         ║");
        System.out.println("╠═══════════════════════════════════════╣");
        System.out.println("║  1. Add New Book                      ║");
        System.out.println("║  2. View All Books                    ║");
        System.out.println("║  3. Search Book                       ║");
        System.out.println("║  4. Register Member                   ║");
        System.out.println("║  5. View All Members                  ║");
        System.out.println("║  6. Borrow Book                       ║");
        System.out.println("║  7. Return Book                       ║");
        System.out.println("║  8. View Borrowed Books               ║");
        System.out.println("║  9. Save Data                         ║");
        System.out.println("║  10. Exit                             ║");
        System.out.println("╚═══════════════════════════════════════╝");
    }
    
    private static void addBook() {
        System.out.println("\\n--- Add New Book ---");
        String isbn = getStringInput("ISBN: ");
        String title = getStringInput("Title: ");
        String author = getStringInput("Author: ");
        String category = getStringInput("Category: ");
        
        try {
            Book book = new Book(isbn, title, author, category);
            library.addBook(book);
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
    
    private static void viewAllBooks() {
        List<Book> books = library.getAllBooks();
        if (books.isEmpty()) {
            System.out.println("No books in library!");
            return;
        }
        
        System.out.println("\\n--- All Books ---");
        System.out.printf("%-10s | %-30s | %-20s | %-15s | %s%n",
            "ISBN", "Title", "Author", "Category", "Status");
        System.out.println("-".repeat(95));
        
        for (Book book : books) {
            System.out.println(book);
        }
    }
    
    private static void searchBook() {
        String keyword = getStringInput("Enter search keyword: ");
        List<Book> results = library.searchBooks(keyword);
        
        if (results.isEmpty()) {
            System.out.println("No books found!");
            return;
        }
        
        System.out.println("\\n--- Search Results ---");
        for (Book book : results) {
            System.out.println(book);
        }
    }
    
    private static void registerMember() {
        System.out.println("\\n--- Register Member ---");
        String id = getStringInput("Member ID: ");
        String name = getStringInput("Name: ");
        String email = getStringInput("Email: ");
        String phone = getStringInput("Phone: ");
        
        try {
            Member member = new Member(id, name, email, phone);
            library.registerMember(member);
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
    
    private static void viewAllMembers() {
        List<Member> members = library.getAllMembers();
        if (members.isEmpty()) {
            System.out.println("No registered members!");
            return;
        }
        
        System.out.println("\\n--- All Members ---");
        for (Member member : members) {
            System.out.println(member);
        }
    }
    
    private static void borrowBook() {
        String isbn = getStringInput("Enter Book ISBN: ");
        String memberId = getStringInput("Enter Member ID: ");
        
        try {
            library.borrowBook(isbn, memberId);
        } catch (BookNotFoundException | MemberNotFoundException | 
                 BookNotAvailableException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
    
    private static void returnBook() {
        String isbn = getStringInput("Enter Book ISBN to return: ");
        
        try {
            library.returnBook(isbn);
        } catch (BookNotFoundException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
    
    private static void viewBorrowedBooks() {
        List<BorrowRecord> records = library.getActiveBorrows();
        if (records.isEmpty()) {
            System.out.println("No books currently borrowed!");
            return;
        }
        
        System.out.println("\\n--- Currently Borrowed Books ---");
        for (BorrowRecord record : records) {
            Book book = library.findBookByIsbn(record.getBookIsbn());
            Member member = library.findMemberById(record.getMemberId());
            System.out.printf("%s borrowed by %s - Due: %s %s%n",
                book.getTitle(), member.getName(), record.getDueDate(),
                record.isOverdue() ? "[OVERDUE]" : "");
        }
    }
    
    private static void saveData() {
        FileManager.saveAll(library);
    }
    
    private static String getStringInput(String prompt) {
        System.out.print(prompt);
        return scanner.nextLine().trim();
    }
    
    private static int getIntInput(String prompt) {
        while (true) {
            try {
                System.out.print(prompt);
                return Integer.parseInt(scanner.nextLine().trim());
            } catch (NumberFormatException e) {
                System.out.println("Please enter a valid number!");
            }
        }
    }
}
\`\`\``
    }
  ],
  lessonPlan: {
    objectives: [
      "Apply all learned Java concepts in a real project",
      "Practice proper code organization",
      "Implement error handling throughout",
      "Create a complete working application"
    ],
    materials: ["IDE", "Project requirements document", "UML diagrams"],
    warmUp: {
      duration: "15 min",
      activity: "Review project requirements and discuss approach"
    },
    mainContent: [
      { topic: "Project Setup", duration: "20 min" },
      { topic: "Model Classes", duration: "45 min" },
      { topic: "Service Layer", duration: "60 min" },
      { topic: "File Operations", duration: "40 min" },
      { topic: "Main Application", duration: "45 min" },
      { topic: "Testing & Debugging", duration: "30 min" }
    ],
    practiceExercises: [
      "Complete the base project",
      "Add additional features",
      "Test all edge cases"
    ],
    assessment: "Working Library Management System with all features"
  },
  labs: [
    {
      title: "Lab: Complete Project Implementation",
      objective: "Build the Library Management System step by step",
      steps: [
        "Create all model classes",
        "Implement custom exceptions",
        "Build the LibraryService",
        "Create FileManager",
        "Build Main class with menu",
        "Test all features"
      ],
      codeExamples: [
        {
          title: "Sample Test Data",
          code: `// Add sample data for testing
public static void addSampleData(LibraryService library) {
    // Add books
    library.addBook(new Book("ISBN001", "Java Programming", "James Gosling", "Programming"));
    library.addBook(new Book("ISBN002", "Clean Code", "Robert Martin", "Programming"));
    library.addBook(new Book("ISBN003", "Design Patterns", "Gang of Four", "Software"));
    library.addBook(new Book("ISBN004", "The Pragmatic Programmer", "Hunt & Thomas", "Programming"));
    library.addBook(new Book("ISBN005", "Introduction to Algorithms", "Cormen", "Computer Science"));
    
    // Add members
    library.registerMember(new Member("M001", "Alice Johnson", "alice@email.com", "9876543210"));
    library.registerMember(new Member("M002", "Bob Smith", "bob@email.com", "9876543211"));
    library.registerMember(new Member("M003", "Carol Williams", "carol@email.com", "9876543212"));
    
    System.out.println("Sample data added!");
}`
        }
      ]
    }
  ],
  assignments: [
    {
      title: "Complete the Library Management System",
      description: "Build and enhance the Library Management System",
      tasks: [
        "Implement all basic features",
        "Add fine calculation for overdue books",
        "Add book reservation feature",
        "Add search by category",
        "Generate reports (most borrowed, overdue list)"
      ],
      expectedOutput: "Fully functional Library Management System",
      hints: ["Start with model classes", "Test each feature as you build", "Use proper exception handling"]
    }
  ]
};
