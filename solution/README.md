## Setting up test environment

   You need have at least python version: 3.6 installed to your machine to run robot test. For browser automation test 
   you need Chrome browser and corresponding Chromedriver installed in your PATH. Chromedriver can be
   downloaded from: https://chromedriver.chromium.org. Unzip downloaded chromedriver.exe to somewhere your PATH 
   (project root folder is fine if your run your tests there. 
   
### virtualenv

It is recommended that you create virtualenv (=separate python environment just for this project) for running tests. 
But this is mandatory. You can create virtualenv on project root folder with following command:

  ```shell
  python -m venv venv
  ```

This will create virtualenv named: `venv` to you. Activate virtualenv in Windows with command:

   ```shell
   .\venv\Scripts\activate
   ```

In linux etc. activation happens with command:
   ```shell
   ./venv/bin/activate
   ```

### Installing python requirements

Whether you created virtualenv or not, installing project python requirements happens in project root folder with command:
   ```shell
   pip install -r requirements.txt
   ```

### Running test

To test that everything is working: First ensure that My movies application is running. Then run following command in
project root folder:
   ```shell
   robot .\solution\tests\login.robot
   ```