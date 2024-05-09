import { AreaChartAdmin } from "../../ui/AreaChartAdmin";
import Statistic from "../../ui/Statistic";
import Statistics from "../../ui/Statistics";

import { TbChartDonut } from "react-icons/tb";
import DonutChartAdmin from "../../ui/DonutChartAdmin";
import { useDataAreaBarCharts } from "../../services/useData";
import ErrorMessage from "../../ui/ErrorMessage";
import Loader from "../../ui/Loader";
import { AiOutlineComment } from "react-icons/ai";
import { GrUserWorker } from "react-icons/gr";

function Reviews() {
  const {
    data: statsData,
    isLoading,
    error,
  } = useDataAreaBarCharts("reviews", "total");
  const numCols = statsData ? Object.keys(statsData).length : 0;
  return (
    <div>
      <h2 className="mb-8 text-xl  font-semibold text-primaryColor sm:text-3xl">
        Reviews Stats
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
              text={"Total of Reviews"}
              icon={<AiOutlineComment />}
              data={statsData?.created}
            />
            <Statistic
              color={"green"}
              text={"Average Review Per Worker"}
              icon={<GrUserWorker />}
              data={statsData?.averageReviewPerWorker}
            />
          </>
        )}
      </Statistics>

      <AreaChartAdmin route={"reviews"} />

      <div className="mb-3 flex items-center gap-3">
        <h3 className="  text-lg text-primaryColor sm:text-2xl">
          Workflow Summary
        </h3>
        <TbChartDonut className="text-lg text-primaryColor sm:text-2xl" />
      </div>

      <section className=" grid grid-cols-1 gap-4 md:grid-cols-2">
        <DonutChartAdmin type="GeneralDonutChart" route="reviews" />
        <DonutChartAdmin type="rating" route="reviews" />
      </section>
    </div>
  );
}

export default Reviews;
