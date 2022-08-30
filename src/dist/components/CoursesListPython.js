import React from 'react'
import PythonCourses from "./pythoncourses"
function  CoursesListPython(){
    const Python=
        [
            { "id": 1,
                "title": 'Learn Python: The Complete Python Programming',
                "author": "Avinash Jain, The Codex" ,
                "image":"https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg",
                "rate":4.4,
                "reviews": 29923,
                "price": 679.99,
                "bestseller": false,
                "pre_discount": 535.99,
            } ,
            { "id": 2,
                "title": 'Learning Python for Data Analysis and Visualization',
                "author": "Jose Portilla" ,
                "image":"https://img-c.udemycdn.com/course/750x422/405878_e5a0_3.jpg",
                "rate":4.4,
                "reviews": 17986,
                "price": 1599.99,
                "bestseller": true,
                "pre_discount": 535.99,
            } ,
            { "id": 3,
                "title": 'Python for Beginners-Learn programming from scratch',
                "author": "Edwin Diaz, Coding Faculty Solutions" ,
                "image":"https://img-c.udemycdn.com/course/750x422/396876_cc92_7.jpg",
                "rate":4.4,
                "reviews": 1770,
                "price": 679.99,
                "bestseller": false,
                "pre_discount": 535.99,
            } ,
            { "id": 4,
            "title": 'Learn Python: Python for Beginner',
            "author": "Abrar Hussain" ,
            "image":"https://img-c.udemycdn.com/course/750x422/426570_1b91_3.jpg",
            "rate":4.4,
            "reviews": 2768,
            "price": 319.99,
            "bestseller": false,
            "pre_discount": 535.99,
            } ,
            { "id": 5,
            "title": 'Python Beyond the Basics - Object-Oriented Programming',
            "author": "Infinte Skills" ,
            "image":"https://img-c.udemycdn.com/course/750x422/449532_2aa9_7.jpg",
            "rate":4.4,
            "reviews": 2929,
            "price": 519.99,
            "bestseller": false,
            "pre_discount": 535.99,
            },
            { "id": 6,
            "title": 'Hello Python',
            "author": "Abrar Hussain" ,
            "image":"https://img-c.udemycdn.com/course/480x270/396876_cc92_7.jpg",
            "rate":4.4,
            "reviews": 2768,
            "price": 319.99,
            "bestseller": false,
            "pre_discount": 535.99,
            } ,
            { "id": 7,
            "title": 'Learn Python and Jupyter Notebook',
            "author": "Infinte Skills" ,
            "image":"https://img-c.udemycdn.com/course/480x270/2776760_f176_10.jpg",
            "rate":4.4,
            "reviews": 2929,
            "price": 519.99,
            "bestseller": true,
            "pre_discount": 535.99,
            }
        ]
        const title = "Expand your career opportunities with Python"
        const paragraph = "Take one of Udemy’s range of \nPython courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...,"
        const PythonList=Python.map(python => <PythonCourses key={python.id} python={python} />)
      
        return  <div className="PythonInfo"> 
                    <h1 className="course_title"> <b>{title}</b> </h1>
                    <div className="course_desc"><p>{paragraph}</p></div>
                    <button className="explore">Explore Python</button>
                    <div className="coursesblock">{ PythonList } </div>
                 </div>

}
export default CoursesListPython
