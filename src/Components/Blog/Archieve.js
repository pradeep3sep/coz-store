import React from "react";

export default function Archieve() {
  const archievedate = [
    {
      monthYear: "July 2018",
      date: "9",
    },
    {
      monthYear: "June 2018",
      date: "39",
    },
    {
      monthYear: "May 2018",
      date: "29",
    },
    {
      monthYear: "April 2018",
      date: "35",
    },
    {
      monthYear: "March 2018",
      date: "22",
    },
    {
      monthYear: "February 2018",
      date: "32",
    },
    {
      monthYear: "January 2018",
      date: "21",
    },
    {
      monthYear: "December 2017",
      date: "26",
    },
  ];
  return (
    <div className="p-t-55">
      <h4 className="mtext-112 cl2 p-b-20">Archive</h4>

      <ul>
        {archievedate.map((data,index) => (
          <li className="p-b-7" key={`_p${index}`}>
            <a
              href="/"
              className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
            >
              <span>{data.monthYear}</span>

              <span>({data.date})</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
