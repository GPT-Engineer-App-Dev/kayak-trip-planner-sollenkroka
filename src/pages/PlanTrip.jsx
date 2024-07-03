import { Button } from "@/components/ui/button";

const PlanTrip = () => {
  return (
    <div className="text-center space-y-8">
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

export default PlanTrip;