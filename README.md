# okr-detox
###  TODO app for people with OKR syndrome  
  
demonstration: http://ovz5.googlonator.n03kn.vps.myjino.ru/
    
The .env files, databases, and some sensitive data are included in the repository for easy reference.  
I also used a local data store for ease and speed of development.  
I would never use this way of storing data in real development.  
  
#####  INSTALL & RUN
- Install docker on your computer
- Run command: ```git clone git@github.com:Bespalov-D-A/okr-detox-full.git okr -b dev```
- unpackage the archive okr-db-data.zip to the root directory of the project  
- run ```docker-compose build``` command  
- run ```docker-compose up``` command  
- ✨Magic ✨

##### Info
- http://localhost - client
- http://localhost:3001 - server
- http://localhost:5001 - adminer
