
import { Header } from "../components/organisms/Header"

import { Badge } from "../components/ui/badge"
import Logo from "../assets/logo.svg"


export const Watcher = () => {

  return (
    <>
      <Header />

      <section className="">
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          {/* <div className="absolute top-3 left-3 md:top-5 md:left-5 lg:top-7 lg:left-7">
            <div className="flex justify-center items-center gap-3">
              <div className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 bg-red-600 rounded-full flex justify-center items-center animate-pulse">
              </div>
              <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">Ao vivo!</h2>
            </div>
          </div> */}
          <iframe
            src="https://customer-f33zs165nr7gyfy4.cloudflarestream.com/6b9e68b07dfee8cc2d116e4c51d6a957/iframe?poster=https%3A%2F%2Fcustomer-f33zs165nr7gyfy4.cloudflarestream.com%2F6b9e68b07dfee8cc2d116e4c51d6a957%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
            style={{ border: 'none', position: 'absolute', height: '70%', width: '70%', transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen={true}
          ></iframe>
        </div>
      </section>

      <section className="px-52 py-12">
        <h1 className="text-4xl font-semibold mb-6">Ultimos episódios</h1>
        <div className="h-96 overflow-scroll">
          <div className="flex p-4 gap-6">
            <img src="https://placehold.co/200x150" alt="" />
            <div>
              <h3 className="text-2xl font-semibold">Episódio 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero debitis consequatur, adipisci eius hic quasi architecto voluptatem perspiciatis aliquid qui laudantium aliquam, vitae autem odio doloremque? Autem excepturi laudantium nemo.</p>
            </div>
          </div>

          <div className="flex p-4 gap-6">
            <img src="https://placehold.co/200x150" alt="" />
            <div>
              <h3 className="text-2xl font-semibold">Episódio 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero debitis consequatur, adipisci eius hic quasi architecto voluptatem perspiciatis aliquid qui laudantium aliquam, vitae autem odio doloremque? Autem excepturi laudantium nemo.</p>
            </div>
          </div>

          <div className="flex p-4 gap-6">
            <img src="https://placehold.co/200x150" alt="" />
            <div>
              <h3 className="text-2xl font-semibold">Episódio 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero debitis consequatur, adipisci eius hic quasi architecto voluptatem perspiciatis aliquid qui laudantium aliquam, vitae autem odio doloremque? Autem excepturi laudantium nemo.</p>
            </div>
          </div>

          <div className="flex p-4 gap-6">
            <img src="https://placehold.co/200x150" alt="" />
            <div>
              <h3 className="text-2xl font-semibold">Episódio 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero debitis consequatur, adipisci eius hic quasi architecto voluptatem perspiciatis aliquid qui laudantium aliquam, vitae autem odio doloremque? Autem excepturi laudantium nemo.</p>
            </div>
          </div>

          <div className="flex p-4 gap-6">
            <img src="https://placehold.co/200x150" alt="" />
            <div>
              <h3 className="text-2xl font-semibold">Episódio 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero debitis consequatur, adipisci eius hic quasi architecto voluptatem perspiciatis aliquid qui laudantium aliquam, vitae autem odio doloremque? Autem excepturi laudantium nemo.</p>
            </div>
          </div>

          <div className="flex p-4 gap-6">
            <img src="https://placehold.co/200x150" alt="" />
            <div>
              <h3 className="text-2xl font-semibold">Episódio 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero debitis consequatur, adipisci eius hic quasi architecto voluptatem perspiciatis aliquid qui laudantium aliquam, vitae autem odio doloremque? Autem excepturi laudantium nemo.</p>
            </div>
          </div>

          <div className="flex p-4 gap-6">
            <img src="https://placehold.co/200x150" alt="" />
            <div>
              <h3 className="text-2xl font-semibold">Episódio 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero debitis consequatur, adipisci eius hic quasi architecto voluptatem perspiciatis aliquid qui laudantium aliquam, vitae autem odio doloremque? Autem excepturi laudantium nemo.</p>
            </div>
          </div>

          <div className="flex p-4 gap-6">
            <img src="https://placehold.co/200x150" alt="" />
            <div>
              <h3 className="text-2xl font-semibold">Episódio 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero debitis consequatur, adipisci eius hic quasi architecto voluptatem perspiciatis aliquid qui laudantium aliquam, vitae autem odio doloremque? Autem excepturi laudantium nemo.</p>
            </div>
          </div>

          <div className="flex p-4 gap-6">
            <img src="https://placehold.co/200x150" alt="" />
            <div>
              <h3 className="text-2xl font-semibold">Episódio 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero debitis consequatur, adipisci eius hic quasi architecto voluptatem perspiciatis aliquid qui laudantium aliquam, vitae autem odio doloremque? Autem excepturi laudantium nemo.</p>
            </div>
          </div>



        </div>
      </section>

      <footer className="bg-[#FD2273] px-16 py-12 text-[#00BEC3]">
        <div className="flex justify-evenly">
          <div>
            <h4 className="text-base">Oferecimento</h4>
            <img src={Logo} alt="" />
          </div>
          <div>
            <h4 className="text-2xl font-medium">Podcasts</h4>
            <ul>
              <li className="text-base">Anarquismo Sob Regras</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-medium">Coisas</h4>
            <ul>
              <li className="text-base">Assinaturas <Badge variant="outline" className="text-[#00BEC3]">Em breve</Badge></li>
              <li className="text-base">Loja <Badge variant="outline" className="text-[#00BEC3]">Em breve</Badge></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center center mt-8">
          <p>Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}

