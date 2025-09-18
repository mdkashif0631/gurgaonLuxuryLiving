import React, { useEffect, useState } from "react";
import "./FavoritesPage.css";
import BHks, { SuperAreaDisplay } from "./PropertyCard/BHks";

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);

    // Helper: get valid favorites (not expired)
    const getValidFavorites = () => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const now = Date.now();

        // Filter out expired favorites
        const validFavorites = savedFavorites.filter(
            (fav) => !fav.expiry || fav.expiry > now
        );

        // Update localStorage to remove expired
        localStorage.setItem("favorites", JSON.stringify(validFavorites));

        return validFavorites;
    };

    useEffect(() => {
        setFavorites(getValidFavorites());

        const interval = setInterval(() => {
            setFavorites(getValidFavorites());
        }, 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    // Remove manually
    const removeFavorite = (id) => {
        const updated = favorites.filter((fav) => fav.id !== id);
        setFavorites(updated);
        localStorage.setItem("favorites", JSON.stringify(updated));
    };

    return (
        <div className="favorites-container">
            <h2 className="favorites-title">My Favorites</h2>
            <div className="favorites-grid">
                {favorites.length > 0 ? (
                    favorites.map((proj) => (
                        <div key={proj.id} className="project-card fav">
                            <div className="fav-left">
                                <img src={proj.Main_Image} alt={proj.Project_Name} className="project-img" />
                            </div>

                            <div className="fav-right">
                                <h3 className="project-title">{proj.Project_Name}</h3>
                                <p className="project-location">{proj.Locations ? `${proj.Locations}` : `${proj.Localities}, ${proj.Location}, ${proj.City}`  }</p>
                                <p className="project-price">{proj.min_price
                                    ? `${(proj.min_price)}`
                                    : `₹ ${(proj.Start_price / 10000000).toFixed(2)} Cr* ONWARD`}</p>

                                <div className="project-details">
                                    <span>🛏 {proj.bedrooms ? `${proj.bedrooms}` : <BHks property={proj} />}</span>
                                    <span>📐 {proj.area  ? `${proj.area} sqft` : <SuperAreaDisplay property={proj} />}</span>
                                </div>

                                <div className="fav-actions">
                                    <button className="detail-btn">Detail</button>
                                    <button
                                        className="remove-btn"
                                        onClick={() => removeFavorite(proj.id)}
                                    >
                                        ❌ Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No favorites yet. Click ♥ to add!</p>
                )}
            </div>
        </div>
    );
}
