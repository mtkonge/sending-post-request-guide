Setup:
    først skriv "cd backend" dette sætter dig ind i folderen backend.
    start med at skrive "npm init" i konsollen. 
    Der vil så komme en masse configurations spørgsmål hvor du kan vælge bare at trykke enter igennem dem.
    Efter det skriv "npm install express cors", dette installere pakker der hjælper med at sende requests

    Nu burde du have installeret alt det du skulle bruge, for at starter node serveren skriv "node main.js"

    Serveren burde nu være startet, så åben en browser og skrive "localhost:8000"

Opgaven:
    Opgaven går ud på at sende en post request til urlen localhost:8000/api/createpost
    Der er lavet en knap og et input på "index.html" og det er defineret inde i "post.js"
    I "post.js" er der lavet en function af "postbutton", hvilket er når knappen blive trykket, og ellers er der defineret "dataToSend" hvilket er inputtets værdi
    Opgaven er at sende en request til "api/createpost" med dataen fra inputtet
    Held og lykke :)


