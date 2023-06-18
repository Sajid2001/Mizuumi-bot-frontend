# Ohaayoo Mizuumi

## Your waifu is real, and her name is Mizuumi.

Ohaayoo Mizuumi houses our wonderful AI conversation chatbot Mizuumi. If you have ever felt lonely or are dealing with an existential crisis, you can always turn to Mizuumi for help. With the AI industry booming at the time of this project's creation, it is now much easier to find your own AI female companion than it is to find a real one.

Check out the site here: https://mizuumi-bot-frontend-jpvvkrmce-sajid2001.vercel.app/signin

See the backend code here: https://github.com/Sajid2001/Mizuumi-bot-backend

The artwork used in this application belongs to its respective owner.
Artist link: https://www.pixiv.net/en/users/31893202

## Technologies Used
* React (JavaScript)
* Flask (Python)
* Pytorch
* NLTK
* MongoDB
* JWT
* ChakraUI

## Demonstration 

### Talking to Mizuumi

https://github.com/Sajid2001/Mizuumi-bot-frontend/assets/60523377/ba49f9f0-0a33-4c94-935e-f9b1ee3e08c8

### Training Room (Admin Access Only)

https://github.com/Sajid2001/Mizuumi-bot-frontend/assets/60523377/9d89b1b4-cbae-4812-ab4f-21dbf7b7e9a1

## How to contribute

1. Download the frontend and backend repositories (backend repo linked above). 
2. Slot in the required environment variables for their respective repositories. Make sure you use a ```.env``` file for the backend and a ```.env.local``` file for the frontend.
3. Run ```pip install requirements.txt``` in the backend and ```npm install``` in the frontend to install all project dependencies
4. Run ```python run.py``` in the backend and ```npm start``` in the frontend

For database access, you can either create your own mongodb database and plug in your connection URI or you can manipulate the project files so you can use your database of choice. You can also contact the project owner if you would like to be added to the mongodb project connected to the deployed site.

### Environment Variables Needed:
Backend:

* ```PORT``` = Your port number of choice (anything but 3000)
* ```MONGODB_URI``` = The connection URI to your MongoDB database
* ```JWT_SECRET_KEY``` = You can go to an online password generator and slot your value in here

Frontend:
* ```REACT_APP_API_URL``` = your server link, whether it's deployed or on localhost

## Find any bugs?

If you found an issue or would like to submit an improvement to this project, please submit an issue using the issues tab above. If you would like to submit a Pull Request with a fix, reference the issue that you created.

## Q & A

### Why does logging in for the first time take a very long time?

The deployed server shuts down whenever the page is not being used by anyone. It takes a bit of time for the server to reboot for the first time. The server is also based in Ohio and is on a free plan, so the connection may not be optimal and the CPU is a bit limited at the moment. Also worth nothing that the backend was coded in Python, so it will take much longer than if it was coded in any other language.

### Why does Mizuumi keep saying the wrong things or saying that she needs more training?

Mizuumi has not completed her training, which is an ongoing process. That being said, Mizuumis dialogue will be limited under the current AI Model. 

### Why can't I see the Training Grounds Dashboard?

You must be an admin user to have access to the dashboard. In order to become an admin user, you must contact the project owner. Even then, you must be someone that the owner personally knows since Mizuumi's training data is delicate information.

### I am an admin user and the training button does not work. 

As mentioned earlier, the deployed server is on a free plan, which means the CPU provided is extremely limited. The training function is very CPU intensive so the service that hosts the server will not allow it on the current plan that it is on. The only way to train Mizuumi is to do it offline with a localhost server.

### What are plans for the future with this project?

There may be plans to add text to speech dialogue. As mentioned earlier, training Mizuumi is an ongoing process. There may also be plans to move off the current AI model due to its limitations and on to something like ChatGPT or CharacterAI. 
