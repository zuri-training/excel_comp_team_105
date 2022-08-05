<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
</div>

<h3 align="center">XelComp</h3>

  <p align="center">
   XelComp is a web app that will enable users to compare the content of an excel file, spot and highlight minor changes and mistakes, and also be able to share and save files online.
 </p>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#installation">Installation</a></li></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#Web-App-Features">Web App Features</a></li>
    <li><a href="#Team">Team</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#Acknowledge">Acknowledge</a></li>
  </ol>
</details>




<!-- ABOUT THE PROJECT -->

## About The Project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<h1>Project Definition</h1>

XelComp is a web app that will enable users to compare the content of an excel file, spot and highlight minor changes and mistakes, and also be able to share and save files online.

<p><em>Files we currently support are:</em></p>
<ol>
  <li>Excel XLSX/XLS files: XLSX and XLS file extensions are used for Microsoft Excel spreadsheets, part of the Microsoft Office Suite of software. XLSX/XLS files are used to store and manage data such as numbers, formulas, text, and shapes in tables containing rows and columns.</li>
  <li>CSV file: A CSV (comma-separated values) file is a text file that has a specific format that allows data to be saved in a table structured format.</li>
</ol>


### Built With

* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
After having a copy of the repository on your local machine.

 * bash
  ```sh
  cd client && npm install
  ```
  and

* bash
    ```sh
  cd server && npm install
  ```

### Prerequisites
<ul>
To run this project on your local machine, make sure you have:
<li> node installed. To check if you have node installed

* bash
  ```sh
  node --version
  ```
  You should get something like this 

  * bash
  ```sh
  v17.7.1
  ```
You can get the latest version [here](https://nodejs.org/en/)
</li>
<li>A compatible broswer. We recommend Google Chrome</li>
<li>An IDE. We recommend Visual Studio Code</li>
</ul>

<!-- USAGE EXAMPLES -->
## Usage
<ol>
<li>Clone repository [here](https://github.com/zuri-training/excel_comp_team_105.git)
or
Download the [zip folder](https://github.com/zuri-training/excel_comp_team_105/archive/refs/heads/main.zip)
and extract to your local machine.</li>
<li>

* bash
  ```sh
  cd client && npm install
  ```
  and

  * bash
    ```sh
  cd server && npm install
   ```
  </li>
  <li>
* bash
  ```sh
  cd client && npm run start
  ```
  </li>
  <li> This will spin up a local server on port 3000</li>
</ol>


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Web App Features-->
## Web App Features

Authenticated User:
<ol>
    <li>1. Full access to the platform.</li>
    <li>2. Allow users ulpoad excel and csv files.</li>
    <li>3. Compare their files and also spot mistakes.</li>
    <li>4. Document their files easily</li>
    <li>5. Edit complex files quickly</li>
    <li>6. Quickly identify duplicate in files</li>
    <li>7. Highlight difference in files</li>
    <li>8. Show example usage to users</li>
</ol>

Unauthenticated User:
<ol>
    <li>1. Visit the platform to view basic information about it</li>
    <li>2. View and Interact with the documentation</li>
    <li>3. Register to view more details</li>
    <li>4. No access to use until registered</li>
</ol>

<!-- TEAM -->
## TEAM

Aderonke Abati - Product Design
Chiletam Ekewuba - Product Design
Adaobi - Product Design
Zinniee - Full Stack
Faith Ajamah - Product Design
Ikenna - Full Stack
Jacqueline - Product Design
Japhet E - Product Design
Ebube Okoli - Full Stack
Master Daniels - Full Stack
Mwaka - Full Stack
Ntombi - Product Design
Baron - Full Stack
Oluwasunmisola - Product Design
Chargie - Product Design
RaeJay - Product Design
Sirnz - Product Design
Ucheglory - Product Design


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## CONTRIBUTING

To contribute, follow the steps below:

<ol>

<li>

- #### Fork the project repository

Locate the project's repository on GitHub, and then "fork" it by clicking the Fork button in the upper right corner.
</li>

<li>

- #### Clone your fork
While still in your repository, click the green Clone or download button and then copy the HTTPS URL.

Using Git on your local machine, clone your fork using the URL you just copied: git clone URL_OF_FORK.

</li>

<li>

- #### Add the project repository as the "upstream" remote

Add the project repository as the "upstream" remote using: git remote add upstream URL_OF_PROJECT.

Use git remote -v to check that you now have two remotes: an origin that points to your fork, and an upstream that points to the project repository.
</li>

<li>

- #### Pull the latest changes from upstream into your local repository

Use git pull upstream master to "pull" any changes from the "master" branch of the "upstream" into your local repository. (If the project repository uses "main" instead of "master" for its default branch, then you would use git pull upstream main instead.)

</li>

<li>

- #### Create a new branch

Use git checkout -b BRANCH_NAME to create a new branch and then immediately switch to it. The name of the branch should briefly describe what you are working on, and should not contain any spaces.
</li>

<li>

- #### Make changes in your local repository 
Using an text editor or IDE.

</li>

<li>

- #### Commit your changes
After you make a set of changes, use git add -A to stage your changes and git commit -m "DESCRIPTION OF CHANGES" to commit them.
</li>

<li>

- #### Push your changes to your fork

Upload these changes to your fork using git push origin BRANCH_NAME. This "pushes" your changes to the "BRANCH_NAME" branch of the "origin" (which is your fork on GitHub).
</li>

<li>

- #### Begin the pull request

Return to your fork on GitHub, and refresh the page. Click the green Compare & pull request button to begin the pull request. Alternatively, you can switch to your branch using the Branch button and then click the New pull request button. 
</li>

<li>

- #### Create the pull request

Below the pull request form, you will see a list of the commits you made in your branch, as well as the "diffs" for all of the files you changed.

If everything looks good, click the green Create pull request button!
</li>

<li>

- #### Synchronize your fork with the project repository

At this point, your fork is out of sync with the project repository's master branch.

To get it back in sync, you should first use Git to pull the latest changes from "upstream" (the project repository) into your local repository: git pull upstream master.

Then, push those changes from your local repository to the "origin" (your fork): git push origin master.
</li>
</ol>

Congratulations
You just successfully made a contribution to our repository!!

<!-- ACKNOWLEGEMENT -->
## ACKNOWLEGEMENT

Huge thanks to the [Ingressive For Good and Zuri Team](https://training.zuri.team/) for the training and inspiring this project.


<!-- CONTACT -->
## CONTACT

Team Email - [Email](zuri.team.cv@gmail.com)

Project Link: [https://github.com/zuri-training/excel_comp_team_105/tree/main](https://github.com/zuri-training/excel_comp_team_105/tree/main)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
