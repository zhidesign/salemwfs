import Image from "next/image";
import { Button } from '@/components/ui/button';
import { ArrowDown, Star, TrendingUp, DollarSign, Clock } from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function Home() {
  return (
    <>

    {/*header section*/}
    <div className='max-w-6xl px-14 mx-auto'> 
      {/*mini header*/}
      <div className="bg-primary/10 shadow-lg flex justify-center items-center gap-2 px-4 py-2  outline-none rounded-full w-fit mx-auto text-sm font-semibold mb-8 mt-16 text-center">
        <Star className="w-4 h-4 hidden sm:inline text-primary" />
        <p className='text-primary text-sm md:text-[1.1rem]'>For Action Takers Ready To Build A Proven Walmart Business</p>
      </div>

      {/*main title*/}
      <h1 className='text-center text-3xl md:text-5xl font-bold leading-tight'>
        You&apos;re One Step Away From <br className='sm:inline '/>Learning How To Build A 
        <span className='bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'><br/>$10,000/Month <br className='sm:hidden md:inline lg:hidden'/>Walmart Business</span><br className='sm:inline'/> In 90 Days Or Less
      </h1>
      <p className='mt-8 mb-12 text-sm md:text-lg text-gray-400 text-center '> The best part is... if you don&apos;t see results, <span className='text-primary font-bold underline'>you don&apos;t pay a dime</span></p>

      {/*video*/}
      <div className='mx-auto relative aspect-video rounded-xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.6)]'>
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/bxeSY5WtwB8"
          title="How to Sell on Walmart Marketplace"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/*want access transition*/}
      <p className='mt-20 text-2xl md:text-4xl text-center font-bold text-primary'>WANT ACCESS?</p>
      <div className='flex flex-col gap-8 items-center justify-center mb-20'>
        <Button variant='warning' className='mt-5 animate-pulse'>WARNING: THIS ISN&apos;T FOR EVERYONE </Button>
        <ArrowDown className='w-8 h-8 text-primary animate-bounce'/>
      </div>
    </div>

    {/*2nd whole new section detailing benefits */}
    <section className='bg-gradient-secondary'>
    <div className="max-w-6xl px-14 mx-auto">

      {/*grid of the features of the program */}
      <div className='pt-20 pb-30 grid md:grid-cols-2 gap-20 items-center justify-center'>

          {/*column 1 */}
          <div className='flex flex-col gap-5'>
            <h1 className='font-bold text-3xl mb-4'>What You&apos;ll Get Inside:</h1>
            <div className='flex flex-row gap-4'>

              <div className='bg-primary rounded-full p-2 h-fit'>
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>

              <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-xl'>The Walmart Profit Blueprint</h1>
                <p className='text-muted-foreground'>Step-by-step system to identify winning products and scale to $15K+/month</p>
              </div>

            </div>

            <div className='flex flex-row gap-4'>
              <div className='bg-primary rounded-full p-2 h-fit'>
                <DollarSign className="w-6 h-6 text-primary-foreground" />
              </div>

              <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-xl'>Zero-to-Hero Launch Strategy</h1>
                <p className='text-muted-foreground'>How to start from scratch and build a profitable business in 90 days</p>
              </div>
            </div>

            <div className='flex flex-row gap-4'>
              <div className='bg-primary rounded-full p-2 h-fit'>
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>

              <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-xl'>Done-For-You Templates</h1>
                <p className='text-muted-foreground'>Product listings, supplier scripts, and optimization tools included</p>
              </div>
            </div>

            <div className='flex flex-col gap-2 bg-primary/10 border border-primary/20 rounded-lg p-6 mt-4'>
              <h1 className='font-bold text-primary text-lg md:text-xl'>🎯 BONUS: Private Mastermind Access</h1>
              <p className='text-muted-foreground text-sm md:text-sm'>Join our exclusive Discord Community of successful Walmart sellers</p>
            </div>

          </div>
          {/*column 2*/}
          <div className='mx-auto'>
            <LeadCaptureForm/>
          </div>

      </div>
      
      {/*Testimonials*/}
      <div className='flex flex-col items-center gap-5'>
          <h1 className='font-bold text-2xl text-center mb-8'>See What Others are Saying About Our Program</h1>

          {/*Testimonial Grid */}
          <div className='grid md:grid-cols-3 gap-6 mb-12'>
            <div className='border rounded-lg p-6'>
              <div className='flex flex-row justify-center mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 text-yellow-400 fill-current'/>
                  ))}
              </div>
              <p className='text-center'>&quot;I initially started with Amazon FBA but Salem helped me transition into Walmart as well
                so now I have multiple sources of income.&quot;
              </p>
              <p className='mt-4 text-center font-bold'>- John D.</p>
            </div>

            <div className='border rounded-lg p-6'>
              <div className='flex flex-row justify-center mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 text-yellow-400 fill-current'/>
                  ))}
              </div>
              <p className='text-center'>&quot;I initially started with Amazon FBA but Salem helped me transition into Walmart as well
                so now I have multiple sources of income.&quot;
              </p>
              <p className='mt-4 text-center font-bold'>- John D.</p>
            </div>

            <div className='border rounded-lg p-6'>
              <div className='flex flex-row justify-center mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 text-yellow-400 fill-current'/>
                  ))}
              </div>
              <p className='text-center'>&quot;I initially started with Amazon FBA but Salem helped me transition into Walmart as well
                so now I have multiple sources of income.&quot;
              </p>
              <p className='mt-4 text-center font-bold'>- John D.</p>
            </div>
          </div>


          <a href="https://calendly.com/salemfba/mentorship-call?month=2025-07" target="_blank"><Button variant='cta' size='lg' className='cursor-pointer'>Book a free call</Button></a>
      </div>

    </div>
    </section>

    {/*Footer*/}
    <footer className='text-center mt-30 py-10 border-t text-xs px-10'>
      <p className='text-muted-foreground'>© 2025 SalemWFS. All rights reserved.</p>
      <p className='mt-2 text-muted-foreground' >
        Disclaimer: Results may vary. This is not a get-rich-quick scheme. 
        Success requires dedication and following the proven system.
      </p>
      </footer>


    </>
  );
}
