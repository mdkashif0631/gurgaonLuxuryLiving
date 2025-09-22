import React, { useEffect, useState } from "react";
import "./FavoritesPage.css";
import BHks, { SuperAreaDisplay } from "./PropertyCard/BHks";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Header from "./Header";

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);

    const getValidFavorites = () => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const now = Date.now();
        const validFavorites = savedFavorites.filter(
            (fav) => !fav.expiry || fav.expiry > now
        );
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

    const removeFavorite = (id) => {
        const updated = favorites.filter((fav) => fav.id !== id);
        setFavorites(updated);
        localStorage.setItem("favorites", JSON.stringify(updated));
    };

    const downloadPDF = () => {
        const doc = new jsPDF();

        // === Add Company Logo ===
        // Place your logo.png in the public folder
        const logoUrl = "/LuxuryAbode_black.png";
        doc.addImage(logoUrl, "PNG", 160, 5, 40, 20);

        // === Add Title ===
        doc.setFontSize(16);
        doc.text("Favorites Table", 14, 15);

        // === Add Current Date ===
        const currentDate = new Date().toLocaleDateString();
        doc.setFontSize(10);
        doc.text(`Date: ${currentDate}`, 14, 22);

        // === Table ===
        const tableColumn = [
            "Project Name",
            "Location",
            "Bedrooms",
            "Area",
            "Min Price",
            "Possession",
        ];

        const tableRows = favorites.map((proj) => [
            proj.Project_Name,
            proj.Locations
                ? proj.Locations
                : `${proj.Localities}, ${proj.Location}, ${proj.City}`,
            proj.bedrooms || "—",
            proj.area ? `${proj.area} sqft` : "—",
            proj.min_price
                ? proj.min_price
                : `₹ ${(proj.Start_price / 10000000).toFixed(2)} Cr* ONWARD`,
            proj.Possession || "—",
        ]);

        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 28,
            styles: { fontSize: 10 },
            headStyles: { fillColor: [44, 62, 80] },
        });

        // === Add Watermark ===
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setTextColor(220, 220, 220);
            doc.setFontSize(40);
            doc.text("The Luxury Abode", 55, 150, {
                angle: 45,
            });
        }

        doc.save("favorites.pdf");
    };

    return (
        <div className="favorites-container">
            <Header/>
            <h2 className="favorites-title">My Favorites</h2>

            {/* Grid Card View */}
            <div className="favorites-grid">
                {favorites.length > 0 ? (
                    favorites.map((proj) => (
                        <div key={proj.id} className="project-card fav">
                            <div className="fav-left">
                                <img
                                    src={proj.Main_Image}
                                    alt={proj.Project_Name}
                                    className="project-img"
                                />
                            </div>

                            <div className="fav-right">
                                <h3 className="project-title">{proj.Project_Name}</h3>
                                <p className="project-location">
                                    {proj.Locations
                                        ? proj.Locations
                                        : `${proj.Localities}, ${proj.Location}, ${proj.City}`}
                                </p>
                                <p className="project-price">
                                    {proj.min_price
                                        ? proj.min_price
                                        : `₹ ${(proj.Start_price / 10000000).toFixed(
                                              2
                                          )} Cr* ONWARD`}
                                </p>

                                <div className="project-details">
                                    <span>
                                        🛏{" "}
                                        {proj.bedrooms ? (
                                            proj.bedrooms
                                        ) : (
                                            <BHks property={proj} />
                                        )}
                                    </span>
                                    <span>
                                        📐{" "}
                                        {proj.area ? (
                                            `${proj.area} sqft`
                                        ) : (
                                            <SuperAreaDisplay property={proj} />
                                        )}
                                    </span>
                                </div>

                                <div className="fav-actions">
                                    <button className="detail-btn">
                                        <Link
                                            to={
                                                proj.link
                                                    ? `${proj.link}`
                                                    : `/${proj.Link}`
                                            }
                                        >
                                            Detail
                                        </Link>
                                    </button>
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

            {/* Table View */}
            {favorites.length > 0 && (
                <div className="favorites-table-container">
                    <div className="table-header">
                        <h3>Comparison Table</h3>
                        <button className="pdf-btn" onClick={downloadPDF}>
                            📄 Download PDF
                        </button>
                    </div>
                    <table className="favorites-table">
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Location</th>
                                <th>Bedrooms</th>
                                <th>Area</th>
                                <th>Min Price</th>
                                <th>Possession</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {favorites.map((proj) => (
                                <tr key={proj.id}>
                                    <td>{proj.Project_Name}</td>
                                    <td>
                                        {proj.Locations
                                            ? proj.Locations
                                            : `${proj.Localities}, ${proj.Location}, ${proj.City}`}
                                    </td>
                                    <td>
                                        {proj.bedrooms ? (
                                            proj.bedrooms
                                        ) : (
                                            <BHks property={proj} />
                                        )}
                                    </td>
                                    <td>
                                        {proj.area ? (
                                            `${proj.area} sqft`
                                        ) : (
                                            <SuperAreaDisplay property={proj} />
                                        )}
                                    </td>
                                    <td>
                                        {proj.min_price
                                            ? `${proj.min_price}`
                                            : `₹ ${(proj.Start_price / 10000000).toFixed(
                                                  2
                                              )} Cr* ONWARD`}
                                    </td>
                                    <td>{proj.Possession || "—"}</td>
                                    <td>
                                        <button
                                            className="remove-btn"
                                            onClick={() => removeFavorite(proj.id)}
                                        >
                                            ❌ Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
