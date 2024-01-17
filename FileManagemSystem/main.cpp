#include <iostream>
#include <string>
#include <list>
#include <stack>
#include <queue>
#include <algorithm>

class File {
public:
    std::string filename;

    // Constructor
    File(const std::string& name) : filename(name) {}
};

class FileManager {
private:
    std::list<File> currentDirectory; // Linked list to represent the current directory
    std::stack<std::list<File>> directoryHistory; // Stack to keep track of file history
    std::queue<std::string> fileRequestQueue; // Queue for file requests

public:
    // File Management Operations
    void createFile(const std::string& filename) {
        currentDirectory.push_back(File(filename));
        std::cout << "File '" << filename << "' created.\n";
    }

    void deleteFile(const std::string& filename) {
        auto it = std::find_if(currentDirectory.begin(), currentDirectory.end(),
                               [filename](const File& file) { return file.filename == filename; });

        if (it != currentDirectory.end()) {
            currentDirectory.erase(it);
            std::cout << "File '" << filename << "' deleted.\n";
        } else {
            std::cout << "File '" << filename << "' not found.\n";
        }
    }

    void displayCurrentDirectory() {
        std::cout << "Current Directory:\n";
        for (const auto& file : currentDirectory) {
            std::cout << "- " << file.filename << "\n";
        }
    }

    // Navigation Operations
    void navigateToDirectory(const std::string& dirname) {
        directoryHistory.push(currentDirectory);
        currentDirectory.clear(); // Clear current directory for navigation
        std::cout << "Navigated to directory '" << dirname << "'.\n";
    }

    void navigateBack() {
        if (!directoryHistory.empty()) {
            currentDirectory = directoryHistory.top();
            directoryHistory.pop();
            std::cout << "Navigated back.\n";
        } else {
            std::cout << "No more navigation history.\n";
        }
    }

    // File Request Queue Operations
    void enqueueFileRequest(const std::string& filename) {
        fileRequestQueue.push(filename);
        std::cout << "File request for '" << filename << "' enqueued.\n";
    }

    void processFileRequests() {
        while (!fileRequestQueue.empty()) {
            std::string filename = fileRequestQueue.front();
            fileRequestQueue.pop();

            // Process the file request (e.g., upload, download)
            // Add your logic here

            std::cout << "Processed file request for '" << filename << "'.\n";
        }
    }
};

int main() {
    FileManager fileManager;
    int choice;

    do {
        // Display menu
        std::cout << "\n\tFILE MANAGEMENT SYSTEM MENU\n";
        std::cout << "\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n";
        std::cout << "@ 1. Create File               @\n";
        std::cout << "@ 2. Delete File               @\n";
        std::cout << "@ 3. Display Current Directory @\n";
        std::cout << "@ 4. Navigate to Directory     @\n";
        std::cout << "@ 5. Navigate Back             @\n";
        std::cout << "@ 6. Enqueue File Request      @\n";
        std::cout << "@ 7. Process File Requests     @\n";
        std::cout << "@ 8. Exit                      @\n";
        std::cout << "\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n";
        std::cout << "Enter your choice (1-8): ";
        std::cin >> choice;

        // Perform the chosen operation
        switch (choice) {
            case 1: {
                std::string filename;
                std::cout << "Enter the filename: ";
                std::cin >> filename;
                fileManager.createFile(filename);
                break;
            }
            case 2: {
                std::string filename;
                std::cout << "Enter the filename to delete: ";
                std::cin >> filename;
                fileManager.deleteFile(filename);
                break;
            }
            case 3:
                fileManager.displayCurrentDirectory();
                break;
            case 4: {
                std::string dirname;
                std::cout << "Enter the directory to navigate to: ";
                std::cin >> dirname;
                fileManager.navigateToDirectory(dirname);
                break;
            }
            case 5:
                fileManager.navigateBack();
                break;
            case 6: {
                std::string filename;
                std::cout << "Enter the filename to enqueue: ";
                std::cin >> filename;
                fileManager.enqueueFileRequest(filename);
                break;
            }
            case 7:
                fileManager.processFileRequests();
                break;
            case 8:
                std::cout << "Exiting the program.\n";
                break;
            default:
                std::cout << "Invalid choice. Please enter a number between 1 and 8.\n";
        }
    } while (choice != 8);

    return 0;
}
