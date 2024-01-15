import Hero from '../components/layout/Hero';
import HomeMenu from '../components/layout/HomeMenu';
import SectionHeaders from '../components/layout/SectionHeaders';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader="Our story" mainHeader="About us" />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Welcome to ST Pizza, where passion meets perfection in every pizza
            pie! At ST Pizza, we take pride in crafting a cosmic culinary
            experience that goes beyond the ordinary.
          </p>
          <p>
            At ST Pizza, it is not just about pizza; it is about community. We
            are more than a restaurant; we are a space where friends and
            families come together to share laughter, stories, and of course,
            incredible pizza.
          </p>

          <p>
            Join us on a journey through the cosmos of taste, and discover why
            ST Pizza is not just a pizza place – it is an experience.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders subHeader="Don't hesitate" mainHeader="Contact us" />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+234345456789"
          >
            +234 345 456 789
          </a>
        </div>
      </section>
    </>
  );
}
