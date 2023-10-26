const Texts = {
    home : {
        intro : {
            hi : "HELLO THERE, I'M",
            name : "Piotr Kalota",
            tags : "Developer · Computer Science Student",
            description : "If you are looking for a creative coder with wide programming skills, you are in the right place! Check out what I have for you below 🦊"
        },
        highlights : {
            webdev : {
                title : "WEB DEVELOPEMENT",
                content : "<b>Cheaclo</b> project is an aggregator of discounted clothes offers. Discover new platform with many functionalities and great layout. If you are shopping freak, you have to check it out!",
                tags : "#WebDev #Scraping #Spring #Angular #Java"
            },
            ml : {
                title : "MACHINE LEARNING",
                content : "Have you ever played snake game? Of course yes. However, nowadays snakes are much smarter and more independent. <b>Smart Snake</b> can show how is it possible.",
                tags : "#ML #Keras #Python #Numpy"
            },
            os : {
                title : "OPERATING SYSTEMS",
                content : "Computers are misterious creatures. But if you take time to get familiar with them, it turns out that they are not that scary. A few examples of <b>Operating Systems</b> solutions, can help you to get familiar with this topic.",
                tags : "#OS #Memory #Management #C #Multithreading"
            }
        },
        experience : {
            bachelor : {
                position : "Student of Computer Science - Bachelor",
                location : "Technology University of Lodz",
                description : "TUL was an entity, which introduced me into world of Computer Science. Many modules, ranging from embedded systems to graphic design, helped me create a point of view what IT is.",
                dates : "10.2018 - 02.2022"
            },
            samsung : {
                position : "Software Engineer Intern",
                location : "Samsung R&D Poland",
                description : "This internship is my first step into proffesional IT work. Togheter with team in Warsaw and Seul, we've been refactoring EFL's Evas library, what was a big lesson about C family and common tools used in Continous Integration.",
                dates : "07.2020 - 07.2021"
            },
            iLab : {
                position : "iLab Project Member",
                location : "University of Applied Science in Sankt Polten",
                description : "For one semester I had a pleasure to study in Austria. I participated in iLab project, which was based on Design Thinking Patterns of creating solution. My team - ToBinOrNotToBin - was looking for a solution in topic of food waste.",
                dates : "02.2021 - 07.2021"
            },
            sollers : {
                position : "Junior Java Developer",
                location : "Sollers Consulting",
                description : "During buying an insurance or claiming an accident, it's possible that you were using indirectly the systems written by me. As a Sollers member I was developing solutions for insurance clients in Guidewire framework.",
                dates : "08.2021 - 02.2022"
            },
            pwc : {
                position : "Junior Java Developer",
                location : "PWC",
                description : "Massive amount of data is already gathered and used by finance sector, however insurance area does not want to stay behind. Therefore with my team we are creating platform for data processing, where insurance company can analyze data about their clients. Using tools such a Spring Boot or Azure Storage I am in charge of backend side of the app.",
                dates : "02.2022 - Present"
            },
            dtu : {
                position : "Student of Human-Centered AI - Master",
                location : "Technology University of Denmark",
                description : "I am delving into the exciting and evolving field of AI with a strong focus on human interactions and user-centered design. This program is designed to provide an in-depth understanding of AI technologies and their applications, with an emphasis on creating AI systems that enhance user experiences and benefit society.",
                dates : "09.2022 - 02.2024"
            },
            tum : {
                position : "Student of Computer Science - Master",
                location : "Technical University of Munich",
                description : "Exploring the world of Computer Science with the strong focus on topics such as natural language processing and social networks. Working on the master thesis that will be spreading the awareness about the politics.",
                dates : "04.2024 - 03.2025"
            },
            dfds : {
                position : "Student C# Backend Developer",
                location : "DFDS Copenhagen",
                description : "Designing and implementing data accumulation solutions to efficiently store data, and I'm well-versed in AWS, where our services are hosted. Working closely with a talented team, I optimize these systems, honing my C# development skills and contributing to DFDS's data-driven success.",
                dates : "12.2022 - 02.2024"
            }
        },
        more : {
            generalOne : 'My main focus is Web Developement with Java based backend. However, in my opinion, developer should be aware of many branches in IT. That\'s why I highlighted to you Machine Learning and Operating System solutions.',
            generalTwo : 'If you aren\'t bored yet, I have some small projects for you. In case you are interested in cooperation, don\'t hestitate to contact me and if needed, catch resume below!',
            neural : {
                title : 'HelloNeuralNetwork',
                description : 'Implementation of Deep Neural Network able to recognize digits from MNIST database.',
                url : 'https://github.com/gingerjx/HelloNeuralNetwork'
            }, 
            beChef : {
                title : 'BeChef',
                description : 'Portal based on php backend, for sharing recipies among users.',
                url : 'https://github.com/gingerjx/BeChef'
            },
            littleChat : {
                title : 'LittleChat',
                description : 'Simple comunicator for sending messages and files, based on sockets connections.',
                url : 'https://github.com/gingerjx/LittleChat'
            },
            mazeSolving : {
                title : 'MazeSolving',
                description : 'Project about finding optimal escape path of maze from image.',
                url : 'https://github.com/gingerjx/MazeSolving'
            }, 
            runStudentRun : {
                title : 'RunStudentRun',
                description : 'Unity game for android, where you have to survive in the university jungle.',
                url : 'https://github.com/gingerjx/RunStudentRun'
            },
            alertMe : {
                title : 'AlertMe',
                description : 'Android application for adding and searching alerts in your surrounding.',
                url : 'https://github.com/gingerjx/AlertMeApp'
            }
        }
    },
    cheaclo : {
        title : 'Cheaclo',
        aFewWords : 'A few words',
        aFewWordsText1 : `Don't you feel overwhelmed about amount of information proccesed by you? It's an issue of news, email spams, but also following our interests, it takes a lot of time. The goal is too condence all of the data, as much as possible, without loosing its message. I focused on the small piece of this problem, which is searching of desired clothes on many shop websites.`,
        aFewWordsText2 : `Platform is devoted to shopping freaks, who want to reduce their time spent on seeking discounted clothes offers. Many peaople I was talking with, use already sites such as Zalando or About You. Unluckily, those platforms take care of only some part of the problem. That’s why <b>Cheaclo</b>, the project which is the full solution, arose. At the same time, it is the topic of my Bachelor Thesis 🙂`,
        technology : 'Technology',
        technologyText : `Using Cheaclo you have easy access to offers from different shops. The architecture is based on microservices approach and the app consist of 6 microservices presented below. Unfortunately, because of the resources required by <b>Web Scraper</b>, project couldn't be deployed on free hostings.`,
        webScraper : 'Web Scraper',
        webScraperText : 'Using Selenium library, microservice scraps three sites: HM, C&A and Reserved. After data is collected it is send to <b>Clothing Database</b>.',
        webScraperLink : 'https://github.com/cheaclo/web-scrapper',
        clothesDatabase : 'Clothes Database',
        clothesDatabaseText : `Is in charge of managing and giving an access to database of clothes. It is equiped in system of adding new , updating existing and deleting expired offers from the database.`,
        clothesDatabaseLink : 'https://github.com/cheaclo/clothes-database',
        usersDatabase : 'Users Database',
        usersDatabaseText : `Is responsible for maintaining information about singed up user and managing of the login system.`,
        usersDatabaseLink : 'https://github.com/cheaclo/users-database',
        clientFront : 'Client Front',
        clientFrontText : `Visualises clothes offers and related functionalites, in a form of web application.`,
        clientFrontLink : 'https://github.com/cheaclo/client-front',
        serviceRegistry : 'Service Registery',
        serviceRegistryText : 'Manages the work of microservice architecture. It helps to organize hostnames of the other component.',
        serviceRegistryLink : 'https://github.com/cheaclo/service-registery',
        cloudGateway : 'Cloud Gateway',
        cloudGatewayText : `Same as <b>Service Registry</b> it is a support for used architecture. By maping hostnames to one, common hostname it creates abstract layer, which hides the whole server logic from user's eyesight.`,
        cloudGatewayLink : 'https://github.com/cheaclo/cloud-gateway',
        presentation : 'Presentation',
        presentationText : `Current implementation is just the first version of wide-developed application. It is possible too add much more features, like logging through the google account or notifications about previously offers marked as desired. This would make the application even simpler and time-reducing. Apart from small additions, I was thinking about adding Recommendation System for logged users, based on Machine Learning, which can be a topic of Master Thesis 🤔`,
        videoIntro : `Below u can find a quick video presenting platform's workflow.`,
        moreDetails : `For more details, check`,
        aboutLink : 'https://github.com/cheaclo/about'
    },
    ml : {
        title : 'Machine Learning',
        aFewWords : 'A few words',
        aFewWordsText1 : 'During my 5th semester in Lodz University I had a pleasure to participate in ISP - Individual Study Plan. It made it possible for me to replace one subject with the project I wanted to realise. I decided to focus on Machine Learning.',
        aFewWordsText2 : 'First step was to attend to laboratories, where I was learning and implementing from scratch our neural networks. After that I started to implement Reinforcement Learning approaches on an example of <b>Snake Game</b> 🐍',
        neuralNetwork : 'Neural Network',
        neuralNetworkText : 'The goal of this part was to create a small API performing neural network solutions. Its efficiency was tested on MNIST database. Using this implementation you are able to create your own neural network with custom number of layers and neurons in it. There is additional thing to use - activation function, which says how data are manipulated. Few of them are ready to use in this implementation:',
        neuralNetworkDetails : 'For more details check',
        neuralNetworkLink : 'https://github.com/gingerjx/HelloNeuralNetwork',
        smartSnake : 'Smart Snake',
        smartSnakeText1 : `This is the final project presenting the usage of <b>Reinforcement Leanring</b>. In this implementation, instead of users input, snake is led by Double Deep Q Learning Agent. Snake can perform one of four actions - going up, down, left or right. His goal is to choose sequence of actions, which lead to gather the highest possible number of fruits rendered on the board.`,
        smartSnakeText2 : `To reach this level of “intelligence”, snake is trained in environment before, until it is able to reach required level. The main thing is to pass to the snake the information how the environment currently looks like, to let him decide which action he should take. That information is state, which consists of:`,
        smartSnakePoint1 : `Snake's move direction.`,
        smartSnakePoint2 : `Information about presence of any obstacle next to him in every direction.`,
        smartSnakePoint3 : `Information about presence of fruit in every direction.`,
        smartSnakePoint4 : `Information about distance to wall in every direction.`,
        smartSnakePoint5 : `Information about amount of snake's body segments in every direction.`,
        smartSnakePoint6 : `Snake's length.`,
        smartSnakePoint7 : `Distance between head and tail`,
        presentation : 'Presentation',
        presentationText : 'Snake is trained to gain around 30 fruits on the board 10x10 per game. Of course the performence can be imporved buy extending the implementation by adding new technics. Nevertheless, current score is sufficient that’s why I stopped at this point. Below I share with you a performance of Smart Snake!',
        smartSnakeDetails : 'For more details check',
        smartSnakeLink : 'https://github.com/gingerjx/SmartSnake',
    },
    os : {
        title : 'Operating Systems',
        aFewWords : 'A few words',
        aFewWordsText1 : 'Without operating systems, the present world development couldn’t be achieved. To create your own, a lot of effort has to be put. Operating system consists of many components, which are responsible for some part of the whole. Some of them I covered during the classes on my studies. Let me introduce them 💻',
        memoryManagement : 'Memory Management',
        memoryManagementText : `Project provides implementation of dynamic alocation. It provides <b>my_stdlib</b> library, which provides similar API to <b>stdlib</b>. With use of custom_sbrk, library receives the memory from the system and manages it. It’s a thread-safe solution, which covers the topics like control blocks, spaces for data or fences.`,
        memoryManagementDetails : 'For more details check',
        memoryManagementLink : 'https://github.com/gingerjx/MemoryManagment',
        ipc : 'IPC',
        ipcText1 : 'It is interprocess communitcation project visualized with a simple console game, using ncurses library. Player’s goal is to collect the rewards and store them in the campside. He can’t go through the wall, and the bushes slow him down. In case of collision with other client or the beast, player loses his treasure and leaves it one the map. Each client (player or bot) connects to the game through seperate terminal.',
        ipcText2 : 'The implementation is based on mechanisms like semaphores, shared memory and threads. Server is designed only for 4 players and will reject any request to join above this limit. Server as well as clients are seperated processes. If u miss simple graphic games from the childhood, it is something you would like!',
        ipcDetails : 'For more details check',
        ipcLink : 'https://github.com/gingerjx/IPC',
        fat12 : 'FAT12',
        fat12Text : 'Simple implementation of Fat12 file system reader. All what has to be done is to pass the .bin file based on Fat12. Provided view, which shares useful commands, let us searching through the disk.',
        fat12Details : 'For more details check ',
        fat12Link : 'https://github.com/gingerjx/Fat12View'
    }
}

export default Texts
