import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'vsddgaxj',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN || '',
})

const data = {
  hero: {
    _type: 'hero',
    title: 'Artulase',
    subtitle: 'Packaging Solution and Printing',
    description:
      'Dengan lebih dari 20 tahun pengalaman menyediakan produk kemasan untuk UKM, usaha rintisan bisnis, usaha kecil dan perusahaan multinasional dari berbagai Industri.',
  },

  about: {
    _type: 'about',
    title: 'Tentang Artulase',
    tagline: 'Solusi Kemasan dan Percetakan Profesional',
    yearEstablished: 2003,
    mission:
      'Kepuasan pelanggan adalah prioritas utama kami. Kami berusaha melakukan yang terbaik untuk dapat menjaga kepercayaan yang kami terima dan tetap meningkatkan standar kerja kepada semua konsumen kami.',
    vision:
      'Menjadi perusahaan percetakan terdepan yang memberikan solusi kemasan berkualitas tinggi dengan harga terjangkau dan pelayanan terbaik.',
    description: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'PT. Artulase bergerak di bidang percetakan berbagai jenis kemasan seperti custom box packaging, paperbag, hangtag dan kebutuhan cetak lainnya sesuai kebutuhan. Kami berdiri dari Tahun 2003 dengan pengalaman puluhan tahun kami sudah melayani banyak customer dari UMKM hingga kebutuhan Industri.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Kami maksimal dalam melayani Anda. Percayakan kebutuhan printing Anda pada Artulase. Dengan team yang profesional, inovatif dan kompeten guna meningkatkan pelayanan serta kualitas yang baik.',
          },
        ],
      },
    ],
    values: [
      {
        title: 'Quality',
        description:
          'Kami melayani pembuatan box packaging dan kebutuhan printing dengan harga murah dan berkualitas.',
      },
      {
        title: 'Fast Delivery',
        description:
          'Kami memiliki armada pengiriman sendiri untuk memaksimalkan pelayanan kepada pelanggan',
      },
      {
        title: 'Priority',
        description: 'Kepuasan pelanggan adalah prioritas utama kami',
      },
    ],
    stats: [
      {number: '20+', label: 'Tahun Pengalaman'},
      {number: '1000+', label: 'Pelanggan Puas'},
      {number: '6', label: 'Mesin Modern'},
      {number: '24/7', label: 'Layanan Konsultasi'},
    ],
  },

  services: [
    {
      _type: 'service',
      title: 'Custom Box Packaging',
      slug: {_type: 'slug', current: 'custom-box-packaging'},
      description:
        'Layanan pembuatan box packaging custom sesuai kebutuhan bisnis Anda. Dari desain hingga produksi, kami siap membantu menciptakan kemasan yang menarik dan berkualitas.',
      order: 1,
    },
    {
      _type: 'service',
      title: 'Stiker Produk',
      slug: {_type: 'slug', current: 'stiker-produk'},
      description:
        'Cetak stiker produk dengan berbagai ukuran dan bahan. Cocok untuk labeling produk, branding, dan keperluan promosi bisnis Anda.',
      order: 2,
    },
    {
      _type: 'service',
      title: 'Buku Nota',
      slug: {_type: 'slug', current: 'buku-nota'},
      description:
        'Percetakan buku nota, invoice, kwitansi dan form administrasi lainnya. Tersedia berbagai ukuran dan custom design sesuai kebutuhan.',
      order: 3,
    },
    {
      _type: 'service',
      title: 'Kemasan Plastik',
      slug: {_type: 'slug', current: 'kemasan-plastik'},
      description:
        'Solusi kemasan plastik untuk berbagai jenis produk. Tersedia dalam berbagai ukuran, ketebalan dan tipe sesuai kebutuhan packaging Anda.',
      order: 4,
    },
    {
      _type: 'service',
      title: 'Paper Bag',
      slug: {_type: 'slug', current: 'paper-bag'},
      description:
        'Produksi paper bag berkualitas dengan custom design dan ukuran. Pilihan tepat untuk packaging produk yang ramah lingkungan dan elegant.',
      order: 5,
    },
  ],

  contact: {
    _type: 'contact',
    title: 'Hubungi Kami',
    email: 'artulase@gmail.com',
    phone: '(021) 54366267',
    whatsapp: '6285161882265',
    address: {
      street: 'Jl. Daan Mogot KM 11, Jl. Tawang Mangu I No. 74 Kalimati Rt. 003 Rw. 006',
      city: 'Jakarta Barat',
      province: 'DKI Jakarta',
      postalCode: '11710',
      country: 'Indonesia',
    },
    workingHours: [
      {day: 'Senin - Jumat', hours: '08:00 - 17:00'},
      {day: 'Sabtu', hours: '08:00 - 14:00'},
      {day: 'Minggu', hours: 'Tutup'},
    ],
  },

  portfolios: [
    {
      _type: 'portfolio',
      title: 'Delicute Packaging',
      slug: {_type: 'slug', current: 'delicute-packaging'},
      client: 'Delicute',
      category: 'packaging',
      description: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Custom box packaging untuk produk makanan Delicute dengan desain yang menarik dan food-grade.',
            },
          ],
        },
      ],
      featured: true,
    },
    {
      _type: 'portfolio',
      title: 'Yuni Cake Packaging',
      slug: {_type: 'slug', current: 'yuni-cake-packaging'},
      client: 'Yuni Cake',
      category: 'packaging',
      description: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Box kemasan kue dengan design elegant untuk Yuni Cake.',
            },
          ],
        },
      ],
    },
    {
      _type: 'portfolio',
      title: 'Belinda Bakery Packaging',
      slug: {_type: 'slug', current: 'belinda-bakery-packaging'},
      client: 'Belinda Bakery',
      category: 'packaging',
      description: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Kemasan bakery berkualitas dengan material food-safe untuk Belinda Bakery.',
            },
          ],
        },
      ],
    },
    {
      _type: 'portfolio',
      title: 'Bread In Packaging',
      slug: {_type: 'slug', current: 'bread-in-packaging'},
      client: 'Bread In',
      category: 'packaging',
      description: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Custom packaging solution untuk produk roti Bread In.',
            },
          ],
        },
      ],
    },
    {
      _type: 'portfolio',
      title: 'Pinot Packaging',
      slug: {_type: 'slug', current: 'pinot-packaging'},
      client: 'Pinot',
      category: 'packaging',
      description: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Kemasan premium untuk produk Pinot dengan finishing berkualitas.',
            },
          ],
        },
      ],
    },
    {
      _type: 'portfolio',
      title: 'Chocomory Packaging',
      slug: {_type: 'slug', current: 'chocomory-packaging'},
      client: 'Chocomory',
      category: 'packaging',
      description: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Box packaging cokelat dengan design menarik untuk Chocomory.',
            },
          ],
        },
      ],
    },
  ],
}

async function seed() {
  try {
    console.log('🌱 Starting seed process...\n')

    // Create Hero
    console.log('Creating Hero section...')
    const hero = await client.create(data.hero)
    console.log('✅ Hero created:', hero._id)

    // Create About
    console.log('\nCreating About section...')
    const about = await client.create(data.about)
    console.log('✅ About created:', about._id)

    // Create Services
    console.log('\nCreating Services...')
    for (const service of data.services) {
      const created = await client.create(service)
      console.log(`✅ Service created: ${created.title}`)
    }

    // Create Contact
    console.log('\nCreating Contact info...')
    const contact = await client.create(data.contact)
    console.log('✅ Contact created:', contact._id)

    // Create Portfolios
    console.log('\nCreating Portfolio items...')
    for (const portfolio of data.portfolios) {
      const created = await client.create(portfolio)
      console.log(`✅ Portfolio created: ${created.title}`)
    }

    console.log('\n🎉 Seed completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`- 1 Hero section`)
    console.log(`- 1 About section`)
    console.log(`- ${data.services.length} Services`)
    console.log(`- 1 Contact info`)
    console.log(`- ${data.portfolios.length} Portfolio items`)
    console.log('\n✨ Check your Sanity Studio at http://localhost:3333')
  } catch (error) {
    console.error('❌ Error seeding data:', error)
    process.exit(1)
  }
}

seed()
