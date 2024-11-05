import { PROFILE } from '../constants';
import profilePic from '../assets/robertButcher1.jpg';

export const HeroSection = () => {
  return (
    <>
      <div
        className="relative flex min-h-screen items-end justify-center"
        id="hero">
        <img
          src={profilePic}
          alt={PROFILE.name}
          className="absolute inset-0 z-10 h-full w-full object-cover"></img>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%"></div>
      </div>
    </>
  );
};
