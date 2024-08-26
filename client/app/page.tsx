import {
  CloudArrowUpIcon,
  QrCodeIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  LockClosedIcon,
  RocketLaunchIcon,
  ServerIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const features1 = [
  {
    name: 'Universal HS Code Search',
    description:
      'Effortlessly search for products using HS codes, ensuring accurate categorization and compliance with international trade standards',
    icon: QrCodeIcon,
  },
  {
    name: 'Efficient Product Discovery',
    description: 'Easily locate specific products and services with advanced filters, including HS codes and keywords, saving you time.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Seamless Communication',
    description:
      'Engage with buyers and sellers through our integrated messaging system, facilitating negotiations and fostering strong business relationships.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Global Reach',
    description: 'Expand your business by connecting with a diverse range of companies globally, opening doors to new opportunities.',
    icon: GlobeAltIcon,
  },
];

const features2 = [
  {
    name: 'Create an Account.',
    description:
      'Sign up in minutes to start trading. Create a personalized account to manage your profile, preferences, and transaction history. Our easy registration process ensures you can quickly get started without any hassle.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Browse & Search.',
    description:
      'Use keywords or HS Codes to find the exact products or services you need. Our advanced search functionality allows you to filter results based on specific criteria, making it simple to locate the items that match your business requirements.',
    icon: LockClosedIcon,
  },
  {
    name: 'Connect & Negotiate.',
    description:
      'Directly connect with sellers or buyers to negotiate terms. Our built in messaging system facilitates clear and effective communication, helping you to discuss details, negotiate prices, and establish terms with ease.',
    icon: ServerIcon,
  },
];

export default function MainPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-14">
        <Image
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill={true}
          priority={true}
          className="absolute inset-0 -z-20 h-full w-full object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-gray-900" aria-hidden="true"></div>
        <div className="mx-auto max-w-4xl px-2 py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="font-lastica text-4xl font-light tracking-widest text-white sm:text-6xl lg:text-5xl">Simplifying B2B Trade</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Empowering Businesses to Connect, Trade, and Thrive with HS Code Integration in a Unified Marketplace.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-violet-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </a>
              <a href="#" className="rounded-full px-3.5 py-2.5 text-sm font-semibold leading-6 text-white transition-all duration-300">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:text-center">
            <p className="mt-2 font-lastica text-3xl font-normal tracking-widest text-white sm:text-4xl">Discover the Top Perks of Comprice</p>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              Experience the Benefits that Make Trading Seamless and Efficient on Our Marketplace.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features1.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
                      <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 font-lastica text-3xl font-normal tracking-widest text-white sm:text-4xl">How it Works</p>
                <p className="mt-6 text-lg leading-8 text-gray-500">
                  Get Started in 3 Simple Steps: Learn How to Create an Account, Find What You Need, and Connect with Others.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-500 lg:max-w-none">
                  {features2.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-white">
                        <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-violet-500" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              alt="Product screenshot"
              src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
