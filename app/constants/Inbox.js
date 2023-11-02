export const CHAT_DATA = [
    {
        userId: 'inComing1',
        name: 'Jhon doe',
        image: './images/inbox/chatIcon.svg',
        activeUserId: 'inComing1', // Specify the active user
        messages: [
            {
                id: 1,
                sender: 'inComing1',
                content: 'Chat with jhon',
                timestamp: new Date('2023-11-02T09:00:00'),
            },
            {
                id: 2,
                sender: 'outGoing1',
                content: ' my msg ddddddddd;lkk hello world ',
                timestamp: new Date('2023-11-02T09:00:00'),
            },
            {
                id: 2,
                sender: 'inComing1',
                content: ' my msg CHANGE SENDER STRUCTURE',
                timestamp: new Date('2023-11-02T09:00:00'),
            },
            {
                id: 2,
                sender: 'outGoing1',
                content: ' my msg',
                timestamp: new Date('2023-11-02T09:00:00'),
            },
            {
                id: 2,
                sender: 'inComing1',
                content: ' my msg CHANGE SENDER STRUCTURE',
                timestamp: new Date('2023-11-02T09:00:00'),
            },
            {
                id: 2,
                sender: 'outGoing1',
                content: ' my msg',
                timestamp: new Date('2023-11-02T09:00:00'),
            },
            {
                id: 2,
                sender: 'outGoing1',
                content: ' my msg',
                timestamp: new Date('2023-11-02T09:00:00'),
            },
            {
                id: 2,
                sender: 'inComing1',
                content: ' my msg CHANGE SENDER STRUCTURE',
                timestamp: new Date('2023-11-02T09:00:00'),
            },
            // Add more messages for this conversation
        ],
    },
    {
        userId: 'inComing2',
        name: 'Jhoni Sence',
        image: './images/house.svg',
        activeUserId: 'inComing2', // Specify the active user
        messages: [
            {
                id: 1,
                sender: 'outGoing2',
                content: 'Chat with hasni',
                timestamp: new Date('2023-11-02T09:00:00'),
            },
            {
                id: 2,
                sender: 'inComing2',
                content: ' my msg',
                timestamp: new Date('2023-11-02T09:00:00'),
            },
            // Add more messages for this conversation
        ],
    },
    {
        userId: 'inComing3',
        name: 'Captal',
        image: './images/arrow.svg',
        activeUserId: 'inComing2', // Specify the active user
        messages: [
            {
                id: 1,
                sender: 'outGoing3',
                content: 'Chat with hasnidlkfj',
                timestamp: new Date('2023-11-02T09:00:00'),
            },
            {
                id: 2,
                sender: 'inComing3',
                content: ' my msg',
                timestamp: new Date('2023-11-02T09:00:00'),
            },
            // Add more messages for this conversation
        ],
    },
 
    // Add more conversations here
];


























// const INBOX_DATA = {
//     inbox: {
//         title: "Inbox",
//         messages: [
//             {
//                 sender: "John Doe",
//                 message: "Lorem ipsum dolor sit amet. Bibendum feugiat sapien....",
//                 time: "1:30PM",
//                 avatar: "https://via.placeholder.com/40x40"
//             },
//             {
//                 sender: "John Doe",
//                 message: "Lorem ipsum dolor sit amet. Bibendum feugiat sapien....",
//                 time: "5:30PM",
//                 avatar: "https://via.placeholder.com/40x40"
//             },
//             {
//                 sender: "John Doe",
//                 message: "Lorem ipsum dolor sit amet. Bibendum feugiat sapien....",
//                 time: "10:00AM",
//                 avatar: "https://via.placeholder.com/40x40"
//             },
//             {
//                 sender: "John Doe",
//                 message: "Lorem ipsum dolor sit amet. Bibendum feugiat sapien....",
//                 time: "3:00PM",
//                 avatar: "https://via.placeholder.com/40x40"
//             },
//             {
//                 sender: "John Doe",
//                 message: "Lorem ipsum dolor sit amet. Bibendum feugiat sapien....",
//                 time: "2:30PM",
//                 avatar: "https://via.placeholder.com/40x40"
//             }
//         ]
//     },
//     archive: "Archive",
//     notifications: [
//         {
//             type: "notification",
//             content: "1",
//             color: "bg-sky-700"
//         },
//         {
//             type: "notification",
//             content: "2",
//             color: "bg-sky-700"
//         }
//     ],
//     messages: [
//         {
//             sender: "John Doe",
//             avatar: "https://via.placeholder.com/46x60",
//             message: "Hello, finally I found time to text you. Please help in finding the right home for me."
//         },
//         {
//             sender: "John Doe",
//             avatar: "https://via.placeholder.com/46x60",
//             message: "Will you?"
//         },
//         {
//             sender: "You",
//             message: "Hi, sure!"
//         },
//         {
//             sender: "John Doe",
//             avatar: "https://via.placeholder.com/40x40",
//             message: "Call?"
//         },
//         {
//             sender: "You",
//             // avatar: "https://via.placeholder.com/50x50",
//             message: "You can directly liaise with me about the range. We want to negotiate a settlement that is fair to both sides."
//         },
//     ],
//     timestamps: [
//         "2 days ago"
//     ]
// }