import { Table, TableBody, TableCell, TableRow } from "@tremor/react";
import TableHeadInfo from "./TableHeadInfo";
import TableRowInfo from "./TableRowInfo";
import { useWorkers } from "../services/useWorkers";
import Loader from "./Loader";
import { useState } from "react";
import { GrUserWorker } from "react-icons/gr";
import ErrorMessage from "./ErrorMessage";

function TableInfo() {
  const { workers, isLoading, error } = useWorkers();
  const [value, setValue] = useState("architect");

  return (
    <div className="mt-8 hidden sm:block">
      <section className="mb-3 flex items-center gap-3">
        <h3 className="  text-lg text-primaryColor sm:text-2xl">
         Best Workers By Categories
        </h3>
        <GrUserWorker className="text-lg text-primaryColor sm:text-2xl" />
      </section>
      <section className=" flex flex-col items-center justify-center gap-3 rounded-2xl bg-customGray p-3 lg:p-5">
        {error && <ErrorMessage />}
        {!error && isLoading && <Loader />}

        {!error && !isLoading && (
          <>
            <select
              value={value}
              className="w-2/4 rounded-full border-2 border-solid border-blue-900 py-2 text-center font-semibold text-blue-900 transition-all duration-300 focus:bg-blue-900 focus:text-white focus:outline-none"
              onChange={(e) => setValue(e.target.value)}
            >
              <option value="architect">Architects</option>
              <option value="mason">Masons</option>
              <option value="cleaner">Cleaners</option>
              <option value="designer">Designers</option>
              <option value="plumber">Plumbers</option>
              <option value="electrician">Electiricians</option>
              <option value="carpenter">Carpenters</option>
            </select>

            <Table>
              <TableHeadInfo />
              <TableBody>
                {workers.filter(
                  (worker) => worker.job.toLowerCase() === value.toLowerCase(),
                ).length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6}>
                      <p className="text-center">
                        we are still researching for a {value}
                      </p>
                    </TableCell>
                  </TableRow>
                ) : (
                  workers
                    .filter(
                      (worker) =>
                        worker.job.toLowerCase() === value.toLowerCase(),
                    )
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 5)
                    .map((worker) => (
                      <TableRowInfo worker={worker} key={worker._id} />
                    ))
                )}
              </TableBody>
            </Table>
          </>
        )}
      </section>
    </div>
  );
}

export default TableInfo;
