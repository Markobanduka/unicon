import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Picture1 from "@/assets/images/Picture1.jpg";
import Picture2 from "@/assets/images/Picture2.jpg";
import Picture3 from "@/assets/images/Picture3.jpg";
import Picture4 from "@/assets/images/Picture4.jpg";
import Picture5 from "@/assets/images/Picture5.jpg";
import Picture6 from "@/assets/images/Picture6.jpg";

const AboutUsSection = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="About Us"
        title="Our Story & Mission"
        description="Discover who we are, what drives us, and how we bring the best to you."
      />
      <div className="p-10 max-w-3xl mx-auto  space-y-4  md:text-lg leading-relaxed">
        <p>
          <strong className="underline">UNICON Int. Ltd.</strong> is an
          Electrical, Mechanical, and ICT contracting, engineering, and
          consultancy company specializing in installations, configurations, and
          maintenance of systems—whether installed by us or third parties.
        </p>
        <p>
          Although relatively young, UNICON is a fast-growing company with a
          team of highly qualified professionals who bring vast experience and
          strong reputations across Uganda and East Africa. Our vision is to
          enhance service quality in these fields for both public and private
          clients.
        </p>
        <p>
          We assist our clients in creating customized power solutions tailored
          to their unique preferences, ensuring comfortable and efficient living
          and working environments. The name <strong>UNICON</strong> is
          synonymous with quality and excellence within the construction
          industry and beyond.
        </p>
        <p>
          Our expertise comes from years of experience and professional
          qualifications. With a strong infrastructure, we provide design,
          procurement, project management, and execution of projects of varying
          sizes and complexities.
        </p>
        <div className="flex justify-center pb-9 pt-4">
          <Image alt="Image of our project" src={Picture1} />
        </div>

        <h3 className="italic underline">Company Profile</h3>
        <div>
          <p>
            UNICON, is mainly involved in Electrical and Mechanical Engineering
            and contracting, but also undertakes turnkey design/build projects
            in order to provide the client with the best solutions and excellent
            value engineering using the latest technology and systems. We
            undertake all associated works related to project requirements like:
          </p>
          <div className="pt-8">
            <ul className="list-disc list-outside pl-4">
              <li className="indent-2">
                Supply, installation & commissioning of various electrical
                installation
              </li>
              <li className="indent-2">
                HV and LV Transmission Lines, Substations and Rural
                Electrification works
              </li>
              <li className="indent-2">
                Supply and installation of Generators, UPS and Voltage
                Stabilizers
              </li>
              <li className="indent-2">
                Suppliers of electrical materials and equipment
              </li>
              <li className="indent-2">
                Voice & Data cabling, LAN & WAN networks
              </li>
              <li className="indent-2">PABX supply and installation</li>
              <li className="indent-2">CCTV surveillance systems</li>
              <li className="indent-2">Public Address Systems</li>
              <li className="indent-2">Fire Detection and Alarm Systems</li>
              <li className="indent-2">Access Control, Power Stations</li>
              <li className="indent-2">
                Air Conditioning, ventilation and mechanical works, to mention
                but a few
              </li>
            </ul>

            <div className="py-8 flex flex-col md:flex-row items-center">
              <Image
                src={Picture2}
                alt="Image of our project"
                className="w-56 h-60 md:w-60 md:h-64 lg:w-80 lg:h-96"
              />

              <div className="flex p-4 leading-normal md:leading-9">
                We follow a standard international operating system and
                guidelines to ensure that all our projects are completed within
                the time frame. Subsequently, we offer quality, effective
                management, workmanship and service backup that is unsurpassed
                and incomparable.
              </div>
            </div>
            <div className="py-6">
              <h3 className="italic underline">Staff Resource</h3>
              <p className="py-4">
                Unicon&apos;s strengths include a clear corporate structure and
                planning, along with a multilingual and highly qualified team.
                Our permanent staff consists of Managers, Coordinators, Contract
                and Project Managers, Site Managers, Electricians, and an
                efficient back-office team, including Financial and Procurement
                Managers, among others. The cosmopolitan nature of our work
                force at all levels our organization enables us to fulfill our
                aim of providing a high level of client service and
                satisfaction. Our Personnel are versatile to all kinds of
                working environments and standards. Frequent training sessions
                conducted by management in all aspects of our operations and
                technology updates, ads up to our staff&apos;s performance in
                their respective fields. Some of the aspects of training include
                quality control, health & safety, first aid, management skills
                and updates on latest technology and equipment to ensure
                excellent efficiency and expertise enabling them to work in
                close collaboration with consultants, architects and clients.
              </p>
              <div className="flex justify-center ">
                <Image src={Picture3} alt="Image of our stuff" />
              </div>
            </div>
            <div className="py-6 mb-10">
              <h3 className="italic underline">Procurement</h3>
              <div className="py-6">
                <p className="mb-2">
                  In comparison to our craftsmanship, the use of superior
                  materials is second to none. This is selectively done by our
                  procurement team which maintains a database of market contacts
                  and vigorously surveys all markets for the highest quality and
                  supplies to be sourced.
                </p>

                <div className="md:float-left md:mr-4 md:mb-2 w-48 md:w-64 mx-auto md:mx-0 mt-4 md:mt-0">
                  <Image
                    src={Picture4}
                    alt="Image of our project"
                    className="w-full h-auto"
                  />
                </div>

                <p className="mt-4 md:mt-0">
                  The materials we use are sourced both locally and abroad for
                  maximum choice. We keep databases for all the materials we
                  buy, for future cost comparison so that we are able to meet
                  our client&apos;s needs and budget. The economic benefits in
                  this department by the maintenance of high standards and
                  procedures guarantee our client optimum competitive rates for
                  materials and equipment.
                </p>
              </div>
              <div className="flex md:flex-row flex-col gap-4 md:gap-0 items-center">
                <Image src={Picture5} alt="Image of our materials" />
                <Image src={Picture6} alt="Image of our materials" />
              </div>
            </div>
            <div className="py-6">
              <h3 className="italic underline">Quality Assurance</h3>
              <p className="py-4"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
