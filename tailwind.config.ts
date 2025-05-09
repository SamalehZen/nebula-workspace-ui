
import type { Config } from "tailwindcss";

export default {
	darkMode: ['class'],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				neo: {
					bg: {
						DEFAULT: '#F1F1F1',
						dark: '#1A1F2C'
					},
					highlight: '#ff5722',
					shadow: {
						DEFAULT: '#00000026',
						dark: '#000000e6'
					},
					border: {
						DEFAULT: '#e0e0e0',
						dark: '#ff5722'
					},
					text: {
						DEFAULT: '#333333',
						dark: '#FFFFFF'
					},
					muted: {
						DEFAULT: '#777777',
						dark: '#aaadb0'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'neo-inner': 'inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.5)',
				'neo-inner-dark': 'inset 2px 2px 5px rgba(0, 0, 0, 0.7), inset -2px -2px 5px rgba(255, 255, 255, 0.1)',
				'neo-outer': '5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(255, 255, 255, 0.8)',
				'neo-outer-dark': '5px 5px 10px rgba(0, 0, 0, 0.5), -5px -5px 10px rgba(255, 255, 255, 0.05)',
				'neo-flat': '2px 2px 5px rgba(0, 0, 0, 0.1), -2px -2px 5px rgba(255, 255, 255, 0.8)',
				'neo-flat-dark': '2px 2px 5px rgba(0, 0, 0, 0.5), -2px -2px 5px rgba(255, 255, 255, 0.05)',
				'glow': '0 0 15px rgba(255, 87, 34, 0.2)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-dark': 'linear-gradient(145deg, #1c1c1c, #121418)',
				'gradient-light': 'linear-gradient(145deg, #f8f8f8, #e8e8e8)',
				'gradient-card': 'linear-gradient(145deg, rgba(28,28,28,0.9), rgba(18,20,24,0.9))',
				'gradient-card-light': 'linear-gradient(145deg, rgba(248,248,248,0.9), rgba(232,232,232,0.9))',
				'gradient-firebase': 'linear-gradient(145deg, #ff5722, #ff8a65)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
