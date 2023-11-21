import axios, { AxiosResponse } from 'axios';

const fetchJobs = axios.get('http://localhost:8080/api/v1/jobs');
const fetchSuburbs = axios.get('http://localhost:8080/api/v1/suburbs');
const fetchCategories = axios.get('http://localhost:8080/api/v1/categories');
const fetchAllData = axios.all([fetchJobs, fetchSuburbs, fetchCategories]);

export { fetchJobs, fetchCategories, fetchSuburbs, fetchAllData };
