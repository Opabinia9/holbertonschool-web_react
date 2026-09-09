interface Teacher {
    readonly firstName: string
    readonly lastName: string
    fullTimeEmployee: boolean
    yearsOfExperience?: number
    location: string
    [index:  string]: any
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

function printTeacher(firstname: string, lastname: string): string {
  return `${firstname[0]}. ${lastname}`
}

interface printTeacherFunction {
  (firstname: string, lastname: string): string;
}

interface StudentClassInterface {
  firstName: string
  lastName: string
  workOnHomework(): string;
  displayName(): void;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  workOnHomework(): string {
    return ("Currently working");
  }
  
  displayName() {
    return (this.firstName)
  }
}
