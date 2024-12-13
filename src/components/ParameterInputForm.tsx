
    import React from 'react';

    interface ParameterInputFormProps {
      parameters: {
        [key: string]: string;
      };
      onParameterChange: (key