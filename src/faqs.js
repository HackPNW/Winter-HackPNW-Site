const faqs = [
  [
    "What is a Hackathon?",
    "A hackathon is a sprint-like design event wherein computer programmers and others involved in software development, including graphic designers, interface designers, product managers, project managers, domain experts, and others collaborate intensively on software projects. The goal of a hackathon is to create functioning software or hardware by the end of the event. Hackathons tend to have a specific focus, which can include the programming language used, the operating system, an application, an API, or the subject and the demographic group of the programmers. In other cases, there is no restriction on the type of software being created or the design of the new system. ",
  ],
  [
    "How much does it cost?",
    "Nothing! HackPNW is 100% free: there will be free drinks, snacks, and lunch provided for both days. Ensure that you eat a good breakfast before coming.",
  ],
  [
    "Who can register?",
    "Any highschool student can register as a solo or as a team!",
  ],
  [
    "How big are the teams?",
    "Teams should be 2-4 people, you can register alone or with a team.",
  ],
  [
    "How many events are there?",
    "There is a main team challenge, and to break up the hacking, each day there will be one fun event!",
  ],
  [
    "Will there be prizes?",
    "Of course! There will be three award catagories: Best Overall, Best Design, and Best Functionality. For best overall there's a $100 prize pool, and $50 for both design and functionality. Of course there will be swag for all participants from companies like Microsoft, Github, and Twillio.",
  ],
  [
    "Will there be mentors?",
    "Yes! We will have mentors here to help guide you through your projects!",
  ],
  [
    "What should I bring?",
    "We recomend you bring a laptop, charger(s) for all your devices, and most of all bring a positive mindset and good energy and you'll have a great time! Make sure you sign your liability release before attending.",
  ],
  [
    "Is there parking available?",
    "There is free available parking at and around the Reactor building.",
  ],
  [
    "How big is HackPNW?",
    "Our venue has capacity for about 150 hackers, spots are limited and first come first serve.",
  ],
  [
    "When is HackPNW?",
    "HackPNW is a 24 hour hackathon on Febuary 4th - Febuary 5th from 9am-7pm and 9am-6pm respectively, at the Microsoft Redmond Reactor!",
  ],
  [
    "Will there be Tech Talks and Workshops?",
    "Yes, representatives from companies like Twillio and Microsoft will be there to host workshops on how to use innovative new APIs and prepare you for a future in the tech world.",
  ],
];

const getFaqColumns = (cols = 1) => {
  let ret = [];
  const amountPerCol = Math.ceil(faqs.length / cols);

  for (let i = 0; i < cols; i++) {
    ret.push(faqs.slice(i * amountPerCol, (i + 1) * amountPerCol));
  }

  return ret;
};

export { faqs, getFaqColumns };
