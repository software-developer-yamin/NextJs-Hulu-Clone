import React,{forwardRef} from 'react';
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';

const Thumbnail = forwardRef(({result},ref) =>  {
     const BASE_URL = "https://image.tmdb.org/t/p/original"
     return (
          <div ref={ref} className='group cursor-pointer p-2 transition transform duration-200 ease-in sm:hover:scale-105'>
               <Image src={`${BASE_URL}${result.backdrop_path || result.poster_path}`} layout='responsive' width={1920} height={1080} /><div className='p-2'>
                    <p className='max-w-md truncate'>{result.overview}</p>
                    <h2 className='mt-1 text-2xl text-white group-hover:font-bold transition-all duration-100 ease-in-out'>{result.title || result.original_name}</h2>
                    <p className='flex items-center opacity-0 group-hover:opacity-100'>
                         {`${result.media_type && result.media_type} . ${result.release_date || result.first_air_date} . `}
                         <ThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
                    </p>
               </div>
          </div>
     )
});

export default Thumbnail;
