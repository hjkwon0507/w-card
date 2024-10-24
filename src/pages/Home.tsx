import React from "react";
import { useParams } from "react-router-dom";
import useFetchApplicationForm from "../hooks/useFetchApplicationForm.tsx";

export default function Home() {
  const { path } = useParams();
  
  const { data: application_form, loading, error } = useFetchApplicationForm(path);
        
  return (
    <div>
      {loading && <p>Loading..</p>}
      {error && <p>{error.message}</p>}
      {application_form && (
        <div>
          <h2>{application_form[0].path}</h2>
          <p>type: {application_form[0].type}</p>
          <p>{application_form[0].event_date} {application_form[0].event_time}</p>
          <p>{application_form[0].address}</p>
          <p>{application_form[0].place}</p>
          <p style={{ whiteSpace: 'pre-line' }}>{application_form[0].phrase}</p>
        </div>
      )}
    </div>
  );
}