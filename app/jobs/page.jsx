import Head from "next/head";
import SideFilters from "../jobs/SideFilters";
import JobCard from "../jobs/JobCard";
import Link from "next/link";

export default function Home() {
  const jobs = [
    {
      jobTitle: "Software Developer",
      company: "Blue Sparing Services Opc",
      location: "Jaipur",
      salaryRange: "₹10,000 - ₹70,000 monthly",
      details: [
        "Work from Office",
        "Full Time",
        "Min. 1 year",
        "Basic English",
      ],
    },
    {
      jobTitle: "Software Developer",
      company: "Blue Sparing Services Opc",
      location: "Jaipur",
      salaryRange: "₹10,000 - ₹70,000 monthly",
      details: [
        "Work from Office",
        "Full Time",
        "Min. 1 year",
        "Basic English",
      ],
    },
      
  ];

  return (
    <>
      <Head>
        <title>Job Listings</title>
      </Head>
      <div className="bg-gray-100 min-h-[90vh] h-full">
        <div className="max-w-7xl mx-auto p-5">
          <div className="flex flex-col md:flex-row gap-5 ">
            <div className="md:min-w-64">
              Filters
              <SideFilters />
            </div>

            <div className="w-full "> 
              Job Listings
              <div className="flex-1" >
                {jobs.map((job, index) => (
                  // <p> heloo</p>
                  <Link href="/jobs/">
                  <JobCard
                    key={index}
                    jobTitle={job.jobTitle}
                    company={job.company}
                    location={job.location}
                    salaryRange={job.salaryRange}
                    details={job.details}
                  />
                  </Link>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
