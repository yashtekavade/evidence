export type Project = {
  slug: string
  title: string
  description: string
  date: string
  status: 'active' | 'wip' | 'archived'
  tags: string[]
  github?: string
  live?: string
  featured?: boolean
  body: string[]
}

export type Post = {
  slug: string
  title: string
  date: string
  subject: string
  link?: string
  tags: string[]
}

export type TimelineItem = {
  date: string
  period: string
  title: string
  eyebrow: string
  summary: string
  learned: string[]
  built: string[]
  tools: string[]
}

export const profile = {
  name: 'Yashvardhan Tekavade',
  role: 'Data & AI Engineer',
  location: 'India',
  email: 'hello@yashtekavade.dev',
  linkedin: 'https://www.linkedin.com/in/yashtekavade/',
  github: 'https://github.com/yashtekavade',
  substack: 'https://yashtekavade.substack.com/',
  resume: '/resume.pdf',
}

export const stack = ['Python', 'PySpark', 'Databricks', 'Airflow', 'SQL', 'AWS', 'Power BI', 'Excel / VBA', 'Docker', 'React', 'TypeScript', 'AI / LLMs']

export const projects: Project[] = [
  {
    slug: 'transformer-trace', title: 'Transformer Trace', date: '2026-09', status: 'active', featured: true,
    description: 'An interactive, click-into-the-math walkthrough of a GPT-2 forward pass — from embeddings and attention through MLPs, logits, and token generation.',
    tags: ['ai', 'llm', 'visualization', 'javascript'], github: 'https://github.com/yashtekavade/transformer-viz', live: 'https://transformer-viz-gtw1.vercel.app/',
    body: [
      'Transformer Trace is an interactive learning tool built around the idea that seeing attention happen is not enough — you should be able to inspect the arithmetic that produces it.',
      'The experience lets you pick a prompt, block, and attention head, then trace dot product → scaling → causal mask → softmax, inspect Attention × Value = Out, expand MLP and logits calculations, and step through autoregressive generation.',
      'It ships with synthetic-but-structurally-real trace data for instant browser use, with a companion Python workflow that can inject traces from a real GPT-2 forward pass. The project also includes a 20-step guided walkthrough, pipeline map, shape tracking, probability breakdowns, and induction-head exploration.'
    ]
  },
  {
    slug: 'llm-odyssey', title: 'LLM Odyssey', date: '2026-09', status: 'active', featured: true,
    description: 'A multi-page interactive learning system that traces how language-model architectures evolved from sequence models to modern frontier systems.',
    tags: ['ai', 'llm', 'react', 'typescript'], github: 'https://github.com/yashtekavade/llm-odyssey', live: 'https://llm-odyssey.vercel.app/',
    body: [
      'LLM Odyssey is a structured learning environment designed around a problem → idea → architecture → trade-off → next problem progression rather than a single long tutorial.',
      'The site currently organizes 17 chapters and 91 concepts across a chronological journey, chapter-level explanations, a searchable concept index, architecture comparisons, interactive labs, training-versus-inference views, a frontier-systems section, and a final mental model.',
      'The project is intentionally diagram-first and progressively disclosed: higher-level storytelling lives in chapters, while lower-level explanations are separated into direct concept pages so the reader can go as deep as needed.'
    ]
  },
  {
    slug: 'caniafford', title: 'CanIAfford', date: '2026-07-31', status: 'active', featured: true,
    description: 'A real cost-of-ownership calculator for bikes and cars in India — EMI, fuel, insurance, and maintenance against income.',
    tags: ['web', 'nextjs', 'supabase', 'typescript'], github: 'https://github.com/yashtekavade/caniafford', live: 'https://caniafford-pls.vercel.app/',
    body: ['Most EMI calculators only tell you the monthly payment. CanIAfford goes further: it totals EMI, fuel, insurance, maintenance, and gear against actual income to answer the real question — can you afford this vehicle, not just the loan?']
  },
  {
    slug: 'budgetdeck', title: 'BudgetDeck Automation', date: '2026-06-11', status: 'archived', featured: true,
    description: 'A one-click Excel VBA pipeline that validates, collates, creates a PowerPoint deck, and emails it.',
    tags: ['vba', 'excel', 'automation'], github: 'https://github.com/yashtekavade/vba',
    body: ['An end-to-end Excel-VBA automation pipeline with live dropdowns, validation gates, append-only collation, PowerPoint export, and Outlook email orchestration.', 'It demonstrates event-driven UX, ETL-style validation, protected-sheet handling, and cross-application automation without relying on confidential data.']
  },
  {
    slug: 'orbit', title: 'Orbit', date: '2026-07-27', status: 'wip', featured: true,
    description: 'A prototype for live, proximity-based social discovery — see who is open to meet nearby right now.',
    tags: ['web', 'firebase', 'realtime'], github: 'https://github.com/yashtekavade/orbitt',
    body: ['Orbit explores a simple idea: instead of matching with someone across a city, show who is actually nearby and open to meeting right now.', 'The prototype includes anonymous auth, privacy-aware location sync, real-time chat, ghost mode, and a coarse-area alternative to precise location sharing. It is intentionally not deployed yet.']
  },
  {
    slug: 'aws-order-history', title: 'AWS Order History Pipeline', date: '2025-08-28', status: 'archived',
    description: 'A real-time order-history data pipeline designed as a weekend-buildable AWS reference project.',
    tags: ['aws', 'python', 'etl'], github: 'https://github.com/yashtekavade/aws-order-history-pipeline',
    body: ['An end-to-end AWS data pipeline processing order history data, written as a teaching artifact with a companion beginner walkthrough.']
  },
  {
    slug: 'media-stream-analytics', title: 'Media Stream Analytics', date: '2025-08-01', status: 'archived',
    description: 'A real-time media analytics platform combining Kinesis, Glue, EMR Spark, Airflow, and Snowflake.',
    tags: ['aws', 'airflow', 'python'], github: 'https://github.com/yashtekavade/Media-Stream-Analytics',
    body: ['Viewership events stream through Kinesis, trigger Lambda, transform through Glue, process at scale with EMR Spark, and land in Snowflake under Airflow orchestration.']
  },
  {
    slug: 'futurecart', title: 'FutureCart: CRM Analytics Platform', date: '2026-05-30', status: 'active',
    description: 'An end-to-end cloud data engineering pipeline for millions of customer interactions and near-real-time insight.',
    tags: ['aws', 'python', 'etl'], github: 'https://github.com/yashtekavade/FutureCart-CRM-Analytics',
    body: ['A scalable cloud architecture for processing CRM interactions with a stronger emphasis on real-time delivery than simple batch movement.']
  },
  {
    slug: 'etl-kinesis-lambda-s3', title: 'Kinesis → Lambda → S3', date: '2025-07-25', status: 'archived',
    description: 'A focused streaming ETL reference pipeline using Amazon Kinesis Data Streams, Lambda, and S3.',
    tags: ['aws', 'python', 'etl'], github: 'https://github.com/yashtekavade/etl_kinesis_lambda_s3',
    body: ['Sensor-style JSON records are generated into Kinesis, consumed in Lambda batches, decoded and parsed, then written to S3 as processed JSON.']
  },
  {
    slug: 'youtube-etl', title: 'YouTube Comments ETL Pipeline', date: '2025-07-25', status: 'archived',
    description: 'An end-to-end Airflow workflow turning YouTube comments into structured data for downstream analysis.',
    tags: ['airflow', 'python', 'etl'], github: 'https://github.com/yashtekavade/youtube_etl_airflow',
    body: ['A first full end-to-end data pipeline: extract from the YouTube API, transform and clean, then load with Airflow orchestrating the dependency graph.']
  },
  {
    slug: 'pizza-chain', title: 'Pizza Chain Analytics', date: '2025-08-08', status: 'archived',
    description: 'A complete retail analytics workflow from RDS to streaming insight with AWS services and a warehouse.',
    tags: ['aws', 'spark', 'etl'],
    body: ['A broader pipeline project connecting ingestion, transformation, warehousing, and alerting around restaurant operations and sales questions.']
  },
  {
    slug: 'powerbi-netflix', title: 'Power BI: Netflix Dashboard', date: '2025-08-25', status: 'archived',
    description: 'Interactive global and India-focused analysis of Netflix content, built with Power BI and DAX.',
    tags: ['power-bi', 'data-viz'], github: 'https://github.com/yashtekavade/power-bi-netflix',
    body: ['A multi-page Power BI report covering content mix, countries, genres, release-year trends, and India-specific analysis with KPI cards and DAX measures.']
  },
  {
    slug: 'powerbi-zomato', title: 'Power BI: Zomato Dashboard', date: '2025-08-25', status: 'archived',
    description: 'Interactive analysis of restaurant ratings, cuisines, and city distribution with Power BI.',
    tags: ['power-bi', 'data-viz'], github: 'https://github.com/yashtekavade/power-bi-zomato',
    body: ['A multi-page report with global and India views, Power Query transformation, DAX modeling, bookmarks, and slicer-based navigation.']
  },
  {
    slug: 'fuse-filesystem', title: 'FUSE Filesystem', date: '2024-11-22', status: 'archived',
    description: 'A custom filesystem implementation in Python using FUSE to handle userspace filesystem operations.',
    tags: ['python', 'systems'], github: 'https://github.com/yashtekavade/FUSE-filesystem',
    body: ['A systems-programming exercise focused on understanding how userspace code can intercept and service filesystem operations without writing kernel code.']
  },
  {
    slug: 'summit-2025', title: 'Summit 2025', date: '2025-02-20', status: 'archived',
    description: 'Website and registration platform for a college sports summit across the 2024 and 2025 editions.',
    tags: ['web', 'javascript'], github: 'https://github.com/yashtekavade/summit-2025',
    body: ['A public-facing event website covering team registration, event information, and the summit brand experience.']
  },
  {
    slug: 'star', title: 'STAR', date: '2023-10-31', status: 'archived',
    description: 'A NASA Space Apps Challenge hackathon project built at MIT WPU Pune.',
    tags: ['web', 'hackathon'], github: 'https://github.com/yashtekavade/STAR',
    body: ['Built during the NASA Space Apps Challenge in a six-person team under weekend time pressure, with the goal of shipping something functional quickly.']
  },
]

export const posts: Post[] = [
  { slug: 'claude-code-for-100-free', title: 'Claude Code for 100% FREE!!!', date: '2026-05-24', subject: 'How to run Claude Code with any AI provider, at zero cost, in under 10 minutes.', link: 'https://yashtekavade.substack.com/p/claude-code-for-100-free', tags: ['ai', 'tools'] },
  { slug: 'kimi-k3', title: 'Kimi K3: The Chinese Model That Spooked Wall Street', date: '2026-07-22', subject: 'A model release that triggered a wave of discussion around scale, competition, and the AI market.', link: 'https://yashtekavade.substack.com/p/kimi-k3-the-chinese-model-that-spooked', tags: ['ai', 'industry'] },
  { slug: 'corporate-reporting-pipeline', title: 'I Built a Corporate Reporting Pipeline in Excel VBA', date: '2026-06-11', subject: 'Most people sleep on VBA. Here is why that can still be a mistake.', link: 'https://yashtekavade.substack.com/p/i-built-a-corporate-reporting-pipeline', tags: ['automation', 'vba'] },
  { slug: 'ai-agent-vps', title: 'I Deployed My Own AI Agent on a VPS', date: '2026-02-09', subject: 'What happened when I stopped treating agents as demos and actually deployed one.', link: 'https://yashtekavade.substack.com/p/i-deployed-my-own-ai-agent-on-a-vps', tags: ['ai', 'agents'] },
  { slug: 'n8n-docker', title: 'Run n8n for Free Locally with Docker', date: '2025-08-30', subject: 'A practical local setup for experimenting with automation without another subscription.', link: 'https://yashtekavade.substack.com/p/run-n8n-for-free-locally-with-docker', tags: ['automation', 'docker'] },
  { slug: 'power-bi-survival-kit', title: 'Power BI Survival Kit: What to Learn & How to Do It', date: '2025-08-21', subject: 'A no-fluff guide covering the Power BI fundamentals that actually matter.', link: 'https://yashtekavade.substack.com/p/power-bi-survival-kit-what-to-learn', tags: ['power-bi', 'learning'] },
  { slug: 'pyspark-tutorial', title: 'PySpark 3.5 Tutorial For Beginners', date: '2025-08-18', subject: 'Architecture, DataFrames, and real-world Spark concepts explained simply.', link: 'https://yashtekavade.substack.com/p/pyspark-35-tutorial-for-beginners', tags: ['spark', 'learning'] },
  { slug: 'real-time-media', title: 'Building a Real-Time Media Analytics Pipeline', date: '2025-08-01', subject: 'From streaming ingestion to orchestration and warehousing.', link: 'https://yashtekavade.substack.com/p/building-a-real-time-media-analytics', tags: ['data-engineering', 'aws'] },
  { slug: 'futurecart', title: 'Building a Real-Time CRM Analytics Platform', date: '2025-07-31', subject: 'How a cloud pipeline can move from batch reporting toward operational insight.', link: 'https://yashtekavade.substack.com/p/building-a-real-time-crm-analytics', tags: ['data-engineering', 'aws'] },
  { slug: 'aws-weekend-pipeline', title: 'AWS Pipeline Beginner Project', date: '2025-07-29', subject: 'A step-by-step project for building an impressive real-time AWS data pipeline.', link: 'https://yashtekavade.substack.com/p/aws-pipeline-beginner-project-build', tags: ['aws', 'learning'] },
  { slug: 'real-time-etl', title: 'Building a Real-Time ETL Pipeline with Kinesis, Lambda, and S3', date: '2025-07-25', subject: 'A hands-on walkthrough of a streaming ETL pattern.', link: 'https://yashtekavade.substack.com/p/building-a-real-time-etl-pipeline', tags: ['aws', 'etl'] },
  { slug: 'youtube-comments', title: 'Turning YouTube Comments into Actionable Insights', date: '2025-07-25', subject: 'Why a comment section can become a surprisingly useful data source.', link: 'https://yashtekavade.substack.com/p/turning-youtube-comments-into-actionable', tags: ['data-engineering', 'airflow'] },
  { slug: 'power-bi-dashboards', title: 'Power BI Dashboards: Zomato & Netflix Projects', date: '2025-08-25', subject: 'Exploring real datasets through interactive dashboards.', link: 'https://yashtekavade.substack.com/p/power-bi-dashboards-zomato-and-netflix', tags: ['power-bi', 'data-viz'] },
  { slug: 'hello', title: 'Starting a build-log', date: '2026-07-31', subject: 'Why this site exists, and what to expect here.', tags: ['site', 'personal'] },
]

export const timeline: TimelineItem[] = [
  {
    date: '2025-06', period: 'JUN 2025', eyebrow: 'THE FOUNDATION', title: 'Data engineering becomes the center of gravity',
    summary: 'Started leaning hard into production-style data work: pipelines, transformations, orchestration, and the difference between code that runs and systems that stay reliable.',
    learned: ['ETL patterns', 'SQL in real workflows', 'Python for data engineering', 'Operational thinking'],
    built: ['End-to-end ETL projects', 'First production-facing pipeline work'], tools: ['Python', 'SQL', 'ETL']
  },
  {
    date: '2025-07', period: 'JUL–AUG 2025', eyebrow: 'SCALE', title: 'Spark, streaming, and orchestration',
    summary: 'Moved from simple scripts into distributed and streaming architectures, learning how pieces fit together instead of treating cloud services as isolated tools.',
    learned: ['PySpark', 'Kinesis / Lambda / S3 patterns', 'Airflow DAGs', 'Distributed-processing tradeoffs'],
    built: ['YouTube ETL', 'Kinesis → Lambda → S3', 'Media Stream Analytics', 'AWS Order History Pipeline'], tools: ['PySpark', 'Airflow', 'AWS', 'Spark']
  },
  {
    date: '2025-08', period: 'AUG 2025', eyebrow: 'ANALYTICS', title: 'Turning pipelines into decisions',
    summary: 'Spent time on business-facing analytics and learned that good engineering only matters when the output becomes understandable to the person using it.',
    learned: ['Power BI modeling', 'DAX', 'Power Query', 'Dashboard storytelling'],
    built: ['Netflix dashboard', 'Zomato dashboard', 'Analytics write-ups'], tools: ['Power BI', 'DAX', 'Power Query']
  },
  {
    date: '2026-01', period: '2026', eyebrow: 'AUTOMATION', title: 'Automation becomes a first-class skill',
    summary: 'Started turning repetitive business workflows into repeatable systems. The work moved from pure data movement toward people + process + automation.',
    learned: ['Event-driven Excel automation', 'Validation gates', 'Cross-application orchestration'],
    built: ['Budget / reporting automation', 'Excel → PowerPoint → Outlook workflows'], tools: ['Excel', 'VBA', 'PowerPoint', 'Outlook']
  },
  {
    date: '2026-04', period: 'SPRING 2026', eyebrow: 'AI ENGINEERING', title: 'From using AI to building with it',
    summary: 'Moved closer to applied AI engineering: RAG, agents, orchestration, and the practical gap between a clever demo and a useful workflow.',
    learned: ['RAG architectures', 'Agent workflows', 'LangGraph-style orchestration', 'Model/tool boundaries'],
    built: ['Agent experiments', 'RAG pipelines', 'AI workflow prototypes'], tools: ['LLMs', 'RAG', 'LangGraph', 'Python']
  },
  {
    date: '2026-06', period: 'JUN–JUL 2026', eyebrow: 'PRODUCT', title: 'Shipping actual applications',
    summary: 'Started combining engineering skills into user-facing software — not just pipelines. The goal became: take an idea all the way to something another person can click.',
    learned: ['Product-minded frontend work', 'Database-backed web apps', 'Rapid prototyping'],
    built: ['CanIAfford', 'Orbit prototype', 'Other small application experiments'], tools: ['React', 'Next.js', 'TypeScript', 'Supabase', 'Firebase']
  },
  {
    date: '2026-09', period: 'SEP 2026', eyebrow: 'RIGHT NOW', title: 'Databricks Apps, Replit, and faster building',
    summary: 'The stack is widening again: internal applications, AI-assisted development, and building directly where the data already lives. This phase is less about one tool and more about becoming faster at turning ideas into working systems.',
    learned: ['Databricks Apps', 'Rapid web development', 'AI-assisted software workflows', 'Choosing the simplest stack for the job'],
    built: ['Databricks application experiments', 'Replit-based prototypes', 'This new portfolio'], tools: ['Databricks', 'Replit', 'React', 'TypeScript']
  }
]

export const experiences = [
  { role: 'Data & AI Engineer', org: 'Present', detail: 'Data engineering and commercial analytics — building pipelines, automation, and applications across Databricks, PySpark, Airflow and adjacent tooling.' },
  { role: 'Gen AI Engineer', org: 'NueLeap.AI', detail: 'RAG pipelines and multi-agent workflows built with LangGraph.' },
  { role: 'Backend Developer', org: 'Andes', detail: 'Backend systems and APIs.' },
]
