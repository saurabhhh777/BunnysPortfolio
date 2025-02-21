import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import PropTypes from "prop-types";
import ActivityCalendar from "react-activity-calendar";

const Leetcodecalendar = ({ username, graph = "default" }) => {
  useEffect(() => {
    console.log("Graph prop received:", graph);
  }, [graph]);

  const { data = [], isLoading, isError, error } = useQuery({
    queryKey: ["leetcodeData", username, graph],
    queryFn: () => handlegetdata(username, graph),
    staleTime: 0,
    refetchOnMount: true,
  });

  const getTotalSubmissions = (leetdata) => {
    return leetdata.reduce((total, data) => total + data.count, 0);
  };

  const generateInitialYearData = (startDate, endDate) => {
    const currentDate = new Date(startDate);
    const end = new Date(endDate);
    const result = [];

    while (currentDate <= end) {
      result.push({
        date: currentDate.toISOString().split("T")[0],
        count: 0,
        level: 0,
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return result;
  };

  const filteredData = graph === "yearly" 
    ? (() => {
        const today = new Date();
        const lastYear = new Date(today.setFullYear(today.getFullYear() - 1));
        const startDate = lastYear.toISOString().split("T")[0];
        const endDate = new Date(lastYear.setFullYear(lastYear.getFullYear() + 1) - 1).toISOString().split("T")[0];
        const initialYearData = generateInitialYearData(startDate, endDate);

        return initialYearData.map(item => {
          const matchingApiData = data.find(apiData => apiData.date === item.date);
          return matchingApiData ? { ...item, count: matchingApiData.count, level: matchingApiData.level } : item;
        });
      })()
    : data;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div className="bg-[#101828] text-white p-4">
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-2">
          {graph === "yearly" ? ( <div className="font-poppin text-2xl p-6"><a href="https://leetcode.com/u/saurabhhh777" target="_blank" className="hover:text-blue-800">LeetCode</a> Submissions</div>) : ( <div className="font-poppin">LeetCode Submissions</div>)}
        </h2>
        {filteredData.length > 0 ? (
          <ActivityCalendar
            data={filteredData}
            labels={{
              months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              totalCount: `Total submissions: ${getTotalSubmissions(filteredData)}`,
              legend: {
                less: "Few submissions",
                more: "Many submissions",
              },
            }}
            theme={{
              light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
              dark: ["#161B22", "#0E4429", "#006D32", "#26A641", "#39D353"],
            }}
          />
        ) : (
          <p>No data available for the given username.</p>
        )}
      </div>
    </div>
  );
};

const handlegetdata = async (username, graph) => {
  if (!username || username === "string") {
    console.log("Invalid username or missing username");
    return [];
  }

  console.log(graph);

  try {
    const res = await axios.get(`https://leetcode-sub-endpoint.vercel.app/leetcode/${username}`);
    if (!res.data || typeof res.data !== "object") {
      console.error("Unexpected response format:", res.data);
      return [];
    }

    const submissionCalendar = res.data;
    return Object.entries(submissionCalendar).map(([date, submission]) => ({
      date,
      count: submission,
      level: submission > 0 ? Math.min(submission, 4) : 0,
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
Leetcodecalendar.propTypes = {
  username: PropTypes.string.isRequired,
  graph: PropTypes.string,
};

export default Leetcodecalendar;
