import { Button } from "@/components/ui/button";

const ContactUs = () => {
  return (
    <div className="text-center space-y-8">
      <section className="px-4">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <form className="mt-4 space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label htmlFor="name" className="block text-left">Name</label>
              <input type="text" id="name" className="w-full mt-1 p-2 border rounded" />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-left">Email</label>
              <input type="email" id="email" className="w-full mt-1 p-2 border rounded" />
            </div>
          </div>
          <div className="flex-1">
            <label htmlFor="message" className="block text-left">Message</label>
            <textarea id="message" className="w-full mt-1 p-2 border rounded" rows="4"></textarea>
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;