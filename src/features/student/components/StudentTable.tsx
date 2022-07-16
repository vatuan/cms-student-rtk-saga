import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { City, Student } from "types";
import { getMarkColor } from "./../../../utils/common";

interface StudentTableProps {
  studentList: Student[];
  cityMap: {
    [key: string]: City;
  };
}
export function StudentTable({ studentList, cityMap }: StudentTableProps) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="w-10 px-6 py-3 text-left text-xs font-medium text-black font-body-bold uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-black font-body-bold uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-black font-body-bold uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-black font-body-bold uppercase tracking-wider"
                  >
                    Gender
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-black font-body-bold uppercase tracking-wider"
                  >
                    Mark
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-black font-body-bold uppercase tracking-wider"
                  >
                    City
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-black font-body-bold uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {studentList.map((student, index) => (
                  <tr key={student.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{student.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm capitalize">{student.gender}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-body-bold ${getMarkColor(student.mark)}`}>
                      {student.mark}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{cityMap[student.city]?.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end">
                        <button className="px-4 py-1 rounded-md bg-blue-600 text-white mr-2 flex items-center">
                          <FiEdit2 size={21} />
                        </button>
                        <button className="px-4 py-1 rounded-md bg-red-600 text-white flex items-center">
                          <AiOutlineDelete size={21} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
