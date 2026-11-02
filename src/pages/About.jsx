import { Link } from "react-router-dom";

const features = [
{ icon: "➕", title: "Add transactions", text: "Add income or expenses, with validation." },
{ icon: "✏️", title: "Edit and delete", text: "Edit, cancel, or delete any transaction." },
{ icon: "🔎", title: "Search and filter", text: "Search by title and use the All / Income / Expense tabs." },
{ icon: "📊", title: "Auto totals", text: "Balance, income, and expenses are calculated automatically." },
{ icon: "💾", title: "Auto save", text: "Data is preserved even after a refresh, thanks to localStorage." },
{ icon: "🌙", title: "Dark mode", text: "Switch between light and dark themes with a single click; your preference is remembered." },
];

const flow = [
{ title: "Form", text: "The user enters the title, amount, and type (controlled inputs)." },
{ title: "Context", text: "TransactionProvider adds the new transaction to the state." },
{ title: "localStorage", text: "useEffect saves the data to the browser whenever the state changes." },
{ title: "Pages", text: "The Dashboard and Transactions pages retrieve this data using useTransactions()." },
{ title: "UI update", text: "When the state changes, React re-renders and updates only the affected parts." },
];

const stack = [
  { name: "React", why: "To make a UI from rubbishable components" },
  { name: "Vite", why: "Fast dev servers and builds" },
  { name: "Tailwind CSS v3", why: "Faster and responsive styling using utility classes" },
  { name: "React Router v7", why: "Multi-page navigation without reload" },
  { name: "Context API", why: "Global State Without Prop Drilling" },
  { name: "localStorage", why: "Saving Data Without a Backend" },
];

const learned = [
  { day: 1, topic: "Setup", points: ["React basics aur Virtual DOM", "Vite + Tailwind v3 setup", "Folder structure"] },
  { day: 2, topic: "JSX, Components, Props", points: ["JSX rules", "Reusable components", "Props and one-way data flow"] },
  { day: 3, topic: "Lists and Conditional Rendering", points: ["map() and key", "Total with filter()/reduce()", "Conditional rendering"] },
  { day: 4, topic: "Events and State", points: ["useState and re-render", "Immutable updates", "Data at the bottom, events at the top"] },
  { day: 5, topic: "Forms and Effects", points: ["Controlled inputs and validation", "useEffect", "localStorage persistence"] },
  { day: 6, topic: "Context and Router", points: ["Context API + custom hook", "NavLink, Outlet, 404 route", "Lifting state up"] },
  { day: 7, topic: "Polish and Deploy", points: ["Dark mode (Context + Tailwind)", "Responsive polish", "Deployment"] },
];


function Section({ title, children }) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow dark:bg-slate-800 dark:shadow-none">
      <h3 className="mb-4 text-xl font-bold text-slate-800 dark:text-slate-100">{title}</h3>
      {children}
    </section>
  );
}

function About() {
  return (
    <div className="space-y-6">
      {/*  Hero */}
      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white shadow-lg">
        <h2 className="mt-2 text-3xl font-bold">Expense Tracker</h2>
        <p className="mt-2 max-w-xl text-white/90">
         Track your income and expenses all in one place.
        </p>
        <Link
          to="/transactions"
          className="mt-5 inline-block rounded-lg bg-white px-5 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
        >
          Try karo →
        </Link>
      </div>

      {/* App kya karta hai */}
      <Section title="🎯 What does the app do?">
        <p className="text-slate-600 dark:text-slate-300">
          <span className="font-semibold">Problem:</span> It is difficult to remember where the money went. 
        </p>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          <span className="font-semibold">Solution:</span> Add every income and expense, 
          and the app instantly displays your balance, totals, and recent history.
        </p>
      </Section>

      {/*  Features */}
      <Section title="✨ Features">
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="flex gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-700/50">
              <span className="text-2xl">{f.icon}</span>
              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-100">{f.title}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/*  Andar se kaise kaam karta hai */}
      <Section title="⚙️ How does it work from the inside?">
        <ol className="space-y-3">
          {flow.map((s, index) => (
            <li key={s.title} className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-800 dark:text-slate-100">{s.title}:</span>{" "}
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/*  Tech Stack */}
      <Section title="🛠️ Tech Stack">
        <ul className="divide-y divide-slate-100 dark:divide-slate-700">
          {stack.map((t) => (
            <li key={t.name} className="flex flex-wrap items-center justify-between gap-2 py-2">
              <span className="font-semibold text-slate-800 dark:text-slate-100">{t.name}</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">{t.why}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 6. Maine kya seekha */}
      <Section title="📚 What I Learned (7 Days)">
        <div className="grid gap-4 sm:grid-cols-2">
          {learned.map((d) => (
            <div key={d.day} className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
              <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
                Day {d.day}
              </span>
              <p className="mt-2 font-semibold text-slate-800 dark:text-slate-100">{d.topic}</p>
              <ul className="mt-1 list-disc pl-5 text-sm text-slate-500 dark:text-slate-400">
                {d.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/*  Developer */}
      <Section title="👩‍💻 Developer ke baare mein">
        <p className="text-slate-600 dark:text-slate-300">
          Hi, I’m Poonam, an aspiring front-end developer learning React.
           I built this Expense Tracker as part of a 7-day challenge to practice components, 
           props, state, routing, Context API and Tailwind CSS. I’m focused on writing clean,
            reusable code and building real projects.
           I share my progress on GitHub and LinkedIn.        </p>
      </Section>

      {/*  Links */}
      <Section title="🔗 Links">
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/Poonam-D07"
            
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700  dark:bg-slate-600 dark:hover:bg-slate-500"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/poonam-274843226/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700  dark:bg-slate-600 dark:hover:bg-slate-500"
          >
            LinkedIn
          </a>
        </div>
      </Section>
    </div>
  );
}

export default About;