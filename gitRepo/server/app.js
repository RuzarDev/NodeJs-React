const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const multer = require('multer');
const path = require('path')
const PORT = process.env.PORT || 3000;
const fs = require('fs')

// Пример данных блога (можно заменить на базу данных)
let blogPosts = [
    {
        id: 1,
        author: "Alec Whitten",
        date: "1 Jan 2023",
        title: "Bill Walsh Leadership Lessons",
        subtitle: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        categories:["Management"],
        comments: [
            { author: "Alice", text: "Great insights, thanks for sharing!" },
            { author: "Bob", text: "This is truly inspiring." }
        ],
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JHcsesfWeJSFc5h6iTsfMJ47CKYKvlhOoA&usqp=CAU"
    },
    {
        id: 2,
        author: "John Doe",
        date: "5 Feb 2023",
        title: "The Art of Effective Communication",
        subtitle: "Learn how to communicate your ideas clearly and persuasively",
        categories: ["Leadership"],
        comments: [
            { author: "Eve", text: "Fantastic article!" },
            { author: "Charlie", text: "Very helpful tips, thank you!" }
        ],
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9WLnRGua2LUpuNa6QLhcyCFjLS3alW4lBQQ&usqp=CAU"

    },

    {
        id: 3,
        author: "Jane Smith",
        date: "10 Mar 2023",
        title: "Time Management Strategies for Success",
        subtitle: "Master the art of prioritization and productivity",
        categories: ["Management"],
        comments: [
            { author: "David", text: "I found these strategies very useful." },
            { author: "Emma", text: "Thank you for sharing these insights!" }
        ],
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYIqPGmbyLEcm4Hs6KIbKoySa36oYNfW7HQ&usqp=CAU"
    },
    {
        id: 4,
        author: "Chris Johnson",
        date: "15 Apr 2023",
        title: "The Power of Positive Thinking",
        subtitle: "Discover how a positive mindset can transform your life",
        categories: ["Team Building"],
        comments: [
            { author: "Grace", text: "Positivity is key! Great article." },
            { author: "James", text: "I needed this reminder today. Thanks for sharing." }
        ],
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYTRBSfeDjdNzz_OIJ4-fQDCCwow3kZr5Vg&usqp=CAU"
    },
    {
        id: 5,
        author: "Emily Brown",
        date: "20 May 2023",
        title: "Effective Team Building Techniques",
        subtitle: "Build cohesive teams that drive success",
        categories: ["Team Building"],
        comments: [
            { author: "Oliver", text: "Teamwork makes the dream work!" },
            { author: "Sophie", text: "These techniques are practical and effective. Thanks!" }
        ],
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvGAJfx1bRwifYDcSCPAhboxk8JI99Ucxhg&usqp=CAU"
    },
    {
        id: 6,
        author: "Mike Anderson",
        date: "25 Jun 2023",
        title: "Stress Management Strategies for Professionals",
        subtitle: "Learn how to cope with stress and maintain well-being",
        categories: ["Communication"],
        comments: [
            { author: "Lucy", text: "Stress management is crucial for maintaining productivity." },
            { author: "Ryan", text: "I'll definitely try out some of these strategies. Thanks for sharing!" }
        ],
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTriZR0uO7FN3k0ozN2IkoJcyIdqgMd6LDb5Q&usqp=CAU"
    },

    {
        id: 7,
        author: "Sarah Johnson",
        date: "1 Jul 2023",
        title: "The Art of Negotiation",
        subtitle: "Master negotiation skills for personal and professional success",
        categories: ["Negotiation", "Communication"],
        comments: [
            { author: "Emma", text: "Negotiation is an art. Thanks for the insightful article!" },
            { author: "Max", text: "I've always struggled with negotiation. This article gave me some useful tips." }
        ],
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvGAJfx1bRwifYDcSCPAhboxk8JI99Ucxhg&usqp=CAU"

    },
    {
        id: 8,
        author: "Alex Thompson",
        date: "5 Aug 2023",
        title: "Effective Leadership Styles",
        subtitle: "Explore different leadership styles and their impact",
        categories: ["Leadership", "Management"],
        comments: [
            { author: "Jack", text: "Leadership is about inspiring others. Thanks for the informative read." },
            { author: "Sophia", text: "Understanding different leadership styles is essential for growth. Great article!" }
        ],
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JHcsesfWeJSFc5h6iTsfMJ47CKYKvlhOoA&usqp=CAU"
    },
    {
        id: 9,
        author: "Jessica Davis",
        date: "10 Sep 2023",
        title: "The Importance of Emotional Intelligence",
        subtitle: "Develop your emotional intelligence for better relationships",
        categories: ["Communication"],
        comments: [
            { author: "Liam", text: "Emotional intelligence is often overlooked but essential for success." },
            { author: "Isabella", text: "I learned a lot about EQ from this article. Thank you!" }
        ],
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9WLnRGua2LUpuNa6QLhcyCFjLS3alW4lBQQ&usqp=CAU"
    },
    {
        id: 10,
        author: "David White",
        date: "15 Oct 2023",
        title: "Building Resilience in Challenging Times",
        subtitle: "Discover strategies to bounce back from setbacks",
        categories: ["Resilience", "Management"],
        comments: [
            { author: "Mia", text: "Resilience is key to overcoming challenges. Thanks for sharing!" },
            { author: "Noah", text: "These strategies are practical and easy to implement. Great article!" }
        ],
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYTRBSfeDjdNzz_OIJ4-fQDCCwow3kZr5Vg&usqp=CAU"
    },
    {
        id: 11,
        author: "Laura Martinez",
        date: "20 Nov 2023",
        title: "The Art of Decision Making",
        subtitle: "Learn how to make effective decisions in any situation",
        categories: ["Communication", "Problem-Solving"],
        comments: [
            { author: "Sophie", text: "Decision-making is a skill that can be honed. Thanks for the insights!" },
            { author: "Jacob", text: "I struggle with making decisions. This article gave me some valuable tips." }
        ],
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvGAJfx1bRwifYDcSCPAhboxk8JI99Ucxhg&usqp=CAU"
    },
    {
        id: 12,
        author: "Mark Wilson",
        date: "25 Dec 2023",
        title: "Effective Time Management for Entrepreneurs",
        subtitle: "Maximize your productivity and achieve your goals",
        categories: ["Team Building"],
        comments: [
            { author: "Lily", text: "Time management is crucial for success. Thanks for sharing these strategies!" },
            { author: "Nathan", text: "I've been looking for effective time management tips. This article provided exactly what I needed." }
        ],
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvGAJfx1bRwifYDcSCPAhboxk8JI99Ucxhg&usqp=CAU"
    },
    {
        id: 13,
        author: "Anna Roberts",
        date: "1 Jan 2024",
        title: "The Power of Goal Setting",
        subtitle: "Set SMART goals and turn your dreams into reality",
        categories: ["Team Building"],
        comments: [
            { author: "Oliver", text: "Setting goals is the first step towards success. Great article!" },
            { author: "Sophia", text: "I've always struggled"}
            ],
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9WLnRGua2LUpuNa6QLhcyCFjLS3alW4lBQQ&usqp=CAU"
    }
    ]

app.use(cors());
app.use(bodyParser.json());


// Получение всех постов блога
app.get('/posts', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 200;
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedPosts = blogPosts.slice(startIndex, endIndex);
    res.json({
        totalPosts: blogPosts.length,
        totalPages: Math.ceil(blogPosts.length / perPage),
        currentPage: page,
        posts: paginatedPosts
    });
});

// Получение одного поста по его id
app.get('/posts/:id', (req, res) => {
    const post = blogPosts.find(post => post.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: 'Пост не найден' });
    res.json(post);
});

// Добавление нового поста
app.post('/posts', (req, res) => {
    const {author,date,title,subtitle,categories,img} = req.body;
    if (!subtitle || !title) {
        return res.status(400).json({ message: 'Недостаточно данных для создания поста' });
    }
    const newPost = { id: blogPosts.length + 1, author,date,title,subtitle,categories,img};
    blogPosts.push(newPost)
    res.status(201).json(newPost);
});

// Обновление поста
app.post('/posts/:id/comments', (req, res) => {
    const postId = parseInt(req.params.id);
    const { author, text } = req.body;
    const postIndex = blogPosts.findIndex(post => post.id === postId);
    if (postIndex === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }
    const newComment = { author, text };
    blogPosts[postIndex].comments.push(newComment);
    res.status(201).json(newComment);
});
app.put('/posts/:id', (req, res) => {
    const { id } = req.params;
    const { author,date,title,img,subtitle,categories } = req.body;
    const postIndex = blogPosts.findIndex(post => post.id === parseInt(id));
    if (postIndex === -1) return res.status(404).json({ message: 'Пост не найден' });
    blogPosts[postIndex] = { ...blogPosts[postIndex], author,date,title,img,subtitle,categories};
    res.json(blogPosts[postIndex]);
});

// Удаление поста
app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    const postIndex = blogPosts.findIndex(post => post.id === parseInt(id));
    if (postIndex === -1) return res.status(404).json({ message: 'Пост не найден' });
    blogPosts.splice(postIndex, 1);
    res.json({ message: 'Пост успешно удален' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// Пример данных пользователей (можно заменить на базу данных)
let users = [
    { id: 1, username: 'user1', email: 'user1@example.com', password: 'password1',admin:false},
    { id: 2, username: '1', email: '1', password: '1',admin:true},
];

// Получение всех пользователей
app.get('/users', (req, res) => {
    res.json(users);
});

// Получение одного пользователя по его id
app.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'Пользователь не найден' });
    res.json(user);
});

// Добавление нового пользователя
app.post('/users', (req, res) => {
    const { username, email, password , admin } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Недостаточно данных для создания пользователя' });
    }
    const newUser = { id: users.length + 1, username, email, password ,admin};
    users.push(newUser);
    res.status(201).json(newUser);
});

// Обновление пользователя
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, password,admin } = req.body;
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    if (userIndex === -1) return res.status(404).json({ message: 'Пользователь не найден' });
    users[userIndex] = { ...users[userIndex], username, email, password,admin};
    res.json(users[userIndex]);
});

// Удаление пользователя
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    if (userIndex === -1) return res.status(404).json({ message: 'Пользователь не найден' });
    users.splice(userIndex, 1);
    res.json({ message: 'Пользователь успешно удален' });
});
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images/'); // Папка, куда будут сохраняться загруженные файлы
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Имя файла, сохраняемого на сервере
    }
});

const upload = multer({ storage: storage });
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Не было загружено ни одного файла' });
    }
    const imagePath = req.file.path; // Путь к загруженному файлу
    res.status(201).json({ imagePath: imagePath });
});
app.get('/images/:imageName', (req, res) => {
    const { imageName } = req.params;
    const imagePath = path.join(__dirname, 'images', imageName); // Путь к изображению
    res.sendFile(imagePath); // Отправляем изображение клиенту
});