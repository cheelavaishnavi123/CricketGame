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

### *2. mvn CLEAN package, but getting unknown lifecycle phase error – 2M*

If you typed:

bash
mvn CLEAN package


it fails ❌ because Maven is *case-sensitive*.
✅ Correct command:

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


👉 Set 17 (or supported version).

---

### *5. In dependency section: junit 4.6.0 – What will Maven do? How to solve? – 2M*

xml
<dependency>
  <groupId>SE</groupId>
  <artifactId>junit</artifactId>
  <version>4.6.0</version>
</dependency>


❌ Issue: Wrong groupId (SE is invalid).
✅ Correct dependency:

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

✅ Fix in pom.xml:

xml
<build>
  <finalName>HospitalMgmtSystem</finalName>
</build>


Now output will be: HospitalMgmtSystem.war.

---

✔ That covers *Q2 fully (30M)*.

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
