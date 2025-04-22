
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SubmitButtonProps {
  loading: boolean;
}

const SubmitButton = ({ loading }: SubmitButtonProps) => {
  return (
    <Button 
      type="submit" 
      disabled={loading} 
      className="w-full primary-gradient-bg hover:opacity-90 flex justify-center items-center"
    >
      {loading ? (
        <>
          <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
          Wird gesendet...
        </>
      ) : (
        <>
          Beratung buchen <ArrowRight className="ml-2 h-5 w-5" />
        </>
      )}
    </Button>
  );
};

export default SubmitButton;
