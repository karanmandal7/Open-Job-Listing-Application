import React from 'react';
import { skills } from '../../../utils/constant';
import moment from 'moment';
import { SlCalender } from "react-icons/sl";
import { MdOutlineWork, MdPublish } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

const JobCard = ({ data }) => {
  return (
    <div className="flex items-start gap-x-2 w-full border border-transparent hover:border-indigo-500 transition-all duration-300 px-5 py-3 rounded-md">
      <div>
        <img 
          src={data.company_profile_pic} 
          alt="Company Profile" 
          className="rounded-full h-12 w-12 bg-gray-300 p-2 object-cover" 
        />
      </div>
      <div>
        <h1 className="text-xl font-bold">{data.company_name}</h1>
        <span className="text-sm font-medium text-gray-900">{data.title}</span>
        <ul className="flex items-center gap-x-2 rounded-md flex-wrap gap-y-3 py-3">
          {data.skills.map((skill, i) => (
            <li key={i} className="text-xs text-gray-700 px-3 py-1 bg-gray-300 rounded">
              {skill}
            </li>
          ))}
        </ul>
        <p className="flex items-center gap-x-2">
          <MdPublish /> <span>{moment(data.createdAt).format('ll')}</span>
        </p>
        <p className="flex items-center gap-x-2">
          <SlCalender /> <span>{moment(data.extend_date).format('ll')}</span>
        </p>
        <p className="flex items-center gap-x-2">
          <MdOutlineWork /> <span>{data.job_type}</span>
        </p>
        <div className="mb-3 w-full">
          <p className="text-end">
            <a 
              href={data.job_url} 
              target="_blank" 
              className="text-blue-700 flex justify-end items-center"
            >
              Apply <GoArrowUpRight />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
