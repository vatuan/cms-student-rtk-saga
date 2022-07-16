import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import { selectStudentFilter, selectStudentLoading, selectStudentPagination, studentActions } from "../studentSlice";
import { BiUserPlus } from "react-icons/bi";
import { StudentTable } from "../components";
import { selectStudentList } from "./../studentSlice";
import { LoaderBar } from "components/Common";
import ReactPaginate from "react-paginate";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { selectCityMap } from "features/city/citySlice";

export function ListPage() {
  const dispatch = useAppDispatch();
  const studentList = useAppSelector(selectStudentList);
  const loading = useAppSelector(selectStudentLoading);
  const pagination = useAppSelector(selectStudentPagination);
  const filter = useAppSelector(selectStudentFilter);
  const cityMap = useAppSelector(selectCityMap);

  useEffect(() => {
    dispatch(studentActions.fetchStudentList(filter));
  }, [dispatch, filter]);

  const handlePageClick = (page: number) => {
    dispatch(
      studentActions.setFilter({
        ...filter,
        _page: page,
      }),
    );
  };

  return (
    <div>
      {loading && (
        <div className="loading absolute w-full top-0 left-0">
          <LoaderBar />
        </div>
      )}
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-body-bold text-2xl">Student</h1>
        <button className="flex items-end px-4 py-1 rounded-md bg-primary text-white text-base shadow-md">
          <BiUserPlus size={22} className="mr-2" /> Add student
        </button>
      </div>

      <div>
        <StudentTable studentList={studentList} cityMap={cityMap} />
      </div>
      <div className="my-5">
        <ReactPaginate
          previousLabel={<BsChevronLeft color="#ADB1BD" size={18} />}
          nextLabel={<BsChevronRight color={"#ADB1BD"} size={18} />}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(pagination._totalRows / pagination._limit)}
          marginPagesDisplayed={16}
          pageRangeDisplayed={2}
          onPageChange={(page) => handlePageClick(page.selected + 1)}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link-item"}
        />
      </div>
    </div>
  );
}
