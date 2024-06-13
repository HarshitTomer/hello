function JobCard({ jobTitle, company, location, salaryRange, details }) {
  return (
    <div className="bg-white rounded shadow-xl w-full  p-4 mb-4">
      <h2 className="text-lg font-semibold">{jobTitle}</h2>
      <p className="text-gray-600">
        {company} - {location}
      </p>
      <p className="text-gray-900 font-bold">{salaryRange}</p>
      <div className="text-gray-500 text-sm mt-2">
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </div>
  );
}

export default JobCard;
