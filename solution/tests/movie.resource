*** Settings ***
Library           SeleniumLibrary    run_on_failure=Capture Page Screenshot

*** Variables ***
${BROWSER}       firefox
${APP_ADRESS}    http://localhost:3000/
${USERNAME}      Username
${PASSWORD}      password
${add_button_locator}      //button[@type='submit']
${dialog_locator}   //*[text()='Add a Movie' and contains(@class, 'MuiDialog')]
#&{moviedict}       name=''  releasedate=''  stars=''  reviewtext=''

*** Keywords ***
Login Setup
    Open Browser     ${APP_ADRESS}       ${BROWSER}
    Set Selenium Speed          1
    Maximize Browser Window
    Capture Page Screenshot
    Page Should Contain Element  //h4[contains(text(),'Login Page')]     Login Page text was not visible on page
    Input Text      //input[@id='username']     ${USERNAME}
    Input Text      //input[@id='password']     ${PASSWORD}
    Click Element   //button[@type='submit']

    Wait Until Element Is Visible    //button[contains(text(),'Log Out')]    2s
    ...    Logout Button was not found on page
    Page Should Contain Element       //h3[contains(text(),'My Movies')]    Title My Movies was not found on page


Guild Click Button 
    [Arguments]   ${locator}
    
    Wait Until Page Contains Element    ${locator}
    Click Element   ${locator}
    # TODO Add logic to check the button click succeeds

Check The Dialog
    
    Page Should Contain Element   ${add_button_locator}
    Element Should Be Visible    ${add_button_locator}
    Page Should Contain Element   ${dialog_locator}
    Element Should Be Visible    ${dialog_locator}


Add Movie
    [Documentation]  Adds a new movie, returns the data
    Log To console   kesken


