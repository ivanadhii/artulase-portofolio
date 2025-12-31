import Image from 'next/image'
import { getAbout, getTeam } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import { PortableText } from 'next-sanity'

export default async function AboutPage() {
  const about = await getAbout()
  const team = await getTeam()

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {about?.title || 'About Artulase'}
          </h1>
          {about?.tagline && (
            <p className="text-xl text-gray-300">{about.tagline}</p>
          )}
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        {/* Company Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            {about?.image && (
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={urlFor(about.image).width(800).height(600).url()}
                  alt="About Artulase"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          <div>
            {about?.description ? (
              <div className="prose max-w-none text-gray-600">
                <PortableText value={about.description} />
              </div>
            ) : (
              <p className="text-gray-600 text-lg">
                Artulase is a professional printing company dedicated to delivering
                high-quality printing services for businesses of all sizes.
              </p>
            )}

            {about?.yearEstablished && (
              <div className="mt-6 text-gray-600">
                <strong>Established:</strong> {about.yearEstablished}
              </div>
            )}
          </div>
        </div>

        {/* Mission & Vision */}
        {(about?.mission || about?.vision) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {about.mission && (
              <div className="bg-blue-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700">{about.mission}</p>
              </div>
            )}

            {about.vision && (
              <div className="bg-green-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700">{about.vision}</p>
              </div>
            )}
          </div>
        )}

        {/* Company Values */}
        {about?.values && about.values.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {about.values.map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Statistics */}
        {about?.stats && about.stats.length > 0 && (
          <div className="bg-gray-900 text-white rounded-lg p-12 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {about.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Section */}
        {team.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member._id} className="text-center">
                  {member.photo && (
                    <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                      <Image
                        src={urlFor(member.photo).width(300).height(300).url()}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.position}</p>
                  {member.bio && (
                    <p className="text-sm text-gray-500">{member.bio}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
