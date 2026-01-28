import React from "react";
import { useEffect, useState } from "react";
import { SupabaseClient } from "@supabase/supabase-js";

const SupabaseTest = () => {
  const mockData = [
    { id: 1, name: "Test Row One" },
    { id: 2, name: "Another Test Row" },
    { id: 3, name: "Sample Supabase Data" },
  ];
  // Temporarily using mock data
  const [data, setData] = useState(mockData);

  // fetching data from test table in supabase when component mounts
  // const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("Test").select("*");

      if (error) {
        console.log("Supabase fetch error:", error);
      } else {
        setData(data);
        console.log("Fetched data:", data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h2>Supabase Data Test</h2>
        <ul>
          {data.map((row) => (
            <li key={row.id}>{row.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SupabaseTest;
