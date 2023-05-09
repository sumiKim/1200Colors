import FeaturedColors from '../components/FeaturedColors';

export default function ColorPage() {
  return (
    <div className='bg-white h-screen lg:pl-60 lg:pr-5 lg:pt-4 flex justify-center'>
      <div className='h-3/4 w-fit overflow-scroll'>
        {/* @ts-expect-error Server Component */}
        <FeaturedColors />
      </div>
    </div>
  );
}
