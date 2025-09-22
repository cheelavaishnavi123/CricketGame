git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git init                    # initialize a new repo
git clone <url>             # clone an existing repo
git status                  # check changes
git add <file>              # stage file
git add .                   # stage all files
git commit -m "message"     # commit staged changes
git commit -am "message"    # stage and commit tracked files
git diff                    # see changes not staged
git diff --staged           # see staged changes
**4. Branching & Merging**
git branch                  # list branches
git branch <name>           # create new branch
git checkout <branch>       # switch branch
git checkout -b <branch>    # create & switch branch
git merge <branch>          # merge branch into current
git branch -d <branch>      # delete branch
git branch -D <branch>      # force delete branch
**5.Remote repos**
git remote -v               # list remotes
git remote add <name> <url> # add a remote
git fetch                   # fetch updates
git pull                    # fetch + merge
git push                    # push changes
git push -u origin <branch> # push and set upstream
**6. Undoing Changes**
git checkout -- <file>       # discard changes in working directory
git restore <file>           # new way to discard changes
git reset <file>             # unstage a file
git reset --soft HEAD~1      # undo last commit, keep changes staged
git reset --hard HEAD~1      # undo last commit, discard changes
git revert <commit>          # undo commit by creating new commit
**7. Viewing History**
git log                     # show commit history
git log --oneline --graph 

git rm --cached filename
git commit -m "Remove file from repo but keep locally"

git revert <commit-hash>
git push origin main


**Step 1: Create a New Repository on GitHub**
Go to GitHub.

Log in to your account.

Click + (top-right corner) → New repository.

Give it a name (e.g., simple-java-maven-app).

Choose Public or Private as per your need.

Do not initialize with a README (since you already have one locally).

Click Create repository.

**Step 2: Open Command Prompt in Your Project Folder**
Make sure you are in your project directory:

cd C:\Users\DELL\git\simple-java-maven-app
**Step 3: Initialize Git (if not already initialized)**
git init
**Step 4: Add Remote Repository**
Replace your-username with your GitHub username:

git remote add origin https://github.com/your-username/simple-java-maven-app.git
**Step 5: Stage and Commit Changes**
git add .
git commit -m "Updated pom.xml and project files"
**Step 6: Push to GitHub**
If this is your first push, use:

git branch -M main
git push -u origin main
After this, just use: git push

**if not working ----**
git remote -v
git remote remove origin
git remote add origin https://github.com/KusumaSrivalli/simple-java-maven-app.git
git push -u origin main




You cloned from a different remote, want to push to new one. Configure. – 3M
git remote set-url origin https://github.com/username/repo.git

. Delete branch patient from remote repo. – 2M
git push origin --delete patient

Apply a .patch file from teammate and include in history. – 3M
git apply file.patch
git add .
git commit -m "Applied patch from teammate"

If you want last 3 commits:

git format-patch -3 HEAD

If you want commits from a specific commit to now:

git format-patch <commit_id>





**Dockerfile**
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/simple-java-maven-app-1.0-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/app.jar"]

docker build -t myappimage .
docker run -d -p 8080:8080 --name myappcontainer myappimage

FROM tomcat:9.0
COPY target/*.war /usr/local/tomcat/webapps/ROOT.war
EXPOSE 8080
CMD ["catalina.sh","run"]

**push into docker hub:**

docker login
docker tag myappimage yourusername/myappimage:1.0
docker push yourusername/myappimage:1.0
docker pull yourusername/myappimage:1.0   # optional, on another machine
docker run -d -p 8080:8080 yourusername/myappimage:1.0

**Docker image:**
version: "3.9"
services:
  app:
    image: myprojectimage
    container_name: myproject_app
    ports:
      - "9090:8080"   # HostPort:ContainerPort, App accessible at http://localhost:9090
    environment:
      DB_HOST: db
      DB_USER: user
      DB_PASSWORD: password
      DB_NAME: mydb
    depends_on:
      - db

  db:
    image: mysql:8
    container_name: myproject_db
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: mydb
      MYSQL_USER: user
      MYSQL_PASSWORD: password
    volumes:
      - db_data:/var/lib/mysql
    ports:
      - "3306:3306"   # Optional, only if you want to connect from host

volumes:
  db_data:


Save the file as docker-compose.yml in your project folder.
In terminal, go to that folder.
Run:
docker-compose up -d
Check if services are running:
docker-compose ps
Access your app at:
http://localhost:9090



  

  (Windows: dir)
* This will show files like pom.xml, src/, etc.

---










*********maven
### *2. mvn CLEAN package, but getting unknown lifecycle phase error – 2M*

If you typed:

bash
mvn CLEAN package


it fails  because Maven is *case-sensitive*.
 Correct command:

bash
mvn clean package


(clean must be lowercase)

---

### *3. Add dependency servlet-api of 2.5 to your project – 2M*

In pom.xml, inside <dependencies>:

xml
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>servlet-api</artifactId>
    <version>2.5</version>
    <scope>provided</scope>
</dependency>


(scope=provided means container like Tomcat provides it.)

---

### *4. Build with JDK 21, but compilation fails – Why? How to fix? – 2M*

* Problem: Project may use *old libraries not compatible with JDK 21*.
* Fix: Add *maven-compiler-plugin* with Java version in pom.xml.

xml
<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-compiler-plugin</artifactId>
      <version>3.8.1</version>
      <configuration>
        <source>17</source>
        <target>17</target>
      </configuration>
    </plugin>
  </plugins>
</build>


 Set 17 (or supported version).

---

### *5. In dependency section: junit 4.6.0 – What will Maven do? How to solve? – 2M*

xml
<dependency>
  <groupId>SE</groupId>
  <artifactId>junit</artifactId>
  <version>4.6.0</version>
</dependency>


 Issue: Wrong groupId (SE is invalid).
 Correct dependency:

xml
<dependency>
  <groupId>junit</groupId>
  <artifactId>junit</artifactId>
  <version>4.6.0</version>
  <scope>test</scope>
</dependency>


---

### *6. WAR file name mismatch – 3M*

* You built the project → WAR file generated as:
  hospitalmgmtsystem-0.0.1-SNAPSHOT.war
* But expected: HospitalMgmtSystem.war.

 Fix in pom.xml:

xml
<build>
  <finalName>HospitalMgmtSystem</finalName>
</build>


Now output will be: HospitalMgmtSystem.war.

---

 That covers *Q2 fully (30M)*.

---

Do you want me to continue with *Q3: Git & GitHub Integration with Maven Project (30M)* next?


7. Add the central dependency of Java Servlet API - 4.0.0-b01 to your existing project. Check and complete pom.xml file and run it. – 2M

Answer:

To add Java Servlet API dependency in your pom.xml:

<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>4.0.0-b01</version>
    <scope>provided</scope>
</dependency>


scope: provided means the servlet container (like Tomcat) will provide this dependency at runtime.

8. A developer removes the <dependencies> section completely. Will Maven still build the project? What issues might occur during testing? – 2M

Answer:

Maven will fail to build if essential dependencies (e.g., JUnit, Spring) are not present.

Removing <dependencies> removes all third-party library references.

Compilation errors will occur for missing classes.

Testing will fail if test frameworks (like JUnit) aren't found.

9. Failed to execute goal ... maven-compiler-plugin:3.1:compile ... Compilation failure ... No compiler is provided in this environment. Perhaps you are running on a JRE rather than a JDK? Identify the error? – 2M

Answer:

Error: Maven requires a JDK (Java Development Kit) to compile code.

If only JRE (Java Runtime Environment) is installed, there's no compiler (javac), leading to this error.

Fix:

Install a JDK.

Ensure the JAVA_HOME environment variable points to the JDK.

10. In build, it is having <finalName>localhost:8080/FoodSystem</finalName>, is it correct? If not, how can you fix it? – 2M

Answer:

Incorrect. The <finalName> tag should only define the filename of the generated artifact (e.g., WAR/JAR), not a URL.

Fix:

<finalName>FoodSystem</finalName>


URL like localhost:8080/FoodSystem is a deployment target, not a filename.

11. Your project is meant to deploy on Tomcat, but <packaging>jar</packaging> is like this in pom.xml. How do you solve it? – 2M

Answer:

Issue: Tomcat is a servlet container; it requires WAR files, not JARs.

Fix:
Change the packaging to war in pom.xml:

<packaging>war</packaging>

12. In the <url> tag, written <url>http://maven.java.org</url>. Will Maven accept this? What is the correct purpose of the <url> element in pom.xml? – 3M

Answer:

Yes, Maven accepts it syntactically, but it won’t affect the build unless used in a plugin or profile.

<url> in pom.xml is informational only—it specifies the project's homepage or documentation.

Correct example:

<url>https://github.com/yourusername/yourproject</url>

13. Check the complete pom.xml and push into the GitHub of your account. – 3M

Answer:

Steps to follow:

Check pom.xml:

Ensure it includes all required sections: groupId, artifactId, version, dependencies, build, etc.

Git Commands:

git init
git add pom.xml
git commit -m "Add pom.xml"
git branch -M main
git remote add origin https://github.com/yourusername/yourrepo.git
git push -u origin main













**********

docker docker compose maven



Q4: Docker Containerization for Maven Application – 20 Marks

Task: Containerize your Maven project using Docker.

You are given these instructions:

Write a Dockerfile for the Maven project.

Ensure it copies the WAR/JAR and runs on Tomcat (or relevant base image).

Step 1: Dockerfile to build the Maven project

Here’s a sample Dockerfile for your HospitalMgmtSystem:

# Stage 1: Build the Maven project
FROM maven:3.8.6-eclipse-temurin-17 AS build

# Set working directory inside the container
WORKDIR /app

# Copy pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy source code and build
COPY src ./src
RUN mvn clean package

# Stage 2: Run the WAR file using Tomcat
FROM tomcat:9.0.73-jdk17

# Remove default webapps
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy the WAR from previous stage
COPY --from=build /app/target/HospitalMgmtSystem.war /usr/local/tomcat/webapps/ROOT.war

# Expose Tomcat port
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]


 Notes:

Multi-stage build: First stage builds your Maven project, second stage runs it on Tomcat.

WAR file name should match the finalName in pom.xml (HospitalMgmtSystem.war).

Expose port 8080 (you can map it to host later).

Step 2: Build Docker image

Command to build image:

docker build -t hospital-mgmt .


-t hospital-mgmt → gives your image a name.

Step 3: List all available Docker images

Command:

docker images

Step 4: Run container with port mapping
docker run -d -p 9090:8080 --name hospital-container hospital-mgmt


Maps host 9090 → container 8080

-d → run in background

Step 5: Verify container running
docker ps


Open browser: http://localhost:9090 → should show your app.

Step 6: Tag and push image to DockerHub
docker tag hospital-mgmt yourusername/hms:latest
docker push yourusername/hms:latest

Step 7: Inspect logs if container crashes
docker logs hospital-container


Shows errors to debug.

Step 8: Connect inside running container (interactive)
docker exec -it hospital-container /bin/bash


Lets you check files, run commands inside container.

Step 9: Stop and remove containers
docker stop hospital-container
docker rm hospital-container


Useful if you forgot port mapping or need to rerun correctly.

Step 10: List removed containers
docker ps -a -f "status=exited"


Do you want me to continue with *Q5: Docker Compose – 10M* next?

*\\\\*docker compose

Example Docker Compose File (Simple)
Here’s a basic example of a Docker Compose file that runs WordPress and MySQL together:
version: '3.8' # Docker Compose file format version

services:
wordpress: # WordPress service
image: wordpress:latest
ports: - "8080:80" # Map port 80 of the container to port 8080 of the host
environment:
WORDPRESS_DB_HOST: db:3306 # Database host
WORDPRESS_DB_USER: wordpress
WORDPRESS_DB_PASSWORD: wordpress
WORDPRESS_DB_NAME: wordpress
depends_on: - db # Ensures the db service starts first

db: # MySQL service
image: mysql:5.7
environment:
MYSQL_ROOT_PASSWORD: rootpassword
MYSQL_DATABASE: wordpress
MYSQL_USER: wordpress
MYSQL_PASSWORD: wordpress

How to Run It
To run a multi-container setup like the one above:

1. Save the file as docker-compose.yml.
   Or
   docker-compose.yaml
2. To Start the compose

docker-compose up –d

3. To stop the containers
   docker-compose down
4. To scale the container

docker-compose up --scale <service name>=2 -d

1.Define and run multiple interdependent services

Task:
I. Create a new folder compose-lab
Inside it, create a file docker-compose.yml with the following content:

version: "3.9"
services:
web:
image: nginx:latest
ports: - "8080:80"

db:
image: postgres:15
environment:
POSTGRES_USER: demo
POSTGRES_PASSWORD: demo
POSTGRES_DB: demo_db

II. Run the setup:

docker compose up -d

III. Open your browser and visit: http://localhost:8080.

IV. Expected Output:

Nginx welcome page is displayed.
db container runs in the background.

2.Write and interpret docker-compose.yml files
Task:
I. Modify docker-compose.yml to add a Redis cache:

redis:
image: redis:alpine

II. Add a depends_on so web waits for Redis:
web:
image: nginx:latest
ports: - "8080:80"
depends_on: - redis

III. Restart the setup:
docker compose up -d
docker compose ps

IV. Expected Output:

Three services (web, db, redis) are listed as running.

3.Deploy across different machines
Task:
I. Zip your compose-lab folder.

Transfer it to another machine with Docker Compose installed.

II. Run:
docker compose up -d

Check that Nginx and Postgres work there as well.

III. Expected Output:
The same services run on the new machine without changes.

4.Networking and persistent storage
Task:
I. Update your docker-compose.yml to add a custom network and volume:

networks:
app-net:

volumes:
db-data:

services:
web:
image: nginx:latest
ports: - "8080:80"
networks: - app-net
depends_on: - db

db:
image: postgres:15
environment:
POSTGRES_USER: demo
POSTGRES_PASSWORD: demo
POSTGRES_DB: demo_db
volumes: - db-data:/var/lib/postgresql/data
networks: - app-net

II. Run:
docker compose up -d
III. Insert some data into Postgres (optional with psql).
IV. Remove containers:
docker compose down
V. Start again:
docker compose up -d
VI. Expected Output:
Database data persists across restarts.
Services communicate via the app-net network using service names.

5.Faster iteration during development
Task:
I. Create a simple Flask app in app.py:

from flask import Flask
app = Flask(*name*)
@app.route("/")
def home():
return "Hello from Flask + Docker!"
if *name* == "*main*":
app.run(host="0.0.0.0", port=5000)

II. Add a Dockerfile in the same folder:

FROM python:3.10-slim
WORKDIR /app
COPY app.py /app/
RUN pip install flask
CMD ["python", "app.py"]

III. Update docker-compose.yml:
web:
build: .
ports: - "5000:5000"
depends_on: - db
IV. Run:
docker compose up --build
Visit http://localhost:5000.
Change the return text in app.py (e.g., "Hello Docker Compose!").
V. Rebuild:
docker compose up --build
VI. Expected Output:
New message appears instantly after rebuild.
