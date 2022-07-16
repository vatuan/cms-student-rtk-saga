import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import { StatisticItem, StudentRankingList, Widget } from "./components";
import {
  dashboardActions,
  selectDashboardLoading,
  selectDashboardStatistics,
  selectHighestStudentList,
  selectLowestStudentList,
  selectRankingByCityList,
} from "./dashboardSlice";
import { GiArmorUpgrade, GiArmorDowngrade } from "react-icons/gi";
import { FaMale, FaFemale } from "react-icons/fa";
import { LoaderBar } from "components/Common";

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectDashboardLoading);
  const statistics = useAppSelector(selectDashboardStatistics);
  const highestStudentList = useAppSelector(selectHighestStudentList);
  const lowestStudentList = useAppSelector(selectLowestStudentList);
  const rankingByCityList = useAppSelector(selectRankingByCityList);

  useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);

  return (
    <>
      {loading && (
        <div className="loading absolute w-full top-0 left-0">
          <LoaderBar />
        </div>
      )}
      <div className="grid grid-cols-4 gap-x-4 mb-8">
        <StatisticItem icon={<FaMale size={22} color="#48BFB1" />} label="male" value={statistics.maleCount} />
        <StatisticItem icon={<FaFemale size={22} color="#48BFB1" />} label="female" value={statistics.femaleCount} />
        <StatisticItem
          icon={<GiArmorUpgrade size={22} color="#48BFB1" />}
          label="mark>= 8"
          value={statistics.highMarkCount}
        />
        <StatisticItem
          icon={<GiArmorDowngrade size={22} color="#48BFB1" />}
          label="mark <= 5"
          value={statistics.lowMarkCount}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-body-bold mb-2">All Students</h2>
        <div className="grid grid-cols-4 gap-x-4">
          <Widget title="student with highest mark">
            <StudentRankingList studentList={highestStudentList} />
          </Widget>
          <Widget title="student with lowest mark">
            <StudentRankingList studentList={lowestStudentList} />
          </Widget>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-body-bold mb-2">Ranking by city</h2>
        <div className="grid grid-cols-4 gap-x-4">
          {rankingByCityList.map((ranking) => (
            <Widget key={ranking.cityId} title={ranking.cityName}>
              <StudentRankingList studentList={ranking.rankingList} />
            </Widget>
          ))}
        </div>
      </div>
    </>
  );
}
