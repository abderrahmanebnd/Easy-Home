
import { AreaChartAdmin } from "../../ui/AreaChartAdmin";
import Statistic from "../../ui/Statistic";
import Statistics from "../../ui/Statistics";
import {MdPostAdd } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { TbChartDonut} from "react-icons/tb";
import DonutChartAdmin from "../../ui/DonutChartAdmin";
import { useDataAreaBarCharts } from "../../services/useData";
import Loader from "../../ui/Loader";
import ErrorMessage from "../../ui/ErrorMessage";

function Posts() {
  const {
    data: statsData,
    isLoading,
    error,
  } = useDataAreaBarCharts("posts", "total");
  const numCols = statsData ? Object.keys(statsData).length : 0;
  return (
    <div>
      <h2 className="mb-8 text-xl  font-semibold text-primaryColor sm:text-3xl">
        Posts Stats
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
              text={"Total of Posts"}
              icon={<MdPostAdd />}
              data={statsData?.created}
            />
            <Statistic
              color={"green"}
              text={"Average Post Per User"}
              icon={<LuUsers2 />}
              data={statsData?.averagePostPerUser}
            />
          </>
        )}
      </Statistics>

      <AreaChartAdmin route={"posts"} />

      <div className="mb-3 flex items-center gap-3">
        <h3 className="  text-lg text-primaryColor sm:text-2xl">
          Workflow Summary
        </h3>
        <TbChartDonut className="text-lg text-primaryColor sm:text-2xl" />
      </div>

      <section className=" grid grid-cols-1 gap-4 md:grid-cols-2">
        <DonutChartAdmin type="GeneralDonutChart" route="posts" />
        <DonutChartAdmin type="job" route="posts" />
      </section>
    </div>
  );
}

export default Posts;
