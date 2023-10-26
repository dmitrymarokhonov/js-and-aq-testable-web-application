*** Settings ***
Library           SeleniumLibrary    run_on_failure=Capture Page Screenshot

*** Variables ***
${BROWSER}       firefox
${APP_ADRESS}            http://localhost:3000/
${USERNAME}              Username
${PASSWORD}              password
${add_button_locator}    //button[@type='submit']
${addmovie_btn_loc}      //button[contains(text(),'Add Movie')]
${dialog_locator}        //*[text()='Add a Movie' and contains(@class, 'MuiDialog')]
#&{moviedict}       name=''  releasedate=''  stars=''  reviewtext=''
${ONCE_UPON}             Once Upon a Time in America
${REL_DATE}              05071984
${REVIEW}                Movie by Cergio Leone with where James Woods owns Robert De Niro





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



Login
    Wait Until Element Is Visible    //button[contains(text(),'Log Out')]    2s
    ...    Logout Button was not found on page
    Page Should Contain Element       //h3[contains(text(),'My Movies')]    Title My Movies was not found on page
    

Check The Dialog
    Page Should Contain Element   ${addmovie_btn_loc}    Button 'Add Movie' was not found on page
    Click Element     ${addmovie_btn_loc}
    Wait Until Element Is Visible      ${dialog_locator}     2s
    # Element Should Be Visible    ${add_button_locator}
    Page Should Contain Element   ${dialog_locator}
    Element Should Be Visible    ${dialog_locator}
    

Guild Click Button 
    [Arguments]   ${locator}
    
    Wait Until Page Contains Element    ${locator}
    Click Element   ${locator}
    # TODO Add logic to check the button click succeeds



Add Movie
    # [Documentation]  Adds a new movie, returns the data
    # Log To console   kesken
    Page Should Contain Element     //h2[contains(text(),'Add a Movie')]     Title 'Add a Movie' in dialog was not visible 
    Input Text        //input[@name='name']     ${ONCE_UPON}
    Input Text        //input[@name='review']   ${REVIEW} 
    Input Text        //input[@placeholder='MM/DD/YYYY']   ${REL_DATE}
    Click Element     //button[@type='submit']
    Wait Until Element Is Visible     //h4[contains(text(), 'Once Upon a Time in America')]    2s
    Element Should Be Visible         //h4[contains(text(), 'Once Upon a Time in America')]
    # Element Should Be Visible     //p[contains(text(), 'Movie by Cergio Leone with where James Woods owns Robert De Niro')]


