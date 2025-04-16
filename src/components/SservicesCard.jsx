'use client'; // App Router only

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ServicesCard() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('/services.json');
            const json = await res.json();
            setData(json);
        };
        getData();
    }, []);

    if (!data) return <p>Loading...</p>;

    return (
        <div className='grid grid-cols-12 gap-6 justify-items-center my-10 px-48'>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            {data.map((item) => {
                return <div className='col-span-4 border-[1px] border-[#e8e8e8] rounded-lg w-[365px] h-[348px] p-6' key={item._id}>
                    <Image src={item.img} width={314} height={175} alt='image' className='rounded'></Image>
                    <h6 className='py-4 text-2xl font-bold'>{item.title}</h6>
                    <div className='flex justify-between items-center text-[#ff3811]'>
                        <h6 className='text-xl font-bold '>Price: ${item.price}</h6>
                        <Link href={'/'} className='font-bold text-4xl' >{'\u2192'}</Link>
                    </div>
                </div>
            })}
        </div>
    );
}
