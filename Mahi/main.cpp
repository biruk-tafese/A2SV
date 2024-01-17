#include <iostream>
#include <string>
#include <queue>
#include <stack>

using namespace std;

// Node structure for files
struct FileNode {
    string fileName;
    FileNode* next;

    FileNode(const string& name) : fileName(name), next(nullptr) {}
};

// Queue structure for file operations
class FileQueue {
private:
    queue<string> fileQueue;

public:
    void enqueue(const string& fileName) {
        fileQueue.push(fileName);
        cout << "File '" << fileName << "' enqueued for processing." << endl;
    }

    void dequeue() {
        if (fileQueue.empty()) {
            cout << "Queue is empty. No file to dequeue." << endl;
            return;
        }

        cout << "Dequeued file: '" << fileQueue.front() << "'" << endl;
        fileQueue.pop();
    }

    bool isEmpty() {
        return fileQueue.empty();
    }
};

// Stack structure for file history
class FileStack {
private:
    stack<string> fileHistory;

public:
    void push(const string& fileName) {
        fileHistory.push(fileName);
    }

    void pop() {
        if (fileHistory.empty()) {
            cout << "Stack is empty. No file to pop." << endl;
            return;
        }

        cout << "Popped file: '" << fileHistory.top() << "'" << endl;
        fileHistory.pop();
    }

    void displayHistory() {
        cout << "File history:" << endl;
        while (!fileHistory.empty()) {
            cout << fileHistory.top() << endl;
            fileHistory.pop();
        }
    }

    bool isEmpty() {
        return fileHistory.empty();
    }
};

int main() {
    FileQueue fileQueue;
    FileStack fileHistory;

    // Example usage
    fileQueue.enqueue("file1.txt");
    fileQueue.enqueue("file2.doc");
    fileQueue.enqueue("file3.jpg");

    fileHistory.push("file1.txt");
    fileHistory.push("file2.doc");
    fileHistory.push("file3.jpg");

    fileQueue.dequeue();
    fileQueue.dequeue();

    fileHistory.pop();
    fileHistory.displayHistory();

    return 0;
}
