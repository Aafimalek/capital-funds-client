import React from 'react';
import { BadgeCheck, TrendingUp, Headset, ShieldCheck } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { PillBadge } from './PillBadge';

const badges = [
	{
		title: 'SEBI Registered',
		description:
			'We are fully SEBI registered to ensure secure and compliant trading.',
		icon: <BadgeCheck className="h-12 w-12 text-blue-brand" strokeWidth={1.5} />,
		gradient: 'bg-gradient-to-r from-blue-500 to-cyan-400',
	},
	{
		title: 'Professional Insights',
		description: 'Backed by years of industry experience and actionable data.',
		icon: <TrendingUp className="h-12 w-12 text-blue-brand" strokeWidth={1.5} />,
		gradient: 'bg-gradient-to-r from-green-500 to-emerald-400',
	},
	{
		title: '24/7 Daily Support',
		description: 'Get 24/7 support for all your trading needs.',
		icon: <Headset className="h-12 w-12 text-blue-brand" strokeWidth={1.5} />,
		gradient: 'bg-gradient-to-r from-purple-500 to-violet-400',
	},
	{
		title: 'Risk Managed Calls',
		description:
			'Our calls come with clear risk management guidelines to protect your investment.',
		icon: <ShieldCheck className="h-12 w-12 text-blue-brand" strokeWidth={1.5} />,
		gradient: 'bg-gradient-to-r from-red-500 to-orange-400',
	},
];

export const About = () => {
	return (
		<section id="about" className="relative overflow-hidden py-16 md:py-24 bg-gradient-2">
			{/* Animated Background Gradients */}
			<div className="absolute inset-0">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse-glow" />
				<div
					className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-glow"
					style={{ animationDelay: '1s' }}
				/>
			</div>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mx-auto max-w-3xl text-center">
					<FadeIn>
						<PillBadge text="About Us" />
						<h2 className="mt-6 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
							The Trusted Analyzer Firm by Traders
						</h2>
						<p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-400 mx-auto">
							We are a SEBI Registered Research Analyst firm dedicated to
							providing you with the most accurate and profitable stock market
							advice.
						</p>
					</FadeIn>
				</div>

				{/* Grid Layout */}
				<div className="mt-12 md:mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{badges.map((badge, index) => (
						<FadeIn key={badge.title} delay={index * 100} className="h-full">
							<div tabIndex={0} className="group relative h-full overflow-hidden rounded-2xl">
								{/* Gradient Border Glow Effect */}
								<div
									className={`absolute -inset-0.5 ${badge.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500 group-active:opacity-75 group-focus:opacity-75`}
								/>

								{/* Card Content */}
								<div className="relative h-full rounded-2xl glass-card p-8 transition-all group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
									<div className="mb-4 inline-flex items-center justify-center rounded-xl bg-blue-500/10 p-3 transition-colors group-hover:bg-blue-500/20">
										{badge.icon}
									</div>
									<h3 className="mb-2 text-xl font-bold text-white">
										{badge.title}
									</h3>
									<p className="text-base text-gray-400">
										{badge.description}
									</p>

									{/* Decorative element */}
									<div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-500/20 opacity-0 blur-xl transition-opacity group-hover:opacity-50" />
								</div>
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
};
