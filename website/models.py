from django.db import models

class Department ( models.Model ) :
    code         = models.CharField ( max_length = 2 , primary_key = True )
    name         = models.CharField ( max_length = 50 )

    def __str__(self):
        return self.name


class Student ( models.Model ) :
    studId       = models.IntegerField(unique=True) 
    name         = models.CharField( max_length = 255 )
    gpa          = models.DecimalField ( max_digits = 3, decimal_places = 2 )
    level        = models.CharField ( max_length = 1 )
    department   = models.ForeignKey( Department , on_delete = models.SET_NULL, null=True )
    dateOfBirth  = models.DateField() 
    gender       = models.CharField( max_length = 1 )
    status       = models.BooleanField()
    email        = models.CharField( max_length = 255 )
    mobileNumber = models.CharField ( max_length = 11 )

    def __str__(self):
        return self.name
    def __repr__(self):
        return self.name


class Date ( models.Model ) :
    currentYear  = models.IntegerField() 
    lastId       = models.IntegerField()