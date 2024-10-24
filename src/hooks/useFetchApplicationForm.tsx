import { useState, useEffect } from 'react';
import { supabase } from '../utils/SupabaseClient'; 
import { PostgrestError } from '@supabase/supabase-js';

function useFetchApplicationForm(path: string | undefined) {
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<PostgrestError | null>(null);

  useEffect(() => {
    if (path) {
      const fetchData = async () => {
        setLoading(true); 
        try {
          let { data, error } = await supabase
            .from('application_form')
            .select('*')
            .eq('path', path);

          console.log(data);

          if (error) {
            throw new Error(error.message);
          }

          setData(data);
        } catch (error: PostgrestError | any) {
          setError(error.message);
        } finally {
          setLoading(false); 
        }
      };

      fetchData();
    }
  }, [path]);

  return { data, loading, error };
}

export default useFetchApplicationForm;