const UserComment = () => {
  return `    <section id="contact" class="my-10">
      <h2 class="text-xl font-bold mb-5 text-[#7B1FA2]">Get in Touch</h2>
      <form class="bg-white p-6 rounded-lg shadow-md">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Name
          </label>
          <input class="bg-gray-200 p-2 rounded-lg w-full" type="text" id="name" name="name">
          </div>
          <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
          Email
          </label>
          <input class="bg-gray-200 p-2 rounded-lg w-full" type="email" id="email" name="email">
          </div>
          <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="message">
          Message
          </label>
          <textarea class="bg-gray-200 p-2 rounded-lg w-full" id="message" name="message"></textarea>
          </div>
          <button class="bg-cyan-600 p-2 rounded-lg hover:bg-cyan-700 text-white">Submit</button>
          </form>
          </section>`;
};

export default UserComment;
