import React from 'react'

interface Props {
  className?: string
}

const Blob2 = ({className}: Props) => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path fill="#FF0066" d="M46.4,-65.1C59.9,-54.1,70.5,-40.2,75.9,-24.4C81.3,-8.7,81.6,9,77.7,26.6C73.9,44.3,65.9,62,52.3,70.1C38.6,78.2,19.3,76.8,1.2,75.1C-16.9,73.5,-33.8,71.7,-49.5,64.2C-65.1,56.7,-79.4,43.6,-85.2,27.3C-90.9,11.1,-88,-8.3,-81.9,-26.4C-75.8,-44.6,-66.4,-61.5,-52.2,-72.3C-38,-83.1,-19,-87.7,-1.3,-85.9C16.5,-84.2,32.9,-76.1,46.4,-65.1Z" transform="translate(100 100)" />
    </svg>
  )
}

export default Blob2

// hidden
// import React from 'react';

// interface Props {
//   className?: string;
// }

// const Blob2 = ({ className }: Props) => {
//   return (
//     <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
//       <clipPath id="blobClipPath">
//         <path fill="#FF0066" d="M46.4,-65.1C59.9,-54.1,70.5,-40.2,75.9,-24.4C81.3,-8.7,81.6,9,77.7,26.6C73.9,44.3,65.9,62,52.3,70.1C38.6,78.2,19.3,76.8,1.2,75.1C-16.9,73.5,-33.8,71.7,-49.5,64.2C-65.1,56.7,-79.4,43.6,-85.2,27.3C-90.9,11.1,-88,-8.3,-81.9,-26.4C-75.8,-44.6,-66.4,-61.5,-52.2,-72.3C-38,-83.1,-19,-87.7,-1.3,-85.9C16.5,-84.2,32.9,-76.1,46.4,-65.1Z" transform="translate(100 100)" />
//       </clipPath>

//       <image href="/images/kaneki.jpeg" clipPath="url(#blobClipPath)" width="100%" height="100%" />
//     </svg>
//   );
// };

// export default Blob2;
