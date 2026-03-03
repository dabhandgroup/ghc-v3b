"use client";

import { useState } from "react";
import Link from "next/link";
import { jobs, departments, deptGroups } from "@/data/jobs";

export default function CareersClient() {
  const [filter, setFilter] = useState("all");

  return (
    <>
      {/* Filter Bar */}
      <div className="fbar">
        <div className="ct">
          {departments.map((d) => (
            <button
              key={d.key}
              className={`fb${filter === d.key ? " act" : ""}`}
              onClick={() => setFilter(d.key)}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* Job Listings */}
      <div className="js">
        <div className="ct">
          {deptGroups.map((group) => {
            const groupJobs = jobs.filter((j) => j.deptKey === group.key);
            if (filter !== "all" && filter !== group.key) return null;
            return (
              <div key={group.key}>
                <div className="dl rv">{group.label}</div>
                {groupJobs.map((job, i) => (
                  <Link
                    key={job.id}
                    href={`/careers/${job.id}`}
                    className={`jc rv${i > 0 ? ` d${i}` : " d1"}`}
                  >
                    <div className="jc-t">
                      <span className="jc-ti">{job.title}</span>
                      <svg className="jc-ar" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="jc-m">
                      {job.tags.map((t) => <span key={t} className="tg">{t}</span>)}
                    </div>
                    <p className="jc-d">{job.desc}</p>
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
