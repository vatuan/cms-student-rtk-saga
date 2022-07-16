import { Student } from "types";

interface StudentRankingListProps {
  studentList: Student[];
}
export function StudentRankingList({ studentList }: StudentRankingListProps) {
  return (
    <table className="divide-y divide-gray-200 w-full">
      <thead className="">
        <tr>
          <th scope="col" className="py-1 px-2 text-left text-md font-body-bold tracking-wider">
            #
          </th>
          <th scope="col" className="py-1 w-36 text-left text-md font-body-bold tracking-wider">
            Name
          </th>
          <th scope="col" className="py-1 px-2 text-md font-bold tracking-wider text-right">
            Mark
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {studentList.map((student, index) => (
          <tr key={index}>
            <td className="py-1 px-2 whitespace-nowrap">{index + 1}</td>
            <td className="whitespace-nowrap">{student.name} </td>
            <td className="py-1 px-2 whitespace-nowrap text-right">{student.mark}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
