import { MdOutlinePunchClock, MdPostAdd } from "react-icons/md";
import Statistic from "../../ui/Statistic";
import Statistics from "../../ui/Statistics";
import { LuUsers2 } from "react-icons/lu";

import { TbChartDonut } from "react-icons/tb";
import BarChartAdmin from "../../ui/BarChartAdmin";
import DonutChartAdmin from "../../ui/DonutChartAdmin";
import { useDataAreaBarCharts } from "../../services/useData";
import Loader from "../../ui/Loader";
import ErrorMessage from "../../ui/ErrorMessage";

function User() {
  const {
    data: statsData,
    isLoading,
    error,
  } = useDataAreaBarCharts("users", "total");
  const numCols = statsData ? Object.keys(statsData).length : 0;
  return (
    <div>
      <h2 className="mb-8 text-xl  font-semibold text-primaryColor sm:text-3xl">
        Users Stats
      </h2>

      <Statistics numCols={numCols}>
        {error && <ErrorMessage />}
        {!error && isLoading && (
          <div className="flex items-center justify-center">
            <Loader />
          </div>
        )}

        {!error && !isLoading && (
          <>
            <Statistic
              color={"blue"}
              text={"Total of Users"}
              icon={<LuUsers2 />}
              data={statsData?.created}
            />
            <Statistic
              color={"green"}
              text={"Average Post Per User"}
              icon={<MdPostAdd />}
              data={statsData?.averagePostPerUser}
            />

            <Statistic
              color={"orange"}
              text={"Average Deal Per User"}
              icon={<MdOutlinePunchClock />}
              data={statsData?.averageDealPerUser}
            />
          </>
        )}
      </Statistics>

      <BarChartAdmin route="users" />

      <div className="mb-1 flex items-center gap-3">
        <h3 className="  text-lg text-primaryColor sm:text-2xl">
          Workflow Summary
        </h3>
        <TbChartDonut className="text-lg text-primaryColor sm:text-2xl" />
      </div>

      <section className=" grid grid-cols-1 gap-4 md:grid-cols-2">
        <DonutChartAdmin type="GeneralDonutChart" route="users" />
        <DonutChartAdmin type="wilaya" route="users" />
      </section>
    </div>
  );
}

export default User;
