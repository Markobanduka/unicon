import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Picture1 from "@/assets/images/Picture1.jpg";
import Picture2 from "@/assets/images/Picture2.jpg";
import Picture3 from "@/assets/images/Picture3.jpg";
import Picture4 from "@/assets/images/Picture4.jpg";
import Picture5 from "@/assets/images/Picture5.jpg";
import Picture6 from "@/assets/images/Picture6.jpg";
import Picture7 from "@/assets/images/Picture7.png";
import Picture8 from "@/assets/images/Picture8.jpg";
import Picture9 from "@/assets/images/Picture9.jpg";
import Picture10 from "@/assets/images/Picture10.jpg";
import Picture11 from "@/assets/images/Picture11.jpg";
import Picture12 from "@/assets/images/Picture12.png";
import Picture13 from "@/assets/images/Picture13.jpg";
import Picture14 from "@/assets/images/Picture14.png";
import Picture15 from "@/assets/images/Picture15.png";
import Picture16 from "@/assets/images/Picture16.png";
import Picture17 from "@/assets/images/Picture17.png";

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
              <div>
                <p className="py-4">
                  UNICON is committed to operating a quality assurance system
                  that complies with British and ISO standards. Implementing
                  these quality systems allows us to demonstrate our adherence
                  to all aspects of contract specifications.
                </p>
                <Image
                  src={Picture7}
                  alt="Image of our project"
                  className="w-full h-auto sm:w-72 md:w-96  sm:mx-auto"
                />

                <p className="py-4">
                  Additionally, our company has a Siemon Cabling Systems U.S.A
                  certified designer and installer, ensuring that our voice and
                  data installations meet the regulations and specifications set
                  by this leading manufacturer of voice and data cabling
                  systems.
                </p>
                <Image
                  src={Picture8}
                  alt="Image of our project"
                  className="w-full h-auto sm:w-72 md:w-96  sm:mx-auto"
                />
              </div>
            </div>
            <div className="py-6">
              <h3 className="italic underline">Execution/Construction</h3>
              <div>
                <p className="py-4">
                  After thorough project planning has been done, any elements
                  where off-site prefabrication would be beneficial can easily
                  be isolated. This optimizes on-site installation, bringing
                  about greater efficiency, reduced costs and shorter
                  installation periods. Our industry is Labour intensive and we
                  place great emphasis on the quality and accuracy of our human
                  resources. Our company&apos;s installation team are dedicated
                  tradesmen, well-motivated and highly skilled. They are
                  supervised by thoroughly trained and experienced field
                  engineers and foremen. We recognize and recruit highly
                  talented professionals to keep-up the high standards. This is
                  maintained by continuous and frequent in-house training
                  sessions and performance appraisals. We undertake this in
                  order to ensure that all our projects are executed
                  successfully, with minimal disruption to other trade
                  activities.
                </p>
                <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-center">
                  <Image
                    src={Picture9}
                    alt="Image of our project"
                    className="w-full h-auto sm:w-72 md:w-96  sm:mx-auto"
                  />
                  <Image
                    src={Picture10}
                    alt="Image of our project"
                    className="w-full h-auto sm:w-72 md:w-96  sm:mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="py-6">
              <h3 className="italic underline">Commissioning</h3>
              <div>
                <p className="py-4">
                  UNICON&apos;s experienced and qualified engineers ensure that
                  the pre-commissioning of systems is carried out effectively.
                  This process can be conducted either in collaboration with the
                  client&apos;s engineering team or consultant, or
                  independently. A detailed inspection is performed to verify
                  compliance with specified requirements, with close attention
                  given to any necessary remedial actions. This approach
                  guarantees that the final system meets the required standards
                  for handover. A comprehensive report of all tests conducted at
                  the client&apos;s premises is provided to both the client and
                  the consultant, ensuring a reliable reference in case of any
                  installation issues or when test results are required by
                  authorities. Reports are typically delivered in both hard copy
                  and digital format. Additionally, working drawings are
                  regularly updated, and operating and maintenance manuals are
                  compiled to facilitate seamless integration for the
                  client&apos;s engineering team at project handover.
                </p>
                <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-center">
                  <Image
                    src={Picture11}
                    alt="Image of our project"
                    className="w-full h-auto sm:w-72 md:w-96  sm:mx-auto"
                  />
                  <Image
                    src={Picture12}
                    alt="Image of our project"
                    className="w-full h-auto sm:w-72 md:w-96  sm:mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="py-6">
              <h3 className="italic underline">Electrical Installations</h3>
              <div>
                <p className="py-4">
                  At Unicon, we work with the best Electrical Installations
                  Material manufacturers, who are well known in the field and
                  whose materials are rated the best in the world. Among the
                  manufacturers we work with include:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-5 items-center">
                  <div>
                    <ul className="list-disc ">
                      <li>Bosch Security Systems (PTY)</li>
                      <li>Power Technics Limited</li>
                      <li>Fitzgerald Lighting UK</li>
                      <li>Switchgear & Controls Ltd.</li>
                      <li>Philips Lighting</li>
                      <li>Marshall Tufflex</li>
                      <li>Mantrac (Caterpillar)</li>
                      <li>ABB</li>
                      <li>MEM</li>
                      <li>MK</li>
                      <li>Clipsal</li>
                      <li>Legrand, and many more</li>
                    </ul>
                  </div>
                  <div>
                    <Image src={Picture13} alt="Image of our project" />
                  </div>
                </div>
                <p className="py-4">
                  With these installations, we normally try and advice the
                  client where necessary, but also try and work with the
                  materials which are specified by the consultant so as to have
                  their custom design of the project.
                </p>
                <p className="py-4">
                  As Electrical contractors we work and follow specifications
                  and regulations of international standards bodies, both local
                  and International, governing Electrical Installations e.g.
                  ERB, IEE, so as to avoid accidents during Installations and
                  future accidents, which may occur as a result of poor
                  workmanship.
                </p>
              </div>
            </div>
            <div>
              <h3 className="italic underline">
                Electronic Security Systems - Bosch
              </h3>
              <p className="py-4">
                We are the authorized dealer-distibutors and installer of Bosch
                Security Systems in Eastern/Sub-Saharan Africa. For over 100
                years Bosch name has stood for quality and reliability. Bosch
                Security Systems proudly offers a wide range of:
              </p>
              <ul className="list-disc">
                <li>Fire Detection and Alarm systems</li>
                <li>CCTV and Video surveillance, IP Video systems </li>
                <li>
                  Management and Communication systems (Public Address,
                  Conference and Congress Systems)
                </li>
                <li>Intrusion and Social Alarm systems</li>
                <li>
                  Smart building management systems for integration of all
                  services in one, etc.
                </li>
              </ul>
              <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-center py-4">
                <Image
                  src={Picture14}
                  alt="Image of our project"
                  className="w-full h-auto sm:w-72 md:w-96  sm:mx-auto"
                />
                <Image
                  src={Picture16}
                  alt="Image of our project"
                  className="w-full h-auto sm:w-72 md:w-96  sm:mx-auto"
                />
              </div>
              <p className="py-4 ">
                Being a Bosch Partner, Unicon is supplier of choice of
                innovative technology backed by highest level of service and
                support. When you need solutions you can rely on, choose Bosch
                and Unicon.{" "}
              </p>
              <p className="text font-bold italic">
                Bosch equipment has been installed in the following premises in
                Uganda: Serena Hotel & Conference Center, Sheraton Hotel,
                Entebbe Airport, Statistics House - UBOS, Workers House, Uganda
                Police City Surveillance and many others.
              </p>
              <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-center py-4">
                <Image
                  src={Picture15}
                  alt="Image of our project"
                  className="w-full h-auto sm:w-72 md:w-96  sm:mx-auto"
                />
                <Image
                  src={Picture17}
                  alt="Image of our project"
                  className="w-full h-auto sm:w-72 md:w-96  sm:mx-auto"
                />
              </div>
            </div>
            <div className="py-6">
              <h3 className="italic underline">
                Information and Communication Technology Installations
              </h3>
              <p className="py-4">
                At Unicon we believe that every business or institution in the
                world has to have a very good ICT installation as this is where
                all the communication to their client depends. ICT has proved to
                be the backbone of every business such that, many institutions
                are now investing heavily in it, so that they cater for every
                new IT technology coming into existence. As we all know, ICT is
                a competitive industry with every manufacturer trying to come
                with something new every day, so as to become the market
                leaders. With this in mind, it has become very hard investing in
                your LAN system.
              </p>
              <p>
                This is why, at Unicon, we are not just your ICT installers. We
                have professionals who will advise you on the best type of
                cabling system for your premises, ensuring that you won&apos;t
                need to reinvest when new technology emerges.
              </p>
            </div>
            <div className="py-6">
              <h3 className="italic underline">Voice and Data Installations</h3>
              <p className="py-4">
                Structured Cabling, is the backbone of every LAN, as even though
                companies have come up, with the wireless system, cabling
                systems, have proved to be consistent. This is why at Unicon, we
                have invested in this department, so as to give our clients the
                best product and services, which will be a value to their money.
                Unicon is also a SIEMON Cabling System U.S.A. certified Designer
                and Installer company. This means that for every system done by
                us, using Siemon cabling System products, will have a warranty
                for a very long period of time. Recently, our staff has
                undertake a training and obtain certification by CLIPSAL,
                Australia as well as CISCO Systems, in order to be able to give
                our Clients the wider choice and better service. We have a good
                workmanship, and every project done by us comes with a warranty
                for Labour, Product and Cable. Just like our Electrical
                Installation department, we work with the best cabling systems
                manufacturers in the world. These include:
              </p>
              <ul className="list-disc py-4">
                <li>Siemon Cabling System (USA)</li>
                <li>Giganet Solutions</li>
                <li>Legrand</li>
                <li>Netsan Cabling System</li>
                <li>Clipsal System</li>
                <li>D-Link Systems</li>
                <li>Krone Systems </li>
              </ul>
              <p>
                Unicon is a fully ICT company, which means that, apart from
                Installing cabling systems, we also supply and install active
                equipments such as Network Switches, Telephone PABX&apos;s,
                Computers, Firewall Hardware and Software applications as per
                the client requirements. We work with the following Active
                equipments manufacturers:
              </p>
              <ul className="list-disc py-4">
                <li>Siemens</li>
                <li>Cisco</li>
                <li>D-Link</li>
                <li>Accton</li>
                <li>Alcatel</li>
                <li>Hewlett Packard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
