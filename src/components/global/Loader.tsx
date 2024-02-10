import React from 'react';
import Image from '../../../node_modules/next/image';
import LoaderSVG from '../../../public/loader.svg'

const Loader = () => {
  return (
    <div role="status">
      <Image src={LoaderSVG} alt="" width={56} height={56} />
    </div>
  );
};

export default Loader;
