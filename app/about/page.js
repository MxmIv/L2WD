// app/about/page.js

export default function AboutUs() {
    return (
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>

            {/* Felicity Drever Information with Image */}
            <div className="flex flex-col md:flex-row items-center mb-10">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Felicity Drever</h2>
                    <p className="text-lg mb-2"><strong>Choreographer / Dance Artist</strong></p>
                    <p className="text-lg mb-4">
                        <strong>Specialist areas:</strong><br />
                        Wedding Industry Award-Winning First Dance Choreographer
                    </p>
                    <p className="text-lg mb-4">
                        Fellow Of Ballroom Dance (FBD)<br />
                        Fellow of Latin American Dance (FLD)<br />
                        Fellow of Freestyle Dance (FFD)
                    </p>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
                    <img
                        src="/images/Felicity.jpeg" // Replace with the correct image path
                        alt="Felicity Drever"
                        className="rounded-lg shadow-lg w-full max-w-[150px] md:max-w-[200px] lg:max-w-[250px]" // Smaller image size
                    />
                </div>
            </div>

            {/* Learn 2 Wedding Dance Information */}
            <div className="mb-10">
                <p className="text-lg mb-4">
                    Learn 2 Wedding Dance (L2WD) was founded in 2003 by Felicity Drever Mclean. Felicity trained as a
                    professional dancer, teacher, and choreographer at Edinburgh&apos;s top theatre school. Her extensive background in Ballroom &amp; Latin dance competitions and teaching, along with years of hard study, saw her awarded a Fellowship in both Latin &amp; Ballroom dance styles.
                </p>
                <p className="text-lg mb-4">
                    Combining this with her long and successful career as a choreographer, Felicity and her company L2WD have quickly become Scotland&apos;s leading first wedding dance supplier. L2WD has gone on to win Scotland&apos;s top wedding industry award, the much-coveted VOWS Award, five times now, establishing Felicity as one of Scotland&apos;s leading first dance choreographers.
                </p>
                <p className="text-lg mb-4">
                    Affordable prices, fun tuition, and a dedicated wedding dance studio in Edinburgh have kept Felicity busy, so far teaching over 5,000 couples their unique choreographed First Dance.
                </p>
                <p className="text-lg mb-4">
                    Easy phone booking, free rescheduling in advance of any lessons you can&apos;t make, and a real giggle with Felicity during lessons ensures couples get the very best service and enjoyment whilst learning.
                </p>
                <p className="text-lg">
                    Felicity works very hard to ensure your first ever dance together as a married couple is one you will both remember forever, for all the right reasons!
                </p>
            </div>
        </div>
    );
}