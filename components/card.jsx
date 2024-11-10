// components/card.jsx
export function Card({ title, children }) {
    return (
        <div className="p-4 shadow-md rounded-md bg-white">
            {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
            {children}
        </div>
    );
}
