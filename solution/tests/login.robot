*** Settings ***
Documentation     This is a simple example test for login to test application with SeleniumLibrary
Test Teardown     Close Browser
Resource          movie.resource


*** Test Cases ***
Login to My Movies Application
    Login Setup
    Login

Check Dialog for adding movie
    Login Setup
    Check the Dialog
    Add Movie