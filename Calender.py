day_names = []
days = []
activities = []
def read():
    global day_names
    global days
    global activities
    # Update this function to take these 3 arrays as input
    day_names = input().split()
    days = list(map(int, input().split()))
    activities = input().split()
    
def display(): 
    # Update this function to print the output
    for i in range(len(day_names)):
        print(day_names[i], days[i], activities[i])
    
    
if __name__=="__main__": 
    read()
    display()
