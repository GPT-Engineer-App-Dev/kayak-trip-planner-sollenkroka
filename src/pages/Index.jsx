import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="text-center space-y-8">
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-placeholder.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Welcome to Kayak Trips from Sollenkroka</h1>
        </div>
      </section>
      <section className="px-4">
        <h2 className="text-2xl font-semibold">Plan Your Adventure</h2>
        <p className="mt-2 text-lg">Discover the beauty of Sollenkroka by planning your kayak trip with us. Choose your dates, select your kayak, and get ready for an unforgettable experience.</p>
      </section>
      <section className="px-4">
        <h2 className="text-2xl font-semibold">Explore the Map</h2>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.123456789!2d18.69869029448855!3d59.372972225392466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDIyJzIzLjAiTiAxOMKwNDEnNTYuNiJF!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </section>
      <section className="px-4">
        <h2 className="text-2xl font-semibold">Plan Your Trip</h2>
        <form className="mt-4 space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label htmlFor="date" className="block text-left">Date</label>
              <input type="date" id="date" className="w-full mt-1 p-2 border rounded" />
            </div>
            <div className="flex-1">
              <label htmlFor="people" className="block text-left">Number of People</label>
              <input type="number" id="people" className="w-full mt-1 p-2 border rounded" />
            </div>
          </div>
          <div className="flex-1">
            <label htmlFor="kayak" className="block text-left">Kayak Type</label>
            <select id="kayak" className="w-full mt-1 p-2 border rounded">
              <option value="single">Single Kayak</option>
              <option value="double">Double Kayak</option>
            </select>
          </div>
          <Button type="submit" className="w-full">Plan Your Trip</Button>
        </form>
      </section>
    </div>
  );
};

export default Index;