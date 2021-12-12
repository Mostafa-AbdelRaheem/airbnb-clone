const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row  md:justify-around px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs text-gray-800 mb-6">
                <h5 className="font-bold">ABOUT</h5>
                <p>How Airbnb wrks</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800 ">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Its a pretty awesone clone</p>
            </div>

        </div>
    );
}
 
export default Footer;