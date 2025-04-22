
import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyNotice = () => {
  return (
    <p className="text-xs text-gray-500 mt-2 text-center">
      Ihre Daten werden gemäß unserer{' '}
      <Link to="/datenschutz" className="text-brand-light-purple hover:underline">
        Datenschutzerklärung
      </Link>{' '}
      verarbeitet.
    </p>
  );
};

export default PrivacyNotice;
