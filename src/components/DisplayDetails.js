import React from 'react';

const DisplayDetails = (props) => {
  const { dataToDisplay, id } = props;
  if (dataToDisplay[id]) {
    const formattedData = dataToDisplay[id].map((detail) => (
      <li key={detail.label}>
        <b>
          {detail.label}
          :
        </b>
        {detail.value === null ? '' : detail.value.toString()}
      </li>
    ));
    return formattedData;
  }
  return null;
};

export default DisplayDetails;
