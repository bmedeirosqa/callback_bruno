// Map between customer address and worker identity
// Used to determine to which worker route a new conversation with a particular customer
//
// {
//     customerAddress: workerIdentity
// }
//
// Example:
//     {
//         'whatsapp:+12345678': 'john@example.com'
//     }
const customersToWorkersMap = {
  "+37129204302": "test-one@tdl.com",
  "+14109833642": "test-two@tdl.com",
};

const customers = [
  {
    customer_id: 1,
    display_name: "Google Pixel XL WH",
    avatar:
      "https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png",
    channels: [
      { type: "email", value: "bobby@example.com" },
      { type: "sms", value: "+37129204302" },
      { type: "whatsapp", value: "whatsapp:+37129204302" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 100",
    },
    worker: "test-one@tdl.com",
  },
  {
    customer_id: 2,
    avatar:
      "https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png",
    display_name: "Google Pixel XL WH Two",
    channels: [
      { type: "email", value: "bobby@example.com" },
      { type: "sms", value: "+37129204302" },
      { type: "whatsapp", value: "whatsapp:+37129204302" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 100",
    },
    worker: "test-two@tdl.com",
  },
  {
    customer_id: 3,
    avatar:
      "https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png",
    // display_name: "Google Pixel XL WH",
    channels: [
      { type: "email", value: "bobby@example.com" },
      { type: "sms", value: "+37129204302" },
      { type: "whatsapp", value: "whatsapp:+37129204302" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 100",
    },
    worker: "test-three@tdl.com",
  },
  {
    customer_id: 4,
    display_name: "Motorolla Edge",
    channels: [
      { type: "email", value: "bobby@example.com" },
      { type: "sms", value: "+14109833642" },
      { type: "whatsapp", value: "whatsapp:+14109833642" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 100",
    },
    worker: "test-one@tdl.com",
  },
  {
    customer_id: 5,
    display_name: "Motorolla Edge",
    channels: [
      { type: "email", value: "bobby@example.com" },
      { type: "sms", value: "+14109833642" },
      { type: "whatsapp", value: "whatsapp:+14109833642" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 100",
    },
    worker: "test-two@tdl.com",
  },
  {
    customer_id: 6,
    display_name: "Motorolla Edge",
    channels: [
      { type: "email", value: "bobby@example.com" },
      { type: "sms", value: "+14109833642" },
      { type: "whatsapp", value: "whatsapp:+14109833642" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 100",
    },
    worker: "test-three@tdl.com",
  },
  {
    customer_id: 7,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "iPhone12 Mini",
    channels: [
      { type: "email", value: "bobby@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-one@tdl.com",
  },
  {
    customer_id: 8,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "iPhone12 Mini",
    channels: [
      { type: "email", value: "bobby@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-two@tdl.com",
  },
  {
    customer_id: 9,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "iPhone12 Mini",
    channels: [
      { type: "email", value: "bobby@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-three@tdl.com",
  },
  {
    customer_id: 10,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer0",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 11,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer1",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 12,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer2",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 13,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer3",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 14,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer4",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 15,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer5",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 16,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer6",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 17,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer7",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 18,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer8",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 19,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer9",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 20,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer10",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 21,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer11",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 22,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer12",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 23,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer13",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 24,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer14",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 25,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer15",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 26,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer16",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 27,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer17",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 27,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer17",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 28,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer18",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 29,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer19",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 30,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer20",
    channels: [],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 31,
    display_name: "chat",
    avatar: "https://e7.pngegg.com/pngimages/305/497/png-clipart-computer-icons-icon-design-user-avatar-online-chat-avatar-heroes-monochrome.png",
    channels: [
      { type: "chat", value: "test-chat-customer@tdl.com" }
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 100",
    },
    worker: "test-one@tdl.com",
  },
  {
    customer_id: 32,
    display_name: "Chat FL worker",
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    channels: [
      { type: "chat", value: "test-five@tdl.com" }
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 100",
    },
    worker: "test-two@tdl.com",
  },
  {
    customer_id: 33,
    display_name: "Galaxy A7 WH",
    avatar:
      "https://cdn1.iconfinder.com/data/icons/space-133/64/astronaut-avatar-space-galaxy-universe-512.png",
    channels: [
      { type: "email", value: "galaxy@example.com" },
      { type: "sms", value: "+37125488014" },
      { type: "whatsapp", value: "whatsapp:+37125488014" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 2",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-one@tdl.com",
  },
  {
    customer_id: 34,
    display_name: "Galaxy A7 WH",
    avatar:
      "https://cdn1.iconfinder.com/data/icons/space-133/64/astronaut-avatar-space-galaxy-universe-512.png",
    channels: [
      { type: "email", value: "galaxy@example.com" },
      { type: "sms", value: "+37125488014" },
      { type: "whatsapp", value: "whatsapp:+37125488014" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 2",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-two@tdl.com",
  },
  {
    customer_id: 35,
    display_name: "Galaxy A7 WH",
    avatar:
      "https://cdn1.iconfinder.com/data/icons/space-133/64/astronaut-avatar-space-galaxy-universe-512.png",
    channels: [
      { type: "email", value: "galaxy@example.com" },
      { type: "sms", value: "+37125488014" },
      { type: "whatsapp", value: "whatsapp:+37125488014" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 2",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-three@tdl.com",
  },
  {
    customer_id: 36,
    display_name: "WA not approved",
    avatar:
      "https://cdn1.iconfinder.com/data/icons/space-133/64/astronaut-avatar-space-galaxy-universe-512.png",
    channels: [
      { type: "email", value: "watest@example.com" },
      { type: "whatsapp", value: "whatsapp:+37126046074" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 2",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-one@tdl.com",
  },
  {
    customer_id: 37,
    display_name: "WA not approved",
    avatar:
      "https://cdn1.iconfinder.com/data/icons/space-133/64/astronaut-avatar-space-galaxy-universe-512.png",
    channels: [
      { type: "email", value: "watest@example.com" },
      { type: "whatsapp", value: "whatsapp:+37126046074" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 2",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-two@tdl.com",
  },
  {
    customer_id: 38,
    display_name: "Search Surname",
    avatar:
      "https://cdn1.vectorstock.com/i/1000x1000/49/35/search-icon-male-user-person-profile-avatar-vector-22914935.jpg",
    channels: [
      { type: "email", value: "watest@example.com" },
      { type: "whatsapp", value: "whatsapp:+37126046077" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 38",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-20@tdl.com",
  },
  {
    customer_id: 39,
    display_name: "Name Search",
    avatar:
      "https://cdn1.vectorstock.com/i/1000x1000/49/35/search-icon-male-user-person-profile-avatar-vector-22914935.jpg",
    channels: [
      { type: "email", value: "watest@example.com" },
      { type: "whatsapp", value: "whatsapp:+37126046077" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 39",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-20@tdl.com",
  },
  {
    customer_id: 40,
    display_name: "NameSearch Surname",
    avatar:
      "https://cdn1.vectorstock.com/i/1000x1000/49/35/search-icon-male-user-person-profile-avatar-vector-22914935.jpg",
    channels: [
      { type: "email", value: "watest@example.com" },
      { type: "whatsapp", value: "whatsapp:+37126046077" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 40",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-20@tdl.com",
  },
  {
    customer_id: 41,
    display_name: "21 Surname",
    avatar:
      "https://cdn1.vectorstock.com/i/1000x1000/49/35/search-icon-male-user-person-profile-avatar-vector-22914935.jpg",
    channels: [
      { type: "email", value: "watest@example.com" },
      { type: "whatsapp", value: "whatsapp:+37126046077" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 40",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-20@tdl.com",
  },
  {
    customer_id: 42,
    display_name: "Customer Sur21name",
    avatar:
      "https://cdn1.vectorstock.com/i/1000x1000/49/35/search-icon-male-user-person-profile-avatar-vector-22914935.jpg",
    channels: [
      { type: "email", value: "watest@example.com" },
      { type: "whatsapp", value: "whatsapp:+37126046077" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 40",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-20@tdl.com",
  },
  {
    customer_id: 43,
    display_name: "*Customer @#$%^&*|:CharChange;<>?,./*-+",
    avatar:
      "https://cdn1.vectorstock.com/i/1000x1000/49/35/search-icon-male-user-person-profile-avatar-vector-22914935.jpg",
    channels: [
      { type: "email", value: "watest@example.com" },
      { type: "whatsapp", value: "whatsapp:+37126046077" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 40",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-20@tdl.com",
  },
  {
    customer_id: 44,
    display_name: "CAPITAL LETTER CUSTOMER",
    avatar:
      "https://cdn1.vectorstock.com/i/1000x1000/49/35/search-icon-male-user-person-profile-avatar-vector-22914935.jpg",
    channels: [
      { type: "email", value: "watest@example.com" },
      { type: "whatsapp", value: "whatsapp:+37126046077" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 40",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-20@tdl.com",
  },
  {
    customer_id: 45,
    display_name: "not capital letter customer",
    avatar:
      "https://cdn1.vectorstock.com/i/1000x1000/49/35/search-icon-male-user-person-profile-avatar-vector-22914935.jpg",
    channels: [
      { type: "email", value: "watest@example.com" },
      { type: "whatsapp", value: "whatsapp:+37126046077" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 40",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-20@tdl.com",
  },
  {
    customer_id: 46,
    display_name: "21334",
    avatar:
      "https://cdn1.vectorstock.com/i/1000x1000/49/35/search-icon-male-user-person-profile-avatar-vector-22914935.jpg",
    channels: [
      { type: "email", value: "watest@example.com" },
      { type: "whatsapp", value: "whatsapp:+37126046077" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 40",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-20@tdl.com",
  },
  {
    customer_id: 47,
    display_name: "Space WithOne",
    avatar:
      "https://cdn1.vectorstock.com/i/1000x1000/49/35/search-icon-male-user-person-profile-avatar-vector-22914935.jpg",
    channels: [
      { type: "email", value: "watest@example.com" },
      { type: "whatsapp", value: "whatsapp:+37126046077" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 40",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-20@tdl.com",
  },
  {
    customer_id: 48,
    display_name: "Space  WithTwo",
    avatar:
      "https://cdn1.vectorstock.com/i/1000x1000/49/35/search-icon-male-user-person-profile-avatar-vector-22914935.jpg",
    channels: [
      { type: "email", value: "watest@example.com" },
      { type: "whatsapp", value: "whatsapp:+37126046077" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 40",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-20@tdl.com",
  },
  {
    customer_id: 49,
    display_name: "Space WithOne AnotherName",
    avatar:
      "https://cdn1.vectorstock.com/i/1000x1000/49/35/search-icon-male-user-person-profile-avatar-vector-22914935.jpg",
    channels: [
      { type: "email", value: "watest@example.com" },
      { type: "whatsapp", value: "whatsapp:+37126046077" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 40",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-20@tdl.com",
  },
  {
    customer_id: 50,
    display_name: "Space @WithOne",
    avatar:
      "https://cdn1.vectorstock.com/i/1000x1000/49/35/search-icon-male-user-person-profile-avatar-vector-22914935.jpg",
    channels: [
      { type: "email", value: "watest@example.com" },
      { type: "whatsapp", value: "whatsapp:+37126046077" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 40",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-20@tdl.com",
  },
  {
    customer_id: 51,
    display_name: "Space  @WithOne",
    avatar:
      "https://cdn1.vectorstock.com/i/1000x1000/49/35/search-icon-male-user-person-profile-avatar-vector-22914935.jpg",
    channels: [
      { type: "email", value: "watest@example.com" },
      { type: "whatsapp", value: "whatsapp:+37126046077" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 40",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-20@tdl.com",
  },
  {
    customer_id: 52,
    display_name: "Джон Доу",
    avatar:
      "https://cdn1.vectorstock.com/i/1000x1000/49/35/search-icon-male-user-person-profile-avatar-vector-22914935.jpg",
    channels: [
      { type: "email", value: "watest@example.com" },
      { type: "whatsapp", value: "whatsapp:+37126046077" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile 40",
      },
    ],
    details: {
      title: "Information",
      content: "Status: Active" + "\n\n" + "Score: 200",
    },
    worker: "test-one@tdl.com",
  },
  {
    customer_id: 53,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer21 Hey",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 54,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer22 Hey",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 55,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer23 Hey",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 56,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer24 Hey",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 57,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer25 Hey",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 58,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer26 Hey",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 59,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer27 Hey",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 60,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer28 Hey",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 61,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer29 Hey",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 62,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer30 Hey",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 63,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Customer31 Hey",
    channels: [
      { type: "email", value: "test@example.com" },
      { type: "sms", value: "+12513129342" },
      { type: "whatsapp", value: "whatsapp:+12513129342" },
    ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: {
      title: "Information",
      content: "Invalid avatar link",
    },
    worker: "test-four@tdl.com",
  },
  {
    customer_id: 64,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "No details, no channels",
    channels: [   ],
    links: [
      {
        type: "Facebook",
        value: "https://facebook.com",
        display_name: "Social Media Profile",
      },
    ],
    details: { },
    worker: "test-two@tdl.com",
  },
  {
    customer_id: 65,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Missing info",
    channels: [ 
      
    ],
    links: [
      {
    
      },
    ],
    details: { 

    },
    worker: "test-two@tdl.com",
  },
  {
    customer_id: 66/12,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "Null info - id with slash (66/12)",
    channels: [ 
        { type: null, value: null },
        { type: null, value: null },
    ],
    links: [
      {
        type: null,
        display_name: null,
      },
    ],
    details: { 
      content: null,
    },
    worker: "test-two@tdl.com",
  },
  {
    customer_id: 67,
    avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
    display_name: "The tester",
    channels: [ 
      { type: "chat", value: "bmedeiros@twilio.com" },
      { type: "sms", value: "+5555984025819" },
      { type: "whatsapp", value: "whatsapp:+5555984025819" },
    ],
    links: [
      {
      type: "Facebook",
      value: "https://facebook.com",
      display_name: "Social Media Profile",
    },
  ],
  details: {
    title: "Information",
    content: "Invalid avatar link",
  },
    worker: "test-two@tdl.com",
  },
  {
  customer_id: 68,
  avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
  display_name: "The Amazing Tester",
  channels: [ 
    { type: "email", value: "medeiros.braga.bruno@gmail.com" },
    { type: "sms", value: "+5555984025819" },
    { type: "whatsapp", value: "whatsapp:+5555984025819" },
  ],
  links: [
    {
    type: "Facebook",
    value: "https://facebook.com",
    display_name: "Social Media Profile",
  },
],
details: {
  title: "Information",
  content: "Invalid avatar link",
},
  worker: "test-two@tdl.com",
},
{
  customer_id: "69-123-789",
  avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
  display_name: "123789 - id with dashes (69-123-789)",
  channels: [ 
    { type: "email", value: "medeiros.braga.bruno@gmail.com" },
    { type: "sms", value: "+5555984025819" },
    { type: "whatsapp", value: "whatsapp:+5555984025819" },
  ],
  links: [
    {
    type: "Facebook",
    value: "https://facebook.com",
    display_name: "Social Media Profile",
  },
],
details: {
  title: "Information",
  content: "Invalid avatar link",
},
  worker: "test-two@tdl.com",
},
{
  customer_id: "70_123",
  avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
  display_name: "special-characters!@#123 - id with underscore (70_123)",
  channels: [ 
    { type: "chat", value: "medeiros.braga.bruno@gmail.com" },
    { type: "sms", value: "+5555984025819" },
    { type: "whatsapp", value: "whatsapp:+5555984025819" },
  ],
  links: [
    {
    type: "Facebook",
    value: "https://facebook.com",
    display_name: "Social Media Profile",
  },
],
details: {
  title: "Information",
  content: "Invalid avatar link",
},
  worker: "test-two@tdl.com",
},
{
  customer_id: 71,
  avatar: "https://cdn2.iconfinder.com/data/0-456322-512.png",
  display_name: "chat-test-two)",
  channels: [ 
    { type: "chat", value: "test-two@tdl.com" },
  ],
  links: [
    {
    type: "Facebook",
    value: "https://facebook.com",
    display_name: "Social Media Profile",
  },
],
details: {
  title: "Information",
  content: "Invalid avatar link",
},
  worker: "test-one@tdl.com",
}
];

const findWorkerForCustomer = async (customerNumber) =>
  customersToWorkersMap[customerNumber];

const findRandomWorker = async () => {
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const workers = Object.values(customersToWorkersMap).filter(onlyUnique);
  const randomIndex = Math.floor(Math.random() * workers.length);

  return workers[randomIndex];
};

const getCustomersList = async (worker, pageSize, anchor) => {
  const workerCustomers = customers.filter(
    (customer) => customer.worker === worker
  );
  const list = workerCustomers.map((customer) => ({
    display_name: customer.display_name,
    customer_id: customer.customer_id,
    avatar: customer.avatar,
  }));

  if (!pageSize) {
    return list;
  }

  if (anchor) {
    const lastIndex = list.findIndex(
      (c) => String(c.customer_id) === String(anchor)
    );
    const nextIndex = lastIndex + 1;
    return list.slice(nextIndex, nextIndex + pageSize);
  } else {
    return list.slice(0, pageSize);
  }
};

const getCustomerByNumber = async (customerNumber) => {
  return customers.find((customer) =>
    customer.channels.find(
      (channel) => String(channel.value) === String(customerNumber)
    )
  );
};

const getCustomerById = async (customerId) => {
  return customers.find(
    (customer) => String(customer.customer_id) === String(customerId)
  );
};

module.exports = {
  customersToWorkersMap,
  findWorkerForCustomer,
  findRandomWorker,
  getCustomerById,
  getCustomersList,
  getCustomerByNumber,
};
