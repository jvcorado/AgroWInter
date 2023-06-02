import Image from 'next/image'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';                                            
import { Banner } from '@/components/Banner'
import { Section2 } from '@/components/Section2'
import { Section3 } from '@/components/Section3'
import { Section4 } from '@/components/Section4'
import { Section5 } from '@/components/Section5'
import { Section6 } from '@/components/Section6'
import { Footer } from '@/components/Footer';


export default function Home() {
  return (
    <main>
      <Banner/>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Footer></Footer>
    </main>
  )
}
