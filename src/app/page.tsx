import Navbar from "@/components/Navbar";

import Banner from "@/components/Banner";

import About from "@/components/About";

import Cateringbanner from "@/components/Cateringbanner";
import CateringCards from "@/components/CateringCards";
import CateringMenu from "@/components/CateringMenu";

import CateringGallery from "@/components/CateringGallery";

import Testimonials from "@/components/Testimonials";

import ContactForm from "@/components/ContactForm";
import Copyright from "@/components/Copyright";



export default function Home() {
  return (
<>

<Navbar/>
<Banner/>
<About/>
<Cateringbanner/>
<CateringCards/>
<CateringMenu/>
<CateringGallery/>

<Testimonials/>
<ContactForm/>
<Copyright/>


</>

  );
}
