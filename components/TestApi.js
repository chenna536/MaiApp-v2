import React from 'react';
import fetchData  from '../components/fetchCall';

const URL = "https://dev.mai.family/api/v2.1/child/5d78859df0e5fc02584ea748/dashboard";
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDdmOWVhNDcxZTU4MzJjYTIzODhhMyIsImlhdCI6MTU2ODE3OTU2NH0.qmjnJsrVC6U_iLioNMi-tHVqpUs0eZioYPDtaCjuvxQ';

const getAssessment = async () => {
    const response = await fetchData(URL , accessToken);
    console.log(response)
    return response;
  };

const TestApi = () => {
    return ( <div>
        {console.log(getAssessment())}
    </div> );
}
 
export default TestApi;