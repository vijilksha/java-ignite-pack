import { DayContent } from '../curriculum';

export const day13: DayContent = {
  day: 13,
  title: "Multithreading Basics",
  description: "Threads, Runnable, synchronization, thread lifecycle",
  icon: "🔄",
  pptSlides: [
    {
      title: "Introduction to Multithreading",
      content: [
        "Thread: Lightweight subprocess",
        "Multithreading: Multiple threads running concurrently",
        "Improves performance and responsiveness",
        "Java has built-in thread support"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Today we learn MULTITHREADING - making your programs do multiple things at once!"

📌 WHAT IS A THREAD?

"Think of a restaurant kitchen:
👨‍🍳 One chef = One thread (does one thing at a time)
👨‍🍳👨‍🍳👨‍🍳 Multiple chefs = Multiple threads (parallel work)

Single-threaded:
Make soup → Make salad → Make dessert (sequential)

Multi-threaded:
Chef 1: Make soup
Chef 2: Make salad     (all at same time!)
Chef 3: Make dessert"

📌 REAL-WORLD EXAMPLES:

\`\`\`
Browser:
├── Thread 1: Download image
├── Thread 2: Render page
├── Thread 3: Play video
└── Thread 4: Handle user clicks

Music Player:
├── Thread 1: Play audio
├── Thread 2: Update UI
└── Thread 3: Download next song

Game:
├── Thread 1: Game logic
├── Thread 2: Graphics rendering
├── Thread 3: AI calculations
└── Thread 4: Network communication
\`\`\`

📌 PROCESS VS THREAD:

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│  PROCESS                    │  THREAD                          │
├─────────────────────────────────────────────────────────────────┤
│  Independent program        │  Part of a process               │
│  Own memory space          │  Shares process memory           │
│  Heavy to create           │  Lightweight                     │
│  Communication is hard     │  Easy communication              │
│  Example: Chrome, Word     │  Example: Tabs in Chrome         │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

📌 THREAD LIFECYCLE:

\`\`\`
        ┌─────────┐
        │   NEW   │  ← Thread created
        └────┬────┘
             ↓ start()
        ┌─────────┐
        │ RUNNABLE│  ← Ready to run, waiting for CPU
        └────┬────┘
             ↓ scheduled
        ┌─────────┐
        │ RUNNING │  ← Executing run() method
        └────┬────┘
           ↙   ↘
    ┌────────┐  ┌──────────┐
    │BLOCKED │  │TERMINATED│  ← run() completed
    │WAITING │  └──────────┘
    │TIMED_W │
    └────────┘
\`\`\`

📌 THREAD STATES:

\`\`\`java
// NEW: Thread created but not started
Thread t = new Thread();  // NEW

// RUNNABLE: Started, ready to run
t.start();  // RUNNABLE

// RUNNING: Currently executing (shown as RUNNABLE)
// BLOCKED: Waiting for lock
// WAITING: Waiting indefinitely
// TIMED_WAITING: Waiting with timeout
// TERMINATED: Completed execution
\`\`\`

📌 MAIN THREAD:

\`\`\`java
public class MainThreadDemo {
    public static void main(String[] args) {
        // This code runs in the "main" thread
        Thread mainThread = Thread.currentThread();
        System.out.println("Current thread: " + mainThread.getName());
        // Output: main
    }
}
\`\`\`
`
    },
    {
      title: "Creating Threads - Two Methods",
      content: [
        "Method 1: Extend Thread class",
        "Method 2: Implement Runnable interface (preferred)",
        "Override run() method with thread logic",
        "Call start() to begin execution"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"There are TWO ways to create threads. Let's learn both, but Runnable is preferred!"

📌 METHOD 1: EXTEND THREAD CLASS:

\`\`\`java
class MyThread extends Thread {
    @Override
    public void run() {
        // Thread logic goes here
        for (int i = 1; i <= 5; i++) {
            System.out.println(getName() + ": Count " + i);
            try {
                Thread.sleep(500);  // Pause 500ms
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class ThreadDemo1 {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();
        
        t1.setName("Thread-A");
        t2.setName("Thread-B");
        
        t1.start();  // Don't call run() directly!
        t2.start();
        
        System.out.println("Main thread continues...");
    }
}
\`\`\`

📌 METHOD 2: IMPLEMENT RUNNABLE (Preferred):

\`\`\`java
class MyRunnable implements Runnable {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class RunnableDemo {
    public static void main(String[] args) {
        MyRunnable task = new MyRunnable();
        
        Thread t1 = new Thread(task, "Worker-1");
        Thread t2 = new Thread(task, "Worker-2");
        
        t1.start();
        t2.start();
    }
}
\`\`\`

📌 WHY RUNNABLE IS PREFERRED:

\`\`\`
1. Java allows only single inheritance
   - If you extend Thread, can't extend another class
   - Runnable is an interface, can implement multiple

2. Separation of concerns
   - Runnable defines WHAT to do
   - Thread defines HOW to run it

3. Resource sharing
   - Same Runnable can be used by multiple threads
   
4. Thread pool friendly
   - ExecutorService works with Runnable
\`\`\`

📌 LAMBDA SYNTAX (Java 8+):

\`\`\`java
// Runnable is a functional interface
Thread t1 = new Thread(() -> {
    for (int i = 1; i <= 5; i++) {
        System.out.println("Lambda thread: " + i);
    }
});
t1.start();

// Even shorter for simple tasks
new Thread(() -> System.out.println("Quick task!")).start();
\`\`\`

📌 start() VS run():

\`\`\`java
Thread t = new Thread(() -> {
    System.out.println("Running in: " + Thread.currentThread().getName());
});

// CORRECT: Creates new thread
t.start();  // Output: Thread-0

// WRONG: Runs in current thread!
t.run();    // Output: main (no new thread created!)

// start() can only be called once
t.start();  // IllegalThreadStateException!
\`\`\`

📌 THREAD METHODS:

\`\`\`java
Thread t = new Thread(() -> {});

t.setName("MyThread");     // Set name
t.getName();               // Get name
t.getId();                 // Get thread ID
t.getPriority();          // Get priority (1-10)
t.setPriority(Thread.MAX_PRIORITY);  // Set priority
t.isAlive();              // Is thread running?
t.getState();             // Get current state

Thread.currentThread();    // Get current thread
Thread.sleep(1000);       // Pause execution
\`\`\`
`
    },
    {
      title: "Thread Synchronization",
      content: [
        "Problem: Multiple threads accessing shared data",
        "Race condition: Unpredictable results",
        "synchronized keyword: One thread at a time",
        "Thread safety with locks"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"When multiple threads access shared data, chaos happens! Synchronization brings order."

📌 THE PROBLEM - RACE CONDITION:

\`\`\`java
class Counter {
    private int count = 0;
    
    public void increment() {
        count++;  // NOT atomic! Read → Add → Write
    }
    
    public int getCount() {
        return count;
    }
}

// Two threads increment same counter
Counter counter = new Counter();

Thread t1 = new Thread(() -> {
    for (int i = 0; i < 10000; i++) counter.increment();
});

Thread t2 = new Thread(() -> {
    for (int i = 0; i < 10000; i++) counter.increment();
});

t1.start();
t2.start();
t1.join();  // Wait for t1
t2.join();  // Wait for t2

System.out.println(counter.getCount());
// Expected: 20000
// Actual: Random number like 15847, 18234, etc!
\`\`\`

📌 VISUAL EXPLANATION:

\`\`\`
Without synchronization (RACE CONDITION):

Thread 1: Read count (0) → Add 1 → Write (1)
Thread 2: Read count (0) → Add 1 → Write (1)  ← Both read 0!
Result: count = 1 (should be 2!)

With synchronization:

Thread 1: [LOCK] Read (0) → Add 1 → Write (1) [UNLOCK]
Thread 2: [WAIT].............[LOCK] Read (1) → Add 1 → Write (2) [UNLOCK]
Result: count = 2 (correct!)
\`\`\`

📌 SOLUTION - synchronized KEYWORD:

\`\`\`java
class Counter {
    private int count = 0;
    
    // Method-level synchronization
    public synchronized void increment() {
        count++;  // Only one thread at a time
    }
    
    public synchronized int getCount() {
        return count;
    }
}
\`\`\`

📌 SYNCHRONIZED BLOCK:

\`\`\`java
class Counter {
    private int count = 0;
    private Object lock = new Object();
    
    public void increment() {
        // Only this part is synchronized
        synchronized(lock) {
            count++;
        }
        // Other code can run in parallel
    }
    
    // Or synchronize on 'this'
    public void increment2() {
        synchronized(this) {
            count++;
        }
    }
}
\`\`\`

📌 BANK ACCOUNT EXAMPLE:

\`\`\`java
class BankAccount {
    private double balance;
    
    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }
    
    // Without synchronization - dangerous!
    public void withdraw(double amount) {
        if (balance >= amount) {
            // Delay simulates processing
            try { Thread.sleep(100); } catch (Exception e) {}
            balance -= amount;
            System.out.println("Withdrawn: " + amount + ", Balance: " + balance);
        } else {
            System.out.println("Insufficient balance!");
        }
    }
    
    // With synchronization - safe!
    public synchronized void safeWithdraw(double amount) {
        if (balance >= amount) {
            try { Thread.sleep(100); } catch (Exception e) {}
            balance -= amount;
            System.out.println("Withdrawn: " + amount + ", Balance: " + balance);
        } else {
            System.out.println("Insufficient balance!");
        }
    }
}

// Test
BankAccount account = new BankAccount(1000);

Thread t1 = new Thread(() -> account.safeWithdraw(800));
Thread t2 = new Thread(() -> account.safeWithdraw(800));

t1.start();
t2.start();

// Without sync: Both might withdraw (balance goes negative!)
// With sync: Only one succeeds, other gets "Insufficient balance"
\`\`\`

📌 DEADLOCK WARNING:

\`\`\`java
// DEADLOCK: Two threads waiting for each other forever!

Object lock1 = new Object();
Object lock2 = new Object();

Thread t1 = new Thread(() -> {
    synchronized(lock1) {
        Thread.sleep(100);
        synchronized(lock2) {  // Waiting for lock2
            System.out.println("T1");
        }
    }
});

Thread t2 = new Thread(() -> {
    synchronized(lock2) {
        Thread.sleep(100);
        synchronized(lock1) {  // Waiting for lock1
            System.out.println("T2");
        }
    }
});

// DEADLOCK! T1 has lock1, needs lock2
//           T2 has lock2, needs lock1
// Neither can proceed!
\`\`\`
`
    },
    {
      title: "Thread Communication",
      content: [
        "wait(): Release lock and wait",
        "notify(): Wake up one waiting thread",
        "notifyAll(): Wake up all waiting threads",
        "Producer-Consumer pattern"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Threads need to communicate! Producer makes data, Consumer uses it. They must coordinate!"

📌 PRODUCER-CONSUMER PROBLEM:

\`\`\`
Producer: Makes items, puts in buffer
Consumer: Takes items from buffer

Problems:
1. Producer can't add if buffer full
2. Consumer can't take if buffer empty
3. Must coordinate access!
\`\`\`

📌 wait() AND notify():

\`\`\`java
class SharedBuffer {
    private int data;
    private boolean hasData = false;
    
    public synchronized void produce(int value) throws InterruptedException {
        while (hasData) {
            wait();  // Buffer full, wait
        }
        data = value;
        hasData = true;
        System.out.println("Produced: " + value);
        notify();  // Wake up consumer
    }
    
    public synchronized int consume() throws InterruptedException {
        while (!hasData) {
            wait();  // Buffer empty, wait
        }
        hasData = false;
        System.out.println("Consumed: " + data);
        notify();  // Wake up producer
        return data;
    }
}
\`\`\`

📌 COMPLETE PRODUCER-CONSUMER:

\`\`\`java
class Buffer {
    private Queue<Integer> queue = new LinkedList<>();
    private int capacity;
    
    public Buffer(int capacity) {
        this.capacity = capacity;
    }
    
    public synchronized void produce(int item) throws InterruptedException {
        while (queue.size() == capacity) {
            System.out.println("Buffer full! Producer waiting...");
            wait();
        }
        queue.add(item);
        System.out.println("Produced: " + item + " | Buffer: " + queue.size());
        notifyAll();  // Wake all waiting consumers
    }
    
    public synchronized int consume() throws InterruptedException {
        while (queue.isEmpty()) {
            System.out.println("Buffer empty! Consumer waiting...");
            wait();
        }
        int item = queue.poll();
        System.out.println("Consumed: " + item + " | Buffer: " + queue.size());
        notifyAll();  // Wake all waiting producers
        return item;
    }
}

// Producer thread
class Producer implements Runnable {
    private Buffer buffer;
    
    public Producer(Buffer buffer) {
        this.buffer = buffer;
    }
    
    @Override
    public void run() {
        for (int i = 1; i <= 10; i++) {
            try {
                buffer.produce(i);
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

// Consumer thread
class Consumer implements Runnable {
    private Buffer buffer;
    
    public Consumer(Buffer buffer) {
        this.buffer = buffer;
    }
    
    @Override
    public void run() {
        for (int i = 1; i <= 10; i++) {
            try {
                buffer.consume();
                Thread.sleep(200);  // Slower than producer
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

// Main
public static void main(String[] args) {
    Buffer buffer = new Buffer(3);  // Capacity 3
    
    Thread producer = new Thread(new Producer(buffer));
    Thread consumer = new Thread(new Consumer(buffer));
    
    producer.start();
    consumer.start();
}
\`\`\`

📌 IMPORTANT RULES:

\`\`\`
1. wait(), notify(), notifyAll() MUST be called from synchronized block
2. Always use while loop (not if) for wait condition
3. Prefer notifyAll() over notify() to avoid missed signals
4. wait() releases the lock, notify() doesn't
\`\`\`

📌 join() METHOD:

\`\`\`java
Thread t1 = new Thread(() -> {
    System.out.println("T1 working...");
    Thread.sleep(2000);
    System.out.println("T1 done!");
});

t1.start();
t1.join();  // Main thread waits for t1 to complete
System.out.println("After T1");

// Output:
// T1 working...
// T1 done!
// After T1
\`\`\`
`
    },
    {
      title: "Thread Utilities",
      content: [
        "Thread.sleep(): Pause execution",
        "Thread.yield(): Hint to scheduler",
        "Thread priorities: 1-10 scale",
        "Daemon threads: Background tasks"
      ],
      trainerNotes: `🎯 TRAINER EXPLANATION:

"Let's learn useful thread utilities for controlling execution!"

📌 Thread.sleep():

\`\`\`java
// Pause current thread for specified time
try {
    System.out.println("Starting...");
    Thread.sleep(2000);  // 2 seconds
    System.out.println("After 2 seconds");
} catch (InterruptedException e) {
    System.out.println("Sleep interrupted!");
}

// Practical use: Animation
for (int i = 0; i < 10; i++) {
    System.out.println("Frame " + i);
    Thread.sleep(100);  // 10 FPS
}
\`\`\`

📌 Thread.yield():

\`\`\`java
// Hint to scheduler: "I can pause, let others run"
Thread.yield();

// Not guaranteed - scheduler may ignore
// Use for cooperative multitasking
\`\`\`

📌 THREAD PRIORITIES:

\`\`\`java
Thread t1 = new Thread(() -> { /* task */ });
Thread t2 = new Thread(() -> { /* task */ });

// Priority range: 1 to 10
t1.setPriority(Thread.MIN_PRIORITY);  // 1
t2.setPriority(Thread.MAX_PRIORITY);  // 10

// Default is NORM_PRIORITY (5)
System.out.println(t1.getPriority());

// Higher priority = more CPU time (hint, not guarantee)
\`\`\`

📌 DAEMON THREADS:

\`\`\`java
// Daemon: Background thread that doesn't prevent JVM exit
Thread daemon = new Thread(() -> {
    while (true) {
        System.out.println("Background task...");
        Thread.sleep(1000);
    }
});

daemon.setDaemon(true);  // Must set before start()
daemon.start();

// Main thread work
Thread.sleep(3000);
System.out.println("Main ending...");

// JVM exits even though daemon is running!
// Daemon threads are for background services like GC
\`\`\`

📌 THREAD INTERRUPTION:

\`\`\`java
Thread worker = new Thread(() -> {
    while (!Thread.currentThread().isInterrupted()) {
        System.out.println("Working...");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            System.out.println("Interrupted during sleep!");
            break;  // Exit loop
        }
    }
    System.out.println("Thread ending gracefully");
});

worker.start();
Thread.sleep(3000);
worker.interrupt();  // Signal thread to stop
\`\`\`

📌 THREAD POOL (Modern Approach):

\`\`\`java
import java.util.concurrent.*;

// Create thread pool with 3 threads
ExecutorService executor = Executors.newFixedThreadPool(3);

// Submit tasks
for (int i = 1; i <= 10; i++) {
    final int taskId = i;
    executor.submit(() -> {
        System.out.println("Task " + taskId + " by " + 
            Thread.currentThread().getName());
        Thread.sleep(1000);
        return taskId;
    });
}

// Shutdown when done
executor.shutdown();
executor.awaitTermination(1, TimeUnit.MINUTES);
System.out.println("All tasks completed!");
\`\`\`

📌 THREAD SAFETY CHECKLIST:

\`\`\`
✅ Use synchronized for shared mutable data
✅ Use atomic classes (AtomicInteger, etc.)
✅ Use thread-safe collections (ConcurrentHashMap)
✅ Minimize shared state
✅ Use immutable objects when possible
✅ Use ExecutorService instead of raw threads
\`\`\`
`
    }
  ],
  lessonPlan: {
    objectives: [
      "Understand threads and their lifecycle",
      "Create threads using Thread class and Runnable interface",
      "Implement thread synchronization",
      "Use thread communication methods"
    ],
    materials: ["IDE", "Thread lifecycle diagram", "Synchronization examples"],
    warmUp: {
      duration: "15 min",
      activity: "Discuss real-world multitasking scenarios"
    },
    mainContent: [
      { topic: "Thread Concepts", duration: "30 min" },
      { topic: "Creating Threads", duration: "40 min" },
      { topic: "Synchronization", duration: "45 min" },
      { topic: "Thread Communication", duration: "40 min" },
      { topic: "Thread Utilities", duration: "25 min" }
    ],
    practiceExercises: [
      "Create multiple threads printing numbers",
      "Implement synchronized counter",
      "Build producer-consumer system"
    ],
    assessment: "Multi-threaded number generator with synchronization"
  },
  labs: [
    {
      title: "Lab 1: Basic Threading",
      objective: "Create and run multiple threads",
      steps: [
        "Create thread using Thread class",
        "Create thread using Runnable",
        "Run multiple threads simultaneously",
        "Observe interleaved output"
      ],
      codeExamples: [
        {
          title: "Multiple Threads Demo",
          code: `public class ThreadLab {
    public static void main(String[] args) {
        // Using Thread class
        Thread t1 = new Thread() {
            @Override
            public void run() {
                for (int i = 1; i <= 5; i++) {
                    System.out.println("Thread-1: " + i);
                    try { Thread.sleep(100); } catch (Exception e) {}
                }
            }
        };
        
        // Using Runnable
        Runnable task = () -> {
            for (int i = 1; i <= 5; i++) {
                System.out.println("Thread-2: " + i);
                try { Thread.sleep(100); } catch (Exception e) {}
            }
        };
        Thread t2 = new Thread(task);
        
        // Lambda directly
        Thread t3 = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                System.out.println("Thread-3: " + i);
                try { Thread.sleep(100); } catch (Exception e) {}
            }
        });
        
        System.out.println("Starting threads...");
        t1.start();
        t2.start();
        t3.start();
        
        // Wait for all to complete
        try {
            t1.join();
            t2.join();
            t3.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        System.out.println("All threads completed!");
    }
}`
        }
      ]
    },
    {
      title: "Lab 2: Synchronized Counter",
      objective: "Implement thread-safe counter",
      steps: [
        "Create counter without synchronization",
        "Observe race condition",
        "Add synchronization",
        "Verify correct count"
      ],
      codeExamples: [
        {
          title: "Thread-Safe Counter",
          code: `class Counter {
    private int count = 0;
    
    // NOT thread-safe!
    public void increment() {
        count++;
    }
    
    // Thread-safe version
    public synchronized void safeIncrement() {
        count++;
    }
    
    public int getCount() {
        return count;
    }
}

public class SyncLab {
    public static void main(String[] args) throws InterruptedException {
        Counter unsafeCounter = new Counter();
        Counter safeCounter = new Counter();
        
        // Test unsafe counter
        Thread[] unsafeThreads = new Thread[10];
        for (int i = 0; i < 10; i++) {
            unsafeThreads[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    unsafeCounter.increment();
                }
            });
        }
        
        // Test safe counter
        Thread[] safeThreads = new Thread[10];
        for (int i = 0; i < 10; i++) {
            safeThreads[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    safeCounter.safeIncrement();
                }
            });
        }
        
        // Start all
        for (Thread t : unsafeThreads) t.start();
        for (Thread t : safeThreads) t.start();
        
        // Wait all
        for (Thread t : unsafeThreads) t.join();
        for (Thread t : safeThreads) t.join();
        
        System.out.println("Unsafe count: " + unsafeCounter.getCount() + " (expected 10000)");
        System.out.println("Safe count: " + safeCounter.getCount() + " (expected 10000)");
    }
}`
        }
      ]
    }
  ],
  assignments: [
    {
      title: "Assignment 1: Ticket Booking System",
      description: "Build a thread-safe ticket booking system",
      tasks: [
        "Create TicketPool with limited tickets",
        "Multiple threads try to book simultaneously",
        "Ensure no overbooking",
        "Display booking results"
      ],
      expectedOutput: "Thread-safe booking with no race conditions",
      hints: ["Use synchronized methods", "Check availability before booking"]
    },
    {
      title: "Assignment 2: Print Number Sequence",
      description: "Three threads print numbers in sequence",
      tasks: [
        "Thread 1 prints 1, 4, 7...",
        "Thread 2 prints 2, 5, 8...",
        "Thread 3 prints 3, 6, 9...",
        "Output should be: 1, 2, 3, 4, 5, 6..."
      ],
      expectedOutput: "Sequential numbers from three threads",
      hints: ["Use wait/notify for coordination", "Use shared counter"]
    }
  ]
};
