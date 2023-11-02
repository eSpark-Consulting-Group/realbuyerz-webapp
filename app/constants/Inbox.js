export const CHAT_DATA = [
    {
        userId: 'user1',
        name:"Jhon doe",
        image: './images/inbox/chatIcon.svg',
        messages: [
            {
                id: 1,
                sender: 'user1',
                content: 'Chat with jhon',
                timestamp: new Date('2023-11-02T09:00:00'),
            },
            {
                id: 2,
                sender: 'user2',
                content: ' my msg',
                timestamp: new Date('2023-11-02T09:00:00'),
            },
            // Add more messages for this conversation
        ],
    },
    {
        userId: 'user1',
        name:"Jhon doe",
        image: './images/inbox/chatIcon.svg',
        messages: [
            {
                id: 1,
                sender: 'user1',
                content: 'Chat with hasni',
                timestamp: new Date('2023-11-02T09:00:00'),
            },
            {
                id: 2,
                sender: 'user2',
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