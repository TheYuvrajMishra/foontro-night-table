import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ProofStrip } from "@/components/proof-strip";
import { Transition } from "@/components/transition";
import { Fixed } from "@/components/fixed";
import { Showcase } from "@/components/showcase";
import { How } from "@/components/how";
import { Streaks } from "@/components/streaks";
import { Audiences } from "@/components/audiences";
import { Money } from "@/components/money";
import { Pricing } from "@/components/pricing";
import { MicroUi } from "@/components/micro-ui";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <ProofStrip />
        <Transition />
        <Fixed />
        <Showcase />
        <How />
        <Streaks />
        <Audiences />
        <Money />
        <Pricing />
        <MicroUi />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
