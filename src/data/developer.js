// Developer / software-engineering content, sourced from Pat's resume.
export const summary = [
  "A former military avionics troubleshooter and instructor, Pat brings a systems-focused, problem-solving discipline — and a teacher's gift for making complex ideas clear — to every high-stakes technical problem he tackles. Software came naturally, and mostly self-taught: he picked up Microsoft VBA and SQL, then Swift and SwiftUI, and rounded out that foundation with formal training in full-stack development on the MERN stack. Over the past ten-plus years he has built more than a dozen applications and tools that streamlined and transformed operations for multiple organizations.",
  "Pat's only formal employment as a software developer has been with his own company, Lawler Innovations Inc — but there's far more to it than that. Through Lawler Innovations he has taken on contracts with all kinds of companies, on all kinds of projects, each with its own challenges.",
  "Now, with the recent arrival of agentic coding, Pat has paired that native iOS experience and formal full-stack training with AI tooling like Cursor, Claude Code, and Xcode's agentic coding. The result multiplies both the quality and the quantity of what he produces, reaching well beyond iOS to quickly build, test, and ship virtually any kind of project across nearly any language or stack.",
]

export const experience = [
  {
    role: 'President/Principal Software Engineer',
    org: 'Lawler Innovations Inc',
    period: '2014 – Present',
    sections: [
      {
        heading: 'Cirrus Aircraft',
        body: [
          "As an independent contractor, Pat has led the Cirrus Approach mobile team in iOS development for nearly the past four years, working Agile with Azure DevOps, Jira, and CI/CD pipelines and shipping via TestFlight and the App Store. The app he builds is how users interact with the Cirrus Approach Learning Management System (LMS): students complete courses through videos, interactive web apps, and quizzes, and have full access to their training records, while instructors manage their students' training and document one-on-one instruction right on the device. He builds with SwiftUI, Swift, CocoaPods, and web technologies (HTML/CSS/JS), manages 25+ RESTful API integrations across Cirrus, Apple iTunes, and Vimeo services, and serves as a Cirrus Pilot/Instructor subject-matter expert throughout the design process.",
          "Pat has designed and built core features across the app, including the Flight Ready offline mode that gives pilots full access to their training without a connection, the content player that drives the course experience, and the Augmented Preflight walkaround. That 2024 augmented-reality feature — which he and a small, close-knit team worked side by side to build — lets students do an actual walk-around of a virtual 3D aircraft alongside a fully interactive checklist.",
          "Beyond their day-to-day Cirrus Approach work, that same team quietly took on a skunkworks-style project: the initial Let's Go Fly app — a completely separate product built for the Apple Vision Pro — where users get an immersive experience interacting with Cirrus aircraft models and watching fully immersive videos. As one of the key developers, Pat drew on his know-how, tenacity, and resourcefulness to embrace the new visionOS platform and develop a whole new paradigm of application.",
        ],
        projects: [
          {
            img: 'cirrus-approach',
            title: 'Cirrus Approach',
            type: 'iOS · Aviation EdTech',
            body: "Pat leads iOS development of Cirrus Approach — the app pilots and instructors use to access the Cirrus Approach Learning Management System through video courses, interactive lessons, and quizzes. Built in SwiftUI across 25+ API integrations, with Pat serving as the Cirrus pilot and instructor subject-matter expert throughout.",
            tech: ['SwiftUI', 'Swift', 'ARKit', 'REST APIs', 'Azure DevOps'],
            link: 'https://apps.apple.com/us/app/cirrus-approach/id1448733796',
          },
          {
            img: 'lets-go-fly',
            title: "Let's Go Fly!",
            type: 'visionOS · Immersive',
            body: 'A Cirrus Aircraft app pairing an immersive SR22T flight with a virtual-reality walk-around of a full-sized 3D aircraft. Pat provided all of the initial discovery and SwiftUI coding and built the initial MVP that debuted at AirVenture Oshkosh in 2024.',
            tech: ['RealityKit', 'SwiftUI', '3D'],
            link: 'https://apps.apple.com/us/app/lets-go-fly/id6757612693',
          },
        ],
      },
      // Hidden until written permission is obtained from RealSimGear.
      // {
      //   heading: 'RealSimGear',
      //   body: [
      //     "Pat provides subject-matter-expert consulting and software development services for RealSimGear, contributing to the development of their customer-facing interface software.",
      //   ],
      // },
      {
        heading: 'Guard Guys LLC',
        body: [
          "After building Guard Guys' original company website, Pat now develops and maintains their full-stack 911DrugTest Network website and a proprietary full-stack scheduling website and iOS app that the business runs on.",
        ],
        projects: [
          {
            img: '911',
            logo: true,
            title: '911 Drug Test Network',
            type: 'Full-Stack · Web',
            body: 'Pat designed, built, and continues to maintain the full-stack 911 Drug Test Network platform — the website plus a proprietary scheduling site and iOS app this nationwide drug & alcohol testing business runs on. Delivered and maintained through a CI/CD process, working directly with the stakeholders.',
            tech: ['Cloudflare Workers', 'Hono', 'TypeScript', 'D1', 'R2', 'Durable Objects', 'PWA'],
            link: 'https://911drugtest.com',
          },
        ],
      },
      {
        heading: 'Other Projects',
        body: [
          "Beyond his contracts, Pat designed, built, and maintains the iOS apps FunctionCalc, Learn Thai – Alphabet, and CalorieCalc – Averaging, along with the full-stack Lawler Innovations Inc website, and created Microsoft Access and Excel VBA tools that streamlined operations for Endeavor Air, Lake Superior College, and other organizations.",
        ],
        projects: [
          {
            img: 'learn-thai',
            title: 'Learn Thai – Alphabet',
            type: 'iOS · Language',
            body: 'Pat designed, created, and maintains this iOS app that teaches the Thai alphabet through repetition and a native Thai speaker.',
            tech: ['Swift', 'Core Animation'],
            link: 'https://apps.apple.com/us/app/learn-thai-alphabet/id1505140057',
          },
          {
            img: 'functioncalc',
            title: 'FunctionCalc',
            type: 'iOS · Utilities',
            body: 'Pat designed, created, and maintains FunctionCalc — an all-in-one calculator and toolkit (VA disability calculator, date tracker, tip splitter, unit converter, and more) built for veterans, now in its fourth major revision.',
            tech: ['SwiftUI'],
            link: 'https://apps.apple.com/us/app/functioncalc/id1455028714',
          },
          {
            img: 'caloriecalc',
            title: 'CalorieCalc – Averaging',
            type: 'iOS · Health & Fitness',
            body: 'Pat designed, created, and maintains CalorieCalc – Averaging, a stripped-down calorie tracker with no social feeds or upsells — just fast logging and the weekly averaging the big trackers leave out.',
            tech: ['SwiftUI'],
            link: 'https://apps.apple.com/us/app/caloriecalc-averaging/id6762500390',
          },
        ],
      },
    ],
  },
]

export const skills = [
  {
    group: 'Languages',
    items: ['Swift', 'SwiftUI', 'JavaScript', 'Node.js', 'HTML5 / CSS3', 'Vue.js', 'Java', 'Python'],
  },
  {
    group: 'Databases',
    items: ['SQL', 'MySQL', 'NoSQL', 'MongoDB'],
  },
  {
    group: 'AI Development',
    items: ['Cursor', 'Claude Code', 'Xcode Agentic Coding', 'AI-First Workflow'],
  },
  {
    group: 'Tools',
    items: ['Xcode', 'VS Code', 'Git / GitHub', 'Jest', 'GraphQL', 'Azure DevOps'],
  },
  {
    group: 'Frameworks & Libraries',
    items: ['React', 'jQuery', 'Bootstrap', 'Handlebars.js', 'CocoaPods'],
  },
]

