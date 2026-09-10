import './globals.css';

export const metadata = {
  title: 'LEGACY HEIRESS | Financial Empowerment & Generational Wealth',
  description:
    'Teaching financial empowerment. Building generational wealth. Legacy Heiress is a financial education and wealth-building consulting brand.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
