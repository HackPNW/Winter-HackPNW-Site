const faqs = [
  [
    "What is a Hackathon?",
    "A hackathon is a sprint-like design event wherein computer programmers and others involved in software development, including graphic designers, interface designers, product managers, project managers, domain experts, and others collaborate intensively on software projects. The goal of a hackathon is to create functioning software or hardware by the end of the event. Hackathons tend to have a specific focus, which can include the programming language used, the operating system, an application, an API, or the subject and the demographic group of the programmers. In other cases, there is no restriction on the type of software being created or the design of the new system. ",
  ],
  ["How much does it cost?", "Nothing! HackPNW is 100% free including meals!"],
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
    "There is a main team challenge along with a side competition for comptetive programming. To break up the hacking, each day there will be one fun event!",
  ],
  [
    "Will there be prizes?",
    "Of course! There will be over $1000 worth of prizes to win and trust us when we say they will be worth your time.",
  ],
  [
    "Is it over night?",
    "Unfortunately due to both covid and space restrictions there will be a break during the night.",
  ],
  [
    "What should I bring?",
    "We recomend you bring a laptop, charger(s) for all your devices, and most of all bring a positive mindset and good energy and you'll have a great time!",
  ],
  [
    "How long is HackPNW?",
    "HackPNW is a 24 hour hackathon starting in the morning of saturday stopping during the night and then going all the way to sunday evening!",
  ],
  [
    "How big is HackPNW?",
    "Our venue has capacity for about 100 hackers, spots are limited and first come first serve.",
  ],
  [
    "When is HackPNW?",
    "HackPNW is going to be on Febuary 4th - Febuary 5th, at the Microsoft Redmond Reactor!",
  ],
  [
    "Will there be tech talks and workshops?",
    "Yes, representatives from many companies will be there to give talks and workshops about their latest tech!",
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
