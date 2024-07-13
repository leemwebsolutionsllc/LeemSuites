document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const filterCity = document.getElementById('filterCity');
    const filterState = document.getElementById('filterState');
    const filterName = document.getElementById('filterName');
    const hotelList = document.getElementById('hotels-container');
    const selectedStateElement = document.getElementById('selected-state');

    const hotels = [
        { name: 'Montgomery Haven', city: 'Montgomery', state: 'Alabama', address: '123 Main St, Montgomery, AL 36104', description: 'A luxurious stay in the heart of Montgomery with top-notch amenities and service.', img: 'Montgomery.jpg' },
        { name: 'Birmingham Bliss', city: 'Birmingham', state: 'Alabama', address: '456 Oak St, Birmingham, AL 35203', description: 'Experience the vibrant culture of Birmingham with a stay at our centrally located hotel.', img: 'Birmingham.jpg' },
        { name: 'Juneau Junction', city: 'Juneau', state: 'Alaska', address: '789 Pine St, Juneau, AK 99801', description: 'A perfect retreat in the heart of Juneau, offering breathtaking views and cozy accommodations.', img: 'Juneau.jpg' },
        { name: 'Anchorage Oasis', city: 'Anchorage', state: 'Alaska', address: '101 Maple St, Anchorage, AK 99501', description: 'Discover the beauty of Anchorage while enjoying the comfort and luxury of our hotel.', img: 'Anchorage.jpg' },
        { name: 'Phoenix Pavilion', city: 'Phoenix', state: 'Arizona', address: '202 Cedar St, Phoenix, AZ 85001', description: 'Stay at the Phoenix Pavilion and enjoy world-class amenities and service in the heart of Phoenix.', img: 'Phoenix.jpg' },
        { name: 'Tucson Tranquility', city: 'Tucson', state: 'Arizona', address: '303 Birch St, Tucson, AZ 85701', description: 'Relax and unwind at Tucson Tranquility, offering serene surroundings and modern comforts.', img: 'Tucson.jpg' },
        { name: 'Little Rock Lodge', city: 'Little Rock', state: 'Arkansas', address: '404 Elm St, Little Rock, AR 72201', description: 'Experience southern hospitality at its finest at Little Rock Lodge, your home away from home.', img: 'LittleRock.jpg' },
        { name: 'Fayetteville Fort', city: 'Fayetteville', state: 'Arkansas', address: '505 Spruce St, Fayetteville, AR 72701', description: 'Enjoy a blend of comfort and style at Fayetteville Fort, your ideal destination in Fayetteville.', img: 'Fayetteville.jpg' },
        { name: 'Sacramento Central', city: 'Sacramento', state: 'California', address: '606 Pine St, Sacramento, CA 95814', description: 'Discover the charm of Sacramento at Sacramento Central, offering luxury and convenience.', img: 'Sacramento.jpg' },
        { name: 'LA Luxury Inn', city: 'Los Angeles', state: 'California', address: '707 Sunset Blvd, Los Angeles, CA 90028', description: 'Experience the glitz and glamour of Los Angeles at LA Luxury Inn, your ultimate getaway.', img: 'LA.jpg' },
        { name: 'Denver Delight', city: 'Denver', state: 'Colorado', address: '808 Broadway St, Denver, CO 80203', description: 'Enjoy the vibrant culture of Denver with a stay at Denver Delight, offering premium amenities.', img: 'Denver.jpg' },
        { name: 'Boulder Bliss', city: 'Boulder', state: 'Colorado', address: '909 Pearl St, Boulder, CO 80302', description: 'Find tranquility and luxury at Boulder Bliss, nestled in the scenic beauty of Boulder.', img: 'Boulder.jpg' },
        { name: 'Hartford Haven', city: 'Hartford', state: 'Connecticut', address: '1010 Capitol Ave, Hartford, CT 06106', description: 'Enjoy a perfect blend of luxury and comfort at Hartford Haven, your gateway to Hartford.', img: 'Hartford.jpg' },
        { name: 'New Haven Nook', city: 'New Haven', state: 'Connecticut', address: '1111 Elm St, New Haven, CT 06510', description: 'Explore the historic charm of New Haven with a stay at New Haven Nook, offering unmatched comfort.', img: 'NewHaven.jpg' },
        { name: 'Dover Dwellings', city: 'Dover', state: 'Delaware', address: '1212 State St, Dover, DE 19901', description: 'Stay at Dover Dwellings for a comfortable and relaxing experience in the heart of Dover.', img: 'Dover.jpg' },
        { name: 'Wilmington Wonder', city: 'Wilmington', state: 'Delaware', address: '1313 Market St, Wilmington, DE 19801', description: 'Discover the wonders of Wilmington with a stay at Wilmington Wonder, offering premium services.', img: 'Wilmington.jpg' },
        { name: 'Tallahassee Treat', city: 'Tallahassee', state: 'Florida', address: '1414 Park Ave, Tallahassee, FL 32301', description: 'Experience the best of Tallahassee at Tallahassee Treat, offering luxurious accommodations and amenities.', img: 'Tallahassee.jpg' },
        { name: 'Miami Marvel', city: 'Miami', state: 'Florida', address: '1515 Ocean Dr, Miami, FL 33139', description: 'Marvel at the beauty of Miami with a stay at Miami Marvel, your luxurious escape in the heart of the city.', img: 'Miami.jpg' },
        { name: 'Atlanta Ambiance', city: 'Atlanta', state: 'Georgia', address: '1616 Peachtree St, Atlanta, GA 30309', description: 'Discover the unique ambiance of Atlanta at Atlanta Ambiance, offering world-class services and amenities.', img: 'Atlanta.jpg' },
        { name: 'Savannah Serenity', city: 'Savannah', state: 'Georgia', address: '1717 Bay St, Savannah, GA 31401', description: 'Find your serenity at Savannah Serenity, nestled in the historic district of Savannah with unmatched comfort and style.', img: 'Savannah.jpg' },
        { name: 'Honolulu Harmony', city: 'Honolulu', state: 'Hawaii', address: '1818 Waikiki St, Honolulu, HI 96815', description: 'Experience harmony and luxury at Honolulu Harmony, your perfect Hawaiian getaway.', img: 'Honolulu.jpg' },
        { name: 'Hilo Haven', city: 'Hilo', state: 'Hawaii', address: '1919 Banyan Dr, Hilo, HI 96720', description: 'Discover the tranquility of Hilo at Hilo Haven, offering unmatched views and exceptional service.', img: 'Hilo.jpg' },
        { name: 'Boise Bliss', city: 'Boise', state: 'Idaho', address: '2020 Main St, Boise, ID 83702', description: 'Enjoy a blissful stay in Boise at Boise Bliss, offering modern comforts and exceptional service.', img: 'Boise.jpg' },
        { name: 'Idaho Falls Inn', city: 'Idaho Falls', state: 'Idaho', address: '2121 Grandview Dr, Idaho Falls, ID 83402', description: 'Experience the beauty of Idaho Falls with a stay at Idaho Falls Inn, your premier choice for luxury accommodations.', img: 'IdahoFalls.jpg' },
        { name: 'Springfield Suites', city: 'Springfield', state: 'Illinois', address: '2222 Capitol Ave, Springfield, IL 62701', description: 'Discover comfort and luxury at Springfield Suites, offering top-notch amenities and exceptional service in Springfield.', img: 'Springfield.jpg' },
        { name: 'Chicago Central', city: 'Chicago', state: 'Illinois', address: '2323 Michigan Ave, Chicago, IL 60616', description: 'Stay in the heart of Chicago at Chicago Central, offering luxury and convenience in the Windy City.', img: 'Chicago.jpg' },
        { name: 'Indianapolis Inn', city: 'Indianapolis', state: 'Indiana', address: '2424 Meridian St, Indianapolis, IN 46204', description: 'Experience the best of Indianapolis with a stay at Indianapolis Inn, offering comfort and luxury in the heart of the city.', img: 'Indianapolis.jpg' },
        { name: 'Fort Wayne Fort', city: 'Fort Wayne', state: 'Indiana', address: '2525 Jefferson Blvd, Fort Wayne, IN 46802', description: 'Stay at Fort Wayne Fort for a perfect blend of comfort and luxury, ideal for both business and leisure travelers.', img: 'FortWayne.jpg' },
        { name: 'Des Moines Delight', city: 'Des Moines', state: 'Iowa', address: '2626 Grand Ave, Des Moines, IA 50312', description: 'Experience the delight of Des Moines at Des Moines Delight, offering luxurious accommodations and exceptional service.', img: 'DesMoines.jpg' },
        { name: 'Cedar Rapids Rest', city: 'Cedar Rapids', state: 'Iowa', address: '2727 1st Ave, Cedar Rapids, IA 52402', description: 'Find your perfect rest at Cedar Rapids Rest, offering comfort and convenience in Cedar Rapids.', img: 'CedarRapids.jpg' },
        { name: 'Topeka Tranquil', city: 'Topeka', state: 'Kansas', address: '2828 Topeka Blvd, Topeka, KS 66611', description: 'Experience tranquility in Topeka with a stay at Topeka Tranquil, offering modern amenities and exceptional service.', img: 'Topeka.jpg' },
        { name: 'Wichita Wonder', city: 'Wichita', state: 'Kansas', address: '2929 Wichita St, Wichita, KS 67202', description: 'Discover the wonders of Wichita with a stay at Wichita Wonder, your perfect choice for luxury accommodations.', img: 'Wichita.jpg' },
        { name: 'Frankfort Fort', city: 'Frankfort', state: 'Kentucky', address: '3030 Capitol Ave, Frankfort, KY 40601', description: 'Enjoy a luxurious stay in Frankfort at Frankfort Fort, offering modern amenities and exceptional service.', img: 'Frankfort.jpg' },
        { name: 'Louisville Lodge', city: 'Louisville', state: 'Kentucky', address: '3131 Louisville Rd, Louisville, KY 40202', description: 'Discover the charm of Louisville with a stay at Louisville Lodge, offering luxury and convenience.', img: 'Louisville.jpg' },
        { name: 'Baton Rouge Retreat', city: 'Baton Rouge', state: 'Louisiana', address: '3232 Government St, Baton Rouge, LA 70806', description: 'Stay at Baton Rouge Retreat for a luxurious and relaxing experience in the heart of Baton Rouge.', img: 'BatonRouge.jpg' },
        { name: 'New Orleans Oasis', city: 'New Orleans', state: 'Louisiana', address: '3333 Canal St, New Orleans, LA 70119', description: 'Discover the vibrant culture of New Orleans with a stay at New Orleans Oasis, offering exceptional service and luxury accommodations.', img: 'NewOrleans.jpg' },
        { name: 'Augusta Ambiance', city: 'Augusta', state: 'Maine', address: '3434 State St, Augusta, ME 04330', description: 'Experience the unique ambiance of Augusta at Augusta Ambiance, offering luxurious accommodations and modern amenities.', img: 'Augusta.jpg' },
        { name: 'Portland Place', city: 'Portland', state: 'Maine', address: '3535 Congress St, Portland, ME 04101', description: 'Discover the charm of Portland with a stay at Portland Place, offering luxury and comfort in the heart of the city.', img: 'Portland.jpg' },
        { name: 'Annapolis Abode', city: 'Annapolis', state: 'Maryland', address: '3636 Main St, Annapolis, MD 21401', description: 'Stay at Annapolis Abode for a luxurious and relaxing experience in the heart of Annapolis.', img: 'Annapolis.jpg' },
        { name: 'Baltimore Bliss', city: 'Baltimore', state: 'Maryland', address: '3737 Charles St, Baltimore, MD 21201', description: 'Experience the best of Baltimore with a stay at Baltimore Bliss, offering luxurious accommodations and modern amenities.', img: 'Baltimore.jpg' },
        { name: 'Boston Bliss', city: 'Boston', state: 'Massachusetts', address: '3838 Beacon St, Boston, MA 02108', description: 'Stay in the heart of Boston at Boston Bliss, offering luxury and convenience in the historic city.', img: 'Boston.jpg' },
        { name: 'Worcester Wonder', city: 'Worcester', state: 'Massachusetts', address: '3939 Main St, Worcester, MA 01608', description: 'Discover the wonders of Worcester with a stay at Worcester Wonder, offering luxurious accommodations and exceptional service.', img: 'Worcester.jpg' },
        { name: 'Lansing Lodge', city: 'Lansing', state: 'Michigan', address: '4040 Capitol Ave, Lansing, MI 48933', description: 'Experience comfort and luxury at Lansing Lodge, offering modern amenities and exceptional service in Lansing.', img: 'Lansing.jpg' },
        { name: 'Detroit Delight', city: 'Detroit', state: 'Michigan', address: '4141 Woodward Ave, Detroit, MI 48201', description: 'Stay in the heart of Detroit at Detroit Delight, offering luxury and convenience in the Motor City.', img: 'Detroit.jpg' },
        { name: 'Saint Paul Suites', city: 'Saint Paul', state: 'Minnesota', address: '4242 Summit Ave, Saint Paul, MN 55105', description: 'Discover luxury and comfort at Saint Paul Suites, offering modern amenities and exceptional service in Saint Paul.', img: 'SaintPaul.jpg' },
        { name: 'Minneapolis Marvel', city: 'Minneapolis', state: 'Minnesota', address: '4343 Hennepin Ave, Minneapolis, MN 55408', description: 'Stay in the heart of Minneapolis at Minneapolis Marvel, offering luxury and convenience in the vibrant city.', img: 'Minneapolis.jpg' },
        { name: 'Jackson Jewel', city: 'Jackson', state: 'Mississippi', address: '4444 Capitol St, Jackson, MS 39201', description: 'Discover the jewel of Jackson with a stay at Jackson Jewel, offering luxurious accommodations and modern amenities.', img: 'Jackson.jpg' },
        { name: 'Gulfport Grand', city: 'Gulfport', state: 'Mississippi', address: '4545 Beach Blvd, Gulfport, MS 39501', description: 'Experience the grandeur of Gulfport with a stay at Gulfport Grand, offering exceptional service and luxury accommodations.', img: 'Gulfport.jpg' },
        { name: 'Jefferson City Joy', city: 'Jefferson City', state: 'Missouri', address: '4646 Capitol Ave, Jefferson City, MO 65101', description: 'Discover the joy of Jefferson City with a stay at Jefferson City Joy, offering luxurious accommodations and modern amenities.', img: 'JeffersonCity.jpg' },
        { name: 'Kansas City Comfort', city: 'Kansas City', state: 'Missouri', address: '4747 Main St, Kansas City, MO 64111', description: 'Experience the comfort of Kansas City with a stay at Kansas City Comfort, offering exceptional service and modern amenities.', img: 'KansasCity.jpg' },
        { name: 'Helena Haven', city: 'Helena', state: 'Montana', address: '4848 Capitol St, Helena, MT 59601', description: 'Find your perfect haven in Helena with a stay at Helena Haven, offering luxury and comfort in the heart of Montana.', img: 'Helen.jpg' },
        { name: 'Billings Bliss', city: 'Billings', state: 'Montana', address: '4949 Grand Ave, Billings, MT 59101', description: 'Experience bliss in Billings with a stay at Billings Bliss, offering luxurious accommodations and modern amenities.', img: 'Billings.jpg' },
        { name: 'Lincoln Luxury', city: 'Lincoln', state: 'Nebraska', address: '5050 Capitol St, Lincoln, NE 68508', description: 'Discover luxury in Lincoln with a stay at Lincoln Luxury, offering exceptional service and modern amenities.', img: 'Lincoln.jpg' },
        { name: 'Omaha Oasis', city: 'Omaha', state: 'Nebraska', address: '5151 Dodge St, Omaha, NE 68132', description: 'Find your perfect oasis in Omaha with a stay at Omaha Oasis, offering luxury and comfort in the heart of the city.', img: 'Omaha.jpg' },
        { name: 'Carson City Comfort', city: 'Carson City', state: 'Nevada', address: '5252 Capitol St, Carson City, NV 89701', description: 'Experience comfort and luxury in Carson City with a stay at Carson City Comfort, offering modern amenities and exceptional service.', img: 'CarsonCity.jpg' },
        { name: 'Las Vegas Luxury', city: 'Las Vegas', state: 'Nevada', address: '5353 Las Vegas Blvd, Las Vegas, NV 89101', description: 'Stay in the heart of Las Vegas at Las Vegas Luxury, offering exceptional service and luxurious accommodations.', img: 'LasVegas.jpg' },
        { name: 'Concord Comfort', city: 'Concord', state: 'New Hampshire', address: '5454 Capitol St, Concord, NH 03301', description: 'Discover comfort and luxury in Concord with a stay at Concord Comfort, offering modern amenities and exceptional service.', img: 'Concord.jpg' },
        { name: 'Manchester Marvel', city: 'Manchester', state: 'New Hampshire', address: '5555 Elm St, Manchester, NH 03101', description: 'Experience the marvel of Manchester with a stay at Manchester Marvel, offering luxurious accommodations and modern amenities.', img: 'Manchester.jpg' },
        { name: 'Trenton Tranquil', city: 'Trenton', state: 'New Jersey', address: '5656 State St, Trenton, NJ 08608', description: 'Find tranquility in Trenton with a stay at Trenton Tranquil, offering exceptional service and modern amenities.', img: 'Trenton.jpg' },
        { name: 'Newark Nook', city: 'Newark', state: 'New Jersey', address: '5757 Market St, Newark, NJ 07102', description: 'Discover the perfect nook in Newark with a stay at Newark Nook, offering luxury and comfort in the heart of the city.', img: 'Newark.jpg' },
        { name: 'Santa Fe Serenity', city: 'Santa Fe', state: 'New Mexico', address: '5858 Canyon Rd, Santa Fe, NM 87501', description: 'Find serenity in Santa Fe with a stay at Santa Fe Serenity, offering luxurious accommodations and exceptional service.', img: 'SantaFe.jpg' },
        { name: 'Albuquerque Abode', city: 'Albuquerque', state: 'New Mexico', address: '5959 Central Ave, Albuquerque, NM 87102', description: 'Experience the best of Albuquerque with a stay at Albuquerque Abode, offering modern amenities and exceptional service.', img: 'Albuquerque.jpg' },
        { name: 'Albany Ambiance', city: 'Albany', state: 'New York', address: '6060 State St, Albany, NY 12207', description: 'Discover the unique ambiance of Albany with a stay at Albany Ambiance, offering luxury and comfort in the heart of the city.', img: 'Albany.jpg' },
        { name: 'NYC Nest', city: 'New York', state: 'New York', address: '6161 Broadway, New York, NY 10019', description: 'Stay in the heart of New York City at NYC Nest, offering luxury and convenience in the bustling metropolis.', img: 'NYC.jpg' },
        { name: 'Charlotte Charm', city: 'Charlotte', state: 'North Carolina', address: '6262 Trade St, Charlotte, NC 28202', description: 'Experience the charm of Charlotte with a stay at Charlotte Charm, offering modern amenities and exceptional service.', img: 'Raleigh.jpg' },
        { name: 'Raleigh Retreat', city: 'Raleigh', state: 'North Carolina', address: '6363 Fayetteville St, Raleigh, NC 27601', description: 'Find your perfect retreat in Raleigh with a stay at Raleigh Retreat, offering luxurious accommodations and exceptional service.', img: 'Charlotte.jpg' },
        { name: 'Bismarck Bliss', city: 'Bismarck', state: 'North Dakota', address: '6464 State St, Bismarck, ND 58501', description: 'Discover bliss in Bismarck with a stay at Bismarck Bliss, offering luxury and comfort in the heart of North Dakota.', img: 'Bismarck.jpg' },
        { name: 'Fargo Fort', city: 'Fargo', state: 'North Dakota', address: '6565 Broadway, Fargo, ND 58102', description: 'Experience the fort of Fargo with a stay at Fargo Fort, offering modern amenities and exceptional service.', img: 'Fargo.jpg' },
        { name: 'Columbus Comfort', city: 'Columbus', state: 'Ohio', address: '6666 High St, Columbus, OH 43215', description: 'Find comfort in Columbus with a stay at Columbus Comfort, offering luxurious accommodations and exceptional service.', img: 'Columbus.jpg' },
        { name: 'Cleveland Central', city: 'Cleveland', state: 'Ohio', address: '6767 Euclid Ave, Cleveland, OH 44115', description: 'Stay in the heart of Cleveland at Cleveland Central, offering luxury and convenience in the bustling city.', img: 'Cleveland.jpg' },
        { name: 'Oklahoma City Oasis', city: 'Oklahoma City', state: 'Oklahoma', address: '6868 Broadway, Oklahoma City, OK 73102', description: 'Discover the oasis of Oklahoma City with a stay at Oklahoma City Oasis, offering modern amenities and exceptional service.', img: 'OklahomaCity.jpg' },
        { name: 'Tulsa Tranquil', city: 'Tulsa', state: 'Oklahoma', address: '6969 Main St, Tulsa, OK 74103', description: 'Find tranquility in Tulsa with a stay at Tulsa Tranquil, offering luxurious accommodations and modern amenities.', img: 'Tulsa.jpg' },
        { name: 'Salem Serenity', city: 'Salem', state: 'Oregon', address: '7070 State St, Salem, OR 97301', description: 'Experience serenity in Salem with a stay at Salem Serenity, offering luxury and comfort in the heart of Oregon.', img: 'Salem.jpg' },
        { name: 'Portland Place', city: 'Portland', state: 'Oregon', address: '7171 Broadway, Portland, OR 97205', description: 'Discover the charm of Portland with a stay at Portland Place, offering modern amenities and exceptional service.', img: 'Portland.jpg' },
        { name: 'Harrisburg Haven', city: 'Harrisburg', state: 'Pennsylvania', address: '7272 State St, Harrisburg, PA 17101', description: 'Stay at Harrisburg Haven for a luxurious and relaxing experience in the heart of Harrisburg.', img: 'Harrisburg.jpg' },
        { name: 'Philadelphia Fort', city: 'Philadelphia', state: 'Pennsylvania', address: '7373 Market St, Philadelphia, PA 19104', description: 'Experience the fort of Philadelphia with a stay at Philadelphia Fort, offering luxury and convenience in the bustling city.', img: 'Philadelphia.jpg' },
        { name: 'Providence Place', city: 'Providence', state: 'Rhode Island', address: '7474 State St, Providence, RI 02903', description: 'Discover the charm of Providence with a stay at Providence Place, offering modern amenities and exceptional service.', img: 'Providence.jpg' },
        { name: 'Newport Nook', city: 'Newport', state: 'Rhode Island', address: '7575 Broadway, Newport, RI 02840', description: 'Find your perfect nook in Newport with a stay at Newport Nook, offering luxury and comfort in the heart of the city.', img: 'Warwick.jpg' },
        { name: 'Columbia Comfort', city: 'Columbia', state: 'South Carolina', address: '7676 Main St, Columbia, SC 29201', description: 'Experience comfort in Columbia with a stay at Columbia Comfort, offering luxurious accommodations and modern amenities.', img: 'Columbia.jpg' },
        { name: 'Charleston Charm', city: 'Charleston', state: 'South Carolina', address: '7777 King St, Charleston, SC 29401', description: 'Discover the charm of Charleston with a stay at Charleston Charm, offering modern amenities and exceptional service.', img: 'Charleston.jpg' },
        { name: 'Sioux Falls Serenity', city: 'Sioux Falls', state: 'South Dakota', address: '7878 State St, Sioux Falls, SD 57104', description: 'Find serenity in Sioux Falls with a stay at Sioux Falls Serenity, offering luxurious accommodations and exceptional service.', img: 'Pierre.jpg' },
        { name: 'Rapid City Rest', city: 'Rapid City', state: 'South Dakota', address: '7979 Main St, Rapid City, SD 57701', description: 'Experience rest and relaxation in Rapid City with a stay at Rapid City Rest, offering modern amenities and exceptional service.', img: 'SiouxFalls.jpg' },
        { name: 'Nashville Nest', city: 'Nashville', state: 'Tennessee', address: '8080 Broadway, Nashville, TN 37203', description: 'Stay in the heart of Nashville at Nashville Nest, offering luxury and convenience in the bustling city.', img: 'Nashville.jpg' },
        { name: 'Memphis Marvel', city: 'Memphis', state: 'Tennessee', address: '8181 Beale St, Memphis, TN 38103', description: 'Discover the marvel of Memphis with a stay at Memphis Marvel, offering luxurious accommodations and modern amenities.', img: 'Memphis.jpg' },
        { name: 'Austin Ambiance', city: 'Austin', state: 'Texas', address: '8282 Congress Ave, Austin, TX 78701', description: 'Experience the unique ambiance of Austin with a stay at Austin Ambiance, offering luxury and comfort in the heart of Texas.', img: 'Austin.jpg' },
        { name: 'Houston Haven', city: 'Houston', state: 'Texas', address: '8383 Main St, Houston, TX 77002', description: 'Find your perfect haven in Houston with a stay at Houston Haven, offering modern amenities and exceptional service.', img: 'Houston.jpg' },
        { name: 'Salt Lake City Serenity', city: 'Salt Lake City', state: 'Utah', address: '8484 State St, Salt Lake City, UT 84111', description: 'Discover serenity in Salt Lake City with a stay at Salt Lake City Serenity, offering luxurious accommodations and modern amenities.', img: 'SaltLake.jpg' },
        { name: 'Provo Place', city: 'Provo', state: 'Utah', address: '8585 University Ave, Provo, UT 84601', description: 'Experience the charm of Provo with a stay at Provo Place, offering modern amenities and exceptional service.', img: 'Provo.jpg' },
        { name: 'Montpelier Marvel', city: 'Montpelier', state: 'Vermont', address: '8686 State St, Montpelier, VT 05602', description: 'Stay in the heart of Montpelier at Montpelier Marvel, offering luxury and convenience in the historic city.', img: 'Montpelier.jpg' },
        { name: 'Burlington Bliss', city: 'Burlington', state: 'Vermont', address: '8787 Church St, Burlington, VT 05401', description: 'Discover bliss in Burlington with a stay at Burlington Bliss, offering luxurious accommodations and modern amenities.', img: 'Burlington.jpg' },
        { name: 'Richmond Retreat', city: 'Richmond', state: 'Virginia', address: '8888 Broad St, Richmond, VA 23219', description: 'Find your perfect retreat in Richmond with a stay at Richmond Retreat, offering luxurious accommodations and exceptional service.', img: 'Richmond.jpg' },
        { name: 'Virginia Beach Vista', city: 'Virginia Beach', state: 'Virginia', address: '8989 Atlantic Ave, Virginia Beach, VA 23451', description: 'Experience the best of Virginia Beach with a stay at Virginia Beach Vista, offering modern amenities and exceptional service.', img: 'VirginiaBeach.jpg' },
        { name: 'Seattle Serenity', city: 'Seattle', state: 'Washington', address: '9090 Pike St, Seattle, WA 98101', description: 'Stay in the heart of Seattle at Seattle Serenity, offering luxury and convenience in the bustling city.', img: 'Olympia.jpg' },
        { name: 'Spokane Splendor', city: 'Spokane', state: 'Washington', address: '9191 Main St, Spokane, WA 99201', description: 'Discover the splendor of Spokane with a stay at Spokane Splendor, offering luxurious accommodations and modern amenities.', img: 'Seattle.jpg' },
        { name: 'Charleston Charm', city: 'Charleston', state: 'West Virginia', address: '9292 State St, Charleston, WV 25301', description: 'Experience the charm of Charleston with a stay at Charleston Charm, offering luxurious accommodations and exceptional service.', img: 'Charleston.jpg' },
        { name: 'Huntington Haven', city: 'Huntington', state: 'West Virginia', address: '9393 Main St, Huntington, WV 25701', description: 'Find your perfect haven in Huntington with a stay at Huntington Haven, offering modern amenities and luxury accommodations.', img: 'Huntington.jpg' },
        { name: 'Madison Marvel', city: 'Madison', state: 'Wisconsin', address: '9494 State St, Madison, WI 53703', description: 'Discover the marvel of Madison with a stay at Madison Marvel, offering luxurious accommodations and modern amenities.', img: 'Madison.jpg' },
        { name: 'Milwaukee Magic', city: 'Milwaukee', state: 'Wisconsin', address: '9595 Water St, Milwaukee, WI 53202', description: 'Experience the magic of Milwaukee with a stay at Milwaukee Magic, offering luxury and convenience in the heart of the city.', img: 'Milwaukee.jpg' },
        { name: 'Cheyenne Comfort', city: 'Cheyenne', state: 'Wyoming', address: '9696 Capitol Ave, Cheyenne, WY 82001', description: 'Find comfort in Cheyenne with a stay at Cheyenne Comfort, offering modern amenities and exceptional service.', img: 'Cheyenne.jpg' },
        { name: 'Jackson Hole Haven', city: 'Jackson Hole', state: 'Wyoming', address: '9797 Broadway, Jackson Hole, WY 83001', description: 'Discover the beauty of Jackson Hole with a stay at Jackson Hole Haven, offering luxury and comfort in the heart of Wyoming.', img: 'Jackson.jpg' },
    ];

    function renderHotels(hotelsToRender) {
        hotelList.innerHTML = hotelsToRender.map(hotel => `
            <div class="col-md-12 animate-on-scroll mb-3">
                <div class="card">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${hotel.img}" class="img-fluid rounded-start" alt="${hotel.name}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${hotel.name} (${hotel.city}, ${hotel.state})</h5>
                                <p class="card-text">${hotel.address}</p>
                                <p class="card-text">${hotel.description}</p>
                                <button class="btn btn-primary book-now" data-hotel="${hotel.name}">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    function filterHotels() {
        const query = searchInput.value.toLowerCase();
        const cityFilter = filterCity.value.toLowerCase();
        const stateFilter = filterState.value.toLowerCase();
        const nameFilter = filterName.value.toLowerCase();

        const filteredHotels = hotels.filter(hotel => {
            const matchesQuery = hotel.name.toLowerCase().includes(query) ||
                                 hotel.city.toLowerCase().includes(query) ||
                                 hotel.state.toLowerCase().includes(query) ||
                                 hotel.address.toLowerCase().includes(query);

            const matchesCity = cityFilter ? hotel.city.toLowerCase().includes(cityFilter) : true;
            const matchesState = stateFilter ? hotel.state.toLowerCase().includes(stateFilter) : true;
            const matchesName = nameFilter ? hotel.name.toLowerCase().includes(nameFilter) : true;

            return matchesQuery && matchesCity && matchesState && matchesName;
        });

        renderHotels(filteredHotels);
    }

    // Check if there is a selected state in sessionStorage
    const selectedState = sessionStorage.getItem('selectedState');
    if (selectedState) {
        filterState.value = selectedState.toLowerCase();
        selectedStateElement.innerText = selectedState;
        filterHotels();
        sessionStorage.removeItem('selectedState');
    } else {
        renderHotels(hotels); // Initial render of all hotels
    }

    searchInput.addEventListener('input', filterHotels);
    filterCity.addEventListener('input', filterHotels);
    filterState.addEventListener('input', filterHotels);
    filterName.addEventListener('input', filterHotels);
});
