import React from 'react';
import './LoadingSpinner.css'

const LoadingSpinner = () => {
    return (
      <div className="loading-container">
          <div class="lds-ring">
            <div>
            </div>
            <div>
            </div>
            <div>

            </div>
        </div>
      </div>
    );
};

export default LoadingSpinner;