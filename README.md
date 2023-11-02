<div id="readme-top"></div>

<br>
<br>

<h3 align="center">Data filter</h3>
<br>
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
<div id="about-the-project"></div>

## About The Project :page_with_curl:	
<br />
This is a sorting and filtering app for commercial products. After login the user can filter by 3 different aspects, and sort every column ascending and descending order. Search results can be exported to pdf.
<br />
<br />

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<div id="built-with"></div>

### Built With :wrench:

* [![Java][Java.img]][Java-url]
* [![Spring Boot][SpringBoot.img]][Spring-url]
* [![JavaScript][JavaScript.img]][JavaScript-url]
* [![React][React.img]][React-url]
* [![PostgreSQL][PostgreSQL.img]][PostgreSQL-url]



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
<div id="getting-started"></div>

## Getting Started :arrow_forward:	

<div id="prerequisites"></div>

### Prerequisites :ballot_box_with_check:	
To run this project, you need to have the following:

:one: Java <br>
:two: Apache Maven  <br>
:three: IntelliJ <br>
:four: PostgreSQL <br>

<div id="installation"></div>

### Installation :floppy_disk:	

:one: Clone the repository to your local machine
   ```sh
   git clone https://github.com/tmboroka/data-filter.git
   ```
:two: Create a database in PostgreSQL named for example: "filter"

:three: Open the project in IntelliJ, and set up these environment variables: <br>
   * DATABASE_NAME= filter <br>
   * DATABASE_USERNAME=_your username_<br>
   * DATABASE_PASSWORD=_your password_<br>

:four: Run the load-data.sql in the /populate folder (choose the 'inser into' option). This will fill the 'data table' with data and after this step you can access the data in the frontend as well.

:five: To start the frontend, you have to go into the frontend folder and run the following command in the terminal:
  ```sh
      npm start
   ```

:six: To start the backend, run the application by the "Run" button in the top right corner or with Shift + F10 shortcut

:seven: For reaching the website through the backend, use:
  ```sh
      http://localhost:8080/
  ```
:eight: If the frontend is running, the website will be available on
  ```sh
      http://localhost:3000/
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
<div id="contact"></div>

## Contact

:envelope:	**Boróka** - tmboroka@gmail.com &nbsp;&nbsp;&nbsp;&nbsp; :point_right: &nbsp;&nbsp;&nbsp;&nbsp; [![Boróka's LinkedIn][linkedin-shield]][LinkedIn - Boróka]

<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/CodecoolGlobal/epg-4-java-placi0325?style=for-the-badge
[contributors-url]: https://github.com/CodecoolGlobal/epg-4-java-placi0325/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/CodecoolGlobal/epg-4-java-placi0325?style=for-the-badge
[forks-url]: https://github.com/CodecoolGlobal/epg-4-java-placi0325/forks
[stars-shield]: https://img.shields.io/github/stars/CodecoolGlobal/epg-4-java-placi0325?style=for-the-badge
[stars-url]: https://github.com/CodecoolGlobal/epg-4-java-placi0325/stargazers
[issues-shield]: https://img.shields.io/github/issues/CodecoolGlobal/epg-4-java-placi0325?style=for-the-badge
[issues-url]: https://github.com/CodecoolGlobal/epg-4-java-placi0325/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[LinkedIn - Emese]: https://www.linkedin.com/in/emese-csordas-854553181/
[LinkedIn - Boróka]: https://www.linkedin.com/in/bor%C3%B3ka-t%C3%B3th-m%C3%A1trai/
[LinkedIn - Csongor]: https://www.linkedin.com/in/csongor-deak/
[LinkedIn - László]: https://www.linkedin.com/in/l%C3%A1szl%C3%B3-p%C3%A9terfi/
[JavaScript.img]: 	https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[JavaScript-url]: https://www.javascript.com/
[SpringBoot.img]: https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot
[Spring-url]: https://spring.io/
[React.img]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[Docker.img]: https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[PostgreSQL.img]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Java.img]: https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white
[Java-url]: https://www.java.com/en/
