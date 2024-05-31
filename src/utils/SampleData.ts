const UserHeaders = [
    {
        dataField: "username",
        headerText: "Username",
    },
    {
        dataField: "firstName",
        headerText: "First Name",
        canHide: true
    },
    {
        dataField: "lastName",
        headerText: "Last Name",
        canHide: true
    },
    {
        dataField: "middleInitial",
        headerText: "Middle Initial",
        canHide: true
    },
    {
        dataField: "role",
        headerText: "Role"
    }
];

const UserData = [
    {
        username: "peterparker",
        firstName: "Peter",
        lastName: "Parker",
        middleInitial: "P.",
        role: "superhero"
    },
    {
        username: "jjonah",
        firstName: "J Jonah",
        lastName: "Jameson",
        middleInitial: "J.",
        role: "editor"
    },
    {
        username: "tstark",
        firstName: "Tony",
        lastName: "Stark",
        middleInitial: "I.",
        role: "superhero"
    },
    {
        username: "h_osborne",
        firstName: "Harry",
        lastName: "Osborne",
        middleInitial: "G.",
        role: "villain"
    }
]

const SampleCrudData = {
    UserHeaders: UserHeaders,
    UserData: UserData
}

export default SampleCrudData;