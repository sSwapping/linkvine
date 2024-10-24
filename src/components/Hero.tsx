"use client";

const Hero = () => {
  return (
    <div className='max-w-sm p-4 mx-auto mt-32 md:max-w-2xl lg:max-w-screen-2xl md:mt-40 md:p-8'>
      <div className='max-w-xs-6 md md:mb-8 md:max-w-md'>
        <h1 className='text-4xl font-bold md:text-6xl'>
          Your link <br />
          for everything
        </h1>
        <h2 className='mt-2 text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 md:mt-6'>
          Share your links, social profiles, contact info and more on one page
        </h2>
      </div>
      <form className='flex flex-col gap-4 text-sm md:items-center md:flex-row'>
        <div className='px-2 border rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-900/20'>
          <span className='py-4'>linksvine.sswapping.dev/</span>
          <input
            type='text'
            className='py-4 bg-transparent focus-visible:outline-none'
            placeholder='username'
          />
        </div>
        <button
          type='submit'
          className='px-6 py-4 bg-blue-600 rounded-lg hover:bg-blue-500 text-neutral-50'
        >
          Join for Free
        </button>
      </form>
    </div>
  );
};

export default Hero;
