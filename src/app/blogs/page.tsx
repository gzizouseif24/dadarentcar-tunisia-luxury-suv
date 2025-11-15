import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    slug: "guide-location-voiture-tunisie",
    title: "Guide Complet de Location de Voiture en Tunisie",
    excerpt: "Découvrez tout ce que vous devez savoir avant de louer une voiture en Tunisie : documents nécessaires, assurances, et conseils pratiques.",
    author: "DadaRentCar",
    publishedAt: "2024-11-01",
    category: "Guides",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-1b081630-20251107205232.jpg"
  },
  {
    id: "2",
    slug: "meilleurs-routes-tunisie",
    title: "Les Meilleures Routes à Explorer en Tunisie",
    excerpt: "De la côte méditerranéenne au désert du Sahara, découvrez les itinéraires les plus spectaculaires de Tunisie en voiture.",
    author: "DadaRentCar",
    publishedAt: "2024-10-28",
    category: "Voyages",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-7ec7502f-20251107205442.jpg"
  },
  {
    id: "3",
    slug: "choisir-suv-ou-berline",
    title: "SUV ou Berline : Comment Choisir ?",
    excerpt: "Comparez les avantages de chaque type de véhicule pour faire le meilleur choix selon vos besoins de voyage en Tunisie.",
    author: "DadaRentCar",
    publishedAt: "2024-10-25",
    category: "Conseils",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-6ac31a2f-20251107205443.jpg"
  },
  {
    id: "4",
    slug: "entretien-vehicule-location",
    title: "L'Entretien de Nos Véhicules : Notre Engagement Qualité",
    excerpt: "Découvrez comment nous maintenons notre flotte en parfait état pour garantir votre sécurité et votre confort.",
    author: "DadaRentCar",
    publishedAt: "2024-10-20",
    category: "À Propos",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-06f4308b-20251107205442.jpg"
  },
  {
    id: "5",
    slug: "conduire-desert-tunisien",
    title: "Conseils pour Conduire dans le Désert Tunisien",
    excerpt: "Préparez votre aventure saharienne avec nos conseils essentiels pour une conduite sûre dans le désert.",
    author: "DadaRentCar",
    publishedAt: "2024-10-15",
    category: "Guides",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-1e2f42f6-20251107205231.jpg"
  },
  {
    id: "6",
    slug: "locations-longue-duree",
    title: "Avantages de la Location Longue Durée",
    excerpt: "Économisez jusqu'à 25% avec nos offres de location mensuelle. Découvrez tous les avantages.",
    author: "DadaRentCar",
    publishedAt: "2024-10-10",
    category: "Offres",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-21f20aca-20251107205233.jpg"
  }
];

const categories = ["Tous", "Guides", "Voyages", "Conseils", "À Propos", "Offres"];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0066FF] to-blue-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Blog</h1>
          <p className="text-xl text-white/90">
            Conseils, guides et actualités sur la location de voitures en Tunisie
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                category === "Tous"
                  ? "bg-[#0066FF] text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50 border-2 border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0066FF] text-white px-3 py-1 rounded-full text-xs font-bold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString('fr-FR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-black mb-3 line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/blogs/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#0066FF] font-semibold hover:gap-3 transition-all"
                >
                  Lire la suite
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#0066FF] to-blue-400 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Restez Informé</h2>
          <p className="text-lg mb-6 text-white/90">
            Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et offres exclusives
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#0066FF] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
