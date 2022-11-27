# Student Affairs Website Projec

## Website Description

This website is made for the staff of student affairs at Cairo University - Faculty of Computers and Artificial Intelligence.

The project consists of 8 web pages in total.


</br>

### <span style="padding: 10px;"> Main Page

</br>

- A screeshot from the page:

<img src="https://user-images.githubusercontent.com/70202370/204141577-18f1e875-64ba-46e9-9f4b-3e679f6a677b.png"/>

- This is the main interface for all the course projects that we choose from the student affairs system project to design and implement.
- You can press on the student affairs system sentence to continue to the actual project.


</br>

### <span style="padding: 10px;"> Home Page

</br>

- A screeshot from the page:

<img src="https://user-images.githubusercontent.com/70202370/204141571-797c6e29-5cdf-4434-a842-f8d49f08164d.png"/>
- This is the main interface for the student affairs system project.


</br>

### <span style="padding: 10px;"> Add Student Page

</br>


- A screeshot from the page:

<img src="https://user-images.githubusercontent.com/70202370/204141545-84e89c0c-0b38-44dd-b3e3-b9d990780e08.png"/>

<img src="https://user-images.githubusercontent.com/70202370/204141523-8c420250-a0a3-4da5-ada8-3ec59228a7e4.png"/>

- An employee can add a new student to the database using a form including:
  - name
  - ID
  - GPA
  - email
  - date of birth
  - gender
  - status (Active or Inactive)
  - current level
  - department
  - mobile number


</br>

### <span style="padding: 10px;"> Search/Update/Delete Student Page

</br>


- A screeshot from the page:

<img src="https://user-images.githubusercontent.com/70202370/204141526-ba70a12a-f41a-4d24-a39e-80b9b86bf124.png"/>


- An employee can show all active students and search for a certain student by his name.
- An employee can select a specific student and either delete this student or edit this student's information or assign a department for him.

</br>

### <span style="padding: 10px;"> Edit Student Page

</br>


- A screeshot from the page:

<img src="https://user-images.githubusercontent.com/70202370/204141520-cae82cba-dba3-462a-9303-9cbe61eb1ce1.png"/>

<img src="https://user-images.githubusercontent.com/70202370/204141493-a1be59b3-d105-4938-8fd9-0ac6ab675260.png"/>


- An employee enters this page after selecting a specific student from the `Search/Update/Delete Student Page` and choosing edit/delete option.
- An employee can either update the information of the selected student or delete the student from the database.

</br>

### <span style="padding: 10px;"> Select Department Page

</br>

- A screeshot from the page:

<img src="https://user-images.githubusercontent.com/70202370/204141499-18adea12-1752-477d-a4b0-4d51b7b57880.png"/>

- An employee enters this page after selecting a specific student from the `Search/Update/Delete Student Page` and choosing select department option.
- An employee can assign a specific department for the selected student who's level is greater than or equal to 3.

</br>

### <span style="padding: 10px;"> Show All Page

</br>

- A screeshot from the page:

<img src="https://user-images.githubusercontent.com/70202370/204141521-d1615987-5f7a-452b-b7c1-8f45c5fcd298.png"/>

- An employee can show all Active or Inactive students.
- An employee can filter students information to a specific set of information.
- An employee can change the status for a selected student to become either Active or Inactive.

</br>

### <span style="padding: 10px;"> About Page

</br>


- A screeshot from the page:

<img src="https://user-images.githubusercontent.com/70202370/204141550-1b5f42e2-a3a3-46ca-af07-863ced9b0d4c.png"/>

<img src="https://user-images.githubusercontent.com/70202370/204141564-5dd81f3e-1a84-4a22-8e5f-cc02e8ff6ff1.png"/>

- All team members are shown in this page along with the supervisors professors.

</br>
</br>

## Dark mode 


<img src="https://user-images.githubusercontent.com/70202370/204141559-611706da-c5d5-4234-8322-d935c86eead0.png"/>

<img src="https://user-images.githubusercontent.com/70202370/204141567-fe613a35-a73f-4f0a-9119-131ce590e151.png"/>


<img src="https://user-images.githubusercontent.com/70202370/204141556-17b3a046-0f06-44b5-9d70-de3d7756ee35.png"/>


<img src="https://user-images.githubusercontent.com/70202370/204141514-ab19d1d7-c77b-4143-96c6-0ae18a50fdc3.png"/>


<img src="https://user-images.githubusercontent.com/70202370/204141541-0f8030b4-f802-4f99-b110-49c1abdc6cd0.png"/>

</br>
</br>
</br>

## Project Phases

</br>

### First Phase

</br>

#### Project Requirements

    - Build the main pages using HTML ( main skeleton )

####  Working steps

    - Website planning 
    - UI/UX design on adobe xd 
    - HTML


</br>
</br>

### Second Phase

</br>

#### Project Requirements
 
    - Style the pages with CSS 
    - Write JavaScript to make user interaction  

####  Working steps

    - Refine HTML 
    - CSS 
    - JavaScript 

</br>
</br>


### Third and Final Phase

</br>

#### Project Requirements

    - Build the Backend with Django framework

####  Working steps

    - Refine HTML , CSS , JS 
    - Add Ajax 
    - Work on dark mode version 
    - Design SQL Databse for the project and integrate to project ( SQLite )
    - Build backend with Django 

</br>
</br>

Setting up the environment 🛠
--------------------------
</br>

#### 1. Make sure python v3.7 or higher is installed

</br>
- To get python version installed Execute the following:

    $ python --version
    Python 3.9.6
</br>


#### 2. Make Sure Git is installed


</br>
- To get git version installed Execute the following:


    $ git --version
    git version 2.28.0.windows.1

</br>

#### 3. Execute the following commands in your terminal after changing your directory to the desired path

</br>


    $ mkdir project && cd project
    $ python -m venv venv


For Windows Users:


    $ venv\Scripts\activate


For Linux Users:


    $ source venv/bin/activate


Then

    $ git clone https://github.com/BemwaMalak/Student_Affairs_System.git && cd Student_Affairs_System
    $ pip install -r requirements.txt


</br>

<b>These are the credentials for django admin super user:</b></br>
username: admin</br>
password: 123
