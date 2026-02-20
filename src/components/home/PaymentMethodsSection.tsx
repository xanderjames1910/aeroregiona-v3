'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const paymentMethods = [
	{
		id: 'paypal',
		name: 'PayPal',
		image: '/images/home/payment/paypal.webp',
	},
	{
		id: 'transfer',
		name: 'Depósito o transferencia',
		image: '/images/home/payment/transfer.webp',
	},
	{
		id: 'payphone',
		name: 'PayPhone',
		image: '/images/home/payment/payphone.webp',
	},
	{
		id: 'deuna',
		name: 'Deuna',
		image: '/images/home/payment/deuna.webp',
	},
];

export default function PaymentMethodsSection() {
	const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

	const closeModal = () => setSelectedMethod(null);

	return (
		<section className='py-20 md:py-28 bg-background'>
			<div className='container'>
				<div className='flex flex-col items-center mb-14'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center w-full"
					>
						<p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
							Facilidades para tu compra
						</p>
						<h2 className='text-3xl md:text-4xl font-extrabold text-foreground'>
							Formas de pago
						</h2>
					</motion.div>
				</div>

				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto'>
					{paymentMethods.map((method, index) => (
						<motion.div
							key={method.id}
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true, amount: 0.1 }}
							transition={{ delay: index * 0.1 }}
							onClick={() => setSelectedMethod(method.id)}
							className='bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col border border-border/40'
						>
							{/* Contenedor Superior: Imagen fotográfica a todo ancho */}
							<div className="relative w-full h-48 overflow-hidden bg-muted">
								<Image
									src={method.image}
									alt={method.name}
									fill
									className='object-cover transition-transform duration-700 group-hover:scale-105'
									sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
								/>
                {/* Degradado súper sutil que solo aporta una pequeña viñeta a la imagen */}
								<div className='absolute inset-0 bg-linear-to-b from-black/5 to-transparent' />
							</div>
							
							{/* Contenedor Inferior: Título en fondo sólido con estilo site-wide */}
							<div className='p-5 flex-1 flex items-center justify-center bg-card'>
								<h3 className='text-lg font-bold text-foreground text-center group-hover:text-primary transition-colors'>
									{method.name}
								</h3>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4 }}
					className='mt-14 text-center max-w-2xl mx-auto space-y-4'
				>
					<p className='text-foreground font-medium text-lg md:text-xl'>
						Es importante que envíes el nombre del pasajero, el código de
						reserva y la ruta a volar en el detalle de tu transacción
					</p>
					<p className='text-navy-dark font-bold text-xl md:text-2xl'>
						info@aeroregional.net
					</p>
				</motion.div>
			</div>

			{/* Modal Overlay */}
			<AnimatePresence>
				{selectedMethod && (
					<div className='fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6'>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={closeModal}
							className='absolute inset-0 bg-navy-dark/60 backdrop-blur-sm'
						/>
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 20 }}
							className='relative w-full max-w-lg bg-background rounded-3xl shadow-2xl overflow-hidden z-10'
						>
							<button
								onClick={closeModal}
								className='absolute top-4 right-4 p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors z-20'
							>
								<X className='w-5 h-5 text-foreground' />
							</button>

							<div className='p-8'>
								<h3 className='text-2xl font-bold text-navy-dark mb-4'>
									{paymentMethods.find((p) => p.id === selectedMethod)?.name}
								</h3>
								<div className='aspect-video bg-muted rounded-xl flex items-center justify-center mb-6 overflow-hidden relative'>
									<Image
										src={paymentMethods.find((p) => p.id === selectedMethod)?.image || ''}
										alt={paymentMethods.find((p) => p.id === selectedMethod)?.name || ''}
										fill
										className='object-cover opacity-20'
									/>
									<span className='text-muted-foreground relative z-10 font-semibold'>
										[Datos de pago de {selectedMethod}]
									</span>
								</div>
								<p className='text-muted-foreground text-center'>
									Pronto se agregarán los datos correspondientes para este
									método de pago.
								</p>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</section>
	);
}
