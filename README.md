# Nebula System

## Technologies

1. Angular version 15.2.4.
2. Angular material 15.2.8
3. SCSS
4. HTML
5. JavaScript & TypeScript
6. Mock json-server
7. RestFull WebService
8. Json

## Start application

1.install json `json-server`
2.Run command npm install
3.Run the command `json-server --watch` db.json to run json-server
4.Run `ng serve` for a dev server
5.Navigate to `http://localhost:4200/` using your browser

## Our Services

###For Student
1.SAVE/CREATE (post) http://localhost:3000/students
Request
{
	"name": "S. D. G. Holms",
	"address": "221B, Baker street, Sri Lanka",
	"contact": "0772655223"
}

2.UPDATE (put) http://localhost:3000/students/${id}
Request
{
	"name": "S. D. G. Holms",
	"address": "221B, Baker street, Sri Lanka",
	"contact": "0772655223"
}

3.GET (get) http://localhost:3000/students
Response
[
	{
	"name": "S. D. G. Holms",
	"address": "221B, Baker street, Sri Lanka",
	"contact": "0772655223",
	"id": 1
	},
	{
	"name": "R. R. Darshana",
	"address": "Jaya Mawatha, Moratumulla, Moratuwa",
	"contact": "0772596321",
	"id": 2
	}
]

4.DELETE (delete) http://localhost:3000/students/${id}

###For Programs
1.SAVE/CREATE (post) http://localhost:3000/programs
Request
{
	"name": "The Complete JavaScript Course 2023: From Zero to Expert!",
	"duration": "2 year",
	"cost": "55000"
}

2.UPDATE (put) http://localhost:3000/programs/${id}
Request
{
	"name": "The Complete JavaScript Course 2023: From Zero to Expert!",
	"duration": "2 year",
	"cost": "55000"
}

3.GET (get) http://localhost:3000/programs
Response
[
	{
	"name": "The Complete JavaScript Course 2023: From Zero to Expert!",
	"duration": "2 year",
	"cost": "55000",
	"id": 2
	},
	{
	"name": "Build Responsive Real-World Websites with HTML and CSS",
	"duration": "6 Months",
	"cost": "20000",
	"id": 3
	}
]
4.DELETE (delete) http://localhost:3000/programs/${id}

###For Student Enrollment
1.SAVE/CREATE (post) http://localhost:3000/student-enrollments
Request
{
	"student_id": 5,
	"program_id": 1
}

##Application Features
o Can be saved, updated, deleted a student.
o Load all the students with the pagination option
o Can be searched a student by Student Id.
o Can be saved, updated, deleted a Program.
o Load all the programs with the pagination option.
o Can be searched a program with the Program Id.
o Register a student with a Particular program.
