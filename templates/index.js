// Q-1) Display each values
const fruits = ["Apple", "Banana", "Grape"]

// Q-2) Display each values
const person = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA"
};

// Q-3) Display each name, city, age then country and another category which represents if he is a teenagers , Young , old citizen
const people = [
    {
        name: "John",
        age: 30,
        city: "Times Square, New York",
        country: "USA"
    },
    {
        name: "Steve",
        age: 25,
        city: "Albuquerque, New Mexico",
        country: "USA"
    },
    {
        name: "Vince",
        age: 52,
        city: "Rose Park, Salt Lake",
        country: "USA"
    },
    {
        name: "Ryan",
        age: 15,
        city: "Henderson, Las Vegas",
        country: "USA"
    }
];

// Q-4) Every Fruit has price in pkr and price is according to per KG sort them according to price in accending order.
const fruitsDetails = {
    apple: {
        color: "red",
        shape: "Rounded",
        price: 35
    },
    banana: {
        color: "yellow",
        shape: "curve",
        price: 15
    },
    grape: {
        color: "green",
        shape: "Rounded",
        price: 60
    },
    watermelon: {
        color: "green",
        shape: "Rounded",
        price: 100
    }
}

// Q-5) Display grade total marks as well and average 
const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 75 },
    { name: "David", grade: 95 }
];

// Q-6) Display albums name with genre, and artist name For Example: Revolver - Rock - Artist Name : The Beatles
const musicLibrary = {
    genres: [
        {
            name: "Rock",
            artists: [
                { name: "The Beatles", albums: ["Revolver", "Abbey Road", "Let It Be"] },
                { name: "Led Zeppelin", albums: ["Led Zeppelin IV", "Physical Graffiti", "In Through the Out Door"] }
            ]
        },
        {
            name: "Jazz",
            artists: [
                { name: "Miles Davis", albums: ["Kind of Blue", "Bitches Brew", "On the Corner"] },
                { name: "John Coltrane", albums: ["Giant Steps", "A Love Supreme", "Ascension"] }
            ]
        }
    ]
};

// Q-7) Create a bill of MR.Alice. display name, email, address, total price, dispatch date which will be today, and delivery date which is 2 days from today
const shoppingCart = {
    items: [
        { name: "iPhone", price: 999, quantity: 1 },
        { name: "AirPods", price: 159, quantity: 2 },
        { name: "iPad", price: 799, quantity: 1 }
    ],
    customer: {
        name: "Alice",
        email: "alice@example.com",
        shippingAddress: {
            street: "123 Main St",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            country: "USA"
        }
    }
};

// Q-8) display recipe steps by step assume that you are doing this in a table. If possible do it in table.
const biryaniRecipe = {
    name: "Chicken Biryani",
    servings: 4,
    cookingTime: "25 Min",
    ingredients: [
        { name: "Basmati rice", quantity: "1 Kg" },
        { name: "Chicken", quantity: "1/2 kg" },
        { name: "Onion", quantity: "2 large, sliced" },
        { name: "Tomatoes", quantity: "2 medium, chopped" },
        { name: "Garlic", quantity: "6 cloves, minced" },
        { name: "Ginger", quantity: "2 inch piece, minced" },
        { name: "Green chillies", quantity: "2, sliced" },
        { name: "Yogurt", quantity: "1/2 cup" },
        { name: "Lemon juice", quantity: "2 tablespoons" },
        { name: "Cumin powder", quantity: "1 tablespoon" },
        { name: "Coriander powder", quantity: "1 tablespoon" },
        { name: "Turmeric powder", quantity: "1 teaspoon" },
        { name: "Garam masala powder", quantity: "1 teaspoon" },
        { name: "Bay leaves", quantity: "2" },
        { name: "Cinnamon stick", quantity: "1 inch piece" },
        { name: "Cloves", quantity: "3" },
        { name: "Cardamom pods", quantity: "3" },
        { name: "Salt", quantity: "to taste" },
        { name: "Oil", quantity: "3 tablespoons" },
        { name: "Water", quantity: "4 cups" }
    ],
    steps: [
        "Wash the rice in cold water and soak it for 30 minutes.",
        "In a large pot, heat the oil over medium heat.",
        "Add the bay leaves, cinnamon stick, cloves, and cardamom pods, and sauté for 30 seconds.",
        "Add the sliced onions and sauté until they are golden brown.",
        "Add the minced garlic, ginger, and green chillies, and sauté for 1 minute.",
        "Add the chopped tomatoes and cook until they are soft.",
        "Add the cumin powder, coriander powder, turmeric powder, and garam masala powder, and sauté for 2 minutes.",
        "Add the chicken and cook until it is browned on all sides.",
        "Add the yogurt and lemon juice, and stir well.",
        "Add 2 cups of water and salt to taste, and bring to a boil.",
        "Reduce the heat to low, cover the pot, and simmer for 15 minutes.",
        "Add the soaked rice and 2 more cups of water, and stir gently.",
        "Bring to a boil, then reduce the heat to low, cover the pot, and cook for 20 minutes or until the rice is fully cooked.",
        "Remove from heat and let it rest for 10 minutes before serving."
    ]
};

// Q-9) Create a report card of each student both student have same subjects.display name, percentage, remarks, teacher's name of subject and at the end make a grant total , 
// and at the end show percentage of all subject combined, Total gained marks, total marks aswell.
const studentReportCard = [
    {
        name: "John Smith",
        grade: 10,
        subjects: [
            {
                name: "Math",
                teacher: "Ms. Johnson",
                totalMarks: 100,
                gainedMarks: 85,
                teacherRemarks: "Excellent work! Keep it up!"
            },
            {
                name: "English",
                teacher: "Mr. Brown",
                totalMarks: 100,
                gainedMarks: 92,
                teacherRemarks: "Great job! Keep pushing yourself."
            },
            {
                name: "Science",
                teacher: "Dr. Lee",
                totalMarks: 100,
                gainedMarks: 88,
                teacherRemarks: "Solid effort, but I know you can do even better next time."
            },
            {
                name: "History",
                teacher: "Mrs. Davis",
                totalMarks: 75,
                gainedMarks: 44,
                teacherRemarks: "Good effort, but let's work on improving your grades in this subject."
            }
        ]
    },
    {
        name: "William Johnathan",
        grade: 7,
        subjects: [
            {
                name: "Math",
                teacher: "Ms. Amanda",
                totalMarks: 80,
                gainedMarks: 45,
                teacherRemarks: "Good effort, but let's work on improving your grades in this subject."
            },
            {
                name: "English",
                teacher: "Mr. Brown",
                totalMarks: 100,
                gainedMarks: 78,
                teacherRemarks: "Great job! Keep pushing yourself."
            },
            {
                name: "Science",
                teacher: "Dr. Wong",
                totalMarks: 100,
                gainedMarks: 88,
                teacherRemarks: "Excellent work! Keep it up!"
            },
            {
                name: "History",
                teacher: "Mrs. Davidson",
                totalMarks: 75,
                gainedMarks: 34,
                teacherRemarks: "Good effort, but let's work on improving your grades in this subject."
            }
        ],
    },
]

// Q-10) This object represents a company's employee and department structure. It includes information about each employee's first name, last name, age, and email address,
// as well as the departments they work in, the department managers, and the team members in each department.

// To work with this object, you could practice accessing and manipulating the data using JavaScript's built-in array and object methods. For example, you could:

// 1) Access and display the first and last names of all employees
// 2) Access and display the email addresses of all team members in the Marketing department
// 3) Add a new employee to the Finance department
// 4) Update the age of the HR manager to 36
// 5) Remove a team member from the Marketing department

const data = {
    "employees": [
        {
            "firstName": "John",
            "lastName": "Doe",
            "age": 30,
            "email": "john.doe@company.com",
            "departments": [
                {
                    "name": "Finance",
                    "manager": "Jane Smith",
                    "teamMembers": [
                        {
                            "firstName": "Alice",
                            "lastName": "Jones",
                            "age": 25,
                            "email": "alice.jones@company.com"
                        },
                        {
                            "firstName": "Bob",
                            "lastName": "Smith",
                            "age": 28,
                            "email": "bob.smith@company.com"
                        }
                    ]
                },
                {
                    "name": "Marketing",
                    "manager": "David Johnson",
                    "teamMembers": [
                        {
                            "firstName": "Charlie",
                            "lastName": "Brown",
                            "age": 32,
                            "email": "charlie.brown@company.com"
                        },
                        {
                            "firstName": "Diana",
                            "lastName": "Lee",
                            "age": 27,
                            "email": "diana.lee@company.com"
                        },
                        {
                            "firstName": "Ethan",
                            "lastName": "Wang",
                            "age": 29,
                            "email": "ethan.wang@company.com"
                        }
                    ]
                }
            ]
        },
        {
            "firstName": "Jane",
            "lastName": "Smith",
            "age": 35,
            "email": "jane.smith@company.com",
            "departments": [
                {
                    "name": "HR",
                    "manager": "Tom Davis",
                    "teamMembers": [
                        {
                            "firstName": "Frank",
                            "lastName": "Wilson",
                            "age": 31,
                            "email": "frank.wilson@company.com"
                        },
                        {
                            "firstName": "Gina",
                            "lastName": "Garcia",
                            "age": 26,
                            "email": "gina.garcia@company.com"
                        },
                        {
                            "firstName": "Henry",
                            "lastName": "Chen",
                            "age": 30,
                            "email": "henry.chen@company.com"
                        }
                    ]
                }
            ]
        }
    ]
};




