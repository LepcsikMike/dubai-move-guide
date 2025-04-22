
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SubmitButtonProps {
  loading: boolean;
}

const SubmitButton = ({ loading }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-2 px-4 rounded-md transition-colors flex justify-center items-center"
    >
      {loading ? (
        <>
          <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
          Wird gesendet...
        </>
      ) : (
        <>
          Kostenlose Beratung anfordern <ArrowRight className="ml-2 h-5 w-5" />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
