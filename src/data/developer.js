// Developer / software-engineering content, sourced from Pat's resume.
export const summary = [
  'A natural and passionate programmer with over ten years of experience building software that transforms operations. Pat has created more than a dozen applications and tools that streamlined work for multiple organizations.',
  "For nearly four years he has led the mobile team for Cirrus Approach in iOS development, working Agile with CI/CD pipelines. His foundation pairs that native iOS experience in Swift and SwiftUI — including Augmented Reality for Apple Vision Pro — with his formal full-stack training. Coupling that experience with the power of agentic coding and AI tooling — Cursor, Claude Code, and Xcode's agentic coding — he has migrated to an AI-first methodology that dramatically increases his speed and efficiency. The result reaches well beyond iOS: he can now quickly build, test, and ship virtually any type of project across nearly any language or stack.",
  "A former military avionics troubleshooter and instructor, he brings a systems-focused discipline to high-stakes technical problems and a teacher's ability to convey complex ideas clearly.",
]

export const experience = [
  {
    role: 'Lead iOS Developer',
    org: 'Cirrus Aircraft',
    period: 'Feb 2023 – Present',
    points: [
      'Independent contractor leading the Cirrus Approach LMS iOS app update project.',
      'Builds with SwiftUI, Swift, CocoaPods, and web technologies (HTML/CSS/JS).',
      'Manages 25+ RESTful API integrations across Cirrus, Apple iTunes, and Vimeo services.',
      'Integrated Augmented Reality for Apple Vision Pro and iPad to create immersive experiences.',
      'Serves as a Cirrus Instructor subject-matter expert throughout the design process.',
      'Works in Agile with Azure DevOps; ships via TestFlight and the App Store.',
    ],
  },
  {
    role: 'Independent Software Developer',
    org: 'Self-Employed / Various',
    period: 'Oct 2010 – Present',
    points: [
      'Developed and maintains the public iOS apps FunctionCalc and Learn Thai – Alphabet.',
      'Designed and built the full-stack GuardGuys LLC website and its proprietary scheduling iOS app.',
      'Created Microsoft Access and Excel VBA tools that streamlined operations for Endeavor Air, Lake Superior College, and other organizations.',
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

export const projects = [
  {
    title: 'Cirrus Approach LMS',
    description:
      'iOS learning-management app for Cirrus Aircraft, with 25+ REST integrations and Apple Vision Pro augmented reality.',
    tags: ['SwiftUI', 'Vision Pro', 'REST'],
  },
  {
    title: 'GuardGuys',
    description:
      'Full-stack security-workforce platform — scheduling, calendar, and web presence — plus a proprietary iOS scheduling app.',
    tags: ['React', 'Node', 'iOS'],
    link: 'https://github.com/pjlawler/guardguys-web',
  },
  {
    title: 'Budget Tracker',
    description:
      'Account-based budgeting app with an income/expense tree, built on Cloudflare Workers + D1.',
    tags: ['Cloudflare', 'Workers', 'D1'],
    link: 'https://github.com/pjlawler/budget-tracker',
  },
  {
    title: 'Calorie Calc',
    description: 'iOS calorie tracker built around the idea of weekly calorie banking.',
    tags: ['iOS', 'Swift'],
    link: 'https://github.com/pjlawler/calorie-calc',
  },
  {
    title: 'FunctionCalc',
    description: 'Published iOS app available on the App Store.',
    tags: ['iOS', 'Swift'],
  },
  {
    title: 'Learn Thai – Alphabet',
    description: 'iOS app for learning to read the Thai alphabet, published to the App Store.',
    tags: ['iOS', 'Swift'],
  },
]
