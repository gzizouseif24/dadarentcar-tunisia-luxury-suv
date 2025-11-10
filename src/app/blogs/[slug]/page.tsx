import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import { notFound } from "next/navigation";

// This would typically come from a database or CMS
const blogPosts: { [key: string]: any } = {
  "guide-location-voiture-tunisie": {
    title: "Guide Complet de Location de Voiture en Tunisie",
    excerpt: "Découvrez tout ce que vous devez savoir avant de louer une voiture en Tunisie : documents nécessaires, assurances, et conseils pratiques.",
    author: "DadaRentCar",
    publishedAt: "2024-11-01",
    category: "Guides",
    tags: ["Location", "Tunisie", "Conseils", "Documents"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-1b081630-20251107205232.jpg",
    content: `
      <h2>Introduction</h2>
      <p>La location de voiture en Tunisie est une excellente option pour explorer le pays à votre rythme. Que vous visitiez les plages de Hammamet, les ruines de Carthage, ou le désert du Sahara, avoir votre propre véhicule vous offre une liberté incomparable.</p>

      <h2>Documents Nécessaires</h2>
      <p>Pour louer une voiture en Tunisie, vous aurez besoin de :</p>
      <ul>
        <li>Un permis de conduire valide (international recommandé pour les non-résidents)</li>
        <li>Une pièce d'identité ou passeport</li>
        <li>Une carte de crédit pour le dépôt de garantie</li>
        <li>Âge minimum : 21 ans (25 ans pour certains véhicules premium)</li>
      </ul>

      <h2>Types d'Assurance</h2>
      <p>Chez DadaRentCar, nous offrons plusieurs options d'assurance :</p>
      <ul>
        <li><strong>Assurance de base</strong> : Incluse dans tous nos tarifs</li>
        <li><strong>Assurance tous risques</strong> : Protection complète recommandée</li>
        <li><strong>Protection vol</strong> : Couverture contre le vol du véhicule</li>
      </ul>

      <h2>Conseils Pratiques</h2>
      <p>Voici quelques conseils pour une expérience de location réussie :</p>
      <ul>
        <li>Inspectez le véhicule avant de partir et signalez tout dommage existant</li>
        <li>Prenez des photos du véhicule avant et après la location</li>
        <li>Familiarisez-vous avec les règles de circulation locales</li>
        <li>Gardez toujours les documents du véhicule avec vous</li>
        <li>Notez notre numéro d'assistance 24/7 : +216 12 345 678</li>
      </ul>

      <h2>Tarification</h2>
      <p>Nos tarifs sont transparents et compétitifs. Nous offrons :</p>
      <ul>
        <li>Location journalière à partir de 150 DT</li>
        <li>Réductions pour locations hebdomadaires (15%)</li>
        <li>Tarifs mensuels avantageux (jusqu'à 25% de réduction)</li>
        <li>Pas de frais cachés</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Louer une voiture en Tunisie avec DadaRentCar est simple, sûr et abordable. Notre équipe professionnelle est là pour vous accompagner à chaque étape. Réservez dès maintenant et commencez votre aventure tunisienne !</p>
    `
  }
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[#0066FF] font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux articles
          </Link>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-8 left-8">
          <span className="bg-[#0066FF] text-white px-4 py-2 rounded-full text-sm font-bold">
            {post.category}
          </span>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#0066FF]" />
              <span>{new Date(post.publishedAt).toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#0066FF]" />
              <span>{post.author}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-[#0066FF]" />
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="bg-blue-50 text-[#0066FF] px-3 py-1 rounded-full text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none
            prose-headings:text-black prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-[#0066FF]
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-ul:my-6 prose-ul:text-gray-700
            prose-li:my-2
            prose-strong:text-black prose-strong:font-bold
            prose-a:text-[#0066FF] prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-[#0066FF] to-blue-400 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Prêt à Louer un Véhicule ?</h2>
          <p className="text-lg mb-6 text-white/90">
            Découvrez notre flotte de véhicules et réservez dès maintenant
          </p>
          <Link
            href="/vehicles"
            className="inline-block bg-white text-[#0066FF] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Voir Nos Véhicules
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-8">Articles Similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder for related posts */}
            <div className="text-center text-gray-500 col-span-3">
              <p>Découvrez plus d'articles sur notre blog</p>
              <Link
                href="/blogs"
                className="inline-block mt-4 text-[#0066FF] font-semibold hover:underline"
              >
                Voir tous les articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
