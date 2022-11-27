from django import http
from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.forms import modelform_factory
from .models import Student,Department
# Create your views here.

def index(req):
    return render(req, "website/index.html")
def home(req):
    return render(req, "website/home.html")

StudentForm = modelform_factory(Student, exclude=[])
def addStudent(req):
    if req.method == "GET":
        return render(req, "website/add.html")
    form = StudentForm(req.POST)
    if form.is_valid():
        form.save()
    return render(req, "website/add.html")

    
    
def search(req):
    return render(req, "website/search.html")
def remove(req, id):
    return render(req, "website/search.html")
def select(req, id):
    return render(req, "website/search.html")
def show(req):
    return render(req, "website/show.html")

def getAllStudents(req):
    data = list(Student.objects.all())
    res = ""
    for item in data:
        isChecked = "checked"
        gender = "Male"
        if item.status == False:
            isChecked = ""
        if item.gender == "F":
            gender = "Female"
        res += f'''  <tr>
                    <td class="ID">{item.studId}</td>
                    <td class="Name">{item.name}</td>
                    <td class="GPA">{item.gpa}</td>
                    <td class = "Level">{item.level}</td>
                    <td class ="Department">{item.department}</td>
                    <td class ="Date Of Birth">{item.dateOfBirth}</td>
                    <td class ="Gender">{gender}</td>
                    <td class ="Status">
                    <label class="switch">
			        <input type='checkbox' {isChecked} onclick="changeStatus({item.studId})"><span class='slider round'></span>
                    </label>
                    </td>
                    <td class ="Email">{item.email}</td>
                    <td class ="Mobile Number">{item.mobileNumber}</td>
                </tr>
               '''
    return HttpResponse(res)

def getSearchResult(req):
    data = list(Student.objects.all())
    res = ""
    for item in data:
        status = "Active"
        gender = "Male"
        if item.status == False:
            continue 
        if item.gender == "F":
            gender = "Female"
        res += f'''  <tr>
                    <td class="ID">{item.studId}</td>
                    <td class="Name">{item.name}</td>
                    <td class="GPA">{item.gpa}</td>
                    <td class = "Level">{item.level}</td>
                    <td class ="Department">{item.department}</td>
                    <td class ="Date Of Birth">{item.dateOfBirth}</td>
                    <td class ="Gender">{gender}</td>
                    <td class ="Status">{status}</td>
                    <td class ="Email">{item.email}</td>
                    <td class ="Mobile Number">{item.mobileNumber}</td>
                </tr>
               '''
    return HttpResponse(res)

def edit(req,id):
    
    if req.method == "GET":
        data = Student.objects.get(studId=id)
        date = str(data.dateOfBirth)
        department = str(data.department)
        return render(req, "website/edit.html", {"data" : data, "date" : date, "dep" : department})

    if req.method == "POST":
        student = Student.objects.get(studId=id)
        student.name = req.POST.get("name")
        student.studId = req.POST.get("studId")
        student.gpa = req.POST.get("gpa")
        student.level = req.POST.get("level")
        student.dateOfBirth = req.POST.get("dateOfBirth")
        student.gender = req.POST.get("gender")
        student.email = req.POST.get("email")
        student.mobileNumber = req.POST.get("mobileNumber")
        student.save()
        return redirect("search")
    

def about(req):
    print( req.META[ 'HTTP_REFERER' ] ) 
    return render(req, "website/about.html")
    

def deactivate(req, id):
    student = Student.objects.get(studId=id)
    student.status ^= True
    student.save()
    return HttpResponse("Status changed successfuly!")


def remove(req,id) :
    student = Student.objects.get(studId=id)
    student.delete()
    return HttpResponse("Student was deleted successfuly!")

def select(req,id) :
    student = Student.objects.get(studId=id) 
    #code
    if req.method == "GET" :
        return render(req, "website/dept.html", {"name" : student.name , "id" : student.studId })
    
    student.department = Department.objects.get( code = req.POST.get("department") )
    student.save() 
    return redirect("search")


def checkForEdit(req, newID, oldID):
    data = Student.objects.filter(studId=newID)
    if data.exists() and newID != oldID:
        return HttpResponse("Invalid")
    else:
        return HttpResponse("Valid")
def checkForAdd(req, id):
    data = Student.objects.filter(studId=id)
    if data.exists():
        return HttpResponse("Invalid")
    else:
        return HttpResponse("Valid")