const userData = [
    {
        id: "1",
        "name": "Cloe Adams",
        "lastMessage": "Hey did you just....",
        "lastMessageTime": "2024-05-28 15:30 am",
        "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
        id: "2",
        "name": "Bob",
        "lastMessage": "What's up?",
        "lastMessageTime": "Yesterday 10:45 pm",
        "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
        id: "3",
        "name": "Charlie",
        "lastMessage": "How are you doing?",
        "lastMessageTime": "2024-05-26 18:20 am",
        "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
        id: "4",
        "name": "Cloe Adams",
        "lastMessage": "Hey did you just....",
        "lastMessageTime": "2024-05-28 15:30 am",
        "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
        id: "5",
        "name": "Bob",
        "lastMessage": "What's up?",
        "lastMessageTime": "Yesterday 10:45 pm",
        "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
        id: "6",
        "name": "Charlie",
        "lastMessage": "How are you doing?",
        "lastMessageTime": "2024-05-26 18:20 am",
        "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    },{
        id: "7",
        "name": "Cloe Adams",
        "lastMessage": "Hey did you just....",
        "lastMessageTime": "2024-05-28 15:30 am",
        "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
        id: "8",
        "name": "Bob",
        "lastMessage": "What's up?",
        "lastMessageTime": "Yesterday 10:45 pm",
        "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
        id: "9",
        "name": "Charlie",
        "lastMessage": "How are you doing?",
        "lastMessageTime": "2024-05-26 18:20 am",
        "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
        id: "10",
        "name": "Cloe Adams",
        "lastMessage": "Hey did you just....",
        "lastMessageTime": "2024-05-28 15:30 am",
        "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
        id: "11",
        "name": "Bob",
        "lastMessage": "What's up?",
        "lastMessageTime": "Yesterday 10:45 pm",
        "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
        id: "12",
        "name": "Charlie",
        "lastMessage": "How are you doing?",
        "lastMessageTime": "2024-05-26 18:20 am",
        "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
        id: "13",
        "name": "Charlie CharlieCharlie CharlieCharlie",
        "lastMessage": "How are you doing?",
        "lastMessageTime": "2024-05-26 18:20 am",
        "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    }
];

export {userData};