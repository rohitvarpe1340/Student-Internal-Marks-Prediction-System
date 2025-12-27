#include <iostream>
#include <cstdlib>
using namespace std;

int main(int argc, char* argv[]){
    if(argc < 4){
        cout << 0;
        return 0;
    }     

    float studyHours = atof(argv[1]);
    float attendance = atof(argv[2]);
    float assignmentMarks = atof(argv[3]);

    
    float count = 
        (studyHours * 5) +
        (attendance * 0.3) +
        (assignmentMarks * 0.5);

   
    float maxStudyHours = 100;     
    float maxAttendance = 100;
    float maxAssignmentMarks = 50;

    float maxCount = (maxStudyHours * 5) + (maxAttendance * 0.3) + (maxAssignmentMarks * 0.5);

   
    float percentage = (count / maxCount) * 100;

    cout << fixed;
    cout.precision(2);
    cout << percentage;  

    return 0;
}
