#include <iostream>
#include <string>
#include <unordered_map>  // for patients & doctors
#include <vector>
using namespace std;

// -------------------- CLASSES --------------------
class patient {
public:
    int ID;
    string Name;
    int Age;
    string Gender;

    patient() {} // default constructor for map

    patient(string n, int a, string g) {
        ID = 0; // will set after creation
        Name = n;
        Age = a;
        Gender = g;
    }
};

class doctor {
public:
    int ID;
    string Name;
    int Age;
    string Gender;

    doctor() {}

    doctor(string n, int a, string g) {
        ID = 0; // will set after creation
        Name = n;
        Age = a;
        Gender = g;
    }
};

// appointment management
int toMinutes(string date, int time) {
    // date = DD-MM-YYYY, time = HHMM (24hr format)
    int d, m, y;
    sscanf(date.c_str(), "%d-%d-%d", &d, &m, &y);

    return y * 525600 + m * 43200 + d * 1440 + (time / 100) * 60 + (time % 100);
}

class appointment {
public:
    int patientID, doctorID;
    string date;
    int time;
    int key;  // used for heap ordering

    appointment() {}

    appointment(int p, int d, string dt, int t) {
        patientID = p;
        doctorID = d;
        date = dt;
        time = t;
        key = toMinutes(dt, t);
    }
};

// -------------------- MIN HEAP --------------------
class MinHeap {
public:
    vector<appointment> arr;
    int idx;

    MinHeap(int capacity) {
        arr.resize(capacity + 1); // 1-based indexing
        idx = 1;
    }

    void push(appointment a) {
        if (idx >= arr.size()) arr.resize(arr.size() * 2); // expand if needed
        arr[idx] = a;
        int i = idx;

        while (i > 1 && arr[i].key < arr[i / 2].key) {
            swap(arr[i], arr[i / 2]);
            i /= 2;
        }
        idx++;
    }

    void pop() {
        if (idx == 1) { cout << "Heap empty!\n"; return; }
        arr[1] = arr[idx - 1];
        idx--;

        int i = 1;
        while (true) {
            int l = 2 * i, r = 2 * i + 1, smallest = i;
            if (l < idx && arr[l].key < arr[smallest].key) smallest = l;
            if (r < idx && arr[r].key < arr[smallest].key) smallest = r;

            if (smallest != i) {
                swap(arr[i], arr[smallest]);
                i = smallest;
            } else break;
        }
    }

    appointment top() {
        if (idx == 1) {
            cout << "Heap empty!\n";
            return appointment();
        }
        return arr[1];
    }

    bool empty() { return idx == 1; }
    int size() { return idx - 1; }

    void display() {
        cout << "\n--- Appointments in Heap Order ---\n";
        for (int i = 1; i < idx; i++) {
            cout << "PatientID: " << arr[i].patientID
                 << " | DoctorID: " << arr[i].doctorID
                 << " | Date: " << arr[i].date
                 << " | Time: " << arr[i].time << "\n";
        }
    }
};

// -------------------- GLOBAL STORAGE --------------------
int pid = 1;
int did = 1;
unordered_map<int, patient> allpatients;
unordered_map<int, doctor> alldoctors;
MinHeap appointments(100);

// -------------------- FUNCTIONS --------------------
void addpatient() {
    string name, gender;
    int age;

    cout << "Enter Patient Name: ";
    cin >> name;
    cout << "Enter Patient Age: ";
    cin >> age;
    cout << "Enter Patient Gender: ";
    cin >> gender;

    patient p(name, age, gender);
    p.ID = pid++;
    allpatients[p.ID] = p;

    cout << "Patient Added with ID: " << p.ID << "\n";
}

void adddoctor() {
    string name, gender;
    int age;

    cout << "Enter Doctor Name: ";
    cin >> name;
    cout << "Enter Doctor Age: ";
    cin >> age;
    cout << "Enter Doctor Gender: ";
    cin >> gender;

    doctor d(name, age, gender);
    d.ID = did++;
    alldoctors[d.ID] = d;

    cout << "Doctor Added with ID: " << d.ID << "\n";
}

void addappointment() {
    int pid_, did_, time;
    string date;

    cout << "Enter Patient ID: ";
    cin >> pid_;
    if (allpatients.find(pid_) == allpatients.end()) {
        cout << "Invalid Patient ID!\n";
        return;
    }

    cout << "Enter Doctor ID: ";
    cin >> did_;
    if (alldoctors.find(did_) == alldoctors.end()) {
        cout << "Invalid Doctor ID!\n";
        return;
    }

    cout << "Enter Date (DD-MM-YYYY): ";
    cin >> date;
    cout << "Enter Time (HHMM 24hr): ";
    cin >> time;

    appointment a(pid_, did_, date, time);
    appointments.push(a);

    cout << "Appointment Scheduled!\n";
}

void viewappointment() {
    if (appointments.empty()) {
        cout << "No Appointments Scheduled!\n";
        return;
    }

    cout << "\n--- Scheduled Appointments (Nearest First) ---\n";
    MinHeap temp = appointments;
    while (!temp.empty()) {
        appointment a = temp.top();
        temp.pop();
        cout << "Patient: " << allpatients[a.patientID].Name
             << " | Doctor: " << alldoctors[a.doctorID].Name
             << " | Date: " << a.date
             << " | Time: " << a.time << "\n";
    }
}

void viewpatient() {
    cout << "\n--- All Patients ---\n";
    for (auto &p : allpatients) {
        cout << "ID: " << p.second.ID
             << " | Name: " << p.second.Name
             << " | Age: " << p.second.Age
             << " | Gender: " << p.second.Gender << "\n";
    }
}

void viewdoctor() {
    cout << "\n--- All Doctors ---\n";
    for (auto &d : alldoctors) {
        cout << "ID: " << d.second.ID
             << " | Name: " << d.second.Name
             << " | Age: " << d.second.Age
             << " | Gender: " << d.second.Gender << "\n";
    }
}

// -------------------- MAIN --------------------
int main() {
    int choice;
    do {
        cout << "\n===== HOSPITAL MANAGEMENT MENU =====\n";
        cout << "1. Add Patient\n";
        cout << "2. Add Doctor\n";
        cout << "3. Schedule Appointment\n";
        cout << "4. View Patients\n";
        cout << "5. View Doctors\n";
        cout << "6. View Appointments\n";
        cout << "0. Exit\n";
        cout << "Enter Choice: ";
        cin >> choice;

        switch (choice) {
            case 1: addpatient(); break;
            case 2: adddoctor(); break;
            case 3: addappointment(); break;
            case 4: viewpatient(); break;
            case 5: viewdoctor(); break;
            case 6: viewappointment(); break;
            case 0: cout << "Exiting...\n"; break;
            default: cout << "Invalid choice!\n";
        }
    } while (choice != 0);

    return 0;
}
