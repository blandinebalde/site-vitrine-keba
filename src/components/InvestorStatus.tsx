import React from 'react';
import { CircleDollarSign, Wallet, CreditCard, BadgeDollarSign, DollarSign, Banknote, Coins } from 'lucide-react';

interface InvestorStatusProps {
    language: 'en' | 'fr';
}

const InvestorStatus: React.FC<InvestorStatusProps> = ({ language }) => {
    const statuses = [
        {
            icon: <CircleDollarSign className="h-12 w-12 text-bronze" />,
            category: 'A',
            annualInvestment: language === 'en' ? '$50k - $100k' : '50k$ - 100k$',
            mrp: language === 'en' ? 'MRP: $10k' : 'MRP: 10k$',
            membershipFee: language === 'en' ? 'Membership: $5k' : 'Adhésion: 5k$'
        },
        {
            icon: <Wallet className="h-12 w-12 text-silver" />,
            category: 'B',
            annualInvestment: language === 'en' ? '$100k - $250k' : '100k$ - 250k$',
            mrp: language === 'en' ? 'MRP: $20k' : 'MRP: 20k$',
            membershipFee: language === 'en' ? 'Membership: $10k' : 'Adhésion: 10k$'
        },
        {
            icon: <CreditCard className="h-12 w-12 text-gold" />,
            category: 'C',
            annualInvestment: language === 'en' ? '$250k - $500k' : '250k$ - 500k$',
            mrp: language === 'en' ? 'MRP: $30k' : 'MRP: 30k$',
            membershipFee: language === 'en' ? 'Membership: $20k' : 'Adhésion: 20k$'
        },
        {
            icon: <BadgeDollarSign className="h-12 w-12 text-platinum" />,
            category: 'D',
            annualInvestment: language === 'en' ? '$500k - $750k' : '500k$ - 750k$',
            mrp: language === 'en' ? 'MRP: $40k' : 'MRP: 40k$',
            membershipFee: language === 'en' ? 'Membership: $25k' : 'Adhésion: 25k$'
        },
        {
            icon: <DollarSign className="h-12 w-12 text-diamond" />,
            category: 'E',
            annualInvestment: language === 'en' ? '$750k - $1M' : '750k$ - 1M$',
            mrp: language === 'en' ? 'MRP: $50k' : 'MRP: 50k$',
            membershipFee: language === 'en' ? 'Membership: $30k' : 'Adhésion: 30k$'
        },
        {
            icon: <Banknote className="h-12 w-12 text-elite" />,
            category: 'F',
            annualInvestment: language === 'en' ? '$1M - $3M' : '1M$ - 3M$',
            mrp: language === 'en' ? 'MRP: $150k' : 'MRP: 150k$',
            membershipFee: language === 'en' ? 'Membership: $30k' : 'Adhésion: 30k$'
        },
        {
            icon: <Coins className="h-12 w-12 text-premium" />,
            category: 'G',
            annualInvestment: language === 'en' ? '$3M - $5M' : '3M$ - 5M$',
            mrp: language === 'en' ? 'MRP: $300k' : 'MRP: 300k$',
            membershipFee: language === 'en' ? 'Membership: $30k' : 'Adhésion: 30k$'
        }
    ];

    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <p className="text-gray-300 max-w-3xl mx-auto">
                    {language === 'en' ?
                        'Min-Max refers to the minimum and maximum investment in Golden Investment. MRP (Minimum Required Participation) is the mandatory amount for large-scale project funding under Rock Investment.' :
                        'Min-Max fait référence à l\'investissement minimum et maximum dans Golden Investment. MRP (Participation Minimale Requise) est le montant obligatoire pour le financement de projets à grande échelle sous Rock Investment.'
                    }
                </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {statuses.map((status, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4">
                                {status.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {language === 'en' ? `Category ${status.category}` : `Catégorie ${status.category}`}
                            </h3>
                            <p className="text-[#FFBF00] font-semibold mb-2">
                                {status.annualInvestment}
                            </p>
                            <p className="text-gray-400 mb-1">
                                {status.mrp}
                            </p>
                            <p className="text-gray-400">
                                {status.membershipFee}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InvestorStatus;