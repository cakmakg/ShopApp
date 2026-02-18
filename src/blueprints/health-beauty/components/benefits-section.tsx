'use client';

interface Benefit {
    icon: string;
    title: string;
    description: string;
}

interface BenefitsSectionProps {
    title?: string;
    benefits?: Benefit[];
}

const defaultBenefits: Benefit[] = [
    {
        icon: '🌿',
        title: '100% Natürliche Inhaltsstoffe',
        description: 'Alle unsere Produkte werden aus natürlichen und biologischen Quellen gewonnen.',
    },
    {
        icon: '🔬',
        title: 'Wissenschaftliche Formel',
        description: 'Von unserem Expertenteam entwickelte, klinisch getestete Formeln.',
    },
    {
        icon: '🚚',
        title: 'Schnelle Lieferung',
        description: 'Deutschlandweit innerhalb von 1–3 Werktagen direkt zu Ihnen nach Hause.',
    },
    {
        icon: '💯',
        title: '90 Tage Garantie',
        description: 'Sollten Sie nicht zufrieden sein, erhalten Sie Ihr Geld ohne Rückfragen zurück.',
    },
];

export function BenefitsSection({
    title = 'Warum sollten Sie uns wählen?',
    benefits = defaultBenefits,
}: BenefitsSectionProps) {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        {title}
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
                </div>

                {/* Benefits Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Icon */}
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-50 to-teal-50 text-3xl transition-transform duration-300 group-hover:scale-110">
                                {benefit.icon}
                            </div>

                            {/* Title */}
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600">
                                {benefit.description}
                            </p>

                            {/* Decorative Corner */}
                            <div className="absolute -right-1 -top-1 h-8 w-8 rounded-bl-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
