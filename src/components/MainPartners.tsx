import React from 'react'
import Image from 'next/image'
import client1 from '../assets/partners/client1.svg'
import client2 from '../assets/partners/client2.svg'
import client3 from '../assets/partners/client3.svg'
import client4 from '../assets/partners/client4.svg'
import client5 from '../assets/partners/client5.svg'

const MainPartners = () => {
  return (
    <div className="container mx-auto ">
      <div className="py-10 ">
        <div className="flex sm:flex-row flex-col gap-4 items-center justify-between">
          <Image
            src={client1}
            alt="logotipo"
            width={278}
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          />
          <Image
            src={client2}
            alt="logotipo"
            width={116}
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          />
          <Image
            src={client3}
            alt="logotipo"
            width={103}
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          />
          <Image
            src={client4}
            alt="logotipo"
            width={158}
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          />
          <Image
            src={client5}
            alt="logotipo"
            width={180}
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          />
        </div>
      </div>
    </div>
  )
}

export default MainPartners
