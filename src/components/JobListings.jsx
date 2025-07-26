import React from 'react';
import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './spinner';

const JobListings = ({ isHome = false }) => {
    const [jobs, setjobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiurl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
            try {
                const res = await fetch(apiurl);
                const data = await res.json();
                setjobs(data);
            }
            catch (error) {
                console.log('Error Fetching data', error);
            }
            finally {
                setLoading(false);
            }

        };

        fetchJobs();
    }, []);



    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>

                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <JobListing key={job.id} job={job} />
                        ))}
                    </div>
                )}


            </div>
        </section>
    );
};

export default JobListings;



//  {/* Job Listing 1 */}
// < div className = "bg-white rounded-xl shadow-md relative" >
//     <div className="p-4">
//         <div className="mb-6">
//             <div className="text-gray-600 my-2">Full-Time</div>
//             <h3 className="text-xl font-bold">Senior React Developer</h3>
//         </div>
//         <div className="mb-5">
//             We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript...
//         </div>
//         <h3 className="text-indigo-500 mb-2">$70 - $80K / Year</h3>
//         <div className="border border-gray-100 mb-5"></div>
//         <div className="flex flex-col lg:flex-row justify-between mb-4">
//             <div className="text-orange-700 mb-3">
//                 <i className="fa-solid fa-location-dot text-lg"></i> Boston, MA
//             </div>
//             <a
//                 href="job.html"
//                 className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
//             >
//                 Read More
//             </a>
//         </div>
//     </div>
//                 </div >

//                     {/* Job Listing 2 */}
//                     <div className="bg-white rounded-xl shadow-md relative">
//                         <div className="p-4">
//                             <div className="mb-6">
//                                 <div className="text-gray-600 my-2">Remote</div>
//                                 <h3 className="text-xl font-bold">Front-End Engineer (React)</h3>
//                             </div>
//                             <div className="mb-5">
//                                 Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion...
//                             </div>
//                             <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>
//                             <div className="border border-gray-100 mb-5"></div>
//                             <div className="flex flex-col lg:flex-row justify-between mb-4">
//                                 <div className="text-orange-700 mb-3">
//                                     <i className="fa-solid fa-location-dot text-lg"></i> Miami, FL
//                                 </div>
//                                 <a
//                                     href="job.html"
//                                     className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
//                                 >
//                                     Read More
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Job Listing 3 */}
//                     <div className="bg-white rounded-xl shadow-md relative">
//                         <div className="p-4">
//                             <div className="mb-6">
//                                 <div className="text-gray-600 my-2">Remote</div>
//                                 <h3 className="text-xl font-bold">React.js Developer</h3>
//                             </div>
//                             <div className="mb-5">
//                                 Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference...
//                             </div>
//                             <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>
//                             <div className="border border-gray-100 mb-5"></div>
//                             <div className="flex flex-col lg:flex-row justify-between mb-4">
//                                 <div className="text-orange-700 mb-3">
//                                     <i className="fa-solid fa-location-dot text-lg"></i> Brooklyn, NY
//                                 </div>
//                                 <a
//                                     href="job.html"
//                                     className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
//                                 >
//                                     Read More
//                                 </a>
//                             </div>
//                         </div>
//                     </div>