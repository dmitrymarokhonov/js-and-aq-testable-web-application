*** Settings ***
Library       SeleniumLibrary
Test Setup    Login Setup
Test Teardown   Close Browser

*** Variables ***
${BROWSER}  chrome
${APP_ADRESS}   http://localhost:3000/

*** Test Cases ***
Login to Application
    Sleep                       2s
    Capture Page Screenshot

*** Keywords ***
Login Setup
    Open Browser     ${APP_ADRESS}       ${BROWSER}
    Set Selenium Speed          1
    Maximize Browser Window
