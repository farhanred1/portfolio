import Header from "../components/Header"
import Footer from "../components/Footer"
import ContactImg from "../assets/Contact.png"
import { TbSend } from "react-icons/tb"

function Contact() {
  
  return (

    <div className="min-h-screen flex flex-col text-stone-50 bg-[#222831]">
      <Header />

      <main className="container mx-auto p-7 pt-20 flex-1 text-center flex flex-col justify-center">
        <div className='md:max-w-6xl m-auto'>

          <div className='grid md:grid-cols-2 justify-center items-center gap-8 pb-10'>

            <div className='flex flex-col justify-start gap-2 text-left'>
              <h1 className='text-zinc-100 py-2 md:text-6xl text-4xl font-semibold'>
                Got a project in <span className="text-[#20B486] font-bold">mind?</span>
              </h1>
              <div className="flex items-center justify-center">
                <img src={ContactImg} className='' alt="Hero Image" />
              </div>
            </div>
            <form target="" action="https://formspree.io/f/xknlyjke" method="POST">
              <div className="flex flex-col justify-start gap-6">

                <div className="flex flex-col justify-center gap-6">

                  <div className="flex flex-col justify-center gap-6 lg:grid lg:grid-cols-2">

                    <div className="flex-col justify-start gap-2 inline-flex">
                      <div className="flex">
                        <label className="text-zinc-100 text-lg font-bold" htmlFor="nameInput">Your name</label>
                      </div>

                      <div className="p-4 bg-zinc-700 bg-opacity-50 rounded-2xl">
                        <input
                          id="nameInput"
                          name="name"
                          type="text"
                          className="w-full text-zinc-100 text-lg font-bold bg-transparent outline-none"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-col justify-start gap-2">
                      <div className="flex">
                        <label className="text-zinc-100 text-lg font-bold" htmlFor="emailInput">Your email</label>
                      </div>

                      <div className="p-4 bg-zinc-700 bg-opacity-50 rounded-2xl">
                        <input
                          id="emailInput"
                          name="email"
                          type="email"
                          className="w-full text-zinc-100 text-lg font-bold bg-transparent outline-none"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>

                  </div>

                  <div className="formbottom flex-col gap-2 flex">
                    <div className="flex">
                      <label className="text-zinc-100 text-lg font-bold" htmlFor="messageInput">Your Message</label>
                    </div>

                    <div className="p-4 bg-zinc-700 bg-opacity-50 rounded-2xl">
                      <textarea
                        id="messageInput"
                        name="message"
                        className=" w-full text-zinc-100 text-lg font-bold bg-transparent outline-none"
                        placeholder="Message"
                        rows={6}
                        required
                      />
                    </div>
                  </div>

                </div>
                
                <div className="flex">
                  <button 
                  className="px-8 py-2.5 bg-[#20B486] rounded-3xl font-bold justify-center items-center gap-2.5 inline-flex whitespace-nowrap"
                  type="submit"
                  >
                    Send Message
                    <TbSend />
                  </button>
                </div>

              </div>
            </form>


          </div>

        </div>
      </main>

      <Footer />
    </div>
  )

}

export default Contact