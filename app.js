const media = [
    {
        title: 'Rhyme Flies',
        description: "From ALARM CROC in the morning to TWEET DREAMS at night, RHYME FLIES when you're having fun!",
        type: 'book',
        contributor: 'Antonia Pesenti',
        showDetail: false,
    },
    {
        title: 'If I Ran The Circus',
        description: "Step right up for Dr. Seuss's classic rhyming picture-book tale of young Morris McGurk's big circus dreams. This circus has more than a mere lion tamer and trapeze artist! At the Circus McGurkus, you'll be intrigued by the wink-hooded Hoodwink, terrified by the Spotted Atrocious, and amazed by the daring feats of the great Sneelock. And these are just a few of the astonishing things you'll find under this big top. Told with the humor and originality that are synonymous with Dr. Seuss, If I Ran the Circus is a crowd-pleasing showstopper!",
        type: 'DVD',
        contributor: 'Dr Seuss',
        showDetail: false,
    },
    {
        title: 'Counting Dinos',
        description: "Rodrigo the Ankylosaurus and his dinosaur friends explore their prehistoric world as they count from one to ten.",
        type: 'book',
        contributor: 'Eric Pinder',
        showDetail: false,
    },
    {
        title: 'Little Mouse\'s Big Breakfast',
        description: "Hungry Little Mouse is looking for some breakfast, and he knows just where he can find it. Scampering into the kitchen next door, he finds a lot of delicious things. But just as he finds something truly perfect, Little Mouse discovers... that he\'s not the only one looking for breakfast!",
        type: 'book',
        contributor: 'Christine Pym',
        showDetail: false,
    },
    {
        title: 'A Fall Ball for All',
        description: "The autumn wind invites all the creatures of the forest to its Windfall Ball. At the ball, they'll celebrate the end of autumn and the coming of winter with a grand feast",
        type: 'book',
        contributor: 'Jamie Swenson',
        showDetail: false,
    },
    {
        title: 'Monkey Walk',
        description: "At the zoo with her family, a girl mopes around until she is asked to help rescue the zoo's penguins from boredom",
        type: 'book',
        contributor: 'Colleen Madden',
        showDetail: false,
    },
    {
        title: 'Stinky Spike The Pirate Dog',
        description: "When Spike finds himself adrift at sea he is rescued by a crew of surly pirates, who spend their days hunting for treasure. Spike knows that he was meant to sniff out treasure, but his sense of smell leads him to some unusual treasure.",
        type: 'book',
        contributor: 'Peter Meisel',
        showDetail: false,
    },
    {
        title: 'Paw Patrol',
        description: "A CG, action-adventure preschool series starring a pack of six heroic puppies: Chase, Marshall, Rocky, Zuma, Rubble, and Skye, who are led by a tech-savvy ten-year-old boy named Ryder. With a unique blend of problem-solving skills, cool vehicles and lots of cute doggy humor, the Paw Patrol works together on high-stakes rescue missions to protect the Adventure Bay community.",
        type: 'DVD',
        contributor: '',
        showDetail: false,
    },
    {
        title: 'Minnesota Cuke and the Search for Samson\'s Hairbrush',
        description: "Larry the Cucumber is Minnesota Cuke, a children's museum curator and part-time adventurist hired to secure Samson's lost hairbrush before its purported powers are used to carry out a hairbrained scheme to control both sides of Niagara Falls",
        type: 'DVD',
        contributor: '',
        showDetail: false,
    },
    {
        title: 'Planet Earth',
        description: "The best-selling factual series of all time is now even better! Now, with the addition of all-new commentary and new bonus programs, you can relive this incredible experience all over again!",
        type: 'DVD',
        contributor: '',
        showDetail: false,
    },
    {
        title: 'Planet Earth II',
        description: "In this sequel to the Emmy-winning \"Planet Earth\" series, viewers are treated to rich and intimate views of the natural diversity of our planet.",
        type: 'streaming video',
        contributor: 'David Attenborough',
        showDetail: false,
    },
    {
        title: 'In Bruges',
        description: "After a job goes wrong in London, two hit men are ordered to lay low at a bed-and-breakfast in Bruges, Belgium, until their boss contacts them.",
        type: 'streaming video',
        contributor: 'Colin Farrell, Brendan Gleeson, Ralph Fiennes',
        showDetail: false,
    },
    {
        title: 'Listening Time',
        description: "When it’s time for young children to listen closely, this book sets the tone. They discover that it’s important to open their eyes and ears but to close their mouths so good listening can begin. Tips for parents and caregivers included.",
        type: 'e-book',
        contributor: 'Elizabeth Verdick',
        showDetail: false,
    },
    {
        title: 'Kingdom of Ash (Throne of Glass)',
        description: "Years in the making, Sarah J. Maas's #1 New York Times bestselling Throne of Glass series draws to an epic, unforgettable conclusion. Aelin Galathynius's journey from slave to king's assassin to the queen of a once-great kingdom reaches its heart-rending finale as war erupts across her world",
        type: 'e-book',
        contributor: 'Sarah J. Maas',
        showDetail: false,
    },
];

const app = new Vue({
    el: "#media-list",
    data: {
        title: "Treehouse Public Library",
        mediaList: media,
        type: ''
    },
    methods: {
        toggleDetails: function(media){
            media.showDetail = !media.showDetail
        },
        filterList: function(){
            this.type = event.target.value;
        }
    },
    computed: {
        uniqueItemsList: function(){
            const types = [];
            this.mediaList.forEach((item)=>{
                if(!types.includes(item.type)){
                    types.push(item.type);
                }
            });
            // return an array of uniqle media typ
            return types;
        }
    }
});