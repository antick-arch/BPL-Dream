import React from 'react';
import bannerBg from '../../assets/bg-shadow.png'
import bannerLogo from '../../assets/banner-main.png'
const Banner = () => {
    return (
        <div
  className="hero min-h-[70vh] rounded-3xl bg-black"
  style={{
    backgroundImage:
      `url(${bannerBg})`,
  }}
>
  <div className="hero-content text-neutral-content text-center">
    <div className="space-y-6">
      <img className='place-self-center' src={bannerLogo} alt="bannerLogo" />
      <h2 className='text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
      <p className='text-2xl text-white/70'>Beyond Boundaries Beyond Limits</p>
      <div className='p-1.5 border border-[#E7FE29] w-fit mx-auto rounded-xl'>
        <button className="btn bg-[#E7FE29] border-none text-[1rem] font-bold rounded-xl">Claim Free Credit</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Banner;