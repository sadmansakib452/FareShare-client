import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Ride booking.',
    description:
      'Users can book a ride from their current location to their destination using the app.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Payment.',
    description: 'Users can pay for their ride through the app using a variety of payment methods, including credit cards and digital wallets.',
    icon: LockClosedIcon,
  },
  {
    name: 'Driver verification.',
    description: "Drivers are verified by the platform to ensure that they have a valid driver's license and meet other requirements.",
    icon: ServerIcon,
  },
  {
    name: 'Fare estimation',
    description: "Before booking a ride, riders can get an estimate of the fare for their trip based on the distance and time required.",
    icon: ServerIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Features</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Our ride-sharing app offers a range of features including ride booking, real-time tracking, payment options, driver verification, and more. With a user-friendly interface and a focus on safety and quality service, our app has everything you need for a successful ride-sharing experience.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-vector/people-using-location-app-ordering-taxy_74855-10996.jpg?w=1380&t=st=1683443326~exp=1683443926~hmac=14c6a133719b0b3c131760b517edf121927619c59171f6157fec6be7bc8da3a0"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
