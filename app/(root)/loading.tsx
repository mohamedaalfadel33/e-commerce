'use client';
import { Triangle } from 'react-loader-spinner';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className=" flex-center w-full ">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#ffffff"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
