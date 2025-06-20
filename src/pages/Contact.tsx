import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/Contact.css';

// TypeScript interfaces
interface Person {
  name: string;
  phone?: string;
  role?: string;
}

interface ContactSection {
  title: string;
  email: string;
  phone?: string;
  contacts: Person[];
}

const contacts: ContactSection[] = [
  {
    title: "MGOCSM Student Centre Bangalore",
    email: "mgocsmstudentcenterbangalore@gmail.com",
    phone: "+91 96337 38360",
    contacts: [
      { name: "Rev. Fr. Jacob Varghese" }
    ]
  },
  {
    title: "CHRIST MGOCSM",
    email: "mgocsmchrist@gmail.com",
    contacts: [
      { name: "Christy  Varghese Jacob", phone: "+91 7034265404", role:"Vice President-Male" },
      { name: "Jisa Ann Thomas", phone: "+91 9871625553", role:"Vice President-Female" },
      { name: "George Thomas", phone: "+91 7034320635", role:"Secretary-Male" },
      { name: "Sharon Susan Thomas", phone: "+91 9995936273", role:"Secretary-Female" },
      { name: "Jerin M George", phone: "+91 9562719063", role:"Choir Head-Male" },
      { name: "Sarah Iype", phone: "+91 8547800631", role:"Choir Head-Female" }

    ]
  }
];

const Contact: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="contactMainContainer">
        <h1>Contact Us</h1>

        <div className="contactUs-Container">
          {contacts.map((section, idx) => (
            <div className="contactSection" key={idx}>
              <h2>{section.title}</h2>
              <p><strong>Email:</strong> {section.email}</p>
             {section?.phone && <p><strong>Phone:</strong> {section.phone}</p>}

              <div className="contactPeopleList">
                {section.contacts.map((person, index) => (
                  <div className="contactPerson" key={index}>
                    <p>
                      <strong>{person.name}</strong>
                      {person.role && <> ({person.role})</>}
                      {person.phone && <> – {person.phone}</>}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
