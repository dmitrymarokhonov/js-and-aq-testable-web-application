*** Settings ***
Library           SeleniumLibrary    run_on_failure=Capture Page Screenshot
Test Setup        Login Setup
Test Teardown     Close Browser
Resource          movie.resource



*** Test Cases ***
Add Movie Dialog Opens
    [Documentation]  The user is logged in and then movie is added. Checks the Dialog 
    Guild Click Button    //button[contains(text(),'Add Movie')]
    #TODO odotellaan uutta versiota, sitten tarkistus

Movie Form Submit
    [Documentation]   The new movie is displayed on the My Movies page with correct data


