import React from 'react';
import { FadeIn } from './FadeIn';
import { PillBadge } from './PillBadge';

const packages = [
	{
		name: 'Basic Package',
		price: '₹12,583',
		period: '+ GST / Month',
		features: [
			'NIFTY, BankNifty, Sensex, FinNifty, Midcap Nifty, Option Trades',
			'Get 1-3 Tips Per Day',
			'BTST/STBT Trades',
			'Expiry Special Trades',
			'Stock Option Trades',
			'Proper Entry, Stop Loss',
			'Two Targets (1st & 2nd)',
			'Profit 5k-15k (Per Positive Tip)',
		],
		isPopular: false,
		buttonText: 'Choose Basic',
		color: 'border-blue-500/20',
		headerBg: 'bg-blue-900/30',
		accent: 'text-blue-400',
		buttonBg: 'bg-slate-600 hover:bg-slate-600',
		buttonTextColor: 'text-white',
	},
	{
		name: 'HNI Package',
		price: '₹32,500',
		period: '+ GST / 3 Months',
		features: [
			'NIFTY, BankNifty, Sensex, FinNifty, Midcap Nifty, Option Trades',
			'Get 2-4 Tips Per Day',
			'Expiry Special Strategy',
			'BTST/STBT Trades',
			'Short Term Stock Option Positional',
			'Proper Hedging (Capital > 5 Lakh)',
			'Profit 10k-30k (Per Positive Tip)',
			'Executive Support via WhatsApp & Calls',
			'Live Market News Coverage',
		],
		isPopular: true,
		buttonText: 'Choose HNI',
		color: 'border-yellow-500/50',
		headerBg: 'bg-amber-800/20',
		accent: 'text-yellow-400',
		buttonBg: 'bg-gradient-to-r from-yellow-500 to-orange-500',
		buttonTextColor: 'text-black',
	},
	{
		name: 'Pay Per Trade',
		price: '₹1,51,000',
		period: '+ GST / 1 Year',
		features: [
			'NIFTY, BankNifty, Sensex, FinNifty, Midcap Nifty, Option Trades',
			'Get 1-3 Tips Per Day',
			'BTST/STBT Trades',
			'Expiry Special Trades',
			'Stock Option Trades',
			'Proper Entry, Stop Loss',
			'Three Targets (1st, 2nd & 3rd)',
			'Profit 5k-15k (Per Positive Tip)',
			'Live Market News Coverage',
		],
		isPopular: false,
		buttonText: 'Choose Yearly',
		color: 'border-purple-500/20',
		headerBg: 'bg-purple-900/30',
		accent: 'text-purple-400',
		buttonBg: 'bg-gradient-to-r from-pink-500 to-purple-600',
		buttonTextColor: 'text-white',
	},
];

export const Packages = () => {
	return (
		<section id="packages" className="relative py-16 md:py-32 overflow-hidden bg-gradient-4">
			{/* Animated Background Gradients */}
			<div className="absolute inset-0">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse-glow" />
				<div
					className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-glow"
					style={{ animationDelay: '1s' }}
				/>
			</div>

			<div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 md:mb-20">
					<FadeIn>
						<PillBadge text="Pricing Plans" />
						<h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
							Affordable Packages for <br />
							<span className="text-gradient">Every Trader</span>
						</h2>
						<p className="mt-6 max-w-2xl text-base md:text-lg text-gray-400 mx-auto">
							Choose the plan that best fits your trading style and capital.
							Transparent pricing, no hidden fees.
						</p>
					</FadeIn>
				</div>

				<div className="grid gap-8 md:gap-8 lg:grid-cols-3 lg:gap-10 items-start">
					{packages.map((pkg, index) => (
						<FadeIn
							key={pkg.name}
							delay={index * 150}
							className={pkg.isPopular ? 'lg:-mt-8 lg:mb-8' : ''}
						>
							<div
								className={`relative flex flex-col rounded-4xl border glass-card transition-all duration-500 group ${
									pkg.isPopular
										? 'border-yellow-500/30 shadow-[0_0_50px_-12px_rgba(234,179,8,0.2)] hover:border-yellow-500/50 scale-105 z-10'
										: 'border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10'
								}`}
							>
								{/* Popular Badge */}
								{pkg.isPopular && (
									<div className="absolute -top-5 left-0 right-0 mx-auto w-fit">
										<span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-500/50 bg-yellow-500/10 px-4 py-1.5 text-sm font-bold text-yellow-400 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(234,179,8,0.4)]">
											<svg
												className="w-4 h-4"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											Most Popular
										</span>
									</div>
								)}

								{/* Header */}
								<div
									className={`p-8 rounded-t-4xl border-b border-white/5 ${pkg.headerBg}`}
								>
									<h3
										className={`text-xl font-bold ${
											pkg.isPopular ? 'text-white' : 'text-gray-200'
										}`}
									>
										{pkg.name}
									</h3>
									<div className="mt-4 flex items-baseline gap-1">
										<span
											className={`text-4xl font-bold ${
												pkg.isPopular ? 'text-yellow-400' : 'text-white'
											}`}
										>
											{pkg.price}
										</span>
										<span className="text-sm font-medium text-gray-400">
											{pkg.period}
										</span>
									</div>
								</div>

								{/* Features */}
								<div className="flex-1 p-8">
									<ul className="space-y-4 mb-8">
										{pkg.features.map((feature) => (
											<li
												key={feature}
												className="flex items-start gap-3 group/item"
											>
												<div
													className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border bg-white/5 ${
														pkg.isPopular
															? 'border-yellow-500/30 text-yellow-400'
															: 'border-white/10 text-blue-400'
													}`}
												>
													<svg
														className="h-3 w-3"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth={2.5}
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M4.5 12.75l6 6 9-13.5"
														/>
													</svg>
												</div>
												<span className="text-sm text-gray-300 group-hover:item:text-white transition-colors">
													{feature}
												</span>
											</li>
										))}
									</ul>

									<a
										href={`https://wa.me/918000489090?text=I'm interested in the ${pkg.name}`}
										target="_blank"
										rel="noopener noreferrer"
										className={`group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-4 text-base font-bold shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 ${
											pkg.buttonBg
										} ${pkg.buttonTextColor}`}
									>
										<span className="relative z-10">{pkg.buttonText}</span>
										<svg
											className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M13 7l5 5m0 0l-5 5m5-5H6"
											/>
										</svg>
									</a>
								</div>
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
};
