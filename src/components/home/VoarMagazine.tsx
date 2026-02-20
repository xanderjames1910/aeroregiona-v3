'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SendHorizonal, BookOpen } from 'lucide-react';

export default function VoarMagazine() {
	const [companyName, setCompanyName] = useState('');

	const handleWhatsAppRedirect = (e: React.FormEvent) => {
		e.preventDefault();
		const message = `Hola, soy de la empresa ${companyName} y me gustaría información sobre la revista VOAR.`;
		const encodedMessage = encodeURIComponent(message);
		const whatsappLink = `https://wa.me/593984160423?text=${encodedMessage}`;
		window.open(whatsappLink, '_blank');
	};

	return (
		<section className='py-20 md:py-28 bg-background'>
			<div className='container'>
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50'
				>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
						{/* Left Content - Text & Form */}
						<div className='p-8 md:p-14 flex flex-col justify-center space-y-8 relative'>
							{/* Decorative background element */}
							<div className="absolute top-0 right-0 w-64 h-64 bg-sky/5 rounded-full blur-3xl -z-10" />

							<div className='space-y-4'>
								<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky/10 text-sky text-sm font-semibold mb-2">
									<BookOpen className="w-4 h-4" />
									<span>Publicidad Exclusiva</span>
								</div>

								<h2 className='text-3xl md:text-5xl font-extrabold text-foreground leading-tight'>
									Anúnciate en nuestra <br/>
									<span className='text-sky'>Revista VOAR</span>
								</h2>

								{/* Mobile Image */}
								<div className='relative w-full h-80 lg:hidden rounded-2xl overflow-hidden shadow-lg my-6 group'>
									<Image
										src='/images/home/voar/voar-contact.webp'
										alt='Contactanos Revista VOAR'
										fill
										className='object-cover transition-transform duration-700 group-hover:scale-105'
										sizes='(max-width: 1024px) 100vw'
									/>
								</div>

								<p className='text-muted-foreground text-lg leading-relaxed max-w-md'>
									Llega a miles de pasajeros y potencia tu marca con nosotros.
									Sé parte de la experiencia de viaje de nuestros clientes a bordo de Aeroregional.
								</p>
							</div>

							<form
								onSubmit={handleWhatsAppRedirect}
								className='space-y-4 max-w-md'
							>
								<div className='bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-sm'>
									<label
										htmlFor='company'
										className='block text-sm font-semibold text-foreground mb-3'
									>
										Nombre de tu empresa
									</label>
									<div className='flex flex-col sm:flex-row gap-3'>
										<Input
											id='company'
											type='text'
											placeholder='Ej. Tu Empresa S.A.'
											value={companyName}
											onChange={(e) => setCompanyName(e.target.value)}
											required
											className='h-12 bg-background border-border focus-visible:ring-sky text-foreground placeholder:text-muted-foreground rounded-xl w-full'
										/>
										<Button
											type='submit'
											className='h-12 w-full sm:w-auto px-6 flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl shadow-gold hover:shadow-none transition-all'
										>
											<SendHorizonal className='w-5 h-5 sm:mr-2' />
											<span className='sm:hidden'>Enviar</span>
										</Button>
									</div>
									<p className='text-xs text-muted-foreground mt-3 flex items-center gap-1.5'>
										<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
										Te contactaremos vía WhatsApp para brindarte más información.
									</p>
								</div>
							</form>
						</div>

						{/* Right Content - Image (Desktop) */}
						<div className='hidden lg:block relative h-auto min-h-[500px] overflow-hidden group'>
							<Image
								src='/images/home/voar/voar-contact.webp'
								alt='Contactanos Revista VOAR'
								fill
								className='object-cover transition-transform duration-700 group-hover:scale-105'
								sizes='50vw'
							/>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
