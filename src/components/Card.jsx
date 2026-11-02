
function Card({ children, className=" "}) {
  return (
    <section className={` rounded-2xl bg-white p-6 shadow dark:bg-slate-800 dark:shadow-none ${className} `}>
        {children}
    </section>
  )
}

export default Card;