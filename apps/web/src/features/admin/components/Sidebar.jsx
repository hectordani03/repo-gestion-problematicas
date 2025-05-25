import { Link, useLocation } from "react-router-dom"

export default function Sidebar ({tables}) {
  const { pathname } = useLocation();
  
  return (
    <aside className="sidebar w-2/12 h- relative shadow-xl dark:bg-slate-700">
      <nav>
        <ul className="flex flex-col gap-4 p-4 items-start text-xl mt-8 ml-5">
            {tables.length === 0 && (
              <li className={"flex items-center gap-4"}>No hay tablas</li>
            )}

            {tables.length > 0 &&
              tables.map((tableName) => {
                const tableNameLC = tableName.toLocaleLowerCase()
                const pathnameLC = pathname.toLocaleLowerCase()

                return (
                  <li className={"flex items-center gap-4"} key={tableName}>
                    <Link
                      to={`/admin/${tableNameLC}`}
                      className={`flex items-center gap-4 ${
                        pathnameLC.endsWith(`/admin/${tableNameLC}`)
                          ? "text-blue-500 font-semibold"
                          : ""
                      } hover:text-blue-400 transition`}
                    >
                      { tableName.replace("_", " ") }
                    </Link>
                  </li>
                );
              })}
        </ul>
      </nav>
    </aside>
  )
}
