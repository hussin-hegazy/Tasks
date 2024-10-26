// Function to return an array of student objects
function getStudentsList() {
  return [
    { id: 1, name: "James", location: "San Francisco" },
    { id: 2, name: "Serena", location: "Columbia" },
    { id: 3, name: "Robert", location: "San Francisco" },
    { id: 4, name: "Alice", location: "New York" },
    { id: 5, name: "Michael", location: "San Francisco" }
  ];
}

// Function to get an array of IDs from a list of student objects
function getStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map(student => student.id);
}

// Function to get students located in a specific city
function getStudentsByLocation(students, city) {
  return students.filter(student => student.location === city);
}

// Function to get the sum of all student IDs
function getTotalStudentIds(students) {
  return students.reduce((total, student) => total + student.id, 0);
}

// Instance for tracking queries
const queryTracker = {
  queryCounts: {},
  track(endpoint) {
    if (!this.queryCounts[endpoint]) {
      this.queryCounts[endpoint] = 0;
    }
    this.queryCounts[endpoint] += 1;

    if (this.queryCounts[endpoint] >= 5) {
      throw new Error(`Query limit reached for ${endpoint}`);
    }

    return `Query to ${endpoint} completed successfully`;
  }
};

// Example usage
const students = getStudentsList();
console.log(getStudentIds(students));
console.log(getStudentsByLocation(students, "San Francisco"));
console.log(getTotalStudentIds(students));

// Example of query tracking
try {
  console.log(queryTracker.track("http://example.com/getUsers"));
} catch (error) {
  console.error(error.message);
}

export { getStudentsList, getStudentIds, getStudentsByLocation, getTotalStudentIds, queryTracker };
