import React, { useState } from 'react';
import WorldMap from './WorldMap';
import styles from './WorldTour.module.scss';
import visitedCountries from '../../../assets/visitedCountries.json';

type VisitedCountry = {
    country: string;
    year: number;
    instagram?: string[];
};

const WorldTour: React.FC = () => {
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

    const handleCountryClick = (country: string) => {
        setSelectedCountry(country);
    };

    const countryData: VisitedCountry | undefined = visitedCountries.find(
        (c) => c.country === selectedCountry
    );

    return (
        <section id="worldtour" className={styles.worldTour}>
            <h2 className={styles.heading}>World Tour</h2>
            <p className={styles.description}>
                世界地図をクリックして、訪問国の情報を見てみましょう。
            </p>
            <WorldMap onCountryClick={handleCountryClick} />
            {countryData && (
                <div className={styles.countryInfo}>
                    <h3 className={styles.countryName}>
                        {countryData.country}
                    </h3>
                    <p className={styles.countryDescription}>
                        訪問年: {countryData.year}
                    </p>

                    {countryData.instagram && countryData.instagram.length > 0 && (
                        <div className={styles.instagram}>
                            {countryData.instagram.map((url, index) => {
                                const cleanUrl = url.split('?')[0];
                                const embedUrl = cleanUrl.endsWith('/')
                                    ? `${cleanUrl}embed`
                                    : `${cleanUrl}/embed`;

                                return (
                                    <iframe
                                        key={index}
                                        src={embedUrl}
                                        title={`Instagram post ${index + 1}`}
                                        allowTransparency
                                    />
                                );
                            })}
                        </div>
                    )}


                </div>
            )}
        </section>
    );
};

export default WorldTour;
