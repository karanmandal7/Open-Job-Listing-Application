import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { axiosClient } from "../utils/utils";
import LoaderComponent from "../components/LoaderComponent";

const jobContext = createContext({
    jobs: [],
    fetchAllJobs: () => {}
});

export const useJobContext = () => useContext(jobContext);

export const JobContextProvider = ({ children }) => {
    const [loader, setLoader] = useState(true);
    const [jobs, setJobs] = useState([]);

    const fetchAllJobs = async () => {
        try {
            const response = await axiosClient.get("/jobs");
            const data = await response.data;
            setJobs(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        fetchAllJobs();
    }, []);

    if (loader) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4 animate-fadeIn">
                <LoaderComponent />
                <p className="text-gray-600 text-lg font-medium">Fetching jobs...</p>
            </div>
        );
    }

    return (
        <jobContext.Provider value={{ jobs, fetchAllJobs }}>
            {children}
        </jobContext.Provider>
    );
};
