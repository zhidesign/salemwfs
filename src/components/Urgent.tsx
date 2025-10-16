
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';

export default function Urgent() {
    return (
        <div className='my-20'>
            <div className='space-y-4'>

                

                <div className='flex justify-center gap-2 items-center animate-pulse '>
                    <p className='bg-[#f54a2c] px-4 py-2 w-fit rounded-4xl font-bold text-[14px]'>
                        <span className='pr-2'>&#x26A1;</span>ONLY 2 SPOTS LEFT TODAY
                    </p>
                    <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
                        <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse delay-75"></span>
                        <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse delay-150"></span>
                    </div>
                </div>


                    <div>
                        <a href="https://calendly.com/salemfba/mentorship-call" target="_blank">
                            <div className='group flex items-center gap-2 bg-linear-to-r from-yellow-400 to-yellow-500 px-6 py-4 w-fit mx-auto font-bold text-black text-sm md:text-md lg:text-lg rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer'>
                                <span> Claim Your Spot Now - 2 Slots Remaining</span>
                                <ArrowRight className='bg-black text-white rounded-full p-1.5 w-8 h-8 transition-transform group-hover:translate-x-2'/>
                            </div>
                        </a>
                    </div>


                <div>
                    <p className='w-fit mx-auto text-[#ff5537] font-semibold text-[13px] animate-pulse '>&#9200; Spots filling fast - Don't miss your chance!</p>
                </div>

                 <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-6">
                    <div className="flex -space-x-2">
                        <div className="w-10 h-10 rounded-full bg-accent/30 border-2 border-gray-600/40"><img src='/dan.png' className='w-full h-full object-cover rounded-full'/></div>
                        <div className="w-10 h-10 rounded-full bg-accent/30 border-2 border-gray-600/40"><img src='/lyn.png' className='w-full h-full object-cover rounded-full'/></div>
                        <div className="w-10 h-10 rounded-full bg-accent/30 border-2 border-gray-600/40"><img src='/lambo.png' className='w-full h-full object-cover rounded-full'/></div>
                        <div className="w-10 h-10 rounded-full bg-accent/30 border-2 border-gray-600/40 flex items-center justify-center text-xs">
                        +12
                        </div>
                    </div>
                    <span>12 entrepreneurs booked calls in the last 24 hours</span>
            </div>

            </div>
        </div>
    )
}