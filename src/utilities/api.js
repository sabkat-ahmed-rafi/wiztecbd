import api from "@/config/api";

export const fetchCaseStudies = async () => {
  try {
    const response = await api.get('/api/get-case-studies');
    console.log('response.data', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return { status: 500, message: 'Error fetching case studies', caseStudies: [] };
  }
};

export const fetchExpertises = async () => {
  try {
    const response = await api.get('/api/get-expertises');
    return response.data;
  } catch (error) {
    console.error('Error fetching expertises:', error);
    return { status: 500, message: 'Error fetching expertises', expertises: [] };
  }
};

export const fetchCaseStudyResolutions = async () => {
  try {
    const response = await api.get('/api/get-case-study-resolutions');
    return response.data;
  } catch (error) {
    console.error('Error fetching case study resolutions:', error);
    return { status: 500, message: 'Error fetching case study resolutions', resolutions: [] };
  }
};
