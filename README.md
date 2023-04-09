Since I started this project, I have been plagued with having to choose between the following options:
(1) Been able to send an html file as a response to a request, using res.sendFile(). But my external css file will not have any effect on the html file, when it is rendered to the client.
(2) Been able to use the app.use(express.static(path.join(__dirname, "public"))) middleware to solve the external css palaver. But the sometimes interfere with request made to various endpoints, that ought to send an html file as response.
Now I just uncommented the the app.use(express.static(path.join(__dirname, "public"))) middleware statement in index.ts file. It now seems to be working well, I don't understand o!
About 3hrs have gone by, and it is still working fine. Well I continue to observe.