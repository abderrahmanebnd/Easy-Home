
import BarChartAdmin from "../../ui/BarChartAdmin";

import DonutChartAdmin from "../../ui/DonutChartAdmin";
import Statistic from "../../ui/Statistic";
import Statistics from "../../ui/Statistics";


import { TbCertificate, TbCertificate2, TbCertificate2Off, TbChartDonut} from "react-icons/tb";
import { useDataAreaBarCharts } from "../../services/useData";
import ErrorMessage from "../../ui/ErrorMessage";
import Loader from "../../ui/Loader";
import { RiDiscountPercentLine } from "@remixicon/react";

function CertificatesCharts() {
  const {
    data: statsData,
    isLoading,
    error,
  } = useDataAreaBarCharts("certificates", "total");
  const numCols = statsData ? Object.keys(statsData).length : 0;
  return (
    <div>
      <h2 className="mb-8 text-xl  font-semibold text-primaryColor sm:text-3xl">
        Certificates Stats
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
            {" "}
            <Statistic
              color={"blue"}
              text={"Total of Certificates"}
              icon={<TbCertificate />}
              data={statsData?.created}
            />
            <Statistic
              color={"green"}
              text={"Certified Workers"}
              icon={<TbCertificate2 />}
              data={statsData?.certifiedWorkers}
            />
            <Statistic
              color={"orange"}
              text={"Not Certified Workers"}
              icon={<TbCertificate2Off />}
              data={statsData?.notCertifiedWorkers}
            />
            <Statistic
              color={"red"}
              text={"Certified Workers Percentage"}
              icon={<RiDiscountPercentLine />}
              data={statsData?.certifiedWorkersPercentage}
            />
          </>
        )}
      </Statistics>

      <BarChartAdmin route="certificates" />

      <div className="mb-3 flex items-center gap-3">
        <h3 className="  text-lg text-primaryColor sm:text-2xl">
          Workflow Summary
        </h3>
        <TbChartDonut className="text-lg text-primaryColor sm:text-2xl" />
      </div>
      <section className=" grid grid-cols-1 gap-4 md:grid-cols-2">
        <DonutChartAdmin type="GeneralDonutChart" route="certificates" />
      </section>
    </div>
  );
}

export default CertificatesCharts;
